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
      <div className="p-8 max-w-[1600px] mx-auto space-y-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((int, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold" style={{ background: `${int.color}15`, color: int.color }}>
                  {int.name[0]}
                </div>
                {int.status === "connected" ? (
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-md border border-emerald-400/20"><Check className="w-3.5 h-3.5" />Connected</span>
                ) : (
                  <span className="text-[11px] font-semibold text-[#94A3B8] bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06]">Available</span>
                )}
              </div>
              <h3 className="text-[15px] font-semibold text-[#E8ECF1] mb-1">{int.name}</h3>
              <p className="text-[13px] text-[#64748B] mb-5">{int.desc}</p>
              <button className={`w-full py-2.5 rounded-xl text-[13px] font-semibold transition-all ${int.status === "connected" ? "bg-white/[0.04] text-[#E8ECF1] border border-white/[0.06] hover:bg-white/[0.08]" : "bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg shadow-indigo-500/20"}`}>
                {int.status === "connected" ? "Configure" : "Connect"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
