import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, SlidersHorizontal, ShieldCheck, Sparkles, ArrowLeft } from 'lucide-react';
import { MOCK_PRODUCTS, MOCK_CATEGORIES } from '../../utils/mockData';

const Category = () => {
  const { slug } = useParams();
  const [sortBy, setSortBy] = useState('featured');
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const categoryInfo = useMemo(() => {
    const found = MOCK_CATEGORIES.find(c => c.slug.toLowerCase() === (slug || '').toLowerCase());
    if (found) return found;
    // Fallback info
    const title = (slug || 'Fine Jewellery')
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    return {
      name: title,
      slug: slug || '',
      image: '/category_earrings.jpg',
      description: `Explore our handcrafted, hallmarked ${title} created by master karigars in pure 925 sterling silver and 22K gold vermeil.`,
    };
  }, [slug]);

  const categoryProducts = useMemo(() => {
    const prods = MOCK_PRODUCTS.filter(p => {
      if (!slug) return true;
      return p.category.toLowerCase() === slug.toLowerCase() || p.slug.includes(slug.toLowerCase());
    });

    // If no exact match, return all products so page isn't bare
    const list = prods.length > 0 ? prods : MOCK_PRODUCTS;

    return [...list].sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [slug, sortBy]);

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-secondary)',
        padding: '2rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Breadcrumb Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <Link to="/shop" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Shop</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{categoryInfo.name}</span>
        </div>

        {/* Hero Category Banner */}
        <div
          className="bg-theme-card"
          style={{
            borderRadius: '16px',
            border: '1px solid var(--border-light)',
            overflow: 'hidden',
            marginBottom: '3rem',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
          }}
        >
          <div
            style={{
              padding: '3.5rem 2.5rem',
              maxWidth: '650px',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <div className="divider-ornament" style={{ justifyContent: 'flex-start', marginBottom: '0.75rem' }}>
              <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
                GENUINE 925 HALLMARK
              </span>
            </div>
            <h1
              className="font-serif"
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                fontWeight: '600',
                color: 'var(--text-primary)',
                margin: '0 0 1rem',
                letterSpacing: '1px',
              }}
            >
              {categoryInfo.name}
            </h1>
            <p
              className="font-garamond"
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.2rem',
                lineHeight: '1.6',
                margin: '0 0 1.5rem',
              }}
            >
              {categoryInfo.description}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                <ShieldCheck size={16} style={{ color: 'var(--theme-gold)' }} />
                <span>BIS Hallmarked Purity</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                <Sparkles size={16} style={{ color: 'var(--theme-gold)' }} />
                <span>Complimentary Lifetime Polish</span>
              </div>
            </div>
          </div>

          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '45%',
              overflow: 'hidden',
            }}
          >
            <img
              src={categoryInfo.image}
              alt={categoryInfo.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                maskImage: 'linear-gradient(to right, transparent, black 30%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 30%)',
              }}
            />
          </div>
        </div>

        {/* Toolbar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2rem',
            borderBottom: '1px solid var(--border-light)',
            paddingBottom: '1.25rem',
          }}
        >
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>
            Showing <strong>{categoryProducts.length}</strong> creations in <strong>{categoryInfo.name}</strong>
          </p>

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
                cursor: 'pointer',
              }}
            >
              <option value="featured">Featured Curations</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Patron Rating</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {categoryProducts.map((product) => (
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
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {product.metalName}
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

export default Category;
