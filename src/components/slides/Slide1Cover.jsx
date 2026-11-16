import React from 'react';
import { motion } from 'framer-motion';
import { presentationMeta } from '../../data/slidesData';
import RealFlameBackground from '../RealFlameBackground';
import { Shield, Zap, Terminal, Database, Cpu, Layers, Github } from 'lucide-react';

export default function Slide1Cover() {
  const pillars = [
    { label: '100% Rust Backend', icon: Cpu },
    { label: 'Drop-in Firebase JS SDK', icon: Layers },
    { label: 'redb Embedded Storage', icon: Database },
    { label: 'One-Command Deployment', icon: Terminal },
    { label: 'Axum Async Engine', icon: Zap },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 relative overflow-hidden bg-flame-maroon text-flame-pink">
      {/* Real Visible Yellow Flame Background Simulation */}
      <RealFlameBackground colorPreset="yellow" flameHeight="tall" intensity={1.35} showEmbers={true} />

      {/* Decorative PPTX-style geometric bracket watermark */}
      <svg
        className="absolute right-6 top-1/2 -translate-y-1/2 w-[34vw] max-w-[460px] h-auto opacity-10 pointer-events-none text-flame-pink select-none"
        viewBox="0 0 969 969"
        fill="currentColor"
      >
        <path d="M 515.57 515.57 L 1484.43 515.57 L 1484.43 1484.43 L 912.81 1484.43 C 1184.60 1484.43 1343.15 1308.53 1343.15 1071.65 L 1343.15 1069.31 C 1343.15 832.43 1186.76 663.56 917.12 663.56 L 708.32 663.56 L 708.32 865.26 L 920.36 865.26 C 1045.47 865.26 1128.52 941.49 1128.52 1072.83 L 1128.52 1075.17 C 1128.52 1207.68 1045.47 1282.73 920.36 1282.73 L 515.57 1282.73 Z" />
      </svg>

      {/* Top Meta Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between z-10 border-b border-flame-pink/20 pb-4 backdrop-blur-xs"
      >
        <div className="flex items-center space-x-3">
          <span className="px-3 py-1 bg-flame-pink text-flame-maroon font-extrabold text-xs tracking-widest uppercase rounded shadow-sm">
            PROJECT PRESENTATION
          </span>
          <span className="text-xs uppercase tracking-wider text-flame-pink font-mono flex items-center gap-1.5 bg-flame-maroon-deep/60 px-2.5 py-0.5 rounded border border-flame-pink/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {presentationMeta.status}
          </span>
        </div>
        <div className="flex items-center space-x-4 text-xs font-mono text-flame-pink">
          <span className="flex items-center gap-1 bg-flame-maroon-deep/60 px-2.5 py-0.5 rounded border border-flame-pink/20">
            <Shield className="w-3.5 h-3.5 text-flame-pink" />
            {presentationMeta.license}
          </span>
          <span className="hidden sm:inline text-flame-pink/40">|</span>
          <span className="hidden sm:inline uppercase text-flame-pink/80">Rust + Axum Ecosystem</span>
        </div>
      </motion.div>

      {/* Center Wide Hero Section (Full width, no cramped card container) */}
      <div className="my-auto z-10 py-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="space-y-1">
            <div className="text-flame-pink text-sm sm:text-base font-bold tracking-widest uppercase flex items-center gap-2 drop-shadow">
              <Zap className="w-4 h-4 text-flame-pink animate-bounce" />
              High-Performance Self-Hosted Cloud Backend
            </div>

            {/* Main Brand Title with text drop shadow for maximum contrast over real flame */}
            <h1 className="font-anton text-7xl sm:text-8xl md:text-9xl lg:text-[140px] tracking-tight leading-none text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)]">
              FLAME<span className="text-flame-pink">BASE</span>
            </h1>
          </div>

          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-flame-pink max-w-3xl leading-snug drop-shadow-md">
            {presentationMeta.tagline}
          </p>

          <p className="text-base sm:text-lg text-white/95 max-w-2xl font-normal leading-relaxed border-l-4 border-flame-pink pl-4 py-1 drop-shadow-md bg-flame-maroon-deep/30 rounded-r-lg backdrop-blur-xs">
            {presentationMeta.description} Built from the ground up for full infrastructure ownership, predictable flat-rate costs, and drop-in client compatibility.
          </p>

          {/* Pillars Row */}
          <div className="flex flex-wrap gap-2.5 pt-3">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs sm:text-sm bg-flame-maroon-dark/80 border border-flame-pink/35 text-flame-pink px-3.5 py-1.5 rounded-full font-medium shadow-lg backdrop-blur-sm"
                >
                  <Icon className="w-3.5 h-3.5 text-flame-pink" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer Details: Team & Supervisor */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 z-10 pt-4 border-t border-flame-pink/20 text-xs sm:text-sm"
      >
        <div className="bg-flame-maroon-dark/85 border border-flame-pink/30 rounded-2xl p-4 flex items-center justify-between shadow-xl backdrop-blur-sm">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-flame-pink/70">Presented By</p>
            <p className="font-bold text-white text-base sm:text-lg">
              {presentationMeta.team.map((t) => t.name).join(' & ')}
            </p>
          </div>
          <span className="text-[11px] font-mono bg-flame-pink text-flame-maroon font-bold px-2.5 py-1 rounded">
            Developers
          </span>
        </div>

        <div className="bg-flame-maroon-dark/85 border border-flame-pink/30 rounded-2xl p-4 flex items-center justify-between shadow-xl backdrop-blur-sm">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-flame-pink/70">Project Supervisor</p>
            <p className="font-bold text-white text-base sm:text-lg">
              {presentationMeta.supervisor.name}
            </p>
          </div>
          <span className="text-[11px] font-mono border border-flame-pink/50 text-flame-pink font-semibold px-2.5 py-1 rounded bg-flame-pink/10">
            Faculty Advisor
          </span>
        </div>
      </motion.div>
    </div>
  );
}
