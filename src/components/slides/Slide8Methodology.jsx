import React from 'react';
import { motion } from 'framer-motion';
import presentationData from '../../../presentationData.json';
import RealFlameBackground from '../RealFlameBackground';
import { Layers, Workflow } from 'lucide-react';

export default function Slide8Methodology() {
  const { slide8Methodology } = presentationData;
  const pillarIcons = [Layers, Workflow];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-b from-[#56030F] via-flame-maroon to-[#260005] text-white relative overflow-hidden">
      {/* Light gradient lighting and ambient flame */}
      <div className="absolute inset-0 bg-radial-gradient from-flame-pink/5 via-transparent to-black/35 pointer-events-none" />
      <RealFlameBackground colorPreset="ambient" flameHeight="bottom" intensity={0.65} showEmbers={true} />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-flame-pink/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="z-10 shrink-0"
      >
        <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase text-flame-pink/80 bg-flame-pink/10 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded">
          {slide8Methodology.category}
        </span>
        <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mt-1 sm:mt-1.5 tracking-wide leading-tight">
          {slide8Methodology.title}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-flame-pink/90 max-w-3xl mt-0.5 leading-snug">
          {slide8Methodology.subtitle}
        </p>
      </motion.div>

      {/* Core Methodology Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 my-auto py-1 sm:py-2 z-10 min-h-0">
        {slide8Methodology.pillars.map((pillar, idx) => {
          const Icon = pillarIcons[idx % pillarIcons.length];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -15 : 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.12 + idx * 0.05 }}
              className="bg-flame-maroon-dark/90 border border-flame-pink/30 border-t-white/20 rounded-xl p-3 sm:p-4 lg:p-5 shadow-xl backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-flame-pink text-flame-maroon flex items-center justify-center shrink-0 shadow-md">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg lg:text-xl text-white tracking-tight leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs font-mono font-bold text-amber-300 uppercase tracking-wider">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-[13px] text-white/90 leading-snug font-normal mb-2">
                  {pillar.desc}
                </p>

                {pillar.steps && (
                  <div className="space-y-1 sm:space-y-1.5 pt-2 border-t border-flame-pink/15">
                    {pillar.steps.map((s, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] sm:text-xs">
                        <span className="font-mono font-bold text-[9px] sm:text-[10px] bg-flame-pink/20 text-flame-pink px-2 py-0.5 rounded shrink-0 mt-0.5 border border-flame-pink/30">
                          {s.step}
                        </span>
                        <div className="leading-snug truncate sm:whitespace-normal">
                          <strong className="text-white font-semibold">{s.name}: </strong>
                          <span className="text-white/85 font-normal">{s.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 6-Phase Roadmap Visual Track */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.25 }}
        className="z-10 bg-flame-maroon-deep/95 border border-flame-pink/35 border-t-white/20 rounded-xl p-2.5 sm:p-3 lg:p-3.5 shadow-xl backdrop-blur-md shrink-0"
      >
        <div className="flex items-center justify-between mb-2 text-xs">
          <span className="font-mono text-[11px] sm:text-xs font-bold tracking-wider uppercase text-flame-pink">
            {slide8Methodology.roadmapTitle}
          </span>
          <span className="font-mono text-[10px] sm:text-xs text-emerald-300 bg-emerald-950/90 border border-emerald-700/50 px-2.5 py-0.5 rounded-full font-bold">
            {slide8Methodology.roadmapBadge}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
          {slide8Methodology.phases.map((p, i) => (
            <div
              key={i}
              className={`rounded-xl p-2 sm:p-2.5 flex flex-col justify-between border transition-all ${
                p.current
                  ? 'bg-flame-pink text-flame-maroon border-white shadow-lg scale-[1.02]'
                  : 'bg-flame-maroon-dark/80 text-flame-pink/90 border-flame-pink/20 hover:border-flame-pink/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] font-extrabold mb-1">
                  <span>{p.num}</span>
                  <span className={p.current ? 'text-emerald-800 font-extrabold' : 'text-flame-pink/60'}>
                    {p.status}
                  </span>
                </div>
                <h5 className={`font-bold text-xs sm:text-sm leading-tight truncate ${p.current ? 'text-flame-maroon' : 'text-white'}`}>
                  {p.name}
                </h5>
              </div>
              <p className={`text-[10px] sm:text-[11px] mt-1 leading-snug line-clamp-2 ${p.current ? 'text-flame-maroon/95 font-medium' : 'text-white/80'}`}>
                {p.details}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
