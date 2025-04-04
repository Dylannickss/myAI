// components/chat/FloatingChatBubble.tsx
"use client";

interface FloatingChatBubbleProps {
  onClick: () => void;
}

export default function FloatingChatBubble({ onClick }: FloatingChatBubbleProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full shadow-lg z-50 transition-all"
    >
      💬 Chat
    </button>
  );
}
