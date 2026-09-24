import React from 'react';
import { Link } from 'react-router-dom';
import { RotateCcw, ShieldCheck, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

const ReturnPolicy = () => {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-secondary)',
        padding: '3rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              PATRON TRUST
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
            15-Day Return Policy
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
            Every piece from Jewerkart is backed by our 15-Day No-Questions-Asked Doorstep Return Guarantee.
          </p>
        </div>

        {/* Content Box */}
        <div
          className="bg-theme-card"
          style={{
            borderRadius: '16px',
            border: '1px solid var(--border-light)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '3rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div>
              <h2 className="font-serif" style={{ fontSize: '1.35rem', margin: '0 0 0.75rem', color: 'var(--text-primary)' }}>
                1. 15-Day Doorstep Courtesy Window
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.7', margin: 0 }}>
                We want you to fall completely in love with your jewellery. If for any reason you are not completely enchanted, you may initiate a return within 15 calendar days of receiving your consignment. We schedule an armored courier to collect the parcel directly from your doorstep at zero reverse shipping cost.
              </p>
            </div>

            <div>
              <h2 className="font-serif" style={{ fontSize: '1.35rem', margin: '0 0 0.75rem', color: 'var(--text-primary)' }}>
                2. Return Elegibility Conditions
              </h2>
              <ul style={{ paddingLeft: '1.25rem', margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.8' }}>
                <li>The item must be in its original unworn condition with zero scratches, dents, or signs of wear.</li>
                <li>The attached BIS 925 Hallmark certification tag must remain intact and untampered.</li>
                <li>The original luxury velvet vault box, certificate card, and outer carton must be returned intact.</li>
                <li>Custom-engraved pieces with personalized name initials or bespoke bridal orders are non-returnable but eligible for complimentary resizing.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif" style={{ fontSize: '1.35rem', margin: '0 0 0.75rem', color: 'var(--text-primary)' }}>
                3. Rapid Refund Settlement
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.7', margin: 0 }}>
                Once our master gemologists physically inspect and verify the purity tag at our Mumbai atelier, your 100% refund is initiated within 24 to 48 hours directly to your original payment mode (UPI, Credit/Debit Card, or Bank Account). For COD orders, refund is transferred via instant IMPS upon bank verification.
              </p>
            </div>

          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/account/orders" className="btn-slate" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.85rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: '600' }}>
            Initiate Return From My Orders <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </main>
  );
};

export default ReturnPolicy;
