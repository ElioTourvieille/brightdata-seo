"use server"

import { Id } from "@/convex/_generated/dataModel";
import { auth } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";
import { ApiPath } from "@/convex/http";
import { buildPerplexityPrompt } from "@/lib/perplexity";
import retryAnalysisOnly from "./retryAnalysisOnly";

if (!process.env.BRIGHTDATA_API_KEY) {
    throw new Error("BRIGHTDATA_API_KEY is not set");
}

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
    throw new Error("NEXT_PUBLIC_CONVEX_URL is not set");
}

export default async function startScraping({
    prompt,
    existingJobId,
    country = "CH"
}: {
    prompt: string,
    existingJobId?: string,
    country: string
}) {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("User ID is required");
    }

    const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

    let jobId: string;

    if (existingJobId) {
        const retryInfo = await convex.query(api.scrapingJobs.canUseSmartRetry, {
            jobId: existingJobId as Id<"scrapingJobs">,
            userId: userId,
        });

        if (retryInfo.canRetryAnalysisOnly) {
            console.log("Using smart retry - analysis only for job", existingJobId);

            const result = await retryAnalysisOnly(existingJobId);
            if (result.ok) {
                return {
                    ok: true,
                    data: { snapshot_id: null },
                    jobId: existingJobId,
                    smartRetry: true,
                }
            } else {
                return {
                    ok: false,
                    error: result.error || "Smart retry failed",
                }
            }
        } else {
            console.log("Full retry required for job", existingJobId);
            // Retry existing job - reset it to pending status
            await convex.mutation(api.scrapingJobs.retryJob, {
                jobId: existingJobId as Id<"scrapingJobs">,
            });
            jobId = existingJobId;
        }
    } else {
        // Create new job record
        jobId = await convex.mutation(api.scrapingJobs.createScrapingJob, {
            userId: userId,
            originalPrompt: prompt,
        });
    }

    const WEBHOOK_URL = `${process.env.NEXT_PUBLIC_CONVEX_SITE_URL}${ApiPath.Webhook}?jobId=${jobId}`;
    const encodedWebhookUrl = encodeURIComponent(WEBHOOK_URL);

    const datasetId = process.env.BRIGHTDATA_DATASET_ID;
    if (!datasetId) {
        throw new Error("BRIGHTDATA_DATASET_ID is not set");
    }

    const url = `https://api.brightdata.com/datasets/v3/trigger?dataset_id=${datasetId}&endpoint=${encodedWebhookUrl}&format=json&uncompressed_webhook=true&include_errors=true`

    const perplexityPrompt = buildPerplexityPrompt(prompt);

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.BRIGHTDATA_API_KEY}`,
            },
            body: JSON.stringify({
                input: [
                    {
                        url: "https://www.perplexity.ai",
                        prompt: perplexityPrompt,
                        country: country,
                        index: 1,
                    },
                ],
                custom_output_fields: [
                    "url",
                    "prompt",
                    "answer_text",
                    "sources",
                    "citations",
                    "input",
                    "timestamp",
                ],
            }),
        });

        if (!response.ok) {
            const text = await response.text().catch(() => "")
            // Mark job as failed
            await convex.mutation(api.scrapingJobs.failJob, {
                jobId: jobId as Id<"scrapingJobs">,
                error: `HTTP ${response.status} ${response.statusText}${text ? `: ${text}` : ""}`
            })
            return {
                ok: false,
                error: `HTTP ${response.status} ${response.statusText}${text ? `: ${text}` : ""}`
            }
        }

        const data = await response.json().catch(() => null);

        // Extract snapshot ID from the response
        if (data && data.snapshot_id) {
            await convex.mutation(api.scrapingJobs.updateJobWithSnapshotId, {
                jobId: jobId as Id<"scrapingJobs">,
                snapshootId: data.snapshot_id
            })
        }

        return { ok: true, data, jobId}
    } catch (error) {
        console.error(error)
        await convex.mutation(api.scrapingJobs.failJob, {
            jobId: jobId as Id<"scrapingJobs">,
            error: error instanceof Error ? error.message : String(error)
        })
        return {
            ok: false,
            error: error instanceof Error ? error.message : String(error)
        }
    }
}
