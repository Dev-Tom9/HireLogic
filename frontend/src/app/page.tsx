"use client";

import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  BriefcaseBusiness, 
  BarChart3, 
  Github, 
  Twitter, 
  Linkedin 
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LandingPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-blue-100 flex flex-col">
      {/* Modern Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 font-bold text-xl tracking-tight cursor-default"
          >
            <div className="bg-blue-600 p-1.5 rounded-lg shadow-lg shadow-blue-200">
              <BriefcaseBusiness className="w-5 h-5 text-white" />
            </div>
            <span>HireLogic</span>
          </motion.div>
          {/* UPDATED: Changed to Sign In and linked to /login */}
          <Link href="/login">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#1e293b" }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-semibold bg-slate-900 text-white px-5 py-2.5 rounded-full transition-all shadow-md"
            >
              Sign In
            </motion.button>
          </Link>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl -z-10" />
          
          <div className="max-w-5xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold mb-8"
            >
              <Sparkles className="w-3 h-3" /> INTRODUCING HIRELOGIC 1.0
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-8 leading-[1.1]"
            >
              Next-Gen Recruitment <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
                Powered by LLMs
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Stop drowning in resumes. Our AI-driven engine parses, ranks, and analyzes 
              candidates against your job descriptions with industrial precision.
            </motion.p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* UPDATED: Linked to /login */}
              <Link href="/login">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(59 130 246 / 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all"
                >
                  Start Screening Now <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <motion.button 
                whileHover={{ backgroundColor: "#f8fafc", borderColor: "#cbd5e1" }}
                className="w-full sm:w-auto bg-white border border-slate-200 text-slate-600 px-8 py-4 rounded-2xl font-bold transition-all"
              >
                View Demo Video
              </motion.button>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-24 px-6 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Built for Modern HR Teams</h2>
              <p className="text-slate-500">Everything you need to find the 1% among thousands of applicants.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Zap className="w-6 h-6 text-blue-600 group-hover:text-white" />}
                title="Instant AI Ranking"
                desc="Our ranking engine uses semantic similarity to score candidates from 0-100 based on actual skills, not just keywords."
              />
              <FeatureCard 
                icon={<BarChart3 className="w-6 h-6 text-blue-600 group-hover:text-white" />}
                title="Gap Analysis"
                desc="Identify exactly what a candidate is missing compared to your JD, allowing for more focused interview rounds."
              />
              <FeatureCard 
                icon={<ShieldCheck className="w-6 h-6 text-blue-600 group-hover:text-white" />}
                title="Bias-Free Sourcing"
                desc="Leverage objective data parsing to ensure every candidate is evaluated purely on merit and technical capability."
              />
            </div>
          </div>
        </section>
      </main>

      {/* Navy Blue Footer */}
      <footer className="bg-[#0f172a] text-white pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 font-bold text-xl tracking-tight mb-4">
                <div className="bg-blue-600 p-1.5 rounded-lg">
                  <BriefcaseBusiness className="w-5 h-5 text-white" />
                </div>
                <span>HireLogic</span>
              </div>
              <p className="text-slate-400 max-w-sm mb-6">
                Revolutionizing the hiring process through intelligent automation and 
                deep candidate insights. Built for the future of work.
              </p>
              <div className="flex gap-4">
                <SocialLink icon={<Twitter size={20} />} />
                <SocialLink icon={<Github size={20} />} />
                <SocialLink icon={<Linkedin size={20} />} />
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <motion.li whileHover={{ x: 5, color: "#60a5fa" }} className="cursor-pointer transition-all">AI Screening</motion.li>
                <motion.li whileHover={{ x: 5, color: "#60a5fa" }} className="cursor-pointer transition-all">Pricing</motion.li>
                <motion.li whileHover={{ x: 5, color: "#60a5fa" }} className="cursor-pointer transition-all">Documentation</motion.li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <motion.li whileHover={{ x: 5, color: "#60a5fa" }} className="cursor-pointer transition-all">About Us</motion.li>
                <motion.li whileHover={{ x: 5, color: "#60a5fa" }} className="cursor-pointer transition-all">Privacy Policy</motion.li>
                <motion.li whileHover={{ x: 5, color: "#60a5fa" }} className="cursor-pointer transition-all">Terms of Service</motion.li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© {currentYear} HireLogic | All Rights Reserved</p>
            <div className="flex gap-6">
              <span className="hover:text-blue-400 cursor-pointer transition-colors">English (US)</span>
              <span className="hover:text-blue-400 cursor-pointer transition-colors">Status: Online</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Helper Components ---

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 cursor-default"
    >
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-700 transition-colors">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.15, color: "#60a5fa", backgroundColor: "#1e293b" }}
      className="p-2 rounded-full border border-slate-800 text-slate-500 transition-all cursor-pointer"
    >
      {icon}
    </motion.div>
  );
}