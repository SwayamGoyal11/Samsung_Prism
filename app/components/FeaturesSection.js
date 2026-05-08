"use client";
import { motion } from "framer-motion";
import {
  FileText,
  ListChecks,
  Clock,
  UserCheck,
  Search,
  Mail,
  BarChart3,
  LineChart,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "AI Summaries",
    desc: "Generate concise, structured summaries with key points highlighted automatically.",
  },
  {
    icon: ListChecks,
    title: "Action Items",
    desc: "AI identifies and organizes action items with assignees and priorities.",
  },
  {
    icon: Clock,
    title: "Deadline Detection",
    desc: "Automatically detect deadlines and add them to your task tracking system.",
  },
  {
    icon: UserCheck,
    title: "Person Detection",
    desc: "Identify who is responsible for each task and decision made.",
  },
  {
    icon: Search,
    title: "AI Search",
    desc: "Search across all meetings using natural language and get instant answers.",
  },
  {
    icon: Mail,
    title: "Follow-up Emails",
    desc: "Generate professional follow-up emails with summaries and next steps.",
  },
  {
    icon: BarChart3,
    title: "Productivity Dashboard",
    desc: "Track your team's meeting productivity with beautiful analytics and insights.",
  },
  {
    icon: LineChart,
    title: "Meeting Analytics",
    desc: "Visualize meeting frequency, duration trends, and participation metrics.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="relative overflow-hidden" style={{ padding: "120px 0 128px" }}>
      {/* Subtle glow */}
      <div className="absolute" style={{ top: 0, left: "50%", transform: "translateX(-50%)", width: "800px", height: "400px", background: "rgba(99,102,241,0.04)", borderRadius: "50%", filter: "blur(120px)", pointerEvents: "none" }} />

      <div className="relative z-10 site-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "80px", maxWidth: "640px", marginLeft: "auto", marginRight: "auto" }}
        >
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "4px 14px",
            borderRadius: "9999px",
            fontSize: "11px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            background: "rgba(255,255,255,0.03)",
            color: "#94A3B8",
            border: "1px solid rgba(255,255,255,0.06)",
            marginBottom: "24px",
          }}>
            Features
          </span>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "20px", color: "#E8ECF1" }}>
            Everything you need to{" "}
            <span className="gradient-text">master meetings</span>
          </h2>
          <p style={{ fontSize: "16px", color: "#94A3B8", lineHeight: 1.7 }}>
            From real-time transcription to AI-powered insights, transform every
            conversation into structured, actionable data.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="feature-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group"
              style={{
                position: "relative",
                padding: "28px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                cursor: "default",
                transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Top accent */}
              <div style={{
                position: "absolute",
                top: 0,
                left: "16px",
                right: "16px",
                height: "1px",
                background: "linear-gradient(to right, transparent, rgba(99,102,241,0), transparent)",
                transition: "all 0.5s",
              }} />

              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: "rgba(99,102,241,0.06)",
                border: "1px solid rgba(99,102,241,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                transition: "all 0.4s",
              }}>
                <feature.icon style={{ width: "18px", height: "18px", color: "#94A3B8" }} />
              </div>

              <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#E8ECF1", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                {feature.title}
                <ArrowUpRight style={{ width: "14px", height: "14px", color: "#64748B", opacity: 0, transition: "all 0.3s" }} />
              </h3>
              <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.7 }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
