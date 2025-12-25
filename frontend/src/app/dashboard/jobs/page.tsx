"use client";

import { Plus, MoreVertical, Search, Sparkles, X, Briefcase, DollarSign, MapPin, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function JobPostingsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // 1. ENHANCED STATE
  const [jobs, setJobs] = useState([
    { id: 1, title: "Senior AI Engineer", dept: "Engineering", location: "Remote", salary: "$140k - $180k", type: "Full-time", applicants: 42 },
    { id: 2, title: "Product Designer", dept: "Design", location: "New York, NY", salary: "$110k - $140k", type: "Contract", applicants: 128 },
  ]);

  // 2. PROFESSIONAL FORM STATE
  const [newJob, setNewJob] = useState({ 
    title: "", 
    dept: "Engineering", 
    location: "", 
    salary: "", 
    type: "Full-time" 
  });

  // 3. FUNCTION TO ADD JOB
  const handleCreateJob = () => {
    if (!newJob.title || !newJob.salary) return;
    const jobToAdd = {
      id: Date.now(),
      ...newJob,
      applicants: 0,
    };
    setJobs([jobToAdd, ...jobs]);
    setIsModalOpen(false);
    setNewJob({ title: "", dept: "Engineering", location: "", salary: "", type: "Full-time" });
  };

  return (
    <div className="p-8 lg:p-12 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Job Management</h1>
            <p className="text-slate-500 mt-1 font-medium">Deploy and track high-performance positions.</p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsModalOpen(true)} 
            className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all"
          >
            <Plus size={20} /> Create New Position
          </motion.button>
        </div>

        {/* High-Tech List Container */}
        <div className="grid grid-cols-1 gap-4">
          <AnimatePresence>
            {jobs.map(job => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={job.id} 
                className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center justify-between group hover:border-blue-400 transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-lg">{job.title}</h3>
                    <div className="flex gap-4 mt-1">
                      <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <Layers size={12} /> {job.dept}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <MapPin size={12} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-green-500">
                        <DollarSign size={12} /> {job.salary}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <div className="text-2xl font-black text-slate-900 leading-none">{job.applicants}</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Applicants</div>
                  </div>
                  <button className="p-3 text-slate-300 hover:text-slate-600 transition-colors">
                    <MoreVertical size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* PROFESSIONAL SLIDE-OVER MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[110]" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed right-0 top-0 h-full w-full max-w-xl bg-white z-[120] p-12 flex flex-col shadow-2xl overflow-y-auto">
              
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Sparkles className="text-blue-600" size={24} /> Post New Position
                </h2>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors"><X /></button>
              </div>

              <div className="space-y-8">
                {/* Field Group 1 */}
                <div className="space-y-4">
                   <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Job Title</label>
                    <input 
                      value={newJob.title}
                      onChange={(e) => setNewJob({...newJob, title: e.target.value})}
                      placeholder="e.g. Senior Backend Architect"
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/5 transition-all font-bold" 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Department</label>
                      <input 
                        value={newJob.dept}
                        onChange={(e) => setNewJob({...newJob, dept: e.target.value})}
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/5 transition-all font-bold" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Location</label>
                      <input 
                        value={newJob.location}
                        onChange={(e) => setNewJob({...newJob, location: e.target.value})}
                        placeholder="Remote / City"
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/5 transition-all font-bold" 
                      />
                    </div>
                  </div>
                </div>

                {/* Field Group 2 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Salary Range</label>
                    <input 
                      value={newJob.salary}
                      onChange={(e) => setNewJob({...newJob, salary: e.target.value})}
                      placeholder="e.g. $120k - $160k"
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/5 transition-all font-bold" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Type</label>
                    <select 
                      value={newJob.type}
                      onChange={(e) => setNewJob({...newJob, type: e.target.value})}
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/5 transition-all font-bold appearance-none"
                    >
                      <option>Full-time</option>
                      <option>Contract</option>
                      <option>Part-time</option>
                    </select>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCreateJob}
                  className="w-full py-5 bg-slate-900 text-white rounded-[2rem] font-black text-lg shadow-2xl hover:bg-blue-600 transition-all mt-6"
                >
                  Publish to AI Engine
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}