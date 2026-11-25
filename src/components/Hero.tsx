import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowDown,
  ShieldCheck,
  Clock,
  Heart,
  Volume2,
  VolumeX,
  Play,
  Pause
} from 'lucide-react';
import { useOrder } from '../context/CartContext';

export const Hero: React.FC = () => {
  const { openGeneralOrder } = useOrder();
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleExploreScroll = () => {
    const element = document.getElementById('signature-cakes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28 overflow-hidden bg-cocoa text-cream-100">
      
      {/* 1. Full-Screen Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          src="/videos/hero-cake.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover object-center transform scale-105"
        />

        {/* Cinematic Luxury Composite Gradient Overlays */}
        {/* Dark top vignette for header legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-cocoa/90 pointer-events-none" />
        
        {/* Subtle radial focus vignette on the cake */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_15%,_rgba(44,28,24,0.6)_100%)] pointer-events-none" />

        {/* Bottom seamless transition melt into next cream section */}
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-cream-50 via-cream-50/60 to-transparent pointer-events-none" />
      </div>

      {/* Floating animated decorative petals & strawberries */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [-8, 8, -8],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-28 left-6 md:left-16 z-10 pointer-events-none hidden sm:block opacity-85"
      >
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/40 shadow-2xl border border-rose/40 p-2 flex items-center justify-center backdrop-blur-md">
          <span className="text-2xl md:text-3xl filter drop-shadow">🍓</span>
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [12, -12, 12],
          rotate: [10, -10, 10],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-36 right-6 md:right-20 z-10 pointer-events-none hidden sm:block opacity-85"
      >
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/40 shadow-2xl border border-gold/40 p-2 flex items-center justify-center backdrop-blur-md">
          <span className="text-2xl filter drop-shadow">🌸</span>
        </div>
      </motion.div>

      {/* Main Hero Content Container (Centered Editorial Luxury) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 text-center relative">
        
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2 rounded-full bg-black/50 border border-gold/50 backdrop-blur-md shadow-2xl mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-rose animate-ping" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-gold">
            ARTISAN BAKERY · EST. WITH LOVE
          </span>
        </motion.div>

        {/* Main Headline (Staggered Reveal with KaTeX/Serif Grandeur) */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[82px] xl:text-[90px] font-bold leading-[1.08] text-cream-50 tracking-tight drop-shadow-2xl"
          >
            A little <span className="italic font-normal text-rose-light underline decoration-gold/60 decoration-wavy decoration-1 underline-offset-8">sweetness.</span>
            <br />
            A lot of <span className="text-gold">love.</span>
          </motion.h1>
        </div>

        {/* Supporting Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-cream-100/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md"
        >
          Handcrafted cakes and delightful desserts made with the finest ingredients, for life’s most beautiful moments.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center space-y-3.5 sm:space-y-0 sm:space-x-5 w-full sm:w-auto"
        >
          <button
            onClick={handleExploreScroll}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-gold text-cocoa font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-gold-light shadow-gold-glow transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2.5"
          >
            <span>Explore Our Cakes</span>
            <span>→</span>
          </button>

          <button
            onClick={openGeneralOrder}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-black/45 hover:bg-black/65 text-cream-100 border border-gold/50 hover:border-gold font-bold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2.5"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Order Your Celebration</span>
          </button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 sm:mt-14 pt-6 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-cream-200 drop-shadow"
        >
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
            <span>100% Pure Butter</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gold shrink-0" />
            <span>Baked Fresh Daily</span>
          </div>
          <div className="flex items-center space-x-2">
            <Heart className="w-4 h-4 text-rose shrink-0" />
            <span>Artisan Handcrafted</span>
          </div>
        </motion.div>

      </div>

      {/* Floating Video Audio / Playback Controls Widget (Bottom-Right) */}
      <div className="absolute bottom-5 right-4 sm:bottom-6 sm:right-6 z-30 flex items-center space-x-2 bg-black/60 backdrop-blur-md p-1.5 sm:p-2 rounded-full border border-gold/40 shadow-2xl">
        <span className="flex items-center space-x-1.5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="hidden sm:inline">Atelier In Motion</span>
        </span>
        <button
          onClick={toggleSound}
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-cream-100 flex items-center justify-center transition-colors"
          title={isMuted ? 'Unmute video audio' : 'Mute video audio'}
          aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
        >
          {isMuted ? (
            <VolumeX className="w-3.5 h-3.5 text-gold" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 text-gold animate-pulse" />
          )}
        </button>
        <button
          onClick={togglePlay}
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-cream-100 flex items-center justify-center transition-colors"
          title={isPlaying ? 'Pause video' : 'Play video'}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5 text-gold" />
          ) : (
            <Play className="w-3.5 h-3.5 text-gold translate-x-0.5" />
          )}
        </button>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.button
        onClick={handleExploreScroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 text-chocolate hover:text-cocoa transition-colors focus:outline-none cursor-pointer group z-30"
        aria-label="Scroll down to signature cakes"
      >
        <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-bold text-chocolate/80">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-7 h-7 rounded-full border border-chocolate/40 flex items-center justify-center group-hover:border-chocolate bg-white/70 backdrop-blur-sm shadow-sm"
        >
          <ArrowDown className="w-3 h-3 text-chocolate" />
        </motion.div>
      </motion.button>
    </section>
  );
};
