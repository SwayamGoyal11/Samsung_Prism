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
      <div className="p-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2">
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${filter === f ? "bg-purple-500/15 text-purple-300 border border-purple-500/20" : "bg-white/5 text-[#6B7280] border border-white/5 hover:text-white"}`}>{f}</button>
            ))}
          </div>
          <div className="text-xs text-[#6B7280]">{filtered.length} tasks</div>
        </div>

        <div className="glass-card overflow-hidden">
          <table className="w-full text-xs">
            <thead><tr className="border-b border-white/5 text-[#6B7280]">
              <th className="text-left py-3 px-4 font-medium">Status</th>
              <th className="text-left py-3 px-4 font-medium">Task</th>
              <th className="text-left py-3 px-4 font-medium">Assignee</th>
              <th className="text-left py-3 px-4 font-medium">Source Meeting</th>
              <th className="text-left py-3 px-4 font-medium">Deadline</th>
              <th className="text-left py-3 px-4 font-medium">Priority</th>
            </tr></thead>
            <tbody>
              {filtered.map((t, i) => (
                <motion.tr key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 px-4">{statusIcon(t.status)}</td>
                  <td className="py-3 px-4 font-medium text-[#F9FAFB]">{t.task}</td>
                  <td className="py-3 px-4 text-[#9CA3AF]">{t.assignee}</td>
                  <td className="py-3 px-4 text-[#9CA3AF]">{t.meeting}</td>
                  <td className="py-3 px-4 text-[#9CA3AF]">{t.deadline}</td>
                  <td className="py-3 px-4"><span className={`px-2 py-0.5 rounded-full text-[10px] ${t.priority === "High" ? "bg-red-400/10 text-red-400" : t.priority === "Medium" ? "bg-yellow-400/10 text-yellow-400" : "bg-blue-400/10 text-blue-400"}`}>{t.priority}</span></td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
