import React, { useState, useRef } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "./chat.scss";

const INPUT_MODES = {
  TEXT: "Text",
  AUDIO_UPLOAD: "Audio Upload",
  AUDIO_RECORD: "Audio Record",
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMode, setInputMode] = useState(INPUT_MODES.TEXT);
  const [input, setInput] = useState("");
  const [audioFile, setAudioFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const fileInputRef = useRef();

  // Handle sending message (text or transcribed)
  const sendMessage = async (msg) => {
    setMessages((prev) => [...prev, { from: "user", text: msg }]);
    setLoading(true);

    // Send to backend (implement this endpoint)
    const res = await fetch("/api/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: msg }),
    });
    const data = await res.json();
    setMessages((prev) => [...prev, { from: "bot", text: data.reply }]);
    setLoading(false);
  };

  // Handle text input submit
  const handleTextSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input.trim());
      setInput("");
    }
  };

  // Handle audio file upload
  const handleAudioUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setAudioFile(file);
    setLoading(true);

    // Send audio file to backend for transcription
    const formData = new FormData();
    formData.append("audio", file);

    const res = await fetch("/api/transcribe-and-chat", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setLoading(false);
    if (data.text) {
      sendMessage(data.text);
    }
  };

  // Handle live audio recording
  const handleStartRecording = () => {
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
  };
  const handleStopRecording = () => {
    SpeechRecognition.stopListening();
    if (transcript) sendMessage(transcript);
    resetTranscript();
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">Chatbot</div>
      <div className="chatbot-messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-bubble ${msg.from === "user" ? "user" : "bot"}`}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div className="chat-bubble bot">...</div>}
      </div>
      <div className="chatbot-input-area">
        <select
          value={inputMode}
          onChange={(e) => setInputMode(e.target.value)}
          className="chatbot-input-mode"
        >
          {Object.values(INPUT_MODES).map((mode) => (
            <option key={mode} value={mode}>{mode}</option>
          ))}
        </select>
        {inputMode === INPUT_MODES.TEXT && (
          <form onSubmit={handleTextSubmit} className="chatbot-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="chatbot-input"
            />
            <button type="submit" className="chatbot-send-btn">Send</button>
          </form>
        )}
        {inputMode === INPUT_MODES.AUDIO_UPLOAD && (
          <div>
            <input
              type="file"
              accept="audio/*"
              ref={fileInputRef}
              onChange={handleAudioUpload}
              className="chatbot-audio-upload"
            />
          </div>
        )}
        {inputMode === INPUT_MODES.AUDIO_RECORD && (
          <div className="chatbot-audio-record">
            <button
              onClick={listening ? handleStopRecording : handleStartRecording}
              className="chatbot-record-btn"
            >
              {listening ? "Stop Recording" : "Start Recording"}
            </button>
            <span className="chatbot-transcript">{transcript}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;