"use client";

import { 
  LayoutDashboard, Briefcase, Users, Settings, LogOut, 
  BriefcaseBusiness, Zap, ShieldCheck, ChevronRight 
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
    { icon: <Zap size={20} />, label: "Analytics", href: "/dashboard/analytics" },
  ];

  return (
    <aside className="w-72 bg-[#020617] text-slate-400 flex flex-col h-full border-r border-white/5 shadow-[20px_0_50px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-[-10%] left-[-20%] w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Brand Header */}
      <div className="p-8 relative z-10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-md opacity-40 animate-pulse" />
            <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 p-2.5 rounded-xl text-white shadow-lg">
              <BriefcaseBusiness className="w-6 h-6" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-xl tracking-tighter leading-none">HIRELOGIC</span>
            <span className="text-[9px] font-black text-blue-500 tracking-[0.3em] mt-1 uppercase">Neural Core</span>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow px-4 space-y-2 mt-6 relative z-10">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.label} href={item.href}>
              <motion.div
                whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.03)" }}
                className={`relative flex items-center justify-between group px-4 py-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                  isActive ? "text-white bg-white/5" : "hover:text-slate-200"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`transition-colors duration-300 ${isActive ? "text-blue-500" : "group-hover:text-blue-400"}`}>
                    {item.icon}
                  </div>
                  <span className={`text-sm tracking-tight font-black uppercase tracking-widest text-[11px] ${isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`}>
                    {item.label}
                  </span>
                </div>

                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute left-0 w-1 h-6 bg-blue-500 rounded-r-full shadow-[0_0_15px_rgba(59,130,246,0.8)]" 
                  />
                )}
                
                <ChevronRight size={14} className={`opacity-0 group-hover:opacity-100 transition-opacity ${isActive ? "text-blue-500" : "text-slate-600"}`} />
              </motion.div>
            </Link>
          );
        })}

        <div className="my-8 border-t border-white/5 mx-4" />
        <Link href="/dashboard/settings">
          <SidebarItem icon={<Settings size={20} />} label="Settings" active={pathname === "/dashboard/settings"} />
        </Link>
      </nav>

      {/* Footer Profile: Glassmorphism Card */}
      <div className="p-4 pb-8 relative z-10">
        <div className="flex flex-col gap-4">
          <Link href="/">
            <SidebarItem icon={<LogOut size={20} />} label="Logout" danger />
          </Link>
          
          <div className="bg-gradient-to-b from-white/[0.07] to-transparent p-5 rounded-[2rem] border border-white/10 backdrop-blur-md shadow-inner">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-sm shadow-xl">
                  T
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#020617] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black text-white tracking-tight">Tomiwa</span>
                <span className="text-[9px] text-slate-500 font-black tracking-widest uppercase">System Admin</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between bg-black/20 p-2 rounded-xl border border-white/5">
                <div className="flex items-center gap-2">
                    <ShieldCheck size={12} className="text-blue-500" />
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Verified Node</span>
                </div>
                <div className="text-[8px] font-black text-blue-500">v2.4.0</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label, active = false, danger = false }: { icon: React.ReactNode, label: string, active?: boolean, danger?: boolean }) {
  return (
    <motion.div 
      whileHover={{ x: 5 }} 
      className={`flex items-center gap-4 px-4 py-4 rounded-2xl cursor-pointer transition-all duration-300 ${
        active 
          ? "bg-white/5 text-white shadow-inner" 
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