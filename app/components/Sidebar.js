"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useSidebar } from "./SidebarContext";
import {
  Brain,
  LayoutDashboard,
  Video,
  ListChecks,
  Search,
  BarChart3,
  Plug,
  Settings,
  Upload,
  Mail,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  LogOut,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Video, label: "Meetings", href: "/dashboard/meetings" },
  { icon: ListChecks, label: "Tasks", href: "/dashboard/tasks" },
  { icon: Search, label: "AI Search", href: "/dashboard/ai-search" },
  { icon: Upload, label: "Upload", href: "/dashboard/upload" },
  { icon: Mail, label: "Follow-up", href: "/dashboard/follow-up" },
  { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
  { icon: Plug, label: "Integrations", href: "/dashboard/integrations" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const { collapsed, setCollapsed } = useSidebar();
  const pathname = usePathname();

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 280 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 top-0 bottom-0 z-40 flex flex-col bg-[#060B14] border-r border-white/[0.06]"
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-5 h-[72px] border-b border-white/[0.06]">
        <Link href="/" className="flex items-center gap-2.5 overflow-hidden">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shrink-0">
            <Brain className="w-4 h-4 text-white" />
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="text-base font-bold whitespace-nowrap overflow-hidden"
              >
                Meeting<span className="text-[#6366F1]">AI</span>
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-7 h-7 rounded-lg hover:bg-white/[0.04] flex items-center justify-center text-[#64748B] hover:text-[#E8ECF1] transition-colors shrink-0"
        >
          {collapsed ? (
            <ChevronRight className="w-3.5 h-3.5" />
          ) : (
            <ChevronLeft className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 py-5 px-4 space-y-1.5 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-medium transition-all duration-200 group relative ${
                isActive
                  ? "active bg-indigo-500/[0.08] text-[#E8ECF1]"
                  : "text-[#94A3B8] hover:text-[#E8ECF1] hover:bg-white/[0.03]"
              }`}
              title={collapsed ? item.label : undefined}
            >
              <item.icon
                className={`w-[18px] h-[18px] shrink-0 transition-colors ${
                  isActive ? "text-indigo-400" : "text-[#64748B] group-hover:text-[#94A3B8]"
                }`}
              />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="whitespace-nowrap overflow-hidden"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>

              {isActive && (
                <motion.div
                  layoutId="sidebar-active-bg"
                  className="absolute inset-0 rounded-lg bg-indigo-500/[0.04] border border-indigo-500/[0.1] -z-10"
                  transition={{ type: "spring", duration: 0.4 }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* AI Assistant Card */}
      <AnimatePresence>
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mx-4 mb-4 p-4 rounded-xl bg-gradient-to-br from-[#0C1220] to-[#060B14] border border-white/[0.06] shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-500" />
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-[12px] font-semibold text-[#E8ECF1]">AI Assistant</span>
            </div>
            <p className="text-[11px] text-[#64748B] mb-3 leading-relaxed">
              Ask questions about your meetings using natural language.
            </p>
            <Link
              href="/dashboard/ai-search"
              className="w-full py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] text-[12px] font-medium text-[#E8ECF1] text-center block transition-colors"
            >
              Open AI Chat
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* User */}
      <div className="px-4 pb-5 border-t border-white/[0.06] pt-4">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-xs font-bold shrink-0">
            JD
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="flex-1 overflow-hidden"
              >
                <div className="text-[13px] font-medium text-[#E8ECF1] truncate">John Doe</div>
                <div className="text-[11px] text-[#64748B] truncate">
                  john@company.com
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!collapsed && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-2 rounded-lg hover:bg-white/[0.04] text-[#64748B] hover:text-[#EF4444] transition-colors shrink-0"
              >
                <LogOut className="w-3.5 h-3.5" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.aside>
  );
}
