import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Laptop, Cloud, KeyRound, Database, HardDrive, Terminal, ArrowRight, ArrowDown, Repeat } from 'lucide-react';

export default function Slide2Firebase() {
  const services = [
    {
      name: "Authentication",
      role: "User identity verification & session management (Email/Pass, OAuth, Tokens).",
      icon: KeyRound,
      color: "bg-amber-500/10 border-amber-500/30 text-amber-200",
    },
    {
      name: "Database (Firestore)",
      role: "Document & JSON NoSQL cloud datastore with realtime synchronization.",
      icon: Database,
      color: "bg-blue-500/10 border-blue-500/30 text-blue-200",
    },
    {
      name: "Cloud Storage",
      role: "Scalable object storage for user media, documents, and static blobs.",
      icon: HardDrive,
      color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-200",
    },
    {
      name: "Cloud Functions",
      role: "Serverless backend compute running custom event-driven JavaScript/TypeScript.",
      icon: Terminal,
      color: "bg-purple-500/10 border-purple-500/30 text-purple-200",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 bg-flame-maroon text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-flame-pink/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10"
      >
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-flame-pink/80 bg-flame-pink/10 px-3 py-1 rounded">
          ARCHITECTURAL CONTEXT
        </span>
        <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-white mt-2 tracking-wide">
          WHAT IS <span className="text-flame-pink">FIREBASE?</span>
        </h2>
        <p className="text-sm sm:text-base text-flame-pink/90 max-w-3xl mt-1">
          A fully-managed Backend-as-a-Service (BaaS) connecting client applications directly to proprietary Google Cloud backend microservices.
        </p>
      </motion.div>

      {/* Visual Diagram 1: How Firebase Works */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="my-auto py-4 z-10"
      >
        <div className="bg-flame-maroon-dark/80 border border-flame-pink/25 rounded-2xl p-5 sm:p-6 shadow-xl backdrop-blur-sm">
          <div className="text-xs font-bold text-flame-pink/70 uppercase tracking-widest mb-4 flex items-center justify-between">
            <span>Standard Firebase Pipeline</span>
            <span className="font-mono text-[11px] bg-red-950/80 text-rose-300 border border-rose-800/40 px-2 py-0.5 rounded">
              Proprietary Google Cloud
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Step 1: Client Application */}
            <div className="lg:col-span-3 bg-flame-maroon/90 border border-flame-pink/30 rounded-xl p-4 flex flex-col items-center text-center">
              <div className="flex gap-2 text-flame-pink mb-2">
                <Laptop className="w-6 h-6" />
                <Smartphone className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white text-base">Client Application</h4>
              <p className="text-xs text-flame-pink/70 mt-1 font-mono">Web, iOS, Android Apps</p>
            </div>

            {/* Connector Arrow */}
            <div className="lg:col-span-1 flex justify-center text-flame-pink/60">
              <ArrowRight className="w-6 h-6 hidden lg:block animate-pulse" />
              <ArrowDown className="w-6 h-6 lg:hidden animate-pulse" />
            </div>

            {/* Step 2: Firebase SDK */}
            <div className="lg:col-span-3 bg-flame-maroon/90 border border-flame-pink/30 rounded-xl p-4 flex flex-col items-center text-center">
              <div className="w-9 h-9 rounded-full bg-flame-pink/15 flex items-center justify-center text-flame-pink mb-2">
                <Cloud className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Firebase SDK</h4>
              <p className="text-xs text-flame-pink/70 mt-1 font-mono">firebase-js-sdk Client Library</p>
            </div>

            {/* Connector Arrow */}
            <div className="lg:col-span-1 flex justify-center text-flame-pink/60">
              <ArrowRight className="w-6 h-6 hidden lg:block animate-pulse" />
              <ArrowDown className="w-6 h-6 lg:hidden animate-pulse" />
            </div>

            {/* Step 3: Google Hosted Services */}
            <div className="lg:col-span-4 bg-flame-maroon-deep/90 border border-flame-pink/40 rounded-xl p-3.5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-flame-pink/90 mb-2">
                Google-Hosted Microservices
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {['Authentication', 'Cloud Firestore', 'Cloud Storage', 'Cloud Functions'].map((svc, i) => (
                  <div key={i} className="bg-flame-maroon/80 border border-flame-pink/20 rounded p-2 text-white font-medium">
                    {svc}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Four Core Services Explanation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-4">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                className="bg-flame-maroon-dark/60 border border-flame-pink/20 rounded-xl p-3.5 hover:border-flame-pink/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-1.5 rounded-lg border ${svc.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-white text-sm">{svc.name}</h4>
                </div>
                <p className="text-xs text-flame-pink/80 leading-relaxed">
                  {svc.role}
                </p>
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
        className="z-10 bg-flame-pink text-flame-maroon rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-flame-maroon text-flame-pink flex items-center justify-center shrink-0">
            <Repeat className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
          </div>
          <div>
            <span className="font-anton tracking-wide text-base uppercase">The Flamebase Shift</span>
            <p className="text-xs font-medium text-flame-maroon/90 leading-tight">
              Flamebase replicates this exact architecture so apps switch to self-hosted servers simply by swapping service endpoints.
            </p>
          </div>
        </div>
        <span className="font-mono text-xs font-bold uppercase bg-flame-maroon/15 px-3 py-1.5 rounded text-flame-maroon shrink-0">
          Zero Code Refactor
        </span>
      </motion.div>
    </div>
  );
}
