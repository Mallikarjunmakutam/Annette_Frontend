import React from 'react';
import { Phone, ShieldCheck, Leaf } from 'lucide-react';

export default function SupportStrip() {
  const handlePhoneClick = () => {
    window.location.href = "tel:8883838934";
  };

  const paymentMethods = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Google Pay", "Discover"];

  return (
    <section className="support-strip-section">
      <div className="support-strip-grid">
        
        {/* Phone Contact */}
        <div className="support-item">
          <Phone className="support-icon" size={24} strokeWidth={1.5} />
          <h4 className="support-title">Customer Care</h4>
          <button className="support-link-btn" onClick={handlePhoneClick}>
            (888) 383-8934
          </button>
        </div>

        {/* Eco Packaging */}
        <div className="support-item">
          <Leaf className="support-icon" size={24} strokeWidth={1.5} />
          <h4 className="support-title">Eco-Conscious</h4>
          <p className="support-desc">100% recyclable packaging & organic materials</p>
        </div>

        {/* Secure Payments */}
        <div className="support-item">
          <ShieldCheck className="support-icon" size={24} strokeWidth={1.5} />
          <h4 className="support-title">Secure Payments</h4>
          <div className="payment-icons">
            {paymentMethods.map((method) => (
              <span className="payment-badge" key={method}>{method}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
