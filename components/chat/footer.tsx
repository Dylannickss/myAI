import { FOOTER_MESSAGE } from "@/configuration/ui";
import Link from "next/link";

export default function ChatFooter() {
  return (
    <footer className="w-full text-xs flex justify-between items-center p-4 bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg border-t border-green-800">
      {/* Left Pane */}
      <div className="flex-grow text-left">
        <Link href="/terms" className="hover:underline text-white font-semibold">
          Terms of Service
        </Link>
      </div>

      {/* Center Pane */}
      <div className="flex-grow text-center font-bold tracking-wide">
        {FOOTER_MESSAGE || "© 2024 Plant Parenthood LLC"}
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


/*export default function ChatFooter() {
  return (
    <div className="w-full text-xs flex pt-2 text-gray-500">
      <div className="flex-grow text-left">
        {/* Left Pane */}
        <Link href="/terms" className="hover:underline">
          Terms of Service
        </Link>
      </div>
      <div className="flex-grow text-center">
        {/* Center Pane */}
        {FOOTER_MESSAGE}
      </div>
      <div className="flex-grow text-right">
        {/* Right Pane */}
        {/* Do not remove or modify the following message. Removal or modification violates the license agreement. */}
        <a
          href="http://www.ringel.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          powered by ringel.AI
        </a>
      </div>
    </div>
  );
}*/
