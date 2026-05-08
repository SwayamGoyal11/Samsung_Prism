"use client";
import Link from "next/link";
import { Brain, Globe, Code2, Users, Mail } from "lucide-react";

export default function Footer() {
  const links = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "#" },
    ],
    Company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
    Resources: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Community", href: "#" },
    ],
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#0B1020]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">
                Meeting<span className="gradient-text">AI</span>
              </span>
            </Link>
            <p className="text-sm text-[#6B7280] leading-relaxed max-w-sm mb-6">
              Transform your meetings into actionable intelligence with
              AI-powered transcription, summaries, and task management.
            </p>
            <div className="flex gap-3">
              {[Globe, Code2, Users, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[#6B7280] hover:text-white hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#6B7280] hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#6B7280]">
            &copy; 2026 MeetingAI. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-[#6B7280]">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
