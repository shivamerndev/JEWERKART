import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RotateCcw, CheckCircle2, ArrowLeft, Truck, ShieldCheck } from 'lucide-react';
import { MOCK_ORDERS } from '../../utils/mockData';

const ReturnOrder = () => {
  const { orderId } = useParams();
  const [selectedItem, setSelectedItem] = useState(1);
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const order = MOCK_ORDERS.find(o => o.orderId === orderId) || MOCK_ORDERS[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reason) return;
    setSubmitted(true);
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-secondary)',
        padding: '2.5rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', fontSize: '0.85rem' }}>
          <Link to="/account/orders" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Orders</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <Link to={`/order/${orderId}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{orderId}</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>15-Day Return</span>
        </div>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              DOORSTEP COURTESY
            </span>
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.3rem)',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: '0 0 0.5rem',
            }}
          >
            Initiate Return for #{orderId}
          </h1>
          <p className="font-garamond" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>
            Enjoy our complimentary 15-day doorstep armored pickup and hassle-free refund guarantee.
          </p>
        </div>

        <div
          className="bg-theme-card"
          style={{
            borderRadius: '16px',
            border: '1px solid var(--border-light)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--theme-champagne)',
                  color: 'var(--theme-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                  border: '1px solid var(--border-light)',
                }}
              >
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.45rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Pickup Scheduled Successfully
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.75rem' }}>
                Our armored courier partner (Sequel Logistics) will arrive at your address within 24-48 business hours. Please ensure the jewellery is placed in its original velvet box with the hallmark tag intact.
              </p>
              <Link
                to="/account/orders"
                className="btn-slate"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '0.8rem 1.75rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: '600',
                }}
              >
                <ArrowLeft size={16} /> Return to Orders
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  Select Item to Return
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedItem(item.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '1rem',
                        borderRadius: '8px',
                        border: selectedItem === item.id ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                        backgroundColor: selectedItem === item.id ? 'var(--theme-champagne)' : 'var(--bg-card-warm)',
                        cursor: 'pointer',
                      }}
                    >
                      <img src={item.image} alt={item.name} style={{ width: '48px', height: '48px', borderRadius: '4px', objectFit: 'cover' }} />
                      <div style={{ flexGrow: 1 }}>
                        <div style={{ fontWeight: '600', fontSize: '0.95rem', color: 'var(--text-primary)' }}>{item.name}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>₹{item.price.toLocaleString('en-IN')}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Reason for Return *
                </label>
                <select
                  required
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-card-warm)',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                >
                  <option value="">-- Choose a reason --</option>
                  <option value="size-fit">Size / Fit was not suitable</option>
                  <option value="style-appearance">Looked different from photos</option>
                  <option value="quality-issue">Not satisfied with gemstone finish</option>
                  <option value="gift-unwanted">Recipient opted for alternative</option>
                  <option value="arrived-damaged">Damaged in armored transit</option>
                </select>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--theme-champagne-light)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '8px',
                  padding: '1rem',
                  marginBottom: '2rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.35rem' }}>
                  <Truck size={16} style={{ color: 'var(--theme-gold)' }} />
                  <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>Doorstep Pickup Destination</strong>
                </div>
                <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                <Link to={`/order/${orderId}`} className="btn-outline-dark" style={{ padding: '0.75rem 1.5rem', borderRadius: '6px', textDecoration: 'none' }}>
                  Cancel
                </Link>
                <button type="submit" className="btn-slate" style={{ padding: '0.75rem 1.5rem', borderRadius: '6px', cursor: 'pointer' }}>
                  Request Armored Pickup
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </main>
  );
};

export default ReturnOrder;
