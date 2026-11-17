import React from 'react';
import { motion } from 'framer-motion';
import presentationData from '../../../presentationData.json';
import RealFlameBackground from '../RealFlameBackground';
import { Cpu, Database, Code2, LayoutDashboard, Terminal, Container, FolderGit2 } from 'lucide-react';

export default function Slide7TechStack() {
  const { slide7TechStack } = presentationData;
  const techIcons = [Cpu, Database, Code2, LayoutDashboard, Terminal, Container, FolderGit2];

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 bg-gradient-to-b from-[#FFF5F6] via-[#FEDEE1] to-[#FCD2D8] text-flame-maroon relative overflow-hidden">
      {/* Light gradient lighting and ambient flame */}
      <div className="absolute inset-0 bg-radial-gradient from-white/60 via-transparent to-flame-pink/40 pointer-events-none" />
      <RealFlameBackground colorPreset="ambient" flameHeight="bottom" intensity={0.5} showEmbers={true} />
      <div className="absolute top-0 right-10 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10"
      >
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-white bg-flame-maroon px-3 py-1 rounded">
          {slide7TechStack.category}
        </span>
        <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-flame-maroon mt-2 tracking-wide">
          {slide7TechStack.title}
        </h2>
        <p className="text-base sm:text-lg text-flame-maroon/90 max-w-3xl mt-1 font-medium">
          {slide7TechStack.subtitle}
        </p>
      </motion.div>

      {/* Architectural Stack Table / Cards */}
      <div className="my-auto py-2 z-10 overflow-hidden">
        <div className="bg-white/95 border border-flame-maroon/20 rounded-2xl shadow-2xl overflow-hidden divide-y divide-flame-maroon/10 backdrop-blur-md">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-flame-maroon text-white text-xs font-mono font-bold tracking-wider uppercase px-5 py-3.5">
            <div className="col-span-3 sm:col-span-3">Architectural Layer</div>
            <div className="col-span-3 sm:col-span-3">Technology / Tool</div>
            <div className="col-span-6 sm:col-span-6">Role & Technical Justification</div>
          </div>

          {/* Table Rows */}
          {slide7TechStack.stack.map((item, idx) => {
            const Icon = techIcons[idx % techIcons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.08 + idx * 0.05 }}
                className="grid grid-cols-12 px-5 py-3 items-center hover:bg-flame-pink/40 transition-colors text-sm"
              >
                {/* Layer */}
                <div className="col-span-3 font-bold text-flame-maroon flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-flame-maroon/10 text-flame-maroon shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base">{item.layer}</span>
                </div>

                {/* Tech */}
                <div className="col-span-3 font-mono font-bold text-flame-maroon-light flex items-center gap-2">
                  <span className="text-sm sm:text-base">{item.tech}</span>
                  <span className="hidden lg:inline text-xs bg-flame-maroon/10 text-flame-maroon px-2 py-0.5 rounded-md font-sans font-semibold">
                    {item.badge}
                  </span>
                </div>

                {/* Justification */}
                <div className="col-span-6 text-[#3E010A] text-sm leading-relaxed font-normal">
                  {item.role}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Stack Flow Pill */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="z-10 bg-flame-maroon text-white rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 shadow-2xl text-sm"
      >
        <div className="flex items-center gap-2.5 font-mono text-sm">
          <span className="text-flame-pink font-bold">{slide7TechStack.pipelineSummary.label}</span>
          {slide7TechStack.pipelineSummary.steps.map((step, i) => (
            <React.Fragment key={i}>
              <span className={i === 2 ? 'text-amber-300 font-bold' : i === 3 ? 'text-emerald-300 font-bold' : ''}>
                {step}
              </span>
              {i < slide7TechStack.pipelineSummary.steps.length - 1 && (
                <span className="text-flame-pink">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
        <span className="font-mono text-xs bg-flame-pink text-flame-maroon font-extrabold px-3 py-1 rounded-lg">
          {slide7TechStack.pipelineSummary.badge}
        </span>
      </motion.div>
    </div>
  );
}
