import React from 'react';
import { Truck, ShieldCheck, MapPin, AlertCircle } from 'lucide-react';

const ShippingPolicy = () => {
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
              OFFICIAL DISPATCH PROTOCOL
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
            Shipping & Armored Delivery Policy
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
            Detailed guidelines regarding packaging, dispatch schedules, transit insurance, and tamper seals.
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
              1. Domestic Armored Shipping Across India
            </h2>
            <p>
              Jewerkart offers 100% complimentary secured shipping across serviceable pin codes in India on all orders. We partner with Sequel Secure Armored Logistics and BlueDart Apex High-Value Services. Each parcel is packed in a heavy-duty, tamper-evident security envelope with serialized barcode seals.
            </p>
          </div>

          <div>
            <h2 className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', margin: '0 0 0.75rem' }}>
              2. Secret OTP Verification On Delivery
            </h2>
            <p>
              To ensure pieces reach exclusively authorized patrons, an encrypted One-Time Password (OTP) is dispatched via SMS to your registered phone number once the armored van departs the local hub. Do not disclose this OTP until you have physically inspected the outer tamper seal.
            </p>
          </div>

          <div>
            <h2 className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', margin: '0 0 0.75rem' }}>
              3. Dispatch Timelines & Bespoke Orders
            </h2>
            <p>
              Ready-to-ship hallmark pieces are dispatched from our Mumbai atelier vault within 24 business hours. Custom-engraved items or bespoke bridal suites require 5 to 7 days for precision casting and gemstone hand-setting prior to dispatch.
            </p>
          </div>

          <div>
            <h2 className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', margin: '0 0 0.75rem' }}>
              4. Transit Insurance & Claims
            </h2>
            <p>
              In the extraordinarily unlikely event of parcel damage or transit loss, our comprehensive transit insurance provides complete 100% replacement or immediate refund without patron liability.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default ShippingPolicy;
