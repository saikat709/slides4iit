import React from 'react';
import { motion } from 'framer-motion';
import presentationData from '../../../presentationData.json';
import RealFlameBackground from '../RealFlameBackground';
import { Smartphone, Laptop, Cloud, KeyRound, Database, HardDrive, Terminal, ArrowRight, ArrowDown, Repeat } from 'lucide-react';

export default function Slide2Firebase() {
  const { slide2Firebase } = presentationData;

  const serviceIcons = [KeyRound, Database, HardDrive, Terminal];
  const serviceColors = [
    "bg-amber-500/20 border-amber-500/40 text-amber-300",
    "bg-blue-500/20 border-blue-500/40 text-blue-300",
    "bg-emerald-500/20 border-emerald-500/40 text-emerald-300",
    "bg-purple-500/20 border-purple-500/40 text-purple-300",
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-b from-[#56030F] via-flame-maroon to-[#280005] text-white relative overflow-hidden">
      {/* Light gradient lighting and ambient flame */}
      <div className="absolute inset-0 bg-radial-gradient from-flame-pink/5 via-transparent to-black/40 pointer-events-none" />
      <RealFlameBackground colorPreset="ambient" flameHeight="bottom" intensity={0.65} showEmbers={true} />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-flame-pink/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="z-10 shrink-0"
      >
        <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase text-flame-pink/80 bg-flame-pink/10 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded">
          {slide2Firebase.category}
        </span>
        <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mt-1 sm:mt-1.5 tracking-wide leading-tight">
          {slide2Firebase.title}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-flame-pink/90 max-w-3xl mt-0.5 leading-snug">
          {slide2Firebase.subtitle}
        </p>
      </motion.div>

      {/* Visual Diagram 1: How Firebase Works */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="my-auto py-2 z-10"
      >
        <div className="bg-flame-maroon-dark/90 border border-flame-pink/30 border-t-white/20 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
          <div className="text-xs font-bold text-flame-pink/80 uppercase tracking-widest mb-4 flex items-center justify-between">
            <span className="font-mono text-sm">{slide2Firebase.pipeline.tag}</span>
            <span className="font-mono text-xs bg-red-950/90 text-rose-300 border border-rose-800/50 px-3 py-1 rounded-full font-semibold">
              {slide2Firebase.pipeline.cloudBadge}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Step 1: Client Application */}
            <div className="lg:col-span-3 bg-flame-maroon/95 border border-flame-pink/30 rounded-xl p-4 flex flex-col items-center text-center shadow-md">
              <div className="flex gap-2 text-flame-pink mb-2">
                <Laptop className="w-6 h-6" />
                <Smartphone className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white text-base">{slide2Firebase.pipeline.clientApp}</h4>
              <p className="text-xs text-flame-pink/80 mt-1 font-mono font-medium">{slide2Firebase.pipeline.clientSub}</p>
            </div>

            {/* Connector Arrow */}
            <div className="lg:col-span-1 flex justify-center text-flame-pink">
              <ArrowRight className="w-6 h-6 hidden lg:block animate-pulse" />
              <ArrowDown className="w-6 h-6 lg:hidden animate-pulse" />
            </div>

            {/* Step 2: Firebase SDK */}
            <div className="lg:col-span-3 bg-flame-maroon/95 border border-flame-pink/30 rounded-xl p-4 flex flex-col items-center text-center shadow-md">
              <div className="w-10 h-10 rounded-full bg-flame-pink/15 flex items-center justify-center text-flame-pink mb-2">
                <Cloud className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">{slide2Firebase.pipeline.sdk}</h4>
              <p className="text-xs text-flame-pink/80 mt-1 font-mono font-medium">{slide2Firebase.pipeline.sdkSub}</p>
            </div>

            {/* Connector Arrow */}
            <div className="lg:col-span-1 flex justify-center text-flame-pink">
              <ArrowRight className="w-6 h-6 hidden lg:block animate-pulse" />
              <ArrowDown className="w-6 h-6 lg:hidden animate-pulse" />
            </div>

            {/* Step 3: Google Hosted Services */}
            <div className="lg:col-span-4 bg-flame-maroon-deep/95 border border-flame-pink/40 rounded-xl p-4 shadow-md">
              <div className="text-xs font-bold uppercase tracking-wider text-flame-pink mb-2.5 font-mono">
                {slide2Firebase.pipeline.hostedTitle}
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {slide2Firebase.pipeline.services.map((svc, i) => (
                  <div key={i} className="bg-flame-maroon/90 border border-flame-pink/20 rounded-lg p-2.5 text-white font-semibold text-center">
                    {svc}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Four Core Services Explanation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {slide2Firebase.services.map((svc, idx) => {
            const Icon = serviceIcons[idx % serviceIcons.length];
            const colorClass = serviceColors[idx % serviceColors.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                className="bg-flame-maroon-dark/90 border border-flame-pink/25 border-t-white/20 rounded-2xl p-5 shadow-xl hover:border-flame-pink/50 hover:scale-[1.02] transition-all backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className={`p-2 rounded-xl border ${colorClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-white text-base leading-snug">{svc.name}</h4>
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed font-normal mt-1">
                    {svc.role}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* The Flamebase Shift Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="z-10 bg-flame-pink text-flame-maroon rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-flame-maroon text-flame-pink flex items-center justify-center shrink-0">
            <Repeat className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
          </div>
          <div>
            <span className="font-anton tracking-wide text-lg uppercase text-flame-maroon">
              {slide2Firebase.shiftBanner.title}
            </span>
            <p className="text-sm font-medium text-flame-maroon/95 leading-normal">
              {slide2Firebase.shiftBanner.description}
            </p>
          </div>
        </div>
        <span className="font-mono text-xs font-extrabold uppercase bg-flame-maroon text-flame-pink px-4 py-2 rounded-xl shadow-md shrink-0">
          {slide2Firebase.shiftBanner.badge}
        </span>
      </motion.div>
    </div>
  );
}
