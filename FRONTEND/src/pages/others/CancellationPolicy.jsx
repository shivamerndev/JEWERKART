import React from 'react';
import { XCircle, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

const CancellationPolicy = () => {
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
              TRANSPARENT GOVERNANCE
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
            Cancellation Policy
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
            Clear terms regarding order cancellations, instant refunds, and post-dispatch modifications.
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
              1. Pre-Dispatch Cancellation (100% Instant Refund)
            </h2>
            <p>
              Patrons may cancel any ready-to-ship order at any time before it leaves our vault for armored transit. Simply visit your Orders dashboard or contact our concierge. Full 100% refund is initiated immediately with zero penalty or deduction.
            </p>
          </div>

          <div>
            <h2 className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', margin: '0 0 0.75rem' }}>
              2. Cancellation After Armored Dispatch
            </h2>
            <p>
              If your parcel is already in armored transit with Sequel Secure or BlueDart Apex, you may decline the delivery OTP at your doorstep. Upon receipt of the declined parcel back at our atelier, your refund will be processed under our standard 15-day policy.
            </p>
          </div>

          <div>
            <h2 className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', margin: '0 0 0.75rem' }}>
              3. Bespoke & Personalized Engravings
            </h2>
            <p>
              For custom laser-engraved rings and bespoke bridal creations, cancellation is permitted within 24 hours of order placement prior to precious metal casting. After 24 hours, custom pieces enter active goldsmithing and are non-cancellable, but remain protected under our lifetime spa and warranty program.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default CancellationPolicy;
