import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { slides } from '../data/slidesData';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Grid,
  X,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Layers,
  Keyboard
} from 'lucide-react';

import Slide1Cover from './slides/Slide1Cover';
import Slide2Firebase from './slides/Slide2Firebase';
import Slide3Problems from './slides/Slide3Problems';
import Slide4Solution from './slides/Slide4Solution';
import Slide5Features from './slides/Slide5Features';
import Slide6Stakeholders from './slides/Slide6Stakeholders';
import Slide7TechStack from './slides/Slide7TechStack';
import Slide8Methodology from './slides/Slide8Methodology';
import Slide9Codebase from './slides/Slide9Codebase';
import Slide10Team from './slides/Slide10Team';

const slideComponents = [
  Slide1Cover,
  Slide2Firebase,
  Slide3Problems,
  Slide4Solution,
  Slide5Features,
  Slide6Stakeholders,
  Slide7TechStack,
  Slide8Methodology,
  Slide9Codebase,
  Slide10Team,
];

export default function PresentationLayout() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const containerRef = useRef(null);

  const totalSlides = slides.length;
  const currentSlide = slides[currentSlideIndex];
  const CurrentSlideComponent = slideComponents[currentSlideIndex];

  // Slide navigation
  const nextSlide = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      setDirection(1);
      setCurrentSlideIndex((prev) => prev + 1);
    }
  }, [currentSlideIndex, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setDirection(-1);
      setCurrentSlideIndex((prev) => prev - 1);
    }
  }, [currentSlideIndex]);

  const goToSlide = (index) => {
    setDirection(index > currentSlideIndex ? 1 : -1);
    setCurrentSlideIndex(index);
    setShowOverview(false);
  };

  // Toggle Fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if an input is focused
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(totalSlides - 1);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'o':
        case 'O':
        case 'g':
        case 'G':
          e.preventDefault();
          setShowOverview((prev) => !prev);
          break;
        case '?':
          e.preventDefault();
          setShowHelp((prev) => !prev);
          break;
        case 'Escape':
          if (showOverview) setShowOverview(false);
          if (showHelp) setShowHelp(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, totalSlides, showOverview, showHelp]);

  // Autoplay functionality
  useEffect(() => {
    let timer = null;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrentSlideIndex((prev) => {
          if (prev >= totalSlides - 1) {
            setIsAutoPlaying(false);
            return prev;
          }
          setDirection(1);
          return prev + 1;
        });
      }, 7000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isAutoPlaying, totalSlides]);

  // Touch Swipe gestures
  const [touchStart, setTouchStart] = useState(null);
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    setTouchStart(null);
  };

  // Variants for slide transition animation
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.38,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: [0.25, 1, 0.5, 1],
      },
    }),
  };

  const progressPercentage = ((currentSlideIndex + 1) / totalSlides) * 100;

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="w-screen h-screen flex flex-col bg-[#4A010A] text-white overflow-hidden relative"
    >
      {/* Top Thin Progress Bar */}
      <div className="w-full h-1.5 bg-black/30 fixed top-0 left-0 z-50">
        <motion.div
          className="h-full bg-flame-pink shadow-[0_0_8px_#FEDEE1]"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        />
      </div>

      {/* Main Slide Presentation Canvas (Preserves 16:9 widescreen or fills neatly) */}
      <main className="flex-1 w-full h-full relative overflow-hidden flex items-center justify-center p-0 md:p-2 lg:p-4">
        <div className="w-full h-full max-w-[1920px] max-h-[1080px] aspect-[16/9] shadow-2xl rounded-none md:rounded-2xl overflow-hidden relative flex flex-col">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentSlideIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full relative"
            >
              <CurrentSlideComponent />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Bottom Floating Navigation Bar */}
      <footer className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 bg-flame-maroon-deep/90 border border-flame-pink/30 rounded-full px-4 py-2 shadow-2xl backdrop-blur-md flex items-center gap-3 sm:gap-4 text-xs font-mono">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={currentSlideIndex === 0}
          title="Previous slide (Left Arrow)"
          className={`p-1.5 rounded-full transition-all ${
            currentSlideIndex === 0
              ? 'opacity-30 cursor-not-allowed text-flame-pink/50'
              : 'hover:bg-flame-pink/20 text-flame-pink active:scale-95'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide Counter / Title Indicator */}
        <button
          onClick={() => setShowOverview(true)}
          className="flex items-center gap-2 hover:bg-flame-pink/15 px-3 py-1 rounded-full transition-all cursor-pointer text-flame-pink font-semibold"
          title="Click to view all slides (O or G)"
        >
          <span className="font-anton tracking-wider text-sm text-white">
            {String(currentSlideIndex + 1).padStart(2, '0')}
          </span>
          <span className="text-flame-pink/60 text-xs">/</span>
          <span className="text-flame-pink/80 text-xs">{String(totalSlides).padStart(2, '0')}</span>
          <span className="hidden md:inline text-[11px] text-flame-pink/70 border-l border-flame-pink/30 pl-2">
            {currentSlide.title}
          </span>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={currentSlideIndex === totalSlides - 1}
          title="Next slide (Right Arrow / Space)"
          className={`p-1.5 rounded-full transition-all ${
            currentSlideIndex === totalSlides - 1
              ? 'opacity-30 cursor-not-allowed text-flame-pink/50'
              : 'hover:bg-flame-pink/20 text-flame-pink active:scale-95'
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="w-px h-4 bg-flame-pink/25 hidden sm:block" />

        {/* Overview Grid Toggle */}
        <button
          onClick={() => setShowOverview(true)}
          title="Slides Overview Grid (O)"
          className="p-1.5 rounded-full hover:bg-flame-pink/20 text-flame-pink transition-all hidden sm:block"
        >
          <Grid className="w-4 h-4" />
        </button>

        {/* Autoplay Toggle */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          title={isAutoPlaying ? "Pause Autoplay" : "Start Autoplay (7s per slide)"}
          className={`p-1.5 rounded-full transition-all hidden sm:block ${
            isAutoPlaying ? 'bg-flame-pink text-flame-maroon' : 'hover:bg-flame-pink/20 text-flame-pink'
          }`}
        >
          {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={toggleFullscreen}
          title="Toggle Fullscreen (F)"
          className="p-1.5 rounded-full hover:bg-flame-pink/20 text-flame-pink transition-all"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>

        {/* Keyboard Shortcuts Help */}
        <button
          onClick={() => setShowHelp(true)}
          title="Keyboard Shortcuts (?)"
          className="p-1.5 rounded-full hover:bg-flame-pink/20 text-flame-pink transition-all hidden md:block"
        >
          <Keyboard className="w-4 h-4" />
        </button>
      </footer>

      {/* Grid Overview Modal */}
      <AnimatePresence>
        {showOverview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-flame-maroon-deep/95 backdrop-blur-md p-6 sm:p-10 flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-flame-pink/20 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <Grid className="w-6 h-6 text-flame-pink" />
                <h3 className="font-anton text-2xl tracking-wider text-white">ALL SLIDES OVERVIEW</h3>
                <span className="text-xs font-mono bg-flame-pink/20 text-flame-pink px-2.5 py-0.5 rounded">
                  10 Slides
                </span>
              </div>
              <button
                onClick={() => setShowOverview(false)}
                className="p-2 rounded-full hover:bg-flame-pink/20 text-flame-pink transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 my-auto">
              {slides.map((s, idx) => (
                <div
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  className={`group cursor-pointer rounded-2xl p-4 border transition-all aspect-video flex flex-col justify-between relative overflow-hidden ${
                    idx === currentSlideIndex
                      ? 'border-flame-pink bg-flame-pink/20 ring-2 ring-flame-pink shadow-xl'
                      : s.theme === 'pink'
                      ? 'border-flame-pink/30 bg-[#FEDEE1] text-flame-maroon hover:scale-105'
                      : 'border-flame-pink/20 bg-flame-maroon hover:border-flame-pink/60 hover:scale-105'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-anton text-2xl ${s.theme === 'pink' && idx !== currentSlideIndex ? 'text-flame-maroon' : 'text-flame-pink'}`}>
                      {String(s.id).padStart(2, '0')}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      s.theme === 'pink' && idx !== currentSlideIndex ? 'bg-flame-maroon/15 text-flame-maroon' : 'bg-flame-pink/20 text-flame-pink'
                    }`}>
                      {s.category}
                    </span>
                  </div>

                  <div>
                    <h4 className={`font-anton text-sm tracking-wide ${
                      s.theme === 'pink' && idx !== currentSlideIndex ? 'text-flame-maroon' : 'text-white'
                    }`}>
                      {s.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-flame-pink/20 text-center text-xs font-mono text-flame-pink/70">
              Press <kbd className="px-2 py-0.5 bg-black/40 rounded border border-flame-pink/30">ESC</kbd> to close overview • Click any slide card to jump directly
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyboard Shortcuts Modal */}
      <AnimatePresence>
        {showHelp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-flame-maroon border border-flame-pink/30 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-white"
            >
              <div className="flex items-center justify-between pb-3 border-b border-flame-pink/20 mb-4">
                <div className="flex items-center gap-2">
                  <Keyboard className="w-5 h-5 text-flame-pink" />
                  <h3 className="font-anton text-xl tracking-wide">KEYBOARD SHORTCUTS</h3>
                </div>
                <button
                  onClick={() => setShowHelp(false)}
                  className="p-1 rounded-full hover:bg-flame-pink/20 text-flame-pink"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2.5 text-xs font-mono">
                {[
                  { key: '→ / Space / PageDn', action: 'Next slide' },
                  { key: '← / PageUp', action: 'Previous slide' },
                  { key: 'Home / End', action: 'First / Last slide' },
                  { key: 'F', action: 'Toggle Fullscreen' },
                  { key: 'O / G', action: 'Toggle Slide Overview Grid' },
                  { key: '?', action: 'Toggle this Shortcuts Guide' },
                  { key: 'Esc', action: 'Close dialogs / Exit grid' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-flame-maroon-dark/80 border border-flame-pink/15">
                    <span className="text-flame-pink font-semibold">{item.action}</span>
                    <kbd className="px-2 py-1 bg-black/40 border border-flame-pink/30 rounded text-[11px] text-white">
                      {item.key}
                    </kbd>
                  </div>
                ))}
              </div>

              <div className="mt-5 text-center">
                <button
                  onClick={() => setShowHelp(false)}
                  className="w-full bg-flame-pink text-flame-maroon font-bold py-2 rounded-xl text-xs hover:bg-white transition-all"
                >
                  Got It
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
