import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { MOCK_COLLECTIONS, MOCK_PRODUCTS } from '../../utils/mockData';

const Collection = () => {
  const { slug } = useParams();
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const collection = useMemo(() => {
    const found = MOCK_COLLECTIONS.find(c => c.slug.toLowerCase() === (slug || '').toLowerCase());
    if (found) return found;
    return {
      name: (slug || 'Artisanal Collection').replace(/-/g, ' ').toUpperCase(),
      slug: slug || '',
      tagline: 'Exclusive Jewerkart Fine Jewellery Curation',
      description: 'Hand-forged with unparalleled precision by master karigars in pure 925 sterling silver and 22K gold vermeil.',
      image: '/showcase_necklace.jpg',
      badge: 'LIMITED EDITION',
    };
  }, [slug]);

  const collectionProducts = useMemo(() => {
    return MOCK_PRODUCTS.slice(0, 8);
  }, []);

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-secondary)',
        padding: '2rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <Link to="/collections" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Collections</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{collection.name}</span>
        </div>

        {/* Editorial Story Header */}
        <div
          className="bg-theme-card"
          style={{
            borderRadius: '16px',
            border: '1px solid var(--border-light)',
            overflow: 'hidden',
            marginBottom: '3.5rem',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)' }}>
            <div
              style={{
                gridColumn: 'span 12',
                padding: '3.5rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
              className="md:col-span-7"
            >
              <div className="divider-ornament" style={{ justifyContent: 'flex-start', marginBottom: '0.75rem' }}>
                <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
                  {collection.badge || 'EDITORIAL CURATION'}
                </span>
              </div>
              <h1
                className="font-serif"
                style={{
                  fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  margin: '0 0 0.5rem',
                  lineHeight: '1.2',
                }}
              >
                {collection.name}
              </h1>
              <p
                className="font-garamond"
                style={{
                  color: 'var(--theme-gold)',
                  fontSize: '1.35rem',
                  fontStyle: 'italic',
                  margin: '0 0 1.25rem',
                }}
              >
                {collection.tagline}
              </p>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: '1.7',
                  marginBottom: '2rem',
                }}
              >
                {collection.description}
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--theme-gold)' }} />
                  <span>Assayed & BIS 925 Hallmarked</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                  <Sparkles size={18} style={{ color: 'var(--theme-gold)' }} />
                  <span>Artisanal Hand Setting</span>
                </div>
              </div>
            </div>

            <div
              style={{
                gridColumn: 'span 12',
                height: '380px',
                position: 'relative',
              }}
              className="md:col-span-5"
            >
              <img
                src={collection.image}
                alt={collection.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.5rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              CURATED HEIRLOOMS
            </span>
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: '2rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: 0,
            }}
          >
            Pieces In This Edit
          </h2>
        </div>

        {/* Products Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {collectionProducts.map((product) => (
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
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                  <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                    {product.badge && (
                      <span className="badge-925" style={{ fontSize: '9px' }}>
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={(e) => toggleWishlist(product.id, e)}
                    aria-label="Add to Wishlist"
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
                      <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      margin: '0 0 0.5rem',
                      lineHeight: '1.35',
                    }}
                  >
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

export default Collection;
