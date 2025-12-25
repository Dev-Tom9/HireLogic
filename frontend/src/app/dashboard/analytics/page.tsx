"use client";

import { 
  BarChart3, TrendingUp, Users, Clock, ArrowUpRight, Sparkles, Activity, Target, Zap 
} from "lucide-react";
import { motion } from "framer-motion";
import { useMemo } from "react";

export default function AnalyticsPage() {
  // 1. DATA SOURCE (Remains consistent with your sample)
  const candidates = [
    { name: "Sarah", score: 98, status: "Shortlisted", time: "2d ago" },
    { name: "Marcus", score: 85, status: "Pending", time: "5d ago" },
    { name: "Elena", score: 72, status: "Reviewed", time: "1w ago" },
    { name: "David", score: 64, status: "Rejected", time: "1w ago" },
    { name: "Tomiwa", score: 92, status: "Shortlisted", time: "1d ago" },
  ];

  // 2. THE STATS ENGINE (Logic preserved)
  const dynamicStats = useMemo(() => {
    const total = candidates.length;
    const avgScore = Math.round(candidates.reduce((acc, curr) => acc + curr.score, 0) / total);
    const shortlistedCount = candidates.filter(c => c.status === "Shortlisted").length;
    const shortlistRate = Math.round((shortlistedCount / total) * 100);

    return { total, avgScore, shortlistRate };
  }, [candidates]);

  return (
    <div className="p-8 lg:p-12 w-full bg-[#fcfcfd]">
      <div className="max-w-6xl mx-auto">
        {/* High-Tech Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Live System Intelligence</span>
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Enterprise Analytics</h1>
          </div>
          <div className="flex gap-3">
             <div className="px-4 py-2 bg-white border border-slate-100 rounded-xl shadow-sm text-xs font-bold text-slate-600 flex items-center gap-2">
                <Clock size={14} /> Real-time Sync
             </div>
          </div>
        </div>

        {/* 3. UPGRADED DYNAMIC STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <StatCard 
            label="Pipeline Volume" 
            value={dynamicStats.total.toString()} 
            subtext="Total active candidates"
            icon={<Users size={22} />} 
            gradient="from-blue-500 to-indigo-600" 
          />
          <StatCard 
            label="AI Match Integrity" 
            value={`${dynamicStats.avgScore}%`} 
            subtext="System average precision"
            icon={<Sparkles size={22} />} 
            gradient="from-purple-500 to-pink-600" 
          />
          <StatCard 
            label="Conversion Velocity" 
            value={`${dynamicStats.shortlistRate}%`} 
            subtext="Shortlist success rate"
            icon={<Zap size={22} />} 
            gradient="from-emerald-500 to-teal-600" 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart Section */}
          <section className="lg:col-span-2 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
                <BarChart3 size={120} />
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h3 className="text-xl font-black text-slate-900">Match Quality Analysis</h3>
                  <p className="text-sm text-slate-400 font-medium">AI-driven competency distribution</p>
                </div>
                <Target className="text-slate-200" size={32} />
              </div>
              
              <div className="space-y-8">
                {candidates.map((c, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-[10px] font-black text-slate-400 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all">
                          {c.name.charAt(0)}
                        </div>
                        <div>
                          <span className="text-sm font-black text-slate-800">{c.name}</span>
                          <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-tighter">{c.time}</span>
                        </div>
                      </div>
                      <span className={`text-sm font-black ${c.score > 80 ? 'text-blue-600' : 'text-slate-400'}`}>
                        {c.score}%
                      </span>
                    </div>
                    <div className="h-3 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${c.score}%` }}
                        transition={{ duration: 1.5, ease: "circOut", delay: i * 0.1 }}
                        className={`h-full rounded-full transition-all ${
                          c.score > 90 ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 
                          c.score > 80 ? 'bg-blue-500' : 'bg-slate-300'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quick Insights Sidebar */}
          <section className="bg-slate-900 rounded-[3rem] p-10 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden">
             <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full" />
             
             <div className="relative z-10">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Activity size={18} className="text-blue-400" /> System Pulse
                </h3>
                <div className="space-y-6">
                   <InsightRow label="API Response" val="124ms" />
                   <InsightRow label="AI Confidence" val="High" />
                   <InsightRow label="Data Freshness" val="Live" />
                </div>
             </div>

             <div className="mt-12 p-6 bg-white/5 rounded-[2rem] border border-white/10 relative z-10">
                <p className="text-[10px] font-black uppercase text-blue-400 mb-2">Pro Recommendation</p>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  Candidate <span className="text-white font-bold">Sarah</span> shows a 98% match. We recommend immediate technical vetting.
                </p>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function InsightRow({ label, val }: { label: string, val: string }) {
  return (
    <div className="flex justify-between items-center border-b border-white/5 pb-4">
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{label}</span>
      <span className="text-sm font-bold text-white">{val}</span>
    </div>
  )
}

function StatCard({ label, value, subtext, icon, gradient }: any) {
  return (
    <motion.div 
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group"
    >
      <div className="flex justify-between items-start mb-6">
        <div className={`p-4 rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg shadow-blue-200/20`}>
          {icon}
        </div>
        <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-slate-900 group-hover:text-white transition-colors">
          <ArrowUpRight size={14} />
        </div>
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{label}</p>
        <h3 className="text-4xl font-black text-slate-900 mt-1">{value}</h3>
        <p className="text-[10px] text-slate-400 mt-2 font-bold">{subtext}</p>
      </div>
    </motion.div>
  );
}