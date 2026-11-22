import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check, Users, ArrowRight } from 'lucide-react';
import { SHOWCASE_CATEGORIES } from '../data/cakes';
import { useOrder } from '../context/CartContext';
import { SIGNATURE_CAKES } from '../data/cakes';

export const InteractiveShowcase: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const { openOrderWithCake } = useOrder();
  const currentCategory = SHOWCASE_CATEGORIES[activeCategoryIndex];

  const handleOrderCategoryCake = () => {
    // Match with one of the cakes or default
    const matchingCake = SIGNATURE_CAKES.find(
      (c) => c.name.toLowerCase() === currentCategory.cakeName.toLowerCase()
    ) || SIGNATURE_CAKES[0];
    openOrderWithCake(matchingCake);
  };

  return (
    <section id="interactive-showcase" className="py-20 sm:py-32 bg-cream-100 bg-grain relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 sm:w-80 h-72 sm:h-80 bg-rose/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-ivory border border-gold/30 text-chocolate text-[11px] font-semibold tracking-[0.2em] uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Interactive Confectionery Experience</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-cocoa tracking-tight"
          >
            Made for Your Moments
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-chocolate/80 font-normal leading-relaxed"
          >
            "From intimate celebrations to unforgettable milestones, we create cakes that become part of your story."
          </motion.p>

          {/* Interactive Category Tabs */}
          <div className="mt-6 sm:mt-8 inline-flex p-1 sm:p-1.5 rounded-full bg-cream-200/90 border border-gold/30 shadow-inner max-w-full overflow-x-auto">
            {SHOWCASE_CATEGORIES.map((category, idx) => {
              const isActive = idx === activeCategoryIndex;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`relative px-4 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shrink-0 ${
                    isActive
                      ? 'text-cream-100 shadow-md'
                      : 'text-chocolate/70 hover:text-cocoa'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-chocolate rounded-full border border-gold/40"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Showcase Display with Animated Transitions */}
        <div className="bg-white/80 backdrop-blur-md rounded-[2rem] sm:rounded-[2.5rem] border border-gold/30 shadow-luxury overflow-hidden p-5 sm:p-8 lg:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Rich Interactive Details */}
              <div className="lg:col-span-6 flex flex-col justify-center space-y-5 sm:space-y-6">
                
                {/* Badge and Cake Name */}
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-rose/20 text-chocolate text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-2.5">
                    {currentCategory.badge}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-cocoa leading-tight">
                    {currentCategory.cakeName}
                  </h3>
                  <p className="mt-1.5 text-rose font-serif italic text-sm sm:text-base lg:text-lg">
                    {currentCategory.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-base text-chocolate/80 leading-relaxed">
                  {currentCategory.description}
                </p>

                {/* Flavor Notes callout */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-ivory/70 border border-gold/25">
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-chocolate/60 mb-1">
                    Flavor Profile
                  </div>
                  <p className="text-xs sm:text-sm text-chocolate font-medium">
                    {currentCategory.flavorNotes}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="space-y-2">
                  {currentCategory.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2.5 text-xs sm:text-sm text-chocolate/85">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Meta details (Servings & Price) */}
                <div className="pt-3 border-t border-gold/20 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center space-x-2 text-chocolate/70 text-xs sm:text-sm">
                    <Users className="w-4 h-4 text-gold shrink-0" />
                    <span>{currentCategory.servingsInfo}</span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-chocolate/50 block">Pricing</span>
                    <span className="font-serif font-bold text-lg sm:text-2xl text-cocoa">
                      {currentCategory.cakePrice}
                    </span>
                  </div>
                </div>

                {/* Single Clean Action Button */}
                <div className="pt-2">
                  <button
                    onClick={handleOrderCategoryCake}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-chocolate text-cream-100 hover:bg-cocoa font-medium text-xs sm:text-sm tracking-wider uppercase shadow-luxury transition-all duration-300 flex items-center justify-center space-x-2 border border-gold/30 group"
                  >
                    <span>Order This Creation</span>
                    <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

              {/* Right Column: Featured Image */}
              <div className="lg:col-span-6 relative">
                <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] aspect-[4/3] sm:aspect-square border-2 border-white shadow-2xl group">
                  <motion.img
                    src={currentCategory.image}
                    alt={currentCategory.cakeName}
                    initial={{ scale: 1.15, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Floating seal */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-gold/30 shadow-luxury flex items-center space-x-1.5 sm:space-x-2">
                    <Sparkles className="w-3.5 h-3.5 text-gold" />
                    <span className="text-[11px] sm:text-xs font-serif font-bold text-chocolate">
                      Bespoke Patisserie
                    </span>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
