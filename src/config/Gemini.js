import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  }  from "@google/generative-ai";
const APIKey = "AIzaSyDIPOsBx-9DqOmwoCaP43b3TeWctY9otAo";

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */



const apiKey = process.env.GEMINI_API_KEY || APIKey;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
 
  console.log(result.response.text());
  const usersChart = result.response.text()

  return usersChart

}

export default run;
