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
      <div className="p-6 space-y-6">
        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {kpis.map((k, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="glass-card glass-card-hover p-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: `${k.color}15` }}>
                <k.icon className="w-4 h-4" style={{ color: k.color }} />
              </div>
              <div className="text-xl font-bold">{k.value}</div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[11px] text-[#6B7280]">{k.label}</span>
                <span className="text-[10px] text-green-400">{k.change}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Row 1 */}
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
            <h3 className="text-sm font-semibold mb-1">Meeting Frequency</h3>
            <p className="text-xs text-[#6B7280] mb-4">Monthly meetings overview</p>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={meetingFreq}>
                <defs><linearGradient id="gm" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#7C3AED" stopOpacity={0.3}/><stop offset="95%" stopColor="#7C3AED" stopOpacity={0}/></linearGradient></defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#6B7280" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#6B7280" }} />
                <Tooltip content={<CTip />} />
                <Area type="monotone" dataKey="count" stroke="#7C3AED" strokeWidth={2} fill="url(#gm)" name="Meetings" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card p-6">
            <h3 className="text-sm font-semibold mb-1">Task Completion Rate</h3>
            <p className="text-xs text-[#6B7280] mb-4">Completed vs pending tasks</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={taskCompletion} barGap={2}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#6B7280" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#6B7280" }} />
                <Tooltip content={<CTip />} />
                <Bar dataKey="completed" fill="#10B981" radius={[4, 4, 0, 0]} name="Completed" />
                <Bar dataKey="pending" fill="#F59E0B" radius={[4, 4, 0, 0]} name="Pending" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="glass-card p-6">
            <h3 className="text-sm font-semibold mb-1">Team Distribution</h3>
            <p className="text-xs text-[#6B7280] mb-4">Meetings by department</p>
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

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="glass-card p-6 lg:col-span-2">
            <h3 className="text-sm font-semibold mb-1">Average Meeting Duration</h3>
            <p className="text-xs text-[#6B7280] mb-4">Minutes per day</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={durationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#6B7280" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#6B7280" }} />
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
