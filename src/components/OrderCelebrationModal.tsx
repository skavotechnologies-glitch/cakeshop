import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageCircle, Sparkles, Clock, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { useOrder } from '../context/CartContext';
import { CONTACT_INFO, getWhatsAppLink } from '../utils/contact';
import { SIGNATURE_CAKES } from '../data/cakes';

export const OrderCelebrationModal: React.FC = () => {
  const { isOrderModalOpen, setIsOrderModalOpen, selectedCakeForOrder } = useOrder();

  const [selectedCakeId, setSelectedCakeId] = useState<string>(
    selectedCakeForOrder?.id || SIGNATURE_CAKES[0].id
  );
  const [selectedWeight, setSelectedWeight] = useState('1.0 kg (Serves 6-8)');
  const [customMessage, setCustomMessage] = useState('');
  const [occasion, setOccasion] = useState('Birthday Celebration');

  useEffect(() => {
    if (selectedCakeForOrder) {
      setSelectedCakeId(selectedCakeForOrder.id);
    }
  }, [selectedCakeForOrder]);

  if (!isOrderModalOpen) return null;

  const currentCake = SIGNATURE_CAKES.find((c) => c.id === selectedCakeId) || SIGNATURE_CAKES[0];

  const whatsappUrl = getWhatsAppLink(
    currentCake.name,
    selectedWeight,
    customMessage,
    occasion
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-cocoa/75 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-cream-100 rounded-3xl max-w-xl w-full shadow-2xl border border-gold/30 overflow-hidden relative my-auto max-h-[94vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="p-4 sm:p-6 border-b border-gold/20 flex items-center justify-between bg-white/70">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-cocoa leading-tight">
                  Order by Phone & WhatsApp
                </h3>
                <p className="text-[11px] text-chocolate/70">
                  Instant patissier concierge · Custom freshly baked orders
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOrderModalOpen(false)}
              className="p-2 rounded-full hover:bg-cream-200 text-chocolate transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-y-auto p-4 sm:p-6 space-y-5">
            {/* Quick Summary Card of Chosen Cake */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-gold/25 shadow-sm flex items-center space-x-3.5">
              <img
                src={currentCake.image}
                alt={currentCake.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-cream-300 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase tracking-wider font-bold text-rose">
                  Selected Creation
                </div>
                <h4 className="font-serif font-bold text-base sm:text-lg text-cocoa truncate">
                  {currentCake.name}
                </h4>
                <div className="flex items-baseline space-x-2 mt-0.5">
                  <span className="font-serif font-bold text-sm text-gold">
                    ₹{currentCake.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] text-chocolate/60">({currentCake.servings})</span>
                </div>
              </div>
            </div>

            {/* Cake Selector (if user wants to switch) */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-chocolate/70 block mb-1.5">
                Choose Cake:
              </label>
              <select
                value={selectedCakeId}
                onChange={(e) => setSelectedCakeId(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gold/30 bg-white text-cocoa focus:outline-none focus:border-gold"
              >
                {SIGNATURE_CAKES.map((cake) => (
                  <option key={cake.id} value={cake.id}>
                    {cake.name} — ₹{cake.price.toLocaleString('en-IN')}
                  </option>
                ))}
              </select>
            </div>

            {/* Weight / Size & Occasion */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-chocolate/70 block mb-1.5">
                  Size / Weight:
                </label>
                <select
                  value={selectedWeight}
                  onChange={(e) => setSelectedWeight(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-gold/30 bg-white text-cocoa focus:outline-none focus:border-gold"
                >
                  <option>0.5 kg (Serves 3-4)</option>
                  <option>1.0 kg (Serves 6-8)</option>
                  <option>1.5 kg (Serves 10-12)</option>
                  <option>2.0 kg (Serves 14-16)</option>
                  <option>Custom Multi-Tier (Wedding / Large Event)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-chocolate/70 block mb-1.5">
                  Celebration Occasion:
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-gold/30 bg-white text-cocoa focus:outline-none focus:border-gold"
                >
                  <option>Birthday Celebration</option>
                  <option>Romantic Anniversary</option>
                  <option>Wedding Reception</option>
                  <option>Baby Shower / Welcome</option>
                  <option>Afternoon Tea / Just Because</option>
                </select>
              </div>
            </div>

            {/* Plaque Message */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-chocolate/70 block mb-1.5">
                Hand-Piped Chocolate Plaque Message (Optional):
              </label>
              <input
                type="text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                maxLength={45}
                placeholder="e.g. Happy Birthday Tanya! / Forever & Always"
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-gold/30 bg-white text-cocoa focus:outline-none focus:border-gold"
              />
              <span className="text-[10px] text-chocolate/50 block text-right mt-0.5">
                {customMessage.length}/45 characters
              </span>
            </div>

            {/* Direct Action Buttons: WhatsApp & Call */}
            <div className="pt-2 space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-widest text-center text-chocolate/60">
                Choose How You Would Like to Order
              </div>

              {/* 1. WhatsApp Button (Green & Gold Luxury) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm tracking-wide uppercase shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 transform hover:-translate-y-0.5 group"
              >
                <MessageCircle className="w-5 h-5 fill-white text-white group-hover:scale-110 transition-transform" />
                <span>Order on WhatsApp (Instant Response)</span>
              </a>

              {/* 2. Direct Call Button */}
              <a
                href={CONTACT_INFO.phoneCallUrl}
                className="w-full py-4 px-6 rounded-2xl bg-chocolate hover:bg-cocoa text-cream-100 font-bold text-xs sm:text-sm tracking-wide uppercase shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex items-center justify-center space-x-3 border border-gold/40 transform hover:-translate-y-0.5 group"
              >
                <Phone className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                <span>Call to Order: {CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Operating Hours & Assurances */}
            <div className="pt-3 border-t border-gold/20 space-y-2 text-xs text-chocolate/75">
              <div className="flex items-center space-x-2 text-[11px] sm:text-xs">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>Concierge Hours: <strong>{CONTACT_INFO.hours}</strong></span>
              </div>
              <div className="flex items-center space-x-2 text-[11px] sm:text-xs">
                <CheckCircle2 className="w-4 h-4 text-rose shrink-0" />
                <span>Average WhatsApp reply time: <strong>under 5 minutes</strong></span>
              </div>
              <div className="flex items-center space-x-2 text-[11px] sm:text-xs">
                <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                <span>Chilled temperature-controlled white-glove doorstep delivery</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
