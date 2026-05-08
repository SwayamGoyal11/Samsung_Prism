import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "MeetingAI — AI-Powered Meeting Intelligence Platform",
  description:
    "Transform meetings into actionable intelligence. AI-powered meeting assistant that summarizes discussions, extracts action items, tracks deadlines, and automates productivity workflows.",
  keywords:
    "AI meetings, meeting intelligence, meeting transcription, action items, productivity, meeting assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="min-h-screen bg-[#060B14] text-[#E8ECF1] antialiased">
        {children}
      </body>
    </html>
  );
}
