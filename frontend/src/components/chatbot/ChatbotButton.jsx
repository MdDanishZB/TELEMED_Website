import React from "react";
import { useNavigate } from "react-router-dom";
import "./chatbotButton.scss"; // Create this file for styling

const ChatbotButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="chatbot-float-btn"
      onClick={() => navigate("/chatbot")}
      aria-label="Open Chatbot"
    >
      <span role="img" aria-label="Chatbot">💬</span>
    </button>
  );
};

export default ChatbotButton;