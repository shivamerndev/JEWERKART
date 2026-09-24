import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { AlertCircle, CheckCircle2, ArrowLeft, ShieldCheck, XCircle } from 'lucide-react';

const CancelOrder = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [reason, setReason] = useState('');
  const [comments, setComments] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reason) return;
    setConfirmed(true);
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-secondary)',
        padding: '2.5rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', fontSize: '0.85rem' }}>
          <Link to="/account/orders" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Orders</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <Link to={`/order/${orderId}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{orderId}</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Cancel Consignment</span>
        </div>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              ORDER MODIFICATION
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
            Cancel Order #{orderId}
          </h1>
          <p className="font-garamond" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>
            Full 100% refund is immediately credited to your original payment mode for pre-dispatch cancellations.
          </p>
        </div>

        {/* Card */}
        <div
          className="bg-theme-card"
          style={{
            borderRadius: '16px',
            border: '1px solid var(--border-light)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          {confirmed ? (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#FEF2F2',
                  color: '#DC2626',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                  border: '1px solid #FECACA',
                }}
              >
                <XCircle size={32} />
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.45rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Order #{orderId} Cancelled
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.75rem' }}>
                Your order has been retracted from the atelier queue. Your refund of ₹17,998 has been initiated and will reflect in your bank account / UPI within 24-48 hours.
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
              <div
                style={{
                  backgroundColor: '#FFFBEB',
                  border: '1px solid #FDE68A',
                  borderRadius: '8px',
                  padding: '1rem',
                  color: '#92400E',
                  fontSize: '0.85rem',
                  marginBottom: '1.75rem',
                  display: 'flex',
                  gap: '10px',
                }}
              >
                <AlertCircle size={20} style={{ flexShrink: 0 }} />
                <span>
                  Please note: Once cancelled, reserved handcrafted pieces are returned to our public vault. If you only wish to change your delivery address or ring size, consider an exchange.
                </span>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Please Select Reason for Cancellation *
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
                  <option value="ordered-by-mistake">Ordered by mistake</option>
                  <option value="need-different-size">Need a different ring/bangle size</option>
                  <option value="delivery-timeline">Delivery timeline is too long</option>
                  <option value="changed-mind">Changed my mind / Found alternative gift</option>
                  <option value="payment-issue">Payment or billing correction</option>
                </select>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Additional Notes (Optional)
                </label>
                <textarea
                  rows="3"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Share feedback to help our atelier improve..."
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-card-warm)',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <Link
                  to={`/order/${orderId}`}
                  className="btn-outline-dark"
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                  }}
                >
                  Keep Consignment
                </Link>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#DC2626',
                    color: '#FFF',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  Confirm Cancellation
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </main>
  );
};

export default CancelOrder;
