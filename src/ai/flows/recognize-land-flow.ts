'use server';
/**
 * @fileOverview An AI agent for recognizing and describing landscapes from images.
 *
 * - recognizeLand - A function that handles the land recognition process.
 * - RecognizeLandInput - The input type for the recognizeLand function.
 * - RecognizeLandOutput - The return type for the recognizeLand function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecognizeLandInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a landscape, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type RecognizeLandInput = z.infer<typeof RecognizeLandInputSchema>;

const RecognizeLandOutputSchema = z.object({
  recognition: z.string().describe('A detailed description of the landscape, including geographical features, potential location, and any notable landmarks.'),
});
export type RecognizeLandOutput = z.infer<typeof RecognizeLandOutputSchema>;

export async function recognizeLand(input: RecognizeLandInput): Promise<RecognizeLandOutput> {
  return recognizeLandFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recognizeLandPrompt',
  input: {schema: RecognizeLandInputSchema},
  output: {schema: RecognizeLandOutputSchema},
  prompt: `You are a geography and travel expert specializing in the Sikkim region. Analyze the provided image. 
  
  Identify the location if possible, or describe the type of landscape (e.g., alpine meadow, terraced fields, high-altitude desert).
  
  Mention any visible landmarks, such as monasteries, mountains, lakes, or rivers. Provide interesting geographical or ecological context about what is depicted.

  Image: {{media url=photoDataUri}}`,
});

const recognizeLandFlow = ai.defineFlow(
  {
    name: 'recognizeLandFlow',
    inputSchema: RecognizeLandInputSchema,
    outputSchema: RecognizeLandOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
