import { Button } from "@/components/ui/button";
import { EraserIcon } from "lucide-react";
import Image from "next/image";
import { CHAT_HEADER, CLEAR_BUTTON_TEXT } from "@/configuration/ui";
import { AI_NAME } from "@/configuration/identity";

export const AILogo = () => (
  <div className="w-10 h-10 relative flex-shrink-0">
    <Image src="/ai-logo.png" alt={AI_NAME} width={40} height={40} />
    <div className="w-2 h-2 rounded-full bg-green-500 absolute -bottom-0.5 -right-0.5"></div>
  </div>
);

export default function ChatHeader({
  clearMessages,
}: {
  clearMessages: () => void;
}) {
  return (
    <div className="z-10 flex justify-between items-center fixed top-0 w-full p-3 bg-gradient-to-l from-green-500 to-green-700 text-white shadow-lg border-b border-green-800">
      {/* Logo and Title */}
      <div className="flex items-center gap-2 min-w-0 overflow-hidden">
        <AILogo />
        <p className="text-sm sm:text-base truncate">{CHAT_HEADER}</p>
      </div>

      {/* Clear Button */}
      <div className="flex-shrink-0 ml-2">
        <Button
          onClick={clearMessages}
          className="gap-2 shadow-sm bg-white text-black hover:bg-gray-200 whitespace-nowrap"
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
