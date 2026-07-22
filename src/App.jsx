import React, { useState } from 'react';

// Import global layouts and sections
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import heroLuxuryImg from './assets/hero_luxury.png';
import CategoryGrid from './components/CategoryGrid';
import USPStrip from './components/USPStrip';
import Bestsellers from './components/Bestsellers';
import TopPicks from './components/TopPicks';
import FeatureBlocks from './components/FeatureBlocks';
import PromoSections from './components/PromoSections';
import BrandStories from './components/BrandStories';
import Testimonials from './components/Testimonials';
import BrandVideo from './components/BrandVideo';
import MilestoneBanner from './components/MilestoneBanner';
import SupportStrip from './components/SupportStrip';
import Footer from './components/Footer';

// Import overlays
import { CartDrawer, SearchDrawer, QuickViewModal } from './components/Drawers';

function App() {
  // Cart, Search and Quick View States
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  // Cart Operations
  const handleAddToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevItems, { id: product.id, title: product.title, price: product.price, image: product.image, quantity }];
    });
    // Automatically open the cart drawer to provide direct feedback to the user
    setIsCartOpen(true);
  };

  const handleUpdateQty = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Quick View Trigger
  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  // Search Submit Trigger
  const handleSearchSubmit = (query) => {
    alert(`Searching for "${query}" in ANNETTE PURE collection... (This is a frontend demonstration)`);
    setIsSearchOpen(false);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="app-container">
      {/* 1. Scrolling announcement bar at the top */}
      <AnnouncementBar />

      {/* 2. Sticky primary navigation and logo */}
      <Header 
        cartCount={totalCartCount} 
        onCartOpen={() => setIsCartOpen(true)}
        onSearchOpen={() => setIsSearchOpen(true)}
      />

      {/* 3. Luxury Hero Section */}
      <section 
        className="hero-section" 
        style={{ backgroundImage: `url(${heroLuxuryImg})` }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-eyebrow">Handcrafted & Sustainable</span>
          <h1 className="hero-title">Annette Pure</h1>
          <p className="hero-tagline">
            Elegance translated through scent. Hand-poured organic soy candles.
          </p>
          <a href="#bestsellers" className="btn-luxury-cta">
            Shop Now
          </a>
        </div>
      </section>

      <main>
        {/* 4. Shop by Category (3-column grid) */}
        <CategoryGrid />

        {/* 6. USP icon strip row (4 columns) */}
        <USPStrip />

        {/* 5. Bestsellers carousel (8 products with quick view) */}
        <Bestsellers 
          onQuickView={handleQuickView}
          onAddToCart={handleAddToCart}
        />

        {/* 5 (PARENT). Top Picks for the Season showcase carousel */}
        <TopPicks />

        {/* 5.1 & 5.2. Split informational features (Founder's & Private Label) */}
        <FeatureBlocks />

        {/* 5.3 & 5.4 & 5.5. Promo seasonal banner & Boutique/Wellness grid tiles */}
        <PromoSections />

        {/* 13 & 14. Brand Stories (Craftsmanship & Philosophy split columns) */}
        <BrandStories />

        {/* 15. Customer reviews carousel (7 cards) */}
        <Testimonials />

        {/* 8. Brand video and mission statement block */}
        <BrandVideo />

        {/* 16. Anniversary milestone banner (stacked split columns) */}
        <MilestoneBanner />

        {/* 18. Support & trust payment method icons strip */}
        <SupportStrip />
      </main>

      {/* 19. Footer column structures and newsletter form */}
      <Footer />

      {/* Slide-out Cart Drawer from the right */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
      />

      {/* Slide-out Search Overlay from the top */}
      <SearchDrawer
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSearch={handleSearchSubmit}
      />

      {/* Centered Quick View Details Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default App;
