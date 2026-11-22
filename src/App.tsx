import React from 'react';
import { CartProvider } from './context/CartContext';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureCakes } from './components/SignatureCakes';
import { InteractiveShowcase } from './components/InteractiveShowcase';
import { BrandStory } from './components/BrandStory';
import { IngredientsSection } from './components/IngredientsSection';
import { Testimonials } from './components/Testimonials';
import { InstagramGallery } from './components/InstagramGallery';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { QuickViewModal } from './components/QuickViewModal';
import { OrderCelebrationModal } from './components/OrderCelebrationModal';
import { SearchModal } from './components/SearchModal';

export const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="relative min-h-screen bg-cream-100 text-cocoa selection:bg-rose/30 selection:text-chocolate font-sans overflow-x-hidden">
        {/* Scroll Progress Bar at the very top */}
        <ScrollProgress />

        {/* Global Navigation */}
        <Navbar />

        {/* 1. Hero Section — Cinematic First Impression */}
        <Hero />

        {/* 2. Signature Cakes Section — Made to Melt Hearts */}
        <SignatureCakes />

        {/* 3. Interactive Cake Showcase — Made for Your Moments */}
        <InteractiveShowcase />

        {/* 4. Brand Story Section — The Art of Baking, The Heart of Celebrating */}
        <BrandStory />

        {/* 5. Ingredients & Craftsmanship Section — Only the Good Stuff. Always. */}
        <IngredientsSection />

        {/* 6. Testimonials Section — Sweet Words, Happy Hearts */}
        <Testimonials />

        {/* 7. Instagram / Gallery Section — A Little Taste of Our World */}
        <InstagramGallery />

        {/* 8. FAQ Section — Frequently Asked Confections */}
        <FAQSection />

        {/* 9. CTA Section — Your Celebration Deserves a Sweet Beginning */}
        <CTASection />

        {/* 10. Premium Footer */}
        <Footer />

        {/* Modals & Dialogs */}
        <QuickViewModal />
        <OrderCelebrationModal />
        <SearchModal />
      </div>
    </CartProvider>
  );
};

export default App;
