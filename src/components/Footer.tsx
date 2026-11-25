import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Send, CheckCircle, AlertCircle, Phone, MessageCircle, Mail, Clock, Instagram, Facebook, ArrowUp } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONTACT_INFO, getWhatsAppLink } from '../utils/contact';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setNewsletterStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }

    if (!emailRegex.test(email.trim())) {
      setNewsletterStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setNewsletterStatus('success');
    setErrorMessage('');
    setEmail('');

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.85 },
        colors: ['#D99A9C', '#C5A46D', '#FFF8F0'],
      });
    } catch (e) {}
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-cocoa text-cream-100 pt-16 sm:pt-20 pb-24 sm:pb-12 relative overflow-hidden border-t-2 border-gold/30">
      {/* Background Reference Video Layer in Footer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-20 z-0">
        <video
          src="/videos/hero-cake.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa via-cocoa/90 to-cocoa/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_35%,_rgba(38,21,16,0.95)_100%)]" />
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-chocolate/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-rose/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16 border-b border-cream-100/15">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center bg-chocolate text-gold">
                <span className="font-serif font-bold text-sm tracking-widest">M</span>
              </div>
              <span className="font-serif tracking-[0.25em] text-xl sm:text-2xl font-bold uppercase text-cream-100">
                Maison de Cake
              </span>
            </div>

            <p className="font-serif italic text-rose text-sm sm:text-base">
              "Made with love, served with sweetness."
            </p>

            <p className="text-xs sm:text-sm text-cream-300 leading-relaxed font-light max-w-sm">
              Artisan cakes, handcrafted Parisian desserts, and bespoke celebration gateaux created with passion. Order conveniently by phone call or WhatsApp.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-chocolate border border-gold/30 flex items-center justify-center text-gold hover:text-cream-100 hover:bg-gold hover:border-gold transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-chocolate border border-gold/30 flex items-center justify-center text-gold hover:text-cream-100 hover:bg-gold hover:border-gold transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-105 transition-all shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="font-serif font-bold text-xs sm:text-sm uppercase tracking-[0.2em] text-gold">
              Explore
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-cream-300">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#signature-cakes" className="hover:text-gold transition-colors">
                  Our Cakes
                </a>
              </li>
              <li>
                <a href="#interactive-showcase" className="hover:text-gold transition-colors">
                  Celebration Collections
                </a>
              </li>
              <li>
                <a href="#celebration-hall" className="hover:text-gold transition-colors">
                  Birthday Hall Booking
                </a>
              </li>
              <li>
                <a href="#brand-story" className="hover:text-gold transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#ingredients" className="hover:text-gold transition-colors">
                  Pure Ingredients
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold transition-colors">
                  Photo Atelier
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold transition-colors">
                  Confection FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Order by Calling & WhatsApp Column */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="font-serif font-bold text-xs sm:text-sm uppercase tracking-[0.2em] text-gold">
              Direct Phone & WhatsApp
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-cream-300">
              {/* Call Link */}
              <a
                href={CONTACT_INFO.phoneCallUrl}
                className="flex items-start space-x-3 p-2.5 rounded-xl bg-chocolate/50 border border-gold/25 hover:border-gold transition-colors group"
              >
                <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-bold text-cream-100">{CONTACT_INFO.phoneDisplay}</div>
                  <div className="text-[11px] text-cream-300/80">Tap to call our bakers directly</div>
                </div>
              </a>

              {/* WhatsApp Link */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 p-2.5 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 hover:border-[#25D366] transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-bold text-white">Chat on WhatsApp</div>
                  <div className="text-[11px] text-cream-200">Instant answers & order placement</div>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-start space-x-3 pt-1">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-cream-100">Monday – Saturday</div>
                  <div className="text-xs text-cream-300">9:00 AM – 8:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="font-serif font-bold text-xs sm:text-sm uppercase tracking-[0.2em] text-gold">
              The Sweet Letter
            </h4>
            <p className="text-xs text-cream-300 leading-relaxed">
              Subscribe to receive private invitations to secret menu tastings and holiday collections.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (newsletterStatus === 'error') setNewsletterStatus('idle');
                  }}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2.5 sm:py-3 rounded-full bg-chocolate/80 text-cream-100 text-xs placeholder:text-cream-300/50 border border-gold/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 p-1.5 sm:p-2 rounded-full bg-gold text-cocoa hover:bg-gold-light transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {newsletterStatus === 'error' && (
                <div className="flex items-center space-x-1.5 text-xs text-rose-light">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {newsletterStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-1.5 text-xs text-gold"
                >
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Bienvenue! You are on our VIP patisserie guest list.</span>
                </motion.div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-300/70 gap-3 sm:gap-4">
          <p className="flex items-center space-x-1 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Maison de Cake Atelier. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose fill-rose" />
            <span>Baked to Remember.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-xs uppercase tracking-wider text-gold hover:text-cream-100 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
