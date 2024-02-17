import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import { IProperty } from './App.tsx'



const openAiEndpoint = process.env.REACT_APP_OPENAI_API_ENDPOINT || ''
const openAiAPIKey = process.env.REACT_APP_OPENAI_API_KEY || ''


export async function getDescriptionFromOpenAI(property: IProperty) {
  try {
    const client = new OpenAIClient(openAiEndpoint, new AzureKeyCredential(openAiAPIKey));
    const deploymentName: string = "GPT35TurboModel";

    const textToSummarize: string = `
      Name:${property.title}, Number of rooms: ${property.rooms}`;

    const summarizationPrompt: string[] = [`
      Based on the provided text, create a short(no more than 3 sentences) fictious description for a property and return it as a single string 
      .
      Text:
      "${textToSummarize}"
    `];

    const { choices } = await client.getCompletions(deploymentName, summarizationPrompt, {
      maxTokens: 124
    });
    const completion: string = choices[0].text;
    return completion;
  } catch (error) {
    console.error("Error getting description from OpenAI:", error);
    throw error;
  }
}


