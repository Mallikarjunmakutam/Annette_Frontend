import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, Star } from 'lucide-react';

// 1. CART DRAWER
export function CartDrawer({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem }) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert("Thank you for your order! This is a demo checkout for ANNETTE PURE.");
  };

  return (
    <>
      <div className={`overlay-backdrop ${isOpen ? 'active' : ''}`} onClick={onClose} />
      <div className={`drawer-panel drawer-right ${isOpen ? 'active' : ''}`}>
        <div className="drawer-header">
          <h3 className="drawer-title">Your Cart ({cartItems.reduce((a, b) => a + b.quantity, 0)})</h3>
          <button className="drawer-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="cart-drawer-items">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="cart-empty-text">Your cart is currently empty.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} className="cart-item-img" />
                <div className="cart-item-details">
                  <div>
                    <h4 className="cart-item-title">{item.title}</h4>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="cart-item-qty-row">
                    <div className="qty-selector">
                      <button className="qty-btn" onClick={() => onUpdateQty(item.id, item.quantity - 1)}>
                        <Minus size={10} />
                      </button>
                      <span className="qty-val">{item.quantity}</span>
                      <button className="qty-btn" onClick={() => onUpdateQty(item.id, item.quantity + 1)}>
                        <Plus size={10} />
                      </button>
                    </div>
                    <button className="cart-item-remove" onClick={() => onRemoveItem(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-totals-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <p className="cart-totals-desc">Shipping & taxes calculated at checkout</p>
            <button className="btn-luxe btn-solid cart-checkout-btn" onClick={handleCheckout}>
              Proceed to checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

// 2. SEARCH DRAWER (Top sliding)
export function SearchDrawer({ isOpen, onClose, onSearch }) {
  const [query, setQuery] = useState('');
  const quickTags = ["Wellness", "Founder's", "Soy Wax", "Lavender", "Gift Set"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <>
      <div className={`overlay-backdrop ${isOpen ? 'active' : ''}`} onClick={onClose} />
      <div className={`drawer-panel drawer-top ${isOpen ? 'active' : ''}`}>
        <div className="search-drawer-content">
          <form onSubmit={handleSubmit} className="search-input-wrapper">
            <input
              type="text"
              placeholder="Search our collection..."
              className="search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus={isOpen}
            />
            <button type="button" className="icon-btn search-drawer-close" onClick={onClose}>
              <X size={24} />
            </button>
          </form>
          <div className="search-quick-links">
            <span className="search-quick-title">Quick Searches:</span>
            {quickTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className="search-quick-tag"
                onClick={() => {
                  setQuery(tag);
                  if (onSearch) onSearch(tag);
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// 3. QUICK VIEW MODAL
export function QuickViewModal({ product, isOpen, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setQuantity(1);
    onClose();
  };

  return (
    <>
      <div className={`overlay-backdrop ${isOpen ? 'active' : ''}`} onClick={onClose} />
      <div className={`modal-wrapper ${isOpen ? 'active' : ''}`}>
        <div className="modal-content">
          <button className="qv-close-btn" onClick={onClose}>
            <X size={16} />
          </button>
          
          <div className="qv-modal-content-grid">
            <div className="qv-image-side">
              <img src={product.image} alt={product.title} />
            </div>
            
            <div className="qv-info-side">
              {product.isBestseller && <span className="qv-badge">Bestseller</span>}
              <h3 className="qv-title">{product.title}</h3>
              
              <div className="qv-rating-row">
                <div className="product-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill={i < Math.floor(product.rating || 5) ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="qv-reviews">(24 reviews)</span>
              </div>

              <div className="qv-price-row">
                <span className="qv-price">${product.price.toFixed(2)}</span>
                {product.comparePrice && (
                  <span className="qv-price-compare">${product.comparePrice.toFixed(2)}</span>
                )}
              </div>

              <p className="qv-description">
                {product.description || "Indulge your senses with ANNETTE PURE's luxury candles. Expertly hand-poured using custom fragrances, organic soy wax, and premium lead-free wicks. Designed to elevate your space and foster absolute calm."}
              </p>

              <div className="qv-meta-row">
                <div className="qv-meta-item">
                  <span className="qv-meta-label">Wax Type: </span>100% Pure Soy Wax
                </div>
                <div className="qv-meta-item">
                  <span className="qv-meta-label">Wick: </span>100% Organic Cotton Wicks
                </div>
                <div className="qv-meta-item">
                  <span className="qv-meta-label">Burn Time: </span>~50-60 Hours
                </div>
              </div>

              <div className="qv-actions-row">
                <div className="qty-selector qv-qty">
                  <button className="qty-btn" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
                    <Minus size={10} />
                  </button>
                  <span className="qty-val">{quantity}</span>
                  <button className="qty-btn" onClick={() => setQuantity(q => q + 1)}>
                    <Plus size={10} />
                  </button>
                </div>
                <button className="btn-luxe btn-solid qv-add-btn" onClick={handleAdd}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
