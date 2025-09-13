# backend/transcribe.py
import sys
import whisper_timestamped as whisper
import json

audio_file = sys.argv[1]
model = whisper.load_model("base")   # loads small model
result = whisper.transcribe(model, audio_file)
print(json.dumps({"text": result["text"]}))
