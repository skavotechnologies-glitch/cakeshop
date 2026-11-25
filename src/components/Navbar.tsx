import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, Sparkles } from 'lucide-react';
import { useOrder } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setIsSearchOpen, openGeneralOrder } = useOrder();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Our Cakes', href: '#signature-cakes' },
    { name: 'Collections', href: '#interactive-showcase' },
    { name: 'Private Hall', href: '#celebration-hall' },
    { name: 'Our Story', href: '#brand-story' },
    { name: 'Ingredients', href: '#ingredients' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-cream-100/95 backdrop-blur-md shadow-sm border-b border-gold/20 py-3 sm:py-3.5'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-4 sm:py-5 lg:py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Brand Logo with French crest (Strictly Single-Line) */}
            <a
              href="#"
              className="group flex items-center space-x-2.5 sm:space-x-3 text-left focus:outline-none shrink-0"
            >
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isScrolled
                    ? 'border-gold/60 bg-cream-200/60 text-gold group-hover:border-gold group-hover:scale-105'
                    : 'border-gold bg-black/40 text-gold shadow-md group-hover:scale-105'
                }`}
              >
                <span className="font-serif font-bold text-xs tracking-widest">M</span>
              </div>
              <div className="flex flex-col shrink-0">
                <span
                  className={`font-serif tracking-[0.2em] sm:tracking-[0.22em] text-base sm:text-lg lg:text-xl font-bold uppercase transition-colors whitespace-nowrap ${
                    isScrolled
                      ? 'text-cocoa group-hover:text-chocolate'
                      : 'text-white group-hover:text-gold drop-shadow-md'
                  }`}
                >
                  Maison de Cake
                </span>
                <span
                  className={`text-[8px] sm:text-[9px] tracking-[0.25em] uppercase font-medium hidden xs:block whitespace-nowrap ${
                    isScrolled ? 'text-chocolate/70' : 'text-gold-light/90 drop-shadow'
                  }`}
                >
                  Parisian Atelier · Est. With Love
                </span>
              </div>
            </a>

            {/* Center: Desktop Navigation Links (All Strictly Single-Line & Expanded Spacing) */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8 shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative group text-xs xl:text-[13px] font-semibold tracking-wider uppercase py-1 whitespace-nowrap shrink-0 transition-colors ${
                    isScrolled
                      ? 'text-chocolate/85 hover:text-cocoa'
                      : 'text-white/95 hover:text-gold drop-shadow-sm'
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold group-hover:w-full transition-all duration-300 ease-out" />
                </a>
              ))}
            </nav>

            {/* Right: Clean, Minimal Actions (Single-Line) */}
            <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 rounded-full transition-all shrink-0 ${
                  isScrolled
                    ? 'text-chocolate/80 hover:text-cocoa hover:bg-cream-200/80'
                    : 'text-white hover:text-gold hover:bg-white/10'
                }`}
                aria-label="Search cakes"
                title="Search cakes"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Single Luxury Order Button */}
              <button
                onClick={openGeneralOrder}
                className={`inline-flex items-center space-x-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap shrink-0 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg ${
                  isScrolled
                    ? 'bg-chocolate text-cream-100 hover:bg-cocoa border border-gold/30'
                    : 'bg-gold text-cocoa hover:bg-gold-light shadow-gold-glow'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Order Cake</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 rounded-full transition-colors ${
                  isScrolled ? 'text-chocolate hover:text-cocoa' : 'text-white hover:text-gold'
                }`}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[60px] bg-cream-100/98 backdrop-blur-lg z-30 lg:hidden flex flex-col justify-between p-6 overflow-y-auto border-t border-gold/20"
          >
            <div className="space-y-6 pt-2">
              <div className="text-[11px] uppercase tracking-[0.2em] text-chocolate/50 font-semibold mb-2">
                Navigation
              </div>
              <div className="flex flex-col space-y-3.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xl font-serif font-medium text-cocoa hover:text-rose transition-colors py-1 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-gold">→</span>
                  </a>
                ))}
              </div>

              {/* Clean order button in mobile menu */}
              <div className="pt-6 border-t border-gold/20">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openGeneralOrder();
                  }}
                  className="w-full py-3.5 rounded-full bg-chocolate text-cream-100 font-semibold text-xs sm:text-sm tracking-wider uppercase text-center shadow-md flex items-center justify-center space-x-2 border border-gold/30"
                >
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span>Order Your Celebration Cake</span>
                </button>
              </div>
            </div>

            <div className="pt-6 pb-2 text-center text-xs text-chocolate/60 border-t border-gold/15 mt-4">
              <p className="font-serif italic text-cocoa">Maison de Cake · Baked to Remember</p>
              <p className="mt-1">Mon – Sat: 9:00 AM – 8:00 PM</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
