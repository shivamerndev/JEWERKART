import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, Award, ShieldCheck } from 'lucide-react';
import { MOCK_PRODUCTS } from '../../utils/mockData';

const BestSellers = () => {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const bestSellers = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => p.rating >= 4.8 || p.badge === 'BESTSELLER');
  }, []);

  return (
    <main
      className="min-h-screen px-6 pt-10 pb-20"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              MOST ADMIRED CREATIONS
            </span>
          </div>
          <h1
            className="font-serif font-semibold m-0 mb-2 tracking-[1px]"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
            }}
          >
            Best Selling Heirlooms
          </h1>
          <p
            className="font-garamond text-[1.2rem] max-w-[620px] mx-auto m-0"
            style={{ color: 'var(--text-secondary)' }}
          >
            Treasured by thousands of patrons across India for exceptional hallmark purity, artisanal weight, and everlasting shine.
          </p>
        </div>

        {/* Products Grid */}
        <div
          className="grid gap-7"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}
        >
          {bestSellers.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              className="no-underline text-inherit"
            >
              <div
                className="bg-theme-card rounded-lg overflow-hidden relative flex flex-col h-full transition-[transform,box-shadow] duration-300"
                style={{
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
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
                  className="h-[240px] relative overflow-hidden"
                  style={{ backgroundColor: 'var(--bg-circle-item)' }}
                >
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  <div className="absolute top-[10px] left-[10px]">
                    <span className="badge-925 text-[9px]">
                      BESTSELLER
                    </span>
                  </div>
                  <button
                    onClick={(e) => toggleWishlist(product.id, e)}
                    aria-label="Wishlist"
                    className="absolute top-[10px] right-[10px] border-none rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
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

                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-[0.35rem]">
                    <span className="text-[0.75rem] uppercase" style={{ color: 'var(--text-secondary)' }}>
                      {product.categoryName}
                    </span>
                    <div className="flex items-center gap-[3px]">
                      <Star size={12} style={{ color: 'var(--theme-gold)', fill: 'var(--theme-gold)' }} />
                      <span className="text-[0.75rem] font-semibold">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>

                  <h3
                    className="font-serif text-base font-semibold m-0 mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {product.name}
                  </h3>

                  <div className="mt-auto flex items-baseline gap-2">
                    <span className="text-[1.15rem] font-bold" style={{ color: 'var(--text-primary)' }}>
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice && (
                      <span className="text-[0.85rem] line-through text-[#9CA3AF]">
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

export default BestSellers;
