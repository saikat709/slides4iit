import React from 'react';
import { motion } from 'framer-motion';
import presentationData from '../../../presentationData.json';
import RealFlameBackground from '../RealFlameBackground';
import { KeyRound, Database, HardDrive, Terminal, LayoutDashboard, Radio } from 'lucide-react';

export default function Slide5Features() {
  const { slide5Features } = presentationData;
  const featureIcons = [KeyRound, Database, HardDrive, Terminal, LayoutDashboard];

  const features = slide5Features.features || [
    ...(slide5Features.services || []),
    {
      id: '05',
      title: slide5Features.console?.title || 'Management Console / Dashboard',
      port: slide5Features.console?.port || '4000',
      tag: 'Admin Web Console',
      badge: slide5Features.console?.badge || 'Angular 18',
      details: slide5Features.console?.description || 'Administrative web dashboard built with Angular.',
      tech: `TypeScript + Angular • Port ${slide5Features.console?.port || '4000'}`
    }
  ];

  const topThree = features.slice(0, 3);
  const bottomTwo = features.slice(3, 5);

  const renderCard = (feat, idx, isWide = false) => {
    const Icon = featureIcons[idx % featureIcons.length];
    const isDashboard = feat.port === '4000' || idx === 4;

    return (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 + idx * 0.07 }}
        className={`bg-white/95 border ${
          isDashboard ? 'border-flame-maroon/40 ring-1 ring-flame-maroon/20' : 'border-flame-maroon/20'
        } rounded-2xl p-5 shadow-xl flex flex-col justify-between hover:border-flame-maroon/60 hover:shadow-2xl transition-all backdrop-blur-md relative overflow-hidden`}
      >
        {isDashboard && (
          <div className="absolute top-0 right-0 bg-gradient-to-l from-flame-maroon to-flame-maroon-light text-white text-[10px] font-mono font-extrabold px-3 py-0.5 rounded-bl-lg uppercase tracking-wider">
            Web Console
          </div>
        )}

        <div>
          {/* Header row: Icon, IDs & Port */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl ${isDashboard ? 'bg-flame-maroon-dark text-amber-300' : 'bg-flame-maroon text-flame-pink'} shadow-md shrink-0`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] font-extrabold text-white bg-flame-maroon px-2 py-0.5 rounded">
                    FEATURE {feat.id || `0${idx + 1}`}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-flame-maroon-light uppercase tracking-wider">
                    {feat.tag}
                  </span>
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-flame-maroon tracking-tight leading-snug mt-1">
                  {feat.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-flame-maroon text-white font-mono text-xs font-extrabold shadow-md shrink-0">
              <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
              <span>:{feat.port}</span>
            </div>
          </div>

          {/* Details */}
          <p className="text-xs sm:text-[13px] text-[#350107] leading-relaxed font-normal mt-2">
            {feat.details}
          </p>
        </div>

        {/* Footer info pill */}
        <div className="mt-3 pt-2.5 border-t border-flame-maroon/15 flex items-center justify-between text-[11px] font-mono text-flame-maroon/80 font-semibold">
          <span className="truncate pr-2">{feat.tech}</span>
          <span className="font-bold text-flame-maroon bg-flame-pink/50 px-2.5 py-0.5 rounded shrink-0">
            Port :{feat.port}
          </span>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 bg-gradient-to-b from-[#FFF5F6] via-[#FEDEE1] to-[#FCD2D8] text-flame-maroon relative overflow-hidden">
      {/* Light gradient lighting and ambient flame */}
      <div className="absolute inset-0 bg-radial-gradient from-white/60 via-transparent to-flame-pink/40 pointer-events-none" />
      <RealFlameBackground colorPreset="ambient" flameHeight="bottom" intensity={0.5} showEmbers={true} />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/50 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10"
      >
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-white bg-flame-maroon px-3 py-1 rounded">
          {slide5Features.category}
        </span>
        <h2 className="font-anton text-3xl sm:text-4xl md:text-5xl text-flame-maroon mt-2 tracking-wide">
          {slide5Features.title}
        </h2>
        <p className="text-sm sm:text-base text-flame-maroon/90 max-w-4xl mt-1 font-medium">
          {slide5Features.subtitle}
        </p>
      </motion.div>

      {/* 5 Core Features Grid: 3 in Top Row, 2 in Bottom Row */}
      <div className="flex flex-col gap-4 my-auto py-2 z-10">
        {/* Top 3 Cards: Auth, Database, Storage (object_store) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topThree.map((feat, idx) => renderCard(feat, idx, false))}
        </div>

        {/* Bottom 2 Cards: Functions, Management Console / Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bottomTwo.map((feat, idx) => renderCard(feat, idx + 3, true))}
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.4 }}
        className="z-10 bg-flame-maroon text-white rounded-xl px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 shadow-lg text-xs font-mono"
      >
        <div className="flex items-center gap-3">
          <span className="text-flame-pink font-bold uppercase tracking-wider">Active Service Endpoints:</span>
          <span className="text-white">Auth (:9099)</span>
          <span className="text-flame-pink/60">•</span>
          <span className="text-white">Database (:8080)</span>
          <span className="text-flame-pink/60">•</span>
          <span className="text-amber-300 font-bold">Storage / object_store (:9199)</span>
          <span className="text-flame-pink/60">•</span>
          <span className="text-white">Functions (:5001)</span>
          <span className="text-flame-pink/60">•</span>
          <span className="text-emerald-300 font-bold">Dashboard (:4000)</span>
        </div>
        <span className="bg-flame-pink text-flame-maroon font-bold px-2.5 py-0.5 rounded text-[11px]">
          5 Core Components
        </span>
      </motion.div>
    </div>
  );
}
