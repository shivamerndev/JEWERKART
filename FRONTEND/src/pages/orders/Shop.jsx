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
      className="min-h-screen py-8 px-6 pb-20"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-[1360px] mx-auto">
        
        {/* Page Banner & Header */}
        <div className="text-center mb-10">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              HAUTE JOAILLERIE
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2 tracking-[1px]"
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
              color: 'var(--text-primary)',
            }}
          >
            The Fine Jewellery Catalog
          </h1>
          <p
            className="font-garamond text-[1.15rem] max-w-[650px] mx-auto"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            Explore hallmarked 925 sterling silver, 22K gold vermeil heirlooms, and artisanal temple creations.
          </p>
        </div>

        {/* Toolbar: Count, Mobile Filter Button, Sort Dropdown */}
        <div
          className="flex items-center justify-between flex-wrap gap-4 p-4 px-6 rounded-[10px] mb-7"
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div className="flex items-center gap-4">
            <span className="text-[0.9rem]" style={{ color: 'var(--text-secondary)' }}>
              Showing <strong style={{ color: 'var(--text-primary)' }}>{filteredProducts.length}</strong> creations
            </span>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="btn-outline-dark md:hidden inline-flex items-center gap-1.5 py-[0.45rem] px-[0.9rem] rounded-md text-[0.85rem] cursor-pointer"
            >
              <SlidersHorizontal size={14} />
              Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[0.85rem]" style={{ color: 'var(--text-secondary)' }}>Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-md py-2 px-4 text-[0.85rem] outline-none cursor-pointer"
              style={{
                backgroundColor: 'var(--bg-card-warm)',
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

        {/* Layout Grid: Sidebar Filters + Products Grid */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* Desktop Filter Sidebar */}
          <aside
            className="hidden md:block col-span-12 md:col-span-3 p-7 rounded-xl h-fit"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div
              className="flex items-center justify-between pb-4 mb-5"
              style={{
                borderBottom: '1px solid var(--border-light)',
              }}
            >
              <div className="flex items-center gap-2">
                <Filter size={16} style={{ color: 'var(--theme-gold)' }} />
                <h3 className="font-serif text-[1.1rem] m-0" style={{ color: 'var(--text-primary)' }}>
                  Refine By
                </h3>
              </div>
              {activeFiltersCount > 0 && (
                <button
                  onClick={resetFilters}
                  className="bg-transparent border-0 text-[0.8rem] cursor-pointer underline p-0"
                  style={{
                    color: 'var(--theme-gold)',
                  }}
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Filter Section: Category */}
            <div className="mb-6">
              <label className="block font-semibold text-[0.85rem] mb-2.5" style={{ color: 'var(--text-primary)' }}>
                Product Type
              </label>
              <div className="flex flex-col gap-1.5">
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
                    className={`text-left border-0 py-[0.45rem] px-[0.65rem] rounded-md text-[0.85rem] cursor-pointer transition-colors duration-200 ${selectedCategory === cat.id ? 'font-semibold' : 'font-normal'}`}
                    style={{
                      backgroundColor: selectedCategory === cat.id ? 'var(--theme-champagne)' : 'transparent',
                      color: selectedCategory === cat.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Section: Price Range Slider */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="font-semibold text-[0.85rem]" style={{ color: 'var(--text-primary)' }}>
                  Max Price
                </label>
                <span className="text-[0.85rem] font-semibold" style={{ color: 'var(--theme-gold)' }}>
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
                className="w-full cursor-pointer"
                style={{ accentColor: 'var(--theme-gold)' }}
              />
            </div>

            {/* Filter Section: Shop For / Gender */}
            <div className="mb-6">
              <label className="block font-semibold text-[0.85rem] mb-2" style={{ color: 'var(--text-primary)' }}>
                Shop For
              </label>
              <div className="flex flex-wrap gap-1.5">
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
                    className={`border rounded-full py-[0.35rem] px-3 text-[0.78rem] cursor-pointer ${selectedGender === item.id ? 'font-semibold text-[#FEF0E0]' : 'font-normal'}`}
                    style={{
                      backgroundColor: selectedGender === item.id ? 'var(--accent-slate)' : 'var(--bg-card-warm)',
                      color: selectedGender === item.id ? '#FEF0E0' : 'var(--text-secondary)',
                      border: '1px solid var(--border-light)',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Section: Metal Purity */}
            <div className="mb-6">
              <label className="block font-semibold text-[0.85rem] mb-2" style={{ color: 'var(--text-primary)' }}>
                Metal Purity
              </label>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'all', label: 'All Metals' },
                  { id: '925', label: '925 Sterling' },
                  { id: '800', label: '800 Silver' },
                  { id: '750', label: '750 Gold Plated' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedMetal(item.id)}
                    className={`border rounded py-[0.35rem] px-[0.65rem] text-[0.78rem] cursor-pointer ${selectedMetal === item.id ? 'text-[#FEF0E0]' : ''}`}
                    style={{
                      backgroundColor: selectedMetal === item.id ? 'var(--accent-slate)' : 'var(--bg-card-warm)',
                      color: selectedMetal === item.id ? '#FEF0E0' : 'var(--text-secondary)',
                      border: '1px solid var(--border-light)',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Section: Style */}
            <div className="mb-6">
              <label className="block font-semibold text-[0.85rem] mb-2" style={{ color: 'var(--text-primary)' }}>
                Style & Occasion
              </label>
              <div className="flex flex-wrap gap-1.5">
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
                    className="border rounded py-[0.35rem] px-[0.65rem] text-[0.78rem] cursor-pointer"
                    style={{
                      backgroundColor: selectedStyle === item.id ? 'var(--theme-champagne)' : 'transparent',
                      color: selectedStyle === item.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                      border: '1px solid var(--border-light)',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Section: Stone */}
            <div>
              <label className="block font-semibold text-[0.85rem] mb-2" style={{ color: 'var(--text-primary)' }}>
                Gemstone & Stone
              </label>
              <div className="flex flex-wrap gap-1.5">
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
                    className="border rounded py-[0.35rem] px-[0.65rem] text-[0.78rem] cursor-pointer"
                    style={{
                      backgroundColor: selectedStone === item.id ? 'var(--theme-champagne)' : 'transparent',
                      color: selectedStone === item.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                      border: '1px solid var(--border-light)',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="col-span-12 md:col-span-9">
            {filteredProducts.length === 0 ? (
              <div
                className="p-16 px-8 rounded-xl text-center"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                }}
              >
                <Sparkles size={40} className="mx-auto mb-4" style={{ color: 'var(--theme-gold)' }} />
                <h3 className="font-serif text-2xl mb-2" style={{ color: 'var(--text-primary)' }}>
                  No Jewellery Pieces Match Your Selection
                </h3>
                <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Try relaxing your metal, gemstone, or price filter criteria.
                </p>
                <button onClick={resetFilters} className="btn-slate py-3 px-6 rounded-md">
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6">
                {filteredProducts.map(product => (
                  <Link
                    key={product.id}
                    to={`/product/${product.slug}`}
                    className="no-underline text-inherit"
                  >
                    <div
                      className="bg-theme-card rounded-lg overflow-hidden relative flex flex-col h-full transition-all duration-300"
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
                      {/* Image Showcase */}
                      <div
                        className="h-60 relative overflow-hidden"
                        style={{
                          backgroundColor: 'var(--bg-circle-item)',
                        }}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500"
                        />

                        {/* Top Badges */}
                        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1">
                          {product.badge && (
                            <span className="badge-925 text-[9px]">
                              {product.badge}
                            </span>
                          )}
                        </div>

                        {/* Wishlist Heart Button */}
                        <button
                          onClick={(e) => toggleWishlist(product.id, e)}
                          aria-label="Add to Wishlist"
                          className="absolute top-2.5 right-2.5 bg-white/90 border-0 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer shadow-[0_2px_6px_rgba(0,0,0,0.1)]"
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
                      <div className="p-4 flex flex-col grow">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[0.75rem] tracking-[1px] uppercase" style={{ color: 'var(--text-secondary)' }}>
                            {product.categoryName}
                          </span>
                          <div className="flex items-center gap-[3px]">
                            <Star size={12} style={{ color: 'var(--theme-gold)', fill: 'var(--theme-gold)' }} />
                            <span className="text-[0.75rem] font-semibold" style={{ color: 'var(--text-primary)' }}>
                              {product.rating}
                            </span>
                          </div>
                        </div>

                        <h3
                          className="font-serif text-[0.95rem] font-semibold mb-2 leading-[1.3]"
                          style={{
                            color: 'var(--text-primary)',
                          }}
                        >
                          {product.name}
                        </h3>

                        <p
                          className="text-[0.78rem] mb-3 overflow-hidden text-ellipsis whitespace-nowrap"
                          style={{
                            color: 'var(--text-secondary)',
                          }}
                        >
                          {product.purity}
                        </p>

                        <div className="mt-auto flex items-baseline gap-2">
                          <span className="text-[1.1rem] font-bold" style={{ color: 'var(--text-primary)' }}>
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          {product.originalPrice && (
                            <span className="text-[0.85rem] text-gray-400 line-through">
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
