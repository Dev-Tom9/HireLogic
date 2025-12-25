"use client";

import { 
  Users, Briefcase, CheckCircle, Clock, FileText, UploadCloud, Sparkles, ChevronRight, Cpu, Activity, ShieldCheck, History, Database, Trash2, Download
} from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useEffect } from "react";

// --- Animated Number Component ---
function Counter({ value }: { value: string }) {
  const numericValue = parseInt(value.replace(/,/g, ""), 10);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    const controls = animate(count, numericValue, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [numericValue]);

  return <motion.span>{rounded}</motion.span>;
}

export default function DashboardPage() {
  const [jobDescription, setJobDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{score: number, feedback: string, filename?: string} | null>(null);
  const [history, setHistory] = useState<Array<{name: string, score: number, feedback: string, timestamp: string}>>([]);

  const stats = [
    { label: "Active Jobs", value: "12", icon: <Briefcase size={18} />, color: "text-blue-400", border: "border-blue-500/20" },
    { label: "Total Candidates", value: "1284", icon: <Users size={18} />, color: "text-indigo-400", border: "border-indigo-500/20" },
    { label: "Shortlisted", value: "84", icon: <CheckCircle size={18} />, color: "text-emerald-400", border: "border-emerald-500/20" },
    { label: "Pending Review", value: "126", icon: <Clock size={18} />, color: "text-amber-400", border: "border-amber-500/20" },
  ];

  const handleAnalyze = async () => {
    if (!jobDescription || !file) {
      alert("Please provide both Job Description and a Resume PDF.");
      return;
    }
    
    setIsAnalyzing(true);
    setResult(null);

    const formData = new FormData();
    formData.append("job_description", jobDescription);
    formData.append("resume", file);

    try {
      const response = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || "Neural Engine Connection Failed");
      
      const newResult = { score: data.score, feedback: data.feedback, filename: file.name };
      setResult(newResult);

      setHistory(prev => [{
        name: file.name,
        score: data.score,
        feedback: data.feedback,
        timestamp: new Date().toLocaleTimeString()
      }, ...prev].slice(0, 5));

    } catch (error: any) {
      alert(`CRITICAL_ERROR: ${error.message}`);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // --- NEW: Download Report Function ---
  const downloadReport = () => {
    if (!result) return;

    const reportContent = `
HIRELOGIC AI ENGINE - NEURAL UPLINK REPORT
------------------------------------------
Timestamp: ${new Date().toLocaleString()}
Target File: ${result.filename || "Unknown Source"}
Match Score: ${result.score}%

ANALYSIS SUMMARY:
${result.feedback}

------------------------------------------
END OF REPORT
    `;

    const blob = new Blob([reportContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `HireLogic_Report_${result.filename?.split('.')[0] || 'analysis'}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const loadHistoryItem = (item: typeof history[0]) => {
    setResult({ score: item.score, feedback: item.feedback, filename: item.name });
  };

  const clearHistory = () => {
    if (confirm("Confirm: Purge all session neural logs?")) {
      setHistory([]);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-mono p-6 lg:p-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 text-blue-500 mb-2">
              <Activity size={16} className="animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">System Status: Optimal</span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase italic">
              Terminal<span className="text-blue-500">_</span>Overview
            </h1>
          </div>
          <div className="flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
            <ShieldCheck size={18} className="text-emerald-500" />
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Uplink: <span className="text-white">Active Session</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* AI Tool Left Column */}
          <div className="lg:col-span-7 bg-[#0f172a]/40 backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg"><Cpu size={20} className="text-blue-500" /></div>
                <h2 className="text-sm font-bold text-white uppercase tracking-widest">Neural Screening Engine</h2>
              </div>
              <Sparkles size={18} className="text-blue-500 animate-pulse" />
            </div>
            
            <div className="space-y-8">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-3 block ml-1">Input Parameters (JD)</label>
                <textarea 
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="// Paste job requirements here..."
                  className="w-full h-48 p-6 bg-black/20 border border-white/5 rounded-2xl text-sm text-blue-100 focus:outline-none focus:border-blue-500/30 focus:bg-black/40 transition-all resize-none font-mono"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-3 block ml-1">Target Identity (Resume PDF)</label>
                <input type="file" id="resume-upload" className="hidden" accept=".pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                <label htmlFor="resume-upload" className={`flex flex-col items-center justify-center border-2 border-dashed rounded-3xl p-10 cursor-pointer transition-all ${file ? "border-emerald-500/40 bg-emerald-500/5" : "border-white/5 hover:border-blue-500/40 hover:bg-blue-500/5"}`}>
                  <UploadCloud className={`${file ? "text-emerald-400" : "text-slate-600"} mb-3`} size={32} />
                  <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">{file ? file.name : "Establish PDF Link"}</p>
                </label>
              </div>

              <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} onClick={handleAnalyze} disabled={isAnalyzing} className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-[11px] uppercase tracking-[0.4em] shadow-xl disabled:opacity-50 flex items-center justify-center gap-3">
                {isAnalyzing ? "Processing Neural Data..." : "Initiate AI Analysis"}
                <ChevronRight size={16} />
              </motion.button>
            </div>
          </div>

          {/* Results + History Right Column */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              {!result ? (
                <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-[350px] bg-black/40 border border-white/5 rounded-[2.5rem] p-12 flex flex-col items-center justify-center text-center">
                  <FileText className="text-slate-800 mb-6" size={64} />
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-2">Awaiting Data</h3>
                  <p className="text-[10px] text-slate-600 max-w-[200px]">UPLOAD JOB DESCRIPTION AND PDF RESUME.</p>
                </motion.div>
              ) : (
                <motion.div key="results" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#0f172a]/40 backdrop-blur-3xl rounded-[2.5rem] border border-blue-500/20 shadow-2xl p-10 relative">
                  <div className="text-center mb-8">
                    <div className="text-7xl font-black text-white tracking-tighter mb-2">{result.score}<span className="text-blue-500 text-3xl">%</span></div>
                    <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.5em]">Match Compatibility</p>
                  </div>
                  <div className="p-6 bg-black/40 rounded-3xl border border-white/5 mb-6">
                    <p className="text-xs text-slate-400 leading-relaxed font-mono italic">{">"} {result.feedback}</p>
                  </div>
                  
                  {/* --- NEW: Download Button --- */}
                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                    onClick={downloadReport}
                    className="w-full py-3 border border-white/10 rounded-xl flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-all"
                  >
                    <Download size={14} />
                    Export Analysis Report
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* History Section */}
            <div className="bg-[#0f172a]/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/5 p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <History size={16} className="text-slate-500" />
                  <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Recent Neural Uplinks</h3>
                </div>
                {history.length > 0 && (
                  <button onClick={clearHistory} className="p-2 hover:bg-red-500/10 rounded-lg transition-colors group">
                    <Trash2 size={14} className="text-slate-500 group-hover:text-red-500" />
                  </button>
                )}
              </div>
              
              <div className="space-y-3">
                {history.map((entry, idx) => (
                  <motion.button whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.08)" }} onClick={() => loadHistoryItem(entry)} key={idx} className="w-full flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 text-left transition-colors">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="p-2 bg-blue-500/10 rounded-lg"><Database size={12} className="text-blue-500" /></div>
                      <div className="truncate">
                        <p className="text-[10px] font-bold text-white truncate w-32 uppercase">{entry.name}</p>
                        <p className="text-[8px] text-slate-500">{entry.timestamp}</p>
                      </div>
                    </div>
                    <div className="text-sm font-black text-blue-400">{entry.score}%</div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}