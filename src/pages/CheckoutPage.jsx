import React, { useState } from 'react';
import { 
  ShieldCheck, Lock, CreditCard, Truck, Gift, ArrowRight, ArrowLeft, 
  ShoppingBag, Sparkles, CheckCircle 
} from 'lucide-react';

export default function CheckoutPage({ 
  cartItems = [], 
  onClearCart, 
  onNavigate,
  appliedDiscount = 0,
  initialGiftMessage = '',
  onAddOrder 
}) {
  const [currentStep, setCurrentStep] = useState(1); // 1: Address, 2: Shipping, 3: Payment, 4: Confirmation
  
  // Form State
  const [email, setEmail] = useState('clara.evans@example.com');
  const [firstName, setFirstName] = useState('Clara');
  const [lastName, setLastName] = useState('Evans');
  const [address, setAddress] = useState('452 Ocean Vista Lane');
  const [apt, setApt] = useState('Apt 4B');
  const [city, setCity] = useState('Laguna Beach');
  const [state, setState] = useState('CA');
  const [zip, setZip] = useState('92651');
  const [country, setCountry] = useState('United States');
  const [saveInfo, setSaveInfo] = useState(true);

  // Shipping Method
  const [shippingMethod, setShippingMethod] = useState('standard'); // 'standard', 'express', 'whiteglove'

  // Payment State
  const [paymentTab, setPaymentTab] = useState('card'); // 'card', 'applepay', 'paypal'
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4242');
  const [cardName, setCardName] = useState('Clara Evans');
  const [cardExp, setCardExp] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('892');

  // Promo Code
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(appliedDiscount || 0);
  const [promoMessage, setPromoMessage] = useState('');
  const [giftNote, setGiftNote] = useState(initialGiftMessage || '');
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  // Totals calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const isFreeStandard = subtotal >= 150;
  
  let shippingCost = 0;
  if (shippingMethod === 'standard') shippingCost = isFreeStandard ? 0 : 6.95;
  if (shippingMethod === 'express') shippingCost = 14.95;
  if (shippingMethod === 'whiteglove') shippingCost = 24.95;

  const discountAmount = (subtotal * discountPercent) / 100;
  const estimatedTax = (subtotal - discountAmount) * 0.0775;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingCost + estimatedTax);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const clean = promoCode.trim().toUpperCase();
    if (clean === 'WELCOME10') {
      setDiscountPercent(10);
      setPromoMessage('10% Welcome Discount Applied!');
    } else if (clean === 'LUXURY20') {
      setDiscountPercent(20);
      setPromoMessage('20% VIP Vault Discount Applied!');
    } else if (clean === 'FREESHIP') {
      setDiscountPercent(0);
      setShippingMethod('standard');
      setPromoMessage('Complimentary Shipping Activated!');
    } else {
      setPromoMessage('Invalid coupon code. Try WELCOME10 or LUXURY20');
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const orderNumber = `AP-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder = {
      orderNumber,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Processing (Hand-Pouring Batch)',
      items: [...cartItems],
      subtotal,
      discountAmount,
      shippingCost,
      tax: estimatedTax,
      total: grandTotal,
      shippingAddress: {
        name: `${firstName} ${lastName}`,
        address: `${address} ${apt}`.trim(),
        city,
        state,
        zip,
        country
      },
      shippingMethodTitle: shippingMethod === 'standard' ? 'Standard 3-5 Day Delivery' : (shippingMethod === 'express' ? 'Express 2-Day Priority' : 'White-Glove Luxury Delivery'),
      giftNote,
      estimatedDelivery: '3 - 5 Business Days'
    };

    setConfirmedOrder(newOrder);
    if (onAddOrder) {
      onAddOrder(newOrder);
    }
    if (onClearCart) {
      onClearCart();
    }
    setCurrentStep(4);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If cart is empty and not confirmed, show prompt
  if (cartItems.length === 0 && currentStep !== 4) {
    return (
      <div className="checkout-empty-page">
        <div className="checkout-empty-card">
          <ShoppingBag size={56} strokeWidth={1} />
          <h2>Your Scent Bag is Empty</h2>
          <p>Please add candles to your bag before proceeding to checkout.</p>
          <button className="btn-luxury-cta" onClick={() => onNavigate('shop')}>
            Discover Collection &rarr;
          </button>
        </div>
      </div>
    );
  }

  // STEP 4: ORDER CONFIRMATION SCREEN
  if (currentStep === 4 && confirmedOrder) {
    return (
      <div className="order-confirmation-page">
        <div className="confirmation-container">
          
          <div className="confirmation-header-card">
            <div className="confirm-icon-wrap">
              <CheckCircle size={44} className="confirm-icon" />
            </div>
            <span className="confirm-eyebrow">Order Confirmed</span>
            <h1 className="confirm-title">Thank You, {firstName}!</h1>
            <p className="confirm-desc">
              Your order <strong>#{confirmedOrder.orderNumber}</strong> has been received by our Laguna Beach atelier. We are carefully preparing your hand-poured soy candles.
            </p>
            <span className="confirm-email-note">
              A detailed receipt and tracking link have been dispatched to <strong>{email}</strong>.
            </span>
          </div>

          {/* Interactive Tracking Timeline Simulation */}
          <div className="confirmation-tracking-card">
            <div className="tracking-header">
              <Truck size={18} />
              <h4>Estimated Delivery: {confirmedOrder.estimatedDelivery}</h4>
            </div>
            <div className="tracking-stepper">
              <div className="track-step active">
                <div className="track-dot" />
                <span>Order Placed</span>
                <small>Today</small>
              </div>
              <div className="track-step active">
                <div className="track-dot" />
                <span>Atelier Prep & Cure</span>
                <small>In Progress</small>
              </div>
              <div className="track-step">
                <div className="track-dot" />
                <span>Carrier Dispatched</span>
                <small>Pending</small>
              </div>
              <div className="track-step">
                <div className="track-dot" />
                <span>Delivered</span>
                <small>Upcoming</small>
              </div>
            </div>
          </div>

          {/* Receipt Breakdown */}
          <div className="confirmation-receipt-card">
            <div className="receipt-header">
              <h3>Order Receipt Breakdown</h3>
              <span className="receipt-order-id">#{confirmedOrder.orderNumber}</span>
            </div>

            <div className="receipt-items-list">
              {confirmedOrder.items.map((item, idx) => (
                <div className="receipt-item-row" key={idx}>
                  <img src={item.image} alt={item.title} className="receipt-item-img" />
                  <div className="receipt-item-info">
                    <h4>{item.title}</h4>
                    <span>Qty: {item.quantity} &bull; 100% Pure Soy</span>
                  </div>
                  <span className="receipt-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="receipt-totals-table">
              <div className="receipt-row">
                <span>Subtotal</span>
                <span>${confirmedOrder.subtotal.toFixed(2)}</span>
              </div>
              {confirmedOrder.discountAmount > 0 && (
                <div className="receipt-row discount">
                  <span>Discount Applied</span>
                  <span>-${confirmedOrder.discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="receipt-row">
                <span>Shipping ({confirmedOrder.shippingMethodTitle})</span>
                <span>{confirmedOrder.shippingCost === 0 ? 'FREE' : `$${confirmedOrder.shippingCost.toFixed(2)}`}</span>
              </div>
              <div className="receipt-row">
                <span>Estimated Sales Tax</span>
                <span>${confirmedOrder.tax.toFixed(2)}</span>
              </div>
              <div className="receipt-row total-row">
                <span>Total Paid</span>
                <span>${confirmedOrder.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="receipt-address-box">
              <strong>Shipping Destination:</strong>
              <p>{confirmedOrder.shippingAddress.name}</p>
              <p>{confirmedOrder.shippingAddress.address}</p>
              <p>{confirmedOrder.shippingAddress.city}, {confirmedOrder.shippingAddress.state} {confirmedOrder.shippingAddress.zip}, {confirmedOrder.shippingAddress.country}</p>
              {confirmedOrder.giftNote && (
                <p className="receipt-gift-text"><strong>Gift Note:</strong> "{confirmedOrder.giftNote}"</p>
              )}
            </div>

          </div>

          <div className="confirmation-actions-row">
            <button 
              className="btn-luxury-cta"
              onClick={() => onNavigate('account', { tab: 'orders' })}
            >
              View in My Account & Track &rarr;
            </button>
            <button 
              className="btn-luxury-outline"
              onClick={() => onNavigate('shop')}
            >
              Continue Shopping
            </button>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      
      {/* Top Header */}
      <div className="checkout-top-bar">
        <button onClick={() => onNavigate('home')} className="checkout-logo-link">
          <span className="checkout-script-a">A</span>
          <span className="checkout-brand-text">ANNETTE PURE &bull; SECURE CHECKOUT</span>
        </button>
        <div className="checkout-security-badge">
          <Lock size={14} />
          <span>256-Bit SSL Encrypted</span>
        </div>
      </div>

      <div className="checkout-layout">
        
        {/* Left Column: Multi-Step Forms */}
        <div className="checkout-form-column">
          
          {/* Progress Indicator */}
          <div className="checkout-step-indicator">
            <button 
              className={`step-bubble-btn ${currentStep >= 1 ? 'active' : ''}`}
              onClick={() => setCurrentStep(1)}
            >
              1. Address
            </button>
            <span className="step-arrow">&rarr;</span>
            <button 
              className={`step-bubble-btn ${currentStep >= 2 ? 'active' : ''}`}
              onClick={() => setCurrentStep(2)}
            >
              2. Shipping
            </button>
            <span className="step-arrow">&rarr;</span>
            <button 
              className={`step-bubble-btn ${currentStep >= 3 ? 'active' : ''}`}
              onClick={() => setCurrentStep(3)}
            >
              3. Payment
            </button>
          </div>

          {/* STEP 1: ADDRESS */}
          {currentStep === 1 && (
            <div className="step-card">
              <h2 className="step-title">1. Contact & Shipping Address</h2>
              
              <div className="form-group">
                <label>Email Address for Order Updates *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>First Name *</label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Street Address *</label>
                <input
                  type="text"
                  required
                  placeholder="Street name and number"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Apartment, Suite, Unit (Optional)</label>
                <input
                  type="text"
                  value={apt}
                  onChange={(e) => setApt(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-grid-3">
                <div className="form-group">
                  <label>City *</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>State / Province *</label>
                  <input
                    type="text"
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>ZIP Code *</label>
                  <input
                    type="text"
                    required
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-checkbox-row">
                <input
                  type="checkbox"
                  id="save-info"
                  checked={saveInfo}
                  onChange={(e) => setSaveInfo(e.target.checked)}
                />
                <label htmlFor="save-info">Save this address to my Annette Pure profile for 1-click checkout</label>
              </div>

              <div className="step-actions-row">
                <button 
                  type="button" 
                  className="btn-luxury-cta step-next-btn"
                  onClick={() => setCurrentStep(2)}
                >
                  <span>Continue to Shipping Method</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: SHIPPING METHOD */}
          {currentStep === 2 && (
            <div className="step-card">
              <h2 className="step-title">2. Choose Delivery Method</h2>
              
              <div className="shipping-address-summary">
                <div>
                  <strong>Deliver to:</strong> {firstName} {lastName}, {address} {apt}, {city}, {state} {zip}
                </div>
                <button className="summary-edit-btn" onClick={() => setCurrentStep(1)}>Edit</button>
              </div>

              <div className="shipping-methods-list">
                
                {/* Standard */}
                <div 
                  className={`shipping-option-card ${shippingMethod === 'standard' ? 'selected' : ''}`}
                  onClick={() => setShippingMethod('standard')}
                >
                  <div className="shipping-radio">
                    <div className={`radio-dot ${shippingMethod === 'standard' ? 'active' : ''}`} />
                  </div>
                  <div className="shipping-details">
                    <div className="shipping-title-row">
                      <strong>Standard U.S. Shipping (3-5 Business Days)</strong>
                      <span className="shipping-price-tag">{isFreeStandard ? 'FREE' : '$6.95'}</span>
                    </div>
                    <p>Eco-friendly carbon-neutral ground shipping in protective recycled paper cushioning.</p>
                  </div>
                </div>

                {/* Express 2-Day */}
                <div 
                  className={`shipping-option-card ${shippingMethod === 'express' ? 'selected' : ''}`}
                  onClick={() => setShippingMethod('express')}
                >
                  <div className="shipping-radio">
                    <div className={`radio-dot ${shippingMethod === 'express' ? 'active' : ''}`} />
                  </div>
                  <div className="shipping-details">
                    <div className="shipping-title-row">
                      <strong>Express 2-Day Air Priority</strong>
                      <span className="shipping-price-tag">$14.95</span>
                    </div>
                    <p>Guaranteed 2-business day expedited flight delivery with live GPS carrier tracking.</p>
                  </div>
                </div>

                {/* White Glove */}
                <div 
                  className={`shipping-option-card ${shippingMethod === 'whiteglove' ? 'selected' : ''}`}
                  onClick={() => setShippingMethod('whiteglove')}
                >
                  <div className="shipping-radio">
                    <div className={`radio-dot ${shippingMethod === 'whiteglove' ? 'active' : ''}`} />
                  </div>
                  <div className="shipping-details">
                    <div className="shipping-title-row">
                      <strong>White-Glove Luxury Delivery + Gift Box & Wax Seal</strong>
                      <span className="shipping-price-tag">$24.95</span>
                    </div>
                    <p>Signature embossed linen gift box, hand-stamped wax seal, and priority handling.</p>
                  </div>
                </div>

              </div>

              <div className="step-actions-row">
                <button 
                  type="button" 
                  className="btn-luxury-outline"
                  onClick={() => setCurrentStep(1)}
                >
                  <ArrowLeft size={16} />
                  <span>Back to Address</span>
                </button>
                <button 
                  type="button" 
                  className="btn-luxury-cta"
                  onClick={() => setCurrentStep(3)}
                >
                  <span>Continue to Payment</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: PAYMENT */}
          {currentStep === 3 && (
            <div className="step-card">
              <h2 className="step-title">3. Secure Payment</h2>
              
              <div className="payment-tabs-row">
                <button 
                  className={`payment-tab-btn ${paymentTab === 'card' ? 'active' : ''}`}
                  onClick={() => setPaymentTab('card')}
                >
                  <CreditCard size={16} />
                  <span>Credit / Debit Card</span>
                </button>
                <button 
                  className={`payment-tab-btn ${paymentTab === 'applepay' ? 'active' : ''}`}
                  onClick={() => setPaymentTab('applepay')}
                >
                  <span>Apple Pay</span>
                </button>
                <button 
                  className={`payment-tab-btn ${paymentTab === 'paypal' ? 'active' : ''}`}
                  onClick={() => setPaymentTab('paypal')}
                >
                  <span>PayPal</span>
                </button>
              </div>

              {paymentTab === 'card' ? (
                <div className="card-payment-form">
                  
                  {/* Live Interactive Card Preview */}
                  <div className="live-card-preview">
                    <div className="card-chip" />
                    <span className="preview-card-number">{cardNumber || '•••• •••• •••• ••••'}</span>
                    <div className="preview-card-bottom">
                      <div>
                        <span className="preview-label">CARDHOLDER</span>
                        <span className="preview-val">{cardName || 'YOUR NAME'}</span>
                      </div>
                      <div>
                        <span className="preview-label">EXPIRES</span>
                        <span className="preview-val">{cardExp || 'MM/YY'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Card Number</label>
                    <input
                      type="text"
                      required
                      placeholder="4532 •••• •••• 4242"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Name on Card</label>
                    <input
                      type="text"
                      required
                      placeholder="Clara Evans"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label>Expiration (MM/YY)</label>
                      <input
                        type="text"
                        required
                        placeholder="12/28"
                        value={cardExp}
                        onChange={(e) => setCardExp(e.target.value)}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label>Security CVC</label>
                      <input
                        type="text"
                        required
                        placeholder="892"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        className="form-input"
                      />
                    </div>
                  </div>

                </div>
              ) : (
                <div className="express-checkout-sim">
                  <p>You will be securely redirected to {paymentTab === 'applepay' ? 'Apple Pay' : 'PayPal'} to authorize your payment of <strong>${grandTotal.toFixed(2)}</strong>.</p>
                </div>
              )}

              <div className="step-actions-row">
                <button 
                  type="button" 
                  className="btn-luxury-outline"
                  onClick={() => setCurrentStep(2)}
                >
                  <ArrowLeft size={16} />
                  <span>Back to Shipping</span>
                </button>
                
                <button 
                  type="button" 
                  className="btn-luxury-cta place-order-btn"
                  onClick={handlePlaceOrder}
                >
                  <Lock size={15} />
                  <span>Complete Order &bull; ${grandTotal.toFixed(2)}</span>
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Right Column: Order Summary */}
        <aside className="checkout-summary-column">
          <div className="summary-sticky-card">
            <h3 className="summary-title">Order Summary ({cartItems.reduce((a, b) => a + b.quantity, 0)})</h3>

            {/* Free Shipping Alert */}
            {isFreeStandard && (
              <div className="free-shipping-congrats">
                <Sparkles size={14} />
                <span>You've unlocked Complimentary U.S. Shipping!</span>
              </div>
            )}

            {/* Items List */}
            <div className="summary-items-list">
              {cartItems.map((item) => (
                <div className="summary-item" key={item.id}>
                  <div className="summary-img-wrap">
                    <img src={item.image} alt={item.title} />
                    <span className="summary-item-qty">{item.quantity}</span>
                  </div>
                  <div className="summary-item-details">
                    <h4>{item.title}</h4>
                    <span>100% Soy &bull; 11 oz</span>
                  </div>
                  <span className="summary-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Gift Note Message */}
            <div className="summary-gift-box">
              <label><Gift size={14} /> Complimentary Handwritten Gift Note</label>
              <textarea
                rows={2}
                placeholder="Include a message for the recipient..."
                value={giftNote}
                onChange={(e) => setGiftNote(e.target.value)}
                className="gift-textarea"
              />
            </div>

            {/* Coupon Code Input */}
            <form onSubmit={handleApplyPromo} className="summary-coupon-form">
              <input
                type="text"
                placeholder="Promo code (e.g. WELCOME10)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="coupon-input"
              />
              <button type="submit" className="coupon-btn">Apply</button>
            </form>
            {promoMessage && (
              <p className={`coupon-feedback ${discountPercent > 0 ? 'success' : 'error'}`}>
                {promoMessage}
              </p>
            )}

            {/* Subtotals Table */}
            <div className="summary-totals-breakdown">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {discountPercent > 0 && (
                <div className="summary-row discount">
                  <span>VIP Discount ({discountPercent}%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
              </div>
              <div className="summary-row">
                <span>Estimated Sales Tax</span>
                <span>${estimatedTax.toFixed(2)}</span>
              </div>
              <div className="summary-row total-row">
                <span>Total Due</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="summary-guarantee-note">
              <ShieldCheck size={16} />
              <span>30-Day Clean Burn Happiness Guarantee</span>
            </div>

          </div>
        </aside>

      </div>

    </div>
  );
}
