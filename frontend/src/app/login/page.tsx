"use client";

import { 
  BriefcaseBusiness, ArrowRight, Mail, Lock, AlertTriangle, Eye, EyeOff 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false); 
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedEmail = localStorage.getItem("hirelogic_saved_email");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        if (rememberMe) {
          localStorage.setItem("hirelogic_saved_email", email);
        } else {
          localStorage.removeItem("hirelogic_saved_email");
        }
        router.push("/dashboard");
      } else {
        setError(data.message || "CRITICAL_AUTH_FAILURE");
        setIsLoading(false);
      }
    } catch (error) {
      setError("TERMINAL_UPLINK_OFFLINE");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden font-mono selection:bg-blue-500/30">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md relative z-10"
      >
        <AnimatePresence mode="wait">
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              className="mb-6 overflow-hidden"
            >
              <div className="bg-rose-500/5 border border-rose-500/40 rounded-2xl p-4 flex items-center gap-4 text-rose-500 backdrop-blur-md">
                <AlertTriangle size={18} className="animate-pulse" />
                <div className="text-[10px] font-bold uppercase tracking-[0.2em]">Error: {error}</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-center mb-10">
          <div className="inline-block p-4 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] shadow-[0_20px_50px_rgba(37,99,235,0.3)] mb-6 border border-white/10">
            <BriefcaseBusiness className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-black text-white tracking-tighter uppercase italic drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            HireLogic
          </h1>
          <p className="text-blue-500/60 text-[10px] font-bold uppercase tracking-[0.5em] mt-3 flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-blue-500/20" /> 
            Neural Terminal 
            <span className="w-8 h-[1px] bg-blue-500/20" />
          </p>
        </div>

        <div className="bg-[#0f172a]/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-10 shadow-2xl relative">
          <form onSubmit={handleSignIn} className="space-y-7">
            
            <div className="space-y-3">
              <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500 flex items-center gap-2 ml-1">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" /> 
                System Identity
              </label>
              <div className="relative group">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-blue-400 transition-colors" size={16} />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@hirelogic.ai"
                  className="w-full pl-14 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl text-white outline-none focus:border-blue-500/30 focus:bg-white/10 transition-all font-medium text-sm tracking-wide placeholder:text-slate-700"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500 flex items-center gap-2 ml-1">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" /> 
                Encryption Key
              </label>
              <div className="relative group">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-blue-400 transition-colors" size={16} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-14 pr-14 py-5 bg-white/5 border border-white/5 rounded-2xl text-white outline-none focus:border-blue-500/30 focus:bg-white/10 transition-all font-medium text-sm tracking-[0.2em] placeholder:text-slate-700"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-600 hover:text-blue-400 transition-colors px-2"
                >
                  {/* INVERTED LOGIC: show Eye when HIDDEN, EyeOff when VISIBLE */}
                  {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 ml-1 opacity-70 hover:opacity-100 transition-opacity">
              <input 
                type="checkbox" 
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-3.5 h-3.5 rounded border-white/10 bg-white/5 accent-blue-600 cursor-pointer"
              />
              <label htmlFor="remember" className="text-[9px] font-bold uppercase tracking-widest text-slate-400 cursor-pointer select-none">
                Persist Identity Session
              </label>
            </div>

            <motion.button 
              whileHover={{ scale: 1.01, boxShadow: "0 0 20px rgba(37, 99, 235, 0.2)" }}
              whileTap={{ scale: 0.99 }}
              disabled={isLoading}
              className={`w-full py-5 rounded-2xl font-bold text-[11px] uppercase tracking-[0.4em] flex items-center justify-center gap-3 transition-all border border-white/5 ${
                isLoading ? "bg-slate-800 text-slate-500 cursor-wait" : "bg-blue-600 text-white hover:bg-blue-500 shadow-xl shadow-blue-900/20"
              }`}
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <>Establish Uplink <ArrowRight size={14} /></>
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}