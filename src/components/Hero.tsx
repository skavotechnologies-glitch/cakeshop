import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowDown,
  ShieldCheck,
  Clock,
  Heart,
  Star
} from 'lucide-react';
import { useOrder } from '../context/CartContext';

export const Hero: React.FC = () => {
  const { openGeneralOrder } = useOrder();
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleExploreScroll = () => {
    const element = document.getElementById('signature-cakes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sparkle floating particles data
  const sparkles = [
    { id: 1, top: '15%', left: '12%', delay: 0, size: 'w-2 h-2' },
    { id: 2, top: '25%', right: '14%', delay: 1.2, size: 'w-2.5 h-2.5' },
    { id: 3, top: '65%', left: '8%', delay: 2.1, size: 'w-2 h-2' },
    { id: 4, top: '75%', right: '10%', delay: 0.8, size: 'w-3 h-3' },
    { id: 5, top: '45%', right: '22%', delay: 1.8, size: 'w-1.5 h-1.5' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28 overflow-hidden bg-black text-cream-100">
      
      {/* 1. Full-Screen Background Video (Clear, Bright, Vibrant & Beautiful) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          src="/videos/hero-cake.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center will-change-transform"
          style={{ imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden' }}
        />

        {/* Minimal Vignettes so the Cake & Falling Sugar Remain Crisp, Bright & 4K Clear */}
        {/* Subtle top header shade for menu readability */}
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-black/60 via-black/15 to-transparent pointer-events-none" />
        
        {/* Soft edge radial vignette preserving full center brightness */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_65%,_rgba(0,0,0,0.35)_100%)] pointer-events-none" />

        {/* Bottom seamless transition melt into next cream section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream-50 via-cream-50/30 to-transparent pointer-events-none" />
      </div>

      {/* Floating Animated Falling Sugar Dust / Sparkle Ornaments */}
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          animate={{
            y: [-12, 12, -12],
            opacity: [0.3, 0.9, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4 + s.id,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: s.delay,
          }}
          style={{ top: s.top, left: s.left, right: s.right }}
          className={`absolute pointer-events-none z-10 ${s.size} rounded-full bg-gradient-to-r from-gold-light via-white to-rose-light blur-[0.5px] shadow-[0_0_12px_rgba(255,255,255,0.9)]`}
        />
      ))}

      {/* Floating Strawberry with Parallax Bounce */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [-6, 6, -6],
        }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-28 left-6 md:left-14 z-10 pointer-events-none hidden sm:block"
      >
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/35 shadow-2xl border border-white/20 p-2 flex items-center justify-center backdrop-blur-md">
          <span className="text-2xl md:text-3xl filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">🍓</span>
        </div>
      </motion.div>

      {/* Floating Blossom with Gentle Spin */}
      <motion.div
        animate={{
          y: [10, -10, 10],
          rotate: [8, -8, 8],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-36 right-6 md:right-16 z-10 pointer-events-none hidden sm:block"
      >
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/35 shadow-2xl border border-gold/30 p-2 flex items-center justify-center backdrop-blur-md">
          <span className="text-2xl filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">🌸</span>
        </div>
      </motion.div>

      {/* Main Hero Content (Clean, Floating & Organic - No Box Outline) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-4 sm:p-8 md:p-10"
        >
          {/* Soft Organic Ambient Text Halo (No Borders, High Clarity) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.22)_0%,_transparent_65%)] pointer-events-none -z-10" />

          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 sm:px-5 py-1.5 rounded-full bg-black/60 border border-gold/60 backdrop-blur-md shadow-xl mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-rose animate-ping" />
            <Star className="w-3 h-3 text-gold fill-gold" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-gold">
              PARISIAN ATELIER · EST. WITH LOVE
            </span>
          </motion.div>

          {/* Grand Calligraphic & Serif Headline */}
          <div className="overflow-hidden space-y-1">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center flex-wrap gap-x-3 gap-y-1"
            >
              <span className="font-display font-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                A little
              </span>
              <span className="font-script text-rose-light text-5xl sm:text-7xl md:text-8xl lg:text-[100px] leading-none drop-shadow-[0_4px_20px_rgba(217,154,156,0.6)] animate-pulse-subtle">
                sweetness,
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center flex-wrap gap-x-3 gap-y-1"
            >
              <span className="font-display font-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                a lot of
              </span>
              <span className="font-serif font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-[#FFF8F0] tracking-tight drop-shadow-[0_4px_24px_rgba(197,164,109,0.8)]">
                love.
              </span>
            </motion.div>
          </div>

          {/* Supporting Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-cream-100/95 max-w-xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            Handcrafted celebration cakes and French pastry masterpieces made with pure alpine berries, single-origin chocolate, and fresh cream.
          </motion.p>

          {/* High-Converting Luxury CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center space-y-3.5 sm:space-y-0 sm:space-x-5"
          >
            {/* Primary Button */}
            <button
              onClick={handleExploreScroll}
              className="w-full sm:w-auto px-8 sm:px-9 py-4 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-cocoa font-bold text-xs sm:text-sm tracking-wider uppercase shadow-gold-glow hover:shadow-[0_0_35px_rgba(197,164,109,0.6)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2 group"
            >
              <span>Explore Our Cakes</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>

            {/* Secondary Glass Button */}
            <button
              onClick={openGeneralOrder}
              className="w-full sm:w-auto px-8 sm:px-9 py-4 rounded-full bg-black/50 hover:bg-black/75 text-cream-100 border border-gold/70 hover:border-gold font-bold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2.5"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span>Order Your Celebration</span>
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-cream-200"
          >
            <div className="flex items-center space-x-2 drop-shadow">
              <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
              <span>100% Pure Butter</span>
            </div>
            <div className="flex items-center space-x-2 drop-shadow">
              <Clock className="w-4 h-4 text-gold shrink-0" />
              <span>Baked Fresh at Dawn</span>
            </div>
            <div className="flex items-center space-x-2 drop-shadow">
              <Heart className="w-4 h-4 text-rose-light shrink-0" />
              <span>Artisan Handcrafted</span>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.button
        onClick={handleExploreScroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 text-chocolate hover:text-cocoa transition-colors focus:outline-none cursor-pointer group z-30"
        aria-label="Scroll down to signature cakes"
      >
        <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-bold text-chocolate/90 drop-shadow-sm">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-7 h-7 rounded-full border border-chocolate/40 flex items-center justify-center group-hover:border-chocolate bg-white/80 backdrop-blur-sm shadow-sm"
        >
          <ArrowDown className="w-3 h-3 text-chocolate" />
        </motion.div>
      </motion.button>
    </section>
  );
};
