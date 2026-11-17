import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Flame,
  ArrowRight,
  Layers,
  User,
  Award,
  Github
} from 'lucide-react';
import { ownerInfo, getAllPresentations } from '../presentations/registry.js';

export default function HomePage() {
  const navigate = useNavigate();
  const presentations = getAllPresentations();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#240004] via-[#4A010A] to-[#1a0003] text-white flex flex-col selection:bg-flame-pink selection:text-flame-maroon">
      {/* Background Decorative Ambient Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-flame-maroon/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-flame-orange/15 rounded-full blur-[140px]" />
      </div>

      {/* Top Navbar */}
      <header className="relative z-10 border-b border-flame-pink/15 backdrop-blur-md bg-[#240004]/80 sticky top-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Flame className="w-5 h-5 text-flame-pink" />
            <span className="font-anton text-xl tracking-wider text-white">
              PRESENTATIONS
            </span>
          </div>

          {ownerInfo.github && (
            <a
              href={ownerInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-flame-pink/20 border border-white/10 hover:border-flame-pink/30 text-xs font-mono text-white/90 hover:text-white transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </header>

      {/* Direct Presentations Grid (No Hero Space) */}
      <main className="relative z-10 flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {presentations.map((pres) => (
            <motion.div
              key={pres.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              onClick={() => navigate(pres.route || `/${pres.slug}`)}
              className="group cursor-pointer bg-gradient-to-br from-[#70020F]/90 via-[#4A010A]/95 to-[#240004] border border-flame-pink/25 hover:border-flame-pink rounded-2xl p-6 sm:p-7 shadow-xl hover:shadow-[0_12px_35px_rgba(254,222,225,0.15)] transition-all flex flex-col justify-between relative overflow-hidden backdrop-blur-md"
            >
              {/* Subtle top-right glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-flame-pink/5 rounded-full blur-2xl group-hover:bg-flame-pink/15 transition-all pointer-events-none" />

              <div>
                {/* Direct Typing Slug Badge */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="font-mono text-xs text-flame-pink bg-black/40 border border-flame-pink/25 px-2.5 py-1 rounded-lg">
                    /{pres.slug}
                  </span>
                  <span className="text-xs font-mono text-flame-pink/70 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-flame-pink" />
                    <span>{pres.slideCount} Slides</span>
                  </span>
                </div>

                {/* Presentation Title */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-flame-pink transition-colors tracking-tight">
                  {pres.title}
                </h2>

                {/* Subtitle */}
                <h3 className="text-base font-bold text-flame-pink/90 mt-1">
                  {pres.subtitle}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-white/80 mt-3 leading-relaxed">
                  {pres.description}
                </p>

                {/* Presenters & Supervisor */}
                <div className="mt-5 pt-4 border-t border-flame-pink/15 space-y-1.5 text-xs font-mono">
                  <div className="flex items-center gap-2 text-flame-pink">
                    <User className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-white/60">Presenters:</span>
                    <span className="font-semibold text-white">
                      {pres.presenters.map((p) => p.name).join(' & ')}
                    </span>
                  </div>

                  {pres.supervisor && (
                    <div className="flex items-center gap-2 text-flame-pink">
                      <Award className="w-3.5 h-3.5 shrink-0" />
                      <span className="text-white/60">Supervisor:</span>
                      <span className="text-white/85">
                        {typeof pres.supervisor === 'string' ? pres.supervisor : pres.supervisor.name}
                      </span>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {pres.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded bg-black/30 border border-flame-pink/20 text-[11px] font-mono text-flame-pink/85"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-flame-pink/20 flex items-center justify-end">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(pres.route || `/${pres.slug}`);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-flame-pink hover:bg-white text-flame-maroon font-bold text-xs tracking-wider uppercase transition-all shadow-md group-hover:scale-105 active:scale-95"
                >
                  <span>Launch Deck</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer: Owner Attribution */}
      <footer className="relative z-10 border-t border-flame-pink/15 py-8 mt-auto bg-[#1a0003]/80 backdrop-blur-md text-xs font-mono text-flame-pink/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="font-semibold text-white text-sm">
            {ownerInfo.name}
          </div>
          <div className="text-flame-pink/70">
            {ownerInfo.institution} • {ownerInfo.fullNameInstitution}
          </div>
        </div>
      </footer>
    </div>
  );
}
