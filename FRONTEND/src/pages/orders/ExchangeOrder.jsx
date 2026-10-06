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
          <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Exchange & Resizing</span>
        </div>

        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              BESPOKE ADJUSTMENT
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2"
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.3rem)',
              color: 'var(--text-primary)',
            }}
          >
            Hassle-Free Exchange for #{orderId}
          </h1>
          <p className="font-garamond text-[1.1rem] m-0" style={{ color: 'var(--text-secondary)' }}>
            Complimentary doorstep size alteration and replacement within 15 days of delivery.
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
                Exchange Request Confirmed
              </h3>
              <p className="text-[0.92rem] leading-[1.6] mb-7" style={{ color: 'var(--text-secondary)' }}>
                Our artisan team has reserved your replacement piece. An armored executive will arrive with the new piece and collect the original in a single doorstep swap.
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
                  Select Piece to Exchange
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
                <label className="block text-[0.85rem] font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                  Exchange Preference
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setExchangeType('resize')}
                    className="flex-1 p-3 rounded-lg cursor-pointer text-[0.9rem]"
                    style={{
                      border: exchangeType === 'resize' ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                      backgroundColor: exchangeType === 'resize' ? 'var(--theme-champagne)' : 'var(--bg-card-warm)',
                      fontWeight: exchangeType === 'resize' ? '600' : '400',
                    }}
                  >
                    Size / Dimension Adjustment
                  </button>
                  <button
                    type="button"
                    onClick={() => setExchangeType('alternate')}
                    className="flex-1 p-3 rounded-lg cursor-pointer text-[0.9rem]"
                    style={{
                      border: exchangeType === 'alternate' ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                      backgroundColor: exchangeType === 'alternate' ? 'var(--theme-champagne)' : 'var(--bg-card-warm)',
                      fontWeight: exchangeType === 'alternate' ? '600' : '400',
                    }}
                  >
                    Different Jewellery Design
                  </button>
                </div>
              </div>

              {exchangeType === 'resize' && (
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-[0.85rem] font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Select Required Size (Indian Standard)
                    </label>
                    <Link to="/size-guide" className="text-[0.8rem] no-underline" style={{ color: 'var(--theme-gold)' }}>
                      <Ruler size={12} className="inline mr-1" /> View Size Chart
                    </Link>
                  </div>
                  <div className="flex gap-2">
                    {['10', '12', '14', '16', '18', '20', '22'].map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setNewSize(sz)}
                        className="w-[42px] h-[42px] rounded-md cursor-pointer"
                        style={{
                          border: newSize === sz ? '2px solid var(--text-primary)' : '1px solid var(--border-light)',
                          backgroundColor: newSize === sz ? 'var(--theme-champagne)' : 'var(--bg-card-warm)',
                          fontWeight: newSize === sz ? '700' : '400',
                        }}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-end gap-4">
                <Link to={`/order/${orderId}`} className="btn-outline-dark py-3 px-6 rounded-md no-underline">
                  Cancel
                </Link>
                <button type="submit" className="btn-slate py-3 px-7 rounded-md cursor-pointer">
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
