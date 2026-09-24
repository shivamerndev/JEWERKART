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
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-secondary)',
        padding: '3rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              ROYAL ATELIER GIFTING
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
            The Fine Jewellery Gift Boutique
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
            Celebrate life’s unforgettable milestones with heirloom 925 sterling silver and 22K gold vermeil treasures.
          </p>
        </div>

        {/* Complimentary Gift Box Showcase */}
        <div
          className="bg-theme-card"
          style={{
            borderRadius: '20px',
            border: '1px solid var(--border-light)',
            padding: '2.5rem 3rem',
            boxShadow: 'var(--shadow-md)',
            marginBottom: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--theme-gold)', marginBottom: '0.5rem' }}>
              <Package size={20} />
              <span style={{ fontSize: '0.85rem', fontWeight: '600', letterSpacing: '1.5px' }}>COMPLIMENTARY HEIRLOOM PACKAGING</span>
            </div>
            <h2 className="font-serif" style={{ fontSize: '1.75rem', color: 'var(--text-primary)', margin: '0 0 0.75rem' }}>
              Royal Velvet Keepsake Box & Golden Ribbon
            </h2>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.7' }}>
              Every gift from Jewerkart arrives pre-packaged in our signature embossed warm champagne outer box, royal velvet interior cushion, BIS authenticity certificate, and an optional personalized wax-sealed handwritten note.
            </p>
          </div>

          <div>
            <Link
              to="/gift-cards"
              className="btn-gold"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.85rem 1.75rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.95rem',
              }}
            >
              <Gift size={16} /> Send E-Gift Voucher
            </Link>
          </div>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {GIFT_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedRecipient(cat.id)}
              style={{
                padding: '0.6rem 1.5rem',
                borderRadius: '30px',
                border: selectedRecipient === cat.id ? '2px solid var(--text-primary)' : '1px solid var(--border-light)',
                backgroundColor: selectedRecipient === cat.id ? 'var(--accent-slate)' : 'var(--bg-card)',
                color: selectedRecipient === cat.id ? '#FEF0E0' : 'var(--text-primary)',
                fontWeight: selectedRecipient === cat.id ? '600' : '400',
                fontSize: '0.9rem',
                cursor: 'pointer',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gift Product Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {giftProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                className="bg-theme-card"
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
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
                <div style={{ height: '240px', backgroundColor: 'var(--bg-circle-item)', position: 'relative', overflow: 'hidden' }}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                    <span className="badge-925" style={{ fontSize: '9px' }}>
                      GIFT FAVORITE
                    </span>
                  </div>
                </div>

                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                      {product.categoryName}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <Star size={12} style={{ color: 'var(--theme-gold)', fill: 'var(--theme-gold)' }} />
                      <span style={{ fontSize: '0.75rem', fontWeight: '600' }}>{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="font-serif" style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-primary)', margin: '0 0 0.5rem' }}>
                    {product.name}
                  </h3>

                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                    <span style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice && (
                      <span style={{ fontSize: '0.85rem', color: '#9CA3AF', textDecoration: 'line-through' }}>
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
