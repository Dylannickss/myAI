import { FOOTER_MESSAGE } from "@/configuration/ui";
import Link from "next/link";

export default function ChatFooter() {
  return (
    <div className="w-full text-xs flex justify-between items-center p-4 bg-gradient-to-r from-green-500 to-green-700 text-white">
      {/* Left Pane */}
      <div className="flex-grow text-left">
        <Link href="/terms" className="hover:underline text-white font-semibold">
          Terms of Service
        </Link>
      </div>

      {/* Center Pane */}
      <div className="flex-grow text-center font-bold tracking-wide">
        {FOOTER_MESSAGE}
      </div>

      {/* Right Pane */}
      <div className="flex-grow text-right">
        <a
          href="http://www.ringel.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-white font-semibold"
        >
          powered by ringel.AI
        </a>
      </div>
    </div>
  );
}
