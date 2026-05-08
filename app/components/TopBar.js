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
    <header className="sticky top-0 z-30 h-16 flex items-center justify-between px-6 bg-[#0B1020]/80 backdrop-blur-xl border-b border-white/5">
      {/* Left - Title */}
      <div>
        <h1 className="text-lg font-bold">{title || "Dashboard"}</h1>
        {subtitle && (
          <p className="text-xs text-[#6B7280]">{subtitle}</p>
        )}
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <motion.div
          animate={{ width: searchFocused ? 300 : 220 }}
          className="relative hidden sm:block"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
          <input
            type="text"
            placeholder="Search meetings..."
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="w-full pl-10 pr-12 py-2 text-sm bg-white/5 border border-white/8 rounded-xl text-[#F9FAFB] placeholder-[#6B7280] transition-all duration-300 focus:bg-white/8"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[10px] text-[#6B7280]">
            <Command className="w-3 h-3" />K
          </div>
        </motion.div>

        {/* AI Status */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-xs font-medium text-purple-300 hidden sm:inline">
            AI Active
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
        </div>

        {/* Notifications */}
        <button className="relative p-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/8 hover:border-white/10 transition-all duration-200">
          <Bell className="w-4 h-4 text-[#9CA3AF]" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-purple-500 pulse-dot" />
        </button>

        {/* User Avatar */}
        <button className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center text-xs font-bold hover:opacity-90 transition-opacity">
          JD
        </button>
      </div>
    </header>
  );
}
