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
      className="min-h-screen py-10 px-6 pb-20"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              YOUR SELECTIONS
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2"
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
              color: 'var(--text-primary)',
            }}
          >
            Shopping Bag
          </h1>
          <p className="font-garamond text-[1.1rem] m-0" style={{ color: 'var(--text-secondary)' }}>
            {cartItems.length} handcrafted creation{cartItems.length !== 1 ? 's' : ''} in your royal bag
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div
            className="bg-theme-card p-16 px-8 rounded-2xl text-center"
            style={{
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <ShoppingBag size={48} className="mx-auto mb-5" style={{ color: 'var(--theme-gold)' }} />
            <h2 className="font-serif text-[1.75rem] mb-2" style={{ color: 'var(--text-primary)' }}>
              Your Bag is Currently Empty
            </h2>
            <p className="max-w-[440px] mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
              Discover timeless hallmark 925 sterling silver and 22K gold vermeil treasures designed to be cherished forever.
            </p>
            <Link
              to="/shop"
              className="btn-slate inline-flex items-center gap-2 py-[0.85rem] px-8 rounded-md no-underline font-semibold"
            >
              Explore Fine Jewellery <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-10">
            
            {/* Left: Cart Items List */}
            <div className="col-span-12 md:col-span-8">
              <div className="flex flex-col gap-5">
                
                {/* Armored Free Delivery Notice */}
                <div
                  className="py-[0.85rem] px-5 rounded-lg flex items-center gap-2.5 text-[0.85rem]"
                  style={{
                    backgroundColor: 'var(--theme-champagne-light)',
                    border: '1px solid var(--border-light)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <Truck size={18} className="shrink-0" style={{ color: 'var(--theme-gold)' }} />
                  <span>
                    Your order qualifies for <strong>Complimentary Armored Transit</strong> with tamper-evident seal and delivery OTP.
                  </span>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-theme-card rounded-xl p-5 flex gap-6 items-center"
                    style={{
                      border: '1px solid var(--border-light)',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    {/* Item Image */}
                    <div
                      className="w-[100px] h-[100px] rounded-lg overflow-hidden shrink-0"
                      style={{
                        backgroundColor: 'var(--bg-circle-item)',
                      }}
                    >
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    {/* Details */}
                    <div className="grow">
                      <h3
                        className="font-serif text-[1.1rem] font-semibold mb-[0.35rem]"
                        style={{
                          color: 'var(--text-primary)',
                        }}
                      >
                        {item.name}
                      </h3>
                      <p className="text-[0.8rem] mb-3" style={{ color: 'var(--text-secondary)' }}>
                        {item.purity}
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-[1.15rem] font-bold" style={{ color: 'var(--text-primary)' }}>
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                        {item.originalPrice && (
                          <span className="text-[0.85rem] text-gray-400 line-through">
                            ₹{(item.originalPrice * item.quantity).toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Stepper & Remove */}
                    <div className="flex flex-col items-end gap-4">
                      <button
                        onClick={() => handleRemove(item.id)}
                        aria-label="Remove item"
                        className="bg-transparent border-0 cursor-pointer p-1 transition-colors duration-200"
                        style={{
                          color: 'var(--text-secondary)',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#EF4444')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                      >
                        <Trash2 size={16} />
                      </button>

                      <div
                        className="flex items-center rounded-md"
                        style={{
                          border: '1px solid var(--border-light)',
                          backgroundColor: 'var(--bg-card-warm)',
                        }}
                      >
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          className="py-[0.35rem] px-[0.65rem] bg-transparent border-0 cursor-pointer"
                          style={{
                            color: 'var(--text-primary)',
                          }}
                        >
                          <Minus size={13} />
                        </button>
                        <span className="px-2 text-[0.85rem] font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          className="py-[0.35rem] px-[0.65rem] bg-transparent border-0 cursor-pointer"
                          style={{
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
            <div className="col-span-12 md:col-span-4">
              <div
                className="bg-theme-card rounded-xl p-8 sticky top-8"
                style={{
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <h2 className="font-serif text-[1.35rem] mb-5" style={{ color: 'var(--text-primary)' }}>
                  Order Summary
                </h2>

                {/* Promo Code Form */}
                <form onSubmit={applyPromo} className="mb-6">
                  <label className="block text-[0.8rem] font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                    Privilege Coupon / Voucher
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. ROYAL10"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 py-[0.6rem] px-[0.85rem] rounded-md text-[0.85rem] uppercase outline-none"
                      style={{
                        border: '1px solid var(--border-light)',
                        backgroundColor: 'var(--bg-card-warm)',
                      }}
                    />
                    <button
                      type="submit"
                      className="btn-gold py-[0.6rem] px-4 rounded-md text-[0.85rem] cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                  {couponApplied && (
                    <div className="mt-2 text-emerald-800 text-[0.8rem] font-medium">
                      ✓ {couponApplied}
                    </div>
                  )}
                  {promoError && (
                    <div className="mt-2 text-red-800 text-[0.8rem]">
                      {promoError}
                    </div>
                  )}
                </form>

                {/* Totals Breakdown */}
                <div className="flex flex-col gap-[0.85rem] pt-5 mb-6" style={{ borderTop: '1px solid var(--border-light)' }}>
                  <div className="flex justify-between text-[0.9rem]" style={{ color: 'var(--text-secondary)' }}>
                    <span>Bag Subtotal</span>
                    <span style={{ color: 'var(--text-primary)' }}>₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-[0.9rem] text-emerald-800">
                      <span>Royal Privilege Discount</span>
                      <span>-₹{discount.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[0.9rem]" style={{ color: 'var(--text-secondary)' }}>
                    <span>Insured Armored Shipping</span>
                    <span className="text-emerald-800 font-semibold">FREE</span>
                  </div>
                  <div className="flex justify-between text-[0.9rem]" style={{ color: 'var(--text-secondary)' }}>
                    <span>GST (3% Fine Jewellery)</span>
                    <span style={{ color: 'var(--text-primary)' }}>Included</span>
                  </div>

                  <div
                    className="flex justify-between text-[1.25rem] font-bold pt-4 mt-2"
                    style={{
                      color: 'var(--text-primary)',
                      borderTop: '1px solid var(--border-light)',
                    }}
                  >
                    <span>Total Amount</span>
                    <span>₹{grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Proceed Button */}
                <button
                  onClick={() => navigate('/checkout')}
                  className="btn-slate w-full p-[0.95rem] rounded-lg text-base font-semibold flex items-center justify-center gap-2 cursor-pointer mb-4"
                >
                  <Lock size={16} /> Proceed to Secure Checkout
                </button>

                <div className="text-center">
                  <Link to="/shop" className="text-[0.85rem] no-underline font-medium" style={{ color: 'var(--theme-gold)' }}>
                    ← Continue Exploring Collections
                  </Link>
                </div>

                {/* Trust Footer */}
                <div
                  className="mt-6 pt-5 flex items-center gap-2.5 text-[0.8rem]"
                  style={{
                    borderTop: '1px solid var(--border-light)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <ShieldCheck size={20} className="shrink-0" style={{ color: 'var(--theme-gold)' }} />
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