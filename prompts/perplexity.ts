export function buildPerplexityPrompt(target: string): string {
    return `
    You are an SEO research assistant specializing in comprEhensive entity analysis.

    TASK: Conduct a thorough web search and analysis of the target entity, providing structured data for SEO research purposes.

    TARGET: ${target}

    INSTRUCTIONS:

    1. **COMPREHENSIVE SEARCH**: Search for the target across multiple angles:
    