"use client";

import { 
  Users, Search, Download, TrendingUp, ExternalLink, Filter 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import Link from "next/link";

export default function CandidatesPage() {
  // 1. DATA STATE
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const initialCandidates = [
    { id: 1, name: "Sarah Chen", role: "Senior Full Stack Engineer", score: 98, status: "Shortlisted", experience: "8 years", skills: ["React", "Python", "AWS"] },
    { id: 2, name: "Marcus Johnson", role: "Product Designer", score: 85, status: "Pending", experience: "5 years", skills: ["Figma", "UI/UX", "Prototyping"] },
    { id: 3, name: "Elena Rodriguez", role: "Senior Full Stack Engineer", score: 72, status: "Reviewed", experience: "10 years", skills: ["Node.js", "Docker", "Go"] },
    { id: 4, name: "David Kim", role: "DevOps Specialist", score: 64, status: "Rejected", experience: "3 years", skills: ["Jenkins", "K8s"] },
  ];

  // 2. SEARCH & FILTER LOGIC
  // We use useMemo to prevent unnecessary re-calculations during typing
  const filteredCandidates = useMemo(() => {
    return initialCandidates.filter((person) => {
      const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            person.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesFilter = activeFilter === "All" || person.status === activeFilter;
      
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter]);

  const filterOptions = ["All", "Shortlisted", "Pending", "Reviewed", "Rejected"];

  return (
    <div className="p-8 lg:p-12 w-full">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Candidate Pipeline</h1>
            <p className="text-slate-500 mt-1">Found {filteredCandidates.length} matches in your database.</p>
          </div>
          <button className="px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-600 flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
            <Download size={18} /> Export Results
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by name or skill (e.g. React)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/5 transition-all shadow-sm" 
            />
          </div>
          
          <div className="flex gap-2 items-center overflow-x-auto pb-2 md:pb-0">
            <Filter size={16} className="text-slate-400 mr-2 shrink-0" />
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveFilter(opt)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                  activeFilter === opt 
                  ? "bg-slate-900 text-white border-slate-900 shadow-md" 
                  : "bg-white text-slate-500 border-slate-100 hover:border-slate-300"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Candidates List with Animation */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredCandidates.length > 0 ? (
              filteredCandidates.map((person) => (
                <motion.div 
                  layout
                  key={person.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-6 group hover:border-blue-300 transition-all hover:shadow-xl hover:shadow-blue-500/5"
                >
                  {/* Score Circle */}
                  <div className={`w-16 h-16 rounded-2xl flex flex-col items-center justify-center border-2 shrink-0 ${
                    person.score > 80 ? "border-green-100 bg-green-50 text-green-600" : "border-slate-100 bg-slate-50 text-slate-500"
                  }`}>
                    <span className="text-xl font-black leading-none">{person.score}%</span>
                    <span className="text-[8px] font-bold uppercase mt-1">Match</span>
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-slate-900">{person.name}</h3>
                      {person.score > 90 && <TrendingUp size={16} className="text-blue-500" />}
                    </div>
                    <p className="text-sm text-slate-500">{person.role} • {person.experience} exp.</p>
                    <div className="flex gap-2 mt-3">
                      {person.skills.map(skill => (
                        <span key={skill} className="px-2.5 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold rounded-lg border border-slate-100">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider border ${
                      person.status === "Shortlisted" ? "bg-blue-50 text-blue-600 border-blue-100" : "bg-slate-50 text-slate-400 border-slate-100"
                    }`}>
                      {person.status}
                    </span>
                    <Link href={`/dashboard/candidates/${person.id}`}>
                      <button className="p-3 bg-slate-900 text-white rounded-xl hover:bg-blue-600 transition-all shadow-md">
                        <ExternalLink size={18} />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="py-20 text-center">
                <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-slate-300" size={24} />
                </div>
                <h3 className="font-bold text-slate-900">No candidates found</h3>
                <p className="text-sm text-slate-500 mt-1">Try adjusting your search or filters.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}