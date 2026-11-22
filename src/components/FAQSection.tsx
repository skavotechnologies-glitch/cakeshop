import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, Phone, MessageCircle, HelpCircle } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '../utils/contact';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    category: 'Ordering & Notice',
    question: 'How far in advance should I place an order?',
    answer:
      'For our Signature Collection cakes, we recommend ordering 24 hours in advance so our chefs can bake your sponge fresh at dawn. For bespoke multi-tiered wedding and milestone monuments, we suggest 1 to 2 weeks advance notice to allow for hand-crafted sugar florals, architectural supports, and personalized consultation.',
  },
  {
    category: 'Dietary Preferences',
    question: 'Are 100% Eggless or Gluten-Friendly options available?',
    answer:
      'Yes, absolutely. We offer 100% vegetarian / eggless variations across our entire signature catalog—including Strawberry Dream, Velvet Romance, and Chocolate Indulgence—without compromising the cloud-like texture. We also craft gluten-friendly and nut-conscious cakes upon request in dedicated sanitary prep cycles.',
  },
  {
    category: 'Delivery & Care',
    question: 'How does White-Glove Chilled Delivery work?',
    answer:
      'All our delicate confections are transported in specialized temperature-controlled, shock-absorbent refrigerated vans. This ensures delicate ganache, velvet buttercream, and gold leaf stay in pristine showroom condition regardless of outside heat or traffic. Delivery is handled with white-glove care directly to your doorstep or venue.',
  },
  {
    category: 'How to Order',
    question: 'How do I place an order by Phone or WhatsApp?',
    answer:
      'Simply click any "Order" button or dial our patissier concierge at +91 98765 43210. You can also chat with us directly on WhatsApp to share your desired cake flavor, guest count, delivery date, and plaque message. Our concierge confirms your booking and delivery slot within minutes.',
  },
  {
    category: 'Serving & Slicing',
    question: 'What is the best way to store and serve the cake?',
    answer:
      'Keep your cake refrigerated until 45 to 60 minutes before celebration time. Allowing the cake to reach cool room temperature lets the pure French butter and single-origin cocoa fats bloom to their richest, silkiest mouthfeel. For clean, bakery-grade slices, dip a long sharp knife in warm water and wipe dry between every cut.',
  },
  {
    category: 'Personalization',
    question: 'Can I customize the hand-piped message and color theme?',
    answer:
      'Every celebratory cake includes a complimentary, hand-piped chocolate plaque with your custom calligraphy message (up to 45 characters). We are also delighted to tailor frosting hues, add edible 24K gold leaf, or coordinate fresh floral botanicals to match your celebration’s color palette.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappUrl = getWhatsAppLink();

  return (
    <section id="faq" className="py-20 sm:py-28 bg-cream-50 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-rose/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-ivory border border-gold/30 text-chocolate text-[11px] font-semibold tracking-[0.2em] uppercase mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5 text-gold" />
            <span>Atelier Guidance & Inquiries</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-cocoa tracking-tight"
          >
            Frequently Asked <span className="text-rose italic font-normal">Confections</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-chocolate/80 font-normal leading-relaxed"
          >
            Everything you need to know about our fresh ingredients, bespoke tiers, and chilled white-glove delivery.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 sm:space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl sm:rounded-3xl border border-gold/30 bg-white/95 backdrop-blur-sm overflow-hidden shadow-sm hover:border-gold/60 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1 pr-2">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-rose block mb-1">
                      {faq.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-cocoa group-hover:text-chocolate transition-colors">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 border border-gold/30 transition-all duration-300 ${
                      isOpen
                        ? 'bg-chocolate text-cream-100 rotate-180 border-chocolate'
                        : 'bg-cream-100 text-chocolate group-hover:bg-cream-200'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-gold/15 text-xs sm:text-sm text-chocolate/80 leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Concierge Support Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-ivory/90 border border-gold/30 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left shadow-sm"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base sm:text-lg text-cocoa">
                Have a unique celebration idea or custom flavor in mind?
              </h4>
              <p className="text-xs sm:text-sm text-chocolate/75">
                Our Head Patissier is available for direct consultation via phone or WhatsApp.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full md:w-auto shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center space-x-1.5 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Ask on WhatsApp</span>
            </a>

            <a
              href={CONTACT_INFO.phoneCallUrl}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-chocolate hover:bg-cocoa text-cream-100 text-xs font-bold tracking-wider uppercase flex items-center justify-center space-x-1.5 transition-colors border border-gold/30"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>Call: {CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
