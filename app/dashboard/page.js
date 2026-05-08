"use client";
import { motion } from "framer-motion";
import TopBar from "../components/TopBar";
import {
  Video,
  ListChecks,
  CheckCircle2,
  Clock,
  TrendingUp,
  Brain,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Calendar,
  Users,
  Zap,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const stats = [
  {
    icon: Video,
    label: "Total Meetings",
    value: "147",
    change: "+12%",
    up: true,
    color: "#7C3AED",
    bg: "rgba(124, 58, 237, 0.1)",
  },
  {
    icon: ListChecks,
    label: "Pending Tasks",
    value: "23",
    change: "-8%",
    up: false,
    color: "#F59E0B",
    bg: "rgba(245, 158, 11, 0.1)",
  },
  {
    icon: CheckCircle2,
    label: "Completed Tasks",
    value: "89",
    change: "+24%",
    up: true,
    color: "#10B981",
    bg: "rgba(16, 185, 129, 0.1)",
  },
  {
    icon: Clock,
    label: "Upcoming Deadlines",
    value: "7",
    change: "+3",
    up: true,
    color: "#06B6D4",
    bg: "rgba(6, 182, 212, 0.1)",
  },
  {
    icon: TrendingUp,
    label: "Productivity Score",
    value: "94%",
    change: "+5%",
    up: true,
    color: "#8B5CF6",
    bg: "rgba(139, 92, 246, 0.1)",
  },
  {
    icon: Brain,
    label: "AI Insights",
    value: "312",
    change: "+18%",
    up: true,
    color: "#EC4899",
    bg: "rgba(236, 72, 153, 0.1)",
  },
];

const meetingData = [
  { name: "Mon", meetings: 4, tasks: 8 },
  { name: "Tue", meetings: 6, tasks: 12 },
  { name: "Wed", meetings: 3, tasks: 5 },
  { name: "Thu", meetings: 8, tasks: 15 },
  { name: "Fri", meetings: 5, tasks: 10 },
  { name: "Sat", meetings: 2, tasks: 3 },
  { name: "Sun", meetings: 1, tasks: 2 },
];

const productivityData = [
  { name: "Jan", score: 72 },
  { name: "Feb", score: 78 },
  { name: "Mar", score: 74 },
  { name: "Apr", score: 82 },
  { name: "May", score: 88 },
  { name: "Jun", score: 85 },
  { name: "Jul", score: 92 },
  { name: "Aug", score: 94 },
];

const recentMeetings = [
  {
    title: "Q2 Product Strategy Review",
    time: "Today, 2:00 PM",
    duration: "45 min",
    participants: 6,
    status: "Completed",
    tasks: 5,
  },
  {
    title: "Engineering Sprint Planning",
    time: "Today, 10:00 AM",
    duration: "30 min",
    participants: 8,
    status: "Completed",
    tasks: 8,
  },
  {
    title: "Client Onboarding Call",
    time: "Yesterday, 3:30 PM",
    duration: "25 min",
    participants: 4,
    status: "Completed",
    tasks: 3,
  },
  {
    title: "Design System Workshop",
    time: "Yesterday, 11:00 AM",
    duration: "60 min",
    participants: 5,
    status: "Completed",
    tasks: 7,
  },
];

const upcomingDeadlines = [
  { task: "Update API documentation", assignee: "Sarah C.", date: "May 10", priority: "High" },
  { task: "Review design mockups", assignee: "James M.", date: "May 12", priority: "Medium" },
  { task: "Deploy staging build", assignee: "Alex K.", date: "May 14", priority: "High" },
  { task: "Finalize Q2 OKRs", assignee: "Priya S.", date: "May 15", priority: "Low" },
];

const aiInsights = [
  { text: "Meeting frequency increased 15% this week. Consider consolidating stand-ups.", type: "trend" },
  { text: "3 tasks from Monday's sprint meeting are overdue. Follow-up recommended.", type: "alert" },
  { text: "Team productivity score is at an all-time high of 94%. Great momentum!", type: "success" },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-3 text-xs">
        <p className="font-medium mb-1">{label}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.color }}>
            {p.name}: {p.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function DashboardPage() {
  return (
    <>
      <TopBar title="Dashboard" subtitle="Welcome back, John" />

      <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card p-5 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 border border-white/[0.06] rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent"
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: stat.bg }}
                >
                  <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
                </div>
                <div
                  className={`flex items-center gap-1 text-[12px] font-semibold px-2 py-1 rounded-full ${
                    stat.up ? "text-emerald-400 bg-emerald-400/10" : "text-rose-400 bg-rose-400/10"
                  }`}
                >
                  {stat.up ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div className="text-[28px] font-bold text-[#E8ECF1] tracking-tight">{stat.value}</div>
              <div className="text-[13px] font-medium text-[#64748B] mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid xl:grid-cols-2 gap-8">
          {/* Meeting Activity Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glass-card p-6 border border-white/[0.06] rounded-2xl bg-white/[0.02]"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-[15px] font-semibold text-[#E8ECF1]">Meeting Activity</h3>
                <p className="text-[13px] text-[#64748B] mt-1">This week&apos;s overview</p>
              </div>
              <button className="p-2 rounded-lg hover:bg-white/[0.04] transition-colors border border-transparent hover:border-white/[0.06]">
                <MoreHorizontal className="w-4 h-4 text-[#6B7280]" />
              </button>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={meetingData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B" }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B" }} dx={-10} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="meetings" fill="#7C3AED" radius={[6, 6, 0, 0]} name="Meetings" />
                <Bar dataKey="tasks" fill="#06B6D4" radius={[6, 6, 0, 0]} name="Tasks" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Productivity Trend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="glass-card p-6 border border-white/[0.06] rounded-2xl bg-white/[0.02]"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-[15px] font-semibold text-[#E8ECF1]">Productivity Trend</h3>
                <p className="text-[13px] text-[#64748B] mt-1">Monthly score</p>
              </div>
              <button className="p-2 rounded-lg hover:bg-white/[0.04] transition-colors border border-transparent hover:border-white/[0.06]">
                <MoreHorizontal className="w-4 h-4 text-[#6B7280]" />
              </button>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={productivityData}>
                <defs>
                  <linearGradient id="gradientProd" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#7C3AED" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B" }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B" }} domain={[60, 100]} dx={-10} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="score"
                  stroke="#7C3AED"
                  strokeWidth={2}
                  fill="url(#gradientProd)"
                  name="Score"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="grid xl:grid-cols-3 gap-8">
          {/* Recent Meetings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="glass-card p-6 border border-white/[0.06] rounded-2xl bg-white/[0.02]"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-[15px] font-semibold text-[#E8ECF1]">Recent Meetings</h3>
              <a href="/dashboard/meetings" className="text-[13px] font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                View All
              </a>
            </div>
            <div className="space-y-3">
              {recentMeetings.map((m, i) => (
                <a
                  key={i}
                  href={`/dashboard/meetings/${i + 1}`}
                  className="block p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-[14px] font-medium text-[#E8ECF1] group-hover:text-indigo-300 transition-colors line-clamp-1">
                      {m.title}
                    </h4>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-emerald-400/10 text-emerald-400 shrink-0 ml-2 border border-emerald-400/20">
                      {m.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-[12px] font-medium text-[#64748B]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {m.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      {m.participants}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ListChecks className="w-3.5 h-3.5" />
                      {m.tasks} tasks
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Deadlines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="glass-card p-6 border border-white/[0.06] rounded-2xl bg-white/[0.02]"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-[15px] font-semibold text-[#E8ECF1]">Upcoming Deadlines</h3>
              <a href="/dashboard/tasks" className="text-[13px] font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                View All
              </a>
            </div>
            <div className="space-y-3">
              {upcomingDeadlines.map((d, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-[14px] font-medium text-[#E8ECF1] line-clamp-1">{d.task}</h4>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-md shrink-0 ml-2 border ${
                        d.priority === "High"
                          ? "bg-rose-400/10 text-rose-400 border-rose-400/20"
                          : d.priority === "Medium"
                          ? "bg-amber-400/10 text-amber-400 border-amber-400/20"
                          : "bg-blue-400/10 text-blue-400 border-blue-400/20"
                      }`}
                    >
                      {d.priority}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-[12px] font-medium text-[#64748B]">
                    <span>{d.assignee}</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {d.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="glass-card p-6 border border-white/[0.06] rounded-2xl bg-white/[0.02]"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-indigo-400" />
                <h3 className="text-[15px] font-semibold text-[#E8ECF1]">AI Insights</h3>
              </div>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                Live
              </span>
            </div>
            <div className="space-y-3">
              {aiInsights.map((insight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.15 }}
                  className={`p-4 rounded-xl border ${
                    insight.type === "alert"
                      ? "bg-amber-400/5 border-amber-400/10"
                      : insight.type === "success"
                      ? "bg-emerald-400/5 border-emerald-400/10"
                      : "bg-indigo-400/5 border-indigo-400/10"
                  }`}
                >
                  <p className="text-[13px] font-medium text-[#94A3B8] leading-relaxed">
                    {insight.text}
                  </p>
                </motion.div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-[13px] font-semibold text-indigo-300 transition-colors flex items-center justify-center gap-2 border border-indigo-500/20">
              <Brain className="w-4 h-4" />
              Generate More Insights
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
}
