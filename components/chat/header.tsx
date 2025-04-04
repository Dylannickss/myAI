import { Button } from "@/components/ui/button";
import { EraserIcon } from "lucide-react";
import Image from "next/image";
import { CHAT_HEADER, CLEAR_BUTTON_TEXT } from "@/configuration/ui";
import { AI_NAME } from "@/configuration/identity";

export const AILogo = () => (
  <div className="w-12 h-12 relative">
    <Image src="/ai-logo.png" alt={AI_NAME} width={48} height={48} />
    <div className="w-2 h-2 rounded-full bg-green-500 absolute -bottom-0.5 -right-0.5"></div>
  </div>
);

export default function ChatHeader({
  clearMessages,
}: {
  clearMessages: () => void;
}) {
  return (
    <div className="z-10 flex justify-between items-center fixed top-0 w-full p-5 bg-gradient-to-l from-green-500 to-green-700 text-white shadow-lg border-b border-green-800">
      {/* Left-aligned logo + header */}
      <div className="flex items-center gap-2 pl-4">
        <AILogo />
        <p className="text-lg font-medium">{CHAT_HEADER}</p>
      </div>

      {/* Right-aligned delete button */}
      <div className="flex items-center pr-4">
        <Button
          onClick={clearMessages}
          className="gap-2 shadow-sm bg-white text-black hover:bg-gray-200"
          variant="outline"
          size="sm"
        >
          <EraserIcon className="w-4 h-4" />
          <span>{CLEAR_BUTTON_TEXT}</span>
        </Button>
      </div>
    </div>
  );
}
