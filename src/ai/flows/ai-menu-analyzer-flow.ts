'use server';
/**
 * @fileOverview An AI agent that analyzes restaurant menu structure, item descriptions, and sales data.
 *
 * - analyzeMenu - A function that handles the menu analysis process.
 * - AiMenuAnalyzerInput - The input type for the analyzeMenu function.
 * - AiMenuAnalyzerOutput - The return type for the analyzeMenu function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiMenuAnalyzerInputSchema = z.object({
  menuStructure: z.string().describe('The overall menu structure, including categories and item names.'),
  itemDescriptions: z.string().describe('Detailed descriptions for each menu item, including ingredients and pricing.'),
  salesData: z.string().describe('Sales performance data for each menu item, including quantity sold, revenue, cost, and profit margins.'),
});
export type AiMenuAnalyzerInput = z.infer<typeof AiMenuAnalyzerInputSchema>;

const AiMenuAnalyzerOutputSchema = z.object({
  overallAnalysis: z.string().describe('A comprehensive analysis of the menu structure, item descriptions, and sales data, highlighting strengths and weaknesses.'),
  underperformingItems: z.array(z.object({
    itemName: z.string().describe('The name of the underperforming menu item.'),
    reason: z.string().describe('The identified reason for underperformance (e.g., low sales, poor margin, unclear description).'),
    suggestion: z.string().describe('Specific suggestions to improve the item\'s performance or remove it.'),
  })).describe('A list of menu items identified as underperforming, with reasons and specific suggestions.'),
  optimizationSuggestions: z.array(z.string()).describe('General suggestions for menu optimization, such as pricing strategies, promotional ideas, or bundling opportunities.'),
  newOpportunities: z.array(z.string()).describe('Ideas for new menu items or market opportunities based on the analysis of existing data and industry trends.'),
});
export type AiMenuAnalyzerOutput = z.infer<typeof AiMenuAnalyzerOutputSchema>;

export async function analyzeMenu(input: AiMenuAnalyzerInput): Promise<AiMenuAnalyzerOutput> {
  return aiMenuAnalyzerFlow(input);
}

const aiMenuAnalyzerPrompt = ai.definePrompt({
  name: 'aiMenuAnalyzerPrompt',
  input: { schema: AiMenuAnalyzerInputSchema },
  output: { schema: AiMenuAnalyzerOutputSchema },
  prompt: `You are an expert restaurant menu analyst. Your task is to analyze the provided menu structure, item descriptions, and sales data to provide actionable insights and recommendations.

Here is the data for analysis:

Menu Structure:
{{{menuStructure}}}

Item Descriptions:
{{{itemDescriptions}}}

Sales Data:
{{{salesData}}}

Based on this information, perform a thorough analysis and output the following:
1.  An overall analysis of the menu's strengths, weaknesses, and potential areas for improvement.
2.  A list of underperforming items, including the item name, the reason for its underperformance (e.g., low sales volume, poor profit margin, confusing description, high cost of goods), and specific suggestions for improvement (e.g., repricing, ingredient changes, promotional strategy, removal).
3.  General optimization suggestions for the menu as a whole (e.g., re-categorization, cross-selling, upselling strategies, seasonality adjustments).
4.  New menu item ideas or market opportunities that could increase overall sales and profitability.

Ensure your suggestions are practical and directly actionable for a restaurant owner. Focus on increasing profitability and improving customer satisfaction.`,
});

const aiMenuAnalyzerFlow = ai.defineFlow(
  {
    name: 'aiMenuAnalyzerFlow',
    inputSchema: AiMenuAnalyzerInputSchema,
    outputSchema: AiMenuAnalyzerOutputSchema,
  },
  async (input) => {
    const { output } = await aiMenuAnalyzerPrompt(input);
    return output!;
  }
);
