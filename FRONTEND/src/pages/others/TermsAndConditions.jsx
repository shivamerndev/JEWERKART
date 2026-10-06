import React from 'react';
import { FileText, ShieldCheck, Scale } from 'lucide-react';

const TermsAndConditions = () => {
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
              LEGAL TERMS
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2 tracking-[1px]"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
            }}
          >
            Terms & Conditions of Patronage
          </h1>
          <p
            className="font-garamond text-[1.2rem] max-w-[620px] mx-auto"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            Governing your acquisition of hallmarked fine jewellery, bespoke bridal commissions, and atelier services.
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
              1. Acceptance of Terms
            </h2>
            <p className="m-0">
              By accessing or making a purchase through the Jewerkart website, mobile platform, or concierge consultation, you agree to abide by these terms, our Shipping Policy, and our 15-Day Return Guarantee.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.35rem] mb-3" style={{ color: 'var(--text-primary)' }}>
              2. Hallmark Purity & Metal Specifications
            </h2>
            <p className="m-0">
              Jewerkart certifies that all precious metal offerings strictly meet or exceed BIS (Bureau of Indian Standards) regulations. Sterling Silver pieces are guaranteed 92.5% pure silver. 22K Gold Vermeil is verified to possess a minimum electroplated thickness of 2.5 microns of genuine 22-karat gold over 925 sterling silver.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.35rem] mb-3" style={{ color: 'var(--text-primary)' }}>
              3. Pricing, GST & Order Acceptance
            </h2>
            <p className="m-0">
              All published prices include statutory Indian Goods & Services Tax (GST) at 3% for fine jewellery. In the rare event of a typographical pricing error, our atelier reserves the right to notify the patron and issue an immediate 100% refund prior to consignment dispatch.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.35rem] mb-3" style={{ color: 'var(--text-primary)' }}>
              4. Intellectual Property
            </h2>
            <p className="m-0">
              All jewellery designs, CAD renders, product photographs, brand marks, and editorial prose displayed on this platform are the exclusive intellectual property of Jewerkart Ateliers LLP. Unauthorized reproduction is strictly prohibited under Indian Copyright Acts.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default TermsAndConditions;
