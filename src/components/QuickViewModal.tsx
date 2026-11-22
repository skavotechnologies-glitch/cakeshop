import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Phone, MessageCircle, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { useOrder } from '../context/CartContext';
import { CONTACT_INFO, getWhatsAppLink } from '../utils/contact';

export const QuickViewModal: React.FC = () => {
  const { quickViewCake, setQuickViewCake } = useOrder();
  const [selectedWeight, setSelectedWeight] = useState('1.0 kg');
  const [customMessage, setCustomMessage] = useState('');

  if (!quickViewCake) return null;

  const weights = [
    { label: '0.5 kg', desc: 'Serves 3-4', multiplier: 0.65 },
    { label: '1.0 kg', desc: 'Serves 6-8', multiplier: 1.0 },
    { label: '2.0 kg', desc: 'Serves 14-16', multiplier: 1.85 },
  ];

  const currentMultiplier = weights.find((w) => w.label === selectedWeight)?.multiplier || 1.0;
  const currentPrice = Math.round(quickViewCake.price * currentMultiplier);

  const whatsappUrl = getWhatsAppLink(
    quickViewCake.name,
    selectedWeight,
    customMessage
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-cocoa/75 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-cream-100 rounded-3xl max-w-2xl w-full shadow-2xl border border-gold/30 overflow-hidden relative my-auto max-h-[94vh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={() => setQuickViewCake(null)}
            className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-white/90 text-chocolate hover:bg-cream-200 transition-colors flex items-center justify-center shadow-md"
            aria-label="Close cake modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="overflow-y-auto p-5 sm:p-7 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 items-center">
              {/* Product Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-square border-2 border-white shadow-lg bg-cream-200">
                <img
                  src={quickViewCake.image}
                  alt={quickViewCake.name}
                  className="w-full h-full object-cover"
                />
                {quickViewCake.badge && (
                  <div className="absolute top-3 left-3 bg-cocoa/85 backdrop-blur-md text-cream-100 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border border-gold/40">
                    {quickViewCake.badge}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-2.5">
                <div className="flex items-center space-x-1.5">
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <span className="text-xs font-bold text-chocolate">{quickViewCake.rating}</span>
                  <span className="text-xs text-chocolate/50">({quickViewCake.reviewsCount} reviews)</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cocoa leading-tight">
                  {quickViewCake.name}
                </h3>

                <p className="font-serif italic text-rose text-xs sm:text-sm">
                  {quickViewCake.tagline}
                </p>

                <p className="text-xs sm:text-sm text-chocolate/80 leading-relaxed">
                  {quickViewCake.description}
                </p>

                {/* Dietary pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {quickViewCake.dietary.map((d, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-ivory text-chocolate px-2.5 py-0.5 rounded-full border border-gold/30 font-medium"
                    >
                      ✓ {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Weight / Size Selector */}
            <div className="pt-3 border-t border-gold/20">
              <label className="text-xs font-bold uppercase tracking-wider text-chocolate/70 block mb-2">
                Select Cake Size / Servings:
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {weights.map((w) => (
                  <button
                    key={w.label}
                    onClick={() => setSelectedWeight(w.label)}
                    className={`p-2.5 sm:p-3 rounded-2xl border text-center transition-all ${
                      selectedWeight === w.label
                        ? 'bg-chocolate text-cream-100 border-chocolate shadow-md'
                        : 'bg-white text-chocolate border-gold/30 hover:bg-cream-200'
                    }`}
                  >
                    <div className="text-xs font-bold">{w.label}</div>
                    <div className={`text-[9px] sm:text-[10px] ${selectedWeight === w.label ? 'text-cream-300' : 'text-chocolate/60'}`}>
                      {w.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Plaque Message */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-chocolate/70 block mb-1">
                Hand-Piped Chocolate Plaque Message (Complimentary):
              </label>
              <input
                type="text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                maxLength={45}
                placeholder="e.g. Happy 25th Birthday Rhea! / Best Wishes"
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-gold/30 bg-white text-cocoa focus:outline-none focus:border-gold"
              />
            </div>

            {/* Price & Order via Call / WhatsApp Actions */}
            <div className="pt-4 border-t border-gold/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-chocolate/50 block">Estimated Total</span>
                <span className="font-serif font-bold text-2xl text-cocoa">
                  ₹{currentPrice.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Dual Order Buttons */}
              <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:space-x-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center space-x-1.5"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={CONTACT_INFO.phoneCallUrl}
                  className="py-3 px-5 rounded-full bg-chocolate text-cream-100 font-bold text-xs uppercase tracking-wider hover:bg-cocoa shadow-md transition-all flex items-center justify-center space-x-1.5 border border-gold/30"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call to Order</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
