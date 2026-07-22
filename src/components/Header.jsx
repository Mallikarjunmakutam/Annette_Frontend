import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';

export default function Header({ cartCount, onCartOpen, onSearchOpen }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  // Track scroll position to trigger transparent-to-solid transitions
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAccountClick = () => {
    alert("Account log-in is a mock feature for this demo.");
  };

  const navLinks = [
    { 
      name: 'Candles', 
      link: '#bestsellers',
      dropdown: [
        { name: "Founder's", link: "#founders" },
        { name: "Luxury", link: "#seasonal" },
        { name: "For Him", link: "#founders" },
        { name: "Wellness", link: "#wellness" },
        { name: "Heirloom Artisan", link: "#story" },
        { name: "Heirloom Murano Glass", link: "#tiles" },
        { name: "Heirloom Tomato", link: "#tiles" },
        { name: "Travel", link: "#all" },
        { name: "Accessories", link: "#boutique" },
        { name: "Samples", link: "#samples" },
        { name: "Gift Card", link: "#giftcards" },
        { name: "View All", link: "#bestsellers" }
      ]
    },
    { name: 'Private Label', link: '#private-label' },
    { name: 'Sample Fragrances', link: '#samples' },
    { name: 'Boutique', link: '#boutique' },
    { name: 'Our Story', link: '#story' },
    { 
      name: 'Media', 
      link: '#blog',
      dropdown: [
        { name: 'Blog', link: '#blog' },
        { name: 'YouTube Podcast', link: '#podcast' }
      ]
    },
    { 
      name: 'Private Events & Gifting', 
      link: '#workshops',
      dropdown: [
        { name: 'Corporate Workshops', link: '#workshops' },
        { name: 'Corporate Gifting', link: '#corporate' },
        { name: 'Private Candle Workshops', link: '#workshops' }
      ]
    }
  ];

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        
        {/* Left Side: Brand Logo Wordmark with Elegant Flame Icon */}
        <div className="header-logo-group">
          {/* Mobile hamburger menu */}
          <button 
            className="icon-btn mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <a href="/" className="header-logo-container">
            <span className="logo-script-accent">A</span>
            <div className="logo-text-group">
              <span className="logo-wordmark">Nnette Pure</span>
              <span className="logo-submark">Candles</span>
            </div>
          </a>
        </div>

        {/* Center: Desktop Navigation Links with dropdown triggers */}
        <nav className="desktop-nav">
          <ul className="nav-menu">
            {navLinks.map((nav) => (
              <li 
                className={`nav-item ${activeLink === nav.name ? 'active' : ''} ${nav.dropdown ? 'has-dropdown' : ''}`} 
                key={nav.name}
                onClick={() => setActiveLink(nav.name)}
              >
                <a href={nav.link} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {nav.name}
                  {nav.dropdown && <span style={{ fontSize: '0.55rem', transition: 'transform 0.2s' }}>▼</span>}
                </a>
                
                {nav.dropdown && (
                  <ul className="nav-dropdown">
                    {nav.dropdown.map((sub) => (
                      <li key={sub.name}>
                        <a href={sub.link} className="dropdown-link">{sub.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side Actions: Search, Account, Cart + Luxury Shop Now CTA */}
        <div className="header-actions">
          <div className="header-icons">
            <button className="icon-btn" onClick={onSearchOpen} aria-label="Search collection">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className="icon-btn" onClick={handleAccountClick} aria-label="Customer account">
              <User size={20} strokeWidth={1.5} />
            </button>
            <button className="icon-btn" onClick={onCartOpen} aria-label="Shopping cart">
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && <span className="cart-count-badge">{cartCount}</span>}
            </button>
          </div>
          <a href="#bestsellers" className="btn-luxury-cta">
            Shop Now
          </a>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-menu" style={{
          position: 'fixed',
          top: '90px',
          left: 0,
          width: '100%',
          height: 'calc(100vh - 90px)',
          backgroundColor: 'var(--bg-primary)',
          borderTop: '1px solid var(--border-color)',
          zIndex: 990,
          overflowY: 'auto',
          padding: '30px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
            {navLinks.map((nav) => (
              <li key={nav.name} style={{ textAlign: 'left', borderBottom: '1px solid rgba(226, 221, 213, 0.3)', paddingBottom: '15px' }}>
                <a 
                  href={nav.link} 
                  onClick={() => {
                    if (!nav.dropdown) {
                      setActiveLink(nav.name);
                      setMobileMenuOpen(false);
                    }
                  }} 
                  style={{ 
                    fontSize: '0.9rem', 
                    letterSpacing: '0.15em', 
                    textTransform: 'uppercase', 
                    fontWeight: 600,
                    fontFamily: 'var(--font-heading)',
                    color: activeLink === nav.name ? 'var(--accent-gold)' : 'var(--text-main)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  {nav.name}
                </a>

                {nav.dropdown && (
                  <ul style={{ 
                    listStyle: 'none', 
                    paddingLeft: '10px', 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr', 
                    gap: '8px 15px', 
                    marginTop: '10px' 
                  }}>
                    {nav.dropdown.map((sub) => (
                      <li key={sub.name}>
                        <a 
                          href={sub.link} 
                          onClick={() => {
                            setActiveLink(nav.name);
                            setMobileMenuOpen(false);
                          }}
                          style={{ 
                            fontSize: '0.75rem', 
                            letterSpacing: '0.08em', 
                            textTransform: 'uppercase', 
                            color: 'var(--text-muted)',
                            display: 'block',
                            padding: '3px 0'
                          }}
                        >
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
