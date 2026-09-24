import React from 'react';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
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
              DATA CONFIDENTIALITY
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
            Privacy Policy & Data Security
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
            Last Updated: September 2026. Your patron privacy is safeguarded by 256-bit bank-grade encryption protocols.
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
              1. Information We Collect
            </h2>
            <p>
              When you purchase or create a patron account at Jewerkart, we collect necessary personal details including your name, shipping address, contact phone number, and email. For armored transit consignments, phone numbers are utilized exclusively to deliver secret delivery OTP verification tokens.
            </p>
          </div>

          <div>
            <h2 className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', margin: '0 0 0.75rem' }}>
              2. Payment & Card Security
            </h2>
            <p>
              Jewerkart does not store or process your credit card CVVs, netbanking passwords, or UPI PINs. All payment transactions are tokenized and processed through PCI-DSS Level 1 certified banking gateways with 256-bit SSL encryption.
            </p>
          </div>

          <div>
            <h2 className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', margin: '0 0 0.75rem' }}>
              3. Non-Disclosure & Zero Spam Pledge
            </h2>
            <p>
              We honor your privacy as deeply as we honor our jewellery. We will never sell, rent, or lease your personal data to third-party advertisers. Marketing correspondence is strictly opt-in and may be unsubscribed from with a single click at any time.
            </p>
          </div>

          <div>
            <h2 className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', margin: '0 0 0.75rem' }}>
              4. Patron Data Rights
            </h2>
            <p>
              Under applicable Indian Information Technology and Data Protection laws, you possess the right to review, update, or request the deletion of your personal account records by writing to our compliance officer at privacy@jewerkart.com.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default PrivacyPolicy;
