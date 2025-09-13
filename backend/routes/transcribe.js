// routes/transcribe.js
import express from "express";
import multer from "multer";
import fs from "fs";
import transcribeWithWhisperPy from "../services/whisperWrapper.js";
import { getGeminiResponse } from "../services/geminiService.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("audio"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No audio file uploaded" });
    }

    const transcript = await transcribeWithWhisperPy(req.file.path);
    fs.unlinkSync(req.file.path); // cleanup

    const reply = await getGeminiResponse(transcript);

    res.json({ transcript, reply });
  } catch (err) {
    console.error("❌ Transcription error:", err);
    res.status(500).json({ error: "Failed to process audio" });
  }
});

export default router;
