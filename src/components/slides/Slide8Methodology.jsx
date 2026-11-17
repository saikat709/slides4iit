import React from 'react';
import { motion } from 'framer-motion';
import presentationData from '../../../presentationData.json';
import RealFlameBackground from '../RealFlameBackground';
import { Layers, Workflow } from 'lucide-react';

export default function Slide8Methodology() {
  const { slide8Methodology } = presentationData;
  const pillarIcons = [Layers, Workflow];

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 bg-gradient-to-b from-[#56030F] via-flame-maroon to-[#260005] text-white relative overflow-hidden">
      {/* Light gradient lighting and ambient flame */}
      <div className="absolute inset-0 bg-radial-gradient from-flame-pink/5 via-transparent to-black/35 pointer-events-none" />
      <RealFlameBackground colorPreset="ambient" flameHeight="bottom" intensity={0.65} showEmbers={true} />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-flame-pink/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10"
      >
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-flame-pink/80 bg-flame-pink/10 px-3 py-1 rounded">
          {slide8Methodology.category}
        </span>
        <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-white mt-2 tracking-wide">
          {slide8Methodology.title}
        </h2>
        <p className="text-base sm:text-lg text-flame-pink/90 max-w-3xl mt-1">
          {slide8Methodology.subtitle}
        </p>
      </motion.div>

      {/* Core Methodology Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-auto py-2 z-10">
        {slide8Methodology.pillars.map((pillar, idx) => {
          const Icon = pillarIcons[idx % pillarIcons.length];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + idx * 0.05 }}
              className="bg-flame-maroon-dark/90 border border-flame-pink/30 border-t-white/20 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-flame-pink text-flame-maroon flex items-center justify-center shrink-0 shadow-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl sm:text-2xl text-white tracking-tight leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-white/90 leading-relaxed font-normal mb-3.5">
                  {pillar.desc}
                </p>

                {pillar.steps && (
                  <div className="space-y-2 pt-3 border-t border-flame-pink/15">
                    {pillar.steps.map((s, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <span className="font-mono font-bold text-[11px] bg-flame-pink/20 text-flame-pink px-2.5 py-0.5 rounded-md shrink-0 mt-0.5 border border-flame-pink/30">
                          {s.step}
                        </span>
                        <div className="leading-snug">
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
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="z-10 bg-flame-maroon-deep/95 border border-flame-pink/35 border-t-white/20 rounded-2xl p-5 shadow-2xl backdrop-blur-md"
      >
        <div className="flex items-center justify-between mb-3.5 text-xs">
          <span className="font-mono text-xs font-bold tracking-wider uppercase text-flame-pink">
            {slide8Methodology.roadmapTitle}
          </span>
          <span className="font-mono text-xs text-emerald-300 bg-emerald-950/90 border border-emerald-700/50 px-3 py-1 rounded-full font-bold">
            {slide8Methodology.roadmapBadge}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {slide8Methodology.phases.map((p, i) => (
            <div
              key={i}
              className={`rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between border transition-all ${
                p.current
                  ? 'bg-flame-pink text-flame-maroon border-white shadow-xl scale-[1.02]'
                  : 'bg-flame-maroon-dark/80 text-flame-pink/90 border-flame-pink/20 hover:border-flame-pink/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs font-extrabold mb-1.5">
                  <span>{p.num}</span>
                  <span className={p.current ? 'text-emerald-800' : 'text-flame-pink/60'}>
                    {p.status}
                  </span>
                </div>
                <h5 className={`font-bold text-base leading-snug ${p.current ? 'text-flame-maroon' : 'text-white'}`}>
                  {p.name}
                </h5>
              </div>
              <p className={`text-xs mt-2 leading-relaxed ${p.current ? 'text-flame-maroon/95 font-medium' : 'text-white/80'}`}>
                {p.details}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
