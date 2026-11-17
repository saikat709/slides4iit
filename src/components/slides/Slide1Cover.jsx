import React from 'react';
import { motion } from 'framer-motion';
import presentationData from '../../../presentationData.json';
import RealFlameBackground from '../RealFlameBackground';
import { Shield, Zap, Terminal, Database, Cpu, Layers, Github } from 'lucide-react';

export default function Slide1Cover() {
  const { meta, slide1Cover } = presentationData;

  const pillarIcons = [Cpu, Layers, Database, Terminal, Zap];

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

      {/* Center Wide Hero Section */}
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
              {slide1Cover.badge}
            </div>

            {/* Main Brand Title */}
            <h1 className="font-anton text-7xl sm:text-8xl md:text-9xl lg:text-[145px] tracking-tight leading-none text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.85)]">
              {slide1Cover.brandFirst}<span className="text-flame-pink">{slide1Cover.brandSecond}</span>
            </h1>
          </div>

          <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-flame-pink max-w-3xl leading-snug drop-shadow-md">
            {meta.tagline}
          </p>

          <p className="text-base sm:text-lg text-white/95 max-w-2xl font-normal leading-relaxed border-l-4 border-flame-pink pl-4 py-1 drop-shadow-md bg-flame-maroon-deep/40 rounded-r-xl backdrop-blur-sm">
            {meta.description} {meta.subDescription}
          </p>

          {/* Pillars Row */}
          <div className="flex flex-wrap gap-2.5 pt-3">
            {slide1Cover.pillars.map((label, idx) => {
              const Icon = pillarIcons[idx % pillarIcons.length];
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-xs sm:text-sm bg-flame-maroon-dark/90 border border-flame-pink/35 border-t-white/30 text-flame-pink px-4 py-2 rounded-xl font-semibold shadow-xl backdrop-blur-md hover:border-flame-pink hover:scale-105 transition-all"
                >
                  <Icon className="w-4 h-4 text-flame-pink" />
                  <span>{label}</span>
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
        className="grid grid-cols-1 md:grid-cols-2 gap-4 z-10 pt-4 border-t border-flame-pink/20"
      >
        <div className="bg-flame-maroon-dark/90 border border-flame-pink/30 border-t-white/20 rounded-2xl p-5 flex items-center justify-between shadow-2xl backdrop-blur-md">
          <div>
            <p className="text-[11px] uppercase font-bold tracking-wider text-flame-pink/70 font-mono">Presented By</p>
            <p className="font-extrabold text-white text-base sm:text-lg">
              {meta.team.map((t) => t.name).join(' & ')}
            </p>
          </div>
          <span className="text-xs font-mono bg-flame-pink text-flame-maroon font-bold px-3 py-1 rounded-lg">
            Developers
          </span>
        </div>

        <div className="bg-flame-maroon-dark/90 border border-flame-pink/30 border-t-white/20 rounded-2xl p-5 flex items-center justify-between shadow-2xl backdrop-blur-md">
          <div>
            <p className="text-[11px] uppercase font-bold tracking-wider text-flame-pink/70 font-mono">Project Supervisor</p>
            <p className="font-extrabold text-white text-base sm:text-lg">
              {meta.supervisor.name}
            </p>
          </div>
          <span className="text-xs font-mono border border-flame-pink/50 text-flame-pink font-semibold px-3 py-1 rounded-lg bg-flame-pink/10">
            {meta.supervisor.designation || "Faculty Advisor"}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
