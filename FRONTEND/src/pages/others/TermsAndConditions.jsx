import React from 'react';
import { FileText, ShieldCheck, Scale } from 'lucide-react';

const TermsAndConditions = () => {
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
              LEGAL TERMS
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
            Terms & Conditions of Patronage
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
            Governing your acquisition of hallmarked fine jewellery, bespoke bridal commissions, and atelier services.
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
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or making a purchase through the Jewerkart website, mobile platform, or concierge consultation, you agree to abide by these terms, our Shipping Policy, and our 15-Day Return Guarantee.
            </p>
          </div>

          <div>
            <h2 className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', margin: '0 0 0.75rem' }}>
              2. Hallmark Purity & Metal Specifications
            </h2>
            <p>
              Jewerkart certifies that all precious metal offerings strictly meet or exceed BIS (Bureau of Indian Standards) regulations. Sterling Silver pieces are guaranteed 92.5% pure silver. 22K Gold Vermeil is verified to possess a minimum electroplated thickness of 2.5 microns of genuine 22-karat gold over 925 sterling silver.
            </p>
          </div>

          <div>
            <h2 className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', margin: '0 0 0.75rem' }}>
              3. Pricing, GST & Order Acceptance
            </h2>
            <p>
              All published prices include statutory Indian Goods & Services Tax (GST) at 3% for fine jewellery. In the rare event of a typographical pricing error, our atelier reserves the right to notify the patron and issue an immediate 100% refund prior to consignment dispatch.
            </p>
          </div>

          <div>
            <h2 className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', margin: '0 0 0.75rem' }}>
              4. Intellectual Property
            </h2>
            <p>
              All jewellery designs, CAD renders, product photographs, brand marks, and editorial prose displayed on this platform are the exclusive intellectual property of Jewerkart Ateliers LLP. Unauthorized reproduction is strictly prohibited under Indian Copyright Acts.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default TermsAndConditions;
