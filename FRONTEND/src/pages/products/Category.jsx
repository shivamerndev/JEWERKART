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
      className="min-h-screen px-6 pt-8 pb-20"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-[1280px] mx-auto">

        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 mb-6 text-[0.85rem]">
          <Link to="/" className="no-underline" style={{ color: 'var(--text-secondary)' }}>Home</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <Link to="/shop" className="no-underline" style={{ color: 'var(--text-secondary)' }}>Shop</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{categoryInfo.name}</span>
        </div>

        {/* Hero Category Banner */}
        <div
          className="bg-theme-card rounded-2xl overflow-hidden mb-12 relative"
          style={{
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div className="px-10 py-14 max-w-[650px] relative z-[2]">
            <div className="divider-ornament mb-3 justify-start">
              <span className="badge-925 text-[9px] tracking-[2px]">
                GENUINE 925 HALLMARK
              </span>
            </div>
            <h1
              className="font-serif font-semibold m-0 mb-4 tracking-[1px]"
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                color: 'var(--text-primary)',
              }}
            >
              {categoryInfo.name}
            </h1>
            <p
              className="font-garamond text-[1.2rem] leading-[1.6] m-0 mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              {categoryInfo.description}
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-[6px] text-[0.85rem]" style={{ color: 'var(--text-primary)' }}>
                <ShieldCheck size={16} style={{ color: 'var(--theme-gold)' }} />
                <span>BIS Hallmarked Purity</span>
              </div>
              <div className="flex items-center gap-[6px] text-[0.85rem]" style={{ color: 'var(--text-primary)' }}>
                <Sparkles size={16} style={{ color: 'var(--theme-gold)' }} />
                <span>Complimentary Lifetime Polish</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[45%] overflow-hidden">
            <img
              src={categoryInfo.image}
              alt={categoryInfo.name}
              className="w-full h-full object-cover"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 30%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 30%)',
              }}
            />
          </div>
        </div>

        {/* Toolbar */}
        <div
          className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-5"
          style={{ borderBottom: '1px solid var(--border-light)' }}
        >
          <p className="text-[0.95rem] m-0" style={{ color: 'var(--text-secondary)' }}>
            Showing <strong>{categoryProducts.length}</strong> creations in <strong>{categoryInfo.name}</strong>
          </p>

          <div className="flex items-center gap-3">
            <span className="text-[0.85rem]" style={{ color: 'var(--text-secondary)' }}>Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-[6px] px-4 py-2 text-[0.85rem] outline-none cursor-pointer"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                color: 'var(--text-primary)',
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
          className="grid gap-7"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}
        >
          {categoryProducts.map((product) => (
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
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute top-[10px] left-[10px]">
                    {product.badge && (
                      <span className="badge-925 text-[9px]">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={(e) => toggleWishlist(product.id, e)}
                    aria-label="Add to Wishlist"
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
                    <span className="text-[0.75rem] uppercase tracking-[0.5px]" style={{ color: 'var(--text-secondary)' }}>
                      {product.metalName}
                    </span>
                    <div className="flex items-center gap-[3px]">
                      <Star size={12} style={{ color: 'var(--theme-gold)', fill: 'var(--theme-gold)' }} />
                      <span className="text-[0.75rem] font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  <h3
                    className="font-serif text-base font-semibold m-0 mb-2 leading-[1.35]"
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

export default Category;
