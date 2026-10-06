import React from 'react';
import { XCircle, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

const CancellationPolicy = () => {
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
              TRANSPARENT GOVERNANCE
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2 tracking-[1px]"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
            }}
          >
            Cancellation Policy
          </h1>
          <p
            className="font-garamond text-[1.2rem] max-w-[620px] mx-auto"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            Clear terms regarding order cancellations, instant refunds, and post-dispatch modifications.
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
              1. Pre-Dispatch Cancellation (100% Instant Refund)
            </h2>
            <p className="m-0">
              Patrons may cancel any ready-to-ship order at any time before it leaves our vault for armored transit. Simply visit your Orders dashboard or contact our concierge. Full 100% refund is initiated immediately with zero penalty or deduction.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.35rem] mb-3" style={{ color: 'var(--text-primary)' }}>
              2. Cancellation After Armored Dispatch
            </h2>
            <p className="m-0">
              If your parcel is already in armored transit with Sequel Secure or BlueDart Apex, you may decline the delivery OTP at your doorstep. Upon receipt of the declined parcel back at our atelier, your refund will be processed under our standard 15-day policy.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[1.35rem] mb-3" style={{ color: 'var(--text-primary)' }}>
              3. Bespoke & Personalized Engravings
            </h2>
            <p className="m-0">
              For custom laser-engraved rings and bespoke bridal creations, cancellation is permitted within 24 hours of order placement prior to precious metal casting. After 24 hours, custom pieces enter active goldsmithing and are non-cancellable, but remain protected under our lifetime spa and warranty program.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default CancellationPolicy;
