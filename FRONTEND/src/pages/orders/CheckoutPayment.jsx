import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CreditCard, 
  Smartphone, 
  Building2, 
  Banknote, 
  Lock, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';

const CheckoutPayment = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiId, setUpiId] = useState('priyasharma@okhdfcbank');
  const [processing, setProcessing] = useState(false);

  const amount = 19998;

  const handleCompleteOrder = () => {
    setProcessing(true);
    setTimeout(() => {
      const generatedOrderId = `JK-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      setProcessing(false);
      navigate(`/order-success/${generatedOrderId}`);
    }, 1200);
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-secondary)',
        padding: '2.5rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Stepper */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <Link to="/checkout" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
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
              ✓
            </span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Review Bag</span>
          </Link>
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
              ✓
            </span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Shipping Address</span>
          </Link>
          <ChevronRight size={16} style={{ color: 'var(--border-light)' }} />
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
              3
            </span>
            <span style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.9rem' }}>Payment</span>
          </div>
        </div>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              STEP 3 OF 3
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
            Payment Selection
          </h1>
          <p className="font-garamond" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>
            Encrypted payment gateway with instant transaction settlement.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem' }}>
          
          {/* Payment Methods */}
          <div style={{ gridColumn: 'span 12' }} className="md:col-span-7">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              
              {/* UPI Option */}
              <div
                onClick={() => setPaymentMethod('upi')}
                className="bg-theme-card"
                style={{
                  borderRadius: '12px',
                  border: paymentMethod === 'upi' ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: paymentMethod === 'upi' ? '1rem' : '0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Smartphone size={22} style={{ color: 'var(--theme-gold)' }} />
                    <div>
                      <h3 className="font-serif" style={{ fontSize: '1.05rem', margin: 0, color: 'var(--text-primary)' }}>
                        UPI / Instant QR
                      </h3>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        Google Pay, PhonePe, Paytm, BHIM UPI
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      border: paymentMethod === 'upi' ? '6px solid var(--theme-gold)' : '2px solid var(--border-light)',
                      backgroundColor: '#FFF',
                    }}
                  />
                </div>

                {paymentMethod === 'upi' && (
                  <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.35rem' }}>
                      Enter your UPI ID / VPA
                    </label>
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="e.g. yourname@oksbi"
                      style={{
                        width: '100%',
                        padding: '0.65rem',
                        borderRadius: '6px',
                        border: '1px solid var(--border-light)',
                        backgroundColor: 'var(--bg-card-warm)',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Cards Option */}
              <div
                onClick={() => setPaymentMethod('card')}
                className="bg-theme-card"
                style={{
                  borderRadius: '12px',
                  border: paymentMethod === 'card' ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: paymentMethod === 'card' ? '1rem' : '0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CreditCard size={22} style={{ color: 'var(--theme-gold)' }} />
                    <div>
                      <h3 className="font-serif" style={{ fontSize: '1.05rem', margin: 0, color: 'var(--text-primary)' }}>
                        Credit or Debit Card
                      </h3>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        Visa, MasterCard, RuPay, American Express
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      border: paymentMethod === 'card' ? '6px solid var(--theme-gold)' : '2px solid var(--border-light)',
                      backgroundColor: '#FFF',
                    }}
                  />
                </div>

                {paymentMethod === 'card' && (
                  <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.25rem' }}>Card Number</label>
                      <input
                        type="text"
                        defaultValue="4111 2222 3333 4444"
                        style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-warm)', boxSizing: 'border-box' }}
                      />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.25rem' }}>Expiry (MM/YY)</label>
                        <input
                          type="text"
                          defaultValue="08/29"
                          style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-warm)', boxSizing: 'border-box' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.25rem' }}>CVV</label>
                        <input
                          type="password"
                          defaultValue="789"
                          style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-warm)', boxSizing: 'border-box' }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Netbanking Option */}
              <div
                onClick={() => setPaymentMethod('netbanking')}
                className="bg-theme-card"
                style={{
                  borderRadius: '12px',
                  border: paymentMethod === 'netbanking' ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Building2 size={22} style={{ color: 'var(--theme-gold)' }} />
                    <div>
                      <h3 className="font-serif" style={{ fontSize: '1.05rem', margin: 0, color: 'var(--text-primary)' }}>
                        Net Banking
                      </h3>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        All Major Indian Banks Supported
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      border: paymentMethod === 'netbanking' ? '6px solid var(--theme-gold)' : '2px solid var(--border-light)',
                      backgroundColor: '#FFF',
                    }}
                  />
                </div>
              </div>

              {/* Cash On Delivery */}
              <div
                onClick={() => setPaymentMethod('cod')}
                className="bg-theme-card"
                style={{
                  borderRadius: '12px',
                  border: paymentMethod === 'cod' ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Banknote size={22} style={{ color: 'var(--theme-gold)' }} />
                    <div>
                      <h3 className="font-serif" style={{ fontSize: '1.05rem', margin: 0, color: 'var(--text-primary)' }}>
                        Cash on Delivery (Armored COD)
                      </h3>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        Pay cash or UPI upon secret OTP verification at delivery
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      border: paymentMethod === 'cod' ? '6px solid var(--theme-gold)' : '2px solid var(--border-light)',
                      backgroundColor: '#FFF',
                    }}
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Right Action Summary */}
          <div style={{ gridColumn: 'span 12' }} className="md:col-span-5">
            <div
              className="bg-theme-card"
              style={{
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                padding: '2rem',
                boxShadow: 'var(--shadow-sm)',
                position: 'sticky',
                top: '2rem',
              }}
            >
              <h2 className="font-serif" style={{ fontSize: '1.25rem', margin: '0 0 1.25rem', color: 'var(--text-primary)' }}>
                Final Payable
              </h2>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.35rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                <span>Total Amount:</span>
                <span>₹{amount.toLocaleString('en-IN')}</span>
              </div>

              <button
                onClick={handleCompleteOrder}
                disabled={processing}
                className="btn-slate"
                style={{
                  width: '100%',
                  padding: '1rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: processing ? 'not-allowed' : 'pointer',
                  marginBottom: '1rem',
                }}
              >
                <Lock size={16} />
                {processing ? 'Securing Transaction...' : `Pay ₹${amount.toLocaleString('en-IN')} & Confirm`}
              </button>

              <div style={{ textAlign: 'center' }}>
                <Link to="/checkout/address" style={{ color: 'var(--theme-gold)', fontSize: '0.85rem', textDecoration: 'none' }}>
                  ← Modify Shipping Address
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
                <span>PCI-DSS Level 1 Compliant 256-Bit SSL Payment Shield</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default CheckoutPayment;
