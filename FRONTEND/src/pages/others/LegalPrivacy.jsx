import React from 'react';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <main
      className="min-h-screen pt-12 px-6 pb-20"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-[960px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              DATA CONFIDENTIALITY
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2 tracking-[1px]"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
            }}
          >
            Privacy Policy & Data Security
          </h1>
          <p
            className="font-garamond text-[1.2rem] max-w-[620px] mx-auto"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            Last Updated: September 2026. Your patron privacy is safeguarded by 256-bit bank-grade encryption protocols.
          </p>
        </div>

        <div
          className="bg-theme-card rounded-2xl p-10 flex flex-col gap-8 text-[0.92rem] leading-[1.8]"
          style={{
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
            color: 'var(--text-secondary)',
          }}
        >
          <div>
            <h2 className="font-serif text-[1.35rem] mb-3" style={{ color: 'var(--text-primary)' }}>
              1. Information We Collect
            </h2>
            <p className="m-0">
              When you purchase or create a patron account at Jewerkart, we collect necessary personal details including your name, shipping address, contact phone number, and email. For armored transit consignments, phone numbers are utilized exclusively to deliver secret delivery OTP verification tokens.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.35rem] mb-3" style={{ color: 'var(--text-primary)' }}>
              2. Payment & Card Security
            </h2>
            <p className="m-0">
              Jewerkart does not store or process your credit card CVVs, netbanking passwords, or UPI PINs. All payment transactions are tokenized and processed through PCI-DSS Level 1 certified banking gateways with 256-bit SSL encryption.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.35rem] mb-3" style={{ color: 'var(--text-primary)' }}>
              3. Non-Disclosure & Zero Spam Pledge
            </h2>
            <p className="m-0">
              We honor your privacy as deeply as we honor our jewellery. We will never sell, rent, or lease your personal data to third-party advertisers. Marketing correspondence is strictly opt-in and may be unsubscribed from with a single click at any time.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.35rem] mb-3" style={{ color: 'var(--text-primary)' }}>
              4. Patron Data Rights
            </h2>
            <p className="m-0">
              Under applicable Indian Information Technology and Data Protection laws, you possess the right to review, update, or request the deletion of your personal account records by writing to our compliance officer at privacy@jewerkart.com.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default PrivacyPolicy;
