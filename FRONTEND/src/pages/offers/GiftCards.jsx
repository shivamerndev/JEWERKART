import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Gift, Sparkles, CheckCircle2, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

const GIFT_CARD_DENOMINATIONS = [
  { id: '1000', amount: 1000, label: '₹1,000', title: 'Silver Token' },
  { id: '2500', amount: 2500, label: '₹2,500', title: 'Celebration Voucher' },
  { id: '5000', amount: 5000, label: '₹5,000', title: 'Royal Vermeil Voucher' },
  { id: '10000', amount: 10000, label: '₹10,000', title: 'Heirloom Patron Card' },
  { id: '25000', amount: 25000, label: '₹25,000', title: 'Imperial Bridal Privilege' },
];

const GiftCards = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(GIFT_CARD_DENOMINATIONS[2]);
  const [recipientName, setRecipientName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [personalMessage, setPersonalMessage] = useState('');

  const handleProceed = (e) => {
    e.preventDefault();
    navigate(`/gift-card/${selectedCard.id}`, {
      state: {
        recipientName,
        recipientEmail,
        personalMessage,
        amount: selectedCard.amount,
      }
    });
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-secondary)',
        padding: '3rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              THE GIFT OF CHOICE
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
            Jewerkart E-Gift Cards
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
            Give your loved ones the freedom to select their dream hallmarked heirloom. Delivered instantly via encrypted email or SMS.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3rem' }}>
          
          {/* Left: Card Preview */}
          <div style={{ gridColumn: 'span 12' }} className="md:col-span-5">
            <div
              style={{
                background: 'linear-gradient(135deg, #1C140E 0%, #2F2117 50%, #1C140E 100%)',
                borderRadius: '16px',
                border: '2px solid var(--theme-gold)',
                padding: '2.5rem',
                color: '#FEF0E0',
                boxShadow: 'var(--shadow-lg)',
                aspectRatio: '1.58/1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'sticky',
                top: '2rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <span className="badge-925" style={{ fontSize: '8px' }}>
                    ROYAL PRIVILEGE VOUCHER
                  </span>
                  <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#FEF0E0', margin: '0.5rem 0 0' }}>
                    JEWERKART
                  </h3>
                </div>
                <Sparkles size={24} style={{ color: 'var(--theme-gold)' }} />
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', color: '#D8BF9F', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Value In INR
                </div>
                <div style={{ fontSize: '2.4rem', fontWeight: '700', color: '#FEF0E0', margin: '0.2rem 0' }}>
                  {selectedCard.label}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#D8BF9F' }}>
                  {recipientName ? `Specially for ${recipientName}` : 'For someone special'}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#9CA3AF', borderTop: '1px solid rgba(216,191,159,0.3)', paddingTop: '0.75rem' }}>
                <span>Never Expires</span>
                <span>Valid on all 925 Silver & Vermeil</span>
              </div>
            </div>
          </div>

          {/* Right: Denomination & Details Form */}
          <div style={{ gridColumn: 'span 12' }} className="md:col-span-7">
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
                1. Select Gift Card Denomination
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
                {GIFT_CARD_DENOMINATIONS.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedCard(c)}
                    style={{
                      padding: '1rem 0.5rem',
                      borderRadius: '8px',
                      border: selectedCard.id === c.id ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                      backgroundColor: selectedCard.id === c.id ? 'var(--theme-champagne)' : 'var(--bg-card-warm)',
                      color: 'var(--text-primary)',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>{c.label}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '2px' }}>{c.title}</div>
                  </button>
                ))}
              </div>

              <h2 className="font-serif" style={{ fontSize: '1.35rem', margin: '0 0 1.25rem', color: 'var(--text-primary)' }}>
                2. Recipient Details & Personal Note
              </h2>

              <form onSubmit={handleProceed}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>Recipient Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Kapoor"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-warm)', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>Recipient Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. radhika@example.com"
                      value={recipientEmail}
                      onChange={(e) => setRecipientEmail(e.target.value)}
                      style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-warm)', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>Personalized Message (Optional)</label>
                  <textarea
                    rows="3"
                    placeholder="Wishing you radiance, joy, and eternal sparkle on your special day..."
                    value={personalMessage}
                    onChange={(e) => setPersonalMessage(e.target.value)}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-warm)', boxSizing: 'border-box' }}
                  />
                </div>

                <button
                  type="submit"
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
                  }}
                >
                  Configure & Proceed with {selectedCard.label} Gift Card <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default GiftCards;
