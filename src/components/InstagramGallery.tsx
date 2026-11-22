import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Heart, Sparkles, X, ExternalLink } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/cakes';
import { GalleryItem } from '../types';

export const InstagramGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <>
      <section id="gallery" className="py-24 sm:py-32 bg-cream-50 relative overflow-hidden">
        {/* Soft background ambient glow */}
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-ivory rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-ivory border border-gold/30 text-chocolate text-[11px] font-semibold tracking-[0.2em] uppercase mb-4"
            >
              <Instagram className="w-3.5 h-3.5 text-rose" />
              <span>@maisondecake · Social Atelier</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-cocoa tracking-tight"
            >
              A Little Taste of Our World
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-chocolate/80 font-normal leading-relaxed"
            >
              Tag us in your celebrations to be featured in our daily culinary gallery.
            </motion.p>
          </div>

          {/* Masonry / Asymmetrical 6-Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {GALLERY_ITEMS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedPhoto(item)}
                className={`group relative overflow-hidden rounded-3xl border border-gold/25 shadow-luxury cursor-pointer bg-cream-200 ${
                  item.aspect === 'tall' ? 'row-span-1 md:row-span-2 min-h-[280px] md:min-h-[380px]' : 'min-h-[200px] md:min-h-[240px]'
                }`}
              >
                {/* Image with smooth slow zoom */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Hover overlay with Instagram icon, likes, and caption */}
                <div className="absolute inset-0 bg-cocoa/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-cream-100">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider font-semibold bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                    <Instagram className="w-5 h-5 text-gold" />
                  </div>

                  <div>
                    <h4 className="font-serif font-bold text-sm sm:text-base leading-tight mb-2">
                      {item.title}
                    </h4>
                    <div className="flex items-center space-x-1.5 text-xs text-rose-light font-medium">
                      <Heart className="w-4 h-4 fill-rose text-rose" />
                      <span>{item.likes.toLocaleString()} likes</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social CTA */}
          <div className="mt-14 text-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-white text-chocolate border border-gold/30 hover:border-gold hover:bg-cream-200 shadow-luxury transition-all duration-300 font-medium text-xs sm:text-sm tracking-wider uppercase group"
            >
              <Instagram className="w-4 h-4 text-rose group-hover:scale-110 transition-transform" />
              <span>Follow Our Sweet Journey</span>
              <ExternalLink className="w-3.5 h-3.5 text-gold" />
            </a>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-cocoa/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-cream-100 rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl border border-gold/30"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-cocoa/70 text-white flex items-center justify-center hover:bg-cocoa transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[4/3] bg-cream-200 overflow-hidden">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider font-bold text-rose">
                    {selectedPhoto.category}
                  </span>
                  <div className="flex items-center space-x-1.5 text-xs text-chocolate font-bold">
                    <Heart className="w-4 h-4 fill-rose text-rose" />
                    <span>{selectedPhoto.likes.toLocaleString()}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-cocoa">
                  {selectedPhoto.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-chocolate/80">
                  Shared by our guests and pastry creators. Baked with fresh ingredients and styled with edible florals.
                </p>

                <div className="mt-6 pt-4 border-t border-gold/20 flex items-center justify-between">
                  <span className="text-xs text-chocolate/60">@maisondecake on Instagram</span>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-chocolate text-cream-100 text-xs font-semibold tracking-wider uppercase hover:bg-cocoa transition-colors"
                  >
                    View on Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
