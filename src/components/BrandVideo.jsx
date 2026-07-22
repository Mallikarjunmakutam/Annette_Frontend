import React from 'react';
import brandVideoMockImg from '../assets/brand_video_mock.png';

export default function BrandVideo() {
  return (
    <section 
      className="brand-video-block" 
      style={{ backgroundImage: `url(${brandVideoMockImg})` }}
      id="brand-mission"
    >
      <div className="brand-video-overlay" />
      <div className="brand-video-content">
        <h2 className="brand-video-title">Cozy Scents, Crafted with Care</h2>
        <p className="brand-video-text">
          Our mission is to bring cozy comfort into every home. Handcrafting each piece from raw, clean ingredients, we translate pure natural fragrances into unforgettable moments of calm. Scented with intention, poured for you.
        </p>
        <a href="#story" className="btn-luxe brand-video-btn">
          Discover Our Story
        </a>
      </div>
    </section>
  );
}
