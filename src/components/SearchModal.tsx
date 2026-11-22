import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Star, Eye, Sparkles } from 'lucide-react';
import { SIGNATURE_CAKES } from '../data/cakes';
import { useOrder } from '../context/CartContext';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, setQuickViewCake, openOrderWithCake } = useOrder();
  const [searchTerm, setSearchTerm] = useState('');

  if (!isSearchOpen) return null;

  const quickTags = ['Strawberry', 'Chocolate', 'Velvet', 'Vanilla', 'Rose', 'Eggless'];

  const filteredCakes = SIGNATURE_CAKES.filter((cake) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      cake.name.toLowerCase().includes(term) ||
      cake.tagline.toLowerCase().includes(term) ||
      cake.description.toLowerCase().includes(term) ||
      cake.flavors.some((f) => f.toLowerCase().includes(term)) ||
      cake.dietary.some((d) => d.toLowerCase().includes(term))
    );
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 p-3 sm:p-6 bg-cocoa/75 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="bg-cream-100 rounded-3xl max-w-2xl w-full shadow-2xl border border-gold/30 overflow-hidden relative max-h-[85vh] flex flex-col"
        >
          {/* Search Input Bar */}
          <div className="p-3.5 sm:p-5 border-b border-gold/20 flex items-center space-x-3 bg-white/70">
            <Search className="w-5 h-5 text-gold shrink-0" />
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search cakes by name, flavor (e.g. Belgian chocolate, strawberry)..."
              className="w-full text-xs sm:text-sm md:text-base bg-transparent text-cocoa placeholder:text-chocolate/40 focus:outline-none"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-xs text-chocolate/50 hover:text-chocolate shrink-0"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-1.5 rounded-full hover:bg-cream-200 text-chocolate transition-colors shrink-0"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Filter Tags */}
          <div className="px-4 sm:px-6 py-2.5 bg-ivory border-b border-gold/20 flex items-center space-x-2 overflow-x-auto text-xs">
            <span className="text-chocolate/60 shrink-0 font-medium text-[11px] sm:text-xs">Trending:</span>
            {quickTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchTerm(tag)}
                className="px-2.5 sm:px-3 py-1 rounded-full bg-cream-200 hover:bg-chocolate hover:text-cream-100 text-chocolate text-[10px] sm:text-[11px] font-medium transition-colors shrink-0 border border-gold/20"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Results List */}
          <div className="overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4 flex-1">
            {filteredCakes.length === 0 ? (
              <div className="text-center py-12 text-chocolate/60">
                <p>No cakes found matching "{searchTerm}".</p>
                <p className="text-xs mt-1">Try searching for "chocolate", "vanilla", or "strawberry".</p>
              </div>
            ) : (
              filteredCakes.map((cake) => (
                <div
                  key={cake.id}
                  className="p-3 sm:p-3.5 rounded-2xl bg-white border border-gold/20 hover:border-gold/40 shadow-sm flex items-center space-x-3 sm:space-x-4 transition-all"
                >
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover shrink-0 border border-cream-200"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-1.5">
                      <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                      <span className="text-xs font-bold text-chocolate">{cake.rating}</span>
                      <h4 className="font-serif font-bold text-xs sm:text-sm text-cocoa truncate ml-1">
                        {cake.name}
                      </h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-chocolate/70 truncate mt-0.5">
                      {cake.tagline}
                    </p>
                    <span className="font-serif font-bold text-xs sm:text-sm text-gold">
                      ₹{cake.price.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Actions: Quick View & Order */}
                  <div className="flex items-center space-x-2 shrink-0">
                    <button
                      onClick={() => {
                        setQuickViewCake(cake);
                        setIsSearchOpen(false);
                      }}
                      className="p-2 rounded-full border border-gold/30 hover:bg-cream-200 text-chocolate text-xs"
                      title="Quick View"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        setIsSearchOpen(false);
                        openOrderWithCake(cake);
                      }}
                      className="px-3.5 py-1.5 rounded-full bg-chocolate text-cream-100 hover:bg-cocoa text-xs font-semibold uppercase tracking-wider flex items-center space-x-1"
                    >
                      <Sparkles className="w-3 h-3 text-gold" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
