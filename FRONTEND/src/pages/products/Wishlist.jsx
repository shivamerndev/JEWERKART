import React, { useState } from 'react';
import { Star, Heart, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: 'Kundan Jhumka Earrings', price: '₹4,999', originalPrice: '₹6,999', rating: 4.5, reviews: 128, badge: 'BESTSELLER', image: '/category_earrings.jpg' },
    { id: 2, name: 'Pearl Drop Danglers', price: '₹3,499', originalPrice: '₹4,999', rating: 4.8, reviews: 95, badge: 'NEW', image: '/silver_earrings.jpg' },
    { id: 3, name: 'Bridal Temple Necklace', price: '₹12,999', originalPrice: '₹16,999', rating: 4.8, reviews: 234, badge: 'BRIDAL', image: '/category_necklace.jpg' },
  ]);

  const handleRemove = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return (
    <main
      style={{
        minHeight: 'calc(100vh - 300px)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '2rem 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>SAVED ITEMS</span>
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(1.85rem, 3.5vw, 2.35rem)',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: '0 0 0.35rem',
              letterSpacing: '1px',
            }}
          >
            My Wishlist
          </h1>
          <p
            className="font-garamond"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              margin: 0,
            }}
          >
            {wishlistItems.length} items saved for later
          </p>
        </div>

        {/* Items Grid */}
        {wishlistItems.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem',
            }}
          >
            {wishlistItems.map((product) => (
              <div
                key={product.id}
                style={{
                  borderRadius: '6px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  cursor: 'pointer',
                  backgroundColor: 'var(--bg-card)',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Image Area */}
                <div
                  style={{
                    width: '100%',
                    height: '200px',
                    backgroundColor: 'var(--bg-circle-item)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, #FFF9F2 0%, #F7E5D0 100%)',
                  }}
                >
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.4s ease',
                      }}
                    />
                  )}

                  {/* Badge */}
                  {product.badge && (
                    <span
                      className="badge-925"
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        fontSize: '9px',
                        padding: '3px 8px',
                      }}
                    >
                      {product.badge}
                    </span>
                  )}

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemove(product.id)}
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'var(--bg-card)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '34px',
                      height: '34px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: 'var(--shadow-md)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#FEF0E0';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--bg-card)';
                    }}
                  >
                    <X size={16} style={{ color: '#C5914A' }} />
                  </button>
                </div>

                {/* Info */}
                <div style={{ padding: '0.875rem 1rem' }}>
                  <h3
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      fontFamily: 'var(--font-sans)',
                      margin: '0 0 0.4rem',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {product.name}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 0 0.4rem' }}>
                    <span
                      style={{
                        fontSize: '1rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-secondary)',
                          textDecoration: 'line-through',
                        }}
                      >
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Rating */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.7rem' }}>
                    <div style={{ display: 'flex', gap: '1px' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          fill={i < Math.floor(product.rating) ? '#C5914A' : 'none'}
                          style={{ color: i < Math.floor(product.rating) ? '#C5914A' : '#D8BF9F' }}
                        />
                      ))}
                    </div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                      ({product.reviews})
                    </span>
                  </div>

                  <button
                    className="btn-slate"
                    style={{
                      width: '100%',
                      padding: '0.55rem 0',
                      borderRadius: '2px',
                      fontSize: '0.7rem',
                      letterSpacing: '1.2px',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      fontWeight: '600',
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              backgroundColor: 'var(--bg-card)',
              borderRadius: '8px',
              border: '1px solid var(--border-light)',
            }}
          >
            <Heart size={48} style={{ color: 'var(--border-light)', margin: '0 auto 1rem', display: 'block' }} />
            <h2
              className="font-serif"
              style={{
                fontSize: '1.5rem',
                color: 'var(--text-primary)',
                margin: '0 0 0.5rem',
              }}
            >
              Your wishlist is empty
            </h2>
            <p
              className="font-garamond"
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                margin: '0 0 1.5rem',
              }}
            >
              Start adding items to save them for later
            </p>
            <Link
              to="/"
              className="btn-outline-dark"
              style={{
                padding: '0.7rem 2.5rem',
                borderRadius: '2px',
                fontSize: '0.75rem',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: '600',
              }}
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default Wishlist;
