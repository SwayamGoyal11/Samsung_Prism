"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TopBar from "../../../components/TopBar";
import {
  FileText, ListChecks, Clock, Users, AlertTriangle, Mail, MessageSquare, Download,
  Sparkles, CheckCircle2, Circle, ArrowLeft, Copy, Send, Edit3, Brain, ChevronDown, ChevronUp
} from "lucide-react";
import Link from "next/link";

const meetingData = {
  title: "Q2 Product Strategy Review",
  date: "May 7, 2026",
  time: "2:00 PM – 2:45 PM",
  duration: "45 minutes",
  participants: [
    { name: "John Doe", role: "Product Lead" },
    { name: "Sarah Chen", role: "Engineering Manager" },
    { name: "James Mitchell", role: "Design Lead" },
    { name: "Priya Sharma", role: "Marketing Head" },
    { name: "Alex Kim", role: "Data Analyst" },
    { name: "Maria Lopez", role: "QA Lead" },
  ],
  summary: "The team reviewed Q2 product milestones and discussed the launch timeline for the new AI dashboard feature. Key decisions included prioritizing the mobile-first approach and allocating additional engineering resources to the API refactor. The marketing team presented the go-to-market strategy with a target launch date of June 15th. Concerns were raised about testing coverage for the new analytics module.",
  transcript: [
    { speaker: "John Doe", time: "0:00", text: "Alright everyone, let's kick off the Q2 strategy review. Sarah, can you start with the engineering update?" },
    { speaker: "Sarah Chen", time: "2:15", text: "Sure. We've completed 78% of the sprint goals. The API refactor is on track, but we need two more weeks for the analytics module." },
    { speaker: "James Mitchell", time: "5:30", text: "From the design side, the new dashboard mockups are finalized. We're ready for development handoff this week." },
    { speaker: "Priya Sharma", time: "8:45", text: "Marketing-wise, we're targeting June 15th for the public launch. The campaign assets are 60% complete." },
    { speaker: "Alex Kim", time: "12:00", text: "The data pipeline for the analytics module needs performance optimization. Current response times are above our 200ms threshold." },
    { speaker: "Maria Lopez", time: "15:20", text: "QA has flagged concerns about test coverage for the analytics module. We recommend adding two more QA sprints before launch." },
  ],
  actionItems: [
    { task: "Complete API refactor Phase 2", assignee: "Sarah Chen", deadline: "May 20", status: "In Progress" },
    { task: "Finalize marketing campaign assets", assignee: "Priya Sharma", deadline: "May 25", status: "In Progress" },
    { task: "Optimize analytics data pipeline", assignee: "Alex Kim", deadline: "May 18", status: "Pending" },
    { task: "Design handoff for new dashboard", assignee: "James Mitchell", deadline: "May 10", status: "Completed" },
    { task: "Expand QA test coverage for analytics", assignee: "Maria Lopez", deadline: "May 22", status: "Pending" },
  ],
  deadlines: [
    { item: "API Refactor Phase 2", date: "May 20, 2026" },
    { item: "Marketing Assets Complete", date: "May 25, 2026" },
    { item: "Public Launch", date: "June 15, 2026" },
  ],
  decisions: [
    "Adopt mobile-first approach for the new dashboard",
    "Allocate 2 additional engineers to API refactor",
    "Target June 15th for public launch",
    "Add 2 extra QA sprint cycles before launch",
  ],
  risks: [
    "Analytics module performance may delay launch",
    "Test coverage gaps in new features",
    "Marketing asset timeline is tight",
  ],
};

const followUpEmail = `Subject: Meeting Follow-Up: Q2 Product Strategy Review

Hi Team,

Thank you for a productive Q2 Strategy Review session. Here's a summary of our discussion and next steps:

Key Decisions:
• Adopt mobile-first approach for the new dashboard
• Allocate 2 additional engineers to API refactor
• Target June 15th for public launch

Action Items:
• Sarah Chen — Complete API refactor Phase 2 (by May 20)
• Priya Sharma — Finalize marketing campaign assets (by May 25)
• Alex Kim — Optimize analytics data pipeline (by May 18)
• Maria Lopez — Expand QA test coverage (by May 22)

Please reach out if you have any questions or concerns.

Best regards,
John Doe`;

