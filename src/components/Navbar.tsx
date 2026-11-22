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
      setIsScrolled(window.scrollY > 25);
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
            : 'bg-transparent py-5 lg:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo with French crest */}
            <a
              href="#"
              className="group flex items-center space-x-2.5 sm:space-x-3 text-left focus:outline-none"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gold/60 flex items-center justify-center bg-cream-200/60 text-gold group-hover:border-gold group-hover:scale-105 transition-all duration-300">
                <span className="font-serif font-bold text-xs tracking-widest text-chocolate">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.2em] sm:tracking-[0.25em] text-base sm:text-lg lg:text-xl font-bold text-cocoa uppercase group-hover:text-chocolate transition-colors">
                  Maison de Cake
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-chocolate/70 font-medium hidden xs:block">
                  Parisian Atelier · Est. With Love
                </span>
              </div>
            </a>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative group text-xs xl:text-sm font-medium tracking-wide text-chocolate/85 hover:text-cocoa transition-colors py-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold group-hover:w-full transition-all duration-300 ease-out" />
                </a>
              ))}
            </nav>

            {/* Right: Clean, Minimal Actions */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-chocolate/80 hover:text-cocoa hover:bg-cream-200/80 rounded-full transition-all"
                aria-label="Search cakes"
                title="Search cakes"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Single Luxury Order Button */}
              <button
                onClick={openGeneralOrder}
                className="inline-flex items-center space-x-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-chocolate text-cream-100 text-xs font-semibold tracking-wider uppercase hover:bg-cocoa shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 border border-gold/30"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Order Cake</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-chocolate hover:text-cocoa rounded-full"
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

              {/* Single clean order button in mobile menu */}
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
