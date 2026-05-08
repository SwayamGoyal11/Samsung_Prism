"use client";
import { useState } from "react";
import TopBar from "../../components/TopBar";
import { User, Bell, Shield, Palette, Globe, Key } from "lucide-react";

const sections = [
  { icon: User, label: "Profile", fields: [{ label: "Full Name", value: "John Doe", type: "text" }, { label: "Email", value: "john@company.com", type: "email" }, { label: "Role", value: "Product Lead", type: "text" }] },
  { icon: Bell, label: "Notifications", toggles: [{ label: "Email notifications", on: true }, { label: "Meeting reminders", on: true }, { label: "Task deadline alerts", on: true }, { label: "AI insight alerts", on: false }] },
  { icon: Shield, label: "Privacy", toggles: [{ label: "Share meeting analytics", on: false }, { label: "Allow AI training on data", on: false }, { label: "Two-factor authentication", on: true }] },
];

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);
  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <>
      <TopBar title="Settings" subtitle="Manage your account preferences" />
      <div className="p-8 max-w-3xl mx-auto space-y-8">
        {sections.map((section, si) => (
          <div key={si} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                <section.icon className="w-4 h-4 text-indigo-400" />
              </div>
              <h3 className="text-[16px] font-semibold text-[#E8ECF1]">{section.label}</h3>
            </div>
            {section.fields && (
              <div className="space-y-5">
                {section.fields.map((f, fi) => (
                  <div key={fi}>
                    <label className="text-[13px] font-medium text-[#94A3B8] mb-2 block">{f.label}</label>
                    <input type={f.type} defaultValue={f.value} className="w-full px-4 py-3 text-[14px] bg-white/[0.02] border border-white/[0.06] rounded-xl text-[#E8ECF1] transition-all focus:bg-white/[0.04] focus:border-indigo-500/30 focus:outline-none focus:ring-4 focus:ring-indigo-500/10" />
                  </div>
                ))}
              </div>
            )}
            {section.toggles && (
              <div className="space-y-4">
                {section.toggles.map((t, ti) => (
                  <div key={ti} className="flex items-center justify-between py-2">
                    <span className="text-[14px] text-[#E8ECF1]">{t.label}</span>
                    <button className={`w-11 h-6 rounded-full transition-colors relative focus:outline-none focus:ring-4 focus:ring-indigo-500/20 ${t.on ? "bg-indigo-500" : "bg-white/[0.08]"}`}>
                      <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${t.on ? "left-6 translate-x-0" : "left-1"}`} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <button onClick={handleSave} className={`px-8 py-3 rounded-xl text-[14px] font-semibold text-white transition-all shadow-lg ${saved ? "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20" : "bg-indigo-500 hover:bg-indigo-600 shadow-indigo-500/20"}`}>
          {saved ? "✓ Settings Saved" : "Save Changes"}
        </button>
      </div>
    </>
  );
}
