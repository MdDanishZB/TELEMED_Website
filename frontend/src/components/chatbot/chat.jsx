import React, { useState, useRef, useEffect } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "💊 Hello! I’m your personal medication assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // Scroll to bottom when new message arrives
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getBotReply = (userText) => {
    const lower = userText.toLowerCase();
    if (lower.includes("medicine") || lower.includes("medication")) {
      return "Please provide the name of the medication you are inquiring about.";
    } else if (lower.includes("headache")) {
      return "For headaches, common medications include paracetamol or ibuprofen. Please consult your doctor before taking any medication.";
    } else if (lower.includes("fever")) {
      return "For mild fever, paracetamol is commonly used. Always check the correct dosage and consult your doctor.";
    }
    return "I'm here to help with your medication queries. Please ask your question.";
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage = { sender: "bot", text: getBotReply(input) };
      setMessages((prev) => [...prev, botMessage]);
    }, 400);

    setInput("");
  };

  const styles = {
    container: {
      maxWidth: 420,
      margin: "40px auto",
      border: "1px solid rgba(200,200,200,0.3)",
      borderRadius: 12,
      padding: 25,
      background: "rgba(244,246,248,0.35)", // more transparent
      boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
      fontFamily: "Arial, sans-serif",
      backdropFilter: "blur(8px)",
    },
    chatBox: {
      height: 260,
      overflowY: "auto",
      marginBottom: 16,
      background: "rgba(255,255,255,0.18)", // transparent chat area
      borderRadius: 8,
      padding: 10,
      border: "1px solid rgba(220,220,220,0.2)",
      backdropFilter: "blur(2px)",
    },
    bubble: (isUser) => ({
      display: "inline-block",
      background: isUser ? "rgba(25,118,210,0.55)" : "rgba(224,224,224,0.45)",
      color: isUser ? "#fff" : "#222",
      borderRadius: 16,
      padding: "8px 14px",
      maxWidth: "80%",
      boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
      backdropFilter: "blur(1px)",
    }),
    input: {
      flex: 1,
      padding: "8px 12px",
      borderRadius: 8,
      border: "1px solid #ccc",
      background: "rgba(255,255,255,0.5)",
      color: "#222",
    },
    button: {
      padding: "8px 16px",
      borderRadius: 8,
      background: "rgba(25,118,210,0.85)",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 2px 6px rgba(25,118,210,0.12)",
    },
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.5,
        }}
      >
        <source src="./health care.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Chatbot UI */}
  <div style={{ ...styles.container, position: 'relative', zIndex: 1 }}>
        <h2 style={{ textAlign: "center", marginBottom: 16 }}>💊 Medication Chatbot</h2>
        <div style={styles.chatBox}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              style={{
                textAlign: msg.sender === "user" ? "right" : "left",
                margin: "8px 0",
              }}
            >
              <span style={styles.bubble(msg.sender === "user")}>{msg.text}</span>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <form onSubmit={handleSend} style={{ display: "flex", gap: 8 }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your medication query..."
            style={styles.input}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) handleSend(e);
            }}
          />
          <button type="submit" style={styles.button}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
