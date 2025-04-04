// app/ChatWidget.tsx
"use client";

import { useEffect } from "react";

export default function ChatWidget() {
  useEffect(() => {
    const openChatBtn = document.getElementById('openChatBtn');
    const chatModal = document.getElementById('chatModal');

    if (openChatBtn && chatModal) {
      openChatBtn.addEventListener('click', () => {
        chatModal.style.display = chatModal.style.display === 'none' ? 'block' : 'none';
      });
    }
  }, []);

  return (
    <>
      <button
        id="openChatBtn"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          backgroundColor: "#10b981",
          color: "white",
          padding: "12px 16px",
          borderRadius: "9999px",
          border: "none",
          fontWeight: "bold",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
          cursor: "pointer",
        }}
      >
        💬 Chat
      </button>

      <div
        id="chatModal"
        style={{
          display: "none",
          position: "fixed",
          bottom: "80px",
          right: "24px",
          width: "400px",
          height: "600px",
          zIndex: 1000,
          backgroundColor: "white",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3)",
        }}
      >
        <iframe
          src="https://plantparenthoodai.vercel.app"
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </div>
    </>
  );
}
