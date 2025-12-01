"use server";

import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
    throw new Error("NEXT_PUBLIC_CONVEX_URL is not set");
}

/**
 * Retry the analysis only for a given job ID
 * @param jobId - The ID of the job to retry
 * @returns A promise that resolves to the result of the retry
 */
const retryAnalysisOnly = async (jobId: string) => {
    const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

    try {
       console.log("Starting analysis only retry for job", jobId);

       await convex.action(api.analysis.retryAnalysisOnly, {
        jobId: jobId as Id<"scrapingJobs">,
       });

       return { 
        ok: true,
        message: "Analysis retry started successfully",
       }
    } catch (error) {
        console.error("Failed to retry analysis:", error);
        
        await convex.mutation(api.scrapingJobs.failedJob, {
            jobId: jobId as Id<"scrapingJobs">,
            error: error instanceof Error ? error.message : "Failed to retry analysis",
        });
        
        return {
            ok: false,
            error: error instanceof Error ? error.message : "Failed to retry analysis",
        };
    }
}

export default retryAnalysisOnly;