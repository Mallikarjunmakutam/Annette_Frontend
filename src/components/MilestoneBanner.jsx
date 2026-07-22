import React from 'react';
import milestoneImg from '../assets/milestone_banner.png';

export default function MilestoneBanner() {
  return (
    <section className="milestone-section" id="milestones">
      <div className="milestone-grid">
        
        {/* Image Column */}
        <div className="milestone-image-side">
          <img src={milestoneImg} alt="Annette Pure Anniversary Candles" />
        </div>

        {/* Content Column */}
        <div className="milestone-content-side">
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.75rem',
            letterSpacing: '0.25em',
            color: 'var(--accent-gold-dark)',
            textTransform: 'uppercase',
            marginBottom: '15px',
            display: 'block'
          }}>
            Our Journey
          </span>
          <h2 className="milestone-title">22 years of love and craftsmanship</h2>
          
          <p className="milestone-intro">
            What started in a home kitchen in 2004 has blossomed into a global symbol of handcrafted sensory luxury.
          </p>
          
          <p className="milestone-body">
            Over the past two decades, we have remained fiercely committed to our initial promise: clean burning materials, organic soy wax, lead-free wicks, and fragrances that connect with the heart. Every batch we blend represents years of experience, refinement, and passion.
          </p>
          
          <div>
            <a href="#story" className="btn-luxe">
              Discover our story
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
