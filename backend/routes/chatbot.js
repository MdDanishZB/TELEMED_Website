import express from "express";
import { getGeminiResponse } from "../services/geminiService.js";

const router = express.Router();

// POST /api/chatbot
router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const reply = await getGeminiResponse(message);
    res.json({ reply });
  } catch (err) {
    console.error("❌ Chatbot error:", err);
    res.status(500).json({ error: "Failed to get chatbot response" });
  }
});

export default router;
