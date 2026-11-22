import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Clock, Cake as CakeIcon, Gift, Music, Camera, Check, ArrowRight, Phone } from 'lucide-react';
import { useOrder } from '../context/CartContext';
import { CONTACT_INFO } from '../utils/contact';

export interface HallPackage {
  id: string;
  name: string;
  badge?: string;
  guestCount: string;
  cakeIncluded: string;
  duration: string;
  price: string;
  description: string;
  features: string[];
}

export const HALL_PACKAGES: HallPackage[] = [
  {
    id: 'petite',
    name: 'Petite Birthday Salon',
    badge: 'Intimate Gathering',
    guestCount: 'Up to 15 Guests',
    cakeIncluded: '2.0 kg Artisan Cake Included',
    duration: '3 Hours Private Access',
    price: '₹14,999',
    description: 'Perfect for cozy family birthdays, children’s milestone parties, or sweet-sixteen gatherings.',
    features: [
      '2.0 kg Signature Cake of your choice included',
      'Personalized welcome easel & balloon arch',
      'French Macaron tower & beverage service',
      'Ambient background playlist & party lighting',
      'Dedicated celebration host on-site'
    ]
  },
  {
    id: 'grand',
    name: 'Grand Birthday Atelier',
    badge: 'Most Popular',
    guestCount: '15 to 40 Guests',
    cakeIncluded: '4.0 kg Couture 2-Tier Cake Included',
    duration: '4 Hours Private Access',
    price: '₹29,999',
    description: 'Our signature banquet experience with complete gourmet dessert buffet and custom floral stage decor.',
    features: [
      '4.0 kg Bespoke 2-Tier Celebration Cake included',
      'Full French Dessert Bar (Eclairs, Tartlets & Petit Fours)',
      'Customized floral backdrop & neon photo station',
      'Surround sound acoustics & party party lighting',
      'Complimentary champagne or sparkling fruit toast',
      'Cake-cutting ceremony led by our pastry chef'
    ]
  },
  {
    id: 'royal',
    name: 'Royal Jubilee Ballroom',
    badge: 'Haute Confectionery',
    guestCount: '40 to 75 Guests',
    cakeIncluded: '7.0 kg 3-Tier Monument with 24K Gold',
    duration: 'Full Evening Exclusive Venue Access',
    price: '₹54,999',
    description: 'A lavish gala celebration with complete venue buyout, live chef decorating show, and keepsake guest gifts.',
    features: [
      '7.0 kg 3-Tier Architectural Cake with edible 24K gold',
      'Live pastry finishing & blowtorch show by Head Chef',
      'Gourmet savory & sweet banquet catering',
      'Professional photographer for 2 hours included',
      'Personalized keepsake dessert boxes for every guest',
      'Valet parking & white-glove butler service'
    ]
  }
];

