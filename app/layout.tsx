import type { Metadata } from "next";
import localFont from "next/font/local";
import { PAGE_TITLE, PAGE_DESCRIPTION } from "@/configuration/ui";
import "./globals.css";
import { ErrorWrapper } from "./parts/error/error-wrapper";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TooltipProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ErrorWrapper>{children}</ErrorWrapper>

          {/* 🟢 Floating Chat Button */}
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

          {/* 🟢 Chat Modal */}
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
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>

          {/* 🟢 Modal Toggle Script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              const openChatBtn = document.getElementById('openChatBtn');
              const chatModal = document.getElementById('chatModal');
              openChatBtn?.addEventListener('click', () => {
                chatModal.style.display = chatModal.style.display === 'none' ? 'block' : 'none';
              });
            `,
            }}
          />
        </body>
      </TooltipProvider>
    </html>
  );
}
