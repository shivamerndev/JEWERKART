import React from 'react';
import { RotateCcw, ShieldCheck, CreditCard, Clock } from 'lucide-react';

const ReturnRefundPolicy = () => {
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
              SETTLEMENT PROTOCOLS
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2 tracking-[1px]"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
            }}
          >
            Return & Refund Policy
          </h1>
          <p
            className="font-garamond text-[1.2rem] max-w-[620px] mx-auto"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            Clear guidelines on reverse armored collection, quality inspection, and refund turnaround times.
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
              1. 15-Day Return Window
            </h2>
            <p className="m-0">
              Patrons enjoy a full 15 days from delivery to initiate a return through their account dashboard or by contacting our concierge. Doorstep reverse pickup is arranged with armored couriers at zero cost to the patron.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.35rem] mb-3" style={{ color: 'var(--text-primary)' }}>
              2. Atelier Verification Process
            </h2>
            <p className="m-0">
              Upon arrival at our Mumbai flagship atelier, each returned piece is assayed under high magnification to confirm silver purity and ensure stones have not suffered accidental impact. This inspection is finalized within 24 business hours.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.35rem] mb-3" style={{ color: 'var(--text-primary)' }}>
              3. Refund Turnaround & Payment Channels
            </h2>
            <p className="m-0">
              Once approved, 100% of the purchase amount is credited back via the original payment source:
            </p>
            <ul className="pl-5 mt-2 m-0">
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
