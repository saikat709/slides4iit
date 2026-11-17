import React from 'react';
import { motion } from 'framer-motion';
import presentationData from '../../../presentationData.json';
import RealFlameBackground from '../RealFlameBackground';
import { Code2, Server, Terminal, UserCog, Users, Rocket, GraduationCap, Building2 } from 'lucide-react';

export default function Slide6Stakeholders() {
  const { slide6Stakeholders } = presentationData;

  const stakeholderIcons = [Code2, Server, Terminal, UserCog, Users];
  const targetUserIcons = [Rocket, GraduationCap, Building2];

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 bg-gradient-to-b from-[#FFF5F6] via-[#FEDEE1] to-[#FCD2D8] text-flame-maroon relative overflow-hidden">
      {/* Light gradient lighting and ambient flame */}
      <div className="absolute inset-0 bg-radial-gradient from-white/60 via-transparent to-flame-pink/40 pointer-events-none" />
      <RealFlameBackground colorPreset="ambient" flameHeight="bottom" intensity={0.5} showEmbers={true} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10"
      >
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-white bg-flame-maroon px-3 py-1 rounded">
          {slide6Stakeholders.category}
        </span>
        <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-flame-maroon mt-2 tracking-wide">
          {slide6Stakeholders.title}
        </h2>
        <p className="text-base sm:text-lg text-flame-maroon/90 max-w-3xl mt-1 font-medium">
          {slide6Stakeholders.subtitle}
        </p>
      </motion.div>

      {/* Main Grid: 5 Stakeholder Groups */}
      <div className="my-auto py-2 z-10">
        <div className="text-xs font-mono font-bold tracking-wider uppercase text-flame-maroon/80 mb-3 flex items-center gap-2">
          <span>5 Approved Primary Stakeholder Groups</span>
          <div className="h-px flex-1 bg-flame-maroon/15" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {slide6Stakeholders.stakeholders.map((s, idx) => {
            const Icon = stakeholderIcons[idx % stakeholderIcons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.07 }}
                className="bg-white/95 border border-flame-maroon/20 rounded-2xl p-5 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:border-flame-maroon/40 hover:scale-[1.02] transition-all backdrop-blur-md"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-flame-maroon text-flame-pink flex items-center justify-center mb-3 shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base sm:text-lg text-flame-maroon leading-snug tracking-tight">
                    {s.role}
                  </h4>
                  <p className="text-sm text-[#3E010A] mt-2 leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-4 pt-2.5 border-t border-flame-maroon/15 text-xs font-mono text-flame-maroon/70 font-semibold uppercase">
                  Stakeholder #{idx + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Section: 3 Target User Segments */}
      <div className="z-10">
        <div className="text-xs font-mono font-bold tracking-wider uppercase text-flame-maroon/80 mb-2.5 flex items-center gap-2">
          <span>Target User Segments</span>
          <div className="h-px flex-1 bg-flame-maroon/15" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {slide6Stakeholders.targetUsers.map((u, idx) => {
            const Icon = targetUserIcons[idx % targetUserIcons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 + idx * 0.08 }}
                className="bg-flame-maroon text-white rounded-2xl p-5 sm:p-5.5 flex items-start gap-4 shadow-xl border border-white/10"
              >
                <div className="p-3 rounded-2xl bg-flame-pink text-flame-maroon shrink-0 mt-0.5 shadow-md">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg text-flame-pink tracking-tight uppercase">
                    {u.title}
                  </h4>
                  <p className="text-sm text-white/95 mt-1 leading-relaxed font-normal">
                    {u.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
