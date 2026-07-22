import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Import images to represent the bestseller products
import wellnessImg from '../assets/wellness_collection.png';
import foundersImg from '../assets/founders_collection.png';
import boutiqueImg from '../assets/boutique_collection.png';
import fallWinterImg from '../assets/fall_winter_collection.png';
import privateLabelImg from '../assets/private_label_services.png';
import milestoneImg from '../assets/milestone_banner.png';

export default function Bestsellers({ onQuickView, onAddToCart }) {
  const scrollRef = useRef(null);

  const bestsellers = [
    {
      id: 1,
      title: "Forest Ave.",
      price: 38.00,
      comparePrice: 48.00,
      rating: 5.0,
      image: foundersImg,
      hoverImage: wellnessImg,
      isBestseller: true,
      tag: "Best Seller",
      description: "Step into a lush woodland with notes of cedarwood, damp pine, and a whisper of wild eucalyptus. A deeply grounding blend.",
    },
    {
      id: 2,
      title: "Perloat",
      price: 34.00,
      rating: 4.8,
      image: wellnessImg,
      hoverImage: boutiqueImg,
      description: "A calming scent featuring French lavender, white chamomile, and soft coconut milk. Ideal for deep relaxation.",
    },
    {
      id: 3,
      title: "Heritage",
      price: 42.00,
      rating: 4.9,
      image: boutiqueImg,
      hoverImage: milestoneImg,
      description: "Rich notes of spiced amber, toasted vanilla bean, and complex tobacco leaf. Warm, historical, and comforting.",
    },
    {
      id: 4,
      title: "Layne",
      price: 36.00,
      rating: 4.7,
      image: milestoneImg,
      hoverImage: fallWinterImg,
      description: "Sweet jasmine blossoms mixed with fresh sea salt and white tea. Like an afternoon breeze on the coast.",
    },
    {
      id: 5,
      title: "821-A",
      price: 39.00,
      comparePrice: 45.00,
      rating: 5.0,
      image: fallWinterImg,
      hoverImage: privateLabelImg,
      description: "A warming holiday blend of cinnamon bark, baked red apple, and toasted clove. Perfect for cold evenings.",
    },
    {
      id: 6,
      title: "CSLH",
      price: 35.00,
      rating: 4.9,
      image: privateLabelImg,
      hoverImage: foundersImg,
      description: "Clean linen, white musk, and a touch of sweet freesia. Recreates the feel of fresh sheets dried in the sun.",
    },
    {
      id: 7,
      title: "Sandalwood Shores",
      price: 40.00,
      rating: 4.8,
      image: foundersImg,
      hoverImage: boutiqueImg,
      description: "Rich Australian sandalwood, warm cardamom spice, and organic cedar. Elegant, masculine, and sophisticated.",
    },
    {
      id: 8,
      title: "Laguna Breeze",
      price: 38.00,
      rating: 5.0,
      image: boutiqueImg,
      hoverImage: wellnessImg,
      description: "Salty sea air, sun-bleached driftwood, and wild coastal sage. Captures the spirit of the Southern California shores.",
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 320 : scrollLeft + 320;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="section" id="bestsellers" style={{ borderBottom: '1px solid rgba(226, 221, 213, 0.4)' }}>
      <div className="carousel-header">
        <h2 className="section-title">Bestsellers</h2>
        <div className="carousel-controls">
          <button className="carousel-nav-btn" onClick={() => scroll('left')} aria-label="Previous bestsellers">
            <ChevronLeft size={20} />
          </button>
          <button className="carousel-nav-btn" onClick={() => scroll('right')} aria-label="Next bestsellers">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="carousel-wrapper">
        <div className="carousel-track" ref={scrollRef}>
          {bestsellers.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-img-wrapper">
                {product.tag && <span className="product-badge">{product.tag}</span>}
                <img src={product.image} alt={product.title} className="product-img" />
                <img src={product.hoverImage} alt={`${product.title} alternate`} className="product-img-secondary" />
                <button className="product-quickview-btn" onClick={() => onQuickView(product)}>
                  Quick View
                </button>
              </div>
              <div className="product-info">
                <h3 className="product-title" onClick={() => onQuickView(product)}>{product.title}</h3>
                
                <div className="product-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                  ))}
                </div>

                <div className="product-price-row">
                  <span className="product-price">${product.price.toFixed(2)}</span>
                  {product.comparePrice && (
                    <span className="product-price-compare">${product.comparePrice.toFixed(2)}</span>
                  )}
                </div>
                <span className="product-unit-price">Unit price: $3.80 / oz</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
