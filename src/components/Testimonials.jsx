import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const scrollRef = useRef(null);

  const reviews = [
    {
      name: "Anick L.",
      stars: 5,
      quote: "Absolutely in love with Forest Ave. It fills my large living room with a rich woodsy scent without being overwhelming. Best soy candle I've ever owned."
    },
    {
      name: "Clarissa M.",
      stars: 5,
      quote: "The Wellness Collection is a staple in my bedtime ritual. Purity and calm in a beautiful frosted glass jar. I purchase monthly without fail."
    },
    {
      name: "Marcus T.",
      stars: 5,
      quote: "Ordered custom corporate gifts through their Private Label workshop. The client feedback was incredible. Incredible quality and packaging."
    },
    {
      name: "Sarah K.",
      stars: 5,
      quote: "Cleanest burning candle ever. I have sensitive allergies, and ANNETTE PURE candles never trigger them. I'm customer for life!"
    },
    {
      name: "Daniel G.",
      stars: 5,
      quote: "Layne is the most perfect spring fragrance. The scent smells incredibly natural, not synthetic like cheaper mall brands."
    },
    {
      name: "Helena R.",
      stars: 5,
      quote: "Stunning aesthetics! The amber jars look beautiful on my bookshelves. And the scent lingers in the room long after blowing it out."
    },
    {
      name: "Elena V.",
      stars: 5,
      quote: "Incredible craftsmanship. The wooden accents and natural soy wicks show their attention to detail. Worth every penny."
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 350 : scrollLeft + 350;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="carousel-header">
        <h2 className="section-title">Love From Our Customers</h2>
        <div className="carousel-controls">
          <button className="carousel-nav-btn" onClick={() => scroll('left')} aria-label="Previous reviews">
            <ChevronLeft size={20} />
          </button>
          <button className="carousel-nav-btn" onClick={() => scroll('right')} aria-label="Next reviews">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="carousel-wrapper" style={{ marginTop: '30px' }}>
        <div className="carousel-track" ref={scrollRef} style={{ gap: '20px' }}>
          {reviews.map((rev, i) => (
            <div className="testimonial-card" key={i}>
              <div>
                <div className="testimonial-stars">
                  {[...Array(rev.stars)].map((_, idx) => (
                    <Star key={idx} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-quote">"{rev.quote}"</p>
              </div>
              <span className="testimonial-author">{rev.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
