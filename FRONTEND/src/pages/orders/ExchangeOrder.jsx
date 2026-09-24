import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RefreshCw, CheckCircle2, ArrowLeft, Ruler, Sparkles } from 'lucide-react';
import { MOCK_ORDERS } from '../../utils/mockData';

const ExchangeOrder = () => {
  const { orderId } = useParams();
  const [selectedItem, setSelectedItem] = useState(1);
  const [exchangeType, setExchangeType] = useState('resize');
  const [newSize, setNewSize] = useState('16');
  const [submitted, setSubmitted] = useState(false);

  const order = MOCK_ORDERS.find(o => o.orderId === orderId) || MOCK_ORDERS[0];

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Exchange & Resizing</span>
        </div>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              BESPOKE ADJUSTMENT
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
            Hassle-Free Exchange for #{orderId}
          </h1>
          <p className="font-garamond" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>
            Complimentary doorstep size alteration and replacement within 15 days of delivery.
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
                Exchange Request Confirmed
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.75rem' }}>
                Our artisan team has reserved your replacement piece. An armored executive will arrive with the new piece and collect the original in a single doorstep swap.
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
                  Select Piece to Exchange
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
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  Exchange Preference
                </label>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    type="button"
                    onClick={() => setExchangeType('resize')}
                    style={{
                      flex: 1,
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: exchangeType === 'resize' ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                      backgroundColor: exchangeType === 'resize' ? 'var(--theme-champagne)' : 'var(--bg-card-warm)',
                      fontWeight: exchangeType === 'resize' ? '600' : '400',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                    }}
                  >
                    Size / Dimension Adjustment
                  </button>
                  <button
                    type="button"
                    onClick={() => setExchangeType('alternate')}
                    style={{
                      flex: 1,
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: exchangeType === 'alternate' ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                      backgroundColor: exchangeType === 'alternate' ? 'var(--theme-champagne)' : 'var(--bg-card-warm)',
                      fontWeight: exchangeType === 'alternate' ? '600' : '400',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                    }}
                  >
                    Different Jewellery Design
                  </button>
                </div>
              </div>

              {exchangeType === 'resize' && (
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                      Select Required Size (Indian Standard)
                    </label>
                    <Link to="/size-guide" style={{ fontSize: '0.8rem', color: 'var(--theme-gold)', textDecoration: 'none' }}>
                      <Ruler size={12} style={{ display: 'inline', marginRight: '4px' }} /> View Size Chart
                    </Link>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {['10', '12', '14', '16', '18', '20', '22'].map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setNewSize(sz)}
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '6px',
                          border: newSize === sz ? '2px solid var(--text-primary)' : '1px solid var(--border-light)',
                          backgroundColor: newSize === sz ? 'var(--theme-champagne)' : 'var(--bg-card-warm)',
                          fontWeight: newSize === sz ? '700' : '400',
                          cursor: 'pointer',
                        }}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                <Link to={`/order/${orderId}`} className="btn-outline-dark" style={{ padding: '0.75rem 1.5rem', borderRadius: '6px', textDecoration: 'none' }}>
                  Cancel
                </Link>
                <button type="submit" className="btn-slate" style={{ padding: '0.75rem 1.75rem', borderRadius: '6px', cursor: 'pointer' }}>
                  Schedule Doorstep Swap
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </main>
  );
};

export default ExchangeOrder;
