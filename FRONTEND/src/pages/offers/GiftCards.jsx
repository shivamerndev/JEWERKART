import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Gift, Sparkles, CheckCircle2, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

const GIFT_CARD_DENOMINATIONS = [
  { id: '1000', amount: 1000, label: '₹1,000', title: 'Silver Token' },
  { id: '2500', amount: 2500, label: '₹2,500', title: 'Celebration Voucher' },
  { id: '5000', amount: 5000, label: '₹5,000', title: 'Royal Vermeil Voucher' },
  { id: '10000', amount: 10000, label: '₹10,000', title: 'Heirloom Patron Card' },
  { id: '25000', amount: 25000, label: '₹25,000', title: 'Imperial Bridal Privilege' },
];

const GiftCards = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(GIFT_CARD_DENOMINATIONS[2]);
  const [recipientName, setRecipientName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [personalMessage, setPersonalMessage] = useState('');

  const handleProceed = (e) => {
    e.preventDefault();
    navigate(`/gift-card/${selectedCard.id}`, {
      state: {
        recipientName,
        recipientEmail,
        personalMessage,
        amount: selectedCard.amount,
      }
    });
  };

  return (
    <main
      className="min-h-screen pt-12 px-6 pb-20"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              THE GIFT OF CHOICE
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2 tracking-[1px]"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
            }}
          >
            Jewerkart E-Gift Cards
          </h1>
          <p
            className="font-garamond text-[1.2rem] max-w-[620px] mx-auto"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            Give your loved ones the freedom to select their dream hallmarked heirloom. Delivered instantly via encrypted email or SMS.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-12">
          
          {/* Left: Card Preview */}
          <div className="col-span-12 md:col-span-5">
            <div
              className="rounded-2xl p-10 text-[#FEF0E0] aspect-[1.58/1] flex flex-col justify-between sticky top-8"
              style={{
                background: 'linear-gradient(135deg, #1C140E 0%, #2F2117 50%, #1C140E 100%)',
                border: '2px solid var(--theme-gold)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="badge-925 text-[8px]">
                    ROYAL PRIVILEGE VOUCHER
                  </span>
                  <h3 className="font-serif text-[1.5rem] text-[#FEF0E0] mt-2 mb-0">
                    JEWERKART
                  </h3>
                </div>
                <Sparkles size={24} style={{ color: 'var(--theme-gold)' }} />
              </div>

              <div>
                <div className="text-[0.8rem] text-[#D8BF9F] uppercase tracking-[1px]">
                  Value In INR
                </div>
                <div className="text-[2.4rem] font-bold text-[#FEF0E0] my-1">
                  {selectedCard.label}
                </div>
                <div className="text-[0.85rem] text-[#D8BF9F]">
                  {recipientName ? `Specially for ${recipientName}` : 'For someone special'}
                </div>
              </div>

              <div className="flex justify-between text-[0.75rem] text-[#9CA3AF] border-t border-[rgba(216,191,159,0.3)] pt-3">
                <span>Never Expires</span>
                <span>Valid on all 925 Silver & Vermeil</span>
              </div>
            </div>
          </div>

          {/* Right: Denomination & Details Form */}
          <div className="col-span-12 md:col-span-7">
            <div
              className="bg-theme-card rounded-2xl p-10"
              style={{
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h2 className="font-serif text-[1.35rem] mb-5" style={{ color: 'var(--text-primary)' }}>
                1. Select Gift Card Denomination
              </h2>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-3 mb-8">
                {GIFT_CARD_DENOMINATIONS.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedCard(c)}
                    className="py-4 px-2 rounded-lg text-center cursor-pointer"
                    style={{
                      border: selectedCard.id === c.id ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                      backgroundColor: selectedCard.id === c.id ? 'var(--theme-champagne)' : 'var(--bg-card-warm)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <div className="text-[1.2rem] font-bold">{c.label}</div>
                    <div className="text-[0.72rem] mt-0.5" style={{ color: 'var(--text-secondary)' }}>{c.title}</div>
                  </button>
                ))}
              </div>

              <h2 className="font-serif text-[1.35rem] mb-5" style={{ color: 'var(--text-primary)' }}>
                2. Recipient Details & Personal Note
              </h2>

              <form onSubmit={handleProceed}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                  <div>
                    <label className="block text-[0.85rem] font-semibold mb-1.5">Recipient Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Kapoor"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      className="w-full p-3 rounded-md box-border outline-none"
                      style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-warm)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-[0.85rem] font-semibold mb-1.5">Recipient Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. radhika@example.com"
                      value={recipientEmail}
                      onChange={(e) => setRecipientEmail(e.target.value)}
                      className="w-full p-3 rounded-md box-border outline-none"
                      style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-warm)' }}
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-[0.85rem] font-semibold mb-1.5">Personalized Message (Optional)</label>
                  <textarea
                    rows="3"
                    placeholder="Wishing you radiance, joy, and eternal sparkle on your special day..."
                    value={personalMessage}
                    onChange={(e) => setPersonalMessage(e.target.value)}
                    className="w-full p-3 rounded-md box-border outline-none"
                    style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-warm)' }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-slate w-full p-4 rounded-lg font-semibold text-base flex items-center justify-center gap-2 cursor-pointer"
                >
                  Configure & Proceed with {selectedCard.label} Gift Card <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default GiftCards;
