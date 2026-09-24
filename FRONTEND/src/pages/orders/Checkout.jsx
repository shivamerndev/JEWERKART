import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  CreditCard, 
  Truck, 
  CheckCircle2, 
  ArrowRight,
  Lock,
  ChevronRight
} from 'lucide-react';
import { MOCK_PRODUCTS } from '../../utils/mockData';

const Checkout = () => {
  const navigate = useNavigate();

  const checkoutItems = [
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
      price: 14999,
      quantity: 1,
      image: '/category_necklace.jpg',
    },
  ];

  const subtotal = checkoutItems.reduce((acc, it) => acc + it.price * it.quantity, 0);

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-secondary)',
        padding: '2.5rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Checkout Stepper Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-slate)',
                color: '#FEF0E0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                fontWeight: '700',
              }}
            >
              1
            </span>
            <span style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.9rem' }}>Review Bag</span>
          </div>
          <ChevronRight size={16} style={{ color: 'var(--border-light)' }} />
          <Link to="/checkout/address" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
              }}
            >
              2
            </span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Shipping Address</span>
          </Link>
          <ChevronRight size={16} style={{ color: 'var(--border-light)' }} />
          <Link to="/checkout/payment" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
              }}
            >
              3
            </span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Payment</span>
          </Link>
        </div>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              STEP 1 OF 3
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
            Review Your Order
          </h1>
          <p className="font-garamond" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>
            Verify your heirloom selections before specifying your armored delivery destination.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem' }}>
          
          {/* Items Container */}
          <div style={{ gridColumn: 'span 12' }} className="md:col-span-7">
            <div
              className="bg-theme-card"
              style={{
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                padding: '2rem',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h2 className="font-serif" style={{ fontSize: '1.25rem', margin: '0 0 1.5rem', color: 'var(--text-primary)' }}>
                Items Ready for Atelier Dispatch
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {checkoutItems.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      gap: '1.25rem',
                      paddingBottom: '1.25rem',
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
                      <h3 className="font-serif" style={{ fontSize: '1rem', fontWeight: '600', margin: '0 0 0.25rem', color: 'var(--text-primary)' }}>
                        {item.name}
                      </h3>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '0 0 0.25rem' }}>
                        {item.purity}
                      </p>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        Quantity: <strong>{item.quantity}</strong>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Assurance */}
              <div
                style={{
                  marginTop: '1.5rem',
                  padding: '1rem',
                  borderRadius: '8px',
                  backgroundColor: 'var(--theme-champagne-light)',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <Truck size={22} style={{ color: 'var(--theme-gold)', flexShrink: 0 }} />
                <div style={{ fontSize: '0.82rem', color: 'var(--text-primary)' }}>
                  <strong>Sequel Armored Logistics</strong> will deliver with transit insurance. Secure OTP verification upon delivery.
                </div>
              </div>
            </div>
          </div>

          {/* Right Summary & Next Step */}
          <div style={{ gridColumn: 'span 12' }} className="md:col-span-5">
            <div
              className="bg-theme-card"
              style={{
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                padding: '2rem',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h2 className="font-serif" style={{ fontSize: '1.25rem', margin: '0 0 1.25rem', color: 'var(--text-primary)' }}>
                Pricing Summary
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <span>Items Subtotal</span>
                  <span style={{ color: 'var(--text-primary)' }}>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <span>Armored Insured Shipping</span>
                  <span style={{ color: '#065F46', fontWeight: '600' }}>COMPLIMENTARY</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <span>Taxes (3% Fine Jewellery GST)</span>
                  <span style={{ color: 'var(--text-primary)' }}>Included</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    borderTop: '1px solid var(--border-light)',
                    paddingTop: '1rem',
                  }}
                >
                  <span>Grand Total</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout/address')}
                className="btn-slate"
                style={{
                  width: '100%',
                  padding: '0.95rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  marginBottom: '1rem',
                }}
              >
                Proceed to Shipping Address <ArrowRight size={16} />
              </button>

              <div style={{ textAlign: 'center' }}>
                <Link to="/cart" style={{ color: 'var(--theme-gold)', fontSize: '0.85rem', textDecoration: 'none' }}>
                  ← Modify Shopping Bag
                </Link>
              </div>

              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <ShieldCheck size={18} style={{ color: 'var(--theme-gold)', flexShrink: 0 }} />
                <span>100% Transit-Insured Armored Delivery Guarantee</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default Checkout;
