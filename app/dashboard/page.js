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

      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card glass-card-hover p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: stat.bg }}
                >
                  <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
                </div>
                <div
                  className={`flex items-center gap-0.5 text-xs font-medium ${
                    stat.up ? "text-green-400" : "text-red-400"
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
              <div className="text-2xl font-bold stat-number">{stat.value}</div>
              <div className="text-xs text-[#6B7280] mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Meeting Activity Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-sm font-semibold">Meeting Activity</h3>
                <p className="text-xs text-[#6B7280] mt-0.5">This week&apos;s overview</p>
              </div>
              <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
                <MoreHorizontal className="w-4 h-4 text-[#6B7280]" />
              </button>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={meetingData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#6B7280" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#6B7280" }} />
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
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-sm font-semibold">Productivity Trend</h3>
                <p className="text-xs text-[#6B7280] mt-0.5">Monthly score</p>
              </div>
              <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
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
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#6B7280" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#6B7280" }} domain={[60, 100]} />
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
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Meetings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="glass-card p-6 lg:col-span-1"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-sm font-semibold">Recent Meetings</h3>
              <a href="/dashboard/meetings" className="text-xs text-purple-400 hover:text-purple-300">
                View All
              </a>
            </div>
            <div className="space-y-3">
              {recentMeetings.map((m, i) => (
                <a
                  key={i}
                  href={`/dashboard/meetings/${i + 1}`}
                  className="block p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-purple-500/20 transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-sm font-medium group-hover:text-purple-300 transition-colors line-clamp-1">
                      {m.title}
                    </h4>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-400/10 text-green-400 shrink-0 ml-2">
                      {m.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-[#6B7280]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {m.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {m.participants}
                    </span>
                    <span className="flex items-center gap-1">
                      <ListChecks className="w-3 h-3" />
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
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-sm font-semibold">Upcoming Deadlines</h3>
              <a href="/dashboard/tasks" className="text-xs text-purple-400 hover:text-purple-300">
                View All
              </a>
            </div>
            <div className="space-y-3">
              {upcomingDeadlines.map((d, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/5"
                >
                  <div className="flex items-start justify-between mb-1.5">
                    <h4 className="text-sm font-medium line-clamp-1">{d.task}</h4>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 ml-2 ${
                        d.priority === "High"
                          ? "bg-red-400/10 text-red-400"
                          : d.priority === "Medium"
                          ? "bg-yellow-400/10 text-yellow-400"
                          : "bg-blue-400/10 text-blue-400"
                      }`}
                    >
                      {d.priority}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-[#6B7280]">
                    <span>{d.assignee}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
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
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <h3 className="text-sm font-semibold">AI Insights</h3>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300">
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
                  className={`p-3 rounded-xl border ${
                    insight.type === "alert"
                      ? "bg-yellow-400/5 border-yellow-400/10"
                      : insight.type === "success"
                      ? "bg-green-400/5 border-green-400/10"
                      : "bg-purple-400/5 border-purple-400/10"
                  }`}
                >
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    {insight.text}
                  </p>
                </motion.div>
              ))}
            </div>
            <button className="w-full mt-4 py-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-xs font-medium text-purple-300 transition-colors flex items-center justify-center gap-2">
              <Brain className="w-3.5 h-3.5" />
              Generate More Insights
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
}
