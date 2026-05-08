"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import TopBar from "../../components/TopBar";
import { Mail, Copy, Send, Edit3, CheckCircle2, RefreshCw } from "lucide-react";

const meetings = [
  { id: 1, title: "Q2 Product Strategy Review", date: "May 7, 2026" },
  { id: 2, title: "Engineering Sprint Planning", date: "May 7, 2026" },
  { id: 3, title: "Client Onboarding Call", date: "May 6, 2026" },
];

const emailTemplates = {
  1: `Subject: Follow-Up — Q2 Product Strategy Review (May 7, 2026)

Hi Team,

Thank you for the productive Q2 Strategy Review session today. Here is a summary of our discussion and the agreed-upon next steps:

📋 Key Decisions:
• Adopt mobile-first approach for the new dashboard
• Allocate 2 additional engineers to API refactor
• Target June 15th for public launch
• Add 2 extra QA sprint cycles before launch

✅ Action Items:
• Sarah Chen — Complete API refactor Phase 2 (by May 20)
• Priya Sharma — Finalize marketing campaign assets (by May 25)
• Alex Kim — Optimize analytics data pipeline (by May 18)
• James Mitchell — Design handoff for new dashboard (by May 10)
• Maria Lopez — Expand QA test coverage (by May 22)

📅 Upcoming Deadlines:
• May 18 — Analytics pipeline optimization
• May 20 — API Refactor Phase 2
• May 25 — Marketing assets complete
• June 15 — Public launch

Please reach out if you have any questions or need further clarification.

Best regards,
John Doe`,
  2: `Subject: Follow-Up — Engineering Sprint Planning (May 7, 2026)

Hi Engineering Team,

Quick summary from today's sprint planning:

✅ Sprint Goals:
• Complete user authentication refactor
• Fix performance issues in analytics module
• Deploy staging environment updates

📋 Task Assignments:
• Sarah C. — Auth module migration (3 story points)
• Alex K. — Performance optimization (5 story points)
• Maria L. — Staging deployment pipeline (2 story points)

Next standup: Tomorrow at 9:30 AM.

Best,
John`,
  3: `Subject: Follow-Up — Client Onboarding Call (May 6, 2026)

Hi Team,

Summary from the client onboarding discussion:

Key Points:
• Client wants custom dashboard configuration
• SSO integration is a priority
• Target: reduce onboarding time from 5 days to 2 days

Next Steps:
• Schedule technical deep-dive for next week
• Prepare API documentation for client team
• Set up sandbox environment

Best regards,
John Doe`,
};

export default function FollowUpPage() {
  const [selected, setSelected] = useState(1);
  const [copied, setCopied] = useState(false);
  const [editing, setEditing] = useState(false);
  const [emailContent, setEmailContent] = useState(emailTemplates[1]);

  const handleSelect = (id) => {
    setSelected(id);
    setEmailContent(emailTemplates[id]);
    setEditing(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(emailContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <TopBar title="Follow-up Emails" subtitle="Generate professional follow-up emails" />
      <div className="p-6 grid lg:grid-cols-3 gap-6">
        {/* Meeting Selection */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold mb-2">Select Meeting</h3>
          {meetings.map((m) => (
            <motion.button key={m.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: m.id * 0.08 }}
              onClick={() => handleSelect(m.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all ${selected === m.id ? "bg-purple-500/10 border-purple-500/20" : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05]"}`}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                  <Mail className={`w-4 h-4 ${selected === m.id ? "text-purple-400" : "text-[#6B7280]"}`} />
                </div>
                <div>
                  <h4 className="text-sm font-medium">{m.title}</h4>
                  <p className="text-[11px] text-[#6B7280]">{m.date}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Email Preview */}
        <div className="lg:col-span-2 glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold">Generated Email</h3>
            <div className="flex gap-2">
              <button onClick={() => { setEmailContent(emailTemplates[selected]); }} className="p-2 rounded-lg hover:bg-white/5 transition-colors" title="Regenerate">
                <RefreshCw className="w-4 h-4 text-[#6B7280]" />
              </button>
              <button onClick={() => setEditing(!editing)} className={`p-2 rounded-lg transition-colors ${editing ? "bg-purple-500/10 text-purple-400" : "hover:bg-white/5 text-[#6B7280]"}`} title="Edit">
                <Edit3 className="w-4 h-4" />
              </button>
              <button onClick={handleCopy} className="p-2 rounded-lg hover:bg-white/5 transition-colors" title="Copy">
                <Copy className={`w-4 h-4 ${copied ? "text-green-400" : "text-[#6B7280]"}`} />
              </button>
            </div>
          </div>

          {editing ? (
            <textarea value={emailContent} onChange={(e) => setEmailContent(e.target.value)}
              className="w-full h-96 bg-white/[0.02] border border-white/5 rounded-xl p-4 text-sm text-[#9CA3AF] leading-relaxed resize-none focus:border-purple-500/30" />
          ) : (
            <pre className="text-sm text-[#9CA3AF] leading-relaxed whitespace-pre-wrap bg-white/[0.02] rounded-xl p-4 border border-white/5 max-h-96 overflow-y-auto">{emailContent}</pre>
          )}

          <div className="flex gap-3 mt-4">
            <button className="glow-btn flex-1 py-3 text-sm flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> Send Email
            </button>
            <button onClick={handleCopy} className="px-6 py-3 rounded-xl bg-white/5 border border-white/8 text-sm text-[#9CA3AF] hover:bg-white/8 transition-colors flex items-center gap-2">
              {copied ? <><CheckCircle2 className="w-4 h-4 text-green-400" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy</>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
