import { execSync } from "child_process";

export async function transcribeAudio(filePath) {
  try {
    // Call the Python script
    const result = execSync(`python3 services/speechService.py "${filePath}"`, {
      encoding: "utf-8",
    });
    return result.trim();
  } catch (err) {
    console.error("Whisper error:", err.message);
    throw new Error("Failed to transcribe audio");
  }
}
