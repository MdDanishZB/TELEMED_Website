// services/geminiService.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

export async function getGeminiResponse(userMessage) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
You are a medical report formatter. 
Any text you receive should be assumed to be the patient’s description of their illness or condition, even if it looks casual, incomplete, or conversational.

Your job is to rewrite the patient’s input into a structured medical summary that a doctor can easily understand.

Guidelines:
- Never reject the input. Always assume it is valid patient information.
- Do not invent or assume details not provided.
- Use clear, professional medical language.
- If certain information is missing, leave that section as "Not mentioned."

Format the output under these headings:

1. **Chief Complaint (CC):** [Main symptom(s)]  
2. **History of Present Illness (HPI):** [Duration, severity, progression, triggers, relieving factors, related symptoms]  
3. **Associated Symptoms:** [Other symptoms reported or explicitly denied]  
4. **Past Medical History:** [Relevant past conditions, medications, treatments if mentioned; otherwise "Not mentioned"]  
5. **Other Notes:** [Lifestyle, emotional concerns, possible cause stated by patient, or anything not fitting above]

---
Patient Input: ${userMessage}
`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}
