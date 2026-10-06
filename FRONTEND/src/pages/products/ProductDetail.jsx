import React, { useState, useMemo, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Truck, 
  RotateCcw, 
  Sparkles, 
  Star, 
  Ruler
} from 'lucide-react';
import { MOCK_PRODUCTS } from '../../utils/mockData';

/**
 * ZoomedImage: Floating zoom portal for desktop view
 */
export const ZoomedImage = ({ position, img }) => {
  if (!img) return null;
  const x = position?.x ?? 50;
  const y = position?.y ?? 50;
  return (
    <div className="fixed h-[70vmin] w-[45vw] z-50 top-20 right-6 bg-white dark:bg-neutral-900 hidden md:block rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-neutral-800 pointer-events-none">
      <img
        src={img}
        alt="zoomed product"
        className="w-full h-full object-cover transition-transform duration-75 ease-out"
        style={{
          transform: "scale(2.5)",
          transformOrigin: `${x}% ${y}%`,
        }}
      />
    </div>
  );
};

/**
 * ProductGallery: Carousel, Touch Gestures, Glass Dock, and Magnifier Lens
 */
export const ProductGallery = ({ images = [], badge, onZoomChange }) => {
  const containerRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const safeImages = images && images.length > 0 ? images : ['/placeholder.jpg'];

  // Mobile swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const deltaX = touchStartX.current - touchEndX.current;
    if (deltaX > 50) {
      // Swipe left -> next
      const nextIdx = (current + 1) % safeImages.length;
      setCurrent(nextIdx);
      if (onZoomChange && isHovered) {
        onZoomChange({ isZoomed: true, position, image: safeImages[nextIdx] });
      }
    } else if (deltaX < -50) {
      // Swipe right -> previous
      const prevIdx = current === 0 ? safeImages.length - 1 : current - 1;
      setCurrent(prevIdx);
      if (onZoomChange && isHovered) {
        onZoomChange({ isZoomed: true, position, image: safeImages[prevIdx] });
      }
    }
  };

  // Mouse tracking for magnifying lens
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - left) / width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - top) / height) * 100));
    setPosition({ x, y });
    if (onZoomChange) {
      onZoomChange({ isZoomed: true, position: { x, y }, image: safeImages[current] });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onZoomChange) {
      onZoomChange({ isZoomed: true, position, image: safeImages[current] });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (onZoomChange) {
      onZoomChange({ isZoomed: false, position, image: null });
    }
  };

  const handleThumbnailClick = (idx) => {
    setCurrent(idx);
    if (onZoomChange && isHovered) {
      onZoomChange({ isZoomed: true, position, image: safeImages[idx] });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[460px] md:h-[540px] rounded-2xl overflow-hidden shadow-lg bg-neutral-100 dark:bg-neutral-800 select-none cursor-crosshair md:cursor-none border border-black/5 dark:border-white/10"
    >
      {/* 1. Magnifier Lens Box (Desktop only) */}
      {isHovered && (
        <span
          className="bg-white/35 border border-white/50 hidden md:block w-1/4 h-1/4 rounded-xl absolute z-20 pointer-events-none shadow-md backdrop-blur-[1px]"
          style={{
            left: `calc(${position.x}% - 12.5%)`,
            top: `calc(${position.y}% - 12.5%)`,
          }}
        />
      )}

      {/* 2. Horizontal Image Strip with CSS Transition */}
      <div
        style={{ transform: `translateX(-${current * 100}%)` }}
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
      >
        {safeImages.map((img, idx) => (
          <div key={idx} className="w-full shrink-0 h-full">
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="h-full w-full object-cover object-center pointer-events-none"
            />
          </div>
        ))}
      </div>

      {/* 3. Floating Glassmorphism Thumbnail Dock */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 h-16 max-w-[90%] px-2 gap-2 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl hidden sm:flex items-center overflow-x-auto shadow-2xl transition-all duration-300 z-20 ${
          isHovered ? "bottom-6 opacity-100" : "bottom-2 opacity-0 pointer-events-none"
        }`}
      >
        {safeImages.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleThumbnailClick(idx);
            }}
            className={`h-12 w-12 shrink-0 rounded-lg overflow-hidden transition-all duration-200 cursor-pointer ${
              current === idx
                ? "ring-2 ring-amber-600 scale-105 shadow-md"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <img src={img} alt={`Thumb ${idx + 1}`} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>

      {/* 4. Slide Counter Pill */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none bg-black/60 text-white px-3 py-0.5 rounded-full text-xs font-medium tracking-wider backdrop-blur-sm z-10">
        {current + 1} / {safeImages.length}
      </div>

      {/* Optional Badge */}
      {badge && (
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <span className="badge-925 text-[10px]">
            {badge}
          </span>
        </div>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [zoomState, setZoomState] = useState({ isZoomed: false, position: { x: 50, y: 50 }, image: null });
  const [isDescExpanded, setIsDescExpanded] = useState(false);
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
    <main className="relative min-h-screen bg-bg-secondary px-6 pt-8 pb-20">
      {/* Fixed Desktop Zoom Preview Portal */}
      {zoomState.isZoomed && (
        <ZoomedImage position={zoomState.position} img={zoomState.image} />
      )}

      <div className="max-w-[1280px] mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm">
          <Link to="/" className="text-text-secondary no-underline hover:text-text-primary transition">Home</Link>
          <span className="text-border-light">/</span>
          <Link to="/shop" className="text-text-secondary no-underline hover:text-text-primary transition">Shop</Link>
          <span className="text-border-light">/</span>
          <Link to={`/category/${product.category}`} className="text-text-secondary no-underline hover:text-text-primary transition">
            {product.categoryName}
          </Link>
          <span className="text-border-light">/</span>
          <span className="text-text-primary font-semibold">{product.name}</span>
        </div>

        {/* Main Product Showcase Card */}
        <div className="bg-bg-card rounded-2xl border border-border-light p-6 md:p-10 shadow-sm mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            
            {/* Left: Gallery Showcase */}
            <div className="md:col-span-6">
              <ProductGallery
                images={galleryImages}
                badge={product.badge || '925 CERTIFIED'}
                onZoomChange={setZoomState}
              />
            </div>

            {/* Right: Product Details & Purchase Form */}
            <div className="md:col-span-6">
              
              {/* Category & Rating */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[0.8rem] tracking-[2px] text-gold uppercase font-semibold">
                  {product.categoryName} • {product.metalName}
                </span>
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-gold fill-gold" />
                  <span className="text-sm font-semibold text-text-primary">
                    {product.rating} ({product.reviews} verified reviews)
                  </span>
                </div>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary mb-4 leading-tight">
                {product.name}
              </h1>

              {/* Pricing Block */}
              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-2xl md:text-3xl font-bold text-text-primary">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold px-2 py-0.5 rounded">
                  SAVE {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              </div>

              <p className="text-text-secondary text-sm mb-6">
                Inclusive of all taxes. Free insured armored delivery across India.
              </p>

              {/* Expandable / Collapsible Description */}
              <div className="mb-8 border-y border-border-light py-5">
                <p className={`text-text-secondary text-[0.95rem] leading-relaxed m-0 ${!isDescExpanded ? 'line-clamp-3' : ''}`}>
                  {product.description}
                </p>
                {product.description && product.description.length > 100 && (
                  <button
                    type="button"
                    onClick={() => setIsDescExpanded(!isDescExpanded)}
                    className="mt-2 bg-transparent border-none p-0 text-gold font-semibold text-sm cursor-pointer inline-flex items-center gap-1 hover:underline"
                  >
                    {isDescExpanded ? 'Show less' : 'Show more'}
                  </button>
                )}
              </div>

              {/* Size Selector if Ring or Bracelet */}
              {(product.category === 'rings' || product.category === 'bracelets') && (
                <div className="mb-7">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-text-primary">
                      Select Size (Indian Standard)
                    </span>
                    <Link
                      to="/size-guide"
                      className="flex items-center gap-1 text-[0.8rem] text-gold no-underline font-medium hover:underline"
                    >
                      <Ruler size={13} /> Size Guide
                    </Link>
                  </div>
                  <div className="flex gap-2">
                    {['12', '14', '16', '18', '20'].map(sz => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setSelectedSize(sz)}
                        className={`w-[42px] h-[42px] rounded-md cursor-pointer transition flex items-center justify-center ${
                          selectedSize === sz 
                            ? 'border-2 border-text-primary bg-champagne font-bold text-text-primary' 
                            : 'border border-border-light bg-bg-card-warm font-normal text-text-primary hover:border-text-primary'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Stepper & CTAs */}
              <div className="flex gap-4 items-center mb-6 flex-wrap">
                <div className="flex items-center border border-border-light rounded-md bg-bg-card-warm">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 bg-transparent border-none text-base cursor-pointer text-text-primary hover:text-gold transition"
                  >
                    −
                  </button>
                  <span className="px-2 font-semibold text-[0.95rem] text-text-primary">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 bg-transparent border-none text-base cursor-pointer text-text-primary hover:text-gold transition"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="btn-gold flex-1 min-w-[160px] py-3.5 px-6 rounded-md font-semibold text-[0.95rem] cursor-pointer text-center"
                >
                  Add to Cart
                </button>

                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="btn-slate flex-1 min-w-[160px] py-3.5 px-6 rounded-md font-semibold text-[0.95rem] cursor-pointer text-center"
                >
                  Buy Now Instantly
                </button>

                <button
                  type="button"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  aria-label="Wishlist"
                  className="w-12 h-12 rounded-md border border-border-light bg-bg-card-warm flex items-center justify-center cursor-pointer hover:border-text-primary transition"
                >
                  <Heart
                    size={20}
                    className={`transition-colors ${isWishlisted ? 'text-red-500 fill-red-500' : 'text-text-primary fill-none'}`}
                  />
                </button>
              </div>

              {addedNotice && (
                <div className="bg-champagne border border-border-light px-4 py-3 rounded-md text-text-primary text-sm flex items-center justify-between mb-6">
                  <span>✓ Added to your jewellery bag successfully!</span>
                  <Link to="/cart" className="text-gold font-semibold no-underline hover:underline">
                    View Bag & Checkout →
                  </Link>
                </div>
              )}

              {/* Purity & Specifications Table */}
              <div className="bg-bg-card-warm rounded-lg p-5 border border-border-light mb-8">
                <h4 className="font-serif text-base mb-3 text-text-primary font-semibold">
                  Patron Guarantee & Specifications
                </h4>
                <div className="grid grid-cols-2 gap-3 text-[0.82rem]">
                  <div>
                    <span className="text-text-secondary">Precious Metal: </span>
                    <strong className="text-text-primary">{product.metalName}</strong>
                  </div>
                  <div>
                    <span className="text-text-secondary">Hallmark Stamp: </span>
                    <strong className="text-text-primary">BIS 925 Hallmark</strong>
                  </div>
                  <div>
                    <span className="text-text-secondary">Gemstone: </span>
                    <strong className="text-text-primary">{product.stoneName || '5A Zircon'}</strong>
                  </div>
                  <div>
                    <span className="text-text-secondary">Gross Weight: </span>
                    <strong className="text-text-primary">{product.weight || '12.4 gms'}</strong>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-champagne-light rounded-md border border-border-light">
                  <Truck size={20} className="text-gold mx-auto mb-1.5" />
                  <div className="text-xs font-semibold text-text-primary">Armored Logistics</div>
                  <div className="text-[0.7rem] text-text-secondary">100% Insured Delivery</div>
                </div>
                <div className="p-3 bg-champagne-light rounded-md border border-border-light">
                  <RotateCcw size={20} className="text-gold mx-auto mb-1.5" />
                  <div className="text-xs font-semibold text-text-primary">15-Day Returns</div>
                  <div className="text-[0.7rem] text-text-secondary">Doorstep Pickup</div>
                </div>
                <div className="p-3 bg-champagne-light rounded-md border border-border-light">
                  <Sparkles size={20} className="text-gold mx-auto mb-1.5" />
                  <div className="text-xs font-semibold text-text-primary">Lifetime Spa</div>
                  <div className="text-[0.7rem] text-text-secondary">Complimentary Polish</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* You May Also Admire */}
        <div className="mt-12">
          <div className="text-center mb-10">
            <div className="divider-ornament mb-2">
              <span className="badge-925 text-[9px] tracking-[2px]">
                MATCHING CREATIONS
              </span>
            </div>
            <h2 className="font-serif text-3xl font-semibold text-text-primary m-0">
              You May Also Admire
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id}
                to={`/product/${rel.slug}`}
                className="bg-bg-card rounded-lg overflow-hidden border border-border-light shadow-sm hover:-translate-y-1 transition-transform duration-300 no-underline text-inherit block"
              >
                <div className="h-[220px] bg-bg-circle overflow-hidden">
                  <img src={rel.image} alt={rel.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-[0.95rem] font-semibold text-text-primary mb-1.5 truncate">
                    {rel.name}
                  </h3>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-base font-bold text-text-primary">
                      ₹{rel.price.toLocaleString('en-IN')}
                    </span>
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