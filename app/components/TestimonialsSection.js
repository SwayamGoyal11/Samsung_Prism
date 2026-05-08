"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechFlow",
    text: "MeetingAI has completely transformed how our engineering team operates. We save 10+ hours per week on meeting notes and follow-ups.",
    metric: "Saved 12 hrs/week",
    rating: 5,
  },
  {
    name: "James Mitchell",
    role: "Product Lead",
    company: "Startup.io",
    text: "The AI summary quality is incredible. It captures nuances that I would have missed in my own notes. An absolute game-changer for our team.",
    metric: "2x faster decisions",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "COO",
    company: "NexaScale",
    text: "We deployed MeetingAI across 8 teams. Productivity metrics jumped 34% in the first month. The deadline tracking alone is worth it.",
    metric: "34% productivity boost",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-32 lg:py-40">
      <div className="relative z-10 site-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}
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
            Testimonials
          </span>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "20px", color: "#E8ECF1" }}>
            Loved by{" "}
            <span className="gradient-text">teams everywhere</span>
          </h2>
          <p style={{ fontSize: "16px", color: "#94A3B8", lineHeight: 1.7 }}>
            See how leading teams use MeetingAI to transform their workflows.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="testimonial-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px" }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative p-7 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.04] transition-all duration-400"
            >
              {/* Quote icon */}
              <Quote className="w-7 h-7 text-indigo-500/15 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Metric badge */}
              <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-indigo-500/[0.06] border border-indigo-500/[0.1] text-[11px] font-semibold text-indigo-400 mb-5">
                {t.metric}
              </div>

              {/* Quote */}
              <p className="text-[14px] text-[#94A3B8] leading-[1.75] mb-7">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-bold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${
                      ["#6366F1", "#3B82F6", "#8B5CF6"][i]
                    } 0%, ${
                      ["#3B82F6", "#6366F1", "#06B6D4"][i]
                    } 100%)`,
                  }}
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-[#E8ECF1]">
                    {t.name}
                  </div>
                  <div className="text-[12px] text-[#64748B]">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
