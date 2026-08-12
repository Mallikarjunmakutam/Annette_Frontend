import React from 'react';
import foundersImg from '../assets/founders_collection.png';
import privateLabelImg from '../assets/private_label_services.png';

export default function FeatureBlocks({ onNavigate }) {
  return (
    <section className="section feature-blocks-section">
      
      {/* 5.1 FEATURE BLOCK — Founder's Collection */}
      <div className="feature-block-row">
        <div className="feature-block-image-wrap">
          <img src={foundersImg} alt="Founder's Candle Collection" className="feature-block-img" />
          <div className="feature-badge">Signature Atelier</div>
        </div>
        <div className="feature-block-content">
          <span className="feature-eyebrow">The Founder's Collection</span>
          <h2 className="feature-heading">Timeless comfort, beautifully familiar.</h2>
          <p className="feature-body">
            Formulated by Annette over two decades of olfactory experimentation, our Founder's Collection marries earthy California botanicals with refined French perfumery. Each vessel is individually hand-poured, cured for two weeks, and hand-labeled in our Laguna atelier.
          </p>
          <div className="feature-pillars">
            <span className="feature-pillar-tag">&bull; 100% Non-Toxic Soy</span>
            <span className="feature-pillar-tag">&bull; Lead-Free Cotton</span>
            <span className="feature-pillar-tag">&bull; Phthalate Free</span>
          </div>
          <button 
            className="btn-luxury-cta"
            onClick={() => onNavigate && onNavigate('shop', { category: "Founder's" })}
          >
            Shop Founder's Collection &rarr;
          </button>
        </div>
      </div>

      {/* 5.2 FEATURE BLOCK — Private Label Services */}
      <div className="feature-block-row reverse">
        <div className="feature-block-content">
          <span className="feature-eyebrow">Bespoke Manufacturing & Gifting</span>
          <h2 className="feature-heading">Your fragrance. Your vessel. Your brand, perfectly crafted.</h2>
          <p className="feature-body">
            Elevate your boutique, luxury hotel, spa, or corporate event with custom olfactory branding. From bespoke fragrance formulation and custom vessel screen printing to full-service fulfillment, we bring your unique brand story to life through scent.
          </p>
          <div className="feature-pillars">
            <span className="feature-pillar-tag">&bull; Low MOQs (100+ units)</span>
            <span className="feature-pillar-tag">&bull; Custom Foil Embossing</span>
            <span className="feature-pillar-tag">&bull; Turnkey Delivery</span>
          </div>
          <button 
            className="btn-luxury-cta"
            onClick={() => onNavigate && onNavigate('private-label')}
          >
            Explore Private Label Services &rarr;
          </button>
        </div>
        <div className="feature-block-image-wrap">
          <img src={privateLabelImg} alt="Private Label Candle Manufacturing" className="feature-block-img" />
          <div className="feature-badge">Bespoke Atelier</div>
        </div>
      </div>

    </section>
  );
}
