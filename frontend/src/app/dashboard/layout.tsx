"use client";

import Sidebar from "../../components/layout/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#fcfcfd] overflow-hidden">
      <Sidebar />
      <main className="flex-grow overflow-y-auto">
        {children}
      </main>
    </div>
  );
}