import{ GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: "AIzaSyAW_btH_hg1G1LtG9BqjSZqi8Wledt0BmE"
});

async function generateText(prompt){
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
    });
    return response.text;
}

let prompt = "Give me a list of 10 uninteresting things"
let llmText = await generateText(prompt);
console.log(llmText);


