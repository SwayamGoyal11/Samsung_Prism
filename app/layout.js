import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Meeting Intelligence Agent 2.0 | AI-Powered Meeting Productivity",
  description:
    "Transform meetings into actionable intelligence. AI-powered meeting assistant that summarizes discussions, extracts action items, tracks deadlines, and automates productivity workflows.",
  keywords:
    "AI meetings, meeting intelligence, meeting transcription, action items, productivity, meeting assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} dark`}>
      <body
        className="min-h-screen bg-[#0B1020] text-[#F9FAFB] antialiased font-sans"
      >
        {children}
      </body>
    </html>
  );
}
