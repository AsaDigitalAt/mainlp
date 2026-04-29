'use server';

/**
 * @fileOverview A Genkit flow for an AI-powered price calculator that helps restaurant owners determine optimal pricing for menu items.
 *
 * - calculateOptimalMenuPricing - A function that handles the optimal menu pricing calculation process.
 * - AiPriceCalculatorInput - The input type for the calculateOptimalMenuPricing function.
 * - AiPriceCalculatorOutput - The return type for the calculateOptimalMenuPricing function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema
const AiPriceCalculatorInputSchema = z.object({
  menuItems: z.array(z.object({
    itemName: z.string().describe('The name of the menu item.'),
    estimatedServingsPerMonth: z.number().positive().min(1).describe('Estimated number of servings sold per month for this item.'),
    ingredientCosts: z.array(z.object({
      name: z.string().describe('Name of the ingredient.'),
      costPerUnit: z.number().positive().describe('Cost of one unit of the ingredient.'),
      unitsRequiredPerServing: z.number().positive().describe('Number of units of this ingredient required for one serving of the menu item.'),
    })).describe('Detailed ingredient costs for one serving of this menu item.'),
    preparationTimeMinutes: z.number().positive().describe('Estimated preparation time in minutes for one serving of this menu item.'),
  })).describe('List of menu items with their associated costs.'),
  monthlyFixedCosts: z.object({
    rent: z.number().min(0).default(0).describe('Monthly rent cost.'),
    salaries: z.number().min(0).default(0).describe('Total monthly salaries for staff.'),
    utilities: z.number().min(0).default(0).describe('Monthly utility costs (electricity, water, gas).'),
    marketing: z.number().min(0).default(0).describe('Monthly marketing expenses.'),
    otherFixedCosts: z.number().min(0).default(0).describe('Any other fixed monthly costs.'),
  }).describe('Total fixed operational costs per month.'),
  averageHourlyLaborCost: z.number().positive().describe('Average labor cost per hour for all staff involved in food preparation.'),
  desiredProfitMarginPercentage: z.number().min(0).max(100).describe('Desired profit margin percentage (e.g., 20 for 20%).'),
}).describe('Input for calculating optimal menu pricing.');

export type AiPriceCalculatorInput = z.infer<typeof AiPriceCalculatorInputSchema>;

// Output Schema
const AiPriceCalculatorOutputSchema = z.object({
  menuItemPricing: z.array(z.object({
    itemName: z.string().describe('The name of the menu item.'),
    recommendedPrice: z.number().positive().describe('The AI-recommended selling price for this menu item.'),
    costOfGoodsSoldPerServing: z.number().describe('The total cost of ingredients for one serving of this menu item.'),
    laborCostPerServing: z.number().describe('The estimated labor cost per serving for this menu item.'),
    fixedCostAllocationPerServing: z.number().describe('The allocated portion of monthly fixed costs for one serving of this menu item.'),
    totalCostPerServing: z.number().describe('The total cost (COGS + Labor + Fixed Cost Allocation) per serving.'),
    achievedProfitMarginPercentage: z.number().describe('The profit margin percentage achieved with the recommended price.'),
    explanation: z.string().describe('A detailed explanation for the recommended price, including cost breakdown and how it aligns with the desired profit margin.'),
  })).describe('Recommended pricing and cost breakdown for each menu item.'),
  overallPricingStrategySummary: z.string().describe('A summary of the overall pricing strategy and its potential impact on profitability, considering all menu items and overall costs.'),
  warnings: z.array(z.string()).optional().describe('Any warnings or considerations regarding the input data or calculated prices, such as very high costs or low estimated sales affecting profitability.'),
}).describe('Output containing optimal pricing recommendations and analysis.');

export type AiPriceCalculatorOutput = z.infer<typeof AiPriceCalculatorOutputSchema>;

export async function calculateOptimalMenuPricing(input: AiPriceCalculatorInput): Promise<AiPriceCalculatorOutput> {
  return aiPriceCalculatorFlow(input);
}

const aiPriceCalculatorPrompt = ai.definePrompt({
  name: 'aiPriceCalculatorPrompt',
  input: {schema: AiPriceCalculatorInputSchema},
  output: {schema: AiPriceCalculatorOutputSchema},
  prompt: `You are an expert restaurant financial analyst and pricing strategist. Your goal is to calculate the optimal selling price for each menu item to achieve a desired profit margin, considering all provided costs.

Follow these steps for each menu item:
1.  **Calculate Cost of Goods Sold (COGS) per serving:** Sum the (costPerUnit * unitsRequiredPerServing) for all ingredients of the item.
2.  **Calculate Labor Cost per serving:** Multiply (preparationTimeMinutes / 60) by averageHourlyLaborCost.
3.  **Allocate Fixed Costs per serving:**
    a. Calculate the total estimated monthly servings across ALL menu items: Sum all 'estimatedServingsPerMonth' from the 'menuItems' array.
    b. Calculate the total monthly fixed costs: Sum 'rent', 'salaries', 'utilities', 'marketing', and 'otherFixedCosts' from 'monthlyFixedCosts'.
    c. Calculate the fixed cost per serving unit: total monthly fixed costs / total estimated monthly servings. If total estimated monthly servings is zero, fixed cost per serving unit is zero.
    d. The 'fixedCostAllocationPerServing' for an item is this 'fixed cost per serving unit' calculated in 3c.
4.  **Calculate Total Cost per serving:** COGS per serving + Labor Cost per serving + Fixed Cost Allocation per serving.
5.  **Calculate Recommended Price:** Use the formula: Total Cost per serving / (1 - (desiredProfitMarginPercentage / 100)). Ensure the desired profit margin percentage is handled correctly (e.g., 20% should be 0.20 in the formula). If the denominator is zero or negative (e.g., 100% or more desired profit margin from cost), the recommended price should be total cost per serving (break-even) or a warning should be issued.
6.  **Calculate Achieved Profit Margin Percentage:** ((Recommended Price - Total Cost per serving) / Recommended Price) * 100. Ensure this is a precise calculation.

Provide a detailed explanation for each item's recommended price, breaking down its COGS, labor cost, and fixed cost allocation, and how the recommended price aligns with the desired profit margin. Ensure all monetary values are rounded to two decimal places.

Finally, provide an 'overallPricingStrategySummary' that discusses the general implications of these prices for the restaurant's profitability and any high-level insights. Include 'warnings' if any items have unusually high costs relative to their potential selling price, if the estimated sales volume seems insufficient to cover fixed costs, or if the desired profit margin is unachievable for certain items given their costs.

**Input Data:**
Menu Items:
{{#each menuItems}}
  - Item Name: {{{itemName}}}
    Estimated Servings Per Month: {{{estimatedServingsPerMonth}}}
    Ingredient Costs:
    {{#each ingredientCosts}}
      - {{{name}}}: Cost Per Unit: {{{costPerUnit}}}, Units Required Per Serving: {{{unitsRequiredPerServing}}}
    {{/each}}
    Preparation Time Minutes: {{{preparationTimeMinutes}}}
{{/each}}

Monthly Fixed Costs:
  Rent: {{{monthlyFixedCosts.rent}}}
  Salaries: {{{monthlyFixedCosts.salaries}}}
  Utilities: {{{monthlyFixedCosts.utilities}}}
  Marketing: {{{monthlyFixedCosts.marketing}}}
  Other Fixed Costs: {{{monthlyFixedCosts.otherFixedCosts}}}

Average Hourly Labor Cost: {{{averageHourlyLaborCost}}}
Desired Profit Margin Percentage: {{{desiredProfitMarginPercentage}}}
`,
});

const aiPriceCalculatorFlow = ai.defineFlow(
  {
    name: 'aiPriceCalculatorFlow',
    inputSchema: AiPriceCalculatorInputSchema,
    outputSchema: AiPriceCalculatorOutputSchema,
  },
  async (input) => {
    const {output} = await aiPriceCalculatorPrompt(input);
    return output!;
  }
);
