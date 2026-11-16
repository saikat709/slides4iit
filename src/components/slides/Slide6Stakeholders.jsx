import React from 'react';
import { motion } from 'framer-motion';
import RealFlameBackground from '../RealFlameBackground';
import { Code2, Server, Terminal, UserCog, Users, Rocket, GraduationCap, Building2 } from 'lucide-react';

export default function Slide6Stakeholders() {
  const stakeholders = [
    {
      role: "Frontend & Mobile Devs",
      desc: "Primary consumers of the client SDK across web, Android, and iOS applications with zero learning curve.",
      icon: Code2,
    },
    {
      role: "Backend Developers",
      desc: "Write serverless event-driven Functions, configure redb data schemas, and integrate microservices.",
      icon: Server,
    },
    {
      role: "DevOps Engineers",
      desc: "Install, package, and orchestrate Flamebase instances reliably using the automated one-command installer.",
      icon: Terminal,
    },
    {
      role: "Project Administrators",
      desc: "Manage user permissions, monitor database metrics, and control security rules via the Angular Console.",
      icon: UserCog,
    },
    {
      role: "End Users",
      desc: "Experience high-speed, responsive applications with absolute data privacy and guaranteed uptime.",
      icon: Users,
    },
  ];

  const targetUsers = [
    {
      title: "Startups & Small Teams",
      desc: "Looking to reduce and stabilize backend infrastructure costs without unpredictable per-query cloud bills.",
      icon: Rocket,
    },
    {
      title: "Students & Indie Developers",
      desc: "Needing an accessible, self-hosted backend platform for hackathons and projects without billing surprises.",
      icon: GraduationCap,
    },
    {
      title: "Organizations & Institutions",
      desc: "Requiring strict data sovereignty, compliance boundaries, and 100% full ownership on private hardware.",
      icon: Building2,
    },
  ];

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
          ECOSYSTEM & VALUE DISTRIBUTION
        </span>
        <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-flame-maroon mt-2 tracking-wide">
          STAKEHOLDERS & <span className="text-flame-maroon-light">TARGET AUDIENCE</span>
        </h2>
        <p className="text-sm sm:text-base text-flame-maroon/80 max-w-3xl mt-1">
          Designed specifically to empower every role across the product development lifecycle.
        </p>
      </motion.div>

      {/* Main Grid: 5 Stakeholder Groups */}
      <div className="my-auto py-3 z-10">
        <div className="text-xs font-anton tracking-wider uppercase text-flame-maroon/80 mb-3 flex items-center gap-2">
          <span>5 Approved Primary Stakeholder Groups</span>
          <div className="h-px flex-1 bg-flame-maroon/15" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {stakeholders.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.07 }}
                className="bg-white/90 border border-flame-maroon/15 rounded-xl p-4 flex flex-col justify-between shadow-md hover:border-flame-maroon/40 transition-all"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-flame-maroon text-flame-pink flex items-center justify-center mb-2.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-anton text-base text-flame-maroon leading-tight tracking-wide">
                    {s.role}
                  </h4>
                  <p className="text-xs text-flame-maroon/80 mt-1.5 leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-flame-maroon/10 text-[10px] font-mono text-flame-maroon/60 uppercase">
                  Stakeholder #{idx + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Section: 3 Target User Segments */}
      <div className="z-10">
        <div className="text-xs font-anton tracking-wider uppercase text-flame-maroon/80 mb-2.5 flex items-center gap-2">
          <span>Target User Segments</span>
          <div className="h-px flex-1 bg-flame-maroon/15" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {targetUsers.map((u, idx) => {
            const Icon = u.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 + idx * 0.08 }}
                className="bg-flame-maroon text-white rounded-xl p-4 flex items-start gap-3 shadow-lg"
              >
                <div className="p-2 rounded-lg bg-flame-pink text-flame-maroon shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-anton text-sm text-flame-pink tracking-wide uppercase">
                    {u.title}
                  </h4>
                  <p className="text-xs text-white/90 mt-1 leading-relaxed">
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
