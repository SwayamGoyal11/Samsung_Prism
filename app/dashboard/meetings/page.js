"use client";
import { motion } from "framer-motion";
import TopBar from "../../components/TopBar";
import Link from "next/link";
import { Video, Calendar, Users, Clock, ListChecks, Search, Filter, Plus } from "lucide-react";

const meetings = [
  { id: 1, title: "Q2 Product Strategy Review", date: "May 7, 2026", time: "2:00 PM", duration: "45 min", participants: 6, tasks: 5, status: "Completed" },
  { id: 2, title: "Engineering Sprint Planning", date: "May 7, 2026", time: "10:00 AM", duration: "30 min", participants: 8, tasks: 8, status: "Completed" },
  { id: 3, title: "Client Onboarding Call", date: "May 6, 2026", time: "3:30 PM", duration: "25 min", participants: 4, tasks: 3, status: "Completed" },
  { id: 4, title: "Design System Workshop", date: "May 6, 2026", time: "11:00 AM", duration: "60 min", participants: 5, tasks: 7, status: "Completed" },
  { id: 5, title: "Investor Update Prep", date: "May 5, 2026", time: "4:00 PM", duration: "35 min", participants: 3, tasks: 4, status: "Completed" },
  { id: 6, title: "Marketing Campaign Review", date: "May 5, 2026", time: "9:00 AM", duration: "40 min", participants: 7, tasks: 6, status: "Completed" },
];

export default function MeetingsPage() {
  return (
    <>
      <TopBar title="Meetings" subtitle="All your meeting recordings and analyses" />
      <div className="p-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
            <input type="text" placeholder="Search meetings..." className="pl-10 pr-4 py-2.5 text-sm bg-white/5 border border-white/8 rounded-xl text-white placeholder-[#6B7280] w-72" />
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/8 text-sm text-[#9CA3AF] hover:bg-white/8 transition-colors">
              <Filter className="w-4 h-4" /> Filter
            </button>
            <Link href="/dashboard/upload" className="glow-btn px-5 py-2.5 text-sm flex items-center gap-2">
              <Plus className="w-4 h-4" /> New Meeting
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          {meetings.map((m, i) => (
            <motion.div key={m.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
              <Link href={`/dashboard/meetings/${m.id}`} className="block glass-card glass-card-hover p-5 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-purple-500/10 flex items-center justify-center">
                      <Video className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold group-hover:text-purple-300 transition-colors">{m.title}</h3>
                      <div className="flex items-center gap-4 mt-1.5 text-xs text-[#6B7280]">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{m.date} at {m.time}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{m.duration}</span>
                        <span className="flex items-center gap-1"><Users className="w-3 h-3" />{m.participants} people</span>
                        <span className="flex items-center gap-1"><ListChecks className="w-3 h-3" />{m.tasks} tasks</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-green-400/10 text-green-400">{m.status}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
