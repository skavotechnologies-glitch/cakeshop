import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Eye, Sparkles, Heart, ArrowRight } from 'lucide-react';
import { SIGNATURE_CAKES } from '../data/cakes';
import { useOrder } from '../context/CartContext';
import { CONTACT_INFO } from '../utils/contact';

export const SignatureCakes: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'chocolate' | 'berry' | 'classic'>('all');
  const { setQuickViewCake, openOrderWithCake, openGeneralOrder } = useOrder();
  const [likedCakes, setLikedCakes] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedCakes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredCakes = SIGNATURE_CAKES.filter((cake) => {
    if (filter === 'all') return true;
    if (filter === 'chocolate') return cake.flavors.some((f) => f.toLowerCase().includes('chocolate') || f.toLowerCase().includes('cocoa'));
    if (filter === 'berry') return cake.flavors.some((f) => f.toLowerCase().includes('strawberr') || f.toLowerCase().includes('rose') || f.toLowerCase().includes('berry'));
    if (filter === 'classic') return cake.flavors.some((f) => f.toLowerCase().includes('vanilla') || f.toLowerCase().includes('caramel'));
    return true;
  });

  return (
    <section id="signature-cakes" className="py-20 sm:py-28 bg-cream-50 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-ivory rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-rose/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-ivory border border-gold/30 text-chocolate text-[11px] font-semibold tracking-[0.2em] uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>The Signature Collection</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cocoa tracking-tight"
          >
            Made to Melt Hearts
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-chocolate/80 font-normal leading-relaxed"
          >
            "Every cake is a little masterpiece, baked fresh and decorated with care."
          </motion.p>

          {/* Filter Pills */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: 'all', label: 'All Signatures' },
              { id: 'berry', label: 'Berry & Rose' },
              { id: 'chocolate', label: 'Grand Cru Cocoa' },
              { id: 'classic', label: 'Bourbon Vanilla' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  filter === tab.id
                    ? 'bg-chocolate text-cream-100 shadow-md border border-gold/40'
                    : 'bg-white/80 text-chocolate/70 hover:text-cocoa hover:bg-cream-200 border border-gold/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4+ Signature Cake Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredCakes.map((cake, index) => (
            <motion.div
              key={cake.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gold/25 shadow-luxury hover:shadow-luxury-hover transition-all duration-500 flex flex-col justify-between"
            >
              {/* Product Image Container */}
              <div className="relative overflow-hidden aspect-[4/3] bg-cream-200">
                <img
                  src={cake.image}
                  alt={cake.name}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Badge */}
                {cake.badge && (
                  <div className="absolute top-3 left-3 bg-cocoa/85 backdrop-blur-md text-cream-100 text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-gold/30">
                    {cake.badge}
                  </div>
                )}

                {/* Favorite button */}
                <button
                  onClick={(e) => toggleLike(cake.id, e)}
                  className="absolute top-3 right-3 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-rose shadow-md hover:bg-white transition-all"
                  aria-label="Add to favorites"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      likedCakes[cake.id] ? 'fill-rose text-rose' : 'text-chocolate/60'
                    }`}
                  />
                </button>

                {/* Quick View Button Overlay */}
                <div className="absolute inset-0 bg-cocoa/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <button
                    onClick={() => setQuickViewCake(cake)}
                    className="px-4 py-2 rounded-full bg-white text-chocolate text-xs font-semibold tracking-wider uppercase shadow-lg flex items-center space-x-1.5 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 hover:bg-cream-100"
                  >
                    <Eye className="w-3.5 h-3.5 text-gold" />
                    <span>Quick View</span>
                  </button>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Rating & Reviews */}
                  <div className="flex items-center space-x-1 mb-1.5">
                    <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                    <span className="text-xs font-bold text-chocolate">{cake.rating}</span>
                    <span className="text-[11px] text-chocolate/50">({cake.reviewsCount})</span>
                  </div>

                  {/* Cake Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-cocoa group-hover:text-chocolate transition-colors">
                    {cake.name}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-1.5 text-xs text-chocolate/75 line-clamp-2 leading-relaxed">
                    {cake.description}
                  </p>

                  {/* Flavor badges */}
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {cake.flavors.slice(0, 2).map((flavor, i) => (
                      <span
                        key={i}
                        className="text-[9px] sm:text-[10px] bg-cream-200/80 text-chocolate px-2 py-0.5 rounded-full border border-gold/20"
                      >
                        {flavor}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Single Clean Action Button */}
                <div className="mt-5 pt-3.5 border-t border-gold/20 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-chocolate/50 block">Price</span>
                    <div className="flex items-baseline space-x-1.5">
                      <span className="font-serif font-bold text-base sm:text-lg text-cocoa">
                        ₹{cake.price.toLocaleString('en-IN')}
                      </span>
                      {cake.originalPrice && (
                        <span className="text-xs text-chocolate/40 line-through">
                          ₹{cake.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Single Clean Order Button */}
                  <button
                    onClick={() => openOrderWithCake(cake)}
                    className="px-4 py-2.5 rounded-full bg-chocolate text-cream-100 hover:bg-cocoa text-xs font-semibold tracking-wider uppercase shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-1.5 border border-gold/30 group/btn"
                  >
                    <span>Order</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clean Catalog Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-ivory/90 border border-gold/30 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-sm"
        >
          <div className="flex items-center space-x-3.5 sm:space-x-4 text-center md:text-left">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base sm:text-lg text-cocoa">
                Looking for a Custom Tier or Event Gateau?
              </h4>
              <p className="text-xs sm:text-sm text-chocolate/75">
                Our master patissier designs bespoke wedding cakes, anniversary monuments, and corporate dessert tables.
              </p>
            </div>
          </div>

          <button
            onClick={openGeneralOrder}
            className="px-6 py-3 rounded-full bg-chocolate text-cream-100 text-xs font-semibold tracking-wider uppercase hover:bg-cocoa transition-all shrink-0 border border-gold/30 flex items-center space-x-2"
          >
            <span>Custom Order Inquiry</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
