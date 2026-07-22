import React from 'react';
import foundersImg from '../assets/founders_collection.png';
import privateLabelImg from '../assets/private_label_services.png';

export default function FeatureBlocks() {
  return (
    <div id="features">
      
      {/* 1. Founder's Collection Block */}
      <section className="feature-block" id="founders">
        <div className="feature-image-side">
          <img src={foundersImg} alt="Annette Pure Founder's Collection" />
        </div>
        <div className="feature-content">
          <span className="feature-eyebrow">Signature Collection</span>
          <h2 className="feature-heading">Timeless comfort, beautifully familiar.</h2>
          <p className="feature-text">
            Our Founder's Collection captures the comforting warmth of memory. Each candle is hand-poured in bespoke glass vessels with a custom soy blend designed to gently release delicate aromatic layers. Enjoy a slow, clean burn that wraps your room in familiarity.
          </p>
          <a href="#bestsellers" className="btn-luxe">
            Shop Founder's Collection
          </a>
        </div>
      </section>

      {/* 2. Private Label Services Block */}
      <section className="feature-block alt" id="private-label">
        <div className="feature-image-side">
          <img src={privateLabelImg} alt="Private Label Services" />
        </div>
        <div className="feature-content">
          <span className="feature-eyebrow">Custom Branding</span>
          <h2 className="feature-heading">Your fragrance. Your vessel. Your brand, perfectly crafted.</h2>
          <p className="feature-text">
            Create a custom sensory experience for your hospitality brand, boutique, corporate gift series, or private events. We work closely with you to formulate exclusive fragrance profiles, curate luxury glass vessels, and print high-fidelity bespoke packaging.
          </p>
          <button className="btn-luxe btn-solid" onClick={() => alert("Private label inquiry forms are coming soon!")}>
            Private Label Services
          </button>
        </div>
      </section>

    </div>
  );
}
