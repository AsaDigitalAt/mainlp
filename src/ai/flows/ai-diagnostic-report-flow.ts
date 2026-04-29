'use server';
/**
 * @fileOverview A Genkit flow for analyzing iFood analytics screenshots and generating diagnostic reports.
 *
 * - aiDiagnosticReport - A function that initiates the AI-powered diagnostic process.
 * - AiDiagnosticReportInput - The input type for the aiDiagnosticReport function.
 * - AiDiagnosticReportOutput - The return type for the aiDiagnosticReport function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiDiagnosticReportInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A screenshot of iFood analytics dashboard, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type AiDiagnosticReportInput = z.infer<typeof AiDiagnosticReportInputSchema>;

const AiDiagnosticReportOutputSchema = z.object({
  summary: z.string().describe('A high-level summary of the diagnostic findings.'),
  issuesIdentified: z.array(z.string()).describe('A list of key financial and operational issues identified.'),
  recommendations: z.array(
    z.object({
      category: z.string().describe('The category of the recommendation (e.g., Pricing, Funnel Optimization, Cost Reduction).'),
      description: z.string().describe('A detailed description of the recommendation.'),
      actionableSteps: z.array(z.string()).describe('Specific steps the restaurant owner can take.'),
      expectedImpact: z.string().describe('The expected outcome or benefit of implementing the recommendation.'),
    })
  ).describe('A list of actionable recommendations to improve profitability.'),
});
export type AiDiagnosticReportOutput = z.infer<typeof AiDiagnosticReportOutputSchema>;

export async function aiDiagnosticReport(input: AiDiagnosticReportInput): Promise<AiDiagnosticReportOutput> {
  return aiDiagnosticReportFlow(input);
}

const aiDiagnosticReportPrompt = ai.definePrompt({
  name: 'aiDiagnosticReportPrompt',
  input: { schema: AiDiagnosticReportInputSchema },
  output: { schema: AiDiagnosticReportOutputSchema },
  prompt: `You are an expert business analyst specializing in iFood restaurant operations and profitability optimization.
Your task is to analyze the provided screenshot of an iFood analytics dashboard, identify key financial and operational metrics, compare them against industry benchmarks, and generate a personalized, actionable diagnostic report.

The report should include:
1. A high-level summary of the diagnostic findings.
2. A list of key financial and operational issues identified (e.g., low average ticket, high commission fees, low conversion rate, poor pricing strategy).
3. A list of concrete, actionable recommendations categorized by area (e.g., Pricing, Funnel Optimization, Cost Reduction, Menu Optimization). Each recommendation should include: a detailed description, specific actionable steps, and the expected impact on profitability or efficiency.

Focus on providing clear, practical advice that a restaurant owner can immediately implement to stop losing money and improve their profit margins.

iFood Analytics Screenshot: {{media url=photoDataUri}}`,
});

const aiDiagnosticReportFlow = ai.defineFlow(
  {
    name: 'aiDiagnosticReportFlow',
    inputSchema: AiDiagnosticReportInputSchema,
    outputSchema: AiDiagnosticReportOutputSchema,
  },
  async (input) => {
    const { output } = await aiDiagnosticReportPrompt(input);
    if (!output) {
      throw new Error('Failed to generate diagnostic report.');
    }
    return output;
  }
);
