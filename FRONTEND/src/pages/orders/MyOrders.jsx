import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck, ArrowRight, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { MOCK_ORDERS } from '../../utils/mockData';

const MyOrders = () => {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-secondary)',
        padding: '2.5rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>
        
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', fontSize: '0.85rem' }}>
          <Link to="/account" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Account</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Orders</span>
        </div>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              ATELIER ACQUISITIONS
            </span>
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: '0 0 0.5rem',
            }}
          >
            My Orders & Consignments
          </h1>
          <p className="font-garamond" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>
            Track the status of your handcrafted fine jewellery dispatches and access certificates.
          </p>
        </div>

        {/* Orders List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {MOCK_ORDERS.map((order) => (
            <div
              key={order.orderId}
              className="bg-theme-card"
              style={{
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {/* Order Card Header */}
              <div
                style={{
                  backgroundColor: 'var(--bg-card-warm)',
                  padding: '1.25rem 1.75rem',
                  borderBottom: '1px solid var(--border-light)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Consignment ID
                    </span>
                    <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                      {order.orderId}
                    </div>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Order Placed
                    </span>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                      {order.date}
                    </div>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Total Amount
                    </span>
                    <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                      ₹{order.total.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      backgroundColor: order.status === 'Delivered' ? '#ECFDF5' : 'var(--theme-champagne)',
                      color: order.status === 'Delivered' ? '#065F46' : 'var(--text-primary)',
                      border: `1px solid ${order.status === 'Delivered' ? '#A7F3D0' : 'var(--border-light)'}`,
                    }}
                  >
                    {order.status === 'Delivered' ? <CheckCircle2 size={13} /> : <Truck size={13} />}
                    {order.status}
                  </span>
                </div>
              </div>

              {/* Order Items */}
              <div style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
                  {order.items.map((item) => (
                    <div key={item.id} style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                      <div
                        style={{
                          width: '70px',
                          height: '70px',
                          borderRadius: '8px',
                          backgroundColor: 'var(--bg-circle-item)',
                          overflow: 'hidden',
                          flexShrink: 0,
                        }}
                      >
                        <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div style={{ flexGrow: 1 }}>
                        <h4 className="font-serif" style={{ fontSize: '1.05rem', margin: '0 0 0.25rem', color: 'var(--text-primary)' }}>
                          {item.name}
                        </h4>
                        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                          {item.purity} • Qty: {item.quantity}
                        </p>
                      </div>
                      <div style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--text-primary)' }}>
                        ₹{item.price.toLocaleString('en-IN')}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Actions Footer */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid var(--border-light)',
                    paddingTop: '1.25rem',
                    flexWrap: 'wrap',
                    gap: '1rem',
                  }}
                >
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Armored Tracking: <strong style={{ color: 'var(--text-primary)' }}>{order.trackingNumber}</strong>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <Link
                      to={`/track-order/${order.orderId}`}
                      className="btn-gold"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '0.55rem 1.15rem',
                        borderRadius: '6px',
                        fontSize: '0.85rem',
                        textDecoration: 'none',
                        fontWeight: '600',
                      }}
                    >
                      <Truck size={14} /> Track Parcel
                    </Link>

                    <Link
                      to={`/order/${order.orderId}`}
                      className="btn-slate"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '0.55rem 1.15rem',
                        borderRadius: '6px',
                        fontSize: '0.85rem',
                        textDecoration: 'none',
                        fontWeight: '600',
                      }}
                    >
                      View Order Details <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default MyOrders;
