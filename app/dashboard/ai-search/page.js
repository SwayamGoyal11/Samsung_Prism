"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import TopBar from "../../components/TopBar";
import { Brain, Send, Sparkles, Search, MessageSquare } from "lucide-react";

const suggestedQueries = [
  "What were the deadlines from Q2 strategy review?",
  "Who is responsible for the API refactor?",
  "Summarize the client onboarding discussion",
  "What decisions were made this week?",
  "List all pending action items",
  "What risks were identified?",
];

export default function AISearchPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const responses = {
    deadline: "Based on your recent meetings, here are the key deadlines:\n\n• **API Refactor Phase 2** — May 20, 2026 (assigned to Sarah Chen)\n• **Marketing Campaign Assets** — May 25, 2026 (assigned to Priya Sharma)\n• **Analytics Pipeline Optimization** — May 18, 2026 (assigned to Alex Kim)\n• **QA Test Coverage Expansion** — May 22, 2026 (assigned to Maria Lopez)\n• **Public Product Launch** — June 15, 2026 (team-wide)",
    responsible: "Based on the Q2 Strategy Review meeting:\n\n• **API Refactor**: Sarah Chen (Engineering Manager)\n• **Dashboard Design**: James Mitchell (Design Lead)\n• **Marketing Campaign**: Priya Sharma (Marketing Head)\n• **Data Pipeline**: Alex Kim (Data Analyst)\n• **QA Testing**: Maria Lopez (QA Lead)",
    decisions: "Key decisions from this week's meetings:\n\n1. ✅ Adopt mobile-first approach for the new dashboard\n2. ✅ Allocate 2 additional engineers to API refactor\n3. ✅ Target June 15th for public launch\n4. ✅ Add 2 extra QA sprint cycles before launch\n5. ✅ Prioritize performance optimization for analytics module",
    summarize: "**Client Onboarding Call Summary:**\n\nThe team discussed the onboarding flow for new enterprise clients. Key points included streamlining the setup process from 5 days to 2 days, automating API key generation, and creating interactive tutorials. The client expressed interest in custom dashboard configurations and SSO integration.",
    pending: "Here are all pending action items across your meetings:\n\n1. 🔵 Optimize analytics data pipeline — Alex Kim (May 18)\n2. 🔵 Expand QA test coverage — Maria Lopez (May 22)\n3. 🟡 Complete API refactor Phase 2 — Sarah Chen (May 20)\n4. 🟡 Finalize marketing assets — Priya Sharma (May 25)\n5. 🟡 Update user onboarding flow — John Doe (May 15)",
    risks: "Risks identified across recent meetings:\n\n⚠️ **High Priority:**\n• Analytics module performance may delay the June launch\n• Test coverage gaps in new features could cause production issues\n\n⚠️ **Medium Priority:**\n• Marketing asset timeline is tight with May 25 deadline\n• API refactor complexity underestimated — may need more resources",
    default: "Based on your meeting history, I found relevant information across 147 meetings. The most recent discussions focused on Q2 product strategy, including the API refactor timeline, new dashboard launch, and marketing campaign planning. Would you like me to dive deeper into any specific topic?",
  };

  const handleSend = (text) => {
    const msg = text || input;
    if (!msg.trim()) return;
    setMessages(prev => [...prev, { role: "user", text: msg }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const lower = msg.toLowerCase();
      let res = responses.default;
      if (lower.includes("deadline") || lower.includes("when") || lower.includes("date")) res = responses.deadline;
      else if (lower.includes("responsible") || lower.includes("who") || lower.includes("assigned")) res = responses.responsible;
      else if (lower.includes("decision")) res = responses.decisions;
      else if (lower.includes("summarize") || lower.includes("summary") || lower.includes("client")) res = responses.summarize;
      else if (lower.includes("pending") || lower.includes("action")) res = responses.pending;
      else if (lower.includes("risk") || lower.includes("concern")) res = responses.risks;
      setMessages(prev => [...prev, { role: "ai", text: res }]);
      setTyping(false);
    }, 1800);
  };

  return (
    <>
      <TopBar title="AI Search" subtitle="Ask anything about your meetings" />
      <div className="p-6 flex flex-col" style={{ height: "calc(100vh - 64px)" }}>
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto space-y-4 pb-4">
          {messages.length === 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center justify-center h-full">
              <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl font-bold mb-2">Meeting Intelligence AI</h2>
              <p className="text-sm text-[#6B7280] mb-8 text-center max-w-md">Ask any question about your past meetings. I can search across transcripts, summaries, action items, and decisions.</p>
              <div className="grid sm:grid-cols-2 gap-3 max-w-2xl w-full">
                {suggestedQueries.map((q, i) => (
                  <motion.button key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.05 }}
                    onClick={() => handleSend(q)} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-left text-[#9CA3AF] hover:bg-white/[0.06] hover:border-purple-500/20 hover:text-white transition-all">
                    <MessageSquare className="w-3.5 h-3.5 text-purple-400 mb-1.5" />
                    {q}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {messages.map((msg, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className={`max-w-2xl ${msg.role === "user" ? "ml-auto" : "mr-auto"}`}>
              <div className={msg.role === "user" ? "chat-bubble-user p-4" : "chat-bubble-ai p-4"}>
                {msg.role === "ai" && <div className="flex items-center gap-1.5 mb-2"><Sparkles className="w-3 h-3 text-purple-400" /><span className="text-[10px] font-medium text-purple-400">AI Response</span></div>}
                <div className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</div>
              </div>
            </motion.div>
          ))}

          {typing && (
            <div className="chat-bubble-ai p-4 max-w-2xl flex gap-1.5 items-center">
              <Sparkles className="w-3 h-3 text-purple-400 mr-2" />
              <span className="typing-dot w-2 h-2 rounded-full bg-purple-400" />
              <span className="typing-dot w-2 h-2 rounded-full bg-purple-400" />
              <span className="typing-dot w-2 h-2 rounded-full bg-purple-400" />
            </div>
          )}
        </div>

        {/* Input */}
        <div className="glass-card p-3 flex items-center gap-3">
          <Search className="w-4 h-4 text-[#6B7280] shrink-0" />
          <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && handleSend()} placeholder="Ask about your meetings..." className="flex-1 bg-transparent text-sm text-white placeholder-[#6B7280] outline-none" />
          <button onClick={() => handleSend()} className="p-2.5 rounded-xl gradient-bg hover:opacity-90 transition-opacity">
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </>
  );
}
