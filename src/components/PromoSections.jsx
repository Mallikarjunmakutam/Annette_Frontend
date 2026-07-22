import React from 'react';
import fallWinterImg from '../assets/fall_winter_collection.png';
import boutiqueImg from '../assets/boutique_collection.png';
import wellnessImg from '../assets/wellness_collection.png';

export default function PromoSections() {
  return (
    <div id="promo-sections">
      
      {/* 5.3. PROMO BANNER — Seasonal (Fall/Winter) */}
      <section className="promo-banner-section" id="seasonal">
        <div className="promo-banner-grid">
          <div className="promo-banner-image">
            <img src={fallWinterImg} alt="Fall / Winter Seasonal Candles" />
          </div>
          <div className="promo-banner-content">
            <h2 className="promo-banner-title">Fall / Winter Candles & Scents</h2>
            <p className="promo-banner-desc">
              As the nights grow longer, welcome the rich comfort of cinnamon bark, roasted pumpkin seed, crackling birchwood, and spiced cedar. Our seasonal winter vault has officially opened.
            </p>
            <a href="#bestsellers" className="btn-luxe promo-banner-btn">
              Shop Fall / Winter Candles
            </a>
          </div>
        </div>
      </section>

      {/* 5.4 & 5.5. PROMO TILES (Boutique & Wellness) */}
      <section className="section promo-tiles-section" id="tiles">
        
        {/* Boutique Promo Tile */}
        <div className="promo-tile" id="boutique">
          <img src={boutiqueImg} alt="Annette Boutique" className="promo-tile-img" />
          <h3 className="promo-tile-title">The Annette Boutique</h3>
          <p className="promo-tile-text">
            Explore curated vessels, artisanal wick trimmers, snuffs, match jars, and specialty candles made exclusively for our local boutique.
          </p>
          <a href="#all" className="btn-luxe">
            Shop The Boutique
          </a>
        </div>

        {/* Wellness/Self-Care Promo Tile */}
        <div className="promo-tile" id="wellness">
          <img src={wellnessImg} alt="Wellness Rituals" className="promo-tile-img" />
          <h3 className="promo-tile-title">Embrace Change, Embrace Calm</h3>
          <p className="promo-tile-text">
            Formulated to restore focus and soothe daily tension. Infused with pure organic lavender and wild lemongrass essential oils.
          </p>
          <a href="#all" className="btn-luxe">
            More About Wellness Rituals
          </a>
        </div>

      </section>

    </div>
  );
}
