import React from 'react';
import { Sparkles, Heart, ShieldCheck, RefreshCw, Award, ArrowRight } from 'lucide-react';
import milestoneImg from '../assets/milestone_banner.png';
import foundersImg from '../assets/founders_collection.png';
import wellnessImg from '../assets/wellness_collection.png';
import boutiqueImg from '../assets/boutique_collection.png';

export default function OurStoryPage({ onNavigate }) {
  const milestones = [
    {
      year: "2004",
      title: "The First Kitchen Pour",
      description: "Frustrated by synthetic candles causing persistent headaches, Annette began melting natural soy wax and blending pure botanical oils on her kitchen stove in Southern California."
    },
    {
      year: "2009",
      title: "Opening the Laguna Beach Atelier",
      description: "Annette Pure opened its flagship doors on Forest Avenue in Laguna Beach, establishing our open-studio workshop where visitors could watch candles hand-poured in real time."
    },
    {
      year: "2015",
      title: "The Murano Glass & Artisan Collaborations",
      description: "Partnered with master glassblowers in Italy to cast custom, heirloom vessels that serve as everlasting sculptural decor long after the candle burns down."
    },
    {
      year: "2020",
      title: "The Zero-Waste Refill Bar",
      description: "Pioneered in-store circular refills, allowing candle lovers to bring in empty vessels to be cleaned and refilled at half price, diverting thousands of vessels from landfills."
    },
    {
      year: "2026",
      title: "22 Years of Master Craftsmanship",
      description: "Celebrating over two decades of uncompromising non-toxic quality, sustainable luxury, and illuminating over 45,000 sanctuaries worldwide."
    }
  ];

  return (
    <div className="story-page">
      
      {/* Hero Section */}
      <section 
        className="story-hero"
        style={{ backgroundImage: `url(${milestoneImg})` }}
      >
        <div className="story-hero-overlay" />
        <div className="story-hero-content">
          <span className="story-hero-eyebrow">The Annette Pure Heritage</span>
          <h1 className="story-hero-title">22 Years of Love, Scent & Intention</h1>
          <p className="story-hero-tagline">
            We believe home is sacred. For over two decades, we have crafted non-toxic, hand-poured soy candles that elevate daily rituals and honor the quiet moments of life.
          </p>
        </div>
      </section>

      {/* Founder's Letter Section */}
      <section className="section founder-letter-section">
        <div className="founder-letter-container">
          
          <div className="founder-img-col">
            <div className="founder-img-frame">
              <img src={foundersImg} alt="Annette Makutam, Founder and Master Chandler" className="founder-portrait" />
              <div className="founder-frame-badge">Founder & Master Chandler</div>
            </div>
          </div>

          <div className="founder-text-col">
            <span className="section-eyebrow">A Note from Annette</span>
            <h2 className="founder-heading">"Scent is the invisible poetry of the home."</h2>
            
            <p className="founder-p">
              When I poured my very first batch of soy candles twenty-two years ago, the luxury candle market was dominated by paraffin wax, synthetic dyes, and heavy chemical stabilizers. I couldn't burn them in my own home without headaches.
            </p>
            <p className="founder-p">
              I wanted to create something different: candles that were as pure and clean as the ocean breeze coming off the Laguna cliffs, yet rich enough to fill an entire home with complex, transportive fragrance.
            </p>
            <p className="founder-p">
              To this day, we still pour every candle in small micro-batches of twelve. We still trim and set each cotton wick by hand. And we still test every scent formula until it achieves absolute olfactory harmony.
            </p>

            <div className="founder-signature-block">
              <span className="founder-signature-text">Annette Makutam</span>
              <span className="founder-title-text">Founder & Master Chandler, Annette Pure</span>
            </div>
          </div>

        </div>
      </section>

      {/* The 4 Core Pillars of Purity */}
      <section className="section story-pillars-section">
        <div className="section-intro">
          <span className="section-eyebrow">Our Uncompromising Standards</span>
          <h2 className="section-title">The Four Pillars of Annette Pure</h2>
        </div>

        <div className="story-pillars-grid">
          
          <div className="pillar-card">
            <div className="pillar-num">01</div>
            <h3 className="pillar-title">100% Organic Soy Wax</h3>
            <p className="pillar-desc">
              Grown sustainably by American farmers. Biodegradable, clean-burning, and entirely free of petroleum, paraffin, pesticides, and GMOs.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-num">02</div>
            <h3 className="pillar-title">Unbleached Cotton Wicks</h3>
            <p className="pillar-desc">
              Custom-braided pure cotton and paper wicks without lead or zinc cores. Ensures a steady, calm flame with zero toxic soot.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-num">03</div>
            <h3 className="pillar-title">Clean Botanical Fragrance</h3>
            <p className="pillar-desc">
              Masterfully compounded with natural essential oils and safe aroma isolates. Certified 100% free of parabens, phthalates, and toxins.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-num">04</div>
            <h3 className="pillar-title">Heirloom Reusable Vessels</h3>
            <p className="pillar-desc">
              Heavyweight hand-blown glass, ceramics, and brass designed to be permanently kept, refilled at our boutique, or repurposed as decor.
            </p>
          </div>

        </div>
      </section>

      {/* Interactive 22-Year Timeline */}
      <section className="section story-timeline-section">
        <div className="section-intro">
          <span className="section-eyebrow">The Journey</span>
          <h2 className="section-title">22-Year Heritage Milestones</h2>
        </div>

        <div className="timeline-track">
          {milestones.map((m, idx) => (
            <div className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`} key={m.year}>
              <div className="timeline-dot">
                <span>{m.year}</span>
              </div>
              <div className="timeline-content">
                <span className="timeline-year-tag">{m.year}</span>
                <h3 className="timeline-heading">{m.title}</h3>
                <p className="timeline-text">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Atelier Workshop Gallery */}
      <section className="section story-gallery-section">
        <div className="section-intro">
          <span className="section-eyebrow">Behind the Scenes</span>
          <h2 className="section-title">The Laguna Beach Atelier</h2>
        </div>

        <div className="story-gallery-grid">
          <div className="gallery-item large">
            <img src={foundersImg} alt="Master Chandler Pouring Soy Wax" />
            <div className="gallery-caption">Hand-Pouring at 135°F</div>
          </div>
          <div className="gallery-item">
            <img src={wellnessImg} alt="Botanical Oils and Lavender Buds" />
            <div className="gallery-caption">Natural Botanical Extracts</div>
          </div>
          <div className="gallery-item">
            <img src={boutiqueImg} alt="Finished Heirloom Vessels" />
            <div className="gallery-caption">Hand-Inspected & Cured</div>
          </div>
        </div>

        <div className="story-cta-box">
          <h3>Experience the Craft in Your Home</h3>
          <p>Explore our signature candle collections poured with 22 years of love.</p>
          <button 
            className="btn-luxury-cta"
            onClick={() => onNavigate && onNavigate('shop')}
          >
            Explore The Collection &rarr;
          </button>
        </div>
      </section>

    </div>
  );
}
