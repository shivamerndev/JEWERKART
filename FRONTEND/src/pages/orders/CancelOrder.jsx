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
      className="min-h-screen pt-10 px-6 pb-20"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-[680px] mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-[0.85rem]">
          <Link to="/account/orders" className="no-underline" style={{ color: 'var(--text-secondary)' }}>Orders</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <Link to={`/order/${orderId}`} className="no-underline" style={{ color: 'var(--text-secondary)' }}>{orderId}</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Cancel Consignment</span>
        </div>

        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              ORDER MODIFICATION
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2"
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.3rem)',
              color: 'var(--text-primary)',
            }}
          >
            Cancel Order #{orderId}
          </h1>
          <p className="font-garamond text-[1.1rem] m-0" style={{ color: 'var(--text-secondary)' }}>
            Full 100% refund is immediately credited to your original payment mode for pre-dispatch cancellations.
          </p>
        </div>

        {/* Card */}
        <div
          className="bg-theme-card rounded-2xl p-10"
          style={{
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          {confirmed ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-[#FEF2F2] text-[#DC2626] flex items-center justify-center mx-auto mb-5 border border-[#FECACA]">
                <XCircle size={32} />
              </div>
              <h3 className="font-serif text-[1.45rem] mb-2" style={{ color: 'var(--text-primary)' }}>
                Order #{orderId} Cancelled
              </h3>
              <p className="text-[0.92rem] leading-[1.6] mb-7" style={{ color: 'var(--text-secondary)' }}>
                Your order has been retracted from the atelier queue. Your refund of ₹17,998 has been initiated and will reflect in your bank account / UPI within 24-48 hours.
              </p>
              <Link
                to="/account/orders"
                className="btn-slate inline-flex items-center gap-2 py-3 px-7 rounded-md no-underline font-semibold"
              >
                <ArrowLeft size={16} /> Return to Orders
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-lg p-4 text-[#92400E] text-[0.85rem] mb-7 flex gap-2.5">
                <AlertCircle size={20} className="shrink-0" />
                <span>
                  Please note: Once cancelled, reserved handcrafted pieces are returned to our public vault. If you only wish to change your delivery address or ring size, consider an exchange.
                </span>
              </div>

              <div className="mb-6">
                <label className="block text-[0.85rem] font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Please Select Reason for Cancellation *
                </label>
                <select
                  required
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full p-3 rounded-md text-[0.9rem] outline-none"
                  style={{
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-card-warm)',
                    color: 'var(--text-primary)',
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

              <div className="mb-8">
                <label className="block text-[0.85rem] font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Additional Notes (Optional)
                </label>
                <textarea
                  rows="3"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Share feedback to help our atelier improve..."
                  className="w-full p-3 rounded-md text-[0.9rem] outline-none box-border"
                  style={{
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-card-warm)',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>

              <div className="flex gap-4 justify-end">
                <Link
                  to={`/order/${orderId}`}
                  className="btn-outline-dark py-3 px-6 rounded-md no-underline text-[0.9rem]"
                >
                  Keep Consignment
                </Link>
                <button
                  type="submit"
                  className="bg-[#DC2626] text-white border-none py-3 px-6 rounded-md text-[0.9rem] font-semibold cursor-pointer hover:bg-red-700 transition-colors"
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
