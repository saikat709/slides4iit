import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Flame,
  Presentation,
  ExternalLink,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Layers,
  Cpu,
  Database,
  Github,
  Calendar,
  User,
  Search,
  BookOpen,
  FolderGit2,
  CheckCircle2,
  Award
} from 'lucide-react';
import { ownerInfo, getAllPresentations } from '../presentations/registry.js';

export default function HomePage() {
  const navigate = useNavigate();
  const presentations = getAllPresentations();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPresentations = presentations.filter((pres) => {
    const q = searchQuery.toLowerCase();
    return (
      pres.title.toLowerCase().includes(q) ||
      pres.subtitle.toLowerCase().includes(q) ||
      pres.description.toLowerCase().includes(q) ||
      pres.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#240004] via-[#4A010A] to-[#1a0003] text-white flex flex-col selection:bg-flame-pink selection:text-flame-maroon">
      {/* Background Decorative Ambient Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-flame-maroon/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-flame-orange/15 rounded-full blur-[140px]" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[36rem] h-64 bg-flame-maroon-light/20 rounded-full blur-[100px]" />
      </div>

      {/* Top Navbar */}
      <header className="relative z-10 border-b border-flame-pink/15 backdrop-blur-md bg-[#240004]/75 sticky top-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-flame-maroon-light to-flame-maroon border border-flame-pink/30 flex items-center justify-center shadow-lg shadow-flame-maroon/50">
              <Flame className="w-5 h-5 text-flame-pink animate-pulse" />
            </div>
            <div>
              <span className="font-anton text-xl tracking-wider text-white">
                DU<span className="text-flame-pink">.IIT</span>
              </span>
              <span className="text-[11px] font-mono text-flame-pink/70 block -mt-1 tracking-wider uppercase">
                Presentations Portal
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-flame-pink/10 border border-flame-pink/20 text-flame-pink">
              <GraduationCap className="w-3.5 h-3.5 text-flame-pink" />
              <span>{ownerInfo.institution}</span>
            </span>
            {ownerInfo.github && (
              <a
                href={ownerInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-flame-pink/20 border border-white/10 hover:border-flame-pink/30 text-white/90 hover:text-white transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span className="hidden md:inline">GitHub</span>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section: Presenter Attribution */}
      <section className="relative z-10 pt-12 pb-10 sm:pt-16 sm:pb-14 border-b border-flame-pink/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div className="space-y-3">
              {/* Semester & Role Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-flame-pink/15 border border-flame-pink/30 text-flame-pink text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Semester 5 • SPL-2 Project Defenses</span>
              </div>

              {/* Presenter Name (Owner) */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                {ownerInfo.name}
              </h1>

              {/* Institution & Department */}
              <p className="text-lg sm:text-xl text-flame-pink font-medium flex flex-wrap items-center gap-2">
                <span>{ownerInfo.fullNameInstitution}</span>
                <span className="text-flame-pink/50 hidden sm:inline">•</span>
                <span className="text-white/80 font-mono text-sm sm:text-base">({ownerInfo.institution})</span>
              </p>

              {/* Short Bio */}
              <p className="text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed">
                Welcome to my interactive presentation platform. Here you will find slide decks, project defenses,
                and technical architecture walk-throughs for my academic courses and software engineering projects.
              </p>
            </div>

            {/* Quick Metrics Badge */}
            <div className="flex md:flex-col gap-3 shrink-0">
              <div className="bg-flame-maroon-deep/80 border border-flame-pink/25 rounded-2xl p-4 backdrop-blur-md shadow-xl min-w-[160px]">
                <div className="text-xs font-mono text-flame-pink/70 uppercase">Presentations</div>
                <div className="text-3xl font-anton text-white mt-0.5">{presentations.length} Deck</div>
                <div className="text-[11px] text-flame-pink/60 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Live & Interactive
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content: Presentation Decks */}
      <main className="relative z-10 flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-10 w-full">
        {/* Search & Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
              <Presentation className="w-6 h-6 text-flame-pink" />
              <span>Available Presentations</span>
            </h2>
            <p className="text-xs sm:text-sm text-flame-pink/70 mt-1">
              Select any card to launch its full-screen interactive slide deck.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-flame-pink/50 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search presentations or tags..."
              className="w-full pl-10 pr-4 py-2 bg-flame-maroon-deep/90 border border-flame-pink/25 rounded-xl text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-flame-pink focus:ring-1 focus:ring-flame-pink transition-all"
            />
          </div>
        </div>

        {/* Presentation Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPresentations.map((pres) => (
            <motion.div
              key={pres.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate(pres.route || `/${pres.slug}`)}
              className="group cursor-pointer bg-gradient-to-br from-[#70020F]/90 via-[#4A010A]/95 to-[#240004] border border-flame-pink/30 hover:border-flame-pink rounded-3xl p-6 sm:p-7 shadow-2xl hover:shadow-[0_15px_40px_rgba(254,222,225,0.18)] transition-all flex flex-col justify-between relative overflow-hidden backdrop-blur-md"
            >
              {/* Accent Glow in Card Corner */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-flame-pink/5 rounded-full blur-2xl group-hover:bg-flame-pink/15 transition-all pointer-events-none" />

              <div>
                {/* Header Row: Badge & Direct URL Slug */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-flame-pink/20 border border-flame-pink/35 text-flame-pink text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    <span>{pres.badge || 'Presentation Deck'}</span>
                  </span>

                  {/* Direct typing slug badge */}
                  <span className="font-mono text-xs text-flame-pink/80 bg-black/40 border border-flame-pink/20 px-2.5 py-1 rounded-lg">
                    /{pres.slug}
                  </span>
                </div>

                {/* Main Presentation Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-flame-pink transition-colors tracking-tight">
                  {pres.title}
                </h3>

                {/* Subtitle */}
                <h4 className="text-base sm:text-lg font-bold text-flame-pink/90 mt-1">
                  {pres.subtitle}
                </h4>

                {/* Description */}
                <p className="text-xs sm:text-sm text-white/80 mt-3 leading-relaxed">
                  {pres.description}
                </p>

                {/* Presenters & Supervisor */}
                <div className="mt-5 pt-4 border-t border-flame-pink/15 space-y-2 text-xs font-mono">
                  <div className="flex items-center gap-2 text-flame-pink">
                    <User className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-white/70">Presenters:</span>
                    <span className="font-semibold text-white">
                      {pres.presenters.map((p) => p.name).join(' & ')}
                    </span>
                  </div>

                  {pres.supervisor && (
                    <div className="flex items-center gap-2 text-flame-pink">
                      <Award className="w-3.5 h-3.5 shrink-0" />
                      <span className="text-white/70">Supervisor:</span>
                      <span className="text-white/90">
                        {typeof pres.supervisor === 'string' ? pres.supervisor : pres.supervisor.name}
                      </span>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {pres.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-black/30 border border-flame-pink/20 text-[11px] font-mono text-flame-pink/90"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Slide Count & CTA Button */}
              <div className="mt-6 pt-5 border-t border-flame-pink/20 flex items-center justify-between">
                <span className="text-xs font-mono text-flame-pink/70 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-flame-pink" />
                  <span>{pres.slideCount} Slides • Full Deck</span>
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(pres.route || `/${pres.slug}`);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-flame-pink hover:bg-white text-flame-maroon font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-black/40 group-hover:scale-105 active:scale-95"
                >
                  <span>Launch Deck</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}

          {/* Extensibility Placeholder Card: Coming Soon */}
          <div className="border-2 border-dashed border-flame-pink/20 hover:border-flame-pink/40 rounded-3xl p-6 sm:p-7 flex flex-col items-center justify-center text-center bg-flame-maroon-deep/30 backdrop-blur-sm min-h-[300px] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-flame-pink/10 border border-flame-pink/20 flex items-center justify-center text-flame-pink mb-4">
              <Presentation className="w-6 h-6 opacity-70" />
            </div>
            <h4 className="text-lg font-bold text-white">Future Project Defense</h4>
            <p className="text-xs sm:text-sm text-flame-pink/60 max-w-sm mt-2">
              Additional semester presentations and final project defenses will be listed here.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-flame-pink/75 bg-black/30 px-3 py-1 rounded-full border border-flame-pink/15">
              <span>Pluggable Architecture Ready</span>
            </span>
          </div>
        </div>

        {filteredPresentations.length === 0 && (
          <div className="text-center py-12 text-flame-pink/60 font-mono text-sm">
            No presentations found matching "{searchQuery}".
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-flame-pink/15 py-8 mt-12 bg-[#1a0003]/80 backdrop-blur-md text-xs font-mono text-flame-pink/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-flame-pink" />
            <span>
              {ownerInfo.name} • {ownerInfo.institution}
            </span>
          </div>
          <div className="text-center sm:text-right text-white/50">
            {ownerInfo.fullNameInstitution} • {ownerInfo.degree}
          </div>
        </div>
      </footer>
    </div>
  );
}
