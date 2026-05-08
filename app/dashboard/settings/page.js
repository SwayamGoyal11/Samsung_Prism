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
      <div className="p-6 max-w-3xl space-y-6">
        {sections.map((section, si) => (
          <div key={si} className="glass-card p-6">
            <div className="flex items-center gap-2 mb-5">
              <section.icon className="w-4 h-4 text-purple-400" />
              <h3 className="text-sm font-semibold">{section.label}</h3>
            </div>
            {section.fields && (
              <div className="space-y-4">
                {section.fields.map((f, fi) => (
                  <div key={fi}>
                    <label className="text-xs text-[#6B7280] mb-1.5 block">{f.label}</label>
                    <input type={f.type} defaultValue={f.value} className="w-full px-4 py-2.5 text-sm bg-white/5 border border-white/8 rounded-xl text-white" />
                  </div>
                ))}
              </div>
            )}
            {section.toggles && (
              <div className="space-y-3">
                {section.toggles.map((t, ti) => (
                  <div key={ti} className="flex items-center justify-between py-2">
                    <span className="text-sm text-[#9CA3AF]">{t.label}</span>
                    <button className={`w-10 h-5 rounded-full transition-colors relative ${t.on ? "bg-purple-500" : "bg-white/10"}`}>
                      <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${t.on ? "left-5.5 translate-x-0" : "left-0.5"}`} style={{ left: t.on ? "22px" : "2px" }} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <button onClick={handleSave} className={`glow-btn px-8 py-3 text-sm ${saved ? "!bg-green-500" : ""}`}>
          {saved ? "✓ Saved!" : "Save Changes"}
        </button>
      </div>
    </>
  );
}
