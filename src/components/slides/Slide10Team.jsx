import React from 'react';
import { motion } from 'framer-motion';
import { presentationMeta } from '../../data/slidesData';
import RealFlameBackground from '../RealFlameBackground';
import { Github, Shield, User, HelpCircle, Sparkles, ExternalLink, MessageSquare, Terminal } from 'lucide-react';

export default function Slide10Team() {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 bg-gradient-to-b from-[#56030F] via-flame-maroon to-[#240004] text-white relative overflow-hidden">
      {/* Real Flame Background Simulation */}
      <RealFlameBackground colorPreset="yellow" flameHeight="bottom" intensity={0.9} showEmbers={true} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between z-10 border-b border-flame-pink/20 pb-4 backdrop-blur-xs"
      >
        <div>
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-flame-pink/80 bg-flame-pink/10 px-3 py-1 rounded">
            PROJECT TEAM & WRAP-UP
          </span>
          <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-white mt-1 tracking-wide drop-shadow-md">
            THANK <span className="text-flame-pink">YOU</span>
          </h2>
        </div>
        <div className="flex items-center gap-2 bg-flame-maroon-dark/90 border border-flame-pink/30 px-3.5 py-2 rounded-xl font-mono text-xs text-flame-pink shadow-lg">
          <HelpCircle className="w-4 h-4 text-flame-pink animate-pulse" />
          <span className="font-bold">Questions & Discussion</span>
        </div>
      </motion.div>

      {/* Main Section: Team Members and Project Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto py-2 z-10 items-stretch">
        {/* Left Column: Team Members & Supervisor */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-3.5">
          <div className="text-xs font-anton tracking-wider uppercase text-flame-pink flex items-center gap-2">
            <span>Core Engineering Team</span>
            <div className="h-px flex-1 bg-flame-pink/20" />
          </div>

          {/* Two Developers Cards with placeholder frames */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {presentationMeta.team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 + idx * 0.1 }}
                className="bg-flame-maroon-dark/90 border border-flame-pink/30 rounded-2xl p-4 flex items-center gap-3.5 shadow-xl backdrop-blur-sm hover:border-flame-pink/60 transition-all"
              >
                {/* Placeholder Image Frame per specification */}
                <div className="w-14 h-14 rounded-2xl bg-flame-maroon border-2 border-flame-pink/40 flex flex-col items-center justify-center shrink-0 text-flame-pink shadow-inner">
                  <User className="w-6 h-6 text-flame-pink mb-0.5" />
                  <span className="text-[8px] font-mono uppercase tracking-wider text-flame-pink/70">Dev #{idx + 1}</span>
                </div>

                <div>
                  <h4 className="font-anton text-lg text-white tracking-wide">
                    {member.name}
                  </h4>
                  <p className="text-xs font-mono text-flame-pink font-semibold mt-0.5">
                    {member.role}
                  </p>
                  <span className="inline-block mt-1.5 text-[10px] font-mono bg-flame-pink/15 text-flame-pink px-2 py-0.5 rounded border border-flame-pink/20">
                    Rust Core & Client SDK
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Supervisor Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.35 }}
            className="bg-flame-maroon-dark/90 border border-flame-pink/30 rounded-2xl p-4 flex items-center justify-between gap-4 shadow-xl backdrop-blur-sm"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-flame-maroon border-2 border-flame-pink/40 flex flex-col items-center justify-center shrink-0 text-flame-pink">
                <Sparkles className="w-6 h-6 text-flame-pink mb-0.5" />
                <span className="text-[8px] font-mono uppercase tracking-wider text-flame-pink/70">Faculty</span>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-flame-pink/70">Project Supervision</p>
                <h4 className="font-anton text-lg text-white tracking-wide">
                  {presentationMeta.supervisor.name}
                </h4>
                <p className="text-xs font-mono text-flame-pink/90 mt-0.5">
                  {presentationMeta.supervisor.role}
                </p>
              </div>
            </div>
            <span className="hidden sm:inline text-xs font-mono bg-flame-pink/20 text-flame-pink px-3 py-1 rounded-full border border-flame-pink/30">
              Department Advisor
            </span>
          </motion.div>
        </div>

        {/* Right Column: Open Source Ecosystem & Q&A Hub */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="lg:col-span-5 bg-flame-maroon-dark/90 border border-flame-pink/30 rounded-2xl p-5 shadow-2xl flex flex-col justify-between backdrop-blur-sm"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-flame-pink/20 mb-3">
              <span className="font-anton text-lg text-white uppercase tracking-wider">
                FLAMEBASE ECOSYSTEM
              </span>
              <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded">
                Open Source
              </span>
            </div>

            <p className="text-xs text-flame-pink/90 leading-relaxed mb-4">
              An open-source initiative welcoming contributions across Rust backend microservices, Angular management dashboard, and client SDK bindings.
            </p>

            <div className="space-y-2.5">
              <a
                href={presentationMeta.github}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-flame-pink text-flame-maroon font-bold text-xs hover:bg-white transition-all shadow-md group"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <span>flamebase-org/flamebase</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-flame-maroon/70 border border-flame-pink/20 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-flame-pink">
                  <Shield className="w-3.5 h-3.5 text-flame-pink" />
                  <span>License</span>
                </span>
                <span className="text-white font-bold">{presentationMeta.license}</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-flame-maroon/70 border border-flame-pink/20 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-flame-pink">
                  <Terminal className="w-3.5 h-3.5 text-flame-pink" />
                  <span>Tech Stack</span>
                </span>
                <span className="text-white font-bold">Rust + Axum + redb</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-flame-pink/20 flex items-center justify-between text-[11px] font-mono text-flame-pink/80">
            <span className="flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-flame-pink" />
              <span>Feedback Welcome</span>
            </span>
            <span className="text-white font-semibold">Ready for Questions</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Closing Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="z-10 bg-flame-maroon-deep/90 border border-flame-pink/30 rounded-xl px-4 py-2.5 flex items-center justify-between text-xs text-flame-pink/90 backdrop-blur-xs"
      >
        <span>Open for Q&A • Thank you for your time, review, and suggestions.</span>
        <span className="font-mono text-white text-[11px] hidden sm:inline">Flamebase Presentation 2026</span>
      </motion.div>
    </div>
  );
}
