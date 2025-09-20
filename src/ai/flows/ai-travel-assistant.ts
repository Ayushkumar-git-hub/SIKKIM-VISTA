'use server';

/**
 * @fileOverview An AI travel assistant chatbot for the Sikkim Tourism App.
 *
 * - aiTravelAssistant - A function that provides custom itineraries and real-time support in multiple languages.
 * - AiTravelAssistantInput - The input type for the aiTravelAssistant function.
 * - AiTravelAssistantOutput - The return type for the aiTravelAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiTravelAssistantInputSchema = z.object({
  query: z.string().describe('The tourist query.'),
  language: z.string().describe('The language of the query.').optional(),
});
export type AiTravelAssistantInput = z.infer<typeof AiTravelAssistantInputSchema>;

const AiTravelAssistantOutputSchema = z.object({
  response: z.string().describe('The response to the tourist query.'),
});
export type AiTravelAssistantOutput = z.infer<typeof AiTravelAssistantOutputSchema>;

export async function aiTravelAssistant(input: AiTravelAssistantInput): Promise<AiTravelAssistantOutput> {
  return aiTravelAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiTravelAssistantPrompt',
  input: {schema: AiTravelAssistantInputSchema},
  output: {schema: AiTravelAssistantOutputSchema},
  prompt: `You are a multilingual AI travel assistant for the Sikkim Tourism App. Your goal is to answer tourist queries, provide custom itineraries, and offer real-time support.

  {{#if language}}The user query is in {{language}}:{{/if}}
  Query: {{{query}}}
  
  Provide a helpful and informative response.`,
});

const aiTravelAssistantFlow = ai.defineFlow(
  {
    name: 'aiTravelAssistantFlow',
    inputSchema: AiTravelAssistantInputSchema,
    outputSchema: AiTravelAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
