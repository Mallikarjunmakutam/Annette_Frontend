import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="main-footer">
      <div className="footer-grid">
        
        {/* About column */}
        <div className="footer-column">
          <h4 className="footer-title">ANNETTE PURE</h4>
          <p className="footer-newsletter-text" style={{ paddingRight: 20 }}>
            Crafting premium, small-batch scented candles designed with intention and poured by hand. Elegance translated through scent.
          </p>
        </div>

        {/* Column 1: Quick Links */}
        <div className="footer-column">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#story">Our Story</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#testimonials">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#giftcards">Gift Cards</a></li>
          </ul>
        </div>

        {/* Column 2: Customer Services */}
        <div className="footer-column">
          <h4 className="footer-title">Customer Services</h4>
          <ul className="footer-links">
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#returns">Returns & Exchanges</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#shipping">Shipping Policy</a></li>
          </ul>
        </div>

        {/* Column 3: Newsletter Sign up */}
        <div className="footer-column">
          <h4 className="footer-title">Join The Annette Pure World</h4>
          <p className="footer-newsletter-text">
            Subscribe to receive updates, access to exclusive deals, and early product releases.
          </p>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-submit" aria-label="Subscribe to newsletter">
              <ArrowRight size={18} />
            </button>
          </form>
          {subscribed && (
            <p style={{ fontSize: '0.7rem', color: 'var(--accent-gold-dark)', marginTop: '-10px', marginBottom: '15px' }}>
              Thank you for subscribing! Welcome to our inner circle.
            </p>
          )}

          {/* Social Icons */}
          <div className="social-icons-row">
            <a href="https://facebook.com" className="social-icon-btn" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://instagram.com" className="social-icon-btn" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://twitter.com" className="social-icon-btn" target="_blank" rel="noreferrer" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="https://youtube.com" className="social-icon-btn" target="_blank" rel="noreferrer" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"><polygon points="10 15 15 12 10 9"/></path></svg>
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div>
          <select className="currency-selector" defaultValue="USD" aria-label="Select Currency">
            <option value="USD">USD $</option>
            <option value="CAD">CAD $</option>
            <option value="EUR">EUR €</option>
            <option value="GBP">GBP £</option>
            <option value="INR">INR ₹</option>
            <option value="JPY">JPY ¥</option>
            <option value="MXN">MXN $</option>
          </select>
        </div>
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} ANNETTE PURE. Handcrafted with Care in Southern California.
        </p>
      </div>
    </footer>
  );
}
