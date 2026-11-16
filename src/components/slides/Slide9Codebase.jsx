import React from 'react';
import { motion } from 'framer-motion';
import RealFlameBackground from '../RealFlameBackground';
import { FolderGit2, Code2, Terminal, ArrowRight, ArrowDown, Cpu, Box, Sparkles, Layers } from 'lucide-react';

export default function Slide9Codebase() {
  const repos = [
    {
      name: "flamebase-js-sdk",
      type: "Client Library",
      repo: "flamebase-org/flamebase-js-sdk",
      tech: "TypeScript / JavaScript",
      icon: Code2,
      desc: "Direct fork of official firebase-js-sdk. Retains identical client interfaces while routing network requests to self-hosted Flamebase microservice ports.",
      highlights: [
        "Minimal endpoint modifications",
        "Identical import syntax for developers",
        "Tested against live Rust server",
      ],
    },
    {
      name: "flamebase (Monorepo)",
      type: "Core Backend Services",
      repo: "flamebase-org/flamebase",
      tech: "Rust / Cargo Workspace",
      icon: Cpu,
      desc: "Unified Cargo monorepo containing all 4 core Axum services (Auth, DB, Functions, Storage) and embedded Angular dashboard distribution.",
      highlights: [
        "Cargo workspace with shared crate models",
        "Pure-Rust Axum async HTTP runtime",
        "redb embedded transactional engine",
      ],
    },
    {
      name: "installer",
      type: "DevOps & Automation",
      repo: "flamebase-org/installer",
      tech: "Shell / Docker Compose",
      icon: Terminal,
      desc: "Streamlined single-command installer script that configures environment variables, Docker networks, TLS reverse proxies, and healthcheck monitors.",
      highlights: [
        "Interactive CLI wizard",
        "Automated Docker container orchestration",
        "Zero-configuration setup",
      ],
    },
  ];

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
          ECOSYSTEM TOPOLOGY
        </span>
        <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-white mt-2 tracking-wide">
          CODEBASE <span className="text-flame-pink">STRUCTURE</span>
        </h2>
        <p className="text-sm sm:text-base text-flame-pink/90 max-w-3xl mt-1">
          A decoupled, tripartite repository architecture designed for independent testing and rapid release cycles.
        </p>
      </motion.div>

      {/* 3 Repositories Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto py-3 z-10">
        {repos.map((repo, idx) => {
          const Icon = repo.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 + idx * 0.1 }}
              className="bg-flame-maroon-dark/80 border border-flame-pink/25 rounded-2xl p-5 flex flex-col justify-between shadow-xl hover:border-flame-pink/50 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-flame-pink text-flame-maroon">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono bg-flame-pink/10 border border-flame-pink/30 text-flame-pink px-2 py-0.5 rounded font-semibold uppercase">
                    {repo.type}
                  </span>
                </div>

                <h3 className="font-anton text-xl text-white tracking-wide">
                  {repo.name}
                </h3>
                <p className="text-xs font-mono text-flame-pink/70 mt-0.5 mb-2.5">
                  {repo.tech}
                </p>

                <p className="text-xs text-flame-pink/90 leading-relaxed font-normal mb-3">
                  {repo.desc}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-flame-pink/15">
                  {repo.highlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-flame-pink/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-flame-pink shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-2.5 border-t border-flame-pink/15 flex items-center justify-between text-[11px] font-mono text-flame-pink/60">
                <span>{repo.repo}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Visual Interconnection Diagram 3 */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="z-10 bg-flame-maroon-deep/90 border border-flame-pink/30 rounded-2xl p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
      >
        <div className="flex items-center gap-2">
          <span className="font-anton tracking-wide uppercase text-flame-pink text-sm">
            Integration Pipeline:
          </span>
          <span className="font-mono text-white/90">flamebase-js-sdk</span>
          <span className="text-flame-pink">⇄</span>
          <span className="font-mono text-flame-pink font-bold">flamebase Monorepo (Rust Core)</span>
          <span className="text-flame-pink">←</span>
          <span className="font-mono text-white/90">installer CLI</span>
        </div>
        <span className="font-mono text-[11px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded">
          One Ecosystem
        </span>
      </motion.div>
    </div>
  );
}
