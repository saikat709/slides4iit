import React from 'react';
import { motion } from 'framer-motion';
import { Lock, DollarSign, Link2Off, AlertTriangle, ShieldAlert, Cpu } from 'lucide-react';

export default function Slide3Problems() {
  const problems = [
    {
      number: "01",
      title: "No Data or Infra Control",
      icon: Lock,
      subtitle: "Black-Box Cloud Infrastructure",
      description: "Proprietary backend services cannot be self-hosted, audited, or modified. Developers have zero visibility into backend runtime internals, and organizations cannot enforce strict local data residency or compliance boundaries.",
      impact: "Zero Self-Hosting • Inaccessible Internals",
    },
    {
      number: "02",
      title: "Per-Query Pricing",
      icon: DollarSign,
      subtitle: "Unpredictable Scaling Invoices",
      description: "Cloud billing models charge continuously for every database read, document write, delete operation, and API invocation. An unexpected traffic surge, loop bug, or viral event can trigger catastrophic billing shocks.",
      impact: "Pay-Per-Read/Write • Incurring Bill Shocks",
    },
    {
      number: "03",
      title: "Vendor Lock-In",
      icon: Link2Off,
      subtitle: "Tied to Google Cloud Architecture",
      description: "Applications deeply integrate closed Firebase SDKs and proprietary security rules. Migrating away to alternative hosting providers requires painful, high-cost codebase rewrites and database migrations.",
      impact: "High Migration Barrier • Proprietary APIs",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 bg-flame-maroon text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -bottom-10 right-10 w-96 h-96 bg-flame-maroon-dark/60 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10"
      >
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-flame-pink/80 bg-flame-pink/10 px-3 py-1 rounded">
          MOTIVATION & CHALLENGES
        </span>
        <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-white mt-2 tracking-wide">
          WHY RETHINK <span className="text-flame-pink">FIREBASE?</span>
        </h2>
        <p className="text-sm sm:text-base text-flame-pink/90 max-w-3xl mt-1">
          While managed cloud platforms provide convenience, they impose fundamental infrastructure risks on modern engineering teams.
        </p>
      </motion.div>

      {/* 3 Core Problem Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto py-4 z-10">
        {problems.map((prob, idx) => {
          const Icon = prob.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + idx * 0.12 }}
              className="bg-flame-maroon-dark/80 border border-flame-pink/25 rounded-2xl p-6 flex flex-col justify-between shadow-xl relative group hover:border-flame-pink/60 transition-all hover:translate-y-[-2px]"
            >
              {/* Card top accent */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-anton text-3xl text-flame-pink/40 group-hover:text-flame-pink transition-colors">
                    {prob.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-flame-pink/10 border border-flame-pink/30 flex items-center justify-center text-flame-pink">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-anton text-xl sm:text-2xl text-white tracking-wide">
                  {prob.title}
                </h3>
                <p className="text-xs font-mono text-flame-pink/70 uppercase tracking-wider mt-0.5 mb-3">
                  {prob.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-flame-pink/90 leading-relaxed font-normal">
                  {prob.description}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="mt-5 pt-3 border-t border-flame-pink/15">
                <span className="text-[11px] font-mono text-rose-300 bg-rose-950/60 border border-rose-800/40 px-2.5 py-1 rounded-md block text-center font-medium">
                  {prob.impact}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Strict Framing Rule Callout */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="z-10 bg-flame-maroon-dark/95 border border-flame-pink/30 rounded-xl p-3.5 flex items-center gap-3.5 text-xs text-flame-pink/90"
      >
        <div className="p-2 rounded-lg bg-flame-pink/15 text-flame-pink shrink-0">
          <Cpu className="w-5 h-5" />
        </div>
        <div>
          <span className="font-bold text-white uppercase tracking-wider font-mono mr-2">Design Goal Framing:</span>
          Flamebase does not dispute the raw speed of Google's cloud; rather, <strong>performance and low RAM overhead</strong> are explicit architectural <em>design goals</em> achieved by writing Flamebase natively in <strong>Rust</strong>.
        </div>
      </motion.div>
    </div>
  );
}
