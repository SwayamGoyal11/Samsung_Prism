"use client";
import Sidebar from "../components/Sidebar";
import { SidebarProvider, useSidebar } from "../components/SidebarContext";

function DashboardContent({ children }) {
  const { collapsed } = useSidebar();
  return (
    <div className="flex min-h-screen bg-[#0B1020]">
      <Sidebar />
      <main
        className="flex-1 min-h-screen transition-all duration-300"
        style={{ marginLeft: collapsed ? 72 : 260 }}
      >
        {children}
      </main>
    </div>
  );
}

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <DashboardContent>{children}</DashboardContent>
    </SidebarProvider>
  );
}
