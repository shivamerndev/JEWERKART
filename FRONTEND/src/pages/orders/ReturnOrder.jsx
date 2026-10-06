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
      className="min-h-screen pt-10 px-6 pb-20"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-[720px] mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-[0.85rem]">
          <Link to="/account/orders" className="no-underline" style={{ color: 'var(--text-secondary)' }}>Orders</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <Link to={`/order/${orderId}`} className="no-underline" style={{ color: 'var(--text-secondary)' }}>{orderId}</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>15-Day Return</span>
        </div>

        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              DOORSTEP COURTESY
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2"
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.3rem)',
              color: 'var(--text-primary)',
            }}
          >
            Initiate Return for #{orderId}
          </h1>
          <p className="font-garamond text-[1.1rem] m-0" style={{ color: 'var(--text-secondary)' }}>
            Enjoy our complimentary 15-day doorstep armored pickup and hassle-free refund guarantee.
          </p>
        </div>

        <div
          className="bg-theme-card rounded-2xl p-10"
          style={{
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          {submitted ? (
            <div className="text-center py-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{
                  backgroundColor: 'var(--theme-champagne)',
                  color: 'var(--theme-gold)',
                  border: '1px solid var(--border-light)',
                }}
              >
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-serif text-[1.45rem] mb-2" style={{ color: 'var(--text-primary)' }}>
                Pickup Scheduled Successfully
              </h3>
              <p className="text-[0.92rem] leading-[1.6] mb-7" style={{ color: 'var(--text-secondary)' }}>
                Our armored courier partner (Sequel Logistics) will arrive at your address within 24-48 business hours. Please ensure the jewellery is placed in its original velvet box with the hallmark tag intact.
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
              <div className="mb-6">
                <label className="block text-[0.85rem] font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                  Select Item to Return
                </label>
                <div className="flex flex-col gap-3">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedItem(item.id)}
                      className="flex items-center gap-3 p-4 rounded-lg cursor-pointer"
                      style={{
                        border: selectedItem === item.id ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                        backgroundColor: selectedItem === item.id ? 'var(--theme-champagne)' : 'var(--bg-card-warm)',
                      }}
                    >
                      <img src={item.image} alt={item.name} className="w-12 h-12 rounded object-cover" />
                      <div className="grow">
                        <div className="font-semibold text-[0.95rem]" style={{ color: 'var(--text-primary)' }}>{item.name}</div>
                        <div className="text-[0.8rem]" style={{ color: 'var(--text-secondary)' }}>₹{item.price.toLocaleString('en-IN')}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[0.85rem] font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Reason for Return *
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
                  <option value="size-fit">Size / Fit was not suitable</option>
                  <option value="style-appearance">Looked different from photos</option>
                  <option value="quality-issue">Not satisfied with gemstone finish</option>
                  <option value="gift-unwanted">Recipient opted for alternative</option>
                  <option value="arrived-damaged">Damaged in armored transit</option>
                </select>
              </div>

              <div
                className="rounded-lg p-4 mb-8"
                style={{
                  backgroundColor: 'var(--theme-champagne-light)',
                  border: '1px solid var(--border-light)',
                }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Truck size={16} style={{ color: 'var(--theme-gold)' }} />
                  <strong className="text-[0.85rem]" style={{ color: 'var(--text-primary)' }}>Doorstep Pickup Destination</strong>
                </div>
                <p className="m-0 text-[0.82rem]" style={{ color: 'var(--text-secondary)' }}>
                  {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}
                </p>
              </div>

              <div className="flex justify-end gap-4">
                <Link to={`/order/${orderId}`} className="btn-outline-dark py-3 px-6 rounded-md no-underline">
                  Cancel
                </Link>
                <button type="submit" className="btn-slate py-3 px-6 rounded-md cursor-pointer">
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
