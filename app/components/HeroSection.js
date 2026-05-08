"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Sparkles,
  Zap,
  BarChart3,
  CheckCircle2,
  Users,
  Calendar,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

export default function HeroSection() {
  const floatingCards = [
    {
      icon: CheckCircle2,
      label: "3 Action Items Extracted",
      color: "#7C3AED",
      x: -60,
      y: 40,
      delay: 0.8,
    },
    {
      icon: Calendar,
      label: "Deadline: May 15",
      color: "#06B6D4",
      x: 60,
      y: -30,
      delay: 1.0,
    },
    {
      icon: Users,
      label: "Assigned to Sarah",
      color: "#7C3AED",
      x: -40,
      y: -60,
      delay: 1.2,
    },
    {
      icon: TrendingUp,
      label: "Productivity +24%",
      color: "#06B6D4",
      x: 50,
      y: 60,
      delay: 1.4,
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-mesh" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="ambient-glow ambient-glow-purple" />
      <div className="ambient-glow ambient-glow-cyan" />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -50, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-[11px] font-bold uppercase tracking-[0.15em] text-purple-300 mb-8"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Powered by Advanced AI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative text-5xl sm:text-6xl lg:text-[76px] font-heading font-extrabold leading-[1.05] tracking-[-0.02em] mb-6"
            >
              <span className="absolute inset-0 blur-[80px] opacity-40 bg-gradient-to-r from-purple-500 to-cyan-500 -z-10" />
              Transform Meetings Into{" "}
              <span className="gradient-text">Actionable Intelligence</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg sm:text-xl font-medium text-[#9CA3AF] leading-[1.7] mb-10 max-w-xl"
            >
              AI-powered meeting assistant that summarizes discussions, extracts
              action items, tracks deadlines, and automates productivity
              workflows.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/dashboard"
                className="glow-btn px-8 py-4 text-base font-semibold flex items-center gap-2.5"
              >
                Start Free
                <ArrowRight className="w-4.5 h-4.5" />
              </Link>
              <button className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-base font-medium text-[#9CA3AF] hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2.5 backdrop-blur-sm">
                <Play className="w-4 h-4" />
                Watch Demo
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex items-center gap-6 text-sm text-[#6B7280]"
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#0B1020]"
                    style={{
                      background: `linear-gradient(135deg, ${
                        ["#7C3AED", "#06B6D4", "#8B5CF6", "#22D3EE"][i]
                      } 0%, ${
                        ["#06B6D4", "#7C3AED", "#22D3EE", "#8B5CF6"][i]
                      } 100%)`,
                    }}
                  />
                ))}
              </div>
              <span>
                Trusted by <span className="text-white font-medium">2,400+</span>{" "}
                teams worldwide
              </span>
            </motion.div>
          </div>

          {/* Right - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="relative hidden lg:block"
          >
            {/* Main Dashboard Card */}
            <div className="glass-card p-6 relative">
              {/* Dashboard header mockup */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                  <Zap className="w-3 h-3 text-purple-400" />
                  AI Processing
                </div>
              </div>

              {/* Meeting Summary Card */}
              <div className="bg-white/[0.03] rounded-xl p-4 mb-4 border border-white/5">
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium">AI Meeting Summary</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2.5 bg-white/5 rounded-full w-full" />
                  <div className="h-2.5 bg-white/5 rounded-full w-4/5" />
                  <div className="h-2.5 bg-white/5 rounded-full w-3/5" />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: BarChart3, label: "Meetings", value: "147", color: "text-purple-400" },
                  { icon: CheckCircle2, label: "Tasks", value: "89", color: "text-cyan-400" },
                  { icon: Zap, label: "AI Score", value: "96%", color: "text-green-400" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + i * 0.15 }}
                    className="bg-white/[0.03] rounded-lg p-3 border border-white/5 text-center"
                  >
                    <stat.icon className={`w-4 h-4 ${stat.color} mx-auto mb-1.5`} />
                    <div className="text-lg font-bold">{stat.value}</div>
                    <div className="text-[10px] text-[#6B7280]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: card.delay, duration: 0.5 }}
                className="absolute glass-card px-4 py-2.5 flex items-center gap-2 text-xs font-medium float-animation"
                style={{
                  right: card.x > 0 ? `-${card.x}px` : "auto",
                  left: card.x < 0 ? `${Math.abs(card.x) - 40}px` : "auto",
                  top: card.y < 0 ? `${Math.abs(card.y)}px` : "auto",
                  bottom: card.y > 0 ? `${card.y}px` : "auto",
                  animationDelay: `${i * 0.5}s`,
                }}
              >
                <card.icon
                  className="w-3.5 h-3.5"
                  style={{ color: card.color }}
                />
                <span className="text-[#9CA3AF]">{card.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
