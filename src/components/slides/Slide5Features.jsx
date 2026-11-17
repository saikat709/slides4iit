import React from 'react';
import { motion } from 'framer-motion';
import presentationData from '../../../presentationData.json';
import RealFlameBackground from '../RealFlameBackground';
import { KeyRound, Database, Terminal, HardDrive, LayoutDashboard, Radio } from 'lucide-react';

export default function Slide5Features() {
  const { slide5Features } = presentationData;
  const serviceIcons = [KeyRound, Database, Terminal, HardDrive];

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 bg-gradient-to-b from-[#FFF5F6] via-[#FEDEE1] to-[#FCD2D8] text-flame-maroon relative overflow-hidden">
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
        <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-flame-maroon mt-2 tracking-wide">
          {slide5Features.title}
        </h2>
        <p className="text-base sm:text-lg text-flame-maroon/90 max-w-3xl mt-1 font-medium">
          {slide5Features.subtitle}
        </p>
      </motion.div>

      {/* 4 Core Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-auto py-2 z-10">
        {slide5Features.services.map((svc, idx) => {
          const Icon = serviceIcons[idx % serviceIcons.length];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 + idx * 0.08 }}
              className="bg-white/95 border border-flame-maroon/20 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-flame-maroon/50 hover:shadow-2xl transition-all backdrop-blur-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-flame-maroon text-flame-pink shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl sm:text-2xl text-flame-maroon tracking-tight leading-snug">
                        {svc.title}
                      </h3>
                      <span className="text-xs font-mono font-bold text-flame-maroon-light uppercase tracking-wider">
                        {svc.tag}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-flame-maroon text-white font-mono text-sm font-extrabold shadow-md shrink-0">
                    <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    <span>:{svc.port}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#3A0108] leading-relaxed mt-2.5 font-normal">
                  {svc.details}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-flame-maroon/15 flex items-center justify-between text-xs font-mono text-flame-maroon/80 font-semibold">
                <span>{svc.tech}</span>
                <span className="font-bold text-flame-maroon bg-flame-pink/50 px-2.5 py-0.5 rounded">Active Port :{svc.port}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 5th Feature: Management Console (Port 4000) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="z-10 bg-flame-maroon text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-flame-pink text-flame-maroon flex items-center justify-center shrink-0 shadow-lg">
            <LayoutDashboard className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <span className="font-anton text-xl tracking-wide uppercase text-flame-pink">
                {slide5Features.console.title}
              </span>
              <span className="font-mono text-xs bg-white text-flame-maroon font-extrabold px-3 py-1 rounded-lg shadow-sm">
                PORT {slide5Features.console.port}
              </span>
            </div>
            <p className="text-sm text-flame-pink/95 mt-1 leading-normal font-normal">
              {slide5Features.console.description}
            </p>
          </div>
        </div>
        <div className="shrink-0 flex items-center gap-2">
          <span className="text-xs font-mono bg-flame-maroon-dark border border-flame-pink/40 px-3.5 py-1.5 rounded-xl text-flame-pink font-semibold">
            {slide5Features.console.badge}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
