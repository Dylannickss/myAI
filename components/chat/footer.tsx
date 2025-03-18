import Link from "next/link";
import { FOOTER_MESSAGE } from "@/configuration/ui"; // Ensure this import is correct

export default function ChatFooter() {
  return (
    <footer className="w-full text-xs flex justify-between items-end p-2 pb-1 bg-gradient-to-r from-green-500 to-green-700 text-white leading-tight">
      {/* Left Pane */}
      <div className="flex-grow text-left">
        <Link href="/terms" className="hover:underline text-white font-semibold">
          Terms of Service
        </Link>
      </div>

      {/* Center Pane */}
      <div className="flex-grow text-center font-bold tracking-wide">
        {FOOTER_MESSAGE ? FOOTER_MESSAGE : "© 2024 Plant Parenthood LLC"}
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
    </footer>
  );
}
