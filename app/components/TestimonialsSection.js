"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Engineering, TechFlow",
    text: "MeetingAI has completely transformed how our engineering team operates. We save 10+ hours per week on meeting notes and follow-ups.",
    rating: 5,
  },
  {
    name: "James Mitchell",
    role: "Product Lead, Startup.io",
    text: "The AI summary quality is incredible. It captures nuances that I would have missed in my own notes. This is a game-changer.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "COO, NexaScale",
    text: "We deployed MeetingAI across 8 teams. Productivity metrics jumped 34% in the first month. The deadline tracking alone is worth it.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Loved by <span className="gradient-text">Teams Everywhere</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card glass-card-hover p-6 relative"
            >
              <Quote className="w-8 h-8 text-purple-500/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{
                    background: `linear-gradient(135deg, ${
                      ["#7C3AED", "#06B6D4", "#8B5CF6"][i]
                    } 0%, ${
                      ["#06B6D4", "#7C3AED", "#22D3EE"][i]
                    } 100%)`,
                  }}
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-[#6B7280]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
