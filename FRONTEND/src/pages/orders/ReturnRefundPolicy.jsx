import React from 'react';
import { RotateCcw, ShieldCheck, CreditCard, Clock } from 'lucide-react';

const ReturnRefundPolicy = () => {
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
              SETTLEMENT PROTOCOLS
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
            Return & Refund Policy
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
            Clear guidelines on reverse armored collection, quality inspection, and refund turnaround times.
          </p>
        </div>

        <div
          className="bg-theme-card"
          style={{
            borderRadius: '16px',
            border: '1px solid var(--border-light)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            fontSize: '0.92rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.8',
          }}
        >
          <div>
            <h2 className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', margin: '0 0 0.75rem' }}>
              1. 15-Day Return Window
            </h2>
            <p>
              Patrons enjoy a full 15 days from delivery to initiate a return through their account dashboard or by contacting our concierge. Doorstep reverse pickup is arranged with armored couriers at zero cost to the patron.
            </p>
          </div>

          <div>
            <h2 className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', margin: '0 0 0.75rem' }}>
              2. Atelier Verification Process
            </h2>
            <p>
              Upon arrival at our Mumbai flagship atelier, each returned piece is assayed under high magnification to confirm silver purity and ensure stones have not suffered accidental impact. This inspection is finalized within 24 business hours.
            </p>
          </div>

          <div>
            <h2 className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', margin: '0 0 0.75rem' }}>
              3. Refund Turnaround & Payment Channels
            </h2>
            <p>
              Once approved, 100% of the purchase amount is credited back via the original payment source:
            </p>
            <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem' }}>
              <li><strong>UPI (Google Pay, PhonePe, Paytm):</strong> Instant credit within 2 to 4 hours.</li>
              <li><strong>Credit & Debit Cards:</strong> 2 to 5 business days subject to card issuing bank cycles.</li>
              <li><strong>Net Banking:</strong> 1 to 2 business days via NEFT/IMPS.</li>
              <li><strong>Cash on Delivery (COD):</strong> Instant direct IMPS transfer upon providing verified beneficiary details.</li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  );
};

export default ReturnRefundPolicy;
