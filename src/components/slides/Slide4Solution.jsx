import React from 'react';
import { motion } from 'framer-motion';
import RealFlameBackground from '../RealFlameBackground';
import { Server, Zap, CheckCircle2, Terminal, ArrowRight, ArrowDown, Database, Cpu, ShieldCheck } from 'lucide-react';

export default function Slide4Solution() {
  const pillars = [
    {
      title: "100% Self-Hosted & Open Source",
      desc: "Full infrastructure control, local data residency, zero proprietary telemetry.",
      icon: ShieldCheck,
    },
    {
      title: "Drop-In Firebase SDK Compatibility",
      desc: "Forked flamebase-js-sdk has minimal endpoint edits; swap endpoints with zero app refactors.",
      icon: CheckCircle2,
    },
    {
      title: "Rust Speed & Memory Efficiency",
      desc: "Built with Axum + redb to target blazing microsecond latencies and zero GC pause overhead.",
      icon: Zap,
    },
    {
      title: "Predictable Flat-Rate Hosting",
      desc: "Eliminates per-read and per-write invoices. Your only expense is your VPS / hardware.",
      icon: Server,
    },
    {
      title: "One-Command Automated Deploy",
      desc: "Interactive CLI installer auto-provisions Docker containers, reverse proxy, and system services.",
      icon: Terminal,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 bg-gradient-to-b from-[#56030F] via-flame-maroon to-[#260005] text-white relative overflow-hidden">
      {/* Light gradient lighting and ambient flame */}
      <div className="absolute inset-0 bg-radial-gradient from-flame-pink/5 via-transparent to-black/35 pointer-events-none" />
      <RealFlameBackground colorPreset="ambient" flameHeight="bottom" intensity={0.65} showEmbers={true} />
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-flame-pink/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10"
      >
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-flame-pink/80 bg-flame-pink/10 px-3 py-1 rounded">
          THE FLAMEBASE APPROACH
        </span>
        <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-white mt-2 tracking-wide">
          OUR <span className="text-flame-pink">PROPOSED SOLUTION</span>
        </h2>
        <p className="text-sm sm:text-base text-flame-pink/90 max-w-3xl mt-1">
          A drop-in, self-hosted backend engine built in Rust—delivering complete data sovereignty with zero code rewrites.
        </p>
      </motion.div>

      {/* Main Body: Pillars + Interactive Diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2 z-10 items-center">
        {/* Left: 5 Pillars List */}
        <div className="lg:col-span-7 flex flex-col gap-2.5">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                className="bg-flame-maroon-dark/80 border border-flame-pink/20 rounded-xl p-3 sm:p-3.5 flex items-start gap-3.5 hover:border-flame-pink/50 transition-colors"
              >
                <div className="p-2 rounded-lg bg-flame-pink/15 text-flame-pink shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs text-flame-pink/80 mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right: Diagram 2 (Flamebase Architecture Flow) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="lg:col-span-5 bg-flame-maroon-deep/90 border border-flame-pink/30 rounded-2xl p-5 shadow-2xl flex flex-col justify-between"
        >
          <div className="flex items-center justify-between border-b border-flame-pink/20 pb-3 mb-4">
            <span className="font-anton text-sm tracking-wider uppercase text-flame-pink">
              Diagram: Flamebase Shift
            </span>
            <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded">
              Self-Hosted
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {/* Layer 1: Existing App */}
            <div className="bg-flame-maroon-dark/90 border border-flame-pink/30 rounded-xl p-3 text-center">
              <span className="text-xs font-mono text-flame-pink/70 uppercase">Client Application</span>
              <p className="font-bold text-white text-sm">Your Web / Mobile Codebase</p>
              <p className="text-[11px] text-flame-pink/60 mt-0.5">(No code changes needed)</p>
            </div>

            {/* Down Arrow */}
            <div className="flex justify-center text-flame-pink">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>

            {/* Layer 2: Forked SDK */}
            <div className="bg-flame-maroon/90 border-2 border-flame-pink/60 rounded-xl p-3 text-center">
              <span className="text-xs font-mono text-flame-pink/90 uppercase font-semibold">Drop-in Library</span>
              <p className="font-bold text-flame-pink text-sm">flamebase-js-sdk</p>
              <p className="text-[11px] text-white/80 mt-0.5">Points endpoints to your private server</p>
            </div>

            {/* Down Arrow */}
            <div className="flex justify-center text-flame-pink">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>

            {/* Layer 3: Self-Hosted Rust Stack */}
            <div className="bg-flame-maroon-dark/90 border border-flame-pink/40 rounded-xl p-3.5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold font-mono text-flame-pink">Flamebase Rust Core</span>
                <span className="text-[10px] font-mono bg-flame-pink text-flame-maroon px-1.5 py-0.5 font-bold rounded">
                  Axum + redb
                </span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-xs font-mono text-center">
                <div className="bg-flame-maroon/70 border border-flame-pink/20 rounded py-1 text-white">Auth (:9099)</div>
                <div className="bg-flame-maroon/70 border border-flame-pink/20 rounded py-1 text-white">DB (:8080)</div>
                <div className="bg-flame-maroon/70 border border-flame-pink/20 rounded py-1 text-white">Storage (:9199)</div>
                <div className="bg-flame-maroon/70 border border-flame-pink/20 rounded py-1 text-white">Functions (:5001)</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Summary Pill */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="z-10 bg-flame-maroon-dark/90 border border-flame-pink/20 rounded-xl px-4 py-2.5 flex items-center justify-between text-xs text-flame-pink/80"
      >
        <span><strong>Key Takeaway:</strong> Developers keep their Firebase habits and frontend code, while gaining full infrastructure sovereignty.</span>
        <span className="font-mono text-white text-[11px] hidden sm:inline">zero-lockin • apache-2.0</span>
      </motion.div>
    </div>
  );
}
