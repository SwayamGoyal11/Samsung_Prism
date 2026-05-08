"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Brain, Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#workflow" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Dashboard", href: "/dashboard" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#060B14]/80 backdrop-blur-2xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="site-container">
        <div className="flex items-center justify-between" style={{ height: "72px" }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <span style={{ fontSize: "15px", fontWeight: 600, letterSpacing: "-0.01em" }}>
              Meeting<span style={{ color: "#6366F1" }}>AI</span>
            </span>
          </Link>

          {/* Desktop Nav — centered */}
          <div className="hidden md:flex items-center" style={{ gap: "8px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  padding: "8px 16px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#94A3B8",
                  borderRadius: "8px",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
                className="hover:text-[#E8ECF1] hover:bg-white/[0.04]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center shrink-0" style={{ gap: "12px" }}>
            <Link
              href="/dashboard"
              style={{
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#94A3B8",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              className="hover:text-[#E8ECF1]"
            >
              Log in
            </Link>
            <Link
              href="/dashboard"
              className="btn-primary"
              style={{ padding: "8px 20px", fontSize: "14px", gap: "6px" }}
            >
              Get Started
              <ChevronRight style={{ width: "14px", height: "14px" }} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            style={{ padding: "8px", color: "#94A3B8" }}
          >
            {mobileOpen ? <X style={{ width: "20px", height: "20px" }} /> : <Menu style={{ width: "20px", height: "20px" }} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
            style={{ background: "rgba(12,18,32,0.95)", backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div style={{ padding: "16px 24px" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "12px 16px",
                    fontSize: "14px",
                    color: "#94A3B8",
                    borderRadius: "8px",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  className="hover:text-white hover:bg-white/[0.04]"
                >
                  {link.label}
                </Link>
              ))}
              <div style={{ paddingTop: "12px", marginTop: "8px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <Link
                  href="/dashboard"
                  className="btn-primary"
                  style={{ width: "100%", padding: "12px", fontSize: "14px", textDecoration: "none" }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
