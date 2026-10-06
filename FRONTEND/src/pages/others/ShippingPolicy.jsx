import React from 'react';
import { Truck, ShieldCheck, MapPin, AlertCircle } from 'lucide-react';

const ShippingPolicy = () => {
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
              OFFICIAL DISPATCH PROTOCOL
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2 tracking-[1px]"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
            }}
          >
            Shipping & Armored Delivery Policy
          </h1>
          <p
            className="font-garamond text-[1.2rem] max-w-[620px] mx-auto"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            Detailed guidelines regarding packaging, dispatch schedules, transit insurance, and tamper seals.
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
              1. Domestic Armored Shipping Across India
            </h2>
            <p className="m-0">
              Jewerkart offers 100% complimentary secured shipping across serviceable pin codes in India on all orders. We partner with Sequel Secure Armored Logistics and BlueDart Apex High-Value Services. Each parcel is packed in a heavy-duty, tamper-evident security envelope with serialized barcode seals.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.35rem] mb-3" style={{ color: 'var(--text-primary)' }}>
              2. Secret OTP Verification On Delivery
            </h2>
            <p className="m-0">
              To ensure pieces reach exclusively authorized patrons, an encrypted One-Time Password (OTP) is dispatched via SMS to your registered phone number once the armored van departs the local hub. Do not disclose this OTP until you have physically inspected the outer tamper seal.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.35rem] mb-3" style={{ color: 'var(--text-primary)' }}>
              3. Dispatch Timelines & Bespoke Orders
            </h2>
            <p className="m-0">
              Ready-to-ship hallmark pieces are dispatched from our Mumbai atelier vault within 24 business hours. Custom-engraved items or bespoke bridal suites require 5 to 7 days for precision casting and gemstone hand-setting prior to dispatch.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.35rem] mb-3" style={{ color: 'var(--text-primary)' }}>
              4. Transit Insurance & Claims
            </h2>
            <p className="m-0">
              In the extraordinarily unlikely event of parcel damage or transit loss, our comprehensive transit insurance provides complete 100% replacement or immediate refund without patron liability.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default ShippingPolicy;
