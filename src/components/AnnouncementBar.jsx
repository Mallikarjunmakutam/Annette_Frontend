import React from 'react';

export default function AnnouncementBar() {
  const announcements = [
    "Free Shipping on U.S. Orders $150+",
    "100% Happiness Guaranteed - Clean Burn Experience",
    "Up to 50% Off Every 10 Purchases - Exclusive Scent Vault Access",
    "Handcrafted Premium Soy Candles from Laguna Beach"
  ];

  return (
    <div className="announcement-bar">
      <div className="announcement-bar-content">
        {/* Render twice for continuous scrolling effect */}
        {announcements.map((text, i) => (
          <span className="announcement-item" key={`a1-${i}`}>{text}</span>
        ))}
        {announcements.map((text, i) => (
          <span className="announcement-item" key={`a2-${i}`}>{text}</span>
        ))}
      </div>
    </div>
  );
}
