import { useState, useEffect, useRef, useCallback } from 'react';
import { Star, Heart, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, X, ShoppingBag, Sparkles, Truck, RotateCcw, Shield, Award, Gift, Gem, Quote, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      className="reel-card-item"
      style={{
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#1C140E',
        border: '1px solid var(--border-light)',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
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
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.5s ease',
          transform: isPlaying ? 'scale(1.05)' : 'scale(1)',
        }}
      />

      {/* Top badges & sound control */}
      <div
        style={{
          position: 'absolute',
          top: '0.65rem',
          left: '0.65rem',
          right: '0.65rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 3,
        }}
      >
        <span
          style={{
            background: 'rgba(28, 20, 14, 0.78)',
            backdropFilter: 'blur(6px)',
            color: '#FEF0E0',
            fontSize: '0.625rem',
            fontWeight: '700',
            letterSpacing: '1px',
            padding: '3px 8px',
            borderRadius: '4px',
            border: '1px solid rgba(197, 145, 74, 0.45)',
            textTransform: 'uppercase',
          }}
        >
          {reel.tag}
        </span>

        <button
          type="button"
          onClick={handleToggleMute}
          aria-label={isMuted ? 'Unmute preview' : 'Mute preview'}
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: 'rgba(28, 20, 14, 0.78)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(254, 240, 224, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FEF0E0',
            cursor: 'pointer',
            padding: 0,
            transition: 'transform 0.2s ease, background-color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.backgroundColor = 'rgba(197, 145, 74, 0.9)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = 'rgba(28, 20, 14, 0.78)';
          }}
        >
          {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
        </button>
      </div>

      {/* Play Icon Overlay (subtly fades when playing) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: isPlaying ? 'transparent' : 'rgba(28, 20, 14, 0.25)',
          transition: 'background 0.3s ease, opacity 0.3s ease',
          opacity: isPlaying ? 0 : 1,
          pointerEvents: 'none',
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'rgba(28, 20, 14, 0.75)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(254, 240, 224, 0.4)',
            boxShadow: '0 4px 12px rgba(28, 20, 14, 0.25)',
          }}
        >
          <Play size={18} fill="#FEF0E0" style={{ color: '#FEF0E0', marginLeft: '2px' }} />
        </div>
      </div>

      {/* Bottom info label */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '1.25rem 0.75rem 0.75rem',
          background: 'linear-gradient(to top, rgba(28, 20, 14, 0.92) 0%, rgba(28, 20, 14, 0.6) 65%, transparent 100%)',
          zIndex: 3,
          pointerEvents: 'none',
          textAlign: 'left',
        }}
      >
        <p
          style={{
            color: '#FFF9F2',
            fontSize: '0.8rem',
            fontWeight: '600',
            margin: '0 0 0.25rem',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {reel.title}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span style={{ color: '#FEF0E0', fontSize: '0.8rem', fontWeight: '700' }}>
              {reel.price}
            </span>
            {reel.originalPrice && (
              <span style={{ color: 'rgba(254, 240, 224, 0.55)', fontSize: '0.675rem', textDecoration: 'line-through' }}>
                {reel.originalPrice}
              </span>
            )}
          </div>
          <span
            style={{
              color: '#C5914A',
              fontSize: '0.65rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
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
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 10, 7, 0.88)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
      onClick={onClose}
    >
      {/* Modal Dialog */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '410px',
          height: 'min(86vh, 680px)',
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundColor: '#1C140E',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(197, 145, 74, 0.35)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Progress Bar */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          backgroundColor: 'rgba(254, 240, 224, 0.25)',
          zIndex: 10,
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: '#C5914A',
            transition: 'width 0.1s linear',
          }} />
        </div>

        {/* Top Controls */}
        <div style={{
          position: 'absolute',
          top: '0.85rem',
          left: '0.85rem',
          right: '0.85rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 10,
        }}>
          <span style={{
            background: 'rgba(28, 20, 14, 0.78)',
            backdropFilter: 'blur(6px)',
            color: '#FEF0E0',
            fontSize: '0.7rem',
            fontWeight: '700',
            letterSpacing: '1px',
            padding: '4px 10px',
            borderRadius: '6px',
            border: '1px solid rgba(197, 145, 74, 0.45)',
          }}>
            {currentReel.tag}
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'rgba(28, 20, 14, 0.78)',
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(254, 240, 224, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FEF0E0',
                cursor: 'pointer',
              }}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'rgba(28, 20, 14, 0.78)',
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(254, 240, 224, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FEF0E0',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Video Area */}
        <div
          onClick={togglePlay}
          style={{
            position: 'relative',
            flex: 1,
            cursor: 'pointer',
            overflow: 'hidden',
          }}
        >
          <video
            ref={videoRef}
            src={currentReel.video}
            loop
            playsInline
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />

          {/* Pause overlay button */}
          {!isPlaying && (
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(28, 20, 14, 0.35)',
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(28, 20, 14, 0.85)',
                backdropFilter: 'blur(6px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(254, 240, 224, 0.4)',
              }}>
                <Play size={24} fill="#FEF0E0" style={{ color: '#FEF0E0', marginLeft: '3px' }} />
              </div>
            </div>
          )}
        </div>

        {/* Bottom Product Action Bar */}
        <div style={{
          padding: '1rem 1.15rem 1.15rem',
          background: 'linear-gradient(to top, rgba(28, 20, 14, 0.98) 0%, rgba(28, 20, 14, 0.88) 100%)',
          borderTop: '1px solid rgba(197, 145, 74, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          zIndex: 10,
        }}>
          <div style={{ minWidth: 0 }}>
            <h4 style={{
              margin: '0 0 0.15rem',
              color: '#FFF9F2',
              fontSize: '0.975rem',
              fontWeight: '600',
              fontFamily: 'var(--font-serif)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
              {currentReel.title}
            </h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#C5914A', fontWeight: '700', fontSize: '0.95rem' }}>
                {currentReel.price}
              </span>
              {currentReel.originalPrice && (
                <span style={{ color: '#7A6C60', fontSize: '0.75rem', textDecoration: 'line-through' }}>
                  {currentReel.originalPrice}
                </span>
              )}
            </div>
          </div>

          <Link
            to={currentReel.link}
            onClick={onClose}
            className="btn-gold"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.65rem 1.15rem',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontWeight: '600',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              flexShrink: 0,
              boxShadow: '0 4px 15px rgba(197, 145, 74, 0.35)',
            }}
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
          style={{
            position: 'absolute',
            left: '0.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(28, 20, 14, 0.75)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(254, 240, 224, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FEF0E0',
            cursor: 'pointer',
            zIndex: 10,
          }}
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
          style={{
            position: 'absolute',
            right: '0.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(28, 20, 14, 0.75)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(254, 240, 224, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FEF0E0',
            cursor: 'pointer',
            zIndex: 10,
          }}
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
      style={{
        minWidth: '220px',
        maxWidth: '220px',
        borderRadius: '6px',
        overflow: 'hidden',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        cursor: 'pointer',
        backgroundColor: 'var(--bg-card)',
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        e.currentTarget.style.transform = 'translateY(-6px)';
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.transform = 'scale(1.06)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        e.currentTarget.style.transform = 'translateY(0)';
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.transform = 'scale(1)';
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
        {product.image ? (
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
        ) : (
          /* Decorative pattern */
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            border: '2px solid rgba(197, 145, 74, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Gem size={28} style={{ color: '#C5914A', opacity: 0.45 }} />
          </div>
        )}

        {/* Wishlist */}
        <button
          aria-label="Add to wishlist"
          className="product-wishlist-btn"
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
            opacity: 0,
            transition: 'opacity 0.2s ease, transform 0.2s ease',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <Heart size={16} style={{ color: '#EF4444' }} />
        </button>

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
  );

  // ────────────── SECTION HEADER ──────────────
  const SectionHeader = ({ title, subtitle, onScrollLeft, onScrollRight, showArrows = true }) => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '1.5rem',
    }}>
      <div>
        <h2
          className="font-serif"
          style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            margin: 0,
            letterSpacing: '1px',
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p style={{
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            margin: '0.25rem 0 0',
            fontFamily: 'var(--font-garamond)',
            fontSize: '1rem',
          }}>
            {subtitle}
          </p>
        )}
      </div>
      {showArrows && (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={onScrollLeft}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              border: '1px solid var(--border-light)',
              background: 'var(--bg-card)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
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
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              border: '1px solid var(--border-light)',
              background: 'var(--bg-card)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
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
      <section
        id="hero-banner"
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {/* Banner Slides */}
        <div style={{
          display: 'flex',
          transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: `translateX(-${currentBanner * 100}%)`,
        }}>
          {banners.map((banner, idx) => (
            <div
              key={idx}
              style={{
                minWidth: '100%',
                position: 'relative',
              }}
            >
              <img
                src={banner}
                alt={`Banner ${idx + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  maxHeight: '580px',
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}
        </div>

        {/* Banner Navigation Arrows */}
        <button
          onClick={() => setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)}
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.25)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            transition: 'all 0.3s ease',
            zIndex: 3,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
          }}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => setCurrentBanner((prev) => (prev + 1) % banners.length)}
          style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.25)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            transition: 'all 0.3s ease',
            zIndex: 3,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
          }}
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px',
          zIndex: 3,
        }}>
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentBanner(idx)}
              style={{
                width: currentBanner === idx ? '28px' : '10px',
                height: '10px',
                borderRadius: '5px',
                border: 'none',
                background: currentBanner === idx ? '#fff' : 'rgba(255,255,255,0.45)',
                cursor: 'pointer',
                transition: 'all 0.35s ease',
              }}
            />
          ))}
        </div>
      </section>

      {/* ═══════════════ CATEGORY CIRCLES ═══════════════ */}
      <section style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '2.5rem 1.5rem 1.5rem',
      }}>

        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>COLLECTIONS</span>
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
            Shop By Category
          </h1>
          <p
            className="font-garamond"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              margin: 0,
            }}
          >
            Explore handcrafted pieces crafted for every celebration
          </p>
        </div>
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                padding: '0.25rem',
                transition: 'transform 0.25s ease',
                transform: activeCategory === idx ? 'scale(1.08)' : 'scale(1)',
              }}
            >
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                padding: '3px',
                border: activeCategory === idx
                  ? '2px solid var(--text-primary)'
                  : '1.5px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: activeCategory === idx ? '0 0 0 3px rgba(197, 145, 74, 0.25), var(--shadow-md)' : 'none',
                backgroundColor: 'var(--bg-card)',
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-circle-item)',
                }}>
                  <img
                    src={cat.image}
                    alt={cat.label}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </div>
              </div>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: activeCategory === idx ? '600' : '400',
                color: activeCategory === idx ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                transition: 'color 0.2s ease',
              }}>
                {cat.label}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ═══════════════ EARRINGS SECTION ═══════════════ */}
      <section style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '2rem 1.5rem 3rem',
      }}>
        <SectionHeader
          title="Earrings"
          subtitle="Handcrafted pieces to frame your beauty"
          onScrollLeft={() => handleScroll(earringRef, 'left')}
          onScrollRight={() => handleScroll(earringRef, 'right')}
        />

        <div
          ref={earringRef}
          style={{
            display: 'flex',
            gap: '1rem',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            paddingBottom: '1rem',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {earrings.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link
            to="/earrings"
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
            View All Earrings
          </Link>
        </div>
      </section>

      {/* ═══════════════ WATCH AND BUY ═══════════════ */}
      <section style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        padding: '3.5rem 0',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          textAlign: 'center',
        }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>FEATURED</span>
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: '2rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: '0 0 0.35rem',
              letterSpacing: '1px',
            }}
          >
            Watch and Buy
          </h2>
          <p className="font-garamond" style={{
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            margin: '0 0 2.5rem',
          }}>
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
      <section style={{ width: '100%' }}>
        <img
          src={b2}
          alt="Timeless Grace — Jewellery that celebrates every you"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            maxHeight: '480px',
            objectFit: 'cover',
          }}
        />
      </section>

      {/* ═══════════════ NECKLACES SECTION ═══════════════ */}
      <section style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '3rem 1.5rem',
      }}>
        <SectionHeader
          title="Necklaces"
          subtitle="Statement pieces for every occasion"
          onScrollLeft={() => handleScroll(necklaceRef, 'left')}
          onScrollRight={() => handleScroll(necklaceRef, 'right')}
        />

        <div
          ref={necklaceRef}
          style={{
            display: 'flex',
            gap: '1rem',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            paddingBottom: '1rem',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {necklaces.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link
            to="/necklaces"
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
            View All Necklaces
          </Link>
        </div>
      </section>

      {/* ═══════════════ TIMELESS RINGS BANNER ═══════════════ */}
      <section style={{ width: '100%' }}>
        <img
          src={b3}
          alt="Timeless Rings — Elegance in every detail"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            maxHeight: '480px',
            objectFit: 'cover',
          }}
        />
      </section>

      {/* ═══════════════ RINGS SECTION ═══════════════ */}
      <section style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '3rem 1.5rem',
      }}>
        <SectionHeader
          title="Rings"
          subtitle="Elegance adorning every finger"
          onScrollLeft={() => handleScroll(ringRef, 'left')}
          onScrollRight={() => handleScroll(ringRef, 'right')}
        />

        <div
          ref={ringRef}
          style={{
            display: 'flex',
            gap: '1rem',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            paddingBottom: '1rem',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {rings.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link
            to="/rings"
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
            View All Rings
          </Link>
        </div>
      </section>

      {/* ═══════════════ ABOUT US BANNER ═══════════════ */}
      <section style={{ width: '100%' }}>
        <img
          src={b4}
          alt="About Us — Where Elegance Meets Everyday Style"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            maxHeight: '480px',
            objectFit: 'cover',
          }}
        />
      </section>

      {/* ═══════════════ TRUST FEATURES ═══════════════ */}
      <section style={{
        backgroundColor: 'var(--bg-card)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        padding: '2.5rem 0',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '1.5rem',
          }}>
            {trustFeatures.map((feature, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: 'center',
                  padding: '1.25rem 0.5rem',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1C140E 0%, #2F2117 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.75rem',
                }}>
                  <feature.icon size={20} style={{ color: '#FEF0E0' }} />
                </div>
                <h4 style={{
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  margin: '0 0 0.25rem',
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}>
                  {feature.label}
                </h4>
                <p style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                  margin: 0,
                  fontFamily: 'var(--font-sans)',
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CUSTOMER REVIEWS ═══════════════ */}
      <section style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '4rem 1.5rem',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>✦</span>
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              margin: '0 0 0.25rem',
              letterSpacing: '1px',
            }}
          >
            What Our Customers Say
          </h2>
          <p className="font-garamond" style={{
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            margin: 0,
          }}>
            Real stories from our valued patrons
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.25rem',
        }}>
          {reviews.map((review, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                borderRadius: '6px',
                padding: '1.75rem 1.5rem',
                transition: 'all 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Quote icon */}
              <Quote
                size={28}
                style={{
                  color: 'var(--border-light)',
                  marginBottom: '0.75rem',
                  transform: 'rotate(180deg)',
                }}
              />

              {/* Stars */}
              <div style={{ display: 'flex', gap: '2px', marginBottom: '0.75rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < review.rating ? '#C5914A' : 'none'}
                    style={{ color: i < review.rating ? '#C5914A' : '#D8BF9F' }}
                  />
                ))}
              </div>

              <p style={{
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                margin: '0 0 1.25rem',
                fontFamily: 'var(--font-sans)',
              }}>
                {review.text}
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1C140E 0%, #2F2117 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: '#FEF0E0',
                  letterSpacing: '1px',
                }}>
                  {review.avatar}
                </div>
                <div>
                  <p style={{
                    fontSize: '0.825rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    margin: 0,
                    fontFamily: 'var(--font-sans)',
                  }}>
                    {review.name}
                  </p>
                  <p style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-secondary)',
                    margin: '0.15rem 0 0',
                  }}>
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ FOLLOW US ON INSTAGRAM ═══════════════ */}
      <section style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        padding: '3.5rem 0',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          textAlign: 'center',
        }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <Camera size={18} style={{ color: '#C5914A' }} />
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: '0 0 0.35rem',
              letterSpacing: '1px',
            }}
          >
            Follow Us on Instagram
          </h2>
          <p className="font-garamond" style={{
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            margin: '0 0 2rem',
          }}>
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
                style={{
                  aspectRatio: '1',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#FFF9F2',
                  border: '1px solid var(--border-light)',
                  cursor: 'pointer',
                  display: 'block',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(197, 145, 74, 0.25)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.08)';
                  const overlay = e.currentTarget.querySelector('.insta-overlay');
                  if (overlay) overlay.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
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
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                />

                {/* Hover overlay */}
                <div
                  className="insta-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(28, 20, 14, 0.65)',
                    backdropFilter: 'blur(2px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'rgba(254, 240, 224, 0.95)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#1C140E',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    }}
                  >
                    <Instagram size={18} />
                  </div>
                  <span
                    style={{
                      color: '#FEF0E0',
                      fontSize: '0.65rem',
                      fontWeight: '600',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                    }}
                  >
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
            className="btn-gold"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 2rem',
              borderRadius: '2px',
              fontSize: '0.75rem',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              marginTop: '2rem',
              fontWeight: '600',
            }}
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