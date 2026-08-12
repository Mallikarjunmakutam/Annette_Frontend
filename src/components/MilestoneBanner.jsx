import React from 'react';
import milestoneImg from '../assets/milestone_banner.png';
import foundersImg from '../assets/founders_collection.png';

export default function MilestoneBanner({ onNavigate }) {
  return (
    <section className="section milestone-section">
      <div className="milestone-container">
        
        <div className="milestone-images-side">
          <div className="milestone-img-card primary">
            <img src={milestoneImg} alt="22 Years of Handcrafting Candles" className="milestone-img" />
          </div>
          <div className="milestone-img-card secondary">
            <img src={foundersImg} alt="Laguna Beach Workshop Heritage" className="milestone-img" />
            <div className="milestone-pill-badge">2004 &mdash; 2026</div>
          </div>
        </div>

        <div className="milestone-text-side">
          <span className="milestone-eyebrow">Our Milestone Celebration</span>
          <h2 className="milestone-title">22 years of love, intention & craftsmanship.</h2>
          
          <p className="milestone-body">
            What started in 2004 as an intimate search for clean-burning, headache-free candles in Annette's kitchen has blossomed into a beloved California fragrance maison.
          </p>
          <p className="milestone-body">
            Over the past two decades, we have remained proudly independent, steadfastly uncompromising on our non-toxic soy standards, and dedicated to elevating everyday rituals through the evocative power of scent.
          </p>

          <div className="milestone-stats-row">
            <div className="milestone-stat">
              <span className="stat-num">22+</span>
              <span className="stat-label">Years of Artisan Pouring</span>
            </div>
            <div className="milestone-stat">
              <span className="stat-num">100%</span>
              <span className="stat-label">Pure American Soy Wax</span>
            </div>
            <div className="milestone-stat">
              <span className="stat-num">45k+</span>
              <span className="stat-label">Sanctuaries Illuminated</span>
            </div>
          </div>

          <div className="milestone-cta-row">
            <button 
              className="btn-luxury-cta"
              onClick={() => onNavigate && onNavigate('story')}
            >
              Discover Our Story &rarr;
            </button>
            <button 
              className="btn-luxury-outline"
              onClick={() => onNavigate && onNavigate('boutique')}
            >
              Visit Our Boutique
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
