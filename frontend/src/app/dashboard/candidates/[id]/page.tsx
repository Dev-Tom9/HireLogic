"use client";

import { 
  ArrowLeft, CheckCircle2, XCircle, FileText, Download, Mail, Phone, 
  Linkedin, Sparkles, LayoutDashboard, Briefcase, Users, Settings, 
  LogOut, BriefcaseBusiness, Calendar, Award, ShieldAlert, Cpu
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CandidateDetailsPage() {
  const candidate = {
    name: "Sarah Chen",
    role: "Senior Full Stack Engineer",
    score: 98,
    summary: "Exceptional match for the Senior Full Stack role. Sarah demonstrates deep expertise in the required React/Node stack and has significant experience leading AWS-based cloud migrations which was listed as a 'nice-to-have'.",
    contact: { email: "sarah.c@example.com", phone: "+1 (555) 012-3456", linkedin: "linkedin.com/in/sarahchen" },
    strengths: ["Advanced System Architecture", "AWS Certified", "Team Leadership"],
    gaps: ["No GraphQL experience mentioned"],
    experience: [
      { company: "TechFlow", role: "Lead Dev", years: "2021 - Present", desc: "Leading a team of 12 engineers in a microservices environment." },
      { company: "DataSync", role: "Full Stack Engineer", years: "2018 - 2021", desc: "Optimized data processing pipelines by 40% using Node.js." }
    ]
  };

  return (
    <div className="fixed inset-0 bg-[#f8fafc] flex text-slate-900 z-[100] overflow-hidden">
      
      {/* HIGH-TECH SIDEBAR */}
      <aside className="w-72 bg-slate-950 text-slate-400 flex flex-col h-full border-r border-white/5 shadow-2xl shrink-0">
        <div className="p-8 flex items-center gap-3 text-white font-black text-xl tracking-tighter">
          <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-500/20"><BriefcaseBusiness className="w-5 h-5" /></div>
          <span>HIRELOGIC</span>
        </div>
        <nav className="flex-grow px-4 space-y-1 mt-4">
          <Link href="/dashboard"><SidebarItem icon={<LayoutDashboard size={18} />} label="Overview" /></Link>
          <Link href="/dashboard/jobs"><SidebarItem icon={<Briefcase size={18} />} label="Job Postings" /></Link>
          <Link href="/dashboard/candidates"><SidebarItem icon={<Users size={18} />} label="Candidates" active /></Link>
          <div className="my-6 border-t border-white/5 mx-4" />
          <SidebarItem icon={<Settings size={18} />} label="Settings" />
        </nav>
        <div className="px-4 pb-8 space-y-6">
          <Link href="/"><SidebarItem icon={<LogOut size={18} />} label="Logout" danger /></Link>
          <div className="bg-white/5 p-4 rounded-[1.5rem] border border-white/10 flex items-center gap-3 backdrop-blur-sm">
             <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-black text-xs">T</div>
             <div className="flex flex-col">
                <span className="text-xs font-black text-white">Tomiwa</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[9px] text-slate-500 font-black tracking-widest uppercase">Admin Active</span>
                </div>
             </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow overflow-y-auto p-8 lg:p-12 custom-scrollbar">
        <div className="max-w-6xl mx-auto">
          
          {/* Back Nav */}
          <Link href="/dashboard/candidates">
            <motion.button whileHover={{ x: -5 }} className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-8">
              <ArrowLeft size={14} /> Back to Pipeline
            </motion.button>
          </Link>

          {/* Profile Header Card */}
          <div className="bg-white rounded-[3rem] border border-slate-100 p-8 lg:p-10 shadow-xl shadow-slate-200/50 mb-8 flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="w-28 h-28 bg-slate-950 rounded-[2.5rem] flex items-center justify-center text-white text-4xl font-black shadow-2xl">
                {candidate.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <h1 className="text-4xl font-black text-slate-900 tracking-tight">{candidate.name}</h1>
                  <span className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">Top Tier Match</span>
                </div>
                <p className="text-slate-500 font-bold text-lg mt-1">{candidate.role}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
                  <ContactBadge icon={<Mail size={14}/>} text={candidate.contact.email} />
                  <ContactBadge icon={<Linkedin size={14}/>} text={candidate.contact.linkedin} />
                  <ContactBadge icon={<Phone size={14}/>} text={candidate.contact.phone} />
                </div>
              </div>
            </div>
            
            <div className="mt-8 md:mt-0 relative">
               <svg className="w-32 h-32 transform -rotate-90">
                  <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-slate-100" />
                  <motion.circle 
                    initial={{ strokeDasharray: "0 360" }}
                    animate={{ strokeDasharray: `${candidate.score * 3.6} 360` }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-blue-600" 
                  />
               </svg>
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-slate-900 leading-none">{candidate.score}%</span>
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Match</span>
               </div>
            </div>
          </div>

          

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* AI INSIGHTS */}
              <section className="bg-slate-950 p-10 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-[-20%] right-[-10%] w-80 h-80 bg-blue-600/20 blur-[100px] rounded-full" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-blue-600/20 rounded-2xl border border-white/10 text-blue-400"><Cpu size={24} /></div>
                    <h2 className="text-xl font-black">AI Executive Summary</h2>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed font-medium italic">
                    {candidate.summary}
                  </p>
                </div>
              </section>

              {/* STRENGTHS & GAPS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section className="bg-emerald-50/50 p-8 rounded-[2.5rem] border border-emerald-100">
                  <h3 className="text-emerald-800 font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" /> Core Strengths
                  </h3>
                  <div className="space-y-4">
                    {candidate.strengths.map(s => (
                      <div key={s} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-emerald-100 shadow-sm">
                        <Award className="text-emerald-500" size={18} />
                        <span className="text-sm font-black text-emerald-900">{s}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-rose-50/50 p-8 rounded-[2.5rem] border border-rose-100">
                  <h3 className="text-rose-800 font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                    <ShieldAlert size={16} className="text-rose-500" /> Development Gaps
                  </h3>
                  <div className="space-y-4">
                    {candidate.gaps.map(g => (
                      <div key={g} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-rose-100 shadow-sm">
                        <XCircle className="text-rose-400" size={18} />
                        <span className="text-sm font-black text-rose-900">{g}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            {/* ACTION SIDEBAR */}
            <div className="space-y-8">
              <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/40">
                <h3 className="font-black text-slate-900 mb-6 flex items-center gap-2 tracking-tight">
                  <FileText size={18} className="text-blue-600" /> Evidence Library
                </h3>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  className="w-full bg-slate-50 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 flex items-center justify-center gap-3 border border-slate-200 hover:bg-slate-100 transition-all"
                >
                  <Download size={16} /> Download Resume
                </motion.button>
              </div>

              <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/40">
                <h3 className="font-black text-slate-900 mb-6 tracking-tight flex items-center gap-2">
                  <Calendar size={18} className="text-blue-600" /> Pipeline Action
                </h3>
                <div className="space-y-4">
                  <motion.button whileTap={{ scale: 0.95 }} className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-500/30 hover:bg-blue-700 transition-all">
                    Book Interview
                  </motion.button>
                  <motion.button whileTap={{ scale: 0.95 }} className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-black transition-all">
                    Add to Shortlist
                  </motion.button>
                  <button className="w-full py-5 bg-white text-rose-500 rounded-2xl font-black text-sm uppercase tracking-widest border border-rose-100 hover:bg-rose-50 transition-all">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// COMPONENTS
function ContactBadge({ icon, text }: { icon: any, text: string }) {
  return (
    <div className="flex items-center gap-2 text-slate-400">
      <div className="p-2 bg-slate-50 rounded-lg text-slate-400 group-hover:text-blue-600 transition-colors">{icon}</div>
      <span className="text-xs font-black tracking-tight">{text}</span>
    </div>
  );
}

function SidebarItem({ icon, label, active = false, danger = false }: { icon: React.ReactNode, label: string, active?: boolean, danger?: boolean }) {
  return (
    <motion.div whileHover={{ x: 5 }} className={`flex items-center gap-3 px-5 py-4 rounded-2xl cursor-pointer transition-all ${active ? "bg-blue-600 text-white shadow-xl shadow-blue-500/20 font-black" : danger ? "text-rose-400 hover:bg-rose-500/10 hover:text-rose-500" : "text-slate-500 hover:bg-white/5 hover:text-white"}`}>
      {icon} <span className="text-xs font-black uppercase tracking-widest">{label}</span>
    </motion.div>
  );
}