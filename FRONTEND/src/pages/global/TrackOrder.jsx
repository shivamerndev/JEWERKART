import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  Truck, 
  Package, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Copy, 
  Check, 
  AlertCircle,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

const TrackOrder = () => {
  const [searchParams] = useSearchParams();
  const initialOrderId = searchParams.get('id') || 'JK-2026-894215';

  const [orderIdInput, setOrderIdInput] = useState(initialOrderId);
  const [phoneInput, setPhoneInput] = useState('+91 98765 43210');
  const [isSearching, setIsSearching] = useState(false);
  const [copied, setCopied] = useState(false);

  // Mock tracked shipment data
  const [shipmentData, setShipmentData] = useState({
    orderId: initialOrderId,
    awbNumber: 'BLUEDART-SEC-9928174',
    courierPartner: 'Sequel Armored Logistics (BlueDart Express Partner)',
    carrierContact: '+91 1800 209 1234',
    recipientName: 'Priya Sharma',
    deliveryAddress: 'Flat 402, Royale Meadows, 14th Cross, Bandra West, Mumbai 400050',
    estimatedDelivery: 'Wednesday, Sep 28, 2026 by 8:00 PM',
    currentStatus: 'Out for Delivery',
    otpRequired: 'Yes (Shared via SMS to +91 98*** **210)',
    items: [
      {
        id: 1,
        name: 'Navratna Aura Oval Statement Studs',
        qty: 1,
        purity: '925 Sterling Silver',
        image: '/category_earrings.jpg',
      },
      {
        id: 2,
        name: 'Bridal Heritage Kundan Choker',
        qty: 1,
        purity: 'Handcrafted Basra Pearls & Kundan',
        image: '/category_necklace.jpg',
      },
    ],
    timeline: [
      {
        id: 1,
        title: 'Order Placed & Confirmed',
        timestamp: 'Sep 24, 2026 • 10:30 AM',
        location: 'Jewerkart Flagship Atelier, Mumbai',
        description: 'Order details verified and sent to master artisans for crafting & inspection.',
        status: 'completed',
      },
      {
        id: 2,
        title: 'BIS 925 Laser Hallmarking & QC',
        timestamp: 'Sep 24, 2026 • 04:15 PM',
        location: 'Govt. Approved Assay Center, Mumbai',
        description: 'Piece tested for 92.5% silver purity and laser hallmarked with hallmark certificate.',
        status: 'completed',
      },
      {
        id: 3,
        title: 'Luxury Velvet Packaging & Dispatch',
        timestamp: 'Sep 25, 2026 • 11:45 AM',
        location: 'Central Vault Fulfillment Center',
        description: 'Package placed into tamper-evident insured armored transit box.',
        status: 'completed',
      },
      {
        id: 4,
        title: 'Arrived at City Gateway Hub',
        timestamp: 'Sep 26, 2026 • 08:30 PM',
        location: 'Mumbai Air Logistics Gateway',
        description: 'Shipment cleared transit sorting and transferred to regional delivery van.',
        status: 'completed',
      },
      {
        id: 5,
        title: 'Out for Delivery',
        timestamp: 'Today • 09:15 AM',
        location: 'Bandra Delivery Center, Mumbai',
        description: 'Armored courier executive Rajesh K. (+91 98200 11223) is en route with your package.',
        status: 'active',
      },
      {
        id: 6,
        title: 'Delivered to Recipient',
        timestamp: 'Expected Today by 8:00 PM',
        location: 'Delivery Destination',
        description: 'Delivery confirmation pending OTP entry at doorstep.',
        status: 'upcoming',
      },
    ],
  });

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setShipmentData((prev) => ({
        ...prev,
        orderId: orderIdInput.trim() || 'JK-2026-894215',
      }));
    }, 600);
  };

  const handleCopyAwb = () => {
    navigator.clipboard.writeText(shipmentData.awbNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main
      style={{
        minHeight: 'calc(100vh - 250px)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '2.5rem 1.5rem 5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>LIVE SHIPMENT RADAR</span>
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: '0 0 0.35rem',
              letterSpacing: '1px',
            }}
          >
            Track Your Jewellery Order
          </h1>
          <p
            className="font-garamond"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.1rem',
              margin: 0,
            }}
          >
            Real-time armored logistics tracking with tamper-proof security
          </p>
        </div>

        {/* Tracking Input Search Card */}
        <div
          style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: '8px',
            border: '1px solid var(--border-light)',
            padding: '1.75rem',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '2.5rem',
          }}
        >
          <form onSubmit={handleTrackSubmit} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr auto', gap: '1rem', alignItems: 'end' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                Order ID / AWB Number *
              </label>
              <div style={{ position: 'relative' }}>
                <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                <input
                  type="text"
                  placeholder="e.g. JK-2026-894215"
                  value={orderIdInput}
                  onChange={(e) => setOrderIdInput(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem 0.65rem 2.25rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border-light)',
                    backgroundColor: '#FFFDF9',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                Phone Number / Email
              </label>
              <input
                type="text"
                placeholder="+91 98765 43210"
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '4px',
                  border: '1px solid var(--border-light)',
                  backgroundColor: '#FFFDF9',
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isSearching}
              className="btn-slate"
              style={{
                padding: '0.72rem 1.8rem',
                fontSize: '0.85rem',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                borderRadius: '4px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {isSearching ? 'Locating...' : 'Track Package'}
            </button>
          </form>
        </div>

        {/* Live Tracking Information Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.6fr) minmax(320px, 1fr)',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* LEFT: Interactive Step Timeline */}
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: '8px',
              border: '1px solid var(--border-light)',
              padding: '2rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            {/* Header info */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.25rem' }}>
              <div>
                <span className="badge-gold" style={{ fontSize: '10px', marginBottom: '0.4rem', display: 'inline-block' }}>
                  {shipmentData.currentStatus.toUpperCase()}
                </span>
                <h3 className="font-serif" style={{ fontSize: '1.4rem', margin: 0, fontWeight: '700', color: 'var(--text-primary)' }}>
                  Delivery Progress
                </h3>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block' }}>Expected Arrival</span>
                <strong style={{ fontSize: '0.95rem', color: 'var(--theme-gold)' }}>
                  {shipmentData.estimatedDelivery}
                </strong>
              </div>
            </div>

            {/* Timeline Stepper */}
            <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
              {/* Vertical connecting line */}
              <div
                style={{
                  position: 'absolute',
                  top: '15px',
                  bottom: '35px',
                  left: '14px',
                  width: '2px',
                  backgroundColor: 'var(--border-light)',
                  zIndex: 0,
                }}
              />

              {shipmentData.timeline.map((step, idx) => {
                const isCompleted = step.status === 'completed';
                const isActive = step.status === 'active';
                const isUpcoming = step.status === 'upcoming';

                return (
                  <div key={step.id} style={{ position: 'relative', marginBottom: idx === shipmentData.timeline.length - 1 ? 0 : '2rem' }}>
                    {/* Step Icon / Dot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-2.5rem',
                        top: '0',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        backgroundColor: isCompleted ? 'var(--theme-gold)' : isActive ? 'var(--text-primary)' : '#FFFFFF',
                        border: isUpcoming ? '2px solid var(--border-light)' : '2px solid transparent',
                        color: isUpcoming ? 'var(--text-secondary)' : '#FEF0E0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1,
                        boxShadow: isActive ? '0 0 0 4px rgba(197, 145, 74, 0.25)' : 'none',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {isCompleted ? (
                        <Check size={16} />
                      ) : isActive ? (
                        <Truck size={16} style={{ color: '#FEF0E0' }} />
                      ) : (
                        <Clock size={14} style={{ color: 'var(--border-light)' }} />
                      )}
                    </div>

                    {/* Step Content */}
                    <div
                      style={{
                        backgroundColor: isActive ? 'var(--theme-champagne-light)' : 'transparent',
                        padding: isActive ? '1rem 1.25rem' : '0 0',
                        borderRadius: '6px',
                        border: isActive ? '1px solid var(--border-light)' : 'none',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <h4
                          style={{
                            margin: 0,
                            fontSize: '0.95rem',
                            fontWeight: '700',
                            color: isActive ? 'var(--theme-gold)' : 'var(--text-primary)',
                          }}
                        >
                          {step.title}
                        </h4>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                          {step.timestamp}
                        </span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                        <MapPin size={13} style={{ color: 'var(--theme-gold)' }} />
                        <span>{step.location}</span>
                      </div>

                      <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Logistics & Security Overview */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Courier & Waybill Information */}
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '8px',
                border: '1px solid var(--border-light)',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h4 className="font-serif" style={{ fontSize: '1.1rem', margin: '0 0 1.25rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                Courier & Waybill Dossier
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem' }}>
                <div>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', display: 'block' }}>Armored Carrier:</span>
                  <strong style={{ color: 'var(--text-primary)' }}>{shipmentData.courierPartner}</strong>
                </div>

                <div>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', display: 'block' }}>AWB Waybill Tracking Number:</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.2rem' }}>
                    <code style={{ backgroundColor: 'var(--theme-champagne-light)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                      {shipmentData.awbNumber}
                    </code>
                    <button
                      onClick={handleCopyAwb}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: copied ? '#059669' : 'var(--text-gold)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        fontSize: '0.75rem',
                      }}
                    >
                      {copied ? <Check size={14} /> : <Copy size={14} />}
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem' }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', display: 'block' }}>Delivery Verification:</span>
                  <strong style={{ color: '#059669' }}>{shipmentData.otpRequired}</strong>
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem' }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', display: 'block' }}>Destination Address:</span>
                  <p style={{ margin: '0.2rem 0 0', color: 'var(--text-primary)', lineHeight: '1.4' }}>
                    {shipmentData.recipientName}<br />
                    {shipmentData.deliveryAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Jewellery In This Shipment */}
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '8px',
                border: '1px solid var(--border-light)',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h4 className="font-serif" style={{ fontSize: '1.1rem', margin: '0 0 1rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                Jewellery In This Parcel
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {shipmentData.items.map((item) => (
                  <div key={item.id} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '4px',
                        objectFit: 'cover',
                        border: '1px solid var(--border-light)',
                      }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {item.name}
                      </p>
                      <p style={{ margin: 0, fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                        Qty: {item.qty} • {item.purity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Need Assistance Card */}
            <div
              style={{
                backgroundColor: 'var(--theme-champagne-light)',
                borderRadius: '8px',
                border: '1px solid var(--border-light)',
                padding: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Phone size={18} style={{ color: 'var(--theme-gold)' }} />
                <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                  Concierge Support Desk
                </h4>
              </div>
              <p style={{ margin: '0 0 1rem', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Have an urgent delivery inquiry or special instructions for the armored delivery officer?
              </p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <Link
                  to="/contact"
                  className="btn-gold"
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  Contact Concierge <ExternalLink size={12} />
                </Link>
                <Link
                  to="/faqs"
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: '0.75rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    textDecoration: 'underline',
                  }}
                >
                  Shipping FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TrackOrder;
