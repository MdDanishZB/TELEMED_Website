// backend/whisperWrapper.js
import { exec } from "child_process";
import util from "util";

const execPromise = util.promisify(exec);

async function transcribeWithWhisperPy(filePath) {
  const { stdout } = await execPromise(`python3 backend/transcribe.py "${filePath}"`);
  const { text } = JSON.parse(stdout);
  return text;
}

export default transcribeWithWhisperPy;
