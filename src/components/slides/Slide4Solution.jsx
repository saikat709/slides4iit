import React from 'react';
import { motion } from 'framer-motion';
import presentationData from '../../../presentationData.json';
import RealFlameBackground from '../RealFlameBackground';
import { Server, Zap, CheckCircle2, Terminal, ArrowDown, ShieldCheck } from 'lucide-react';

export default function Slide4Solution() {
  const { slide4Solution } = presentationData;
  const pillarIcons = [ShieldCheck, CheckCircle2, Zap, Server, Terminal];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-b from-[#56030F] via-flame-maroon to-[#260005] text-white relative overflow-hidden">
      {/* Light gradient lighting and ambient flame */}
      <div className="absolute inset-0 bg-radial-gradient from-flame-pink/5 via-transparent to-black/35 pointer-events-none" />
      <RealFlameBackground colorPreset="ambient" flameHeight="bottom" intensity={0.65} showEmbers={true} />
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-flame-pink/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="z-10 shrink-0"
      >
        <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase text-flame-pink/80 bg-flame-pink/10 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded">
          {slide4Solution.category}
        </span>
        <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mt-1 sm:mt-1.5 tracking-wide leading-tight">
          {slide4Solution.title}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-flame-pink/90 max-w-3xl mt-0.5 leading-snug">
          {slide4Solution.subtitle}
        </p>
      </motion.div>

      {/* Main Body: Pillars + Interactive Diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-5 my-auto py-1 sm:py-2 z-10 items-center min-h-0">
        {/* Left: 5 Pillars List */}
        <div className="lg:col-span-7 flex flex-col gap-1.5 sm:gap-2">
          {slide4Solution.pillars.map((item, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.1 + idx * 0.05 }}
                className="bg-flame-maroon-dark/90 border border-flame-pink/25 border-t-white/20 rounded-xl p-2 sm:p-2.5 lg:p-3 flex items-start gap-2.5 sm:gap-3 hover:border-flame-pink/60 transition-all shadow-md backdrop-blur-md"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-flame-pink/20 text-flame-pink flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-white text-xs sm:text-sm lg:text-[15px] leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-white/85 mt-0.5 leading-snug font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right: Diagram (Flamebase Shift Architecture) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5 bg-flame-maroon-deep/95 border border-flame-pink/35 border-t-white/20 rounded-xl p-3 sm:p-3.5 lg:p-4 shadow-xl flex flex-col justify-between backdrop-blur-md"
        >
          <div className="flex items-center justify-between border-b border-flame-pink/20 pb-2 mb-2 sm:mb-2.5">
            <span className="font-anton text-xs sm:text-sm tracking-wider uppercase text-flame-pink">
              {slide4Solution.diagram.title}
            </span>
            <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-bold">
              {slide4Solution.diagram.badge}
            </span>
          </div>

          <div className="flex flex-col gap-1 sm:gap-1.5">
            {/* Layer 1: Client App */}
            <div className="bg-flame-maroon-dark/95 border border-flame-pink/30 rounded-lg p-1.5 sm:p-2 text-center shadow-xs">
              <span className="text-[9px] sm:text-[10px] font-mono text-flame-pink/80 uppercase font-semibold">
                {slide4Solution.diagram.clientTitle}
              </span>
              <p className="font-bold text-white text-xs sm:text-sm mt-0.5 leading-tight">
                {slide4Solution.diagram.clientSub}
              </p>
              <p className="text-[10px] text-flame-pink/70 mt-0.5 hidden sm:block">
                {slide4Solution.diagram.clientNote}
              </p>
            </div>

            {/* Down Arrow */}
            <div className="flex justify-center text-flame-pink py-0">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </div>

            {/* Layer 2: Forked SDK */}
            <div className="bg-flame-maroon/95 border-2 border-flame-pink/70 rounded-lg p-1.5 sm:p-2 text-center shadow-sm">
              <span className="text-[9px] sm:text-[10px] font-mono text-flame-pink uppercase font-bold">
                {slide4Solution.diagram.sdkTitle}
              </span>
              <p className="font-bold text-flame-pink text-xs sm:text-sm mt-0.5 leading-tight">
                {slide4Solution.diagram.sdkName}
              </p>
              <p className="text-[10px] text-white/90 mt-0.5 font-mono">
                {slide4Solution.diagram.sdkNote}
              </p>
            </div>

            {/* Down Arrow */}
            <div className="flex justify-center text-flame-pink py-0">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </div>

            {/* Layer 3: Self-Hosted Rust Stack */}
            <div className="bg-flame-maroon-dark/95 border border-flame-pink/40 rounded-lg p-2 sm:p-2.5 shadow-xs">
              <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                <span className="text-xs font-bold font-mono text-flame-pink">
                  {slide4Solution.diagram.coreTitle}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono bg-flame-pink text-flame-maroon px-2 py-0.5 font-extrabold rounded">
                  {slide4Solution.diagram.coreBadge}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-1 text-[10px] font-mono text-center font-bold">
                {slide4Solution.diagram.ports.map((port, i) => (
                  <div key={i} className="bg-flame-maroon/90 border border-flame-pink/25 rounded py-1 px-1 text-white truncate">
                    {port}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Summary Pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.35 }}
        className="z-10 bg-flame-maroon-dark/90 border border-flame-pink/25 border-t-white/20 rounded-xl px-3.5 py-1.5 sm:py-2 flex items-center justify-between text-xs sm:text-sm text-flame-pink/90 backdrop-blur-md shadow-lg shrink-0"
      >
        <span className="truncate pr-2">
          <strong className="text-white">{slide4Solution.takeaway.strong}</strong> {slide4Solution.takeaway.text}
        </span>
        <span className="font-mono text-white text-[10px] sm:text-xs hidden sm:inline font-bold shrink-0">
          {slide4Solution.takeaway.meta}
        </span>
      </motion.div>
    </div>
  );
}
