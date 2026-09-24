import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Share2, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  Sparkles, 
  Star, 
  Check, 
  ArrowRight,
  Info,
  Ruler
} from 'lucide-react';
import { MOCK_PRODUCTS } from '../../utils/mockData';

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('14');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedNotice, setAddedNotice] = useState(false);

  // Match product by slug or id, fallback to first mock product
  const product = useMemo(() => {
    const found = MOCK_PRODUCTS.find(p => p.slug === slug || String(p.id) === slug);
    return found || MOCK_PRODUCTS[0];
  }, [slug]);

  const galleryImages = useMemo(() => {
    return product.images && product.images.length > 0
      ? product.images
      : [product.image, '/category_necklace.jpg', '/silver_earrings.jpg'];
  }, [product]);

  const relatedProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);
  }, [product]);

  const handleAddToCart = () => {
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 3000);
  };

  const handleBuyNow = () => {
    navigate('/checkout');
  };

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', fontSize: '0.85rem' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <Link to="/shop" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Shop</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <Link to={`/category/${product.category}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
            {product.categoryName}
          </Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{product.name}</span>
        </div>

        {/* Main Product Showcase Card */}
        <div
          className="bg-theme-card"
          style={{
            borderRadius: '16px',
            border: '1px solid var(--border-light)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '4rem',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3rem' }}>
            
            {/* Left: Gallery Showcase */}
            <div style={{ gridColumn: 'span 12' }} className="md:col-span-6">
              <div
                style={{
                  height: '480px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--bg-circle-item)',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid var(--border-light)',
                  marginBottom: '1rem',
                }}
              >
                <img
                  src={galleryImages[selectedImage] || product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                />
                <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                  <span className="badge-925" style={{ fontSize: '10px' }}>
                    {product.badge || '925 CERTIFIED'}
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              <div style={{ display: 'flex', gap: '12px' }}>
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      border: selectedImage === idx ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                      backgroundColor: 'var(--bg-circle-item)',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Details & Purchase Form */}
            <div style={{ gridColumn: 'span 12' }} className="md:col-span-6">
              
              {/* Category & Rating */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--theme-gold)', textTransform: 'uppercase', fontWeight: '600' }}>
                  {product.categoryName} • {product.metalName}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Star size={14} style={{ color: 'var(--theme-gold)', fill: 'var(--theme-gold)' }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                    {product.rating} ({product.reviews} verified reviews)
                  </span>
                </div>
              </div>

              {/* Title */}
              <h1
                className="font-serif"
                style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  margin: '0 0 1rem',
                  lineHeight: '1.25',
                }}
              >
                {product.name}
              </h1>

              {/* Pricing Block */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span style={{ fontSize: '1.15rem', color: '#9CA3AF', textDecoration: 'line-through' }}>
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span
                  style={{
                    backgroundColor: '#ECFDF5',
                    color: '#065F46',
                    border: '1px solid #A7F3D0',
                    fontSize: '0.78rem',
                    fontWeight: '600',
                    padding: '2px 8px',
                    borderRadius: '4px',
                  }}
                >
                  SAVE {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                Inclusive of all taxes. Free insured armored delivery across India.
              </p>

              {/* Description */}
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: '1.7',
                  marginBottom: '2rem',
                  borderTop: '1px solid var(--border-light)',
                  borderBottom: '1px solid var(--border-light)',
                  padding: '1.25rem 0',
                }}
              >
                {product.description}
              </p>

              {/* Size Selector if Ring or Bracelet */}
              {(product.category === 'rings' || product.category === 'bracelets') && (
                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                      Select Size (Indian Standard)
                    </span>
                    <Link
                      to="/size-guide"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.8rem',
                        color: 'var(--theme-gold)',
                        textDecoration: 'none',
                        fontWeight: '500',
                      }}
                    >
                      <Ruler size={13} /> Size Guide
                    </Link>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {['12', '14', '16', '18', '20'].map(sz => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '6px',
                          border: selectedSize === sz ? '2px solid var(--text-primary)' : '1px solid var(--border-light)',
                          backgroundColor: selectedSize === sz ? 'var(--theme-champagne)' : 'var(--bg-card-warm)',
                          fontWeight: selectedSize === sz ? '700' : '400',
                          color: 'var(--text-primary)',
                          cursor: 'pointer',
                        }}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Stepper & CTAs */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid var(--border-light)',
                    borderRadius: '6px',
                    backgroundColor: 'var(--bg-card-warm)',
                  }}
                >
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{
                      padding: '0.75rem 1rem',
                      background: 'none',
                      border: 'none',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      color: 'var(--text-primary)',
                    }}
                  >
                    −
                  </button>
                  <span style={{ padding: '0 0.5rem', fontWeight: '600', fontSize: '0.95rem' }}>{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    style={{
                      padding: '0.75rem 1rem',
                      background: 'none',
                      border: 'none',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      color: 'var(--text-primary)',
                    }}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="btn-gold"
                  style={{
                    flex: '1',
                    minWidth: '160px',
                    padding: '0.85rem 1.5rem',
                    borderRadius: '6px',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                  }}
                >
                  Add to Cart
                </button>

                <button
                  onClick={handleBuyNow}
                  className="btn-slate"
                  style={{
                    flex: '1',
                    minWidth: '160px',
                    padding: '0.85rem 1.5rem',
                    borderRadius: '6px',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                  }}
                >
                  Buy Now Instantly
                </button>

                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  aria-label="Wishlist"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '6px',
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-card-warm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <Heart
                    size={20}
                    style={{
                      color: isWishlisted ? '#EF4444' : 'var(--text-primary)',
                      fill: isWishlisted ? '#EF4444' : 'none',
                    }}
                  />
                </button>
              </div>

              {addedNotice && (
                <div
                  style={{
                    backgroundColor: 'var(--theme-champagne)',
                    border: '1px solid var(--border-light)',
                    padding: '0.75rem 1rem',
                    borderRadius: '6px',
                    color: 'var(--text-primary)',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem',
                  }}
                >
                  <span>✓ Added to your jewellery bag successfully!</span>
                  <Link to="/cart" style={{ color: 'var(--theme-gold)', fontWeight: '600', textDecoration: 'none' }}>
                    View Bag & Checkout →
                  </Link>
                </div>
              )}

              {/* Purity & Specifications Table */}
              <div
                style={{
                  backgroundColor: 'var(--bg-card-warm)',
                  borderRadius: '8px',
                  padding: '1.25rem',
                  border: '1px solid var(--border-light)',
                  marginBottom: '2rem',
                }}
              >
                <h4 className="font-serif" style={{ fontSize: '1rem', margin: '0 0 0.75rem', color: 'var(--text-primary)' }}>
                  Patron Guarantee & Specifications
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.82rem' }}>
                  <div>
                    <span style={{ color: 'var(--text-secondary)' }}>Precious Metal: </span>
                    <strong style={{ color: 'var(--text-primary)' }}>{product.metalName}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-secondary)' }}>Hallmark Stamp: </span>
                    <strong style={{ color: 'var(--text-primary)' }}>BIS 925 Hallmark</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-secondary)' }}>Gemstone: </span>
                    <strong style={{ color: 'var(--text-primary)' }}>{product.stoneName || '5A Zircon'}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-secondary)' }}>Gross Weight: </span>
                    <strong style={{ color: 'var(--text-primary)' }}>{product.weight || '12.4 gms'}</strong>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', textAlign: 'center' }}>
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--theme-champagne-light)', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                  <Truck size={20} style={{ color: 'var(--theme-gold)', margin: '0 auto 6px' }} />
                  <div style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-primary)' }}>Armored Logistics</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>100% Insured Delivery</div>
                </div>
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--theme-champagne-light)', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                  <RotateCcw size={20} style={{ color: 'var(--theme-gold)', margin: '0 auto 6px' }} />
                  <div style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-primary)' }}>15-Day Returns</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Doorstep Pickup</div>
                </div>
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--theme-champagne-light)', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                  <Sparkles size={20} style={{ color: 'var(--theme-gold)', margin: '0 auto 6px' }} />
                  <div style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-primary)' }}>Lifetime Spa</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Complimentary Polish</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* You May Also Admire */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="divider-ornament" style={{ marginBottom: '0.5rem' }}>
              <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
                MATCHING CREATIONS
              </span>
            </div>
            <h2 className="font-serif" style={{ fontSize: '2rem', fontWeight: '600', color: 'var(--text-primary)', margin: 0 }}>
              You May Also Admire
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id}
                to={`/product/${rel.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div
                  className="bg-theme-card"
                  style={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <div style={{ height: '220px', backgroundColor: 'var(--bg-circle-item)' }}>
                    <img src={rel.image} alt={rel.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '1rem' }}>
                    <h3 className="font-serif" style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)', margin: '0 0 0.35rem' }}>
                      {rel.name}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                      <span style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                        ₹{rel.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};

export default ProductDetail;