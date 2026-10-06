import React from 'react';
import { Link } from 'react-router-dom';
import { RotateCcw, ShieldCheck, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

const ReturnPolicy = () => {
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
              PATRON TRUST
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2 tracking-[1px]"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
            }}
          >
            15-Day Return Policy
          </h1>
          <p
            className="font-garamond text-[1.2rem] max-w-[620px] mx-auto"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            Every piece from Jewerkart is backed by our 15-Day No-Questions-Asked Doorstep Return Guarantee.
          </p>
        </div>

        {/* Content Box */}
        <div
          className="bg-theme-card rounded-2xl p-10 mb-12"
          style={{
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-serif text-[1.35rem] m-0 mb-3" style={{ color: 'var(--text-primary)' }}>
                1. 15-Day Doorstep Courtesy Window
              </h2>
              <p className="m-0 text-[0.92rem] leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>
                We want you to fall completely in love with your jewellery. If for any reason you are not completely enchanted, you may initiate a return within 15 calendar days of receiving your consignment. We schedule an armored courier to collect the parcel directly from your doorstep at zero reverse shipping cost.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[1.35rem] m-0 mb-3" style={{ color: 'var(--text-primary)' }}>
                2. Return Elegibility Conditions
              </h2>
              <ul className="pl-5 m-0 text-[0.9rem] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
                <li>The item must be in its original unworn condition with zero scratches, dents, or signs of wear.</li>
                <li>The attached BIS 925 Hallmark certification tag must remain intact and untampered.</li>
                <li>The original luxury velvet vault box, certificate card, and outer carton must be returned intact.</li>
                <li>Custom-engraved pieces with personalized name initials or bespoke bridal orders are non-returnable but eligible for complimentary resizing.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-[1.35rem] m-0 mb-3" style={{ color: 'var(--text-primary)' }}>
                3. Rapid Refund Settlement
              </h2>
              <p className="m-0 text-[0.92rem] leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>
                Once our master gemologists physically inspect and verify the purity tag at our Mumbai atelier, your 100% refund is initiated within 24 to 48 hours directly to your original payment mode (UPI, Credit/Debit Card, or Bank Account). For COD orders, refund is transferred via instant IMPS upon bank verification.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/account/orders"
            className="btn-slate inline-flex items-center gap-2 py-3.5 px-8 rounded-md no-underline font-semibold"
          >
            Initiate Return From My Orders <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </main>
  );
};

export default ReturnPolicy;
