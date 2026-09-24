import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Star, Heart, ShieldCheck } from 'lucide-react';
import { MOCK_PRODUCTS } from '../../utils/mockData';

const NewArrivals = () => {
  const [wishlist, setWishlist] = useState({});
  const [sortBy, setSortBy] = useState('featured');

  const toggleWishlist = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const newProducts = useMemo(() => {
    const items = MOCK_PRODUCTS.filter(p => p.badge === 'NEW' || p.badge === '925 SILVER' || p.badge === 'HEIRLOOM');
    return items.sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });
  }, [sortBy]);

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-secondary)',
        padding: '2.5rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              FRESH FROM THE ATELIER
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
            New Arrivals & Haute Drops
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
            Be the first to wear our latest seasonal silhouettes, forged in hallmarked 925 sterling silver and 22K gold vermeil.
          </p>
        </div>

        {/* Toolbar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--border-light)',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Presenting <strong>{newProducts.length}</strong> new creations
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                borderRadius: '6px',
                padding: '0.5rem 1rem',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                outline: 'none',
              }}
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {newProducts.map((product) => (
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
                <div
                  style={{
                    height: '240px',
                    backgroundColor: 'var(--bg-circle-item)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                    <span className="badge-925" style={{ fontSize: '9px' }}>
                      NEW DROP
                    </span>
                  </div>
                  <button
                    onClick={(e) => toggleWishlist(product.id, e)}
                    aria-label="Wishlist"
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <Heart
                      size={16}
                      style={{
                        color: wishlist[product.id] ? '#EF4444' : 'var(--text-primary)',
                        fill: wishlist[product.id] ? '#EF4444' : 'none',
                      }}
                    />
                  </button>
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

export default NewArrivals;
