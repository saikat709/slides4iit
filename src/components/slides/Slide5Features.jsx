import React from 'react';
import { motion } from 'framer-motion';
import { KeyRound, Database, Terminal, HardDrive, LayoutDashboard, Radio } from 'lucide-react';

export default function Slide5Features() {
  const services = [
    {
      title: "Flamebase Authentication",
      port: "9099",
      icon: KeyRound,
      tag: "Identity & Tokens",
      details: "Full authentication engine supporting Mobile/Email + Password and Google OAuth. The scaffold also includes architectural hooks for anonymous logins and custom token verification.",
      tech: "Rust / Axum • Port 9099",
    },
    {
      title: "Flamebase Database",
      port: "8080",
      icon: Database,
      tag: "Document Store",
      details: "High-speed document & JSON data store powered by redb (an embedded, pure-Rust ACID key-value database), replacing Firestore with zero external database server dependencies.",
      tech: "redb Embedded Engine • Port 8080",
    },
    {
      title: "Flamebase Functions",
      port: "5001",
      icon: Terminal,
      tag: "Serverless Compute",
      details: "Executes custom server-side functions in dedicated Node.js worker runtimes with sandbox boundaries, enabling serverless logic without cloud vendor lock-in.",
      tech: "Node.js Worker Runtime • Port 5001",
    },
    {
      title: "Flamebase Storage",
      port: "9199",
      icon: HardDrive,
      tag: "Object Storage",
      details: "Self-hosted file, media, and asset storage system with direct streaming capabilities and granular permission checking matching Firebase storage buckets.",
      tech: "Rust File Engine • Port 9199",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 bg-flame-pink text-flame-maroon relative overflow-hidden">
      {/* Background decorative shape */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/40 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10"
      >
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-white bg-flame-maroon px-3 py-1 rounded">
          CORE SERVICES ARCHITECTURE
        </span>
        <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-flame-maroon mt-2 tracking-wide">
          KEY FEATURES & <span className="text-flame-maroon-light">DEDICATED PORTS</span>
        </h2>
        <p className="text-sm sm:text-base text-flame-maroon/80 max-w-3xl mt-1">
          Four decoupled, high-speed backend services mirroring Firebase endpoints, plus a unified administrative console.
        </p>
      </motion.div>

      {/* 4 Core Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto py-3 z-10">
        {services.map((svc, idx) => {
          const Icon = svc.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 + idx * 0.08 }}
              className="bg-white/90 border border-flame-maroon/15 rounded-2xl p-5 shadow-lg flex flex-col justify-between hover:border-flame-maroon/40 transition-all hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-flame-maroon text-flame-pink">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-anton text-xl text-flame-maroon tracking-wide">
                        {svc.title}
                      </h3>
                      <span className="text-[11px] font-mono font-semibold text-flame-maroon/70 uppercase">
                        {svc.tag}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-flame-maroon text-white font-mono text-xs font-bold shadow-sm">
                    <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                    <span>:{svc.port}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-flame-maroon/90 leading-relaxed mt-2 font-normal">
                  {svc.details}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-flame-maroon/10 flex items-center justify-between text-[11px] font-mono text-flame-maroon/70">
                <span>{svc.tech}</span>
                <span className="font-bold text-flame-maroon">Active Port {svc.port}</span>
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
        className="z-10 bg-flame-maroon text-white rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-flame-pink text-flame-maroon flex items-center justify-center shrink-0">
            <LayoutDashboard className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-anton text-lg tracking-wide uppercase text-flame-pink">
                Management Console / Dashboard
              </span>
              <span className="font-mono text-xs bg-white text-flame-maroon font-extrabold px-2 py-0.5 rounded">
                PORT 4000
              </span>
            </div>
            <p className="text-xs text-flame-pink/90 mt-0.5">
              Comprehensive web administration dashboard built with Angular for configuring authentication, inspecting redb documents, and monitoring microservices.
            </p>
          </div>
        </div>
        <div className="shrink-0 flex items-center gap-2">
          <span className="text-xs font-mono bg-flame-maroon-dark border border-flame-pink/30 px-3 py-1 rounded text-flame-pink">
            Angular Web UI
          </span>
        </div>
      </motion.div>
    </div>
  );
}
