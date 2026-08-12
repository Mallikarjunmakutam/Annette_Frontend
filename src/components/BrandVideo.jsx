import React, { useState } from 'react';
import { Play, Sparkles, X } from 'lucide-react';
import brandVideoMock from '../assets/brand_video_mock.png';

export default function BrandVideo({ onNavigate }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="brand-video-section">
      <div 
        className="brand-video-banner" 
        style={{ backgroundImage: `url(${brandVideoMock})` }}
      >
        <div className="brand-video-overlay" />
        
        <div className="brand-video-content">
          <button 
            className="video-play-btn" 
            onClick={() => setIsPlaying(true)}
            aria-label="Play Brand Story Video"
          >
            <Play size={28} fill="currentColor" />
          </button>
          
          <span className="video-eyebrow">A 22-Year Heritage of Scent</span>
          <h2 className="video-title">Cozy Scents, Crafted with Care.</h2>
          <p className="video-description">
            From our early morning hand-pours overlooking the Pacific to the warm glow illuminating your living room, discover the human touch behind every flame.
          </p>
          
          <div className="video-cta-group">
            <button 
              className="btn-luxury-cta" 
              onClick={() => onNavigate && onNavigate('story')}
            >
              Meet The Founder &rarr;
            </button>
            <button 
              className="btn-luxury-outline"
              onClick={() => onNavigate && onNavigate('events')}
            >
              Book a Workshop
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal Simulation */}
      {isPlaying && (
        <div className="video-modal-overlay" onClick={() => setIsPlaying(false)}>
          <div className="video-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="video-close-btn" onClick={() => setIsPlaying(false)}>
              <X size={20} />
            </button>
            <div className="video-player-frame">
              <img src={brandVideoMock} alt="Video playback" className="video-placeholder-frame" />
              <div className="video-mock-notice">
                <h3>Annette Pure: The Artisan Process</h3>
                <p>Behind the scenes in our Laguna Beach Atelier &bull; 22 Years of Handcrafted Soy Candles</p>
                <button className="btn-luxury-cta" onClick={() => setIsPlaying(false)}>
                  Close Player
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
