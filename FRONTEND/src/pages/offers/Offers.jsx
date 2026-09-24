import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tag, Copy, Check, Gift, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { MOCK_PRODUCTS } from '../../utils/mockData';

const OFFERS_LIST = [
  {
    code: 'ROYAL10',
    title: '10% Royal Welcome Privilege',
    description: 'Enjoy 10% off on your entire shopping cart. Valid across 925 sterling silver and vermeil jewellery.',
    minSpend: 'No minimum threshold',
    expiry: 'Valid until 31st Oct, 2026',
    tag: 'MOST POPULAR',
  },
  {
    code: 'JEWEL20',
    title: '20% Festive Splendour',
    description: 'Special seasonal concession on orders exceeding ₹9,999. Includes complimentary velvet heirloom box.',
    minSpend: 'Min Cart Value: ₹9,999',
    expiry: 'Valid for Diwali & Bridal Season',
    tag: 'FESTIVE EDIT',
  },
  {
    code: 'BRIDAL2500',
    title: 'Flat ₹2,500 Off Bridal Ensembles',
    description: 'Instant deduction on handcrafted temple necklaces and choker sets valued at ₹14,999 or more.',
    minSpend: 'Min Cart Value: ₹14,999',
    expiry: 'Limited Atelier Allocation',
    tag: 'BRIDAL EXCLUSIVE',
  }
];

const Offers = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
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
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              PRIVILEGE BENEFITS
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
            Exclusive Offers & Privileges
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
            Discover promotional privileges, festive concessions, and complimentary luxury gifts on qualifying atelier consignments.
          </p>
        </div>

        {/* Coupon Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {OFFERS_LIST.map((offer) => (
            <div
              key={offer.code}
              className="bg-theme-card"
              style={{
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                padding: '2rem',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="badge-925" style={{ fontSize: '8px' }}>{offer.tag}</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{offer.expiry}</span>
                </div>

                <h3 className="font-serif" style={{ fontSize: '1.35rem', margin: '0 0 0.5rem', color: 'var(--text-primary)' }}>
                  {offer.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', margin: '0 0 1rem' }}>
                  {offer.description}
                </p>
                <div style={{ fontSize: '0.8rem', color: 'var(--theme-gold)', fontWeight: '600', marginBottom: '1.5rem' }}>
                  {offer.minSpend}
                </div>
              </div>

              {/* Coupon Code Pill & Copy Button */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: 'var(--bg-card-warm)',
                  border: '1px dashed var(--border-light)',
                  borderRadius: '8px',
                  padding: '0.65rem 1rem',
                }}
              >
                <div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Use Voucher</span>
                  <div style={{ fontWeight: '700', fontSize: '1.1rem', letterSpacing: '1px', color: 'var(--text-primary)' }}>
                    {offer.code}
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(offer.code)}
                  className="btn-gold"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '0.45rem 0.95rem',
                    borderRadius: '6px',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                  }}
                >
                  {copiedCode === offer.code ? (
                    <>
                      <Check size={14} /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> Copy Code
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Free Gift Promo Banner */}
        <div
          className="bg-theme-card"
          style={{
            borderRadius: '16px',
            border: '1px solid var(--border-light)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div style={{ maxWidth: '600px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--theme-gold)', marginBottom: '0.5rem' }}>
              <Gift size={20} />
              <span style={{ fontSize: '0.85rem', fontWeight: '600', letterSpacing: '1px' }}>COMPLIMENTARY PATRON GIFT</span>
            </div>
            <h2 className="font-serif" style={{ fontSize: '1.75rem', margin: '0 0 0.5rem', color: 'var(--text-primary)' }}>
              Silver Polishing Cloth & Velvet Vault Box
            </h2>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
              Every order placed this festive week automatically receives an authentic micro-fiber anti-tarnish polishing cloth and royal velvet keepsake travel case.
            </p>
          </div>

          <Link
            to="/shop"
            className="btn-slate"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.85rem 1.75rem',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.95rem',
            }}
          >
            Claim With Purchase <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </main>
  );
};

export default Offers;
