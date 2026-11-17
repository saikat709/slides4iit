import React from 'react';
import { motion } from 'framer-motion';
import presentationData from '../../../presentationData.json';
import RealFlameBackground from '../RealFlameBackground';
import { FolderGit2, Code2, Terminal, Cpu } from 'lucide-react';

export default function Slide9Codebase() {
  const { slide9Codebase } = presentationData;
  const repoIcons = [Code2, Cpu, Terminal];

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 bg-gradient-to-b from-[#56030F] via-flame-maroon to-[#260005] text-white relative overflow-hidden">
      {/* Light gradient lighting and ambient flame */}
      <div className="absolute inset-0 bg-radial-gradient from-flame-pink/5 via-transparent to-black/35 pointer-events-none" />
      <RealFlameBackground colorPreset="ambient" flameHeight="bottom" intensity={0.65} showEmbers={true} />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-flame-maroon-dark/60 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10"
      >
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-flame-pink/80 bg-flame-pink/10 px-3 py-1 rounded">
          {slide9Codebase.category}
        </span>
        <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-white mt-2 tracking-wide">
          {slide9Codebase.title}
        </h2>
        <p className="text-base sm:text-lg text-flame-pink/90 max-w-3xl mt-1">
          {slide9Codebase.subtitle}
        </p>
      </motion.div>

      {/* 3 Repositories Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto py-3 z-10">
        {slide9Codebase.repositories.map((repo, idx) => {
          const Icon = repoIcons[idx % repoIcons.length];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 + idx * 0.1 }}
              className="bg-flame-maroon-dark/90 border border-flame-pink/30 border-t-white/20 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl hover:border-flame-pink/60 hover:scale-[1.02] transition-all backdrop-blur-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-flame-pink text-flame-maroon flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono bg-flame-pink/15 border border-flame-pink/40 text-flame-pink px-2.5 py-1 rounded-lg font-bold uppercase">
                    {repo.type}
                  </span>
                </div>

                <h3 className="font-mono font-bold text-xl sm:text-2xl text-white tracking-tight leading-snug">
                  {repo.name}
                </h3>
                <p className="text-xs font-mono font-bold text-amber-300 mt-1 mb-3">
                  {repo.tech}
                </p>

                <p className="text-sm text-white/90 leading-relaxed font-normal mb-4">
                  {repo.desc}
                </p>

                <div className="space-y-2 pt-3 border-t border-flame-pink/20">
                  {repo.highlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-flame-pink font-medium">
                      <span className="w-2 h-2 rounded-full bg-flame-pink shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-flame-pink/20 flex items-center justify-between text-xs font-mono text-flame-pink/70">
                <span>{repo.repo}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Visual Interconnection Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="z-10 bg-flame-maroon-deep/95 border border-flame-pink/35 border-t-white/20 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm shadow-2xl backdrop-blur-md"
      >
        <div className="flex items-center gap-3 font-mono text-xs sm:text-sm flex-wrap">
          <span className="font-anton tracking-wide uppercase text-flame-pink text-base">
            {slide9Codebase.integration.label}
          </span>
          <span className="text-white font-semibold">{slide9Codebase.integration.client}</span>
          <span className="text-flame-pink font-bold">⇄</span>
          <span className="text-flame-pink font-bold bg-flame-maroon px-2 py-0.5 rounded">
            {slide9Codebase.integration.core}
          </span>
          <span className="text-flame-pink font-bold">←</span>
          <span className="text-white font-semibold">{slide9Codebase.integration.installer}</span>
        </div>
        <span className="font-mono text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full font-bold shrink-0">
          {slide9Codebase.integration.badge}
        </span>
      </motion.div>
    </div>
  );
}
