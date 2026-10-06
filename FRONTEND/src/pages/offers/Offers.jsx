import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tag, Copy, Check, Gift, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { MOCK_PRODUCTS } from '../../utils/mockData';

const OFFERS_LIST = [
  {
    code: 'ROYAL10',
    title: '10% Royal Welcome Privilege',
    description: 'Enjoy 10% off on your entire shopping cart. Valid across 925 sterling silver and vermeil jewellery.',
    minSpend: 'No minimum threshold',
    expiry: 'Valid until 31st Oct, 2026',
    tag: 'MOST POPULAR',
  },
  {
    code: 'JEWEL20',
    title: '20% Festive Splendour',
    description: 'Special seasonal concession on orders exceeding ₹9,999. Includes complimentary velvet heirloom box.',
    minSpend: 'Min Cart Value: ₹9,999',
    expiry: 'Valid for Diwali & Bridal Season',
    tag: 'FESTIVE EDIT',
  },
  {
    code: 'BRIDAL2500',
    title: 'Flat ₹2,500 Off Bridal Ensembles',
    description: 'Instant deduction on handcrafted temple necklaces and choker sets valued at ₹14,999 or more.',
    minSpend: 'Min Cart Value: ₹14,999',
    expiry: 'Limited Atelier Allocation',
    tag: 'BRIDAL EXCLUSIVE',
  }
];

const Offers = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <main
      className="min-h-screen pt-10 px-6 pb-20"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              PRIVILEGE BENEFITS
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2 tracking-[1px]"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
            }}
          >
            Exclusive Offers & Privileges
          </h1>
          <p
            className="font-garamond text-[1.2rem] max-w-[620px] mx-auto"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            Discover promotional privileges, festive concessions, and complimentary luxury gifts on qualifying atelier consignments.
          </p>
        </div>

        {/* Coupon Cards Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8 mb-16">
          {OFFERS_LIST.map((offer) => (
            <div
              key={offer.code}
              className="bg-theme-card rounded-2xl p-8 flex flex-col justify-between relative"
              style={{
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="badge-925 text-[8px]">{offer.tag}</span>
                  <span className="text-[0.78rem]" style={{ color: 'var(--text-secondary)' }}>{offer.expiry}</span>
                </div>

                <h3 className="font-serif text-[1.35rem] mb-2" style={{ color: 'var(--text-primary)' }}>
                  {offer.title}
                </h3>
                <p className="text-[0.88rem] leading-[1.6] mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {offer.description}
                </p>
                <div className="text-[0.8rem] font-semibold mb-6" style={{ color: 'var(--theme-gold)' }}>
                  {offer.minSpend}
                </div>
              </div>

              {/* Coupon Code Pill & Copy Button */}
              <div
                className="flex items-center justify-between rounded-lg py-2.5 px-4"
                style={{
                  backgroundColor: 'var(--bg-card-warm)',
                  border: '1px dashed var(--border-light)',
                }}
              >
                <div>
                  <span className="text-[0.7rem] uppercase block" style={{ color: 'var(--text-secondary)' }}>Use Voucher</span>
                  <div className="font-bold text-[1.1rem] tracking-[1px]" style={{ color: 'var(--text-primary)' }}>
                    {offer.code}
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(offer.code)}
                  className="btn-gold inline-flex items-center gap-1.5 py-2 px-4 rounded-md text-[0.82rem] cursor-pointer"
                >
                  {copiedCode === offer.code ? (
                    <>
                      <Check size={14} /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> Copy Code
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Free Gift Promo Banner */}
        <div
          className="bg-theme-card rounded-2xl p-10 flex items-center justify-between flex-wrap gap-6"
          style={{
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div className="max-w-[600px]">
            <div className="flex items-center gap-2 mb-2" style={{ color: 'var(--theme-gold)' }}>
              <Gift size={20} />
              <span className="text-[0.85rem] font-semibold tracking-[1px]">COMPLIMENTARY PATRON GIFT</span>
            </div>
            <h2 className="font-serif text-[1.75rem] mb-2" style={{ color: 'var(--text-primary)' }}>
              Silver Polishing Cloth & Velvet Vault Box
            </h2>
            <p className="m-0 text-[0.92rem] leading-[1.6]" style={{ color: 'var(--text-secondary)' }}>
              Every order placed this festive week automatically receives an authentic micro-fiber anti-tarnish polishing cloth and royal velvet keepsake travel case.
            </p>
          </div>

          <Link
            to="/shop"
            className="btn-slate inline-flex items-center gap-2 py-3.5 px-7 rounded-md no-underline font-semibold text-[0.95rem]"
          >
            Claim With Purchase <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </main>
  );
};

export default Offers;
