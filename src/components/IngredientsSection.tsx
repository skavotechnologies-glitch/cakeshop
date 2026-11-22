import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Check } from 'lucide-react';
import { INGREDIENT_FEATURES } from '../data/cakes';

export const IngredientsSection: React.FC = () => {
  return (
    <section id="ingredients" className="py-24 sm:py-32 bg-cream-100 bg-grain relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-rose/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-ivory border border-gold/30 text-chocolate text-[11px] font-semibold tracking-[0.2em] uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Uncompromising Purity</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-cocoa tracking-tight"
          >
            Only the Good Stuff. <span className="text-rose italic font-normal">Always.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-chocolate/80 font-normal leading-relaxed"
          >
            We scour ethical farms across the globe to bring you flavors that sing naturally without artificial additives, shortening, or chemical stabilizers.
          </motion.p>
        </div>

        {/* 4 Circular / Asymmetrical Floating Ingredient Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {INGREDIENT_FEATURES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white/90 backdrop-blur-sm rounded-[2.5rem] p-6 sm:p-7 border border-gold/25 shadow-luxury hover:shadow-luxury-hover transition-all duration-500 flex flex-col items-center text-center group"
            >
              {/* Circular Image with floating subtle animation */}
              <div className="relative mb-6">
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-cream-200 shadow-md p-1 bg-white relative z-10 group-hover:rotate-3 transition-transform duration-500">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Subtle orbital glow */}
                <div
                  className="absolute inset-0 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity"
                  style={{ backgroundColor: item.accent }}
                />
              </div>

              {/* Ingredient Name */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-cocoa group-hover:text-chocolate transition-colors">
                {item.name}
              </h3>

              {/* Provenance Origin Badge */}
              <div className="mt-2.5 inline-flex items-center space-x-1.5 text-xs text-chocolate/65">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                <span className="italic">{item.origin}</span>
              </div>

              {/* Description */}
              <p className="mt-3.5 text-xs sm:text-sm text-chocolate/75 leading-relaxed">
                {item.description}
              </p>

              {/* Tasting Notes Callout */}
              <div className="mt-6 pt-4 border-t border-gold/20 w-full text-left">
                <div className="text-[10px] uppercase tracking-wider font-bold text-rose">
                  Tasting Character:
                </div>
                <div className="mt-1 text-xs text-chocolate font-medium italic">
                  "{item.tastingNotes}"
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Commitment Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-6 sm:p-8 rounded-3xl bg-chocolate text-cream-100 border border-gold/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-lg sm:text-xl text-cream-100">
                The Maison Purity Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-cream-300">
                Every batch is made fresh to order. We never freeze our sponge bases or use premixes.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-xs sm:text-sm text-cream-200 shrink-0">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-gold" />
              <span>100% Free-Range Dairy</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-gold" />
              <span>Non-GMO</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
