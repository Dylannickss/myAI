"use client";

import { X } from "lucide-react";
import ChatInput from "./chat/input"; // adjust if your path is different
import ChatMessages from "./chat/messages"; // adjust if your path is different

export default function ChatModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed bottom-20 right-6 w-[360px] max-h-[75vh] bg-white rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-3 border-b">
        <span className="font-semibold text-gray-800">Chat with us</span>
        <button onClick={onClose} aria-label="Close chat">
          <X className="w-5 h-5 text-gray-500 hover:text-gray-800" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 py-2">
        <ChatMessages messages={[]} indicatorState={[]} />
      </div>

      {/* Input */}
      <div className="p-3 border-t">
        <ChatInput
          input=""
          isLoading={false}
          handleInputChange={() => {}}
          handleSubmit={() => {}}
        />
      </div>
    </div>
  );
}
