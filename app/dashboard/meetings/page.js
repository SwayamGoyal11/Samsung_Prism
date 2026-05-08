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
      <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
            <input type="text" placeholder="Search meetings..." className="pl-10 pr-4 py-2 text-[13px] bg-white/[0.02] border border-white/[0.06] rounded-xl text-[#E8ECF1] placeholder-[#64748B] w-80 transition-all focus:bg-white/[0.04] focus:border-indigo-500/30 focus:outline-none focus:ring-4 focus:ring-indigo-500/10" />
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[13px] font-medium text-[#E8ECF1] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all">
              <Filter className="w-4 h-4" /> Filter
            </button>
            <Link href="/dashboard/upload" className="flex items-center gap-2 px-5 py-2 rounded-xl text-[13px] font-semibold text-white bg-indigo-500 hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-500/20">
              <Plus className="w-4 h-4" /> New Meeting
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          {meetings.map((m, i) => (
            <motion.div key={m.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
              <Link href={`/dashboard/meetings/${m.id}`} className="block p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                      <Video className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-[#E8ECF1] group-hover:text-indigo-400 transition-colors">{m.title}</h3>
                      <div className="flex items-center gap-5 mt-1.5 text-[12px] font-medium text-[#64748B]">
                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{m.date} at {m.time}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{m.duration}</span>
                        <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" />{m.participants} people</span>
                        <span className="flex items-center gap-1.5"><ListChecks className="w-3.5 h-3.5" />{m.tasks} tasks</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-md bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">{m.status}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
