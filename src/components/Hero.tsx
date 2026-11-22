import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown, ShieldCheck, Clock, Heart } from 'lucide-react';
import { useOrder } from '../context/CartContext';

export const Hero: React.FC = () => {
  const { openGeneralOrder } = useOrder();

  const handleExploreScroll = () => {
    const element = document.getElementById('signature-cakes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-cream-100 bg-grain">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] bg-rose/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[240px] sm:w-[350px] h-[240px] sm:h-[350px] bg-gold/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-4 sm:left-10 w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] bg-ivory rounded-full blur-2xl pointer-events-none" />

      {/* Floating decorative elements */}
      {/* 1. Floating strawberry */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          rotate: [-6, 6, -6],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 sm:top-28 left-4 md:left-16 lg:left-24 z-10 pointer-events-none hidden sm:block"
      >
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-cream-200/90 shadow-luxury border border-rose/30 p-2 flex items-center justify-center backdrop-blur-sm">
          <span className="text-2xl md:text-3xl filter drop-shadow">🍓</span>
        </div>
      </motion.div>

      {/* 2. Floating flower blossom */}
      <motion.div
        animate={{
          y: [10, -10, 10],
          rotate: [8, -8, 8],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-28 sm:top-36 right-4 md:right-20 lg:right-32 z-10 pointer-events-none hidden sm:block"
      >
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-cream-200/90 shadow-luxury border border-gold/30 p-2 flex items-center justify-center backdrop-blur-sm">
          <span className="text-2xl filter drop-shadow">🌸</span>
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
              className="inline-flex items-center space-x-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-ivory/80 border border-gold/30 backdrop-blur-sm shadow-sm"
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
              Handcrafted cakes and delightful desserts made with the finest ingredients, for life’s most beautiful moments.
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

          {/* Right Column: Hero Cake Presentation */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-2 lg:mt-0">
            {/* Concentric gold rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[280px] sm:w-[400px] lg:w-[440px] h-[280px] sm:h-[400px] lg:h-[440px] rounded-full border border-gold/25 animate-spin-slow" />
              <div className="absolute w-[240px] sm:w-[340px] lg:w-[380px] h-[240px] sm:h-[340px] lg:h-[380px] rounded-full border border-dashed border-rose/30" />
            </div>

            {/* Cake Centerpiece */}
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
              className="relative z-20 group w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[450px]"
            >
              {/* Soft pedestal shadow */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-cocoa/20 rounded-[100%] blur-xl" />

              {/* Main Cake Image */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border-4 border-white/90 bg-cream-200"
              >
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop"
                  alt="Maison de Cake Signature Artisan Centerpiece"
                  className="w-full h-[340px] sm:h-[420px] lg:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Overlaid luxury tag */}
                <div className="absolute top-3.5 right-3.5 bg-cocoa/85 backdrop-blur-md text-cream-100 text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-gold/40 shadow-lg flex items-center space-x-1.5">
                  <Sparkles className="w-3 h-3 text-gold" />
                  <span>Couture Edition</span>
                </div>

                {/* Overlaid elegant caption card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-gold/25 shadow-luxury">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-rose font-bold">Featured Atelier Special</p>
                      <h4 className="font-serif font-bold text-chocolate text-sm sm:text-base">Fleur de Vanille & Cacao</h4>
                    </div>
                    <span className="font-serif font-bold text-gold text-base sm:text-lg">₹1,899</span>
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
  );
};
