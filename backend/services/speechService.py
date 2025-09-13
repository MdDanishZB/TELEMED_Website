import sys
import whisper

model = whisper.load_model("base")  # options: tiny, base, small, medium, large

def transcribe(file_path):
    result = model.transcribe(file_path)
    return result["text"]

if __name__ == "__main__":
    audio_file = sys.argv[1]
    print(transcribe(audio_file))
