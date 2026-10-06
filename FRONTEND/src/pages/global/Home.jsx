import { useState, useEffect, useRef, useCallback } from 'react';
import { Star, Heart, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, X, ShoppingBag, Sparkles, Truck, RotateCcw, Shield, Award, Gift, Gem, Quote, Camera } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Banner images
import b1 from '../../assets/banners/b1.webp';
import b2 from '../../assets/banners/b2.webp';
import b3 from '../../assets/banners/b3.webp';
import b4 from '../../assets/banners/b4.webp';

// Reel video assets
import braceletsReel from '../../assets/reels/Bracelets.mp4';
import ankletReel from '../../assets/reels/anklet.mp4';
import ringReel from '../../assets/reels/ring.mp4';

// Instagram icon (lucide-react does not bundle brand icons)
const Instagram = ({ size = 16, className = '', style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// ────────────── REELS DATA ──────────────
const reelsData = [
  {
    id: 1,
    title: 'Silver Charm Bracelet',
    subtitle: '925 Sterling Silver',
    tag: 'TRENDING',
    price: '₹3,499',
    originalPrice: '₹4,999',
    video: braceletsReel,
    link: '/bracelets',
  },
  {
    id: 2,
    title: 'Graceful Silver Anklet',
    subtitle: 'Handcrafted Payal',
    tag: 'BESTSELLER',
    price: '₹2,499',
    originalPrice: '₹3,499',
    video: ankletReel,
    link: '/anklets',
  },
  {
    id: 3,
    title: 'Solitaire Sparkle Ring',
    subtitle: 'Cubic Zirconia Solitaire',
    tag: '925 SILVER',
    price: '₹4,199',
    originalPrice: '₹5,999',
    video: ringReel,
    link: '/rings',
  },
  {
    id: 4,
    title: 'Elegance Tennis Bracelet',
    subtitle: 'Fine Crystal Setting',
    tag: 'NEW ARRIVAL',
    price: '₹3,999',
    originalPrice: '₹5,499',
    video: braceletsReel,
    link: '/bracelets',
  },
  {
    id: 5,
    title: 'Royal Ghungroo Payal',
    subtitle: 'Traditional Festive Payal',
    tag: 'HOT PICK',
    price: '₹2,899',
    originalPrice: '₹3,999',
    video: ankletReel,
    link: '/anklets',
  },
  {
    id: 6,
    title: 'Crown Solitaire Band',
    subtitle: 'Signature Bridal Ring',
    tag: 'EXCLUSIVE',
    price: '₹4,799',
    originalPrice: '₹6,499',
    video: ringReel,
    link: '/rings',
  },
];

// ────────────── REEL CARD COMPONENT ──────────────
function ReelCard({ reel, onOpenModal }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = (e) => {
    e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
  };

  return (
    <div
      onClick={onOpenModal}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="reel-card-item rounded-[10px] overflow-hidden relative cursor-pointer transition-all duration-300"
      style={{
        backgroundColor: '#1C140E',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Video element */}
      <video
        ref={videoRef}
        src={reel.video}
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover block transition-transform duration-500"
        style={{
          transform: isPlaying ? 'scale(1.05)' : 'scale(1)',
        }}
      />

      {/* Top badges & sound control */}
      <div className="absolute top-[0.65rem] left-[0.65rem] right-[0.65rem] flex justify-between items-center z-[3]">
        <span className="bg-[#1C140E]/[0.78] backdrop-blur-[6px] text-[#FEF0E0] text-[0.625rem] font-bold tracking-[1px] py-[3px] px-2 rounded border border-[#C5914A]/45 uppercase">
          {reel.tag}
        </span>

        <button
          type="button"
          onClick={handleToggleMute}
          aria-label={isMuted ? 'Unmute preview' : 'Mute preview'}
          className="w-7 h-7 rounded-full bg-[#1C140E]/[0.78] backdrop-blur-[6px] border border-[#FEF0E0]/30 flex items-center justify-center text-[#FEF0E0] cursor-pointer p-0 transition-all duration-200 hover:scale-110 hover:bg-[#C5914A]/90"
        >
          {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
        </button>
      </div>

      {/* Play Icon Overlay (subtly fades when playing) */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 pointer-events-none z-[2] ${
          isPlaying ? 'bg-transparent opacity-0' : 'bg-[#1C140E]/25 opacity-100'
        }`}
      >
        <div className="w-[46px] h-[46px] rounded-full bg-[#1C140E]/75 backdrop-blur-[6px] flex items-center justify-center border border-[#FEF0E0]/40 shadow-[0_4px_12px_rgba(28,20,14,0.25)]">
          <Play size={18} fill="#FEF0E0" className="text-[#FEF0E0] ml-0.5" />
        </div>
      </div>

      {/* Bottom info label */}
      <div
        className="absolute bottom-0 left-0 right-0 pt-5 pb-3 px-3 z-[3] pointer-events-none text-left"
        style={{
          background: 'linear-gradient(to top, rgba(28, 20, 14, 0.92) 0%, rgba(28, 20, 14, 0.6) 65%, transparent 100%)',
        }}
      >
        <p className="text-[#FFF9F2] text-[0.8rem] font-semibold m-0 mb-1 truncate">
          {reel.title}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-[#FEF0E0] text-[0.8rem] font-bold">
              {reel.price}
            </span>
            {reel.originalPrice && (
              <span className="text-[#FEF0E0]/55 text-[0.675rem] line-through">
                {reel.originalPrice}
              </span>
            )}
          </div>
          <span className="text-[#C5914A] text-[0.65rem] font-semibold flex items-center gap-[3px] uppercase tracking-[0.5px]">
            <Sparkles size={11} /> Watch
          </span>
        </div>
      </div>
    </div>
  );
}

// ────────────── REEL FULLSCREEN LIGHTBOX MODAL ──────────────
function ReelModal({ reels, activeIndex, onClose, onNavigate }) {
  const currentReel = reels[activeIndex];
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
              videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
            }
          });
      }
    }
  }, [activeIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((activeIndex - 1 + reels.length) % reels.length);
      if (e.key === 'ArrowRight') onNavigate((activeIndex + 1) % reels.length);
      if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, reels.length, onClose, onNavigate]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  if (!currentReel) return null;

  return (
    <div
      className="fixed inset-0 bg-[#0F0A07]/[0.88] backdrop-blur-md z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Modal Dialog */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[410px] h-[min(86vh,680px)] rounded-2xl overflow-hidden bg-[#1C140E] shadow-[0_24px_60px_rgba(0,0,0,0.65),0_0_0_1px_rgba(197,145,74,0.35)] flex flex-col"
      >
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FEF0E0]/25 z-10">
          <div
            className="h-full bg-[#C5914A] transition-[width] duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Top Controls */}
        <div className="absolute top-[0.85rem] left-[0.85rem] right-[0.85rem] flex items-center justify-between z-10">
          <span className="bg-[#1C140E]/[0.78] backdrop-blur-[6px] text-[#FEF0E0] text-[0.7rem] font-bold tracking-[1px] py-1 px-2.5 rounded-md border border-[#C5914A]/45">
            {currentReel.tag}
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              className="w-[34px] h-[34px] rounded-full bg-[#1C140E]/[0.78] backdrop-blur-[6px] border border-[#FEF0E0]/[0.35] flex items-center justify-center text-[#FEF0E0] cursor-pointer"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="w-[34px] h-[34px] rounded-full bg-[#1C140E]/[0.78] backdrop-blur-[6px] border border-[#FEF0E0]/[0.35] flex items-center justify-center text-[#FEF0E0] cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Video Area */}
        <div
          onClick={togglePlay}
          className="relative flex-1 cursor-pointer overflow-hidden"
        >
          <video
            ref={videoRef}
            src={currentReel.video}
            loop
            playsInline
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full object-cover block"
          />

          {/* Pause overlay button */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#1C140E]/35">
              <div className="w-14 h-14 rounded-full bg-[#1C140E]/85 backdrop-blur-[6px] flex items-center justify-center border border-[#FEF0E0]/40">
                <Play size={24} fill="#FEF0E0" className="text-[#FEF0E0] ml-1" />
              </div>
            </div>
          )}
        </div>

        {/* Bottom Product Action Bar */}
        <div
          className="p-4 px-[1.15rem] pb-[1.15rem] border-t border-[#C5914A]/25 flex items-center justify-between gap-4 z-10"
          style={{
            background: 'linear-gradient(to top, rgba(28, 20, 14, 0.98) 0%, rgba(28, 20, 14, 0.88) 100%)',
          }}
        >
          <div className="min-w-0">
            <h4
              className="m-0 mb-0.5 text-[#FFF9F2] text-[0.975rem] font-semibold truncate"
              style={{
                fontFamily: 'var(--font-serif)',
              }}
            >
              {currentReel.title}
            </h4>
            <div className="flex items-center gap-2">
              <span className="text-[#C5914A] font-bold text-[0.95rem]">
                {currentReel.price}
              </span>
              {currentReel.originalPrice && (
                <span className="text-[#7A6C60] text-[0.75rem] line-through">
                  {currentReel.originalPrice}
                </span>
              )}
            </div>
          </div>

          <Link
            to={currentReel.link}
            onClick={onClose}
            className="btn-gold inline-flex items-center gap-1.5 py-[0.65rem] px-[1.15rem] rounded text-[0.75rem] font-semibold tracking-[1px] uppercase no-underline shrink-0 shadow-[0_4px_15px_rgba(197,145,74,0.35)]"
          >
            <ShoppingBag size={14} />
            Shop Now
          </Link>
        </div>

        {/* Left & Right nav buttons */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((activeIndex - 1 + reels.length) % reels.length);
          }}
          aria-label="Previous reel"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#1C140E]/75 backdrop-blur-[6px] border border-[#FEF0E0]/30 flex items-center justify-center text-[#FEF0E0] cursor-pointer z-10"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((activeIndex + 1) % reels.length);
          }}
          aria-label="Next reel"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#1C140E]/75 backdrop-blur-[6px] border border-[#FEF0E0]/30 flex items-center justify-center text-[#FEF0E0] cursor-pointer z-10"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [activeReelIndex, setActiveReelIndex] = useState(null);
  const earringRef = useRef(null);
  const necklaceRef = useRef(null);
  const ringRef = useRef(null);

  const navigate = useNavigate();

  // Prevent background scroll when reel modal is open
  useEffect(() => {
    if (activeReelIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeReelIndex]);

  const banners = [b1, b2, b3, b4];

  // Auto-slide banners
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  // Categories
  const categories = [
    { label: 'All', image: '/hero_model.jpg' },
    { label: 'Earrings', image: '/category_earrings.jpg' },
    { label: 'Necklace', image: '/category_necklace.jpg' },
    { label: 'Rings', image: '/category_ring.jpg' },
    { label: 'Bangles', image: '/category_bangle.jpg' },
    { label: 'Mangalsutra', image: '/category_mangalsutra.jpg' },
    { label: 'Bracelets', image: '/silver_bracelet.jpg' },
    { label: 'Sets', image: '/showcase_necklace.jpg' },
  ];

  // Product data
  const earrings = [
    { id: 1, name: 'Kundan Jhumka Earrings', price: '₹4,999', originalPrice: '₹6,999', rating: 4.5, reviews: 128, badge: 'BESTSELLER', image: '/category_earrings.jpg' },
    { id: 2, name: 'Pearl Drop Danglers', price: '₹3,499', originalPrice: '₹4,999', rating: 4.8, reviews: 95, badge: 'NEW', image: '/silver_earrings.jpg' },
    { id: 3, name: 'Gold Plated Studs', price: '₹5,999', originalPrice: '₹7,999', rating: 4.6, reviews: 156, image: '/category_earrings.jpg' },
    { id: 4, name: 'Emerald Chandbali', price: '₹6,499', originalPrice: '₹8,999', rating: 4.7, reviews: 87, badge: '925 SILVER', image: '/silver_earrings.jpg' },
    { id: 5, name: 'Diamond Jhumka Set', price: '₹7,999', originalPrice: '₹10,999', rating: 4.9, reviews: 203, image: '/category_earrings.jpg' },
    { id: 6, name: 'Ruby Polki Danglers', price: '₹5,499', originalPrice: '₹7,499', rating: 4.5, reviews: 112, badge: 'TRENDING', image: '/silver_earrings.jpg' },
  ];

  const necklaces = [
    { id: 1, name: 'Bridal Temple Necklace', price: '₹12,999', originalPrice: '₹16,999', rating: 4.8, reviews: 234, badge: 'BRIDAL', image: '/category_necklace.jpg' },
    { id: 2, name: 'Kundan Choker Set', price: '₹8,999', originalPrice: '₹11,999', rating: 4.7, reviews: 156, image: '/silver_necklace.jpg' },
    { id: 3, name: 'Layered Gold Chain', price: '₹6,499', originalPrice: '₹8,499', rating: 4.5, reviews: 98, badge: 'NEW', image: '/showcase_necklace.jpg' },
    { id: 4, name: 'Pearl Pendant Set', price: '₹9,999', originalPrice: '₹12,999', rating: 4.6, reviews: 145, image: '/category_mangalsutra.jpg' },
    { id: 5, name: 'Polki Statement Piece', price: '₹11,999', originalPrice: '₹15,999', rating: 4.9, reviews: 267, badge: 'BESTSELLER', image: '/category_necklace.jpg' },
    { id: 6, name: 'Mangalsutra Premium', price: '₹7,999', originalPrice: '₹9,999', rating: 4.8, reviews: 189, image: '/silver_necklace.jpg' },
  ];

  const rings = [
    { id: 1, name: 'Solitaire Silver Ring', price: '₹15,999', originalPrice: '₹19,999', rating: 4.9, reviews: 356, badge: '925 SILVER', image: '/silver_ring.jpg' },
    { id: 2, name: 'Cluster Kundan Ring', price: '₹9,999', originalPrice: '₹12,999', rating: 4.7, reviews: 201, image: '/category_ring.jpg' },
    { id: 3, name: 'Statement Emerald Ring', price: '₹8,499', originalPrice: '₹10,999', rating: 4.6, reviews: 134, badge: 'TRENDING', image: '/silver_ring.jpg' },
    { id: 4, name: 'Wedding Band Gold', price: '₹12,999', originalPrice: '₹16,999', rating: 4.8, reviews: 289, image: '/category_ring.jpg' },
    { id: 5, name: 'Emerald Cocktail Ring', price: '₹10,499', originalPrice: '₹13,999', rating: 4.7, reviews: 167, badge: 'NEW', image: '/silver_ring.jpg' },
    { id: 6, name: 'Diamond Cluster Ring', price: '₹18,999', originalPrice: '₹24,999', rating: 4.9, reviews: 412, badge: 'BESTSELLER', image: '/category_ring.jpg' },
  ];

  const reviews = [
    { name: 'Priya Sharma', location: 'Mumbai', rating: 5, text: 'Absolutely stunning pieces! The quality is exceptional and the craftsmanship is beyond what I expected. My bridal set was the highlight of my wedding.', avatar: 'PS' },
    { name: 'Anjali Patel', location: 'Delhi', rating: 5, text: 'Perfect for my wedding. Customer service was amazing and they helped me pick the perfect matching set. Will definitely order again!', avatar: 'AP' },
    { name: 'Deepa Gupta', location: 'Bangalore', rating: 5, text: 'Beautiful designs and fast delivery. The packaging was luxurious and made it feel so special. Every piece I\'ve bought has been gorgeous.', avatar: 'DG' },
    { name: 'Neha Singh', location: 'Jaipur', rating: 5, text: 'Best jewelry collection I have seen online. The 925 silver quality is authentic and the designs are so unique. Highly recommend to everyone!', avatar: 'NS' },
  ];

  const trustFeatures = [
    { icon: Truck, label: 'Free Shipping', desc: 'On orders above ₹999' },
    { icon: RotateCcw, label: 'Easy Returns', desc: '7 Day return policy' },
    { icon: Shield, label: 'Secure Payment', desc: '100% Secure checkout' },
    { icon: Award, label: 'Certified', desc: '925 Silver guarantee' },
    { icon: Gift, label: 'Gift Wrapping', desc: 'Premium packaging' },
    { icon: Gem, label: 'Authentic', desc: 'Quality assured' },
  ];

  // Scroll handler for product carousels
  const handleScroll = useCallback((ref, direction) => {
    if (ref.current) {
      const scrollAmount = 280;
      ref.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  }, []);

  // ────────────── PRODUCT CARD ──────────────
  const ProductCard = ({ product }) => (
    <div
      onClick={() => navigate("/product/" + product.name)}
      className="min-w-[220px] max-w-[220px] rounded-md overflow-hidden cursor-pointer shrink-0 transition-all duration-300 hover:-translate-y-1.5"
      style={{
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-sm)',
        backgroundColor: 'var(--bg-card)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.transform = 'scale(1.06)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.transform = 'scale(1)';
      }}
    >
      {/* Image Area */}
      <div
        className="w-full h-[200px] flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundColor: 'var(--bg-circle-item)',
          background: 'linear-gradient(135deg, #FFF9F2 0%, #F7E5D0 100%)',
        }}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover block transition-transform duration-400"
          />
        ) : (
          /* Decorative pattern */
          <div className="w-20 h-20 rounded-full border-2 border-[#C5914A]/20 flex items-center justify-center">
            <Gem size={28} className="text-[#C5914A] opacity-45" />
          </div>
        )}

        {/* Wishlist */}
        <button
          aria-label="Add to wishlist"
          className="product-wishlist-btn absolute top-2.5 right-2.5 border-0 rounded-full w-[34px] h-[34px] flex items-center justify-center cursor-pointer opacity-0 transition-all duration-200"
          style={{
            background: 'var(--bg-card)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <Heart size={16} className="text-red-500" />
        </button>

        {/* Badge */}
        {product.badge && (
          <span className="badge-925 absolute top-2.5 left-2.5 text-[9px] py-[3px] px-2">
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="py-3.5 px-4">
        <h3
          className="text-[0.8rem] font-semibold m-0 mb-1.5 truncate"
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'var(--text-primary)',
          }}
        >
          {product.name}
        </h3>

        <div className="flex items-center gap-2 m-0 mb-1.5">
          <span
            className="text-base font-bold"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-[0.75rem] line-through" style={{ color: 'var(--text-secondary)' }}>
              {product.originalPrice}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex gap-px">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                fill={i < Math.floor(product.rating) ? '#C5914A' : 'none'}
                style={{ color: i < Math.floor(product.rating) ? '#C5914A' : '#D8BF9F' }}
              />
            ))}
          </div>
          <span className="text-[0.7rem]" style={{ color: 'var(--text-secondary)' }}>
            ({product.reviews})
          </span>
        </div>

        <button className="btn-slate w-full py-[0.55rem] rounded-sm text-[0.7rem] tracking-[1.2px] uppercase cursor-pointer font-semibold">
          Add to Cart
        </button>
      </div>
    </div>
  );

  // ────────────── SECTION HEADER ──────────────
  const SectionHeader = ({ title, subtitle, onScrollLeft, onScrollRight, showArrows = true }) => (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2
          className="font-serif text-[1.75rem] font-bold m-0 tracking-[1px]"
          style={{
            color: 'var(--text-primary)',
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className="text-base m-0 mt-1"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-garamond)',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
      {showArrows && (
        <div className="flex gap-2">
          <button
            onClick={onScrollLeft}
            className="w-[38px] h-[38px] rounded-full cursor-pointer flex items-center justify-center transition-all duration-200"
            style={{
              border: '1px solid var(--border-light)',
              background: 'var(--bg-card)',
              color: 'var(--text-primary)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--bg-primary)';
              e.currentTarget.style.color = 'var(--text-light)';
              e.currentTarget.style.borderColor = 'var(--bg-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--bg-card)';
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.borderColor = 'var(--border-light)';
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={onScrollRight}
            className="w-[38px] h-[38px] rounded-full cursor-pointer flex items-center justify-center transition-all duration-200"
            style={{
              border: '1px solid var(--border-light)',
              background: 'var(--bg-card)',
              color: 'var(--text-primary)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--bg-primary)';
              e.currentTarget.style.color = 'var(--text-light)';
              e.currentTarget.style.borderColor = 'var(--bg-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--bg-card)';
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.borderColor = 'var(--border-light)';
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* ═══════════════ HERO BANNER SLIDER ═══════════════ */}
      <section id="hero-banner" className="relative w-full overflow-hidden">
        {/* Banner Slides */}
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            transform: `translateX(-${currentBanner * 100}%)`,
          }}
        >
          {banners.map((banner, idx) => (
            <div key={idx} className="min-w-full relative">
              <img
                src={banner}
                alt={`Banner ${idx + 1}`}
                className="w-full h-auto block max-h-[580px] object-cover"
              />
            </div>
          ))}
        </div>

        {/* Banner Navigation Arrows */}
        <button
          onClick={() => setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)}
          className="absolute left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 backdrop-blur-[10px] border border-white/25 cursor-pointer flex items-center justify-center text-white transition-all duration-300 hover:bg-white/30 z-[3]"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => setCurrentBanner((prev) => (prev + 1) % banners.length)}
          className="absolute right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 backdrop-blur-[10px] border border-white/25 cursor-pointer flex items-center justify-center text-white transition-all duration-300 hover:bg-white/30 z-[3]"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-[3]">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentBanner(idx)}
              className="h-2.5 rounded-[5px] border-0 cursor-pointer transition-all duration-350"
              style={{
                width: currentBanner === idx ? '28px' : '10px',
                background: currentBanner === idx ? '#fff' : 'rgba(255,255,255,0.45)',
              }}
            />
          ))}
        </div>
      </section>

      {/* ═══════════════ CATEGORY CIRCLES ═══════════════ */}
      <section className="max-w-[1280px] mx-auto py-10 px-6 pb-6">
        <div className="text-center mb-10">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">COLLECTIONS</span>
          </div>
          <h1
            className="font-serif font-semibold mb-1.5 tracking-[1px]"
            style={{
              fontSize: 'clamp(1.85rem, 3.5vw, 2.35rem)',
              color: 'var(--text-primary)',
            }}
          >
            Shop By Category
          </h1>
          <p
            className="font-garamond text-[1.05rem] m-0"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            Explore handcrafted pieces crafted for every celebration
          </p>
        </div>
        <div className="flex gap-6 justify-center flex-wrap">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`flex flex-col items-center gap-2 cursor-pointer bg-transparent border-0 p-1 transition-transform duration-250 ${
                activeCategory === idx ? 'scale-108' : 'scale-100'
              }`}
            >
              <div
                className={`w-[120px] h-[120px] rounded-full p-[3px] flex items-center justify-center transition-all duration-300 ${
                  activeCategory === idx ? 'border-2' : 'border-[1.5px]'
                }`}
                style={{
                  borderColor: activeCategory === idx ? 'var(--text-primary)' : 'var(--border-light)',
                  boxShadow: activeCategory === idx ? '0 0 0 3px rgba(197, 145, 74, 0.25), var(--shadow-md)' : 'none',
                  backgroundColor: 'var(--bg-card)',
                }}
              >
                <div
                  className="w-full h-full rounded-full overflow-hidden"
                  style={{
                    backgroundColor: 'var(--bg-circle-item)',
                  }}
                >
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover block transition-transform duration-300"
                  />
                </div>
              </div>
              <span
                className={`text-[0.7rem] uppercase tracking-[0.5px] transition-colors duration-200 ${
                  activeCategory === idx ? 'font-semibold' : 'font-normal'
                }`}
                style={{
                  color: activeCategory === idx ? 'var(--text-primary)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {cat.label}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ═══════════════ EARRINGS SECTION ═══════════════ */}
      <section className="max-w-[1280px] mx-auto py-8 px-6 pb-12">
        <SectionHeader
          title="Earrings"
          subtitle="Handcrafted pieces to frame your beauty"
          onScrollLeft={() => handleScroll(earringRef, 'left')}
          onScrollRight={() => handleScroll(earringRef, 'right')}
        />

        <div
          ref={earringRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {earrings.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            to="/earrings"
            className="btn-outline-dark py-[0.7rem] px-10 rounded-sm text-[0.75rem] tracking-[1.5px] uppercase no-underline inline-block font-semibold"
          >
            View All Earrings
          </Link>
        </div>
      </section>

      {/* ═══════════════ WATCH AND BUY ═══════════════ */}
      <section
        className="bg-white py-14"
        style={{
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">FEATURED</span>
          </div>
          <h2
            className="font-serif text-[2rem] font-semibold mb-1.5 tracking-[1px]"
            style={{
              color: 'var(--text-primary)',
            }}
          >
            Watch and Buy
          </h2>
          <p
            className="font-garamond text-[1.05rem] mb-10"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            See our collections in action — styled, worn, and loved
          </p>

          {/* Video reels grid */}
          <div className="reels-grid">
            {reelsData.map((reel, index) => (
              <ReelCard
                key={reel.id}
                reel={reel}
                onOpenModal={() => setActiveReelIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TIMELESS GRACE BANNER ═══════════════ */}
      <section className="w-full">
        <img
          src={b2}
          alt="Timeless Grace — Jewellery that celebrates every you"
          className="w-full h-auto block max-h-[480px] object-cover"
        />
      </section>

      {/* ═══════════════ NECKLACES SECTION ═══════════════ */}
      <section className="max-w-[1280px] mx-auto py-12 px-6">
        <SectionHeader
          title="Necklaces"
          subtitle="Statement pieces for every occasion"
          onScrollLeft={() => handleScroll(necklaceRef, 'left')}
          onScrollRight={() => handleScroll(necklaceRef, 'right')}
        />

        <div
          ref={necklaceRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {necklaces.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            to="/necklaces"
            className="btn-outline-dark py-[0.7rem] px-10 rounded-sm text-[0.75rem] tracking-[1.5px] uppercase no-underline inline-block font-semibold"
          >
            View All Necklaces
          </Link>
        </div>
      </section>

      {/* ═══════════════ TIMELESS RINGS BANNER ═══════════════ */}
      <section className="w-full">
        <img
          src={b3}
          alt="Timeless Rings — Elegance in every detail"
          className="w-full h-auto block max-h-[480px] object-cover"
        />
      </section>

      {/* ═══════════════ RINGS SECTION ═══════════════ */}
      <section className="max-w-[1280px] mx-auto py-12 px-6">
        <SectionHeader
          title="Rings"
          subtitle="Elegance adorning every finger"
          onScrollLeft={() => handleScroll(ringRef, 'left')}
          onScrollRight={() => handleScroll(ringRef, 'right')}
        />

        <div
          ref={ringRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {rings.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            to="/rings"
            className="btn-outline-dark py-[0.7rem] px-10 rounded-sm text-[0.75rem] tracking-[1.5px] uppercase no-underline inline-block font-semibold"
          >
            View All Rings
          </Link>
        </div>
      </section>

      {/* ═══════════════ ABOUT US BANNER ═══════════════ */}
      <section className="w-full">
        <img
          src={b4}
          alt="About Us — Where Elegance Meets Everyday Style"
          className="w-full h-auto block max-h-[480px] object-cover"
        />
      </section>

      {/* ═══════════════ TRUST FEATURES ═══════════════ */}
      <section
        className="py-10"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="text-center py-5 px-2 rounded transition-all duration-300 cursor-default hover:-translate-y-1"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{
                    background: 'linear-gradient(135deg, #1C140E 0%, #2F2117 100%)',
                  }}
                >
                  <feature.icon size={20} className="text-[#FEF0E0]" />
                </div>
                <h4
                  className="text-[0.8rem] font-semibold mb-1 uppercase tracking-[0.5px]"
                  style={{
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {feature.label}
                </h4>
                <p
                  className="text-[0.75rem] m-0"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CUSTOMER REVIEWS ═══════════════ */}
      <section className="max-w-[1280px] mx-auto py-16 px-6">
        <div className="text-center mb-10">
          <div className="divider-ornament mb-3">
            <span className="text-[1.2rem]" style={{ color: 'var(--text-secondary)' }}>✦</span>
          </div>
          <h2
            className="font-serif text-[2rem] font-bold mb-1 tracking-[1px]"
            style={{
              color: 'var(--text-primary)',
            }}
          >
            What Our Customers Say
          </h2>
          <p
            className="font-garamond text-[1.05rem] m-0"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            Real stories from our valued patrons
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="rounded-md p-7 px-6 transition-all duration-300 relative hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
              }}
            >
              {/* Quote icon */}
              <Quote
                size={28}
                className="rotate-180 mb-3"
                style={{
                  color: 'var(--border-light)',
                }}
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < review.rating ? '#C5914A' : 'none'}
                    style={{ color: i < review.rating ? '#C5914A' : '#D8BF9F' }}
                  />
                ))}
              </div>

              <p
                className="text-[0.85rem] leading-[1.7] mb-5"
                style={{
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {review.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[0.75rem] font-bold text-[#FEF0E0] tracking-[1px]"
                  style={{
                    background: 'linear-gradient(135deg, #1C140E 0%, #2F2117 100%)',
                  }}
                >
                  {review.avatar}
                </div>
                <div>
                  <p
                    className="text-[0.825rem] font-semibold m-0"
                    style={{
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {review.name}
                  </p>
                  <p
                    className="text-[0.7rem] mt-0.5 m-0"
                    style={{
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ FOLLOW US ON INSTAGRAM ═══════════════ */}
      <section
        className="bg-white py-14"
        style={{
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <div className="divider-ornament mb-3">
            <Camera size={18} className="text-[#C5914A]" />
          </div>
          <h2
            className="font-serif text-[1.75rem] font-semibold mb-1.5 tracking-[1px]"
            style={{
              color: 'var(--text-primary)',
            }}
          >
            Follow Us on Instagram
          </h2>
          <p
            className="font-garamond text-base mb-8"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            @jewerkart — Join our community of jewelry lovers
          </p>

          {/* Instagram Grid */}
          <div className="insta-grid">
            {[
              { id: 1, image: '/hero_model.jpg', alt: 'Model styling bridal necklace and earrings' },
              { id: 2, image: '/silver_earrings.jpg', alt: 'Pure 925 sterling silver earrings' },
              { id: 3, image: '/showcase_necklace.jpg', alt: 'Royal heritage choker necklace' },
              { id: 4, image: '/category_ring.jpg', alt: 'Handcrafted solitaire gemstone rings' },
              { id: 5, image: '/silver_bracelet.jpg', alt: 'Fine silver designer bracelet' },
              { id: 6, image: '/silver_hero_model.jpg', alt: 'Fine jewelry editorial look' },
            ].map((item) => (
              <a
                key={item.id}
                href="https://instagram.com/jewerkart"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square rounded-md overflow-hidden relative bg-[#FFF9F2] cursor-pointer block transition-all duration-300 no-underline hover:scale-105 hover:shadow-[0_8px_24px_rgba(197,145,74,0.25)]"
                style={{
                  border: '1px solid var(--border-light)',
                }}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.08)';
                  const overlay = e.currentTarget.querySelector('.insta-overlay');
                  if (overlay) overlay.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                  const overlay = e.currentTarget.querySelector('.insta-overlay');
                  if (overlay) overlay.style.opacity = '0';
                }}
              >
                {/* Real Image */}
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover block transition-transform duration-400"
                />

                {/* Hover overlay */}
                <div className="insta-overlay absolute inset-0 bg-[#1C140E]/65 backdrop-blur-[2px] flex flex-col items-center justify-center gap-1.5 opacity-0 transition-opacity duration-300">
                  <div className="w-[38px] h-[38px] rounded-full bg-[#FEF0E0]/95 flex items-center justify-center text-[#1C140E] shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                    <Instagram size={18} />
                  </div>
                  <span className="text-[#FEF0E0] text-[0.65rem] font-semibold tracking-[1px] uppercase">
                    View Post
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Follow button */}
          <a
            href="https://instagram.com/jewerkart"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 py-3 px-8 rounded-sm text-[0.75rem] tracking-[1.5px] uppercase no-underline mt-8 font-semibold"
          >
            <Instagram size={16} />
            Follow @jewerkart
          </a>
        </div>
      </section>

      {/* ═══════════════ REEL FULLSCREEN LIGHTBOX MODAL ═══════════════ */}
      {activeReelIndex !== null && (
        <ReelModal
          reels={reelsData}
          activeIndex={activeReelIndex}
          onClose={() => setActiveReelIndex(null)}
          onNavigate={(newIndex) => setActiveReelIndex(newIndex)}
        />
      )}

      {/* ═══════════════ INLINE STYLES ═══════════════ */}
      <style>{`
        /* Hide scrollbar for product carousels */
        div::-webkit-scrollbar {
          display: none;
        }

        /* Product card wishlist hover reveal */
        div:hover > .product-wishlist-btn {
          opacity: 1 !important;
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          #hero-banner img {
            max-height: 400px !important;
          }
        }

        @media (max-width: 768px) {
          #hero-banner img {
            max-height: 280px !important;
          }
        }

        /* Reels Grid Responsive */
        .reels-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 0.85rem;
        }
        @media (max-width: 1100px) {
          .reels-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.75rem;
          }
        }
        @media (max-width: 640px) {
          .reels-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.6rem;
          }
        }
        .reel-card-item {
          height: 320px;
        }
        .reel-card-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(197, 145, 74, 0.25) !important;
        }
        @media (max-width: 768px) {
          .reel-card-item {
            height: 270px;
          }
        }

        /* Instagram Grid Responsive */
        .insta-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 0.65rem;
        }
        @media (max-width: 900px) {
          .insta-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
          }
        }
        @media (max-width: 480px) {
          .insta-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
          }
        }
      `}</style>
    </>
  );
}