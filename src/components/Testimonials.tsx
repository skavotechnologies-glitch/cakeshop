import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/cakes';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 sm:py-32 bg-ivory/50 relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-rose/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cream-100 border border-gold/30 text-chocolate text-[11px] font-semibold tracking-[0.2em] uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Celebrated By Thousands</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-cocoa tracking-tight"
          >
            Sweet Words, Happy Hearts
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-chocolate/80 font-normal leading-relaxed"
          >
            Discover why food lovers, couples, and celebration hosts trust Maison de Cake for life’s most cherished milestones.
          </motion.p>
        </div>

        {/* Testimonial Card Display with Slider Controls */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white/95 backdrop-blur-md rounded-[2.5rem] p-8 sm:p-12 lg:p-14 border border-gold/30 shadow-luxury overflow-hidden">
            
            {/* Top Quote Icon */}
            <div className="absolute top-6 right-8 text-gold/20 pointer-events-none">
              <Quote className="w-20 h-20" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="relative z-10"
              >
                {/* 5-Star Rating */}
                <div className="flex items-center space-x-1.5 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-chocolate tracking-wider uppercase">
                    5.0 Verified Delight
                  </span>
                </div>

                {/* Quote Text */}
                <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-cocoa leading-snug italic">
                  "{current.quote}"
                </blockquote>

                {/* Author Info & Order Details */}
                <div className="mt-8 pt-6 border-t border-gold/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-gold/40 shadow-sm"
                    />
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <h4 className="font-serif font-bold text-lg text-cocoa">{current.name}</h4>
                        {current.verified && (
                          <span title="Verified Customer">
                            <CheckCircle2 className="w-4 h-4 text-gold" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-chocolate/70">{current.role}</p>
                    </div>
                  </div>

                  <div className="bg-cream-200/70 px-4 py-2 rounded-2xl border border-gold/20 self-start sm:self-auto">
                    <span className="text-[10px] uppercase tracking-wider text-chocolate/60 block">Ordered Cake</span>
                    <span className="text-xs font-bold text-chocolate">{current.cakeOrdered}</span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="mt-8 flex items-center justify-between pt-4 border-t border-gold/15">
              {/* Dot Indicators */}
              <div className="flex items-center space-x-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'w-8 bg-chocolate' : 'w-2.5 bg-gold/40 hover:bg-gold'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full border border-gold/30 hover:border-gold hover:bg-cream-200 text-chocolate transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full border border-gold/30 hover:border-gold hover:bg-cream-200 text-chocolate transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
