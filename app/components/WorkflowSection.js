"use client";
import { motion } from "framer-motion";
import {
  Upload,
  Brain,
  FileText,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    num: "01",
    title: "Upload or Record",
    desc: "Upload audio, video, or connect your meeting platform for real-time transcription.",
    color: "#7C3AED",
  },
  {
    icon: Brain,
    num: "02",
    title: "AI Processes",
    desc: "Our AI engine transcribes, analyzes sentiment, and extracts structured data from conversations.",
    color: "#8B5CF6",
  },
  {
    icon: FileText,
    num: "03",
    title: "Generate Insights",
    desc: "Get comprehensive summaries, action items, deadlines, and decision logs instantly.",
    color: "#06B6D4",
  },
  {
    icon: CheckCircle,
    num: "04",
    title: "Take Action",
    desc: "Assign tasks, send follow-ups, and track progress — all from one dashboard.",
    color: "#22D3EE",
  },
];

export default function WorkflowSection() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-cyan-500/5 blur-[120px] -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-6">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-[-0.02em] mb-6">
            AI Workflow in{" "}
            <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            From raw meeting recordings to actionable intelligence in minutes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 lg:gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[12%] right-[12%] h-px bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-cyan-500/30" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative text-center group"
            >
              {/* Step number circle */}
              <div className="relative mx-auto mb-8">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}20 0%, ${step.color}10 100%)`,
                    border: `1px solid ${step.color}30`,
                  }}
                >
                  <step.icon className="w-6 h-6" style={{ color: step.color }} />
                </div>
                <div
                  className="absolute inset-0 w-16 h-16 rounded-2xl mx-auto blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: step.color }}
                />
              </div>

              <span
                className="text-[11px] font-bold uppercase tracking-[0.15em] mb-4 block"
                style={{ color: step.color }}
              >
                STEP {step.num}
              </span>
              <h3 className="text-xl font-heading font-bold mb-4">{step.title}</h3>
              <p className="text-sm font-medium text-[#9CA3AF] leading-[1.7]">
                {step.desc}
              </p>

              {i < steps.length - 1 && (
                <ArrowRight strokeWidth={1.5} className="hidden md:block absolute top-16 -right-4 w-5 h-5 text-[#6B7280] transform -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
