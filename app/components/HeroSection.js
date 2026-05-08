"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Zap,
  BarChart3,
  CheckCircle2,
  MessageSquare,
  Calendar,
  Users,
  TrendingUp,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      {/* Background */}
      <div className="absolute inset-0 hero-mesh" />
      <div className="absolute inset-0 grid-pattern" style={{ opacity: 0.4 }} />

      {/* Ambient */}
      <div className="absolute" style={{ width: "500px", height: "500px", top: "-100px", right: "-100px", background: "rgba(99,102,241,0.06)", borderRadius: "50%", filter: "blur(120px)", pointerEvents: "none" }} />
      <div className="absolute" style={{ width: "400px", height: "400px", bottom: "-100px", left: "-100px", background: "rgba(59,130,246,0.04)", borderRadius: "50%", filter: "blur(120px)", pointerEvents: "none" }} />

      <div className="relative z-10 site-container" style={{ paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "60px", alignItems: "center" }}>
          {/* Left */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
                fontSize: "12px",
                fontWeight: 500,
                color: "#94A3B8",
                marginBottom: "32px",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22C55E" }} className="pulse-dot" />
              Powered by Advanced AI
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontSize: "clamp(40px, 5vw, 64px)",
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                marginBottom: "24px",
                color: "#E8ECF1",
              }}
            >
              Transform Meetings<br />
              Into <span className="gradient-text">Actionable Intelligence</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                fontSize: "18px",
                color: "#94A3B8",
                lineHeight: 1.75,
                marginBottom: "40px",
                maxWidth: "520px",
              }}
            >
              AI-powered meeting assistant that summarizes discussions, extracts
              action items, tracks deadlines, and automates your productivity
              workflows.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}
            >
              <Link href="/dashboard" className="btn-primary" style={{ padding: "12px 24px", fontSize: "15px", gap: "8px", textDecoration: "none" }}>
                Get Started Free
                <ArrowRight style={{ width: "16px", height: "16px" }} />
              </Link>
              <button className="btn-secondary" style={{ padding: "12px 24px", fontSize: "15px", gap: "8px" }}>
                <Play style={{ width: "16px", height: "16px" }} />
                Watch Demo
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              style={{ marginTop: "48px", display: "flex", alignItems: "center", gap: "16px" }}
            >
              <div style={{ display: "flex" }}>
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      border: "2px solid #060B14",
                      marginLeft: i > 0 ? "-8px" : "0",
                      background: `linear-gradient(135deg, ${["#6366F1","#3B82F6","#8B5CF6","#06B6D4"][i]} 0%, ${["#3B82F6","#6366F1","#06B6D4","#8B5CF6"][i]} 100%)`,
                    }}
                  />
                ))}
              </div>
              <div style={{ fontSize: "13px", color: "#64748B" }}>
                Trusted by <span style={{ color: "#E8ECF1", fontWeight: 500 }}>2,400+</span> teams worldwide
              </div>
            </motion.div>
          </div>

          {/* Right — Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div style={{
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(12,18,32,0.8)",
              backdropFilter: "blur(24px)",
              padding: "24px",
              boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
            }}>
              {/* Window chrome */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "rgba(239,68,68,0.6)" }} />
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "rgba(245,158,11,0.6)" }} />
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "rgba(34,197,94,0.6)" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#64748B", fontWeight: 500 }}>
                  <Zap style={{ width: "12px", height: "12px", color: "#818CF8" }} />
                  AI Processing
                </div>
              </div>

              {/* Meeting Summary */}
              <div style={{ borderRadius: "12px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", padding: "16px", marginBottom: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <MessageSquare style={{ width: "16px", height: "16px", color: "#818CF8" }} />
                  <span style={{ fontSize: "13px", fontWeight: 500, color: "#E8ECF1" }}>AI Meeting Summary</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ height: "8px", background: "rgba(255,255,255,0.04)", borderRadius: "4px", width: "100%" }} />
                  <div style={{ height: "8px", background: "rgba(255,255,255,0.04)", borderRadius: "4px", width: "80%" }} />
                  <div style={{ height: "8px", background: "rgba(255,255,255,0.04)", borderRadius: "4px", width: "60%" }} />
                </div>
              </div>

              {/* Action Items */}
              <div style={{ borderRadius: "12px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", padding: "16px", marginBottom: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <CheckCircle2 style={{ width: "16px", height: "16px", color: "#34D399" }} />
                  <span style={{ fontSize: "13px", fontWeight: 500, color: "#E8ECF1" }}>Action Items</span>
                  <span style={{ marginLeft: "auto", fontSize: "11px", background: "rgba(16,185,129,0.1)", color: "#34D399", padding: "2px 8px", borderRadius: "9999px", fontWeight: 500 }}>3 new</span>
                </div>
                {[
                  { text: "Review Q2 roadmap", due: "May 15" },
                  { text: "Update design specs", due: "May 18" },
                  { text: "Schedule team sync", due: "May 20" },
                ].map((item, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 0", borderBottom: j < 2 ? "1px solid rgba(255,255,255,0.03)" : "none" }}>
                    <div style={{ width: "16px", height: "16px", borderRadius: "4px", border: "1px solid rgba(255,255,255,0.1)", flexShrink: 0 }} />
                    <span style={{ fontSize: "12px", color: "#94A3B8", flex: 1 }}>{item.text}</span>
                    <span style={{ fontSize: "10px", color: "#64748B" }}>{item.due}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
                {[
                  { icon: BarChart3, label: "Meetings", value: "147", color: "#818CF8" },
                  { icon: CheckCircle2, label: "Tasks Done", value: "89", color: "#34D399" },
                  { icon: TrendingUp, label: "AI Score", value: "96%", color: "#60A5FA" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 + i * 0.12 }}
                    style={{
                      borderRadius: "12px",
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.04)",
                      padding: "12px",
                      textAlign: "center",
                    }}
                  >
                    <stat.icon style={{ width: "16px", height: "16px", color: stat.color, margin: "0 auto 6px" }} />
                    <div style={{ fontSize: "16px", fontWeight: 700, color: "#E8ECF1" }}>{stat.value}</div>
                    <div style={{ fontSize: "10px", color: "#64748B", fontWeight: 500 }}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating badges */}
            {[
              { icon: Calendar, label: "Deadline: May 15", left: "24px", bottom: "60px", delay: 1.0 },
              { icon: Users, label: "Assigned to Sarah", left: "16px", top: "20px", delay: 1.2 },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: card.delay, duration: 0.5 }}
                className="float-animation"
                style={{
                  position: "absolute",
                  left: card.left,
                  top: card.top,
                  bottom: card.bottom,
                  borderRadius: "12px",
                  background: "rgba(12,18,32,0.9)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "8px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#94A3B8",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  animationDelay: `${i * 0.5}s`,
                }}
              >
                <card.icon style={{ width: "14px", height: "14px", color: "#818CF8" }} />
                {card.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
