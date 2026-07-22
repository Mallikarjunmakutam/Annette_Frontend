import React from 'react';
import milestoneImg from '../assets/milestone_banner.png';
import wellnessImg from '../assets/wellness_collection.png';

export default function BrandStories() {
  return (
    <div id="story">
      
      {/* 13. BRAND STORY BLOCK — Craftsmanship */}
      <section className="feature-block">
        <div className="feature-image-side">
          <img src={milestoneImg} alt="Small-Batch Candle Craftsmanship" />
        </div>
        <div className="feature-content">
          <span className="feature-eyebrow">Our Standard</span>
          <h2 className="feature-heading">Small-Batch Craftsmanship, Not Mass Produced.</h2>
          <p className="brand-story-intro">
            Every candle is mixed, poured, labeled, and polished by hand in our California studio.
          </p>
          <p className="feature-text">
            By avoiding large industrial machinery, we maintain strict quality control over pouring temperatures, scent concentrations, and wick settings. This dedication is felt in the steady flame, even burn, and pristine aroma profiles of each Annette Pure piece.
          </p>
          <p className="brand-story-tagline">
            "A difference you can hear in the crackle, and feel in the atmosphere."
          </p>
          <a href="#bestsellers" className="btn-luxe">
            Shop all candles
          </a>
        </div>
      </section>

      {/* 14. BRAND STORY BLOCK — Philosophy */}
      <section className="feature-block alt" style={{ borderBottom: '1px solid rgba(226, 221, 213, 0.4)' }}>
        <div className="feature-image-side">
          <img src={wellnessImg} alt="Annette Pure Philosophy" />
        </div>
        <div className="feature-content">
          <span className="feature-eyebrow">Philosophy</span>
          <h2 className="feature-heading">The art of intention</h2>
          <p className="feature-text">
            We believe lighting a candle is an act of mindfulness. It marks a return to the self, a quiet boundary drawn against a busy day. Our scents are intentionally designed to anchor you in the current moment, turning simple spaces into peaceful sanctuaries.
          </p>
          <button className="btn-luxe btn-solid" onClick={() => alert("Our full philosophy book is coming soon!")}>
            Learn about our philosophy
          </button>
        </div>
      </section>

    </div>
  );
}
