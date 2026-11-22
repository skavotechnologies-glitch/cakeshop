import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Award, CheckCircle2, X } from 'lucide-react';

export const BrandStory: React.FC = () => {
  const [showStoryModal, setShowStoryModal] = useState(false);

  return (
    <>
      <section id="brand-story" className="py-24 sm:py-32 bg-ivory/60 relative overflow-hidden">
        {/* Soft background accents */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-cream-100 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-rose/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Editorial Bakery Photography with Clip/Mask Effect */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              {/* Back decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-[2.5rem] border-2 border-gold/40 transform -rotate-1 hidden sm:block pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-luxury border-4 border-white bg-cream-200">
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop"
                  alt="Pastry Chef decorating handcrafted cake at Maison de Cake atelier"
                  className="w-full h-[450px] sm:h-[540px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Floating Artisan Seal */}
                <motion.div
                  animate={{ y: [-4, 4, -4], rotate: [-2, 2, -2] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-2 sm:bottom-6 -right-2 sm:right-6 bg-chocolate text-cream-100 p-4 sm:p-5 rounded-2xl shadow-luxury-hover border border-gold/40 max-w-[210px] backdrop-blur-md"
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <Award className="w-4 h-4 text-gold" />
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gold">
                      Master Patissier
                    </span>
                  </div>
                  <p className="font-serif italic text-xs leading-snug">
                    "Every swirl is placed with patience, intention, and heartfelt reverence."
                  </p>
                </motion.div>
              </div>

              {/* Secondary Accent Photo */}
              <div className="absolute -top-8 -right-6 w-36 h-36 rounded-2xl overflow-hidden border-2 border-white shadow-xl hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=300&auto=format&fit=crop"
                  alt="Powdered sugar dusting"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right: Editorial Typography & Brand Narrative */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 flex flex-col items-start space-y-6"
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cream-100 border border-gold/30 text-chocolate text-[11px] font-semibold tracking-[0.2em] uppercase">
                <Heart className="w-3.5 h-3.5 text-rose" />
                <span>Our Heritage & Philosophy</span>
              </div>

              {/* Heading */}
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-bold text-cocoa leading-[1.15] tracking-tight">
                The Art of Baking,
                <br />
                <span className="italic font-normal text-rose">The Heart of Celebrating.</span>
              </h2>

              {/* Text */}
              <p className="text-base sm:text-lg text-chocolate/85 leading-relaxed font-normal">
                At <span className="font-semibold text-cocoa">Maison de Cake</span>, every creation begins with passion, patience, and the finest ingredients. From the first whisk to the final flourish, we believe the sweetest memories deserve something extraordinary.
              </p>

              <p className="text-sm sm:text-base text-chocolate/75 leading-relaxed">
                Founded with a deep love for European patisserie tradition and modern aesthetic refinement, our atelier rejects industrial shortcuts. We whip fresh cream at dawn, slow-simmer seasonal berries, and source Grand Cru single-origin chocolate to ensure every slice transports you to pure confectionery bliss.
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 w-full">
                <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-cream-100/80 border border-gold/20">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-cocoa">Zero Artificial Fillers</h4>
                    <p className="text-[11px] text-chocolate/70">Pure butter, real cream, natural eggs, zero preservatives.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-cream-100/80 border border-gold/20">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-cocoa">Bespoke Precision</h4>
                    <p className="text-[11px] text-chocolate/70">Each cake is personalized to your exact palette and theme.</p>
                  </div>
                </div>
              </div>

              {/* Discover Our Story CTA */}
              <div className="pt-2">
                <button
                  onClick={() => setShowStoryModal(true)}
                  className="px-8 py-3.5 rounded-full bg-chocolate text-cream-100 font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-cocoa shadow-luxury transition-all duration-300 transform hover:-translate-y-0.5 border border-gold/30 flex items-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span>Discover Our Story</span>
                </button>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Brand Story Modal Deep Dive */}
      <AnimatePresence>
        {showStoryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-cocoa/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-cream-100 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gold/30 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowStoryModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-cream-200 text-chocolate transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs uppercase tracking-[0.2em] font-semibold text-rose mb-1">
                The Maison Heritage
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cocoa mb-4">
                Born From A Passion For Sweet Perfection
              </h3>

              <div className="space-y-4 text-sm text-chocolate/80 leading-relaxed">
                <p>
                  Maison de Cake was born from a simple yet unwavering conviction: celebratory cakes should be as magnificent to taste as they are to behold. What began as a boutique Parisian-inspired studio has blossomed into an atelier renowned for couture confectionery and joyful memories.
                </p>
                <p>
                  Our Head Patissier trained extensively in classic French viennoiserie and modern gateau architecture in Lyon and Paris before bringing those techniques to our bespoke celebration kitchen.
                </p>
                <p>
                  We believe that when family and friends gather around a cake, time slows down. A candle is blown, a wish is whispered, and a slice of sweetness is shared. We are profoundly humbled to be part of those forever moments.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gold/20 flex items-center justify-between">
                <div>
                  <p className="font-serif italic font-bold text-cocoa">Master Patissier & Founder</p>
                  <p className="text-xs text-chocolate/60">Maison de Cake Atelier</p>
                </div>
                <button
                  onClick={() => setShowStoryModal(false)}
                  className="px-6 py-2 rounded-full bg-chocolate text-cream-100 text-xs font-semibold tracking-wider uppercase hover:bg-cocoa transition-colors"
                >
                  Close Story
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
