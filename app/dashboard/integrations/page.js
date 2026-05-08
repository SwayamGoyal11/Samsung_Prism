"use client";
import { motion } from "framer-motion";
import TopBar from "../../components/TopBar";
import { Plug, Check, ExternalLink } from "lucide-react";

const integrations = [
  { name: "Zoom", desc: "Auto-join and record Zoom meetings", status: "connected", color: "#2D8CFF" },
  { name: "Google Meet", desc: "Sync with Google Calendar and Meet", status: "connected", color: "#00AC47" },
  { name: "Microsoft Teams", desc: "Connect to Teams meetings and channels", status: "available", color: "#6264A7" },
  { name: "Slack", desc: "Send summaries and tasks to Slack channels", status: "connected", color: "#E01E5A" },
  { name: "Notion", desc: "Export meeting notes to Notion pages", status: "available", color: "#FFFFFF" },
  { name: "Jira", desc: "Create Jira tickets from action items", status: "available", color: "#0052CC" },
  { name: "Asana", desc: "Sync tasks with Asana projects", status: "available", color: "#F06A6A" },
  { name: "Google Calendar", desc: "Auto-detect upcoming meetings", status: "connected", color: "#4285F4" },
];

export default function IntegrationsPage() {
  return (
    <>
      <TopBar title="Integrations" subtitle="Connect your favorite tools" />
      <div className="p-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {integrations.map((int, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
              className="glass-card glass-card-hover p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold" style={{ background: `${int.color}15`, color: int.color }}>
                  {int.name[0]}
                </div>
                {int.status === "connected" ? (
                  <span className="flex items-center gap-1 text-[10px] text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full"><Check className="w-3 h-3" />Connected</span>
                ) : (
                  <span className="text-[10px] text-[#6B7280] bg-white/5 px-2 py-0.5 rounded-full">Available</span>
                )}
              </div>
              <h3 className="text-sm font-semibold mb-1">{int.name}</h3>
              <p className="text-[11px] text-[#6B7280] mb-3">{int.desc}</p>
              <button className={`w-full py-2 rounded-lg text-xs font-medium transition-colors ${int.status === "connected" ? "bg-white/5 text-[#9CA3AF] hover:bg-white/8" : "bg-purple-500/15 text-purple-300 hover:bg-purple-500/25"}`}>
                {int.status === "connected" ? "Configure" : "Connect"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
