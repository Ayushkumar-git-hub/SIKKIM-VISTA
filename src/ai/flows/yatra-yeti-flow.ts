'use server';

/**
 * @fileOverview A Yatra Yeti chatbot for the Sikkim Tourism App.
 *
 * - yatraYeti - A function that provides custom itineraries and real-time support in multiple languages.
 * - YatraYetiInput - The input type for the yatraYeti function.
 * - YatraYetiOutput - The return type for the yatraYeti function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const YatraYetiInputSchema = z.object({
  query: z.string().describe('The tourist query.'),
  language: z.string().describe('The language of the query.').optional(),
});
export type YatraYetiInput = z.infer<typeof YatraYetiInputSchema>;

const YatraYetiOutputSchema = z.object({
  response: z.string().describe('The response to the tourist query.'),
});
export type YatraYetiOutput = z.infer<typeof YatraYetiOutputSchema>;

export async function yatraYeti(input: YatraYetiInput): Promise<YatraYetiOutput> {
  return yatraYetiFlow(input);
}

const prompt = ai.definePrompt({
  name: 'yatraYetiPrompt',
  input: {schema: YatraYetiInputSchema},
  output: {schema: YatraYetiOutputSchema},
  prompt: `You are Yatra Yeti, a multilingual AI travel assistant for the Sikkim Explorer App. Your goal is to answer tourist queries, provide custom itineraries, and offer real-time support.

  {{#if language}}The user query is in {{language}}:{{/if}}
  Query: {{{query}}}
  
  Provide a helpful and informative response.`,
});

const yatraYetiFlow = ai.defineFlow(
  {
    name: 'yatraYetiFlow',
    inputSchema: YatraYetiInputSchema,
    outputSchema: YatraYetiOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
