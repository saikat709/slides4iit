import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import RealFlameBackground from './RealFlameBackground';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function IntroSplash({ onStart, onExitToHub }) {
  const navigate = useNavigate();

  const handleExit = (e) => {
    e.stopPropagation();
    if (onExitToHub) {
      onExitToHub();
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    // Press any key to start presentation (except Escape which can exit)
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (onExitToHub) onExitToHub();
        else navigate('/');
        return;
      }
      onStart();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onStart, onExitToHub, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      onClick={onStart}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-flame-maroon text-white cursor-pointer select-none overflow-hidden"
    >
      {/* Top Left Return to Hub Button */}
      <button
        type="button"
        onClick={handleExit}
        title="Return to All Presentations (Esc)"
        className="absolute top-5 left-5 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 hover:bg-flame-pink/25 border border-flame-pink/35 text-flame-pink text-xs font-mono backdrop-blur-md transition-all hover:scale-105 active:scale-95 shadow-lg"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>All Presentations</span>
      </button>

      {/* Real Radiant Yellow Flame Simulation */}
      <RealFlameBackground colorPreset="yellow" flameHeight="tall" intensity={1.4} showEmbers={true} />

      {/* Decorative PPTX bracket watermark */}
      <svg
        className="absolute w-[60vw] max-w-[800px] h-auto opacity-5 pointer-events-none text-flame-pink"
        viewBox="0 0 969 969"
        fill="currentColor"
      >
        <path d="M 515.57 515.57 L 1484.43 515.57 L 1484.43 1484.43 L 912.81 1484.43 C 1184.60 1484.43 1343.15 1308.53 1343.15 1071.65 L 1343.15 1069.31 C 1343.15 832.43 1186.76 663.56 917.12 663.56 L 708.32 663.56 L 708.32 865.26 L 920.36 865.26 C 1045.47 865.26 1128.52 941.49 1128.52 1072.83 L 1128.52 1075.17 C 1128.52 1207.68 1045.47 1282.73 920.36 1282.73 L 515.57 1282.73 Z" />
      </svg>

      {/* Center Hero: Only FLAMEBASE written with glowing presence */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        <h1 className="font-anton text-8xl sm:text-9xl md:text-[160px] lg:text-[210px] tracking-tight leading-none text-white drop-shadow-[0_15px_45px_rgba(0,0,0,0.9)]">
          FLAME<span className="text-flame-pink">BASE</span>
        </h1>

        {/* Start Button & Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 sm:mt-12 flex flex-col items-center gap-3"
        >
          <div className="group flex items-center gap-3 px-8 py-3.5 rounded-full bg-flame-pink/15 hover:bg-flame-pink border border-flame-pink/40 hover:border-flame-pink text-flame-pink hover:text-flame-maroon font-bold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 shadow-2xl backdrop-blur-md">
            <span>Start Presentation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </div>

          <p className="text-xs font-mono text-flame-pink/70 uppercase tracking-widest mt-1">
            Press any key or click to begin
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
