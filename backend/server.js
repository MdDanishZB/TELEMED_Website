import express from "express";
import multer from "multer";
import cors from "cors";
import fs from "fs";
import dotenv from "dotenv";
import transcribeWithWhisperPy from "./services/whisperWrapper.js";
import { getGeminiResponse } from "./services/geminiService.js";
import chatbotRoutes from "./routes/chatbot.js";
import transcribeRoutes from "./routes/transcribe.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Mount routes
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/transcribe", transcribeRoutes);

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));


const upload = multer({ dest: "uploads/" });

// text input
app.post("/api/chatbot", async (req, res) => {
  try {
    const { message } = req.body;
    const reply = await getGeminiResponse(message);
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Error communicating with Gemini" });
  }
});

// audio upload → whisper → gemini
app.post("/api/transcribe-and-chat", upload.single("audio"), async (req, res) => {
  try {
    const filePath = req.file.path;

    const transcript = await transcribeWithWhisperPy(filePath);
    fs.unlinkSync(filePath); // cleanup

    const reply = await getGeminiResponse(transcript);

    res.json({
      transcript,
      reply,
    });
  } catch (err) {
    console.error("Transcribe error:", err);
    res.status(500).json({ transcript: null, reply: "❌ Error processing audio" });
  }
});

