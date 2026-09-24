import React, { useState } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import { Gift, Sparkles, CheckCircle2, ShieldCheck, Mail, ArrowRight, Lock } from 'lucide-react';

const GiftCardDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [cardTheme, setCardTheme] = useState('gold');
  const [recipientName, setRecipientName] = useState(location.state?.recipientName || 'Radhika Kapoor');
  const [recipientEmail, setRecipientEmail] = useState(location.state?.recipientEmail || 'radhika@example.com');
  const [personalMessage, setPersonalMessage] = useState(
    location.state?.personalMessage || 'May this heirloom piece bring endless light and radiance into your life.'
  );

  const cardAmount = Number(id) || location.state?.amount || 5000;

  const handlePurchase = () => {
    navigate('/checkout/payment');
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-secondary)',
        padding: '3rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', fontSize: '0.85rem' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <Link to="/gift-cards" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Gift Cards</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>₹{cardAmount.toLocaleString('en-IN')} Voucher</span>
        </div>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              ROYAL BESPOKE VOUCHER
            </span>
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: '0 0 0.5rem',
              letterSpacing: '1px',
            }}
          >
            ₹{cardAmount.toLocaleString('en-IN')} E-Gift Card
          </h1>
          <p
            className="font-garamond"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.2rem',
              maxWidth: '620px',
              margin: '0 auto',
            }}
          >
            Review the luxury presentation card before instant email dispatch.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3rem', alignItems: 'start' }}>
          
          {/* Card Showcase */}
          <div style={{ gridColumn: 'span 12' }} className="md:col-span-6">
            <div
              style={{
                background:
                  cardTheme === 'gold'
                    ? 'linear-gradient(135deg, #1C140E 0%, #2F2117 50%, #1C140E 100%)'
                    : cardTheme === 'silver'
                    ? 'linear-gradient(135deg, #2D3748 0%, #4A5568 100%)'
                    : 'linear-gradient(135deg, #701A75 0%, #4A044E 100%)',
                borderRadius: '16px',
                border: '2px solid var(--theme-gold)',
                padding: '2.5rem',
                color: '#FEF0E0',
                boxShadow: 'var(--shadow-lg)',
                aspectRatio: '1.58/1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <span className="badge-925" style={{ fontSize: '8px' }}>
                    FINE JEWELLERY PASS
                  </span>
                  <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#FEF0E0', margin: '0.4rem 0 0' }}>
                    JEWERKART
                  </h3>
                </div>
                <Sparkles size={24} style={{ color: 'var(--theme-gold)' }} />
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', color: '#D8BF9F', textTransform: 'uppercase' }}>Available Balance</div>
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#FEF0E0' }}>
                  ₹{cardAmount.toLocaleString('en-IN')}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#FEF0E0', marginTop: '4px' }}>
                  Dedicated to: <strong>{recipientName || 'Privileged Recipient'}</strong>
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '0.75rem', fontSize: '0.75rem', color: '#D8BF9F', display: 'flex', justifyContent: 'space-between' }}>
                <span>PIN: •••• •••• •••• 9842</span>
                <span>Lifetime Validity</span>
              </div>
            </div>

            {/* Theme Selector */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
              {[
                { id: 'gold', label: 'Imperial Onyx & Gold' },
                { id: 'silver', label: 'Platinum Slate' },
                { id: 'velvet', label: 'Royal Amethyst' },
              ].map((th) => (
                <button
                  key={th.id}
                  onClick={() => setCardTheme(th.id)}
                  style={{
                    padding: '0.45rem 0.85rem',
                    borderRadius: '20px',
                    border: cardTheme === th.id ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                    backgroundColor: cardTheme === th.id ? 'var(--theme-champagne)' : 'var(--bg-card)',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    color: 'var(--text-primary)',
                  }}
                >
                  {th.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Confirmation & Checkout */}
          <div style={{ gridColumn: 'span 12' }} className="md:col-span-6">
            <div
              className="bg-theme-card"
              style={{
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                padding: '2.5rem',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h2 className="font-serif" style={{ fontSize: '1.35rem', margin: '0 0 1.25rem', color: 'var(--text-primary)' }}>
                Voucher Summary & Dispatch
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <span>Voucher Value</span>
                  <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>₹{cardAmount.toLocaleString('en-IN')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <span>Delivery Method</span>
                  <span style={{ color: 'var(--text-primary)' }}>Instant Encrypted Email</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <span>Recipient Email</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{recipientEmail}</span>
                </div>
                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>Personal Note:</span>
                  <p style={{ fontStyle: 'italic', color: 'var(--text-primary)', fontSize: '0.88rem', margin: 0, lineHeight: '1.5' }}>
                    "{personalMessage}"
                  </p>
                </div>
              </div>

              <button
                onClick={handlePurchase}
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
                  cursor: 'pointer',
                  marginBottom: '1rem',
                }}
              >
                <Lock size={16} /> Complete Payment of ₹{cardAmount.toLocaleString('en-IN')}
              </button>

              <div style={{ textAlign: 'center' }}>
                <Link to="/gift-cards" style={{ color: 'var(--theme-gold)', fontSize: '0.85rem', textDecoration: 'none' }}>
                  ← Choose Different Amount
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default GiftCardDetail;
