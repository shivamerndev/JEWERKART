import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  Heart,
  Sparkles,
  ShieldCheck,
  Filter,
  X,
  RotateCcw,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";
import useProduct from "../../hooks/useProduct";
import CollectionFilterSidebar from "../../components/products/CollectionFilterSidebar";
import { MOCK_COLLECTIONS } from "../../utils/mockData";

/**
 * Collection Page
 * Strictly adheres to Jewerkart Rules:
 * 1. UI composition only.
 * 2. NO direct axios/fetch calls.
 * 3. NO direct Redux dispatch calls.
 * 4. Business logic coordinated by useProduct hook.
 */

const Collection = () => {
  const { slug } = useParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [wishlist, setWishlist] = useState({});

  const {
    products,
    totalCount,
    filters,
    loading,
    error,
    handleFetchProducts,
    handleFilterChange,
    handlePriceRangeChange,
    handleSortChange,
    handleResetFilters,
  } = useProduct();

  // Fetch products via custom hook when slug or filters change
  useEffect(() => {
    handleFetchProducts({ collectionSlug: slug || undefined });
  }, [
    slug,
    filters.productTypes,
    filters.shopFor,
    filters.colors,
    filters.metals,
    filters.stones,
    filters.styles,
    filters.minPrice,
    filters.maxPrice,
    filters.sortBy,
    handleFetchProducts,
  ]);

  const toggleWishlist = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const collection = useMemo(() => {
    const found = MOCK_COLLECTIONS.find(
      (c) => c.slug.toLowerCase() === (slug || "").toLowerCase()
    );
    if (found) return found;
    return {
      name: (slug || "Artisanal Collection").replace(/-/g, " ").toUpperCase(),
      slug: slug || "",
      tagline: "Exclusive Jewerkart Fine Jewellery Curation",
      description:
        "Hand-forged with unparalleled precision by master karigars in pure 925 sterling silver and 22K gold vermeil.",
      image: "/showcase_necklace.jpg",
      badge: "LIMITED EDITION",
    };
  }, [slug]);

  // Aggregate active filter tags for quick removal
  const activeFilterTags = useMemo(() => {
    const tags = [];
    filters.productTypes?.forEach((val) =>
      tags.push({ key: "productTypes", label: val, value: val })
    );
    filters.shopFor?.forEach((val) =>
      tags.push({ key: "shopFor", label: `For: ${val}`, value: val })
    );
    filters.colors?.forEach((val) =>
      tags.push({ key: "colors", label: `Color: ${val}`, value: val })
    );
    filters.metals?.forEach((val) =>
      tags.push({ key: "metals", label: `Purity: ${val}`, value: val })
    );
    filters.stones?.forEach((val) =>
      tags.push({ key: "stones", label: `Stone: ${val}`, value: val })
    );
    filters.styles?.forEach((val) =>
      tags.push({ key: "styles", label: `Style: ${val}`, value: val })
    );
    if (filters.minPrice > 0 || filters.maxPrice < 150000) {
      tags.push({
        key: "price",
        label: `₹${filters.minPrice.toLocaleString()} - ₹${filters.maxPrice.toLocaleString()}`,
        isPrice: true,
      });
    }
    return tags;
  }, [filters]);

  return (
    <main
      className="min-h-screen px-6 pt-8 pb-20"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-[1380px] mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-[0.85rem]">
          <Link to="/" className="no-underline" style={{ color: "var(--text-secondary)" }}>
            Home
          </Link>
          <span style={{ color: "var(--border-light)" }}>/</span>
          <Link to="/collections" className="no-underline" style={{ color: "var(--text-secondary)" }}>
            Collections
          </Link>
          <span style={{ color: "var(--border-light)" }}>/</span>
          <span className="font-semibold" style={{ color: "var(--text-primary)" }}>
            {collection.name}
          </span>
        </div>

        {/* Editorial Story Header */}
        <div
          className="bg-theme-card rounded-2xl overflow-hidden mb-10"
          style={{
            border: "1px solid var(--border-light)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div className="grid grid-cols-12">
            <div
              className="col-span-12 md:col-span-7 px-10 py-14 flex flex-col justify-center"
            >
              <div className="divider-ornament mb-3 justify-start">
                <span className="badge-925 text-[9px] tracking-[2px]">
                  {collection.badge || "EDITORIAL CURATION"}
                </span>
              </div>
              <h1
                className="font-serif font-semibold m-0 mb-2 leading-[1.2]"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  color: "var(--text-primary)",
                }}
              >
                {collection.name}
              </h1>
              <p
                className="font-garamond text-[1.3rem] italic m-0 mb-5"
                style={{ color: "var(--theme-gold)" }}
              >
                {collection.tagline}
              </p>
              <p
                className="text-[0.95rem] leading-[1.7] mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                {collection.description}
              </p>
              <div className="flex gap-6 flex-wrap">
                <div className="flex items-center gap-2 text-[0.85rem]">
                  <ShieldCheck size={18} style={{ color: "var(--theme-gold)" }} />
                  <span>Assayed &amp; BIS 925 Hallmarked</span>
                </div>
                <div className="flex items-center gap-2 text-[0.85rem]">
                  <Sparkles size={18} style={{ color: "var(--theme-gold)" }} />
                  <span>Artisanal Hand Setting</span>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 h-[360px] relative">
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div
          className="bg-theme-card rounded-[10px] px-6 py-4 mb-7 flex items-center justify-between flex-wrap gap-4"
          style={{
            border: "1px solid var(--border-light)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <div className="flex items-center gap-4">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden inline-flex items-center gap-2 px-[14px] py-2 rounded-[6px] text-[0.85rem] font-semibold cursor-pointer"
              style={{
                backgroundColor: "var(--bg-primary)",
                border: "1px solid var(--border-light)",
                color: "var(--text-primary)",
              }}
            >
              <Filter size={16} style={{ color: "var(--theme-gold)" }} />
              Filters {activeFilterTags.length > 0 && `(${activeFilterTags.length})`}
            </button>

            <span className="text-[0.9rem]" style={{ color: "var(--text-secondary)" }}>
              Showing <strong style={{ color: "var(--text-primary)" }}>{products.length}</strong> of{" "}
              <strong style={{ color: "var(--text-primary)" }}>{totalCount}</strong> pieces
            </span>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-[10px]">
            <label htmlFor="sort-select" className="text-[0.85rem]" style={{ color: "var(--text-secondary)" }}>
              Sort by:
            </label>
            <div className="relative">
              <select
                id="sort-select"
                value={filters.sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="appearance-none px-3 py-2 pr-8 rounded-[6px] text-[0.85rem] font-medium cursor-pointer outline-none"
                style={{
                  border: "1px solid var(--border-light)",
                  backgroundColor: "var(--bg-primary)",
                  color: "var(--text-primary)",
                }}
              >
                <option value="newest">Featured &amp; Newest</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-[10px] top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: "var(--text-secondary)" }}
              />
            </div>
          </div>
        </div>

        {/* Active Filter Chips */}
        {activeFilterTags.length > 0 && (
          <div className="flex items-center flex-wrap gap-2 mb-7">
            <span className="text-[0.8rem]" style={{ color: "var(--text-secondary)" }}>
              Active Filters:
            </span>
            {activeFilterTags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-[6px] px-[10px] py-1 rounded-[20px] text-[0.75rem] capitalize"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--border-light)",
                  color: "var(--text-primary)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                {tag.label}
                <button
                  onClick={() => {
                    if (tag.isPrice) {
                      handlePriceRangeChange(0, 150000);
                    } else {
                      handleFilterChange(tag.key, tag.value);
                    }
                  }}
                  className="bg-transparent border-none cursor-pointer p-0 flex items-center"
                  style={{ color: "var(--text-secondary)" }}
                  aria-label={`Remove filter ${tag.label}`}
                >
                  <X size={13} />
                </button>
              </span>
            ))}

            <button
              onClick={handleResetFilters}
              className="bg-transparent border-none text-[0.8rem] cursor-pointer px-2 py-1 inline-flex items-center gap-1 font-semibold"
              style={{ color: "var(--theme-gold)" }}
            >
              <RotateCcw size={12} />
              Clear All
            </button>
          </div>
        )}

        {/* Two-Column Main Layout: Filter Sidebar + Products Grid */}
        <div className="flex gap-8 items-start">
          {/* Filter Sidebar */}
          <CollectionFilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onPriceRangeChange={handlePriceRangeChange}
            onResetFilters={handleResetFilters}
            isOpen={mobileFilterOpen}
            onClose={() => setMobileFilterOpen(false)}
          />

          {/* Product Gallery Area */}
          <div className="flex-grow min-w-0">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <div
                  className="w-10 h-10 rounded-full animate-spin"
                  style={{
                    border: "3px solid var(--border-light)",
                    borderTopColor: "var(--theme-gold)",
                  }}
                />
                <p className="text-[0.9rem]" style={{ color: "var(--text-secondary)" }}>
                  Curating jewellery edit...
                </p>
              </div>
            ) : products.length === 0 ? (
              /* Empty State */
              <div
                className="bg-theme-card rounded-xl text-center px-8 py-16"
                style={{
                  border: "1px solid var(--border-light)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <SlidersHorizontal
                  size={42}
                  className="mx-auto mb-5 opacity-80"
                  style={{ color: "var(--theme-gold)" }}
                />
                <h3
                  className="font-serif text-[1.4rem] m-0 mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  No pieces matched your selected filters
                </h3>
                <p
                  className="text-[0.9rem] max-w-[420px] mx-auto m-0 mb-7"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Try expanding your price range or adjusting product type, purity, and gemstone
                  filters to view more curated designs.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="btn-gold px-7 py-3 rounded-[6px] text-[0.85rem] font-semibold cursor-pointer inline-flex items-center gap-2"
                >
                  <RotateCcw size={16} />
                  Reset All Filters
                </button>
              </div>
            ) : (
              /* Products Grid */
              <div
                className="grid gap-6"
                style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}
              >
                {products.map((product) => (
                  <Link
                    key={product.id || product._id || product.slug}
                    to={`/product/${product.slug}`}
                    className="no-underline text-inherit"
                  >
                    <div
                      className="bg-theme-card rounded-lg overflow-hidden relative flex flex-col h-full transition-[transform,box-shadow] duration-300"
                      style={{
                        border: "1px solid var(--border-light)",
                        boxShadow: "var(--shadow-sm)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                      }}
                    >
                      <div
                        className="h-[240px] relative overflow-hidden"
                        style={{ backgroundColor: "var(--bg-circle-item)" }}
                      >
                        <img
                          src={product.image || product.images?.[0] || "/showcase_necklace.jpg"}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500"
                        />

                        {/* Hallmark / Status Badge */}
                        <div className="absolute top-[10px] left-[10px]">
                          <span className="badge-925 text-[9px]">
                            {product.badge || `${product.metal || "925"} HALLMARKED`}
                          </span>
                        </div>

                        {/* Wishlist Button */}
                        <button
                          onClick={(e) => toggleWishlist(product.id || product._id, e)}
                          aria-label="Add to Wishlist"
                          className="absolute top-[10px] right-[10px] border-none rounded-full w-8 h-8 flex items-center justify-center cursor-pointer shadow-[0_2px_6px_rgba(0,0,0,0.15)]"
                          style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                        >
                          <Heart
                            size={16}
                            style={{
                              color: wishlist[product.id || product._id]
                                ? "#EF4444"
                                : "var(--text-primary)",
                              fill: wishlist[product.id || product._id] ? "#EF4444" : "none",
                            }}
                          />
                        </button>
                      </div>

                      <div className="p-5 flex flex-col flex-grow">
                        <div className="flex items-center justify-between mb-[0.35rem]">
                          <span
                            className="text-[0.75rem] uppercase tracking-[0.5px]"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {product.categoryName || product.productType || "Jewellery"}
                          </span>
                          <div className="flex items-center gap-[3px]">
                            <Star
                              size={12}
                              style={{ color: "var(--theme-gold)", fill: "var(--theme-gold)" }}
                            />
                            <span
                              className="text-[0.75rem] font-semibold"
                              style={{ color: "var(--text-primary)" }}
                            >
                              {product.rating || "4.8"}
                            </span>
                          </div>
                        </div>

                        <h3
                          className="font-serif text-base font-semibold m-0 mb-2 leading-[1.35]"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {product.name}
                        </h3>

                        <div className="mt-auto flex items-baseline gap-2">
                          <span
                            className="text-[1.15rem] font-bold"
                            style={{ color: "var(--text-primary)" }}
                          >
                            ₹{Number(product.price).toLocaleString("en-IN")}
                          </span>
                          {product.originalPrice && (
                            <span className="text-[0.85rem] line-through text-[#9CA3AF]">
                              ₹{Number(product.originalPrice).toLocaleString("en-IN")}
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

export default Collection;