export default function MeetingDetailPage() {
  const [activeTab, setActiveTab] = useState("summary");
  const [showEmail, setShowEmail] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [aiTyping, setAiTyping] = useState(false);
  const [transcriptExpanded, setTranscriptExpanded] = useState(false);

  const tabs = [
    { id: "summary", label: "AI Summary", icon: Sparkles },
    { id: "transcript", label: "Transcript", icon: FileText },
    { id: "actions", label: "Action Items", icon: ListChecks },
    { id: "decisions", label: "Decisions", icon: CheckCircle2 },
    { id: "risks", label: "Risks", icon: AlertTriangle },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(followUpEmail);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleChatSend = () => {
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setChatMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setChatInput("");
    setAiTyping(true);

    const responses = {
      deadline: "Based on the meeting transcript, there are 3 key deadlines:\n• API Refactor Phase 2 — May 20\n• Marketing Assets — May 25\n• Public Launch — June 15",
      frontend: "James Mitchell (Design Lead) is responsible for the frontend dashboard design. Sarah Chen's engineering team will handle frontend development after the design handoff on May 10.",
      default: "Based on the meeting discussion, the team focused on Q2 product strategy including the API refactor, new dashboard launch, and marketing campaign. The target public launch date is June 15th with a mobile-first approach.",
    };

    setTimeout(() => {
      const lower = userMsg.toLowerCase();
      let response = responses.default;
      if (lower.includes("deadline") || lower.includes("date") || lower.includes("when")) response = responses.deadline;
      else if (lower.includes("frontend") || lower.includes("design") || lower.includes("who")) response = responses.frontend;
      setChatMessages(prev => [...prev, { role: "ai", text: response }]);
      setAiTyping(false);
    }, 1500);
  };

  return (
    <>
      <TopBar title="Meeting Details" />
      <div className="p-8 max-w-[1600px] mx-auto space-y-8">
        {/* Back + Header */}
        <div className="flex items-center gap-3 mb-2">
          <Link href="/dashboard/meetings" className="p-2.5 rounded-xl border border-white/[0.06] hover:bg-white/[0.04] transition-all">
            <ArrowLeft className="w-4 h-4 text-[#94A3B8]" />
          </Link>
          <div className="flex-1 ml-2">
            <h2 className="text-[24px] font-bold text-[#E8ECF1] tracking-tight">{meetingData.title}</h2>
            <div className="flex flex-wrap items-center gap-5 mt-1.5 text-[13px] font-medium text-[#64748B]">
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{meetingData.time} · {meetingData.duration}</span>
              <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" />{meetingData.participants.length} participants</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setShowChat(!showChat)} className="px-4 py-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-[13px] font-semibold text-indigo-300 hover:bg-indigo-500/20 transition-all flex items-center gap-2 shadow-sm">
              <Brain className="w-4 h-4" /> Ask AI
            </button>
            <button onClick={() => setShowEmail(!showEmail)} className="px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[13px] font-medium text-[#E8ECF1] hover:bg-white/[0.04] transition-all flex items-center gap-2 shadow-sm">
              <Mail className="w-4 h-4" /> Follow-up
            </button>
            <button className="px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[13px] font-medium text-[#E8ECF1] hover:bg-white/[0.04] transition-all flex items-center gap-2 shadow-sm">
              <Download className="w-4 h-4" /> Export
            </button>
          </div>
        </div>

        {/* Participants */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
          <h3 className="text-[12px] font-semibold text-[#64748B] uppercase tracking-wider mb-4">Participants</h3>
          <div className="flex flex-wrap gap-3">
            {meetingData.participants.map((p, i) => (
              <div key={i} className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[13px] transition-all hover:bg-white/[0.05]">
                <div className="w-7 h-7 rounded-full bg-indigo-500/20 flex items-center justify-center text-[10px] font-bold text-indigo-300">{p.name.split(" ").map(n=>n[0]).join("")}</div>
                <span className="font-semibold text-[#E8ECF1]">{p.name}</span>
                <span className="text-[#64748B] font-medium">· {p.role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs */}
            <div className="flex gap-2 p-1.5 rounded-2xl bg-[#060B14] border border-white/[0.08] overflow-x-auto shadow-inner">
              {tabs.map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-semibold whitespace-nowrap transition-all ${activeTab === tab.id ? "bg-white/[0.08] text-[#E8ECF1] shadow-sm" : "text-[#64748B] hover:text-[#E8ECF1] hover:bg-white/[0.04]"}`}>
                  <tab.icon className="w-4 h-4" />{tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                {activeTab === "summary" && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <Sparkles className="w-5 h-5 text-indigo-400" />
                      <h3 className="text-[18px] font-semibold text-[#E8ECF1]">AI-Generated Summary</h3>
                    </div>
                    <p className="text-[15px] text-[#94A3B8] leading-[1.8]">{meetingData.summary}</p>
                  </div>
                )}

                {activeTab === "transcript" && (
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#E8ECF1] mb-6">Meeting Transcript</h3>
                    <div className="space-y-6">
                      {meetingData.transcript.slice(0, transcriptExpanded ? undefined : 4).map((t, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/20 flex items-center justify-center text-[12px] font-bold text-indigo-300 shrink-0 mt-1">{t.speaker.split(" ").map(n=>n[0]).join("")}</div>
                          <div>
                            <div className="flex items-center gap-3 mb-1.5">
                              <span className="text-[15px] font-semibold text-[#E8ECF1]">{t.speaker}</span>
                              <span className="text-[12px] font-medium text-[#64748B]">{t.time}</span>
                            </div>
                            <p className="text-[15px] text-[#94A3B8] leading-[1.8]">{t.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    {meetingData.transcript.length > 4 && (
                      <button onClick={() => setTranscriptExpanded(!transcriptExpanded)} className="flex items-center gap-2 mt-8 text-[14px] font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
                        {transcriptExpanded ? <><ChevronUp className="w-4 h-4"/>Show Less</> : <><ChevronDown className="w-4 h-4"/>Show All ({meetingData.transcript.length} entries)</>}
                      </button>
                    )}
                  </div>
                )}

                {activeTab === "actions" && (
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#E8ECF1] mb-6">Action Items</h3>
                    <div className="overflow-x-auto rounded-xl border border-white/[0.06] bg-[#060B14]/50">
                      <table className="w-full text-[14px]">
                        <thead><tr className="border-b border-white/[0.06] text-[#64748B]">
                          <th className="text-left py-4 px-5 font-medium">Task</th>
                          <th className="text-left py-4 px-5 font-medium">Assigned To</th>
                          <th className="text-left py-4 px-5 font-medium">Deadline</th>
                          <th className="text-left py-4 px-5 font-medium">Status</th>
                        </tr></thead>
                        <tbody>{meetingData.actionItems.map((a, i) => (
                          <tr key={i} className="border-b border-white/[0.06] last:border-0 hover:bg-white/[0.02] transition-colors">
                            <td className="py-4 px-5 font-medium text-[#E8ECF1]">{a.task}</td>
                            <td className="py-4 px-5 text-[#94A3B8]">{a.assignee}</td>
                            <td className="py-4 px-5 text-[#94A3B8]">{a.deadline}</td>
                            <td className="py-4 px-5">
                              <span className={`px-3 py-1 rounded-md font-semibold text-[11px] border ${a.status === "Completed" ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/20" : a.status === "In Progress" ? "bg-amber-400/10 text-amber-400 border-amber-400/20" : "bg-blue-400/10 text-blue-400 border-blue-400/20"}`}>{a.status}</span>
                            </td>
                          </tr>
                        ))}</tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === "decisions" && (
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#E8ECF1] mb-6">Decisions Made</h3>
                    <div className="space-y-3">
                      {meetingData.decisions.map((d, i) => (
                        <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-emerald-400/5 border border-emerald-400/10 hover:bg-emerald-400/10 transition-colors">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                          <p className="text-[15px] font-medium text-[#E8ECF1]">{d}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "risks" && (
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#E8ECF1] mb-6">Risks Identified</h3>
                    <div className="space-y-3">
                      {meetingData.risks.map((r, i) => (
                        <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-amber-400/5 border border-amber-400/10 hover:bg-amber-400/10 transition-colors">
                          <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                          <p className="text-[15px] font-medium text-[#E8ECF1]">{r}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Sidebar: Chat or Email */}
          <div className="space-y-4">
            {/* AI Chat */}
            <AnimatePresence>
              {showChat && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col" style={{ height: 450 }}>
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/[0.06]">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                      <Brain className="w-4 h-4 text-indigo-400" />
                    </div>
                    <h3 className="text-[16px] font-semibold text-[#E8ECF1]">AI Assistant</h3>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot ml-auto" />
                  </div>
                  <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
                    {chatMessages.length === 0 && (
                      <div className="text-center py-10">
                        <Brain className="w-10 h-10 text-indigo-400/30 mx-auto mb-3" />
                        <p className="text-[13px] text-[#64748B]">Ask questions about this meeting</p>
                        <div className="flex flex-wrap gap-2 justify-center mt-4">
                          {["What were the deadlines?", "Who handles frontend?", "Summarize decisions"].map((q, i) => (
                            <button key={i} onClick={() => { setChatInput(q); }} className="text-[12px] px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[#94A3B8] hover:text-[#E8ECF1] hover:bg-white/[0.08] transition-all">{q}</button>
                          ))}
                        </div>
                      </div>
                    )}
                    {chatMessages.map((msg, i) => (
                      <div key={i} className={msg.role === "user" ? "bg-white/[0.06] border border-white/[0.06] p-4 rounded-2xl rounded-tr-sm ml-8 text-[14px] text-[#E8ECF1]" : "bg-transparent p-4 mr-8 text-[14px] text-[#94A3B8]"}>
                        <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>
                      </div>
                    ))}
                    {aiTyping && (
                      <div className="bg-transparent p-4 mr-8 flex gap-2 items-center">
                        <span className="typing-dot w-2 h-2 rounded-full bg-indigo-400" />
                        <span className="typing-dot w-2 h-2 rounded-full bg-indigo-400" />
                        <span className="typing-dot w-2 h-2 rounded-full bg-indigo-400" />
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <input value={chatInput} onChange={e => setChatInput(e.target.value)} onKeyDown={e => e.key === "Enter" && handleChatSend()} placeholder="Ask about this meeting..." className="flex-1 px-4 py-3 text-[14px] bg-[#060B14] border border-white/[0.08] rounded-xl text-[#E8ECF1] placeholder-[#64748B] focus:outline-none focus:border-indigo-500/40 focus:ring-4 focus:ring-indigo-500/10 transition-all" />
                    <button onClick={handleChatSend} className="px-4 py-3 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-500/20">
                      <Send className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Follow-up Email */}
            <AnimatePresence>
              {showEmail && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-cyan-400" />
                      </div>
                      <h3 className="text-[16px] font-semibold text-[#E8ECF1]">Follow-up Email</h3>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={handleCopyEmail} className="p-2 rounded-lg border border-white/[0.06] hover:bg-white/[0.04] transition-all">
                        <Copy className={`w-4 h-4 ${emailCopied ? "text-emerald-400" : "text-[#94A3B8]"}`} />
                      </button>
                      <button className="p-2 rounded-lg border border-white/[0.06] hover:bg-white/[0.04] transition-all">
                        <Edit3 className="w-4 h-4 text-[#94A3B8]" />
                      </button>
                    </div>
                  </div>
                  <pre className="text-[13px] text-[#94A3B8] leading-relaxed whitespace-pre-wrap bg-[#060B14] rounded-xl p-4 border border-white/[0.08] max-h-80 overflow-y-auto shadow-inner">{followUpEmail}</pre>
                  <button className="w-full mt-4 py-3 rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /> Send Email
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quick Stats */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-4">
              <h3 className="text-[12px] font-semibold text-[#64748B] uppercase tracking-wider mb-2">Quick Stats</h3>
              {[
                { label: "Duration", value: meetingData.duration, icon: Clock },
                { label: "Action Items", value: meetingData.actionItems.length, icon: ListChecks },
                { label: "Decisions", value: meetingData.decisions.length, icon: CheckCircle2 },
                { label: "Risks", value: meetingData.risks.length, icon: AlertTriangle },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-white/[0.06] last:border-0">
                  <div className="flex items-center gap-3 text-[14px] text-[#94A3B8]">
                    <s.icon className="w-4 h-4 text-[#64748B]" />{s.label}
                  </div>
                  <span className="text-[15px] font-semibold text-[#E8ECF1]">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
