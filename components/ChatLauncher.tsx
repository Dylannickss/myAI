"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react"; // or your preferred icon
import ChatModal from "./ChatModal"; // full-screen chat component

export default function ChatLauncher() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg z-50"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {isOpen && <ChatModal onClose={() => setIsOpen(false)} />}
    </>
  );
}
