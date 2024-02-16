import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import dotenv from 'dotenv';
import { IProperty } from './App.tsx'

dotenv.config()

const openAiEndpoint = process.env.REACT_APP_OPENAI_API_ENDPOINT || ''
const openAiAPIKey = process.env.REACT_APP_OPENAI_API_KEY || ''


export async function getSummaryFromOpenAI(property: IProperty) {
  const client = new OpenAIClient(openAiEndpoint, new AzureKeyCredential(openAiAPIKey));
  const deploymentName: string = "GPT35TurboModel";

  const textToSummarize: string = `
    Name:${property.title}, Number of rooms: ${property.rooms}`;

  const summarizationPrompt: string[] = [`
    Based on the provided text, create a short fictious description for a property

    Text:
    """"""${textToSummarize}""""""
  `];

  console.log(`Input: ${summarizationPrompt}`);

  const { choices } = await client.getCompletions(deploymentName, summarizationPrompt, {
    maxTokens: 64
  });
  const completion: string = choices[0].text;
  console.log(`Summarization: ${completion}`);
  return completion
}

// getSummaryFromOpenAI({
//   "imageUrl": "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "title": "Golden Horizon Manor",
//   "description": "",
//   "rooms": 3
// },).catch((err: Error) => {
//   console.error("The sample encountered an error:", err);
// });