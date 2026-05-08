"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Bell,
  Sparkles,
  Command,
} from "lucide-react";

export default function TopBar({ title, subtitle }) {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-30 h-[72px] flex items-center justify-between px-8 bg-[#060B14]/80 backdrop-blur-xl border-b border-white/[0.06]">
      {/* Left - Title */}
      <div>
        <h1 className="text-[18px] font-bold text-[#E8ECF1] tracking-[-0.01em]">{title || "Dashboard"}</h1>
        {subtitle && (
          <p className="text-[13px] text-[#94A3B8] mt-0.5">{subtitle}</p>
        )}
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <motion.div
          animate={{ width: searchFocused ? 300 : 220 }}
          className="relative hidden sm:block"
        >
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
          <input
            type="text"
            placeholder="Search meetings..."
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="w-full pl-10 pr-12 py-2 text-[13px] bg-white/[0.02] border border-white/[0.06] rounded-xl text-[#E8ECF1] placeholder-[#64748B] transition-all duration-300 focus:bg-white/[0.04] focus:border-indigo-500/30 focus:outline-none focus:ring-4 focus:ring-indigo-500/10"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[10px] font-medium text-[#64748B] bg-white/[0.03] px-1.5 py-0.5 rounded border border-white/[0.06]">
            <Command className="w-3 h-3" />K
          </div>
        </motion.div>

        {/* AI Status */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/[0.08] border border-indigo-500/[0.15]">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span className="text-[12px] font-semibold text-indigo-300 hidden sm:inline tracking-wide">
            AI Active
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
        </div>

        {/* Notifications */}
        <button className="relative p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-200">
          <Bell className="w-[18px] h-[18px] text-[#94A3B8]" />
          <span className="absolute top-[9px] right-[9px] w-2 h-2 rounded-full border-2 border-[#060B14] bg-indigo-500 pulse-dot" />
        </button>

        {/* User Avatar */}
        <button className="w-[38px] h-[38px] rounded-xl gradient-bg flex items-center justify-center text-[13px] font-bold text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
          JD
        </button>
      </div>
    </header>
  );
}
