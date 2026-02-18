'use server';
/**
 * @fileOverview A Genkit flow for generating personalized campus tour itineraries.
 *
 * - generateCampusTourItinerary - A function that handles the campus tour planning process.
 * - CampusTourPlannerInput - The input type for the generateCampusTourItinerary function.
 * - CampusTourPlannerOutput - The return type for the generateCampusTourItinerary function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const CampusTourPlannerInputSchema = z.object({
  academicInterests: z.string().describe('The academic fields the prospective student is interested in.'),
  preferredAttractions: z.array(z.string()).describe('A list of preferred campus attractions or types of places the student wants to visit.'),
});
export type CampusTourPlannerInput = z.infer<typeof CampusTourPlannerInputSchema>;

const CampusTourPlannerOutputSchema = z.object({
  tourItinerary: z.string().describe('A detailed, step-by-step campus tour itinerary including relevant locations and descriptions.'),
  estimatedDuration: z.string().describe('The estimated duration of the tour (e.g., "2 hours", "Half day").'),
  recommendedFootwear: z.string().describe('Recommended footwear for the tour.'),
});
export type CampusTourPlannerOutput = z.infer<typeof CampusTourPlannerOutputSchema>;

const getCampusLocationInfo = ai.defineTool(
  {
    name: 'getCampusLocationInfo',
    description: 'Retrieves detailed location information for a given place on campus.',
    inputSchema: z.object({
      placeName: z.string().describe('The name of the campus location (e.g., "Library", "Engineering Building", "Gym").'),
    }),
    outputSchema: z.object({
      placeName: z.string().describe('The name of the campus location.'),
      description: z.string().describe('A brief description of the location.'),
      category: z.string().describe('The category of the location (e.g., "Academic", "Recreational", "Administrative").'),
      coordinates: z.string().describe('Geographic coordinates or a general area on the campus map.'),
      notes: z.string().optional().describe('Any special notes about the location, like opening hours or special features.'),
    }),
  },
  async (input) => {
    // This is a mock implementation. In a real application, this would fetch data from a database or API.
    const campusLocations: { [key: string]: z.infer<typeof getCampusLocationInfo.outputSchema> } = {
      'Library': {
        placeName: 'Library',
        description: 'The main academic library, home to extensive collections and study spaces.',
        category: 'Academic',
        coordinates: '16.035, 120.572',
        notes: 'Open weekdays 8 AM - 8 PM.'
      },
      'Engineering Building': {
        placeName: 'Engineering Building',
        description: 'Houses state-of-the-art labs and classrooms for engineering programs.',
        category: 'Academic',
        coordinates: '16.036, 120.573',
        notes: 'Contains the robotics lab and materials testing facility.'
      },
      'Gymnasium': {
        placeName: 'Gymnasium',
        description: 'Indoor sports complex for basketball, volleyball, and other athletic activities.',
        category: 'Recreational',
        coordinates: '16.034, 120.571',
        notes: 'Student access requires ID. Check schedule for open gym times.'
      },
      'Student Union': {
        placeName: 'Student Union',
        description: 'Central hub for student life, with dining options, lounge areas, and student organization offices.',
        category: 'Social',
        coordinates: '16.033, 120.572',
        notes: 'Food court, bookstore, and student services are located here.'
      },
      'Admissions Office': {
        placeName: 'Admissions Office',
        description: 'Where prospective students can get information about applying and enrolling.',
        category: 'Administrative',
        coordinates: '16.035, 120.570',
        notes: 'Walk-ins welcome during office hours: 9 AM - 4 PM.'
      },
      'Main Cafeteria': {
        placeName: 'Main Cafeteria',
        description: 'Serves a variety of meals for students and staff.',
        category: 'Dining',
        coordinates: '16.032, 120.571',
        notes: 'Breakfast, Lunch, and Dinner served daily.'
      },
      'Chapel': {
        placeName: 'Chapel',
        description: 'The campus chapel for spiritual services and reflection.',
        category: 'Religious',
        coordinates: '16.034, 120.570',
        notes: 'Daily mass and prayer times available.'
      },
      'Dormitory North': {
        placeName: 'Dormitory North',
        description: 'Residential building for male students.',
        category: 'Residential',
        coordinates: '16.037, 120.574',
        notes: 'Access restricted to residents.'
      },
      'Dormitory South': {
        placeName: 'Dormitory South',
        description: 'Residential building for female students.',
        category: 'Residential',
        coordinates: '16.031, 120.573',
        notes: 'Access restricted to residents.'
      },
      'Fine Arts Center': {
        placeName: 'Fine Arts Center',
        description: 'Venue for art exhibitions, music concerts, and theater performances.',
        category: 'Academic/Cultural',
        coordinates: '16.036, 120.571',
        notes: 'Check event schedule for upcoming shows.'
      },
      'Science Building': {
        placeName: 'Science Building',
        description: 'Facilities for Biology, Chemistry, and Physics departments.',
        category: 'Academic',
        coordinates: '16.035, 120.574',
        notes: 'Modern laboratories for hands-on learning.'
      },
      'Athletic Field': {
        placeName: 'Athletic Field',
        description: 'Outdoor field for soccer, track and field, and other sports.',
        category: 'Recreational',
        coordinates: '16.033, 120.570',
        notes: 'Available for student use outside of scheduled team practices.'
      }
    };

    const lowerCasePlaceName = input.placeName.toLowerCase();
    for (const key in campusLocations) {
      if (key.toLowerCase().includes(lowerCasePlaceName)) {
        return campusLocations[key];
      }
    }

    // If not found directly, try to infer based on category or common terms
    if (lowerCasePlaceName.includes('sports') || lowerCasePlaceName.includes('athletic')) {
      return campusLocations['Gymnasium'];
    }
    if (lowerCasePlaceName.includes('food') || lowerCasePlaceName.includes('eat')) {
      return campusLocations['Main Cafeteria'];
    }
    if (lowerCasePlaceName.includes('dorm')) {
      return campusLocations['Dormitory North']; // Default to one if specific not mentioned
    }
    if (lowerCasePlaceName.includes('art') || lowerCasePlaceName.includes('music')) {
      return campusLocations['Fine Arts Center'];
    }
    if (lowerCasePlaceName.includes('science') || lowerCasePlaceName.includes('biology') || lowerCasePlaceName.includes('chemistry') || lowerCasePlaceName.includes('physics')) {
      return campusLocations['Science Building'];
    }

    // Fallback if no specific or inferred match
    return {
      placeName: input.placeName,
      description: `Information for '${input.placeName}' is not readily available or does not exist on campus.`, 
      category: 'Unknown',
      coordinates: 'N/A',
      notes: 'Please try a different campus location.'
    };
  }
);

export async function generateCampusTourItinerary(input: CampusTourPlannerInput): Promise<CampusTourPlannerOutput> {
  return campusTourPlannerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'campusTourPlannerPrompt',
  input: { schema: CampusTourPlannerInputSchema },
  output: { schema: CampusTourPlannerOutputSchema },
  tools: [getCampusLocationInfo],
  prompt: `You are an AI assistant specialized in creating personalized campus tour itineraries for prospective students.

The student is interested in the following academic fields: {{{academicInterests}}}
They would like to visit these preferred attractions: {{{preferredAttractions.join ", "}}}

Based on the user's interests, identify key campus locations using the 'getCampusLocationInfo' tool. Prioritize locations relevant to their academic interests and preferred attractions.
Then, create a personalized, logical, and efficient step-by-step campus tour itinerary. For each location, include its name, a brief description, and any relevant notes (e.g., opening hours, what they can expect to see).
Also, provide an estimated duration for the entire tour and a recommendation for footwear.

Structure the output as a JSON object, adhering strictly to the CampusTourPlannerOutputSchema. Ensure the 'tourItinerary' is a single string with clear formatting (e.g., using bullet points or numbered lists for stops).`,
});

const campusTourPlannerFlow = ai.defineFlow(
  {
    name: 'campusTourPlannerFlow',
    inputSchema: CampusTourPlannerInputSchema,
    outputSchema: CampusTourPlannerOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
