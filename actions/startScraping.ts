"use server"

if (!process.env.BRIGHTDATA_API_KEY) {
    throw new Error("BRIGHTDATA_API_KEY is not set");
}

export default async function startScraping(prompt: string, url: string | undefined, country: string) {

}