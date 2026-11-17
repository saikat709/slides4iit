import React from 'react';
import { motion } from 'framer-motion';
import presentationData from '../../../presentationData.json';
import RealFlameBackground from '../RealFlameBackground';
import {
  Cpu,
  Database,
  HardDrive,
  Code2,
  LayoutDashboard,
  Terminal,
  Container,
  FolderGit2
} from 'lucide-react';

export default function Slide7TechStack() {
  const { slide7TechStack } = presentationData;

  const getIconForLayer = (layer = '') => {
    const l = layer.toLowerCase();
    if (l.includes('backend')) return Cpu;
    if (l.includes('database')) return Database;
    if (l.includes('storage')) return HardDrive;
    if (l.includes('function')) return Terminal;
    if (l.includes('dashboard') || l.includes('console')) return LayoutDashboard;
    if (l.includes('sdk') || l.includes('client')) return Code2;
    if (l.includes('packag') || l.includes('deploy')) return Container;
    if (l.includes('build') || l.includes('version')) return FolderGit2;
    return Cpu;
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 bg-gradient-to-b from-[#FFF5F6] via-[#FEDEE1] to-[#FCD2D8] text-flame-maroon relative overflow-hidden">
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
        <h2 className="font-anton text-3xl sm:text-4xl md:text-5xl text-flame-maroon mt-2 tracking-wide">
          {slide7TechStack.title}
        </h2>
        <p className="text-sm sm:text-base text-flame-maroon/90 max-w-4xl mt-1 font-medium">
          {slide7TechStack.subtitle}
        </p>
      </motion.div>

      {/* Architectural Stack Table */}
      <div className="my-auto py-2 z-10 overflow-hidden">
        <div className="bg-white/95 border border-flame-maroon/20 rounded-2xl shadow-2xl overflow-hidden divide-y divide-flame-maroon/10 backdrop-blur-md">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-flame-maroon text-white text-xs font-mono font-bold tracking-wider uppercase px-5 py-3">
            <div className="col-span-3 sm:col-span-3">Architectural Layer</div>
            <div className="col-span-3 sm:col-span-3">Technology / Tool</div>
            <div className="col-span-6 sm:col-span-6">Role & Technical Justification</div>
          </div>

          {/* Table Rows (8 Architectural Layers including Storage Engine) */}
          {slide7TechStack.stack.map((item, idx) => {
            const Icon = getIconForLayer(item.layer);
            const isStorage = item.layer.toLowerCase().includes('storage');
            const isDashboard = item.layer.toLowerCase().includes('dashboard');

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 + idx * 0.04 }}
                className={`grid grid-cols-12 px-5 py-2.5 items-center transition-colors text-xs sm:text-sm ${
                  isStorage
                    ? 'bg-amber-500/10 hover:bg-amber-500/15'
                    : isDashboard
                    ? 'bg-emerald-500/5 hover:bg-emerald-500/10'
                    : 'hover:bg-flame-pink/40'
                }`}
              >
                {/* Layer */}
                <div className="col-span-3 font-bold text-flame-maroon flex items-center gap-2.5">
                  <div className={`p-1.5 rounded-lg shadow-xs ${
                    isStorage
                      ? 'bg-amber-600 text-white'
                      : isDashboard
                      ? 'bg-flame-maroon text-emerald-300'
                      : 'bg-flame-maroon/10 text-flame-maroon'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold tracking-tight">{item.layer}</span>
                </div>

                {/* Tech */}
                <div className="col-span-3 font-mono font-bold text-flame-maroon-light flex items-center gap-2">
                  <span className={`text-xs sm:text-sm ${isStorage ? 'text-amber-800 font-extrabold' : ''}`}>
                    {item.tech}
                  </span>
                  {item.badge && (
                    <span className={`hidden xl:inline text-[11px] px-2 py-0.5 rounded font-sans font-semibold ${
                      isStorage
                        ? 'bg-amber-200 text-amber-900 border border-amber-300'
                        : 'bg-flame-maroon/10 text-flame-maroon'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Justification */}
                <div className="col-span-6 text-[#2D0107] text-xs sm:text-[13px] leading-relaxed font-normal">
                  {item.role}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Stack Flow Pill */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.4 }}
        className="z-10 bg-flame-maroon text-white rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-3 shadow-xl text-xs sm:text-sm"
      >
        <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm">
          <span className="text-flame-pink font-bold">{slide7TechStack.pipelineSummary.label}</span>
          {slide7TechStack.pipelineSummary.steps.map((step, i) => (
            <React.Fragment key={i}>
              <span className={
                step.includes('object_store')
                  ? 'text-amber-300 font-bold'
                  : step.includes('redb')
                  ? 'text-emerald-300 font-bold'
                  : ''
              }>
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
