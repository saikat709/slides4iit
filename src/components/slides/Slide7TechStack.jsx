import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Code2, LayoutDashboard, Terminal, Container, FolderGit2 } from 'lucide-react';

export default function Slide7TechStack() {
  const stack = [
    {
      layer: "Backend Services",
      tech: "Rust + Axum",
      role: "High throughput, memory safety without GC pause overhead, low footprint.",
      icon: Cpu,
      badge: "Core Engine",
    },
    {
      layer: "Database Engine",
      tech: "redb (Pure Rust)",
      role: "Embedded ACID key-value store natively handling JSON; zero external DB server needed.",
      icon: Database,
      badge: "Zero DB Daemon",
    },
    {
      layer: "Client SDK",
      tech: "flamebase-js-sdk",
      role: "Forked TypeScript/JS SDK providing drop-in compatibility with existing Firebase code.",
      icon: Code2,
      badge: "Drop-in API",
    },
    {
      layer: "Management Dashboard",
      tech: "TypeScript + Angular",
      role: "Administrative web console to manage users, permissions, and inspect live services.",
      icon: LayoutDashboard,
      badge: "Web Console",
    },
    {
      layer: "Functions Runtime",
      tech: "Node.js Worker",
      role: "Executes custom user serverless event functions in isolated process sandboxes.",
      icon: Terminal,
      badge: "Serverless",
    },
    {
      layer: "Packaging & Deploy",
      tech: "Docker + Compose + Shell",
      role: "One-command deployment orchestrating containers, ports, and reverse proxies.",
      icon: Container,
      badge: "Single Command",
    },
    {
      layer: "Build & Versioning",
      tech: "Cargo Monorepo + Git",
      role: "Unified Cargo workspace managing the microservices with strict Rust dependency bounds.",
      icon: FolderGit2,
      badge: "Monorepo",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 bg-flame-pink text-flame-maroon relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10"
      >
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-white bg-flame-maroon px-3 py-1 rounded">
          SYSTEM SPECIFICATIONS
        </span>
        <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-flame-maroon mt-2 tracking-wide">
          TECHNOLOGIES & <span className="text-flame-maroon-light">ARCHITECTURAL STACK</span>
        </h2>
        <p className="text-sm sm:text-base text-flame-maroon/80 max-w-3xl mt-1">
          A carefully chosen, high-performance technology matrix optimized for developer ergonomics and native speed.
        </p>
      </motion.div>

      {/* Architectural Stack Table / Cards */}
      <div className="my-auto py-2 z-10 overflow-hidden">
        <div className="bg-white/95 border border-flame-maroon/20 rounded-2xl shadow-xl overflow-hidden divide-y divide-flame-maroon/10">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-flame-maroon text-white text-xs font-anton tracking-wider uppercase px-4 py-3">
            <div className="col-span-3 sm:col-span-3">Architectural Layer</div>
            <div className="col-span-3 sm:col-span-3">Technology / Tool</div>
            <div className="col-span-6 sm:col-span-6">Role & Technical Justification</div>
          </div>

          {/* Table Rows */}
          {stack.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.08 + idx * 0.05 }}
                className="grid grid-cols-12 px-4 py-2.5 items-center hover:bg-flame-pink/40 transition-colors text-xs sm:text-sm"
              >
                {/* Layer */}
                <div className="col-span-3 font-bold text-flame-maroon flex items-center gap-2">
                  <div className="p-1 rounded bg-flame-maroon/10 text-flame-maroon">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span>{item.layer}</span>
                </div>

                {/* Tech */}
                <div className="col-span-3 font-mono font-bold text-flame-maroon-light flex items-center gap-2">
                  <span>{item.tech}</span>
                  <span className="hidden md:inline text-[10px] bg-flame-maroon/10 text-flame-maroon px-1.5 py-0.2 rounded font-sans font-semibold">
                    {item.badge}
                  </span>
                </div>

                {/* Justification */}
                <div className="col-span-6 text-flame-maroon/90 text-xs leading-relaxed">
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
        className="z-10 bg-flame-maroon text-white rounded-xl p-3 flex flex-wrap items-center justify-between gap-2 shadow-lg text-xs"
      >
        <div className="flex items-center gap-2 font-mono">
          <span className="text-flame-pink font-bold">PIPELINE:</span>
          <span>Client App</span>
          <span className="text-flame-pink">→</span>
          <span>flamebase-js-sdk</span>
          <span className="text-flame-pink">→</span>
          <span className="text-amber-300 font-bold">Axum Services</span>
          <span className="text-flame-pink">→</span>
          <span className="text-emerald-300 font-bold">redb</span>
        </div>
        <span className="font-mono text-[11px] bg-flame-pink text-flame-maroon font-bold px-2 py-0.5 rounded">
          Pure Rust Backend
        </span>
      </motion.div>
    </div>
  );
}