export const HallBookingSection: React.FC = () => {
  const { openHallBooking } = useOrder();

  return (
    <section id="celebration-hall" className="py-24 sm:py-32 bg-ivory/70 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-rose/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cream-100 border border-gold/30 text-chocolate text-[11px] font-semibold tracking-[0.2em] uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Private Venue & Confectionery Banquet</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-cocoa tracking-tight"
          >
            Book Our Private Hall for Your <br className="hidden sm:inline" />
            <span className="text-rose italic font-normal">Birthday Celebration</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base md:text-lg text-chocolate/80 font-normal leading-relaxed"
          >
            Celebrate your special milestone in an exclusive Parisian-style salon. Every reservation includes our handcrafted showstopper birthday cake, exquisite decor, and seamless atelier hospitality.
          </motion.p>
        </div>

        {/* Visual Hall Atmosphere Showcase (2-Column editorial preview) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 bg-white/90 rounded-[2.5rem] p-6 sm:p-10 border border-gold/30 shadow-luxury">
          {/* Images */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-md group">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
                alt="Maison Private Celebration Hall Banquet Table"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop"
                  alt="Birthday Celebration Cake and Balloons"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop"
                  alt="Gourmet Dessert Buffet Table"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Highlights & Inclusions */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
            <div className="inline-block px-3 py-1 rounded-full bg-gold/20 text-chocolate text-[10px] font-bold tracking-wider uppercase self-start">
              All-Inclusive Birthday Packages
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cocoa leading-tight">
              A Complete Celebration, Zero Stress for You
            </h3>

            <p className="text-xs sm:text-sm text-chocolate/80 leading-relaxed">
              From the moment you step into the atelier, everything is taken care of: the table setting, custom mood lighting, curated playlist, gourmet savory bites, and the dramatic cake reveal.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-chocolate/85">
              <div className="flex items-center space-x-2">
                <CakeIcon className="w-4 h-4 text-gold shrink-0" />
                <span>Showstopper Cake Included</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-gold shrink-0" />
                <span>Custom Balloon & Floral Decor</span>
              </div>
              <div className="flex items-center space-x-2">
                <Music className="w-4 h-4 text-gold shrink-0" />
                <span>Acoustic Sound & Lighting</span>
              </div>
              <div className="flex items-center space-x-2">
                <Camera className="w-4 h-4 text-gold shrink-0" />
                <span>Photo Station & Keepsakes</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => openHallBooking('Grand Birthday Atelier (15-40 Guests)')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-chocolate text-cream-100 hover:bg-cocoa text-xs font-semibold uppercase tracking-wider shadow-luxury transition-all duration-300 flex items-center justify-center space-x-2 border border-gold/30"
              >
                <span>Reserve The Hall for Your Birthday</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Birthday Hall Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {HALL_PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between border transition-all duration-500 relative ${
                pkg.id === 'grand'
                  ? 'bg-chocolate text-cream-100 border-gold shadow-2xl transform lg:-translate-y-2'
                  : 'bg-white/95 text-cocoa border-gold/30 shadow-luxury hover:shadow-luxury-hover'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div
                  className={`inline-block self-start px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider mb-4 ${
                    pkg.id === 'grand'
                      ? 'bg-gold text-cocoa'
                      : 'bg-ivory text-chocolate border border-gold/30'
                  }`}
                >
                  {pkg.badge}
                </div>
              )}

              <div>
                <h4 className="font-serif text-2xl font-bold mb-1">{pkg.name}</h4>
                <p
                  className={`text-xs mb-4 ${
                    pkg.id === 'grand' ? 'text-cream-300' : 'text-chocolate/70'
                  }`}
                >
                  {pkg.description}
                </p>

                {/* Price */}
                <div className="py-4 border-y border-gold/25 mb-5">
                  <div className="text-[10px] uppercase tracking-wider opacity-60">Package Price</div>
                  <div className="flex items-baseline space-x-2">
                    <span className="font-serif font-bold text-2xl sm:text-3xl text-gold">
                      {pkg.price}
                    </span>
                    <span className="text-xs opacity-75">all-inclusive</span>
                  </div>
                </div>

                {/* Key Meta Pills */}
                <div className="space-y-2 mb-6 text-xs">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gold shrink-0" />
                    <span className="font-semibold">{pkg.guestCount}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CakeIcon className="w-4 h-4 text-gold shrink-0" />
                    <span className="font-semibold">{pkg.cakeIncluded}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gold shrink-0" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-2.5 mb-8 text-xs">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-2.5">
                      <div className="w-4 h-4 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={pkg.id === 'grand' ? 'text-cream-200' : 'text-chocolate/85'}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => openHallBooking(`${pkg.name} (${pkg.guestCount})`)}
                className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 ${
                  pkg.id === 'grand'
                    ? 'bg-gold text-cocoa hover:bg-gold-light shadow-gold-glow'
                    : 'bg-chocolate text-cream-100 hover:bg-cocoa border border-gold/30'
                }`}
              >
                <span>Book This Package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Venue Concierge Notice */}
        <div className="mt-14 p-6 sm:p-7 rounded-3xl bg-cream-100 border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-serif font-bold text-sm sm:text-base text-cocoa">
                Need a Custom Date or Private Tour of the Hall?
              </h5>
              <p className="text-xs text-chocolate/75">
                Our event director is available to arrange an on-site tasting and salon walkthrough.
              </p>
            </div>
          </div>

          <a
            href={CONTACT_INFO.phoneCallUrl}
            className="px-6 py-2.5 rounded-full border border-chocolate/30 hover:bg-chocolate hover:text-cream-100 text-chocolate text-xs font-semibold tracking-wider uppercase transition-colors shrink-0"
          >
            Call: {CONTACT_INFO.phoneDisplay}
          </a>
        </div>

      </div>
    </section>
  );
};
