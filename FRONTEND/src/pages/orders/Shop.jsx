import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Filter, 
  ChevronDown, 
  X, 
  Heart, 
  Star, 
  SlidersHorizontal, 
  RotateCcw,
  Sparkles,
  Check
} from 'lucide-react';
import { MOCK_PRODUCTS } from '../../utils/mockData';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  // Filters State
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedColor, setSelectedColor] = useState('all');
  const [selectedMetal, setSelectedMetal] = useState('all');
  const [selectedStone, setSelectedStone] = useState('all');
  const [selectedStyle, setSelectedStyle] = useState('all');
  const [maxPrice, setMaxPrice] = useState(20000);
  const [sortBy, setSortBy] = useState('featured');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedGender('all');
    setSelectedColor('all');
    setSelectedMetal('all');
    setSelectedStone('all');
    setSelectedStyle('all');
    setMaxPrice(20000);
    setSortBy('featured');
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
      if (selectedGender !== 'all' && product.gender !== selectedGender) return false;
      if (selectedColor !== 'all' && product.color !== selectedColor) return false;
      if (selectedMetal !== 'all' && product.metal !== selectedMetal) return false;
      if (selectedStone !== 'all' && product.stone !== selectedStone) return false;
      if (selectedStyle !== 'all' && product.style !== selectedStyle) return false;
      if (product.price > maxPrice) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // 'featured' keeps original order
    });
  }, [selectedCategory, selectedGender, selectedColor, selectedMetal, selectedStone, selectedStyle, maxPrice, sortBy]);

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedGender !== 'all',
    selectedColor !== 'all',
    selectedMetal !== 'all',
    selectedStone !== 'all',
    selectedStyle !== 'all',
    maxPrice < 20000,
  ].filter(Boolean).length;

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-secondary)',
        padding: '2rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        
        {/* Page Banner & Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              HAUTE JOAILLERIE
            </span>
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: '0 0 0.5rem',
              letterSpacing: '1px',
            }}
          >
            The Fine Jewellery Catalog
          </h1>
          <p
            className="font-garamond"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.15rem',
              maxWidth: '650px',
              margin: '0 auto',
            }}
          >
            Explore hallmarked 925 sterling silver, 22K gold vermeil heirlooms, and artisanal temple creations.
          </p>
        </div>

        {/* Toolbar: Count, Mobile Filter Button, Sort Dropdown */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            backgroundColor: 'var(--bg-card)',
            padding: '1rem 1.5rem',
            borderRadius: '10px',
            border: '1px solid var(--border-light)',
            marginBottom: '1.75rem',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Showing <strong style={{ color: 'var(--text-primary)' }}>{filteredProducts.length}</strong> creations
            </span>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="btn-outline-dark md:hidden"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.45rem 0.9rem',
                borderRadius: '6px',
                fontSize: '0.85rem',
                cursor: 'pointer',
              }}
            >
              <SlidersHorizontal size={14} />
              Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                backgroundColor: 'var(--bg-card-warm)',
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

        {/* Layout Grid: Sidebar Filters + Products Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem' }}>
          
          {/* Desktop Filter Sidebar */}
          <aside
            className="hidden md:block"
            style={{
              gridColumn: 'span 3',
              backgroundColor: 'var(--bg-card)',
              padding: '1.75rem',
              borderRadius: '12px',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)',
              height: 'fit-content',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--border-light)',
                marginBottom: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Filter size={16} style={{ color: 'var(--theme-gold)' }} />
                <h3 className="font-serif" style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)' }}>
                  Refine By
                </h3>
              </div>
              {activeFiltersCount > 0 && (
                <button
                  onClick={resetFilters}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--theme-gold)',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    padding: 0,
                  }}
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Filter Section: Category */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontWeight: '600', fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.65rem' }}>
                Product Type
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  { id: 'all', label: 'All Collections' },
                  { id: 'earrings', label: 'Earrings & Jhumkas' },
                  { id: 'necklaces', label: 'Necklaces & Chokers' },
                  { id: 'rings', label: 'Rings & Solitaires' },
                  { id: 'bracelets', label: 'Cuffs & Bracelets' },
                  { id: 'bangles', label: 'Kadas & Bangles' },
                  { id: 'mangalsutra', label: 'Modern Mangalsutras' },
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      textAlign: 'left',
                      background: selectedCategory === cat.id ? 'var(--theme-champagne)' : 'transparent',
                      border: 'none',
                      padding: '0.45rem 0.65rem',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      color: selectedCategory === cat.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontWeight: selectedCategory === cat.id ? '600' : '400',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Section: Price Range Slider */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ fontWeight: '600', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                  Max Price
                </label>
                <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--theme-gold)' }}>
                  ₹{maxPrice.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="20000"
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--theme-gold)', cursor: 'pointer' }}
              />
            </div>

            {/* Filter Section: Shop For / Gender */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontWeight: '600', fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Shop For
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {[
                  { id: 'all', label: 'Everyone' },
                  { id: 'women', label: 'Women' },
                  { id: 'men', label: 'Men' },
                  { id: 'couples', label: 'Couples' },
                  { id: 'kids', label: 'Kids' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedGender(item.id)}
                    style={{
                      background: selectedGender === item.id ? 'var(--accent-slate)' : 'var(--bg-card-warm)',
                      color: selectedGender === item.id ? '#FEF0E0' : 'var(--text-secondary)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '20px',
                      padding: '0.35rem 0.75rem',
                      fontSize: '0.78rem',
                      fontWeight: selectedGender === item.id ? '600' : '400',
                      cursor: 'pointer',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Section: Metal Purity */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontWeight: '600', fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Metal Purity
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {[
                  { id: 'all', label: 'All Metals' },
                  { id: '925', label: '925 Sterling' },
                  { id: '800', label: '800 Silver' },
                  { id: '750', label: '750 Gold Plated' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedMetal(item.id)}
                    style={{
                      background: selectedMetal === item.id ? 'var(--accent-slate)' : 'var(--bg-card-warm)',
                      color: selectedMetal === item.id ? '#FEF0E0' : 'var(--text-secondary)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '4px',
                      padding: '0.35rem 0.65rem',
                      fontSize: '0.78rem',
                      cursor: 'pointer',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Section: Style */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontWeight: '600', fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Style & Occasion
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {[
                  { id: 'all', label: 'All Styles' },
                  { id: 'everyday', label: 'Everyday' },
                  { id: 'office', label: 'Office' },
                  { id: 'party', label: 'Party' },
                  { id: 'traditional', label: 'Traditional' },
                  { id: 'wedding', label: 'Wedding' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedStyle(item.id)}
                    style={{
                      background: selectedStyle === item.id ? 'var(--theme-champagne)' : 'transparent',
                      color: selectedStyle === item.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '4px',
                      padding: '0.35rem 0.65rem',
                      fontSize: '0.78rem',
                      cursor: 'pointer',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Section: Stone */}
            <div>
              <label style={{ display: 'block', fontWeight: '600', fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Gemstone & Stone
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {[
                  { id: 'all', label: 'All Stones' },
                  { id: 'zircon', label: 'Pure Zircon' },
                  { id: 'pearl', label: 'Basra Pearl' },
                  { id: 'colored zircon', label: 'Colored Zircon' },
                  { id: 'colored stone', label: 'Colored Stone' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedStone(item.id)}
                    style={{
                      background: selectedStone === item.id ? 'var(--theme-champagne)' : 'transparent',
                      color: selectedStone === item.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '4px',
                      padding: '0.35rem 0.65rem',
                      fontSize: '0.78rem',
                      cursor: 'pointer',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div style={{ gridColumn: 'span 12' }} className="md:col-span-9">
            {filteredProducts.length === 0 ? (
              <div
                style={{
                  backgroundColor: 'var(--bg-card)',
                  padding: '4rem 2rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)',
                  textAlign: 'center',
                }}
              >
                <Sparkles size={40} style={{ color: 'var(--theme-gold)', margin: '0 auto 1rem' }} />
                <h3 className="font-serif" style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  No Jewellery Pieces Match Your Selection
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Try relaxing your metal, gemstone, or price filter criteria.
                </p>
                <button onClick={resetFilters} className="btn-slate" style={{ padding: '0.75rem 1.5rem', borderRadius: '6px' }}>
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {filteredProducts.map(product => (
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
                      {/* Image Showcase */}
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

                        {/* Top Badges */}
                        <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          {product.badge && (
                            <span className="badge-925" style={{ fontSize: '9px' }}>
                              {product.badge}
                            </span>
                          )}
                        </div>

                        {/* Wishlist Heart Button */}
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
                            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
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

                      {/* Product Content */}
                      <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                          <span style={{ fontSize: '0.75rem', letterSpacing: '1px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                            {product.categoryName}
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
                            fontSize: '0.95rem',
                            fontWeight: '600',
                            color: 'var(--text-primary)',
                            margin: '0 0 0.5rem',
                            lineHeight: '1.3',
                          }}
                        >
                          {product.name}
                        </h3>

                        <p
                          style={{
                            fontSize: '0.78rem',
                            color: 'var(--text-secondary)',
                            margin: '0 0 0.75rem',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {product.purity}
                        </p>

                        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                          <span style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)' }}>
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
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
