"use client";

import { 
  User, ShieldCheck, Save, Cpu, CheckCircle2, X, Lock, Bell, Zap, Globe
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function SettingsPage() {
  const [aiSensitivity, setAiSensitivity] = useState(75);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // SIMULATE SAVING LOGIC
  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 800);
  };

  return (
    <div className="p-8 lg:p-12 w-full bg-[#fcfcfd] min-h-screen relative">
      
      {/* 1. HIGH-TECH TOAST NOTIFICATION */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            className="fixed top-10 left-1/2 z-[300] flex items-center gap-4 bg-slate-950 text-white px-8 py-5 rounded-[2rem] shadow-2xl border border-white/10 backdrop-blur-xl"
          >
            <div className="bg-blue-500 p-1.5 rounded-full shadow-lg shadow-blue-500/40">
              <CheckCircle2 size={20} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tight">System Core Updated</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Global preferences synced</span>
            </div>
            <button onClick={() => setShowSuccess(false)} className="ml-4 p-2 hover:bg-white/5 rounded-full transition-colors">
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight uppercase">System Config</h1>
            <p className="text-slate-500 mt-1 font-medium italic">Adjust the neural parameters of your recruitment engine.</p>
          </div>
          <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-2xl border border-slate-200">
             <ShieldCheck size={16} className="text-green-500" />
             <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Secure Admin Node</span>
          </div>
        </div>

        <div className="space-y-8">
          {/* Admin Profile Section */}
          <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-slate-50 opacity-10"><User size={120} /></div>
            <div className="flex items-center gap-3 mb-10 relative z-10">
              <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-200"><User size={20} /></div>
              <h2 className="text-xl font-black text-slate-900">Identity Framework</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Full Operator Name</label>
                <input type="text" defaultValue="Tomiwa" className="w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all font-bold text-slate-900" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Access Level</label>
                <div className="relative">
                    <Lock size={14} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="text" value="System Architect (Lvl 4)" disabled className="w-full pl-12 pr-5 py-5 bg-slate-100 border border-slate-200 rounded-2xl text-slate-500 font-bold cursor-not-allowed uppercase text-[10px] tracking-widest" />
                </div>
              </div>
            </div>
          </section>

          {/* AI Neural Settings */}
          <section className="bg-slate-950 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full" />
            <div className="flex items-center gap-3 mb-10 relative z-10">
              <div className="p-3 bg-purple-500/20 text-purple-400 rounded-2xl border border-white/10 shadow-inner"><Cpu size={20} /></div>
              <h2 className="text-xl font-black">AI Sensitivity Neural-Link</h2>
            </div>
            
            <div className="space-y-10 relative z-10">
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-400">Filtering Precision</span>
                    <h4 className="text-2xl font-black mt-1">Aggression Level</h4>
                  </div>
                  <div className="text-4xl font-black text-purple-500 tabular-nums">
                    {aiSensitivity}<span className="text-lg">%</span>
                  </div>
                </div>
                
                <div className="relative flex items-center">
                    <div className="absolute w-full h-1 bg-white/10 rounded-full" />
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={aiSensitivity} 
                      onChange={(e) => setAiSensitivity(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-transparent appearance-none cursor-pointer accent-purple-500 relative z-10" 
                    />
                </div>
                <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">
                    <span>Broad Search</span>
                    <span>Strict Alignment</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <FeatureToggle icon={<Zap size={14} />} label="Auto-Shortlist" enabled />
                 <FeatureToggle icon={<Globe size={14} />} label="Global Sourcing" />
              </div>
            </div>
          </section>

          {/* Save Action */}
          <div className="flex justify-center md:justify-end pt-6">
            <motion.button 
              disabled={isSaving}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSave}
              className={`min-w-[280px] py-5 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl transition-all ${
                isSaving 
                ? "bg-slate-800 text-slate-500 cursor-wait" 
                : "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/30"
              }`}
            >
              {isSaving ? (
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <><Save size={18} /> Deploy Updates</>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureToggle({ icon, label, enabled = false }: { icon: any, label: string, enabled?: boolean }) {
    return (
        <div className={`p-4 rounded-2xl border flex items-center gap-3 transition-all cursor-pointer ${enabled ? 'bg-white/10 border-white/20 text-white' : 'bg-transparent border-white/5 text-slate-500 hover:border-white/10'}`}>
            <div className={`${enabled ? 'text-purple-400' : 'text-slate-600'}`}>{icon}</div>
            <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
        </div>
    )
}