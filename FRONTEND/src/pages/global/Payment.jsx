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
      style={{
        minHeight: 'calc(100vh - 250px)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '2.5rem 1.5rem 4rem',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
        }}
      >
        {/* Navigation Breadcrumb / Back button */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link
            to="/cart"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: '500',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <ArrowLeft size={16} /> Back to Bag
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            <Lock size={14} style={{ color: '#C5914A' }} />
            <span>256-Bit SSL Luxury Encrypted Checkout</span>
          </div>
        </div>

        {/* Checkout Steps Progress Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '3rem',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: 'var(--text-primary)',
                color: '#FEF0E0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem',
                fontWeight: '600',
              }}
            >
              <Check size={16} />
            </div>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)' }}>Shopping Bag</span>
          </div>

          <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--theme-gold)' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: 'var(--theme-gold)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem',
                fontWeight: '700',
              }}
            >
              2
            </div>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--theme-gold)' }}>Payment & Delivery</span>
          </div>

          <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--border-light)' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.6 }}>
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: '#EED8C3',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem',
                fontWeight: '600',
              }}
            >
              3
            </div>
            <span style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--text-secondary)' }}>Order Confirmation</span>
          </div>
        </div>

        {/* Main Grid: Forms Left, Summary Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.5fr) minmax(320px, 1fr)',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* LEFT: Shipping Details + Payment Selection */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Step 1: Shipping Address Form */}
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '8px',
                border: '1px solid var(--border-light)',
                padding: '2rem',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--theme-champagne)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--theme-gold)',
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h2 className="font-serif" style={{ fontSize: '1.25rem', margin: 0, fontWeight: '600', color: 'var(--text-primary)' }}>
                      Delivery Destination
                    </h2>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Insured luxury transit by armored logistics
                    </p>
                  </div>
                </div>
                <span className="badge-925" style={{ fontSize: '9px' }}>ARMORED LOGISTICS</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                    Recipient Full Name *
                  </label>
                  <input
                    type="text"
                    value={shippingDetails.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '4px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: '#FFFDF9',
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    value={shippingDetails.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '4px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: '#FFFDF9',
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                    Street Address & Apartment / Villa *
                  </label>
                  <input
                    type="text"
                    value={shippingDetails.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '4px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: '#FFFDF9',
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                    City *
                  </label>
                  <input
                    type="text"
                    value={shippingDetails.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '4px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: '#FFFDF9',
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    value={shippingDetails.pincode}
                    onChange={(e) => handleInputChange('pincode', e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '4px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: '#FFFDF9',
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Payment Mode Selection */}
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '8px',
                border: '1px solid var(--border-light)',
                padding: '2rem',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--theme-champagne)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--theme-gold)',
                    }}
                  >
                    <CreditCard size={18} />
                  </div>
                  <div>
                    <h2 className="font-serif" style={{ fontSize: '1.25rem', margin: 0, fontWeight: '600', color: 'var(--text-primary)' }}>
                      Payment Method
                    </h2>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Choose your preferred luxury payment channel
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#10B981', fontSize: '0.8rem', fontWeight: '600' }}>
                  <ShieldCheck size={16} /> Verified Secure
                </div>
              </div>

              {/* Payment Tabs / Radio selector */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '1.75rem' }}>
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
                      style={{
                        padding: '1rem 0.5rem',
                        borderRadius: '6px',
                        border: isSelected ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                        backgroundColor: isSelected ? 'var(--theme-champagne-light)' : '#FFFDF9',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.35rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <Icon size={22} style={{ color: isSelected ? 'var(--theme-gold)' : 'var(--text-secondary)' }} />
                      <span style={{ fontSize: '0.85rem', fontWeight: isSelected ? '700' : '600', color: 'var(--text-primary)' }}>
                        {item.label}
                      </span>
                      <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
                        {item.subtitle}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Tab 1: UPI Form */}
              {paymentMethod === 'upi' && (
                <div style={{ backgroundColor: 'var(--theme-champagne-light)', padding: '1.5rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div>
                      <h4 style={{ margin: '0 0 0.25rem', fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                        Scan QR Code or Enter VPA / UPI ID
                      </h4>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        Instant verification with Google Pay, PhonePe, Paytm or BHIM
                      </p>
                    </div>
                    <span className="badge-gold" style={{ fontSize: '9px' }}>INSTANT REFUND ELIGIBLE</span>
                  </div>

                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div
                      style={{
                        backgroundColor: '#FFFFFF',
                        padding: '0.85rem',
                        borderRadius: '6px',
                        border: '1px solid var(--border-light)',
                        textAlign: 'center',
                      }}
                    >
                      {/* Simulated QR Code */}
                      <div
                        style={{
                          width: '110px',
                          height: '110px',
                          backgroundColor: '#1C140E',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FEF0E0',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          position: 'relative',
                        }}
                      >
                        <div style={{ position: 'absolute', inset: '6px', border: '2px dashed #C5914A', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ fontSize: '0.65rem', letterSpacing: '0.5px', color: '#FFF' }}>JEWERKART QR</span>
                        </div>
                      </div>
                      <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.4rem', fontWeight: '600' }}>
                        Scan & Pay ₹{totalAmount.toLocaleString()}
                      </span>
                    </div>

                    <div style={{ flex: 1, minWidth: '220px' }}>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                        Enter UPI ID / VPA
                      </label>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <input
                          type="text"
                          placeholder="e.g. mobileNumber@upi or name@okhdfcbank"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          style={{
                            flex: 1,
                            padding: '0.65rem 0.85rem',
                            borderRadius: '4px',
                            border: '1px solid var(--border-light)',
                            backgroundColor: '#FFFFFF',
                            fontSize: '0.85rem',
                            outline: 'none',
                          }}
                        />
                        <button
                          type="button"
                          className="btn-gold"
                          style={{
                            padding: '0.65rem 1rem',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            cursor: 'pointer',
                          }}
                        >
                          Verify
                        </button>
                      </div>
                      <p style={{ margin: '0.6rem 0 0', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        Supported apps: Google Pay, PhonePe, Paytm, CRED, Amazon Pay, BHIM
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Card Form */}
              {paymentMethod === 'card' && (
                <div style={{ backgroundColor: 'var(--theme-champagne-light)', padding: '1.5rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                  {/* Luxury Card Graphic */}
                  <div
                    style={{
                      maxWidth: '340px',
                      background: 'linear-gradient(135deg, #1C140E 0%, #38291C 60%, #5B4028 100%)',
                      borderRadius: '10px',
                      padding: '1.25rem',
                      color: '#FEF0E0',
                      marginBottom: '1.5rem',
                      boxShadow: '0 8px 24px rgba(28,20,14,0.25)',
                      border: '1px solid #C5914A',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <span className="font-serif" style={{ fontSize: '1rem', letterSpacing: '2px', fontWeight: '700', color: '#FEF0E0' }}>
                        JEWERKART ELITE
                      </span>
                      <Sparkles size={18} style={{ color: '#C5914A' }} />
                    </div>

                    <div style={{ width: '36px', height: '26px', backgroundColor: '#D4A373', borderRadius: '4px', marginBottom: '1rem', opacity: 0.9 }} />

                    <div style={{ fontSize: '1.1rem', letterSpacing: '3px', fontFamily: 'monospace', marginBottom: '1rem' }}>
                      {cardDetails.number || '•••• •••• •••• ••••'}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                      <div>
                        <div style={{ fontSize: '0.6rem', color: '#D8BF9F', textTransform: 'uppercase' }}>CARDHOLDER</div>
                        <div style={{ fontWeight: '600' }}>{cardDetails.name || 'YOUR NAME'}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.6rem', color: '#D8BF9F', textTransform: 'uppercase' }}>EXPIRES</div>
                        <div style={{ fontWeight: '600' }}>{cardDetails.expiry || 'MM/YY'}</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ gridColumn: 'span 2' }}>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                        Card Number *
                      </label>
                      <input
                        type="text"
                        placeholder="4532 0000 0000 8821"
                        value={cardDetails.number}
                        onChange={(e) => setCardDetails((p) => ({ ...p, number: e.target.value }))}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          borderRadius: '4px',
                          border: '1px solid var(--border-light)',
                          backgroundColor: '#FFFFFF',
                          fontSize: '0.9rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                        Name on Card *
                      </label>
                      <input
                        type="text"
                        placeholder="Priya Sharma"
                        value={cardDetails.name}
                        onChange={(e) => setCardDetails((p) => ({ ...p, name: e.target.value }))}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          borderRadius: '4px',
                          border: '1px solid var(--border-light)',
                          backgroundColor: '#FFFFFF',
                          fontSize: '0.9rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                          Valid Thru *
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          value={cardDetails.expiry}
                          onChange={(e) => setCardDetails((p) => ({ ...p, expiry: e.target.value }))}
                          style={{
                            width: '100%',
                            padding: '0.65rem 0.85rem',
                            borderRadius: '4px',
                            border: '1px solid var(--border-light)',
                            backgroundColor: '#FFFFFF',
                            fontSize: '0.9rem',
                            outline: 'none',
                          }}
                        />
                      </div>
                      <div style={{ width: '80px' }}>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                          CVV *
                        </label>
                        <input
                          type="password"
                          maxLength={4}
                          placeholder="•••"
                          value={cardDetails.cvv}
                          onChange={(e) => setCardDetails((p) => ({ ...p, cvv: e.target.value }))}
                          style={{
                            width: '100%',
                            padding: '0.65rem 0.85rem',
                            borderRadius: '4px',
                            border: '1px solid var(--border-light)',
                            backgroundColor: '#FFFFFF',
                            fontSize: '0.9rem',
                            outline: 'none',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Net Banking */}
              {paymentMethod === 'netbanking' && (
                <div style={{ backgroundColor: 'var(--theme-champagne-light)', padding: '1.5rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                  <p style={{ margin: '0 0 1rem', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                    Select Your Bank:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
                    {['HDFC Bank', 'ICICI Bank', 'State Bank of India', 'Axis Bank', 'Kotak Mahindra', 'Punjab National'].map((bank) => (
                      <button
                        key={bank}
                        type="button"
                        onClick={() => setSelectedBank(bank)}
                        style={{
                          padding: '0.75rem',
                          borderRadius: '4px',
                          border: selectedBank === bank ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                          backgroundColor: selectedBank === bank ? '#FFFFFF' : '#FFFDF9',
                          fontSize: '0.8rem',
                          fontWeight: selectedBank === bank ? '700' : '500',
                          color: 'var(--text-primary)',
                          cursor: 'pointer',
                          textAlign: 'center',
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
                <div style={{ backgroundColor: 'var(--theme-champagne-light)', padding: '1.5rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Truck size={22} style={{ color: 'var(--theme-gold)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h4 style={{ margin: '0 0 0.35rem', fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                        Pay Upon Insured Delivery
                      </h4>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                        You can pay with Cash or UPI directly to our delivery courier partner at your doorstep. Please keep the exact amount ready upon delivery.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Payment button */}
              <div style={{ marginTop: '2rem' }}>
                <button
                  type="button"
                  onClick={handlePaymentSubmit}
                  disabled={isProcessing}
                  className="btn-slate"
                  style={{
                    width: '100%',
                    padding: '1.1rem',
                    fontSize: '0.95rem',
                    fontWeight: '700',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    borderRadius: '4px',
                    cursor: isProcessing ? 'not-allowed' : 'pointer',
                    opacity: isProcessing ? 0.75 : 1,
                  }}
                >
                  <Lock size={18} />
                  {isProcessing ? 'Verifying & Securing Order...' : `Pay ₹${totalAmount.toLocaleString()} Securely`}
                </button>
                <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-secondary)', margin: '0.75rem 0 0' }}>
                  By completing payment, you agree to Jewerkart’s Terms of Service & Hallmarking Purity Assurance.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Order Summary Sidebar */}
          <div style={{ position: 'sticky', top: '90px' }}>
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '8px',
                border: '1px solid var(--border-light)',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
                <h3 className="font-serif" style={{ fontSize: '1.2rem', margin: 0, fontWeight: '600', color: 'var(--text-primary)' }}>
                  Order Bag Summary
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {orderItems.length} Handcrafted Items
                </span>
              </div>

              {/* Items preview list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem', maxHeight: '240px', overflowY: 'auto' }}>
                {orderItems.map((item) => (
                  <div key={item.id} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: '56px',
                        height: '56px',
                        objectFit: 'cover',
                        borderRadius: '4px',
                        border: '1px solid var(--border-light)',
                      }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ margin: '0 0 0.2rem', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {item.name}
                      </p>
                      <p style={{ margin: '0 0 0.2rem', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                        Qty: {item.quantity} • {item.subtitle}
                      </p>
                      <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                        ₹{item.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Code section */}
              <form onSubmit={handleApplyCoupon} style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.4rem', color: 'var(--text-secondary)' }}>
                  Gift Voucher / Royal Coupon
                </label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <div style={{ position: 'relative', flex: 1 }}>
                    <Tag size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                    <input
                      type="text"
                      placeholder="e.g. ROYAL10"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.55rem 0.75rem 0.55rem 2rem',
                        fontSize: '0.8rem',
                        borderRadius: '4px',
                        border: '1px solid var(--border-light)',
                        backgroundColor: '#FFFDF9',
                        outline: 'none',
                        textTransform: 'uppercase',
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-gold"
                    style={{
                      padding: '0.55rem 1rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                    }}
                  >
                    Apply
                  </button>
                </div>
                {couponSuccess && (
                  <p style={{ margin: '0.4rem 0 0', fontSize: '0.75rem', color: '#059669', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <CheckCircle2 size={12} /> {couponSuccess}
                  </p>
                )}
                {couponError && (
                  <p style={{ margin: '0.4rem 0 0', fontSize: '0.75rem', color: '#DC2626' }}>
                    {couponError}
                  </p>
                )}
              </form>

              {/* Price Breakdown */}
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <span>Cart Subtotal</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>₹{subtotal.toLocaleString()}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <span>Luxury Velvet Packaging</span>
                  <span style={{ color: '#059669', fontWeight: '600' }}>FREE</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <span>Armored Insured Shipping</span>
                  <span style={{ color: '#059669', fontWeight: '600' }}>FREE</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <span>GST (3% fine jewellery)</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>₹{tax.toLocaleString()}</span>
                </div>

                {appliedDiscount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#059669' }}>
                    <span>Coupon Discount</span>
                    <span style={{ fontWeight: '600' }}>- ₹{appliedDiscount.toLocaleString()}</span>
                  </div>
                )}

                <div style={{ borderTop: '1px solid var(--border-light)', marginTop: '0.5rem', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>Total Amount</span>
                  <span style={{ fontSize: '1.35rem', fontWeight: '700', color: 'var(--theme-gold)' }}>
                    ₹{totalAmount.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Assurances */}
              <div style={{ marginTop: '1.5rem', borderTop: '1px dashed var(--border-light)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  <ShieldCheck size={14} style={{ color: '#C5914A' }} />
                  <span>100% Certified 925 Hallmark Jewellery</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  <Truck size={14} style={{ color: '#C5914A' }} />
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
