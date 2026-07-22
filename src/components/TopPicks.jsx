import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import wellnessImg from '../assets/wellness_collection.png';
import foundersImg from '../assets/founders_collection.png';
import boutiqueImg from '../assets/boutique_collection.png';
import fallWinterImg from '../assets/fall_winter_collection.png';

export default function TopPicks() {
  const [activeIndex, setActiveIndex] = useState(0);

  const picks = [
    {
      name: "Pineapple Coconut",
      desc: "A tropical oasis blend of caramelized pineapple, fresh shaved coconut, and warm Madagascar vanilla.",
      image: boutiqueImg,
      hoverImage: wellnessImg,
      link: "#pineapple"
    },
    {
      name: "Fresh Cut Herbs",
      desc: "An earthy, therapeutic fusion of crushed sweet basil, wild sage leaves, and green rosemary sprigs.",
      image: wellnessImg,
      hoverImage: foundersImg,
      link: "#herbs"
    },
    {
      name: "Blueberry Cobbler",
      desc: "Rich, decadent aroma of wild blueberries, warm butter crust, brown sugar, and sweet vanilla glaze.",
      image: fallWinterImg,
      hoverImage: boutiqueImg,
      link: "#cobbler"
    },
    {
      name: "Sun-Kissed Citrus",
      desc: "A bright, energetic splash of blood orange, sparkling mandarin, and fresh squeezed lime peel.",
      image: foundersImg,
      hoverImage: fallWinterImg,
      link: "#citrus"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % picks.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + picks.length) % picks.length);
  };

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="carousel-header">
        <h2 className="section-title">Top Picks For The Season</h2>
        <div className="carousel-controls">
          <button className="carousel-nav-btn" onClick={handlePrev} aria-label="Previous season pick">
            <ChevronLeft size={20} />
          </button>
          <span style={{ fontSize: '0.8rem', letterSpacing: '0.1em', fontFamily: 'var(--font-heading)', color: 'var(--text-muted)' }}>
            ({activeIndex + 1} / {picks.length})
          </span>
          <button className="carousel-nav-btn" onClick={handleNext} aria-label="Next season pick">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        {/* We will display the active scent card in a beautiful large showcase card with layout shifting or slide transition */}
        <div className="scent-display" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '50px',
          alignItems: 'center',
          backgroundColor: 'var(--bg-primary)',
          border: '1px solid var(--border-color)',
          padding: '40px',
          transition: 'all 0.5s ease'
        }}>
          {/* Image Side */}
          <div style={{ position: 'relative', height: '400px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
            <img 
              src={picks[activeIndex].image} 
              alt={picks[activeIndex].name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>

          {/* Info Side */}
          <div style={{ padding: '20px 0' }}>
            <span style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '0.75rem', 
              letterSpacing: '0.2em', 
              color: 'var(--accent-gold-dark)', 
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '15px'
            }}>
              Seasonal Exclusive Scent
            </span>
            <h3 style={{ 
              fontSize: '2rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.08em', 
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)'
            }}>
              {picks[activeIndex].name}
            </h3>
            <p style={{ 
              fontSize: '0.85rem', 
              color: 'var(--text-muted)', 
              lineHeight: '1.8', 
              marginBottom: '35px'
            }}>
              {picks[activeIndex].desc}
            </p>
            <a href={picks[activeIndex].link} className="btn-luxe btn-solid">
              Explore Scent
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
