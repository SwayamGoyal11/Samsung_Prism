"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import TopBar from "../../components/TopBar";
import { ListChecks, CheckCircle2, Circle, Clock, AlertCircle, Filter, Search } from "lucide-react";

const allTasks = [
  { task: "Complete API refactor Phase 2", assignee: "Sarah Chen", meeting: "Q2 Strategy Review", deadline: "May 20", status: "In Progress", priority: "High" },
  { task: "Finalize marketing campaign assets", assignee: "Priya Sharma", meeting: "Q2 Strategy Review", deadline: "May 25", status: "In Progress", priority: "Medium" },
  { task: "Optimize analytics data pipeline", assignee: "Alex Kim", meeting: "Q2 Strategy Review", deadline: "May 18", status: "Pending", priority: "High" },
  { task: "Design handoff for new dashboard", assignee: "James Mitchell", meeting: "Q2 Strategy Review", deadline: "May 10", status: "Completed", priority: "Medium" },
  { task: "Expand QA test coverage", assignee: "Maria Lopez", meeting: "Q2 Strategy Review", deadline: "May 22", status: "Pending", priority: "High" },
  { task: "Update user onboarding flow", assignee: "John Doe", meeting: "Sprint Planning", deadline: "May 15", status: "In Progress", priority: "Medium" },
  { task: "Fix authentication edge cases", assignee: "Sarah Chen", meeting: "Sprint Planning", deadline: "May 12", status: "Completed", priority: "High" },
  { task: "Create investor deck slides", assignee: "Priya Sharma", meeting: "Investor Prep", deadline: "May 14", status: "Completed", priority: "High" },
];

export default function TasksPage() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Pending", "In Progress", "Completed"];
  const filtered = filter === "All" ? allTasks : allTasks.filter(t => t.status === filter);

  const statusIcon = (s) => s === "Completed" ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : s === "In Progress" ? <Clock className="w-4 h-4 text-yellow-400" /> : <Circle className="w-4 h-4 text-blue-400" />;

  return (
    <>
      <TopBar title="Tasks" subtitle="Track action items from meetings" />
      <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2">
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-xl text-[13px] font-medium transition-all ${filter === f ? "bg-indigo-500/[0.08] text-indigo-300 border border-indigo-500/20 shadow-sm" : "bg-white/[0.02] text-[#64748B] border border-white/[0.06] hover:text-[#E8ECF1] hover:bg-white/[0.04]"}`}>{f}</button>
            ))}
          </div>
          <div className="text-[13px] font-medium text-[#64748B]">{filtered.length} tasks</div>
        </div>

        <div className="glass-card overflow-hidden border border-white/[0.06] rounded-2xl bg-white/[0.02]">
          <table className="w-full text-[13px]">
            <thead><tr className="border-b border-white/[0.06] text-[#64748B]">
              <th className="text-left py-4 px-6 font-medium">Status</th>
              <th className="text-left py-4 px-6 font-medium">Task</th>
              <th className="text-left py-4 px-6 font-medium">Assignee</th>
              <th className="text-left py-4 px-6 font-medium">Source Meeting</th>
              <th className="text-left py-4 px-6 font-medium">Deadline</th>
              <th className="text-left py-4 px-6 font-medium">Priority</th>
            </tr></thead>
            <tbody>
              {filtered.map((t, i) => (
                <motion.tr key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }} className="border-b border-white/[0.06] hover:bg-white/[0.03] transition-colors group">
                  <td className="py-4 px-6">{statusIcon(t.status)}</td>
                  <td className="py-4 px-6 font-medium text-[#E8ECF1] group-hover:text-indigo-300 transition-colors">{t.task}</td>
                  <td className="py-4 px-6 text-[#94A3B8]">{t.assignee}</td>
                  <td className="py-4 px-6 text-[#94A3B8]">{t.meeting}</td>
                  <td className="py-4 px-6 text-[#94A3B8]">{t.deadline}</td>
                  <td className="py-4 px-6"><span className={`px-2.5 py-1 rounded-md font-semibold text-[11px] border ${t.priority === "High" ? "bg-rose-400/10 text-rose-400 border-rose-400/20" : t.priority === "Medium" ? "bg-amber-400/10 text-amber-400 border-amber-400/20" : "bg-blue-400/10 text-blue-400 border-blue-400/20"}`}>{t.priority}</span></td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
