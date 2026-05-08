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
    <footer className="relative border-t border-white/[0.06] bg-[#060B14]">
      <div className="site-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px" }}>
          {/* Brand */}
          <div style={{ paddingRight: "20px" }}>
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="text-[15px] font-semibold">
                Meeting<span className="text-[#6366F1]">AI</span>
              </span>
            </Link>
            <p className="text-[14px] text-[#64748B] leading-[1.7] max-w-[320px] mb-6">
              Transform your meetings into actionable intelligence with
              AI-powered transcription, summaries, and task management.
            </p>

            {/* Newsletter */}
            <div className="flex gap-2 max-w-[320px] mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[13px] text-[#E8ECF1] placeholder-[#64748B]"
              />
              <button className="btn-primary px-4 py-2 text-[13px] font-medium whitespace-nowrap">
                Subscribe
              </button>
            </div>

            {/* Social */}
            <div className="flex gap-2">
              {[Globe, Code2, Users, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#64748B] hover:text-[#E8ECF1] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-[13px] font-semibold text-[#E8ECF1] mb-4 tracking-[-0.01em]">
                {title}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[13px] text-[#64748B] hover:text-[#94A3B8] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-[#64748B]">
            &copy; 2026 MeetingAI. All rights reserved.
          </p>
          <div className="flex gap-6 text-[12px] text-[#64748B]">
            <Link
              href="#"
              className="hover:text-[#94A3B8] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="hover:text-[#94A3B8] transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="hover:text-[#94A3B8] transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
