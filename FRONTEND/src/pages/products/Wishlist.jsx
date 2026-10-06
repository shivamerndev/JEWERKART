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
      className="px-6 py-8"
      style={{
        minHeight: 'calc(100vh - 300px)',
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">SAVED ITEMS</span>
          </div>
          <h1
            className="font-serif font-semibold m-0 mb-[0.35rem] tracking-[1px]"
            style={{
              fontSize: 'clamp(1.85rem, 3.5vw, 2.35rem)',
              color: 'var(--text-primary)',
            }}
          >
            My Wishlist
          </h1>
          <p
            className="font-garamond text-[1.05rem] m-0"
            style={{ color: 'var(--text-secondary)' }}
          >
            {wishlistItems.length} items saved for later
          </p>
        </div>

        {/* Items Grid */}
        {wishlistItems.length > 0 ? (
          <div
            className="grid gap-6 mb-8"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}
          >
            {wishlistItems.map((product) => (
              <div
                key={product.id}
                className="rounded-[6px] overflow-hidden cursor-pointer relative transition-[box-shadow,transform] duration-300"
                style={{
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  backgroundColor: 'var(--bg-card)',
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
                  className="w-full h-[200px] flex items-center justify-center relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #FFF9F2 0%, #F7E5D0 100%)' }}
                >
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover block transition-transform duration-[400ms]"
                    />
                  )}

                  {/* Badge */}
                  {product.badge && (
                    <span className="badge-925 absolute top-[10px] left-[10px] text-[9px] px-2 py-[3px]">
                      {product.badge}
                    </span>
                  )}

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="absolute top-[10px] right-[10px] border-none rounded-full w-[34px] h-[34px] flex items-center justify-center cursor-pointer transition-all duration-200"
                    style={{
                      background: 'var(--bg-card)',
                      boxShadow: 'var(--shadow-md)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#FEF0E0';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--bg-card)';
                    }}
                  >
                    <X size={16} className="text-[#C5914A]" />
                  </button>
                </div>

                {/* Info */}
                <div className="p-[0.875rem_1rem]">
                  <h3
                    className="text-[0.8rem] font-semibold m-0 mb-[0.4rem] overflow-hidden text-ellipsis whitespace-nowrap"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-[0.4rem]">
                    <span
                      className="text-base font-bold"
                      style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-sans)' }}
                    >
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span
                        className="text-[0.75rem] line-through"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-[0.35rem] mb-[0.7rem]">
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

                  <button
                    className="btn-slate w-full py-[0.55rem] px-0 rounded-[2px] text-[0.7rem] tracking-[1.2px] uppercase cursor-pointer font-semibold"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="text-center px-8 py-16 rounded-lg"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
            }}
          >
            <Heart
              size={48}
              className="mx-auto mb-4 block"
              style={{ color: 'var(--border-light)' }}
            />
            <h2
              className="font-serif text-2xl m-0 mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              Your wishlist is empty
            </h2>
            <p
              className="font-garamond text-base m-0 mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              Start adding items to save them for later
            </p>
            <Link
              to="/"
              className="btn-outline-dark inline-block no-underline px-10 py-[0.7rem] rounded-[2px] text-[0.75rem] tracking-[1.5px] uppercase font-semibold"
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
