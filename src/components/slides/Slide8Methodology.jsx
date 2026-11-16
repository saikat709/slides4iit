import React from 'react';
import { motion } from 'framer-motion';
import RealFlameBackground from '../RealFlameBackground';
import { CheckCircle2, Clock, ArrowRight, ShieldCheck, Layers, GitMerge } from 'lucide-react';

export default function Slide8Methodology() {
  const phases = [
    {
      num: "Phase 1",
      name: "Authentication",
      status: "COMPLETED",
      details: "Email/Password & Google OAuth endpoints scaffolded and tested against flamebase-js-sdk.",
      current: true,
    },
    {
      num: "Phase 2",
      name: "Database (redb)",
      status: "IN PROGRESS",
      details: "Embedding redb key-value store with JSON document parser and basic CRUD routes.",
      current: false,
    },
    {
      num: "Phase 3",
      name: "Storage Engine",
      status: "PLANNED",
      details: "Chunked binary streaming, file uploads, asset metadata, and bucket permissions.",
      current: false,
    },
    {
      num: "Phase 4",
      name: "Functions Engine",
      status: "PLANNED",
      details: "Node.js worker runtime process isolation for executing serverless JS triggers.",
      current: false,
    },
    {
      num: "Phase 5",
      name: "Angular Console",
      status: "PLANNED",
      details: "Unified web UI for administrative metrics, schema exploration, and user management.",
      current: false,
    },
    {
      num: "Phase 6",
      name: "Installer & E2E",
      status: "PLANNED",
      details: "Single-command deployment verification, systemd/Docker daemon, and production hardening.",
      current: false,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 bg-gradient-to-b from-[#56030F] via-flame-maroon to-[#260005] text-white relative overflow-hidden">
      {/* Light gradient lighting and ambient flame */}
      <div className="absolute inset-0 bg-radial-gradient from-flame-pink/5 via-transparent to-black/35 pointer-events-none" />
      <RealFlameBackground colorPreset="ambient" flameHeight="bottom" intensity={0.65} showEmbers={true} />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-flame-pink/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10"
      >
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-flame-pink/80 bg-flame-pink/10 px-3 py-1 rounded">
          ENGINEERING DISCIPLINE
        </span>
        <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-white mt-2 tracking-wide">
          DEVELOPMENT <span className="text-flame-pink">METHODOLOGY</span>
        </h2>
        <p className="text-sm sm:text-base text-flame-pink/90 max-w-3xl mt-1">
          A phased, sequential microservice build cycle coupled with continuous SDK-driven compatibility testing.
        </p>
      </motion.div>

      {/* Core Methodology Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto py-2 z-10">
        {/* Pillar 1 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-flame-maroon-dark/80 border border-flame-pink/25 rounded-2xl p-5 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 rounded-xl bg-flame-pink text-flame-maroon">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-anton text-xl text-white tracking-wide">
                Sequential Service Build
              </h3>
              <p className="text-xs font-mono text-flame-pink/70">Isolated Milestone Execution</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-flame-pink/90 leading-relaxed font-normal">
            Services are developed in strict sequence—starting with <strong>Authentication</strong>, progressing through <strong>Database</strong>, <strong>Storage</strong>, and <strong>Functions</strong>—while developing the <strong>Angular Dashboard</strong> concurrently to visualize each feature as it lands.
          </p>
        </motion.div>

        {/* Pillar 2 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-flame-maroon-dark/80 border border-flame-pink/25 rounded-2xl p-5 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 rounded-xl bg-flame-pink text-flame-maroon">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-anton text-xl text-white tracking-wide">
                SDK-Driven Verification
              </h3>
              <p className="text-xs font-mono text-flame-pink/70">Drop-In Contract Guarantee</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-flame-pink/90 leading-relaxed font-normal">
            Every backend API route is immediately tested directly against the official <strong>Firebase JavaScript SDK</strong>. No service is marked ready until client operations (auth tokens, reads, writes) succeed against Flamebase without client error.
          </p>
        </motion.div>
      </div>

      {/* 6-Phase Roadmap Visual Track */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="z-10 bg-flame-maroon-deep/90 border border-flame-pink/30 rounded-2xl p-4 shadow-xl"
      >
        <div className="flex items-center justify-between mb-3 text-xs">
          <span className="font-anton tracking-wider uppercase text-flame-pink">
            6-Phase Engineering Roadmap
          </span>
          <span className="font-mono text-[11px] text-emerald-300 bg-emerald-950/80 border border-emerald-800/40 px-2.5 py-0.5 rounded">
            Phase 1 Scaffold Complete
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {phases.map((p, i) => (
            <div
              key={i}
              className={`rounded-xl p-2.5 flex flex-col justify-between border text-xs transition-all ${
                p.current
                  ? 'bg-flame-pink text-flame-maroon border-white shadow-lg'
                  : 'bg-flame-maroon-dark/70 text-flame-pink/80 border-flame-pink/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] font-bold mb-1">
                  <span>{p.num}</span>
                  <span className={p.current ? 'text-emerald-800' : 'text-flame-pink/50'}>
                    {p.status}
                  </span>
                </div>
                <h5 className={`font-anton text-sm ${p.current ? 'text-flame-maroon' : 'text-white'}`}>
                  {p.name}
                </h5>
              </div>
              <p className={`text-[10px] mt-1.5 leading-tight ${p.current ? 'text-flame-maroon/90 font-medium' : 'text-flame-pink/60'}`}>
                {p.details}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
