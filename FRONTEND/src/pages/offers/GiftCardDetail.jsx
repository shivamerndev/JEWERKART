import React, { useState } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import { Gift, Sparkles, CheckCircle2, ShieldCheck, Mail, ArrowRight, Lock } from 'lucide-react';

const GiftCardDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [cardTheme, setCardTheme] = useState('gold');
  const [recipientName, setRecipientName] = useState(location.state?.recipientName || 'Radhika Kapoor');
  const [recipientEmail, setRecipientEmail] = useState(location.state?.recipientEmail || 'radhika@example.com');
  const [personalMessage, setPersonalMessage] = useState(
    location.state?.personalMessage || 'May this heirloom piece bring endless light and radiance into your life.'
  );

  const cardAmount = Number(id) || location.state?.amount || 5000;

  const handlePurchase = () => {
    navigate('/checkout/payment');
  };

  return (
    <main
      className="min-h-screen pt-12 px-6 pb-20"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-[1000px] mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-[0.85rem]">
          <Link to="/" className="no-underline" style={{ color: 'var(--text-secondary)' }}>Home</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <Link to="/gift-cards" className="no-underline" style={{ color: 'var(--text-secondary)' }}>Gift Cards</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>₹{cardAmount.toLocaleString('en-IN')} Voucher</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              ROYAL BESPOKE VOUCHER
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2 tracking-[1px]"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
            }}
          >
            ₹{cardAmount.toLocaleString('en-IN')} E-Gift Card
          </h1>
          <p
            className="font-garamond text-[1.2rem] max-w-[620px] mx-auto"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            Review the luxury presentation card before instant email dispatch.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-12 items-start">
          
          {/* Card Showcase */}
          <div className="col-span-12 md:col-span-6">
            <div
              className="rounded-2xl p-10 text-[#FEF0E0] aspect-[1.58/1] flex flex-col justify-between mb-6"
              style={{
                background:
                  cardTheme === 'gold'
                    ? 'linear-gradient(135deg, #1C140E 0%, #2F2117 50%, #1C140E 100%)'
                    : cardTheme === 'silver'
                    ? 'linear-gradient(135deg, #2D3748 0%, #4A5568 100%)'
                    : 'linear-gradient(135deg, #701A75 0%, #4A044E 100%)',
                border: '2px solid var(--theme-gold)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="badge-925 text-[8px]">
                    FINE JEWELLERY PASS
                  </span>
                  <h3 className="font-serif text-[1.6rem] text-[#FEF0E0] mt-1.5 mb-0">
                    JEWERKART
                  </h3>
                </div>
                <Sparkles size={24} style={{ color: 'var(--theme-gold)' }} />
              </div>

              <div>
                <div className="text-[0.8rem] text-[#D8BF9F] uppercase">Available Balance</div>
                <div className="text-[2.5rem] font-bold text-[#FEF0E0]">
                  ₹{cardAmount.toLocaleString('en-IN')}
                </div>
                <div className="text-[0.9rem] text-[#FEF0E0] mt-1">
                  Dedicated to: <strong>{recipientName || 'Privileged Recipient'}</strong>
                </div>
              </div>

              <div className="border-t border-white/20 pt-3 text-[0.75rem] text-[#D8BF9F] flex justify-between">
                <span>PIN: •••• •••• •••• 9842</span>
                <span>Lifetime Validity</span>
              </div>
            </div>

            {/* Theme Selector */}
            <div className="flex gap-2 justify-center">
              {[
                { id: 'gold', label: 'Imperial Onyx & Gold' },
                { id: 'silver', label: 'Platinum Slate' },
                { id: 'velvet', label: 'Royal Amethyst' },
              ].map((th) => (
                <button
                  key={th.id}
                  onClick={() => setCardTheme(th.id)}
                  className="py-2 px-3.5 rounded-full text-[0.8rem] cursor-pointer"
                  style={{
                    border: cardTheme === th.id ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                    backgroundColor: cardTheme === th.id ? 'var(--theme-champagne)' : 'var(--bg-card)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {th.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Confirmation & Checkout */}
          <div className="col-span-12 md:col-span-6">
            <div
              className="bg-theme-card rounded-2xl p-10"
              style={{
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h2 className="font-serif text-[1.35rem] mb-5" style={{ color: 'var(--text-primary)' }}>
                Voucher Summary & Dispatch
              </h2>

              <div className="flex flex-col gap-4 mb-8">
                <div className="flex justify-between text-[0.9rem]" style={{ color: 'var(--text-secondary)' }}>
                  <span>Voucher Value</span>
                  <span className="font-bold" style={{ color: 'var(--text-primary)' }}>₹{cardAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-[0.9rem]" style={{ color: 'var(--text-secondary)' }}>
                  <span>Delivery Method</span>
                  <span style={{ color: 'var(--text-primary)' }}>Instant Encrypted Email</span>
                </div>
                <div className="flex justify-between text-[0.9rem]" style={{ color: 'var(--text-secondary)' }}>
                  <span>Recipient Email</span>
                  <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{recipientEmail}</span>
                </div>
                <div className="pt-4" style={{ borderTop: '1px solid var(--border-light)' }}>
                  <span className="text-[0.8rem] block mb-1" style={{ color: 'var(--text-secondary)' }}>Personal Note:</span>
                  <p className="italic text-[0.88rem] m-0 leading-[1.5]" style={{ color: 'var(--text-primary)' }}>
                    "{personalMessage}"
                  </p>
                </div>
              </div>

              <button
                onClick={handlePurchase}
                className="btn-slate w-full p-4 rounded-lg font-semibold text-base flex items-center justify-center gap-2 cursor-pointer mb-4"
              >
                <Lock size={16} /> Complete Payment of ₹{cardAmount.toLocaleString('en-IN')}
              </button>

              <div className="text-center">
                <Link to="/gift-cards" className="text-[0.85rem] no-underline" style={{ color: 'var(--theme-gold)' }}>
                  ← Choose Different Amount
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default GiftCardDetail;
