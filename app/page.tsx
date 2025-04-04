"use client";

import { useEffect, useState } from "react";
import ChatInput from "@/components/chat/input";
import ChatMessages from "@/components/chat/messages";
import useApp from "@/hooks/use-app";
import ChatHeader from "@/components/chat/header";
import FloatingChatBubble from "@/components/chat/FloatingChatBubble"; // ✅ Create this component

export default function Chat() {
  const {
    messages,
    handleInputChange,
    handleSubmit,
    input,
    isLoading,
    indicatorState,
    clearMessages,
  } = useApp();

  const [showChat, setShowChat] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("mode") === "bubble") {
      setShowChat(false);
    }
  }, []);

  const handleOpenChat = () => setShowChat(true);

  return (
    <>
      {showChat ? (
        <>
          <ChatHeader clearMessages={clearMessages} />
          <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col max-w-screen-lg w-full h-full p-5">
              <ChatMessages messages={messages} indicatorState={indicatorState} />
            </div>
          </div>
          <ChatInput
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            input={input}
            isLoading={isLoading}
          />
        </>
      ) : (
        <FloatingChatBubble onClick={handleOpenChat} />
      )}
    </>
  );
}
