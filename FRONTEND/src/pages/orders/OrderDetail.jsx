import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Package, 
  MapPin, 
  CreditCard, 
  Download, 
  Truck, 
  CheckCircle2, 
  AlertCircle,
  RotateCcw,
  RefreshCw,
  XCircle,
  ShieldCheck,
  ChevronRight,
  ArrowLeft
} from 'lucide-react';
import { MOCK_ORDERS } from '../../utils/mockData';

const OrderDetail = () => {
  const { orderId } = useParams();
  const [downloading, setDownloading] = useState(false);

  const order = useMemo(() => {
    const found = MOCK_ORDERS.find(o => o.orderId.toLowerCase() === (orderId || '').toLowerCase());
    if (found) return found;
    return {
      orderId: orderId || 'JK-2026-894215',
      date: 'Sep 24, 2026',
      status: 'In Transit',
      courier: 'Sequel Armored Logistics (BlueDart Express)',
      trackingNumber: 'BLUEDART-SEC-9928174',
      estimatedDelivery: 'Sep 28, 2026',
      total: 17998,
      items: [
        {
          id: 1,
          name: 'Kundan Jhumka Earrings',
          purity: '925 Sterling Silver • 22K Gold Vermeil',
          price: 4999,
          quantity: 1,
          image: '/category_earrings.jpg',
        },
        {
          id: 3,
          name: 'Bridal Temple Heritage Necklace',
          purity: '800 Fine Silver with Temple Gold Polish',
          price: 12999,
          quantity: 1,
          image: '/category_necklace.jpg',
        }
      ],
      shippingAddress: {
        fullName: 'Priya Sharma',
        phone: '+91 98765 43210',
        address: 'Flat 402, Royale Meadows, 14th Cross, Bandra West',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400050',
      }
    };
  }, [orderId]);

  const handleDownloadInvoice = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert(`Tax invoice for ${order.orderId} prepared for download.`);
    }, 1000);
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-secondary)',
        padding: '2.5rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', fontSize: '0.85rem' }}>
          <Link to="/account" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Account</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <Link to="/account/orders" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Orders</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{order.orderId}</span>
        </div>

        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="divider-ornament" style={{ justifyContent: 'flex-start', marginBottom: '0.5rem' }}>
              <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
                CONSIGNMENT DOSSIER
              </span>
            </div>
            <h1
              className="font-serif"
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.3rem)',
                fontWeight: '600',
                color: 'var(--text-primary)',
                margin: '0 0 0.35rem',
              }}
            >
              Order #{order.orderId}
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
              Placed on {order.date} • Hand-finished at Jewerkart Flagship Atelier
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={handleDownloadInvoice}
              disabled={downloading}
              className="btn-gold"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.65rem 1.25rem',
                borderRadius: '6px',
                fontSize: '0.85rem',
                cursor: 'pointer',
              }}
            >
              <Download size={15} />
              {downloading ? 'Generating...' : 'Tax Invoice (PDF)'}
            </button>

            <Link
              to={`/track-order/${order.orderId}`}
              className="btn-slate"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.65rem 1.25rem',
                borderRadius: '6px',
                fontSize: '0.85rem',
                textDecoration: 'none',
                fontWeight: '600',
              }}
            >
              <Truck size={15} /> Live Armored Tracking
            </Link>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem' }}>
          
          {/* Left Column: Items & Return/Exchange Quick Actions */}
          <div style={{ gridColumn: 'span 12' }} className="md:col-span-8">
            <div
              className="bg-theme-card"
              style={{
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                padding: '2rem',
                boxShadow: 'var(--shadow-sm)',
                marginBottom: '2rem',
              }}
            >
              <h2 className="font-serif" style={{ fontSize: '1.25rem', margin: '0 0 1.5rem', color: 'var(--text-primary)' }}>
                Ordered Heirloom Pieces
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      gap: '1.25rem',
                      paddingBottom: '1.5rem',
                      borderBottom: '1px solid var(--border-light)',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--bg-circle-item)',
                        overflow: 'hidden',
                        flexShrink: 0,
                      }}
                    >
                      <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ flexGrow: 1 }}>
                      <h3 className="font-serif" style={{ fontSize: '1.1rem', margin: '0 0 0.35rem', color: 'var(--text-primary)' }}>
                        {item.name}
                      </h3>
                      <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                        {item.purity}
                      </p>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                        Qty: <strong>{item.quantity}</strong> • Unit Price: ₹{item.price.toLocaleString('en-IN')}
                      </div>
                    </div>
                    <div style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Actions Links */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '1.5rem',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Link
                    to={`/order/${order.orderId}/return`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--text-secondary)',
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                    }}
                  >
                    <RotateCcw size={14} style={{ color: 'var(--theme-gold)' }} />
                    15-Day Return
                  </Link>

                  <Link
                    to={`/order/${order.orderId}/exchange`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--text-secondary)',
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                    }}
                  >
                    <RefreshCw size={14} style={{ color: 'var(--theme-gold)' }} />
                    Size Exchange
                  </Link>
                </div>

                <Link
                  to={`/order/${order.orderId}/cancel`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#991B1B',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                  }}
                >
                  <XCircle size={14} />
                  Cancel Consignment
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Address & Payment Info */}
          <div style={{ gridColumn: 'span 12' }} className="md:col-span-4">
            
            {/* Delivery Address */}
            <div
              className="bg-theme-card"
              style={{
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-sm)',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                <MapPin size={18} style={{ color: 'var(--theme-gold)' }} />
                <h3 className="font-serif" style={{ fontSize: '1.15rem', margin: 0, color: 'var(--text-primary)' }}>
                  Delivery Destination
                </h3>
              </div>
              <p style={{ fontWeight: '600', fontSize: '0.95rem', margin: '0 0 0.35rem', color: 'var(--text-primary)' }}>
                {order.shippingAddress.fullName}
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', margin: '0 0 0.5rem' }}>
                {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', margin: 0 }}>
                Mobile: <strong style={{ color: 'var(--text-primary)' }}>{order.shippingAddress.phone}</strong>
              </p>
            </div>

            {/* Payment & Purity Guarantees */}
            <div
              className="bg-theme-card"
              style={{
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                <ShieldCheck size={18} style={{ color: 'var(--theme-gold)' }} />
                <h3 className="font-serif" style={{ fontSize: '1.15rem', margin: 0, color: 'var(--text-primary)' }}>
                  Patron Safeguards
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                <li>✓ BIS Hallmarked 925 Certification Included</li>
                <li>✓ Tamper-evident Holographic Security Seal</li>
                <li>✓ Transit Insured by Sequel Armored Services</li>
                <li>✓ Complimentary Annual Ultrasonic Spa Service</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
};

export default OrderDetail;
