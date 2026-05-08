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
      <div className="p-6 space-y-6">
        {/* Back + Header */}
        <div className="flex items-center gap-3 mb-2">
          <Link href="/dashboard/meetings" className="p-2 rounded-lg hover:bg-white/5 transition-colors">
            <ArrowLeft className="w-4 h-4 text-[#6B7280]" />
          </Link>
          <div className="flex-1">
            <h2 className="text-xl font-bold">{meetingData.title}</h2>
            <div className="flex flex-wrap items-center gap-4 mt-1.5 text-xs text-[#6B7280]">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{meetingData.time} · {meetingData.duration}</span>
              <span className="flex items-center gap-1"><Users className="w-3 h-3" />{meetingData.participants.length} participants</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setShowChat(!showChat)} className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-300 hover:bg-purple-500/20 transition-colors flex items-center gap-2">
              <Brain className="w-3.5 h-3.5" /> Ask AI
            </button>
            <button onClick={() => setShowEmail(!showEmail)} className="px-4 py-2 rounded-xl bg-white/5 border border-white/8 text-xs font-medium text-[#9CA3AF] hover:bg-white/8 transition-colors flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" /> Follow-up
            </button>
            <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/8 text-xs font-medium text-[#9CA3AF] hover:bg-white/8 transition-colors flex items-center gap-2">
              <Download className="w-3.5 h-3.5" /> Export
            </button>
          </div>
        </div>

        {/* Participants */}
        <div className="glass-card p-4">
          <h3 className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-3">Participants</h3>
          <div className="flex flex-wrap gap-2">
            {meetingData.participants.map((p, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs">
                <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-[9px] font-bold">{p.name.split(" ").map(n=>n[0]).join("")}</div>
                <span className="font-medium">{p.name}</span>
                <span className="text-[#6B7280]">· {p.role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4">
            {/* Tabs */}
            <div className="flex gap-1 p-1 rounded-xl bg-white/[0.03] border border-white/5 overflow-x-auto">
              {tabs.map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${activeTab === tab.id ? "bg-purple-500/15 text-purple-300 border border-purple-500/20" : "text-[#6B7280] hover:text-white hover:bg-white/5 border border-transparent"}`}>
                  <tab.icon className="w-3.5 h-3.5" />{tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="glass-card p-6">
                {activeTab === "summary" && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <h3 className="text-sm font-semibold">AI-Generated Summary</h3>
                    </div>
                    <p className="text-sm text-[#9CA3AF] leading-relaxed">{meetingData.summary}</p>
                  </div>
                )}

                {activeTab === "transcript" && (
                  <div>
                    <h3 className="text-sm font-semibold mb-4">Meeting Transcript</h3>
                    <div className="space-y-4">
                      {meetingData.transcript.slice(0, transcriptExpanded ? undefined : 4).map((t, i) => (
                        <div key={i} className="flex gap-3">
                          <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5">{t.speaker.split(" ").map(n=>n[0]).join("")}</div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-semibold">{t.speaker}</span>
                              <span className="text-[10px] text-[#6B7280]">{t.time}</span>
                            </div>
                            <p className="text-sm text-[#9CA3AF] leading-relaxed">{t.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    {meetingData.transcript.length > 4 && (
                      <button onClick={() => setTranscriptExpanded(!transcriptExpanded)} className="flex items-center gap-1 mt-4 text-xs text-purple-400 hover:text-purple-300">
                        {transcriptExpanded ? <><ChevronUp className="w-3 h-3"/>Show Less</> : <><ChevronDown className="w-3 h-3"/>Show All ({meetingData.transcript.length} entries)</>}
                      </button>
                    )}
                  </div>
                )}

                {activeTab === "actions" && (
                  <div>
                    <h3 className="text-sm font-semibold mb-4">Action Items</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead><tr className="border-b border-white/5 text-[#6B7280]">
                          <th className="text-left py-2.5 px-3 font-medium">Task</th>
                          <th className="text-left py-2.5 px-3 font-medium">Assigned To</th>
                          <th className="text-left py-2.5 px-3 font-medium">Deadline</th>
                          <th className="text-left py-2.5 px-3 font-medium">Status</th>
                        </tr></thead>
                        <tbody>{meetingData.actionItems.map((a, i) => (
                          <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02]">
                            <td className="py-3 px-3 font-medium text-[#F9FAFB]">{a.task}</td>
                            <td className="py-3 px-3 text-[#9CA3AF]">{a.assignee}</td>
                            <td className="py-3 px-3 text-[#9CA3AF]">{a.deadline}</td>
                            <td className="py-3 px-3">
                              <span className={`px-2 py-0.5 rounded-full text-[10px] ${a.status === "Completed" ? "bg-green-400/10 text-green-400" : a.status === "In Progress" ? "bg-yellow-400/10 text-yellow-400" : "bg-blue-400/10 text-blue-400"}`}>{a.status}</span>
                            </td>
                          </tr>
                        ))}</tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === "decisions" && (
                  <div>
                    <h3 className="text-sm font-semibold mb-4">Decisions Made</h3>
                    <div className="space-y-2">
                      {meetingData.decisions.map((d, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                          <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                          <p className="text-sm text-[#9CA3AF]">{d}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "risks" && (
                  <div>
                    <h3 className="text-sm font-semibold mb-4">Risks Identified</h3>
                    <div className="space-y-2">
                      {meetingData.risks.map((r, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-yellow-400/5 border border-yellow-400/10">
                          <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                          <p className="text-sm text-[#9CA3AF]">{r}</p>
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
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="glass-card p-4 flex flex-col" style={{ height: 400 }}>
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/5">
                    <Brain className="w-4 h-4 text-purple-400" />
                    <h3 className="text-sm font-semibold">AI Assistant</h3>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot ml-1" />
                  </div>
                  <div className="flex-1 overflow-y-auto space-y-3 mb-3">
                    {chatMessages.length === 0 && (
                      <div className="text-center py-8">
                        <Brain className="w-8 h-8 text-purple-400/30 mx-auto mb-2" />
                        <p className="text-xs text-[#6B7280]">Ask questions about this meeting</p>
                        <div className="flex flex-wrap gap-1.5 justify-center mt-3">
                          {["What were the deadlines?", "Who handles frontend?", "Summarize decisions"].map((q, i) => (
                            <button key={i} onClick={() => { setChatInput(q); }} className="text-[10px] px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-colors">{q}</button>
                          ))}
                        </div>
                      </div>
                    )}
                    {chatMessages.map((msg, i) => (
                      <div key={i} className={msg.role === "user" ? "chat-bubble-user p-3 ml-8" : "chat-bubble-ai p-3 mr-8"}>
                        <p className="text-xs leading-relaxed whitespace-pre-line">{msg.text}</p>
                      </div>
                    ))}
                    {aiTyping && (
                      <div className="chat-bubble-ai p-3 mr-8 flex gap-1.5">
                        <span className="typing-dot w-1.5 h-1.5 rounded-full bg-purple-400" />
                        <span className="typing-dot w-1.5 h-1.5 rounded-full bg-purple-400" />
                        <span className="typing-dot w-1.5 h-1.5 rounded-full bg-purple-400" />
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <input value={chatInput} onChange={e => setChatInput(e.target.value)} onKeyDown={e => e.key === "Enter" && handleChatSend()} placeholder="Ask about this meeting..." className="flex-1 px-3 py-2 text-xs bg-white/5 border border-white/8 rounded-lg text-white placeholder-[#6B7280]" />
                    <button onClick={handleChatSend} className="p-2 rounded-lg gradient-bg hover:opacity-90 transition-opacity">
                      <Send className="w-3.5 h-3.5 text-white" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Follow-up Email */}
            <AnimatePresence>
              {showEmail && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="glass-card p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <h3 className="text-sm font-semibold">Follow-up Email</h3>
                    </div>
                    <div className="flex gap-1.5">
                      <button onClick={handleCopyEmail} className="p-1.5 rounded-md hover:bg-white/5 transition-colors">
                        <Copy className={`w-3.5 h-3.5 ${emailCopied ? "text-green-400" : "text-[#6B7280]"}`} />
                      </button>
                      <button className="p-1.5 rounded-md hover:bg-white/5 transition-colors">
                        <Edit3 className="w-3.5 h-3.5 text-[#6B7280]" />
                      </button>
                    </div>
                  </div>
                  <pre className="text-xs text-[#9CA3AF] leading-relaxed whitespace-pre-wrap bg-white/[0.02] rounded-lg p-3 border border-white/5 max-h-72 overflow-y-auto">{followUpEmail}</pre>
                  <button className="w-full mt-3 py-2.5 rounded-xl gradient-bg text-xs font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    <Send className="w-3.5 h-3.5" /> Send Email
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quick Stats */}
            <div className="glass-card p-4 space-y-3">
              <h3 className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Quick Stats</h3>
              {[
                { label: "Duration", value: meetingData.duration, icon: Clock },
                { label: "Action Items", value: meetingData.actionItems.length, icon: ListChecks },
                { label: "Decisions", value: meetingData.decisions.length, icon: CheckCircle2 },
                { label: "Risks", value: meetingData.risks.length, icon: AlertTriangle },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                    <s.icon className="w-3.5 h-3.5" />{s.label}
                  </div>
                  <span className="text-sm font-semibold">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
