'use server';
/**
 * @fileOverview An AI assistant that answers questions about admissions, application deadlines,
 * and academic programs for Colegio de San Juan de Letran - Manaoag.
 *
 * - admissionsAssistant - A function that handles prospective applicant questions.
 * - AdmissionsAssistantInput - The input type for the admissionsAssistant function.
 * - AdmissionsAssistantOutput - The return type for the admissionsAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdmissionsAssistantInputSchema = z.object({
  question: z
    .string()
    .describe(
      "The user's question about admission requirements, application deadlines, or specific academic programs for Colegio de San Juan de Letran - Manaoag."
    ),
});
export type AdmissionsAssistantInput = z.infer<typeof AdmissionsAssistantInputSchema>;

const AdmissionsAssistantOutputSchema = z.object({
  answer: z
    .string()
    .describe(
      "The AI's tailored answer to the user's question, based on provided school information."
    ),
});
export type AdmissionsAssistantOutput = z.infer<typeof AdmissionsAssistantOutputSchema>;

export async function admissionsAssistant(
  input: AdmissionsAssistantInput
): Promise<AdmissionsAssistantOutput> {
  return admissionsAssistantFlow(input);
}

// Placeholder for school information. In a real application, this would be fetched from a database or knowledge base.
const schoolInformation = `
Colegio de San Juan de Letran - Manaoag is a Catholic educational institution located in Manaoag, Pangasinan.
It is known for its Dominican excellence and aims for the formation of Christlike citizens.

Key academic programs include:
- Higher Education: Business Administration, Information Technology, Education.
- Senior High School: Various strands preparing students for college or professional readiness.
- Basic Education: Holistic formation rooted in Dominican character and fundamental wisdom.

Admission Requirements (General):
- Application form
- Academic records (report cards, transcripts)
- Recommendation letters
- Entrance examination (for some programs/levels)
- Interview
- Birth certificate
- Good moral character certificate

Application Deadlines:
- Typically, applications open in October/November for the next academic year.
- Early application deadlines might be in February/March.
- Regular application deadlines usually fall in April/May.
- Specific dates vary by program and year, so it's recommended to check the official school website or contact the admissions office directly for the most current information.

Enrollment Process:
1. Submit application and required documents.
2. Take entrance examination (if applicable).
3. Attend interview.
4. Await admission decision.
5. If admitted, proceed with enrollment payment and submission of final documents.
`;

const admissionsAssistantPrompt = ai.definePrompt({
  name: 'admissionsAssistantPrompt',
  input: {schema: AdmissionsAssistantInputSchema},
  output: {schema: AdmissionsAssistantOutputSchema},
  prompt: `You are a helpful and informative admissions assistant for Colegio de San Juan de Letran - Manaoag.
Your goal is to provide prospective applicants with accurate and tailored answers to their questions about admission requirements, application deadlines, and specific academic programs.

Use the following available school information to answer the user's question. If the information is not explicitly provided, state that you do not have that specific detail and advise them to check the official school website or contact the admissions office.

School Information:
"""
${schoolInformation}
"""

User Question: {{{question}}}

Provide a concise and helpful answer based on the provided information.
`,
});

const admissionsAssistantFlow = ai.defineFlow(
  {
    name: 'admissionsAssistantFlow',
    inputSchema: AdmissionsAssistantInputSchema,
    outputSchema: AdmissionsAssistantOutputSchema,
  },
  async input => {
    const {output} = await admissionsAssistantPrompt(input);
    return output!;
  }
);
