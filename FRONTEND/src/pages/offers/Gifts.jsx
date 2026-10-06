import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gift, Heart, Sparkles, Star, Package, ArrowRight } from 'lucide-react';
import { MOCK_PRODUCTS } from '../../utils/mockData';

const GIFT_CATEGORIES = [
  { id: 'all', label: 'All Curations' },
  { id: 'women', label: 'Gifts For Her' },
  { id: 'men', label: 'Gifts For Him' },
  { id: 'couples', label: 'Anniversary & Couples' },
];

const Gifts = () => {
  const [selectedRecipient, setSelectedRecipient] = useState('all');

  const giftProducts = MOCK_PRODUCTS.filter(p => {
    if (selectedRecipient === 'all') return true;
    return p.gender === selectedRecipient;
  });

  return (
    <main
      className="min-h-screen pt-12 px-6 pb-20"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              ROYAL ATELIER GIFTING
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2 tracking-[1px]"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
            }}
          >
            The Fine Jewellery Gift Boutique
          </h1>
          <p
            className="font-garamond text-[1.2rem] max-w-[620px] mx-auto"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            Celebrate life’s unforgettable milestones with heirloom 925 sterling silver and 22K gold vermeil treasures.
          </p>
        </div>

        {/* Complimentary Gift Box Showcase */}
        <div
          className="bg-theme-card rounded-[20px] py-10 px-12 mb-14 flex items-center justify-between flex-wrap gap-8"
          style={{
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div className="max-w-[650px]">
            <div className="flex items-center gap-2 mb-2" style={{ color: 'var(--theme-gold)' }}>
              <Package size={20} />
              <span className="text-[0.85rem] font-semibold tracking-[1.5px]">COMPLIMENTARY HEIRLOOM PACKAGING</span>
            </div>
            <h2 className="font-serif text-[1.75rem] mb-3" style={{ color: 'var(--text-primary)' }}>
              Royal Velvet Keepsake Box & Golden Ribbon
            </h2>
            <p className="m-0 text-[0.92rem] leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>
              Every gift from Jewerkart arrives pre-packaged in our signature embossed warm champagne outer box, royal velvet interior cushion, BIS authenticity certificate, and an optional personalized wax-sealed handwritten note.
            </p>
          </div>

          <div>
            <Link
              to="/gift-cards"
              className="btn-gold inline-flex items-center gap-2 py-3.5 px-7 rounded-md no-underline font-semibold text-[0.95rem]"
            >
              <Gift size={16} /> Send E-Gift Voucher
            </Link>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-2.5 mb-10 flex-wrap">
          {GIFT_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedRecipient(cat.id)}
              className="py-2.5 px-6 rounded-full text-[0.9rem] cursor-pointer"
              style={{
                border: selectedRecipient === cat.id ? '2px solid var(--text-primary)' : '1px solid var(--border-light)',
                backgroundColor: selectedRecipient === cat.id ? 'var(--accent-slate)' : 'var(--bg-card)',
                color: selectedRecipient === cat.id ? '#FEF0E0' : 'var(--text-primary)',
                fontWeight: selectedRecipient === cat.id ? '600' : '400',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gift Product Cards */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-7">
          {giftProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              className="no-underline text-inherit"
            >
              <div
                className="bg-theme-card rounded-lg overflow-hidden relative flex flex-col h-full transition-[transform,box-shadow] duration-300"
                style={{
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                <div
                  className="h-60 relative overflow-hidden"
                  style={{ backgroundColor: 'var(--bg-circle-item)' }}
                >
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="badge-925 text-[9px]">
                      GIFT FAVORITE
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col grow">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[0.75rem] uppercase" style={{ color: 'var(--text-secondary)' }}>
                      {product.categoryName}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star size={12} style={{ color: 'var(--theme-gold)', fill: 'var(--theme-gold)' }} />
                      <span className="text-[0.75rem] font-semibold">{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {product.name}
                  </h3>

                  <div className="mt-auto flex items-baseline gap-2">
                    <span className="text-[1.15rem] font-bold" style={{ color: 'var(--text-primary)' }}>
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice && (
                      <span className="text-[0.85rem] text-[#9CA3AF] line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
};

export default Gifts;
