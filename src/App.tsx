import React from 'react';
import { CartProvider } from './context/CartContext';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureCakes } from './components/SignatureCakes';
import { InteractiveShowcase } from './components/InteractiveShowcase';
import { HallBookingSection } from './components/HallBookingSection';
import { BrandStory } from './components/BrandStory';
import { IngredientsSection } from './components/IngredientsSection';
import { Testimonials } from './components/Testimonials';
import { InstagramGallery } from './components/InstagramGallery';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { QuickViewModal } from './components/QuickViewModal';
import { OrderCelebrationModal } from './components/OrderCelebrationModal';
import { BookHallModal } from './components/BookHallModal';
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

        {/* 4. Book Private Hall for Birthday Celebration with Cake */}
        <HallBookingSection />

        {/* 5. Brand Story Section — The Art of Baking, The Heart of Celebrating */}
        <BrandStory />

        {/* 6. Ingredients & Craftsmanship Section — Only the Good Stuff. Always. */}
        <IngredientsSection />

        {/* 7. Testimonials Section — Sweet Words, Happy Hearts */}
        <Testimonials />

        {/* 8. Instagram / Gallery Section — A Little Taste of Our World */}
        <InstagramGallery />

        {/* 9. FAQ Section — Frequently Asked Confections */}
        <FAQSection />

        {/* 10. CTA Section — Your Celebration Deserves a Sweet Beginning */}
        <CTASection />

        {/* 11. Premium Footer */}
        <Footer />

        {/* Modals & Dialogs */}
        <QuickViewModal />
        <OrderCelebrationModal />
        <BookHallModal />
        <SearchModal />
      </div>
    </CartProvider>
  );
};

export default App;
