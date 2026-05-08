"use client";
import { motion } from "framer-motion";
import TopBar from "../../components/TopBar";
import { BarChart3, TrendingUp, Clock, Users, CheckCircle2, Target } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, RadialBarChart, RadialBar } from "recharts";

const meetingFreq = [
  { name: "Jan", count: 18 }, { name: "Feb", count: 24 }, { name: "Mar", count: 20 },
  { name: "Apr", count: 28 }, { name: "May", count: 32 }, { name: "Jun", count: 26 },
  { name: "Jul", count: 35 }, { name: "Aug", count: 30 },
];

const taskCompletion = [
  { name: "Jan", completed: 15, pending: 5 }, { name: "Feb", completed: 20, pending: 8 },
  { name: "Mar", completed: 18, pending: 6 }, { name: "Apr", completed: 25, pending: 4 },
  { name: "May", completed: 30, pending: 7 }, { name: "Jun", completed: 22, pending: 3 },
  { name: "Jul", completed: 28, pending: 5 }, { name: "Aug", completed: 33, pending: 4 },
];

const teamData = [
  { name: "Engineering", value: 35, fill: "#7C3AED" },
  { name: "Design", value: 20, fill: "#06B6D4" },
  { name: "Marketing", value: 25, fill: "#8B5CF6" },
  { name: "Sales", value: 15, fill: "#22D3EE" },
  { name: "QA", value: 5, fill: "#EC4899" },
];

const durationData = [
  { name: "Mon", avg: 32 }, { name: "Tue", avg: 45 }, { name: "Wed", avg: 28 },
  { name: "Thu", avg: 50 }, { name: "Fri", avg: 35 }, { name: "Sat", avg: 15 }, { name: "Sun", avg: 10 },
];

const kpis = [
  { icon: BarChart3, label: "Meeting Frequency", value: "32/mo", change: "+14%", color: "#7C3AED" },
  { icon: CheckCircle2, label: "Task Completion", value: "87%", change: "+6%", color: "#10B981" },
  { icon: Users, label: "Team Productivity", value: "94%", change: "+5%", color: "#06B6D4" },
  { icon: Clock, label: "Avg Duration", value: "35 min", change: "-12%", color: "#F59E0B" },
  { icon: Target, label: "Decision Rate", value: "4.2/mtg", change: "+8%", color: "#8B5CF6" },
  { icon: TrendingUp, label: "Follow-up Rate", value: "92%", change: "+3%", color: "#EC4899" },
];

const CTip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className="glass-card p-2.5 text-xs">
        <p className="font-medium mb-1">{label}</p>
        {payload.map((p, i) => <p key={i} style={{ color: p.color || p.fill }}>{p.name}: {p.value}</p>)}
      </div>
    );
  }
  return null;
};

export default function AnalyticsPage() {
  return (
    <>
      <TopBar title="Analytics" subtitle="Meeting productivity insights" />
      <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {kpis.map((k, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.06] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 border" style={{ background: `${k.color}10`, borderColor: `${k.color}20` }}>
                <k.icon className="w-5 h-5" style={{ color: k.color }} />
              </div>
              <div className="text-[26px] font-bold text-[#E8ECF1] tracking-tight">{k.value}</div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[13px] font-medium text-[#64748B]">{k.label}</span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md" style={{ color: k.change.startsWith("+") ? "#34D399" : "#F87171", backgroundColor: k.change.startsWith("+") ? "rgba(52,211,153,0.1)" : "rgba(248,113,113,0.1)" }}>{k.change}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Row 1 */}
        <div className="grid xl:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6 border border-white/[0.06] rounded-2xl bg-white/[0.02]">
            <h3 className="text-[15px] font-semibold text-[#E8ECF1] mb-1">Meeting Frequency</h3>
            <p className="text-[13px] text-[#64748B] mb-6">Monthly meetings overview</p>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={meetingFreq}>
                <defs><linearGradient id="gm" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#7C3AED" stopOpacity={0.3}/><stop offset="95%" stopColor="#7C3AED" stopOpacity={0}/></linearGradient></defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B" }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B" }} dx={-10} />
                <Tooltip content={<CTip />} />
                <Area type="monotone" dataKey="count" stroke="#7C3AED" strokeWidth={2} fill="url(#gm)" name="Meetings" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card p-6 border border-white/[0.06] rounded-2xl bg-white/[0.02]">
            <h3 className="text-[15px] font-semibold text-[#E8ECF1] mb-1">Task Completion Rate</h3>
            <p className="text-[13px] text-[#64748B] mb-6">Completed vs pending tasks</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={taskCompletion} barGap={2}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B" }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B" }} dx={-10} />
                <Tooltip content={<CTip />} />
                <Bar dataKey="completed" fill="#10B981" radius={[4, 4, 0, 0]} name="Completed" />
                <Bar dataKey="pending" fill="#F59E0B" radius={[4, 4, 0, 0]} name="Pending" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid xl:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="glass-card p-6 border border-white/[0.06] rounded-2xl bg-white/[0.02]">
            <h3 className="text-[15px] font-semibold text-[#E8ECF1] mb-1">Team Distribution</h3>
            <p className="text-[13px] text-[#64748B] mb-6">Meetings by department</p>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={teamData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={4} dataKey="value">
                  {teamData.map((e, i) => <Cell key={i} fill={e.fill} />)}
                </Pie>
                <Tooltip content={<CTip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-3 justify-center mt-2">
              {teamData.map((t, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[10px] text-[#9CA3AF]">
                  <div className="w-2 h-2 rounded-full" style={{ background: t.fill }} />{t.name}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="glass-card p-6 lg:col-span-2 border border-white/[0.06] rounded-2xl bg-white/[0.02]">
            <h3 className="text-[15px] font-semibold text-[#E8ECF1] mb-1">Average Meeting Duration</h3>
            <p className="text-[13px] text-[#64748B] mb-6">Minutes per day</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={durationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B" }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748B" }} dx={-10} />
                <Tooltip content={<CTip />} />
                <Bar dataKey="avg" fill="#06B6D4" radius={[6, 6, 0, 0]} name="Avg Duration (min)" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </>
  );
}
