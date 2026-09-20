import { Star, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {

  const navigate = useNavigate()

  return (
    <div
    onClick={()=>alert("hey")}
      className="bg-theme-card"
      style={{
        borderRadius: '4px',
        overflow: 'hidden',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        e.currentTarget.style.transform = 'translateY(-4px)';
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
          height: '180px',
          backgroundColor: 'var(--bg-circle-item)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.3s ease',
            }}
          />
        ) : (
          <div
            className="font-garamond text-theme-secondary"
            style={{
              textAlign: 'center',
              fontSize: '0.85rem',
              letterSpacing: '1px',
            }}
          >
            Jewerkart
          </div>
        )}

        {/* Wishlist Button */}
        <button
          aria-label="Add to wishlist"
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            background: 'var(--bg-card)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            opacity: 0,
            transition: 'opacity 0.2s ease',
            boxShadow: 'var(--shadow-sm)',
          }}
          className="wishlist-btn"
        >
          <Heart size={14} style={{ color: 'var(--text-primary)' }} />
        </button>

        {/* Badge */}
        {product.badge && (
          <span
            className="badge-925"
            style={{
              position: 'absolute',
              top: '8px',
              left: '8px',
            }}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Product Info */}
      <div style={{ padding: '0.875rem 1rem' }}>
        <h3
          className="text-theme-primary"
          style={{
            fontSize: '0.825rem',
            fontWeight: '600',
            fontFamily: 'var(--font-sans)',
            margin: '0 0 0.35rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {product.name}
        </h3>

        <p
          className="text-theme-primary"
          style={{
            fontSize: '1rem',
            fontWeight: '700',
            margin: '0 0 0.5rem',
            fontFamily: 'var(--font-sans)',
          }}
        >
          {product.price}
        </p>

        {/* Rating */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            marginBottom: '0.75rem',
          }}
        >
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
          <span
            className="text-theme-secondary"
            style={{ fontSize: '0.7rem' }}
          >
            ({product.reviews})
          </span>
        </div>

        <button
          className="btn-slate"
          style={{
            width: '100%',
            padding: '0.55rem 0',
            borderRadius: '2px',
            fontSize: '0.725rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          Add to Cart
        </button>
      </div>

      {/* CSS for hover wishlist reveal */}
      <style>{`
        .bg-theme-card:hover .wishlist-btn {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
