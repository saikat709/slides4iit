import React from 'react';
import { motion } from 'framer-motion';
import presentationData from '../../../presentationData.json';
import RealFlameBackground from '../RealFlameBackground';
import { Server, Zap, CheckCircle2, Terminal, ArrowDown, ShieldCheck } from 'lucide-react';

export default function Slide4Solution() {
  const { slide4Solution } = presentationData;
  const pillarIcons = [ShieldCheck, CheckCircle2, Zap, Server, Terminal];

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
          {slide4Solution.category}
        </span>
        <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-white mt-2 tracking-wide">
          {slide4Solution.title}
        </h2>
        <p className="text-base sm:text-lg text-flame-pink/90 max-w-3xl mt-1">
          {slide4Solution.subtitle}
        </p>
      </motion.div>

      {/* Main Body: Pillars + Interactive Diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2 z-10 items-center">
        {/* Left: 5 Pillars List */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          {slide4Solution.pillars.map((item, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                className="bg-flame-maroon-dark/90 border border-flame-pink/25 border-t-white/20 rounded-2xl p-4 sm:p-4.5 flex items-start gap-4 hover:border-flame-pink/60 hover:scale-[1.01] transition-all shadow-xl backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-flame-pink/20 text-flame-pink flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base sm:text-lg leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-sm text-white/90 mt-1 leading-relaxed font-normal">
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
          transition={{ duration: 0.6, delay: 0.25 }}
          className="lg:col-span-5 bg-flame-maroon-deep/95 border border-flame-pink/35 border-t-white/20 rounded-2xl p-6 shadow-2xl flex flex-col justify-between backdrop-blur-md"
        >
          <div className="flex items-center justify-between border-b border-flame-pink/20 pb-3 mb-4">
            <span className="font-anton text-base tracking-wider uppercase text-flame-pink">
              {slide4Solution.diagram.title}
            </span>
            <span className="text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-0.5 rounded-full font-bold">
              {slide4Solution.diagram.badge}
            </span>
          </div>

          <div className="flex flex-col gap-3.5">
            {/* Layer 1: Client App */}
            <div className="bg-flame-maroon-dark/95 border border-flame-pink/30 rounded-xl p-4 text-center shadow-md">
              <span className="text-xs font-mono text-flame-pink/80 uppercase font-semibold">
                {slide4Solution.diagram.clientTitle}
              </span>
              <p className="font-bold text-white text-base mt-0.5">
                {slide4Solution.diagram.clientSub}
              </p>
              <p className="text-xs text-flame-pink/70 mt-0.5">
                {slide4Solution.diagram.clientNote}
              </p>
            </div>

            {/* Down Arrow */}
            <div className="flex justify-center text-flame-pink">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>

            {/* Layer 2: Forked SDK */}
            <div className="bg-flame-maroon/95 border-2 border-flame-pink/70 rounded-xl p-4 text-center shadow-lg">
              <span className="text-xs font-mono text-flame-pink uppercase font-bold">
                {slide4Solution.diagram.sdkTitle}
              </span>
              <p className="font-bold text-flame-pink text-base sm:text-lg mt-0.5">
                {slide4Solution.diagram.sdkName}
              </p>
              <p className="text-xs text-white/90 mt-0.5 font-mono">
                {slide4Solution.diagram.sdkNote}
              </p>
            </div>

            {/* Down Arrow */}
            <div className="flex justify-center text-flame-pink">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>

            {/* Layer 3: Self-Hosted Rust Stack */}
            <div className="bg-flame-maroon-dark/95 border border-flame-pink/40 rounded-xl p-4 shadow-md">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-sm font-bold font-mono text-flame-pink">
                  {slide4Solution.diagram.coreTitle}
                </span>
                <span className="text-xs font-mono bg-flame-pink text-flame-maroon px-2 py-0.5 font-extrabold rounded">
                  {slide4Solution.diagram.coreBadge}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-center font-bold">
                {slide4Solution.diagram.ports.map((port, i) => (
                  <div key={i} className="bg-flame-maroon/90 border border-flame-pink/25 rounded-lg py-1.5 text-white">
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
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="z-10 bg-flame-maroon-dark/90 border border-flame-pink/25 border-t-white/20 rounded-2xl px-5 py-3 flex items-center justify-between text-sm text-flame-pink/90 backdrop-blur-md shadow-xl"
      >
        <span>
          <strong className="text-white">{slide4Solution.takeaway.strong}</strong> {slide4Solution.takeaway.text}
        </span>
        <span className="font-mono text-white text-xs hidden sm:inline font-bold">
          {slide4Solution.takeaway.meta}
        </span>
      </motion.div>
    </div>
  );
}
