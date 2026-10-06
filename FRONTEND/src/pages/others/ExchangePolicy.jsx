import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ExchangePolicy = () => {
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
              BESPOKE FLEXIBILITY
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2 tracking-[1px]"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
            }}
          >
            Exchange & Resizing Policy
          </h1>
          <p
            className="font-garamond text-[1.2rem] max-w-[620px] mx-auto"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            Effortless size swaps and design exchanges with single-visit doorstep replacement.
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
                1. Complimentary Ring & Bangle Resizing
              </h2>
              <p className="m-0 text-[0.92rem] leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>
                If your ring or kada is slightly loose or snug, we provide a 100% complimentary size adjustment within 15 days of delivery. Our karigars will resize the piece or dispatch a freshly cast piece in your requested dimensions.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[1.35rem] m-0 mb-3" style={{ color: 'var(--text-primary)' }}>
                2. Doorstep Single-Visit Swap
              </h2>
              <p className="m-0 text-[0.92rem] leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>
                To save you time, our armored courier partner brings your new replacement piece and collects the original piece in the exact same visit. You inspect the new piece, verify the seal, and hand over the previous box.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[1.35rem] m-0 mb-3" style={{ color: 'var(--text-primary)' }}>
                3. Exchanging for Alternative Designs
              </h2>
              <p className="m-0 text-[0.92rem] leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>
                You may exchange any unworn piece for any other jewellery piece on our website. If the replacement item is of greater value, you simply pay the difference. If it is of lesser value, the balance is promptly refunded to your original payment mode.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/account/orders"
            className="btn-slate inline-flex items-center gap-2 py-3.5 px-8 rounded-md no-underline font-semibold"
          >
            Request Exchange on an Order <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ExchangePolicy;
