"use client";
import { motion } from "framer-motion";
import { Upload, Brain, FileText, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Upload,
    num: "01",
    title: "Upload or Record",
    desc: "Upload audio, video, or connect your meeting platform for real-time transcription.",
  },
  {
    icon: Brain,
    num: "02",
    title: "AI Processes",
    desc: "Our AI engine transcribes, analyzes sentiment, and extracts structured data.",
  },
  {
    icon: FileText,
    num: "03",
    title: "Generate Insights",
    desc: "Get comprehensive summaries, action items, deadlines, and decision logs.",
  },
  {
    icon: CheckCircle,
    num: "04",
    title: "Take Action",
    desc: "Assign tasks, send follow-ups, and track progress from one dashboard.",
  },
];

export default function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative z-10 site-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "80px", maxWidth: "560px", marginLeft: "auto", marginRight: "auto" }}
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
            How It Works
          </span>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "20px", color: "#E8ECF1" }}>
            AI workflow in{" "}
            <span className="gradient-text">4 simple steps</span>
          </h2>
          <p style={{ fontSize: "16px", color: "#94A3B8", lineHeight: 1.7 }}>
            From raw meeting recordings to actionable intelligence in minutes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px">
            <div className="w-full h-full bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-blue-500/20" />
          </div>

          <div className="workflow-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px" }}>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="group"
                style={{ textAlign: "center" }}
              >
                {/* Icon */}
                <div style={{ position: "relative", marginBottom: "32px", display: "flex", justifyContent: "center" }}>
                  <div 
                    style={{
                      width: "52px", height: "52px", borderRadius: "16px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      position: "relative", zIndex: 10,
                      background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                      transition: "all 0.4s"
                    }} 
                    className="group-hover:border-indigo-500/20 group-hover:bg-indigo-500/[0.06]"
                  >
                    <step.icon style={{ width: "20px", height: "20px", color: "#94A3B8", transition: "color 0.4s" }} className="group-hover:text-indigo-400" />
                  </div>
                </div>

                {/* Step label */}
                <span style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(129,140,248,0.7)", display: "block", marginBottom: "12px" }}>
                  Step {step.num}
                </span>

                <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#E8ECF1", marginBottom: "12px" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.7, maxWidth: "240px", marginLeft: "auto", marginRight: "auto" }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
