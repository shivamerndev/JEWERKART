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
      className="min-h-[calc(100vh-250px)] pt-12 px-6 pb-20"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-[1040px] mx-auto">
        {/* Celebration Header Card */}
        <div
          className="rounded-xl py-12 px-8 text-center relative overflow-hidden mb-10"
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          {/* Subtle gold decorative gradient background */}
          <div
            className="absolute top-0 left-0 right-0 h-1.5"
            style={{
              background: 'linear-gradient(90deg, #D4A373 0%, #C5914A 50%, #B37F38 100%)',
            }}
          />

          {/* Golden Success Icon Badge */}
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_8px_24px_rgba(197,145,74,0.25)]"
            style={{
              background: 'linear-gradient(135deg, #FFF9F2 0%, #FEF0E0 50%, #F5DEC3 100%)',
              border: '2px solid var(--theme-gold)',
            }}
          >
            <CheckCircle2 size={44} style={{ color: 'var(--theme-gold)' }} />
          </div>

          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">CONGRATULATIONS</span>
          </div>

          <h1
            className="font-serif font-bold mb-2 tracking-[1px]"
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              color: 'var(--text-primary)',
            }}
          >
            Thank You for Your Order!
          </h1>

          <p
            className="font-garamond text-[1.2rem] max-w-[650px] mx-auto mb-7 leading-[1.6]"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            Your jewellery order has been received by our master artisans. Each piece is undergoing hallmarking inspection and will be packed in our signature velvet keepsake box.
          </p>

          {/* Order ID & Copy Bar */}
          <div
            className="inline-flex items-center gap-4 py-3 px-6 rounded-full mb-8"
            style={{
              backgroundColor: 'var(--theme-champagne-light)',
              border: '1px solid var(--border-light)',
            }}
          >
            <span className="text-[0.85rem]" style={{ color: 'var(--text-secondary)' }}>
              Order Reference:
            </span>
            <strong className="text-base tracking-[1px]" style={{ color: 'var(--text-primary)' }}>
              {order.orderId}
            </strong>
            <button
              onClick={handleCopyOrderId}
              title="Copy Order ID"
              className="bg-transparent border-none cursor-pointer flex items-center gap-1 text-[0.8rem] font-semibold py-0.5 px-1.5"
              style={{
                color: copied ? '#059669' : 'var(--text-gold)',
              }}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

          {/* Fast action CTA buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => navigate(`/track-order?id=${order.orderId}`)}
              className="btn-slate py-3.5 px-7 text-[0.85rem] font-semibold tracking-[1px] uppercase rounded flex items-center gap-2.5 cursor-pointer"
            >
              <Truck size={18} />
              Track Shipment Live
            </button>

            <button
              onClick={handleDownloadInvoice}
              disabled={downloading}
              className="btn-gold py-3.5 px-7 text-[0.85rem] font-semibold tracking-[1px] uppercase rounded flex items-center gap-2.5 cursor-pointer"
            >
              <Download size={18} />
              {downloading ? 'Generating...' : 'Download Invoice'}
            </button>

            <Link
              to="/"
              className="btn-outline-dark py-3.5 px-7 text-[0.85rem] font-semibold tracking-[1px] uppercase rounded inline-flex items-center gap-2.5 no-underline"
            >
              Continue Shopping <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Detailed Two-Column Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(320px,1fr)] gap-8">
          {/* LEFT: Items Ordered */}
          <div
            className="rounded-lg p-8"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div
              className="flex justify-between items-center pb-4 mb-6"
              style={{ borderBottom: '1px solid var(--border-light)' }}
            >
              <div className="flex items-center gap-3">
                <Package size={20} style={{ color: 'var(--theme-gold)' }} />
                <h3 className="font-serif text-[1.25rem] m-0 font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Ordered Items ({order.items.length})
                </h3>
              </div>
              <span className="text-[0.8rem]" style={{ color: 'var(--text-secondary)' }}>
                Date: {order.date}
              </span>
            </div>

            <div className="flex flex-col gap-5 mb-6">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 pb-5"
                  style={{ borderBottom: '1px solid var(--border-light)' }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[74px] h-[74px] object-cover rounded-md"
                    style={{
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--bg-circle-item)',
                    }}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="m-0 mb-1 text-[0.95rem] font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {item.name}
                      </h4>
                      <span className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                    <p className="m-0 mb-1.5 text-[0.8rem]" style={{ color: 'var(--text-secondary)' }}>
                      {item.subtitle}
                    </p>
                    <div className="flex items-center gap-4 text-[0.75rem]" style={{ color: 'var(--text-secondary)' }}>
                      <span>Qty: <strong>{item.quantity}</strong></span>
                      <span>•</span>
                      <span className="font-semibold" style={{ color: 'var(--theme-gold)' }}>BIS Hallmark Certified</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Calculations */}
            <div className="flex flex-col gap-2.5 text-[0.85rem]">
              <div className="flex justify-between" style={{ color: 'var(--text-secondary)' }}>
                <span>Subtotal</span>
                <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>₹{order.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between" style={{ color: 'var(--text-secondary)' }}>
                <span>Insured Armored Shipping</span>
                <span className="text-[#059669] font-semibold">FREE</span>
              </div>
              <div className="flex justify-between" style={{ color: 'var(--text-secondary)' }}>
                <span>GST (3% jewellery)</span>
                <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>₹{order.tax.toLocaleString()}</span>
              </div>
              {order.discount > 0 && (
                <div className="flex justify-between text-[#059669]">
                  <span>Royal Discount Applied</span>
                  <span className="font-semibold">- ₹{order.discount.toLocaleString()}</span>
                </div>
              )}
              <div
                className="pt-3 mt-1 flex justify-between items-baseline"
                style={{ borderTop: '1px solid var(--border-light)' }}
              >
                <span className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>Grand Total Paid</span>
                <span className="text-[1.35rem] font-bold" style={{ color: 'var(--theme-gold)' }}>
                  ₹{order.totalAmount.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Delivery & Trust Guarantee */}
          <div className="flex flex-col gap-6">
            {/* Delivery address & info */}
            <div
              className="rounded-lg p-7"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div
                className="flex items-center gap-2.5 mb-5 pb-3"
                style={{ borderBottom: '1px solid var(--border-light)' }}
              >
                <MapPin size={18} style={{ color: 'var(--theme-gold)' }} />
                <h4 className="font-serif text-[1.1rem] m-0 font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Delivery Destination
                </h4>
              </div>

              <div className="text-[0.85rem] leading-[1.6] mb-5" style={{ color: 'var(--text-primary)' }}>
                <p className="m-0 mb-1 font-bold">{order.shippingDetails?.fullName}</p>
                <p className="m-0 mb-1" style={{ color: 'var(--text-secondary)' }}>{order.shippingDetails?.address}</p>
                <p className="m-0 mb-1" style={{ color: 'var(--text-secondary)' }}>
                  {order.shippingDetails?.city}, {order.shippingDetails?.state} - {order.shippingDetails?.pincode}
                </p>
                <p className="m-0" style={{ color: 'var(--text-secondary)' }}>Phone: {order.shippingDetails?.phone}</p>
              </div>

              <div className="pt-4" style={{ borderTop: '1px solid var(--border-light)' }}>
                <div className="flex items-center gap-2.5 mb-2">
                  <Calendar size={16} style={{ color: 'var(--theme-gold)' }} />
                  <span className="text-[0.8rem]" style={{ color: 'var(--text-secondary)' }}>Estimated Delivery:</span>
                </div>
                <p className="m-0 text-[0.9rem] font-bold" style={{ color: 'var(--text-primary)' }}>
                  {order.deliveryEstimate}
                </p>
              </div>

              <div className="pt-4 mt-4" style={{ borderTop: '1px solid var(--border-light)' }}>
                <div className="flex items-center gap-2.5 mb-2">
                  <CreditCard size={16} style={{ color: 'var(--theme-gold)' }} />
                  <span className="text-[0.8rem]" style={{ color: 'var(--text-secondary)' }}>Payment Mode:</span>
                </div>
                <p className="m-0 text-[0.85rem] font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {order.paymentMethod} • <span className="text-[#059669]">Paid In Full</span>
                </p>
              </div>
            </div>

            {/* Quality & Return Assurances */}
            <div
              className="rounded-lg p-6"
              style={{
                backgroundColor: 'var(--theme-champagne-light)',
                border: '1px solid var(--border-light)',
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={18} style={{ color: 'var(--theme-gold)' }} />
                <h4 className="m-0 text-[0.95rem] font-bold" style={{ color: 'var(--text-primary)' }}>
                  The Jewerkart Promise
                </h4>
              </div>

              <ul className="list-none p-0 m-0 flex flex-col gap-3 text-[0.8rem]" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-2">
                  <ShieldCheck size={16} className="shrink-0 mt-0.5" style={{ color: 'var(--theme-gold)' }} />
                  <span><strong>BIS Hallmarked:</strong> Official laser-engraved hallmarking certificate included in box.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: 'var(--theme-gold)' }} />
                  <span><strong>15-Day Easy Returns:</strong> No questions asked return & doorstep pickup policy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles size={16} className="shrink-0 mt-0.5" style={{ color: 'var(--theme-gold)' }} />
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
