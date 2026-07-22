import React from 'react';
import wellnessImg from '../assets/wellness_collection.png';
import foundersImg from '../assets/founders_collection.png';
import boutiqueImg from '../assets/boutique_collection.png';

export default function CategoryGrid() {
  const categories = [
    {
      name: "Wellness Collection",
      image: wellnessImg,
      link: "#wellness"
    },
    {
      name: "Founder's Collection",
      image: foundersImg,
      link: "#founders"
    },
    {
      name: "Annette Boutique",
      image: boutiqueImg,
      link: "#boutique"
    }
  ];

  return (
    <section className="section">
      <div className="category-grid">
        {categories.map((cat, i) => (
          <div className="category-card" key={i}>
            <img src={cat.image} alt={cat.name} className="category-img" />
            <div className="category-overlay">
              <h3 className="category-name">{cat.name}</h3>
              <a href={cat.link} className="btn-luxe category-btn">
                Shop Collection
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
