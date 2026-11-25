import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowDown,
  ShieldCheck,
  Clock,
  Heart,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Maximize2,
  X,
  Flame,
  Award
} from 'lucide-react';
import { useOrder } from '../context/CartContext';

export const Hero: React.FC = () => {
  const { openGeneralOrder } = useOrder();
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTheatreOpen, setIsTheatreOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const theatreVideoRef = useRef<HTMLVideoElement>(null);

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
    <>
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-cream-100 bg-grain">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-rose/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-4 sm:right-10 w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] bg-gold/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-4 sm:left-10 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-ivory rounded-full blur-2xl pointer-events-none" />

        {/* Floating animated decorative graphics */}
        {/* 1. Floating strawberry top-left */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [-8, 8, -8],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-24 sm:top-28 left-4 md:left-16 lg:left-24 z-10 pointer-events-none hidden sm:block"
        >
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-cream-200/90 shadow-luxury border border-rose/30 p-2 flex items-center justify-center backdrop-blur-sm">
            <span className="text-2xl md:text-3xl filter drop-shadow">🍓</span>
          </div>
        </motion.div>

        {/* 2. Floating flower blossom top-right */}
        <motion.div
          animate={{
            y: [12, -12, 12],
            rotate: [10, -10, 10],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-28 sm:top-36 right-4 md:right-20 lg:right-32 z-10 pointer-events-none hidden sm:block"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-cream-200/90 shadow-luxury border border-gold/30 p-2 flex items-center justify-center backdrop-blur-sm">
            <span className="text-2xl filter drop-shadow">🌸</span>
          </div>
        </motion.div>

        {/* 3. Floating gold star sparkle bottom-left */}
        <motion.div
          animate={{
            y: [-8, 8, -8],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-28 left-8 lg:left-20 z-10 pointer-events-none hidden lg:block"
        >
          <div className="px-3.5 py-1.5 rounded-full bg-white/80 border border-gold/30 shadow-luxury backdrop-blur-sm flex items-center space-x-1.5 text-xs text-chocolate font-serif italic">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Pure French Craft</span>
          </div>
        </motion.div>

        {/* Main Hero Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Brand Typography & Clean Action Buttons */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start space-y-5 sm:space-y-6 lg:space-y-7">
              
              {/* Small Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="inline-flex items-center space-x-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-ivory/90 border border-gold/40 backdrop-blur-sm shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-rose animate-ping" />
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-chocolate">
                  ARTISAN BAKERY · EST. WITH LOVE
                </span>
              </motion.div>

              {/* Main Headline (Staggered Reveal) */}
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] font-bold leading-[1.1] text-cocoa tracking-tight"
                >
                  A little <span className="italic font-normal text-rose underline decoration-gold/40 decoration-wavy decoration-1 underline-offset-8">sweetness.</span>
                  <br />
                  A lot of <span className="text-chocolate">love.</span>
                </motion.h1>
              </div>

              {/* Supporting Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-chocolate/80 max-w-xl font-normal leading-relaxed"
              >
                Handcrafted cakes and delightful desserts made with the finest ingredients, for life’s most beautiful moments. Watch our live artisan confection in motion.
              </motion.p>

              {/* Clean Luxury CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto pt-2"
              >
                <button
                  onClick={handleExploreScroll}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-chocolate text-cream-100 font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-cocoa shadow-luxury hover:shadow-luxury-hover transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 border border-gold/30 group"
                >
                  <span>Explore Our Cakes</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>

                <button
                  onClick={openGeneralOrder}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-cream-200/90 text-cocoa hover:text-chocolate font-medium text-xs sm:text-sm tracking-wider uppercase border border-gold/40 hover:border-gold hover:bg-cream-300 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
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
                className="grid grid-cols-3 gap-2 sm:gap-4 pt-5 border-t border-gold/20 w-full max-w-lg"
              >
                <div className="flex items-center space-x-1.5 text-left">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold shrink-0" />
                  <span className="text-[10px] sm:text-xs text-chocolate/80 font-medium">100% Pure Butter</span>
                </div>
                <div className="flex items-center space-x-1.5 text-left">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold shrink-0" />
                  <span className="text-[10px] sm:text-xs text-chocolate/80 font-medium">Baked Fresh Daily</span>
                </div>
                <div className="flex items-center space-x-1.5 text-left">
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose shrink-0" />
                  <span className="text-[10px] sm:text-xs text-chocolate/80 font-medium">Artisan Crafted</span>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Hero Video Centerpiece Presentation */}
            <div className="lg:col-span-5 relative flex items-center justify-center mt-2 lg:mt-0">
              
              {/* Concentric rotating decorative gold rings with slow animation */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[300px] sm:w-[420px] lg:w-[480px] h-[300px] sm:h-[420px] lg:h-[480px] rounded-full border border-gold/30 animate-spin-slow" />
                <div className="absolute w-[260px] sm:w-[370px] lg:w-[420px] h-[260px] sm:h-[370px] lg:h-[420px] rounded-full border border-dashed border-rose/35 animate-float-reverse" />
              </div>

              {/* Video Centerpiece Card with Spring Entrance */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  type: 'spring',
                  stiffness: 80,
                  damping: 18,
                }}
                className="relative z-20 group w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px]"
              >
                {/* 3D Soft Pedestal Shadow */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-cocoa/25 rounded-[100%] blur-2xl" />

                {/* Animated Video Frame */}
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border-4 border-white/95 bg-cocoa"
                >
                  {/* The Autoplaying Looping Video */}
                  <div className="relative aspect-[4/5] sm:aspect-[4/5] overflow-hidden bg-cocoa">
                    <video
                      ref={videoRef}
                      src="/videos/hero-cake.mp4"
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Vignette Overlay for Luxury Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cocoa/85 via-transparent to-black/25 pointer-events-none" />

                    {/* Top Floating Badges: Live Atelier Indicator & Sound/Play Controls */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-auto">
                      {/* Live Atelier Pulse Badge */}
                      <div className="bg-cocoa/80 backdrop-blur-md text-cream-100 text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full border border-gold/40 shadow-md flex items-center space-x-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                        <span>Atelier In Motion</span>
                      </div>

                      {/* Interactive Controls Pill */}
                      <div className="flex items-center space-x-1.5">
                        {/* Audio Mute/Unmute Toggle */}
                        <button
                          onClick={toggleSound}
                          className="w-8 h-8 rounded-full bg-cocoa/75 hover:bg-cocoa text-cream-100 backdrop-blur-md border border-gold/40 flex items-center justify-center transition-all shadow-md active:scale-95"
                          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                          aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                        >
                          {isMuted ? (
                            <VolumeX className="w-3.5 h-3.5 text-gold" />
                          ) : (
                            <Volume2 className="w-3.5 h-3.5 text-gold animate-pulse" />
                          )}
                        </button>

                        {/* Play / Pause Toggle */}
                        <button
                          onClick={togglePlay}
                          className="w-8 h-8 rounded-full bg-cocoa/75 hover:bg-cocoa text-cream-100 backdrop-blur-md border border-gold/40 flex items-center justify-center transition-all shadow-md active:scale-95"
                          title={isPlaying ? 'Pause Video' : 'Play Video'}
                          aria-label={isPlaying ? 'Pause video' : 'Play video'}
                        >
                          {isPlaying ? (
                            <Pause className="w-3.5 h-3.5 text-gold" />
                          ) : (
                            <Play className="w-3.5 h-3.5 text-gold translate-x-0.5" />
                          )}
                        </button>

                        {/* Fullscreen Theatre Mode Button */}
                        <button
                          onClick={() => setIsTheatreOpen(true)}
                          className="w-8 h-8 rounded-full bg-cocoa/75 hover:bg-cocoa text-cream-100 backdrop-blur-md border border-gold/40 flex items-center justify-center transition-all shadow-md active:scale-95"
                          title="Watch Full Theatre Reel"
                          aria-label="Open full theatre reel"
                        >
                          <Maximize2 className="w-3.5 h-3.5 text-gold" />
                        </button>
                      </div>
                    </div>

                    {/* Center Gentle Play Overlay (appears when paused) */}
                    {!isPlaying && (
                      <div
                        onClick={togglePlay}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] cursor-pointer z-10"
                      >
                        <div className="w-14 h-14 rounded-full bg-white/90 text-chocolate flex items-center justify-center shadow-2xl border border-gold/60 transform hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 fill-chocolate translate-x-0.5" />
                        </div>
                      </div>
                    )}

                    {/* Bottom Floating Caption Card */}
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-gold/30 shadow-luxury z-10">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-1.5">
                            <span className="text-[9px] uppercase tracking-wider text-rose font-bold">
                              Masterpiece in Motion
                            </span>
                            <span className="w-1 h-1 rounded-full bg-gold" />
                            <span className="text-[9px] text-chocolate/60">Parisian Atelier</span>
                          </div>
                          <h4 className="font-serif font-bold text-chocolate text-sm sm:text-base">
                            Handcrafted Celebration Cake
                          </h4>
                        </div>
                        <button
                          onClick={() => setIsTheatreOpen(true)}
                          className="px-3 py-1.5 rounded-full bg-chocolate hover:bg-cocoa text-cream-100 text-[10px] font-semibold uppercase tracking-wider transition-colors border border-gold/30"
                        >
                          Full Reel
                        </button>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </motion.div>

            </div>

          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <motion.button
          onClick={handleExploreScroll}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 text-chocolate/60 hover:text-chocolate transition-colors focus:outline-none cursor-pointer group"
          aria-label="Scroll down to signature cakes"
        >
          <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-semibold">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-7 h-7 rounded-full border border-gold/40 flex items-center justify-center group-hover:border-gold"
          >
            <ArrowDown className="w-3 h-3 text-gold" />
          </motion.div>
        </motion.button>
      </section>

      {/* Cinematic Fullscreen Theatre Lightbox Modal */}
      <AnimatePresence>
        {isTheatreOpen && (
          <div
            onClick={() => setIsTheatreOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-cocoa rounded-3xl overflow-hidden border border-gold/40 shadow-2xl flex flex-col"
            >
              {/* Top Modal Bar */}
              <div className="p-4 sm:p-5 border-b border-gold/20 flex items-center justify-between text-cream-100 bg-cocoa-deep">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-cream-100">
                      Maison de Cake · The Atelier Film
                    </h3>
                    <p className="text-[11px] text-cream-300">
                      Handcrafted Confectionery Cinema · Artisan Poured Details
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsTheatreOpen(false)}
                  className="p-2 rounded-full hover:bg-chocolate text-cream-200 transition-colors"
                  aria-label="Close theatre modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Theatre Video Element */}
              <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                <video
                  ref={theatreVideoRef}
                  src="/videos/hero-cake.mp4"
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-contain max-h-[70vh]"
                />
              </div>

              {/* Theatre Footer Callout */}
              <div className="p-4 sm:p-5 bg-cocoa flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div className="text-xs text-cream-200 font-light">
                  "Every cake is sculpted with patience, passion, and the world’s purest ingredients."
                </div>
                <button
                  onClick={() => {
                    setIsTheatreOpen(false);
                    openGeneralOrder();
                  }}
                  className="px-6 py-2.5 rounded-full bg-gold text-cocoa font-bold text-xs uppercase tracking-wider hover:bg-gold-light transition-colors"
                >
                  Order This Cake
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
