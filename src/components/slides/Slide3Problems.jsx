import React from 'react';
import { motion } from 'framer-motion';
import presentationData from '../../../presentationData.json';
import RealFlameBackground from '../RealFlameBackground';
import { Lock, DollarSign, Link2Off, Cpu } from 'lucide-react';

export default function Slide3Problems() {
  const { slide3Problems } = presentationData;
  const problemIcons = [Lock, DollarSign, Link2Off];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-b from-[#580310] via-flame-maroon to-[#240004] text-white relative overflow-hidden">
      {/* Light gradient lighting and ambient flame */}
      <div className="absolute inset-0 bg-radial-gradient from-flame-pink/5 via-transparent to-black/35 pointer-events-none" />
      <RealFlameBackground colorPreset="ambient" flameHeight="bottom" intensity={0.65} showEmbers={true} />
      <div className="absolute -bottom-10 right-10 w-96 h-96 bg-flame-maroon-dark/60 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="z-10 shrink-0"
      >
        <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase text-flame-pink/80 bg-flame-pink/10 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded">
          {slide3Problems.category}
        </span>
        <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mt-1 sm:mt-1.5 tracking-wide leading-tight">
          {slide3Problems.title}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-flame-pink/90 max-w-3xl mt-0.5 leading-snug">
          {slide3Problems.subtitle}
        </p>
      </motion.div>

      {/* 3 Core Problem Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto py-3 z-10">
        {slide3Problems.problems.map((prob, idx) => {
          const Icon = problemIcons[idx % problemIcons.length];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + idx * 0.12 }}
              className="bg-flame-maroon-dark/90 border border-flame-pink/30 border-t-white/20 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl relative group hover:border-flame-pink/60 transition-all hover:scale-[1.02] backdrop-blur-md"
            >
              {/* Card top accent */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-anton text-4xl text-flame-pink/40 group-hover:text-flame-pink transition-colors">
                    {prob.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-flame-pink/15 border border-flame-pink/30 flex items-center justify-center text-flame-pink shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="font-bold text-xl sm:text-2xl text-white tracking-tight leading-snug">
                  {prob.title}
                </h3>
                <p className="text-xs font-mono text-amber-300 font-bold uppercase tracking-wider mt-1 mb-3">
                  {prob.subtitle}
                </p>

                <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                  {prob.description}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="mt-6 pt-3.5 border-t border-flame-pink/20">
                <span className="text-xs font-mono text-rose-200 bg-rose-950/80 border border-rose-700/50 px-3 py-1.5 rounded-lg block text-center font-semibold shadow-sm">
                  {prob.impact}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Strict Framing Rule Callout */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="z-10 bg-flame-maroon-dark/95 border border-flame-pink/35 border-t-white/20 rounded-2xl p-4 sm:p-5 flex items-center gap-4 text-sm sm:text-base text-white/95 shadow-xl backdrop-blur-md"
      >
        <div className="p-2.5 rounded-xl bg-flame-pink/15 text-flame-pink shrink-0">
          <Cpu className="w-6 h-6" />
        </div>
        <div>
          <span className="font-bold text-flame-pink uppercase tracking-wider font-mono mr-2">
            {slide3Problems.framing.label}
          </span>
          {slide3Problems.framing.text}
        </div>
      </motion.div>
    </div>
  );
}
