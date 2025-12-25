"use client";

import { 
  LayoutDashboard, Briefcase, Users, Settings, LogOut, 
  BriefcaseBusiness, Zap, ShieldCheck, ChevronRight, Activity 
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Overview", href: "/dashboard" },
    { icon: <Briefcase size={20} />, label: "Job Postings", href: "/dashboard/jobs" },
    { icon: <Users size={20} />, label: "Candidates", href: "/dashboard/candidates" },
    { icon: <Activity size={20} />, label: "Analytics", href: "/dashboard/analytics" },
  ];

  return (
    <aside className="w-72 bg-[#020617] text-slate-400 flex flex-col h-full border-r border-white/5 shadow-2xl relative overflow-hidden shrink-0">
      {/* Neural Background Glow */}
      <div className="absolute top-[-5%] left-[-10%] w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Brand Header */}
      <div className="p-8 relative z-10">
        <div className="flex items-center gap-3 group cursor-default">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-md opacity-20 group-hover:opacity-50 transition-opacity" />
            <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 p-2.5 rounded-xl text-white shadow-lg border border-white/10">
              <BriefcaseBusiness className="w-6 h-6" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-xl tracking-tighter leading-none">HIRELOGIC</span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-[8px] font-black text-blue-500 tracking-[0.3em] uppercase">Core Engine</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow px-4 space-y-1.5 mt-6 relative z-10">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.label} href={item.href}>
              <motion.div
                whileHover={{ x: 4, backgroundColor: "rgba(255,255,255,0.03)" }}
                className={`relative flex items-center justify-between group px-4 py-3.5 rounded-2xl cursor-pointer transition-all duration-300 ${
                  isActive ? "text-white bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]" : "hover:text-slate-200"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`transition-all duration-300 ${isActive ? "text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" : "group-hover:text-blue-400"}`}>
                    {item.icon}
                  </div>
                  <span className={`text-[11px] font-black uppercase tracking-[0.15em] ${isActive ? "opacity-100" : "opacity-50 group-hover:opacity-100"}`}>
                    {item.label}
                  </span>
                </div>

                {isActive && (
                  <motion.div 
                    layoutId="sidebarActiveBar"
                    className="absolute left-0 w-1 h-5 bg-blue-500 rounded-r-full shadow-[0_0_15px_rgba(59,130,246,0.8)]" 
                  />
                )}
                
                <ChevronRight size={14} className={`opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ${isActive ? "text-blue-500" : "text-slate-600"}`} />
              </motion.div>
            </Link>
          );
        })}

        <div className="pt-8 pb-4">
           <span className="px-5 text-[9px] font-black text-slate-600 uppercase tracking-[0.3em]">System</span>
        </div>

        <Link href="/dashboard/settings">
          <SidebarNavItem icon={<Settings size={20} />} label="Settings" active={pathname === "/dashboard/settings"} />
        </Link>
      </nav>

      {/* Profile Footer */}
      <div className="p-4 pb-8 relative z-10">
        <div className="flex flex-col gap-3">
          <Link href="/">
            <SidebarNavItem icon={<LogOut size={20} />} label="Sign Out" danger />
          </Link>
          
          <div className="bg-white/5 p-4 rounded-[2rem] border border-white/5 backdrop-blur-xl group hover:border-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-slate-800 rounded-2xl flex items-center justify-center text-blue-400 font-black text-sm border border-white/10">
                  T
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#020617] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black text-white tracking-tight">Tomiwa</span>
                <div className="flex items-center gap-1 mt-0.5">
                   <ShieldCheck size={10} className="text-blue-500" />
                   <span className="text-[8px] text-slate-500 font-black tracking-widest uppercase">Admin Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function SidebarNavItem({ icon, label, active = false, danger = false }: { icon: React.ReactNode, label: string, active?: boolean, danger?: boolean }) {
  return (
    <motion.div 
      whileHover={{ x: 4 }} 
      className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl cursor-pointer transition-all ${
        active 
          ? "bg-white/5 text-white" 
          : danger 
            ? "text-rose-500 hover:bg-rose-500/10" 
            : "text-slate-500 hover:bg-white/5 hover:text-white"
      }`}
    >
      <div className={`${active ? "text-blue-500" : ""}`}>{icon}</div>
      <span className="text-[11px] font-black uppercase tracking-widest">{label}</span>
    </motion.div>
  );
}