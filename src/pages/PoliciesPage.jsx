import React, { useState } from 'react';
import { ShieldCheck, Truck, RefreshCw, Lock, FileText } from 'lucide-react';

export default function PoliciesPage({ initialTab = 'returns', onNavigate }) {
  const [activeTab, setActiveTab] = useState(initialTab || 'returns');

  return (
    <div className="policies-page">
      
      {/* Hero Banner */}
      <section className="policies-hero">
        <div className="policies-hero-overlay" />
        <div className="policies-hero-content">
          <span className="policies-eyebrow">Customer Protection & Standards</span>
          <h1 className="policies-title">Policies & Happiness Guarantee</h1>
          <p className="policies-tagline">
            We are committed to total transparency, non-toxic craftsmanship, and providing a flawless shopping experience.
          </p>
        </div>
      </section>

      {/* Policy Tabs */}
      <div className="policies-tabs-bar">
        <div className="policies-tabs-container">
          <button 
            className={`policy-tab-btn ${activeTab === 'returns' ? 'active' : ''}`}
            onClick={() => setActiveTab('returns')}
          >
            <RefreshCw size={16} />
            <span>30-Day Returns & Guarantee</span>
          </button>
          
          <button 
            className={`policy-tab-btn ${activeTab === 'shipping' ? 'active' : ''}`}
            onClick={() => setActiveTab('shipping')}
          >
            <Truck size={16} />
            <span>Shipping & Delivery Policy</span>
          </button>
          
          <button 
            className={`policy-tab-btn ${activeTab === 'privacy' ? 'active' : ''}`}
            onClick={() => setActiveTab('privacy')}
          >
            <Lock size={16} />
            <span>Privacy Policy</span>
          </button>
          
          <button 
            className={`policy-tab-btn ${activeTab === 'terms' ? 'active' : ''}`}
            onClick={() => setActiveTab('terms')}
          >
            <FileText size={16} />
            <span>Terms of Service</span>
          </button>
        </div>
      </div>

      <div className="policies-content-container">
        
        {/* 1. RETURNS & HAPPINESS GUARANTEE */}
        {activeTab === 'returns' && (
          <div className="policy-doc-card">
            <h2>The 100% Happiness Guarantee & Returns Policy</h2>
            <p className="policy-last-updated">Last Updated: August 2026</p>

            <div className="policy-callout-box">
              <ShieldCheck size={24} />
              <div>
                <strong>Our Promise to You:</strong>
                <p>Fragrance is subjective and intimate. If you light an Annette Pure candle and the scent does not resonate with your sanctuary, we will exchange or refund it within 30 days—no hassle, no questions asked.</p>
              </div>
            </div>

            <h3>1. 30-Day Return Window</h3>
            <p>You have 30 calendar days from the date of package delivery to request an exchange or full refund. To be eligible, the candle must have more than 75% of its wax remaining and be in its original presentation vessel.</p>

            <h3>2. Complimentary Prepaid Return Labels</h3>
            <p>For all domestic U.S. returns, our concierge will issue a prepaid printable return label via email. Simply pack the vessel securely in its original box and drop it at any authorized carrier location.</p>

            <h3>3. Damaged or Broken in Transit</h3>
            <p>While we package our hand-blown vessels in heavy protective biodegradable packaging, accidents can occasionally happen during shipping. If your vessel arrives damaged, please email a photo to atelier@annettepure.com and we will immediately dispatch a replacement with priority overnight air at zero cost to you.</p>

            <h3>4. How to Initiate a Return</h3>
            <p>Contact our concierge team via our <button onClick={() => onNavigate('contact')} className="text-link">Contact Page</button> or call (888) 383-8934 with your order number.</p>
          </div>
        )}

        {/* 2. SHIPPING & DELIVERY */}
        {activeTab === 'shipping' && (
          <div className="policy-doc-card">
            <h2>Shipping & Delivery Policy</h2>
            <p className="policy-last-updated">Last Updated: August 2026</p>

            <h3>1. Complimentary U.S. Shipping</h3>
            <p>We are delighted to offer complimentary Standard Ground Shipping on all orders of $150 or more across all 50 U.S. states. For orders under $150, flat-rate standard shipping is $6.95.</p>

            <h3>2. Processing & Curing Time</h3>
            <p>Because all our candles are hand-poured and naturally cured in small batches, orders are prepared and dispatched within 1 to 2 business days from our Laguna Beach atelier.</p>

            <h3>3. Expedited Shipping Options</h3>
            <ul>
              <li><strong>Standard Ground (3-5 business days):</strong> $6.95 (Free on $150+)</li>
              <li><strong>Express 2-Day Air:</strong> $14.95</li>
              <li><strong>White-Glove Luxury Delivery with Gift Wrapping:</strong> $24.95</li>
            </ul>

            <h3>4. Carbon-Neutral Fulfillment</h3>
            <p>Every single Annette Pure shipment is 100% carbon neutral. We utilize biodegradable corrugated boxes, recycled paper tape, and soluble cornstarch packing peanuts that dissolve completely in warm water.</p>
          </div>
        )}

        {/* 3. PRIVACY POLICY */}
        {activeTab === 'privacy' && (
          <div className="policy-doc-card">
            <h2>Privacy Policy</h2>
            <p className="policy-last-updated">Last Updated: August 2026</p>

            <h3>1. Information We Collect</h3>
            <p>When you browse or place an order with Annette Pure, we collect basic contact information (name, email, shipping address, and phone number) necessary to process your transaction and deliver your order.</p>

            <h3>2. Payment Security</h3>
            <p>We never store or have access to full credit card numbers on our servers. All transactions are securely processed through PCI-DSS Level 1 compliant 256-bit encrypted gateways (Stripe, Apple Pay, PayPal).</p>

            <h3>3. We Never Sell Your Data</h3>
            <p>Your privacy is sacred. Annette Pure has never sold, rented, or traded customer data to third-party advertisers, and we never will. Your email is only used for order confirmations and our private newsletter if you opt in.</p>
          </div>
        )}

        {/* 4. TERMS OF SERVICE */}
        {activeTab === 'terms' && (
          <div className="policy-doc-card">
            <h2>Terms of Service</h2>
            <p className="policy-last-updated">Last Updated: August 2026</p>

            <h3>1. Artisan Handcrafted Quality</h3>
            <p>Because our candles are individually hand-poured in micro-batches and cast in hand-blown glass, subtle variations in vessel color, wax finish (frosting), and surface texture are natural hallmarks of authentic soy craftsmanship.</p>

            <h3>2. Candle Safety & User Responsibility</h3>
            <p>Always burn candles within sight on heat-resistant surfaces. Keep away from drafts, flammable objects, children, and pets. Do not burn for more than 4 consecutive hours per lighting session. Trim wicks to 1/4 inch before every burn.</p>

            <h3>3. Intellectual Property</h3>
            <p>All brand names, custom fragrance formulas, logos, product imagery, and copy are the proprietary intellectual property of Annette Pure Candles LLC.</p>
          </div>
        )}

      </div>

    </div>
  );
}
