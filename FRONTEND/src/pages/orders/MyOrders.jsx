import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck, ArrowRight, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { MOCK_ORDERS } from '../../utils/mockData';

const MyOrders = () => {
  return (
    <main
      className="min-h-screen pt-10 px-6 pb-20"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-[980px] mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-[0.85rem]">
          <Link to="/account" className="no-underline" style={{ color: 'var(--text-secondary)' }}>Account</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Orders</span>
        </div>

        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              ATELIER ACQUISITIONS
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
              color: 'var(--text-primary)',
            }}
          >
            My Orders & Consignments
          </h1>
          <p className="font-garamond text-[1.1rem] m-0" style={{ color: 'var(--text-secondary)' }}>
            Track the status of your handcrafted fine jewellery dispatches and access certificates.
          </p>
        </div>

        {/* Orders List */}
        <div className="flex flex-col gap-7">
          {MOCK_ORDERS.map((order) => (
            <div
              key={order.orderId}
              className="bg-theme-card rounded-2xl overflow-hidden"
              style={{
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {/* Order Card Header */}
              <div
                className="py-5 px-7 flex justify-between items-center flex-wrap gap-4"
                style={{
                  backgroundColor: 'var(--bg-card-warm)',
                  borderBottom: '1px solid var(--border-light)',
                }}
              >
                <div className="flex items-center gap-6 flex-wrap">
                  <div>
                    <span className="text-[0.75rem] uppercase tracking-[0.5px]" style={{ color: 'var(--text-secondary)' }}>
                      Consignment ID
                    </span>
                    <div className="text-[0.95rem] font-bold" style={{ color: 'var(--text-primary)' }}>
                      {order.orderId}
                    </div>
                  </div>
                  <div>
                    <span className="text-[0.75rem] uppercase tracking-[0.5px]" style={{ color: 'var(--text-secondary)' }}>
                      Order Placed
                    </span>
                    <div className="text-[0.9rem]" style={{ color: 'var(--text-primary)' }}>
                      {order.date}
                    </div>
                  </div>
                  <div>
                    <span className="text-[0.75rem] uppercase tracking-[0.5px]" style={{ color: 'var(--text-secondary)' }}>
                      Total Amount
                    </span>
                    <div className="text-[0.95rem] font-bold" style={{ color: 'var(--text-primary)' }}>
                      ₹{order.total.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div>
                  <span
                    className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full text-[0.8rem] font-semibold"
                    style={{
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
              <div className="p-7">
                <div className="flex flex-col gap-5 mb-6">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex gap-5 items-center">
                      <div
                        className="w-[70px] h-[70px] rounded-lg overflow-hidden shrink-0"
                        style={{ backgroundColor: 'var(--bg-circle-item)' }}
                      >
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="grow">
                        <h4 className="font-serif text-[1.05rem] m-0 mb-1" style={{ color: 'var(--text-primary)' }}>
                          {item.name}
                        </h4>
                        <p className="m-0 text-[0.8rem]" style={{ color: 'var(--text-secondary)' }}>
                          {item.purity} • Qty: {item.quantity}
                        </p>
                      </div>
                      <div className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>
                        ₹{item.price.toLocaleString('en-IN')}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Actions Footer */}
                <div
                  className="flex justify-between items-center pt-5 flex-wrap gap-4"
                  style={{ borderTop: '1px solid var(--border-light)' }}
                >
                  <div className="text-[0.85rem]" style={{ color: 'var(--text-secondary)' }}>
                    Armored Tracking: <strong style={{ color: 'var(--text-primary)' }}>{order.trackingNumber}</strong>
                  </div>

                  <div className="flex gap-2.5">
                    <Link
                      to={`/track-order/${order.orderId}`}
                      className="btn-gold inline-flex items-center gap-1.5 py-2 px-4.5 rounded-md text-[0.85rem] no-underline font-semibold"
                    >
                      <Truck size={14} /> Track Parcel
                    </Link>

                    <Link
                      to={`/order/${order.orderId}`}
                      className="btn-slate inline-flex items-center gap-1.5 py-2 px-4.5 rounded-md text-[0.85rem] no-underline font-semibold"
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
