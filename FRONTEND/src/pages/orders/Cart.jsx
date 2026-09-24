import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  Tag, 
  ArrowRight,
  Sparkles,
  Lock
} from 'lucide-react';

const INITIAL_CART = [
  {
    id: 1,
    name: 'Kundan Jhumka Earrings',
    purity: '925 Sterling Silver • 22K Gold Vermeil',
    price: 4999,
    originalPrice: 6999,
    image: '/category_earrings.jpg',
    quantity: 1,
  },
  {
    id: 3,
    name: 'Bridal Temple Heritage Necklace',
    purity: '800 Fine Silver with Temple Gold Polish',
    price: 14999,
    originalPrice: 19999,
    image: '/category_necklace.jpg',
    quantity: 1,
  },
];

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(INITIAL_CART);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState('');
  const [promoError, setPromoError] = useState('');

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev =>
      prev.map(item => item.id === id ? { ...item, quantity: newQuantity } : item)
    );
  };

  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const applyPromo = (e) => {
    e.preventDefault();
    setPromoError('');
    if (!promoCode.trim()) return;

    if (promoCode.toUpperCase() === 'ROYAL10') {
      const disc = Math.round(subtotal * 0.10);
      setDiscount(disc);
      setCouponApplied('ROYAL10 (10% Royal Privilege Discount)');
      setPromoCode('');
    } else if (promoCode.toUpperCase() === 'JEWEL20') {
      const disc = Math.round(subtotal * 0.20);
      setDiscount(disc);
      setCouponApplied('JEWEL20 (20% Festive Benefit)');
      setPromoCode('');
    } else {
      setPromoError('Invalid coupon code. Try ROYAL10 or JEWEL20.');
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const grandTotal = Math.max(0, subtotal - discount);

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-secondary)',
        padding: '2.5rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              YOUR SELECTIONS
            </span>
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: '0 0 0.5rem',
            }}
          >
            Shopping Bag
          </h1>
          <p className="font-garamond" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>
            {cartItems.length} handcrafted creation{cartItems.length !== 1 ? 's' : ''} in your royal bag
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div
            className="bg-theme-card"
            style={{
              padding: '4rem 2rem',
              borderRadius: '16px',
              border: '1px solid var(--border-light)',
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <ShoppingBag size={48} style={{ color: 'var(--theme-gold)', margin: '0 auto 1.25rem' }} />
            <h2 className="font-serif" style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Your Bag is Currently Empty
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '440px', margin: '0 auto 2rem' }}>
              Discover timeless hallmark 925 sterling silver and 22K gold vermeil treasures designed to be cherished forever.
            </p>
            <Link
              to="/shop"
              className="btn-slate"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.85rem 2rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '600',
              }}
            >
              Explore Fine Jewellery <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem' }}>
            
            {/* Left: Cart Items List */}
            <div style={{ gridColumn: 'span 12' }} className="md:col-span-8">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Armored Free Delivery Notice */}
                <div
                  style={{
                    backgroundColor: 'var(--theme-champagne-light)',
                    border: '1px solid var(--border-light)',
                    padding: '0.85rem 1.25rem',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'var(--text-primary)',
                    fontSize: '0.85rem',
                  }}
                >
                  <Truck size={18} style={{ color: 'var(--theme-gold)', flexShrink: 0 }} />
                  <span>
                    Your order qualifies for <strong>Complimentary Armored Transit</strong> with tamper-evident seal and delivery OTP.
                  </span>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-theme-card"
                    style={{
                      borderRadius: '12px',
                      border: '1px solid var(--border-light)',
                      padding: '1.25rem',
                      display: 'flex',
                      gap: '1.5rem',
                      boxShadow: 'var(--shadow-sm)',
                      alignItems: 'center',
                    }}
                  >
                    {/* Item Image */}
                    <div
                      style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--bg-circle-item)',
                        overflow: 'hidden',
                        flexShrink: 0,
                      }}
                    >
                      <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    {/* Details */}
                    <div style={{ flexGrow: 1 }}>
                      <h3
                        className="font-serif"
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          color: 'var(--text-primary)',
                          margin: '0 0 0.35rem',
                        }}
                      >
                        {item.name}
                      </h3>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '0 0 0.75rem' }}>
                        {item.purity}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                        <span style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                        {item.originalPrice && (
                          <span style={{ fontSize: '0.85rem', color: '#9CA3AF', textDecoration: 'line-through' }}>
                            ₹{(item.originalPrice * item.quantity).toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Stepper & Remove */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem' }}>
                      <button
                        onClick={() => handleRemove(item.id)}
                        aria-label="Remove item"
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--text-secondary)',
                          cursor: 'pointer',
                          padding: '4px',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#EF4444')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                      >
                        <Trash2 size={16} />
                      </button>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          border: '1px solid var(--border-light)',
                          borderRadius: '6px',
                          backgroundColor: 'var(--bg-card-warm)',
                        }}
                      >
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          style={{
                            padding: '0.35rem 0.65rem',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'var(--text-primary)',
                          }}
                        >
                          <Minus size={13} />
                        </button>
                        <span style={{ padding: '0 0.5rem', fontSize: '0.85rem', fontWeight: '600' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          style={{
                            padding: '0.35rem 0.65rem',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'var(--text-primary)',
                          }}
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Order Summary Sidebar */}
            <div style={{ gridColumn: 'span 12' }} className="md:col-span-4">
              <div
                className="bg-theme-card"
                style={{
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-sm)',
                  position: 'sticky',
                  top: '2rem',
                }}
              >
                <h2 className="font-serif" style={{ fontSize: '1.35rem', margin: '0 0 1.25rem', color: 'var(--text-primary)' }}>
                  Order Summary
                </h2>

                {/* Promo Code Form */}
                <form onSubmit={applyPromo} style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Privilege Coupon / Voucher
                  </label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input
                      type="text"
                      placeholder="e.g. ROYAL10"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      style={{
                        flex: 1,
                        padding: '0.6rem 0.85rem',
                        borderRadius: '6px',
                        border: '1px solid var(--border-light)',
                        backgroundColor: 'var(--bg-card-warm)',
                        fontSize: '0.85rem',
                        textTransform: 'uppercase',
                        outline: 'none',
                      }}
                    />
                    <button
                      type="submit"
                      className="btn-gold"
                      style={{
                        padding: '0.6rem 1rem',
                        borderRadius: '6px',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                      }}
                    >
                      Apply
                    </button>
                  </div>
                  {couponApplied && (
                    <div style={{ marginTop: '0.5rem', color: '#065F46', fontSize: '0.8rem', fontWeight: '500' }}>
                      ✓ {couponApplied}
                    </div>
                  )}
                  {promoError && (
                    <div style={{ marginTop: '0.5rem', color: '#991B1B', fontSize: '0.8rem' }}>
                      {promoError}
                    </div>
                  )}
                </form>

                {/* Totals Breakdown */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <span>Bag Subtotal</span>
                    <span style={{ color: 'var(--text-primary)' }}>₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  {discount > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#065F46' }}>
                      <span>Royal Privilege Discount</span>
                      <span>-₹{discount.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <span>Insured Armored Shipping</span>
                    <span style={{ color: '#065F46', fontWeight: '600' }}>FREE</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <span>GST (3% Fine Jewellery)</span>
                    <span style={{ color: 'var(--text-primary)' }}>Included</span>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: 'var(--text-primary)',
                      borderTop: '1px solid var(--border-light)',
                      paddingTop: '1rem',
                      marginTop: '0.5rem',
                    }}
                  >
                    <span>Total Amount</span>
                    <span>₹{grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Proceed Button */}
                <button
                  onClick={() => navigate('/checkout')}
                  className="btn-slate"
                  style={{
                    width: '100%',
                    padding: '0.95rem',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    marginBottom: '1rem',
                  }}
                >
                  <Lock size={16} /> Proceed to Secure Checkout
                </button>

                <div style={{ textAlign: 'center' }}>
                  <Link to="/shop" style={{ color: 'var(--theme-gold)', fontSize: '0.85rem', textDecoration: 'none', fontWeight: '500' }}>
                    ← Continue Exploring Collections
                  </Link>
                </div>

                {/* Trust Footer */}
                <div
                  style={{
                    marginTop: '1.5rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <ShieldCheck size={20} style={{ color: 'var(--theme-gold)', flexShrink: 0 }} />
                  <span>256-Bit SSL Encrypted Checkout & 100% Genuine BIS Hallmark Guarantee</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </main>
  );
};

export default Cart;