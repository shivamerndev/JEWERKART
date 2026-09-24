import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ExchangePolicy = () => {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: 'var(--bg-secondary)',
      padding: '3rem 1.5rem 5rem',
    }}>

      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              BESPOKE FLEXIBILITY
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
            Exchange & Resizing Policy
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
            Effortless size swaps and design exchanges with single-visit doorstep replacement.
          </p>
        </div>

        {/* Content Box */}
        <div
          className="bg-theme-card"
          style={{
            borderRadius: '16px',
            border: '1px solid var(--border-light)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '3rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            <div>
              <h2 className="font-serif" style={{ fontSize: '1.35rem', margin: '0 0 0.75rem', color: 'var(--text-primary)' }}>
                1. Complimentary Ring & Bangle Resizing
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.7', margin: 0 }}>
                If your ring or kada is slightly loose or snug, we provide a 100% complimentary size adjustment within 15 days of delivery. Our karigars will resize the piece or dispatch a freshly cast piece in your requested dimensions.
              </p>
            </div>

            <div>
              <h2 className="font-serif" style={{ fontSize: '1.35rem', margin: '0 0 0.75rem', color: 'var(--text-primary)' }}>
                2. Doorstep Single-Visit Swap
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.7', margin: 0 }}>
                To save you time, our armored courier partner brings your new replacement piece and collects the original piece in the exact same visit. You inspect the new piece, verify the seal, and hand over the previous box.
              </p>
            </div>

            <div>
              <h2 className="font-serif" style={{ fontSize: '1.35rem', margin: '0 0 0.75rem', color: 'var(--text-primary)' }}>
                3. Exchanging for Alternative Designs
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.7', margin: 0 }}>
                You may exchange any unworn piece for any other jewellery piece on our website. If the replacement item is of greater value, you simply pay the difference. If it is of lesser value, the balance is promptly refunded to your original payment mode.
              </p>
            </div>

          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/account/orders" className="btn-slate" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.85rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: '600' }}>
            Request Exchange on an Order <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </main>
  );
};

export default ExchangePolicy;
