import React from 'react';
import { motion } from 'framer-motion';
import presentationData from '../../../presentationData.json';
import RealFlameBackground from '../RealFlameBackground';
import { Github, Shield, ExternalLink, Terminal, Cpu } from 'lucide-react';

export default function Slide10Team() {
  const { meta, slide10Conclusion } = presentationData;

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 bg-gradient-to-b from-[#56030F] via-flame-maroon to-[#220005] text-white relative overflow-hidden">
      {/* Ambient Flame & Embers Background */}
      <RealFlameBackground colorPreset="ambient" flameHeight="bottom" intensity={0.7} showEmbers={true} />

      {/* Center Section: Clean, Bold, Concluding Focus */}
      <div className="my-auto py-4 z-10 max-w-4xl w-full mx-auto text-center space-y-7">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-3"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-flame-pink/80 flex items-center justify-center gap-2">
            <Cpu className="w-4 h-4 text-flame-pink" />
            {slide10Conclusion.tag}
          </span>
          <h1 className="font-anton text-7xl sm:text-8xl md:text-9xl lg:text-[130px] tracking-tight text-white leading-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.85)]">
            {slide10Conclusion.title}
          </h1>
          <p className="text-2xl sm:text-3xl font-extrabold text-flame-pink mt-2">
            {slide10Conclusion.tagline}
          </p>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-normal leading-relaxed pt-1">
            {slide10Conclusion.description}
          </p>
        </motion.div>

        {/* Credits Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left pt-2"
        >
          {/* Developers */}
          <div className="bg-flame-maroon-dark/90 border border-flame-pink/30 border-t-white/20 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md hover:border-flame-pink/60 transition-all">
            <span className="text-xs font-mono uppercase tracking-wider text-flame-pink/70 font-bold block mb-1.5">
              Engineering Team
            </span>
            <h4 className="font-bold text-2xl text-white tracking-tight leading-snug">
              {meta.team.map((t) => t.name).join(' & ')}
            </h4>
            <p className="text-sm font-mono text-flame-pink mt-1.5 font-semibold">
              {meta.team[0]?.title || "Core Rust Backend & Client SDK Developers"}
            </p>
          </div>

          {/* Supervisor */}
          <div className="bg-flame-maroon-dark/90 border border-flame-pink/30 border-t-white/20 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md hover:border-flame-pink/60 transition-all">
            <span className="text-xs font-mono uppercase tracking-wider text-flame-pink/70 font-bold block mb-1.5">
              Project Supervisor
            </span>
            <h4 className="font-bold text-2xl text-white tracking-tight leading-snug">
              {meta.supervisor.name}
            </h4>
            <p className="text-sm font-mono text-flame-pink mt-1.5 font-semibold">
              {meta.supervisor.role}
            </p>
          </div>
        </motion.div>

        {/* Action Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3.5 pt-2"
        >
          <a
            href={meta.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 bg-flame-pink text-flame-maroon font-extrabold text-sm px-6 py-3 rounded-xl hover:bg-white transition-all shadow-xl group"
          >
            <Github className="w-5 h-5" />
            <span>{meta.githubRepo}</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-flame-maroon-dark/90 border border-flame-pink/30 text-sm font-mono text-flame-pink font-semibold shadow-md">
            <Shield className="w-4 h-4 text-flame-pink" />
            <span>{meta.license} License</span>
          </div>

          <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-flame-maroon-dark/90 border border-flame-pink/30 text-sm font-mono text-flame-pink font-semibold shadow-md">
            <Terminal className="w-4 h-4 text-flame-pink" />
            <span>{meta.ecosystem}</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Status Bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="z-10 bg-flame-maroon-deep/90 border border-flame-pink/25 rounded-xl px-5 py-2.5 flex items-center justify-between text-xs text-flame-pink/80"
      >
        <span>{slide10Conclusion.footerText}</span>
        <span className="font-mono text-white text-xs font-bold">{slide10Conclusion.footerDomain}</span>
      </motion.div>
    </div>
  );
}
