import React, { useState } from 'react';
import { useLocation, Link, useNavigate, useParams } from 'react-router-dom';
import { 
  CheckCircle2, 
  Package, 
  MapPin, 
  CreditCard, 
  Download, 
  Truck, 
  ArrowRight, 
  Copy, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Calendar,
  Share2
} from 'lucide-react';

const OrderSuccess = () => {
  const { orderId: paramOrderId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  // Fallback mock order if navigated directly
  const order = {
    ...(location.state?.order || {}),
    orderId: paramOrderId || location.state?.order?.orderId || 'JK-2026-894215',
    date: location.state?.order?.date || new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }),
    shippingDetails: {
      fullName: 'Priya Sharma',
      email: 'priya.sharma@example.com',
      phone: '+91 98765 43210',
      address: 'Flat 402, Royale Meadows, 14th Cross, Bandra West',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400050',
    },
    paymentMethod: 'UPI (Instant / QR Verified)',
    items: [
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
    ],
    subtotal: 17998,
    tax: 540,
    discount: 1799,
    totalAmount: 16739,
    deliveryEstimate: 'Wednesday, Sep 28 by 8:00 PM',
  };

  const handleCopyOrderId = () => {
    navigator.clipboard.writeText(order.orderId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadInvoice = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert(`Tax Invoice for ${order.orderId} has been generated and downloaded.`);
    }, 1200);
  };

  return (
    <main
      style={{
        minHeight: 'calc(100vh - 250px)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '3rem 1.5rem 5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1040px',
          margin: '0 auto',
        }}
      >
        {/* Celebration Header Card */}
        <div
          style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: '12px',
            border: '1px solid var(--border-light)',
            padding: '3rem 2rem',
            textAlign: 'center',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '2.5rem',
          }}
        >
          {/* Subtle gold decorative gradient background */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '6px',
              background: 'linear-gradient(90deg, #D4A373 0%, #C5914A 50%, #B37F38 100%)',
            }}
          />

          {/* Golden Success Icon Badge */}
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FFF9F2 0%, #FEF0E0 50%, #F5DEC3 100%)',
              border: '2px solid var(--theme-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              boxShadow: '0 8px 24px rgba(197, 145, 74, 0.25)',
            }}
          >
            <CheckCircle2 size={44} style={{ color: 'var(--theme-gold)' }} />
          </div>

          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>CONGRATULATIONS</span>
          </div>

          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: '700',
              color: 'var(--text-primary)',
              margin: '0 0 0.5rem',
              letterSpacing: '1px',
            }}
          >
            Thank You for Your Order!
          </h1>

          <p
            className="font-garamond"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.2rem',
              maxWidth: '650px',
              margin: '0 auto 1.75rem',
              lineHeight: '1.6',
            }}
          >
            Your jewellery order has been received by our master artisans. Each piece is undergoing hallmarking inspection and will be packed in our signature velvet keepsake box.
          </p>

          {/* Order ID & Copy Bar */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              backgroundColor: 'var(--theme-champagne-light)',
              padding: '0.75rem 1.5rem',
              borderRadius: '30px',
              border: '1px solid var(--border-light)',
              marginBottom: '2rem',
            }}
          >
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Order Reference:
            </span>
            <strong style={{ fontSize: '1rem', color: 'var(--text-primary)', letterSpacing: '1px' }}>
              {order.orderId}
            </strong>
            <button
              onClick={handleCopyOrderId}
              title="Copy Order ID"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: copied ? '#059669' : 'var(--text-gold)',
                fontSize: '0.8rem',
                fontWeight: '600',
                padding: '2px 6px',
              }}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

          {/* Fast action CTA buttons */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => navigate(`/track-order?id=${order.orderId}`)}
              className="btn-slate"
              style={{
                padding: '0.85rem 1.8rem',
                fontSize: '0.85rem',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                cursor: 'pointer',
              }}
            >
              <Truck size={18} />
              Track Shipment Live
            </button>

            <button
              onClick={handleDownloadInvoice}
              disabled={downloading}
              className="btn-gold"
              style={{
                padding: '0.85rem 1.8rem',
                fontSize: '0.85rem',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                cursor: 'pointer',
              }}
            >
              <Download size={18} />
              {downloading ? 'Generating...' : 'Download Invoice'}
            </button>

            <Link
              to="/"
              className="btn-outline-dark"
              style={{
                padding: '0.85rem 1.8rem',
                fontSize: '0.85rem',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                borderRadius: '4px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                textDecoration: 'none',
              }}
            >
              Continue Shopping <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Detailed Two-Column Breakdown */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.4fr) minmax(320px, 1fr)',
            gap: '2rem',
          }}
        >
          {/* LEFT: Items Ordered */}
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: '8px',
              border: '1px solid var(--border-light)',
              padding: '2rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Package size={20} style={{ color: 'var(--theme-gold)' }} />
                <h3 className="font-serif" style={{ fontSize: '1.25rem', margin: 0, fontWeight: '600', color: 'var(--text-primary)' }}>
                  Ordered Items ({order.items.length})
                </h3>
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Date: {order.date}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
              {order.items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    paddingBottom: '1.25rem',
                    borderBottom: '1px solid var(--border-light)',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '74px',
                      height: '74px',
                      objectFit: 'cover',
                      borderRadius: '6px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--bg-circle-item)',
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h4 style={{ margin: '0 0 0.25rem', fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                        {item.name}
                      </h4>
                      <span style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                    <p style={{ margin: '0 0 0.35rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      {item.subtitle}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      <span>Qty: <strong>{item.quantity}</strong></span>
                      <span>•</span>
                      <span style={{ color: 'var(--theme-gold)', fontWeight: '600' }}>BIS Hallmark Certified</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Calculations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                <span>Subtotal</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>₹{order.subtotal.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                <span>Insured Armored Shipping</span>
                <span style={{ color: '#059669', fontWeight: '600' }}>FREE</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                <span>GST (3% jewellery)</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>₹{order.tax.toLocaleString()}</span>
              </div>
              {order.discount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#059669' }}>
                  <span>Royal Discount Applied</span>
                  <span style={{ fontWeight: '600' }}>- ₹{order.discount.toLocaleString()}</span>
                </div>
              )}
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem', marginTop: '0.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>Grand Total Paid</span>
                <span style={{ fontSize: '1.35rem', fontWeight: '700', color: 'var(--theme-gold)' }}>
                  ₹{order.totalAmount.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Delivery & Trust Guarantee */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Delivery address & info */}
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '8px',
                border: '1px solid var(--border-light)',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
                <MapPin size={18} style={{ color: 'var(--theme-gold)' }} />
                <h4 className="font-serif" style={{ fontSize: '1.1rem', margin: 0, fontWeight: '600', color: 'var(--text-primary)' }}>
                  Delivery Destination
                </h4>
              </div>

              <div style={{ fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
                <p style={{ margin: '0 0 0.25rem', fontWeight: '700' }}>{order.shippingDetails?.fullName}</p>
                <p style={{ margin: '0 0 0.25rem', color: 'var(--text-secondary)' }}>{order.shippingDetails?.address}</p>
                <p style={{ margin: '0 0 0.25rem', color: 'var(--text-secondary)' }}>
                  {order.shippingDetails?.city}, {order.shippingDetails?.state} - {order.shippingDetails?.pincode}
                </p>
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Phone: {order.shippingDetails?.phone}</p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <Calendar size={16} style={{ color: 'var(--theme-gold)' }} />
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Estimated Delivery:</span>
                </div>
                <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                  {order.deliveryEstimate}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginTop: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <CreditCard size={16} style={{ color: 'var(--theme-gold)' }} />
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Payment Mode:</span>
                </div>
                <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                  {order.paymentMethod} • <span style={{ color: '#059669' }}>Paid In Full</span>
                </p>
              </div>
            </div>

            {/* Quality & Return Assurances */}
            <div
              style={{
                backgroundColor: 'var(--theme-champagne-light)',
                borderRadius: '8px',
                border: '1px solid var(--border-light)',
                padding: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Sparkles size={18} style={{ color: 'var(--theme-gold)' }} />
                <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                  The Jewerkart Promise
                </h4>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <ShieldCheck size={16} style={{ color: 'var(--theme-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>BIS Hallmarked:</strong> Official laser-engraved hallmarking certificate included in box.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--theme-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>15-Day Easy Returns:</strong> No questions asked return & doorstep pickup policy.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <Sparkles size={16} style={{ color: 'var(--theme-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Complimentary Lifetime Care:</strong> Free lifetime polishing & cleaning at any atelier.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderSuccess;
