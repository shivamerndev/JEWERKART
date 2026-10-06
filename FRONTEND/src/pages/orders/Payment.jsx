import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CreditCard, 
  Smartphone, 
  Building2, 
  Banknote, 
  Lock, 
  CheckCircle2, 
  ArrowLeft, 
  Tag, 
  Check, 
  Truck,
  Sparkles,
  MapPin
} from 'lucide-react';

const Payment = () => {
  const navigate = useNavigate();

  // Shipping form state
  const [shippingDetails, setShippingDetails] = useState({
    fullName: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 98765 43210',
    address: 'Flat 402, Royale Meadows, 14th Cross, Bandra West',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400050',
    landmark: 'Near Silver Beach Promenade',
  });

  // Payment state
  const [paymentMethod, setPaymentMethod] = useState('upi'); // upi, card, netbanking, cod
  const [upiId, setUpiId] = useState('');
  const [cardDetails, setCardDetails] = useState({
    number: '4532 •••• •••• 8821',
    name: 'PRIYA SHARMA',
    expiry: '08/29',
    cvv: '',
  });
  const [selectedBank, setSelectedBank] = useState('HDFC Bank');
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Cart summary data
  const orderItems = [
    {
      id: 1,
      name: 'Navratna Aura Oval Statement Studs',
      subtitle: '925 Sterling Silver • 22K Gold Vermeil',
      price: 4999,
      quantity: 1,
      image: '/category_earrings.jpg',
    },
    {
      id: 2,
      name: 'Bridal Heritage Kundan Choker',
      subtitle: 'Handcrafted Kundan • Basra Pearls',
      price: 12999,
      quantity: 1,
      image: '/category_necklace.jpg',
    },
  ];

  const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingFee = 0; // Free luxury insured delivery
  const tax = Math.round(subtotal * 0.03); // 3% GST on fine jewellery
  const totalAmount = subtotal + tax - appliedDiscount;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess('');
    const code = promoCode.trim().toUpperCase();
    if (code === 'JEWER10' || code === 'ROYAL10') {
      const discount = Math.round(subtotal * 0.1);
      setAppliedDiscount(discount);
      setCouponSuccess('ROYAL10 applied! You saved 10% on your fine jewellery.');
    } else if (code === 'WELCOME500') {
      setAppliedDiscount(500);
      setCouponSuccess('WELCOME500 applied! ₹500 deducted from your total.');
    } else {
      setCouponError('Invalid promo code. Try ROYAL10 or WELCOME500');
    }
  };

  const handleInputChange = (field, value) => {
    setShippingDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const orderId = `JK-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

    const orderData = {
      orderId,
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      shippingDetails,
      paymentMethod: 
        paymentMethod === 'upi' ? 'UPI (Instant / QR)' : 
        paymentMethod === 'card' ? 'Credit / Debit Card' : 
        paymentMethod === 'netbanking' ? `Net Banking (${selectedBank})` : 
        'Cash on Delivery',
      items: orderItems,
      subtotal,
      tax,
      discount: appliedDiscount,
      totalAmount,
      deliveryEstimate: '3-4 Business Days via Sequel Armored Express',
    };

    setTimeout(() => {
      setIsProcessing(false);
      navigate('/order-success', { state: { order: orderData } });
    }, 1400);
  };

  return (
    <main
      className="min-h-[calc(100vh-250px)] py-10 px-6 pb-16"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Navigation Breadcrumb / Back button */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 no-underline text-[0.85rem] font-medium transition-colors duration-200"
            style={{
              color: 'var(--text-secondary)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <ArrowLeft size={16} /> Back to Bag
          </Link>

          <div className="flex items-center gap-2 text-[0.8rem]" style={{ color: 'var(--text-secondary)' }}>
            <Lock size={14} className="text-[#C5914A]" />
            <span>256-Bit SSL Luxury Encrypted Checkout</span>
          </div>
        </div>

        {/* Checkout Steps Progress Bar */}
        <div className="flex items-center justify-center mb-12 gap-4">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full text-[#FEF0E0] flex items-center justify-center text-[0.8rem] font-semibold"
              style={{
                backgroundColor: 'var(--text-primary)',
              }}
            >
              <Check size={16} />
            </div>
            <span className="text-[0.85rem] font-semibold" style={{ color: 'var(--text-primary)' }}>Shopping Bag</span>
          </div>

          <div className="w-10 h-0.5" style={{ backgroundColor: 'var(--theme-gold)' }} />

          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full text-white flex items-center justify-center text-[0.8rem] font-bold"
              style={{
                backgroundColor: 'var(--theme-gold)',
              }}
            >
              2
            </div>
            <span className="text-[0.85rem] font-bold" style={{ color: 'var(--theme-gold)' }}>Payment & Delivery</span>
          </div>

          <div className="w-10 h-0.5" style={{ backgroundColor: 'var(--border-light)' }} />

          <div className="flex items-center gap-2 opacity-60">
            <div
              className="w-7 h-7 rounded-full bg-[#EED8C3] flex items-center justify-center text-[0.8rem] font-semibold"
              style={{
                color: 'var(--text-primary)',
              }}
            >
              3
            </div>
            <span className="text-[0.85rem] font-medium" style={{ color: 'var(--text-secondary)' }}>Order Confirmation</span>
          </div>
        </div>

        {/* Main Grid: Forms Left, Summary Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,1fr)] gap-10 items-start">
          {/* LEFT: Shipping Details + Payment Selection */}
          <div className="flex flex-col gap-8">
            
            {/* Step 1: Shipping Address Form */}
            <div
              className="rounded-lg p-8"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div className="flex items-center justify-between mb-6 pb-4" style={{ borderBottom: '1px solid var(--border-light)' }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: 'var(--theme-champagne)',
                      color: 'var(--theme-gold)',
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h2 className="font-serif text-[1.25rem] m-0 font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Delivery Destination
                    </h2>
                    <p className="m-0 text-[0.8rem]" style={{ color: 'var(--text-secondary)' }}>
                      Insured luxury transit by armored logistics
                    </p>
                  </div>
                </div>
                <span className="badge-925 text-[9px]">ARMORED LOGISTICS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.8rem] font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                    Recipient Full Name *
                  </label>
                  <input
                    type="text"
                    value={shippingDetails.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    required
                    className="w-full py-[0.65rem] px-[0.85rem] rounded bg-[#FFFDF9] text-[0.9rem] outline-none"
                    style={{
                      border: '1px solid var(--border-light)',
                      color: 'var(--text-primary)',
                    }}
                  />
                </div>

                <div>
                  <label className="block text-[0.8rem] font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    value={shippingDetails.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                    className="w-full py-[0.65rem] px-[0.85rem] rounded bg-[#FFFDF9] text-[0.9rem] outline-none"
                    style={{
                      border: '1px solid var(--border-light)',
                      color: 'var(--text-primary)',
                    }}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[0.8rem] font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                    Street Address & Apartment / Villa *
                  </label>
                  <input
                    type="text"
                    value={shippingDetails.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    required
                    className="w-full py-[0.65rem] px-[0.85rem] rounded bg-[#FFFDF9] text-[0.9rem] outline-none"
                    style={{
                      border: '1px solid var(--border-light)',
                      color: 'var(--text-primary)',
                    }}
                  />
                </div>

                <div>
                  <label className="block text-[0.8rem] font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                    City *
                  </label>
                  <input
                    type="text"
                    value={shippingDetails.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    required
                    className="w-full py-[0.65rem] px-[0.85rem] rounded bg-[#FFFDF9] text-[0.9rem] outline-none"
                    style={{
                      border: '1px solid var(--border-light)',
                      color: 'var(--text-primary)',
                    }}
                  />
                </div>

                <div>
                  <label className="block text-[0.8rem] font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    value={shippingDetails.pincode}
                    onChange={(e) => handleInputChange('pincode', e.target.value)}
                    required
                    className="w-full py-[0.65rem] px-[0.85rem] rounded bg-[#FFFDF9] text-[0.9rem] outline-none"
                    style={{
                      border: '1px solid var(--border-light)',
                      color: 'var(--text-primary)',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Payment Mode Selection */}
            <div
              className="rounded-lg p-8"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div className="flex items-center justify-between mb-6 pb-4" style={{ borderBottom: '1px solid var(--border-light)' }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: 'var(--theme-champagne)',
                      color: 'var(--theme-gold)',
                    }}
                  >
                    <CreditCard size={18} />
                  </div>
                  <div>
                    <h2 className="font-serif text-[1.25rem] m-0 font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Payment Method
                    </h2>
                    <p className="m-0 text-[0.8rem]" style={{ color: 'var(--text-secondary)' }}>
                      Choose your preferred luxury payment channel
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-500 text-[0.8rem] font-semibold">
                  <ShieldCheck size={16} /> Verified Secure
                </div>
              </div>

              {/* Payment Tabs / Radio selector */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">
                {[
                  { id: 'upi', label: 'UPI / QR', icon: Smartphone, subtitle: 'GPay, PhonePe, Paytm' },
                  { id: 'card', label: 'Cards', icon: CreditCard, subtitle: 'Visa, Master, RuPay' },
                  { id: 'netbanking', label: 'Net Banking', icon: Building2, subtitle: 'All Major Banks' },
                  { id: 'cod', label: 'Cash / COD', icon: Banknote, subtitle: 'Pay on doorstep' },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = paymentMethod === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPaymentMethod(item.id)}
                      className="py-4 px-2 rounded flex flex-col items-center gap-1.5 cursor-pointer transition-all duration-200"
                      style={{
                        border: isSelected ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                        backgroundColor: isSelected ? 'var(--theme-champagne-light)' : '#FFFDF9',
                      }}
                    >
                      <Icon size={22} style={{ color: isSelected ? 'var(--theme-gold)' : 'var(--text-secondary)' }} />
                      <span className={`text-[0.85rem] ${isSelected ? 'font-bold' : 'font-semibold'}`} style={{ color: 'var(--text-primary)' }}>
                        {item.label}
                      </span>
                      <span className="text-[0.65rem] text-center" style={{ color: 'var(--text-secondary)' }}>
                        {item.subtitle}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Tab 1: UPI Form */}
              {paymentMethod === 'upi' && (
                <div className="p-6 rounded-md" style={{ backgroundColor: 'var(--theme-champagne-light)', border: '1px solid var(--border-light)' }}>
                  <div className="flex justify-between items-center mb-5">
                    <div>
                      <h4 className="m-0 mb-1 text-[0.95rem] font-semibold" style={{ color: 'var(--text-primary)' }}>
                        Scan QR Code or Enter VPA / UPI ID
                      </h4>
                      <p className="m-0 text-[0.8rem]" style={{ color: 'var(--text-secondary)' }}>
                        Instant verification with Google Pay, PhonePe, Paytm or BHIM
                      </p>
                    </div>
                    <span className="badge-gold text-[9px]">INSTANT REFUND ELIGIBLE</span>
                  </div>

                  <div className="flex gap-6 items-center flex-wrap">
                    <div
                      className="bg-white p-[0.85rem] rounded-md text-center"
                      style={{
                        border: '1px solid var(--border-light)',
                      }}
                    >
                      {/* Simulated QR Code */}
                      <div className="w-[110px] h-[110px] bg-[#1C140E] rounded flex items-center justify-center text-[#FEF0E0] text-[0.75rem] font-semibold relative">
                        <div className="absolute inset-1.5 border-2 border-dashed border-[#C5914A] rounded-sm flex items-center justify-center">
                          <span className="text-[0.65rem] tracking-[0.5px] text-white">JEWERKART QR</span>
                        </div>
                      </div>
                      <span className="block text-[0.7rem] mt-1.5 font-semibold" style={{ color: 'var(--text-secondary)' }}>
                        Scan & Pay ₹{totalAmount.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex-1 min-w-[220px]">
                      <label className="block text-[0.8rem] font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                        Enter UPI ID / VPA
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="e.g. mobileNumber@upi or name@okhdfcbank"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          className="flex-1 py-[0.65rem] px-[0.85rem] rounded bg-white text-[0.85rem] outline-none"
                          style={{
                            border: '1px solid var(--border-light)',
                          }}
                        />
                        <button
                          type="button"
                          className="btn-gold py-[0.65rem] px-4 rounded text-[0.8rem] cursor-pointer"
                        >
                          Verify
                        </button>
                      </div>
                      <p className="mt-2.5 mb-0 text-[0.75rem]" style={{ color: 'var(--text-secondary)' }}>
                        Supported apps: Google Pay, PhonePe, Paytm, CRED, Amazon Pay, BHIM
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Card Form */}
              {paymentMethod === 'card' && (
                <div className="p-6 rounded-md" style={{ backgroundColor: 'var(--theme-champagne-light)', border: '1px solid var(--border-light)' }}>
                  {/* Luxury Card Graphic */}
                  <div
                    className="max-w-[340px] rounded-[10px] p-5 text-[#FEF0E0] mb-6 border border-[#C5914A] shadow-[0_8px_24px_rgba(28,20,14,0.25)]"
                    style={{
                      background: 'linear-gradient(135deg, #1C140E 0%, #38291C 60%, #5B4028 100%)',
                    }}
                  >
                    <div className="flex justify-between items-center mb-5">
                      <span className="font-serif text-base tracking-[2px] font-bold text-[#FEF0E0]">
                        JEWERKART ELITE
                      </span>
                      <Sparkles size={18} className="text-[#C5914A]" />
                    </div>

                    <div className="w-9 h-[26px] bg-[#D4A373] rounded mb-4 opacity-90" />

                    <div className="text-[1.1rem] tracking-[3px] font-mono mb-4">
                      {cardDetails.number || '•••• •••• •••• ••••'}
                    </div>

                    <div className="flex justify-between text-[0.75rem]">
                      <div>
                        <div className="text-[0.6rem] text-[#D8BF9F] uppercase">CARDHOLDER</div>
                        <div className="font-semibold">{cardDetails.name || 'YOUR NAME'}</div>
                      </div>
                      <div>
                        <div className="text-[0.6rem] text-[#D8BF9F] uppercase">EXPIRES</div>
                        <div className="font-semibold">{cardDetails.expiry || 'MM/YY'}</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-[0.8rem] font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                        Card Number *
                      </label>
                      <input
                        type="text"
                        placeholder="4532 0000 0000 8821"
                        value={cardDetails.number}
                        onChange={(e) => setCardDetails((p) => ({ ...p, number: e.target.value }))}
                        className="w-full py-[0.65rem] px-[0.85rem] rounded bg-white text-[0.9rem] outline-none"
                        style={{
                          border: '1px solid var(--border-light)',
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-[0.8rem] font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                        Name on Card *
                      </label>
                      <input
                        type="text"
                        placeholder="Priya Sharma"
                        value={cardDetails.name}
                        onChange={(e) => setCardDetails((p) => ({ ...p, name: e.target.value }))}
                        className="w-full py-[0.65rem] px-[0.85rem] rounded bg-white text-[0.9rem] outline-none"
                        style={{
                          border: '1px solid var(--border-light)',
                        }}
                      />
                    </div>

                    <div className="flex gap-2">
                      <div className="flex-1">
                        <label className="block text-[0.8rem] font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                          Valid Thru *
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          value={cardDetails.expiry}
                          onChange={(e) => setCardDetails((p) => ({ ...p, expiry: e.target.value }))}
                          className="w-full py-[0.65rem] px-[0.85rem] rounded bg-white text-[0.9rem] outline-none"
                          style={{
                            border: '1px solid var(--border-light)',
                          }}
                        />
                      </div>
                      <div className="w-20">
                        <label className="block text-[0.8rem] font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                          CVV *
                        </label>
                        <input
                          type="password"
                          maxLength={4}
                          placeholder="•••"
                          value={cardDetails.cvv}
                          onChange={(e) => setCardDetails((p) => ({ ...p, cvv: e.target.value }))}
                          className="w-full py-[0.65rem] px-[0.85rem] rounded bg-white text-[0.9rem] outline-none"
                          style={{
                            border: '1px solid var(--border-light)',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Net Banking */}
              {paymentMethod === 'netbanking' && (
                <div className="p-6 rounded-md" style={{ backgroundColor: 'var(--theme-champagne-light)', border: '1px solid var(--border-light)' }}>
                  <p className="m-0 mb-4 text-[0.85rem] font-semibold" style={{ color: 'var(--text-primary)' }}>
                    Select Your Bank:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                    {['HDFC Bank', 'ICICI Bank', 'State Bank of India', 'Axis Bank', 'Kotak Mahindra', 'Punjab National'].map((bank) => (
                      <button
                        key={bank}
                        type="button"
                        onClick={() => setSelectedBank(bank)}
                        className="p-3 rounded text-[0.8rem] cursor-pointer text-center"
                        style={{
                          border: selectedBank === bank ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                          backgroundColor: selectedBank === bank ? '#FFFFFF' : '#FFFDF9',
                          fontWeight: selectedBank === bank ? '700' : '500',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {bank}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 4: Cash on Delivery */}
              {paymentMethod === 'cod' && (
                <div className="p-6 rounded-md" style={{ backgroundColor: 'var(--theme-champagne-light)', border: '1px solid var(--border-light)' }}>
                  <div className="flex items-start gap-3">
                    <Truck size={22} className="shrink-0 mt-0.5" style={{ color: 'var(--theme-gold)' }} />
                    <div>
                      <h4 className="m-0 mb-1.5 text-[0.95rem] font-semibold" style={{ color: 'var(--text-primary)' }}>
                        Pay Upon Insured Delivery
                      </h4>
                      <p className="m-0 text-[0.8rem] leading-[1.5]" style={{ color: 'var(--text-secondary)' }}>
                        You can pay with Cash or UPI directly to our delivery courier partner at your doorstep. Please keep the exact amount ready upon delivery.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Payment button */}
              <div className="mt-8">
                <button
                  type="button"
                  onClick={handlePaymentSubmit}
                  disabled={isProcessing}
                  className="btn-slate w-full p-[1.1rem] text-[0.95rem] font-bold tracking-[1.5px] uppercase flex items-center justify-center gap-3 rounded cursor-pointer disabled:cursor-not-allowed disabled:opacity-75"
                >
                  <Lock size={18} />
                  {isProcessing ? 'Verifying & Securing Order...' : `Pay ₹${totalAmount.toLocaleString()} Securely`}
                </button>
                <p className="text-center text-[0.75rem] mt-3 mb-0" style={{ color: 'var(--text-secondary)' }}>
                  By completing payment, you agree to Jewerkart’s Terms of Service & Hallmarking Purity Assurance.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Order Summary Sidebar */}
          <div className="sticky top-[90px]">
            <div
              className="rounded-lg p-7"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div className="flex justify-between items-center mb-5 pb-3" style={{ borderBottom: '1px solid var(--border-light)' }}>
                <h3 className="font-serif text-[1.2rem] m-0 font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Order Bag Summary
                </h3>
                <span className="text-[0.8rem]" style={{ color: 'var(--text-secondary)' }}>
                  {orderItems.length} Handcrafted Items
                </span>
              </div>

              {/* Items preview list */}
              <div className="flex flex-col gap-4 mb-6 max-h-[240px] overflow-y-auto">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex gap-3 items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-cover rounded"
                      style={{
                        border: '1px solid var(--border-light)',
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="m-0 mb-1 text-[0.85rem] font-semibold whitespace-nowrap overflow-hidden text-ellipsis" style={{ color: 'var(--text-primary)' }}>
                        {item.name}
                      </p>
                      <p className="m-0 mb-1 text-[0.7rem]" style={{ color: 'var(--text-secondary)' }}>
                        Qty: {item.quantity} • {item.subtitle}
                      </p>
                      <span className="text-[0.85rem] font-bold" style={{ color: 'var(--text-primary)' }}>
                        ₹{item.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Code section */}
              <form onSubmit={handleApplyCoupon} className="mb-6">
                <label className="block text-[0.75rem] font-semibold uppercase tracking-[0.5px] mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                  Gift Voucher / Royal Coupon
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-secondary)' }} />
                    <input
                      type="text"
                      placeholder="e.g. ROYAL10"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full py-[0.55rem] pr-3 pl-8 text-[0.8rem] rounded bg-[#FFFDF9] outline-none uppercase"
                      style={{
                        border: '1px solid var(--border-light)',
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-gold py-[0.55rem] px-4 rounded text-[0.75rem] cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {couponSuccess && (
                  <p className="mt-1.5 mb-0 text-[0.75rem] text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 size={12} /> {couponSuccess}
                  </p>
                )}
                {couponError && (
                  <p className="mt-1.5 mb-0 text-[0.75rem] text-red-600">
                    {couponError}
                  </p>
                )}
              </form>

              {/* Price Breakdown */}
              <div className="pt-4 flex flex-col gap-[0.65rem]" style={{ borderTop: '1px solid var(--border-light)' }}>
                <div className="flex justify-between text-[0.85rem]" style={{ color: 'var(--text-secondary)' }}>
                  <span>Cart Subtotal</span>
                  <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>₹{subtotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-[0.85rem]" style={{ color: 'var(--text-secondary)' }}>
                  <span>Luxury Velvet Packaging</span>
                  <span className="text-emerald-600 font-semibold">FREE</span>
                </div>

                <div className="flex justify-between text-[0.85rem]" style={{ color: 'var(--text-secondary)' }}>
                  <span>Armored Insured Shipping</span>
                  <span className="text-emerald-600 font-semibold">FREE</span>
                </div>

                <div className="flex justify-between text-[0.85rem]" style={{ color: 'var(--text-secondary)' }}>
                  <span>GST (3% fine jewellery)</span>
                  <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>₹{tax.toLocaleString()}</span>
                </div>

                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-[0.85rem] text-emerald-600">
                    <span>Coupon Discount</span>
                    <span className="font-semibold">- ₹{appliedDiscount.toLocaleString()}</span>
                  </div>
                )}

                <div className="mt-2 pt-3 flex justify-between items-baseline" style={{ borderTop: '1px solid var(--border-light)' }}>
                  <span className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>Total Amount</span>
                  <span className="text-[1.35rem] font-bold" style={{ color: 'var(--theme-gold)' }}>
                    ₹{totalAmount.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Assurances */}
              <div className="mt-6 pt-4 flex flex-col gap-2" style={{ borderTop: '1px dashed var(--border-light)' }}>
                <div className="flex items-center gap-2 text-[0.75rem]" style={{ color: 'var(--text-secondary)' }}>
                  <ShieldCheck size={14} className="text-[#C5914A]" />
                  <span>100% Certified 925 Hallmark Jewellery</span>
                </div>
                <div className="flex items-center gap-2 text-[0.75rem]" style={{ color: 'var(--text-secondary)' }}>
                  <Truck size={14} className="text-[#C5914A]" />
                  <span>Tamper-evident transit seal & full insurance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Payment;
