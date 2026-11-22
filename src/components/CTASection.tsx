import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Phone, MessageCircle, Gift } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '../utils/contact';

export const CTASection: React.FC = () => {
  const whatsappUrl = getWhatsAppLink();

  return (
    <section className="relative py-20 sm:py-32 bg-chocolate text-cream-100 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-chocolate-light/40 via-chocolate to-cocoa pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 sm:w-96 h-80 sm:h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 sm:w-96 h-80 sm:h-96 bg-rose/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating flower petals & sparkles */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-6 md:left-24 text-2xl sm:text-3xl pointer-events-none opacity-80"
      >
        🌸
      </motion.div>
      <motion.div
        animate={{ y: [12, -12, 12], rotate: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-12 right-6 md:right-28 text-2xl sm:text-3xl pointer-events-none opacity-80"
      >
        🍓
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-cream-100/10 border border-gold/40 text-gold text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-5 sm:mb-6 backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
          <span>Bespoke Celebrations & Events</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream-100 leading-[1.1] tracking-tight"
        >
          Your Celebration Deserves a{' '}
          <span className="italic font-normal text-gold underline decoration-rose/60 decoration-wavy decoration-1 underline-offset-8">
            Sweet Beginning.
          </span>
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-5 sm:mt-6 text-sm sm:text-lg md:text-xl text-cream-200/90 max-w-2xl mx-auto leading-relaxed font-light"
        >
          "Let's create something beautiful, delicious, and unforgettable. Dial or chat with our master patissier today."
        </motion.p>

        {/* Dual Action Buttons: Call & WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center space-y-3.5 sm:space-y-0 sm:space-x-5 w-full sm:w-auto"
        >
          {/* WhatsApp Order */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 sm:px-9 py-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2.5"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Order via WhatsApp</span>
          </a>

          {/* Call Our Bakers */}
          <a
            href={CONTACT_INFO.phoneCallUrl}
            className="w-full sm:w-auto px-8 sm:px-9 py-4 rounded-full bg-cream-100/10 hover:bg-cream-100/20 text-cream-100 border border-gold/40 hover:border-gold font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2.5 backdrop-blur-sm"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
            <span>Call: {CONTACT_INFO.phoneDisplay}</span>
          </a>
        </motion.div>

        {/* Micro-Features */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-cream-100/15 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-cream-300">
          <div className="flex items-center space-x-2">
            <Gift className="w-4 h-4 text-gold" />
            <span>Complimentary Luxury Gift Packaging</span>
          </div>
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Hand-Piped Calligraphy Plaque Included</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>❄️ Temperature-Controlled Chilled Delivery</span>
          </div>
        </div>

      </div>
    </section>
  );
};
