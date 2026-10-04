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
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--bg-secondary)",
        padding: "2rem 1.5rem 5rem",
      }}
    >
      <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
        {/* Breadcrumb */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "1.5rem",
            fontSize: "0.85rem",
          }}
        >
          <Link to="/" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
            Home
          </Link>
          <span style={{ color: "var(--border-light)" }}>/</span>
          <Link to="/collections" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
            Collections
          </Link>
          <span style={{ color: "var(--border-light)" }}>/</span>
          <span style={{ color: "var(--text-primary)", fontWeight: "600" }}>
            {collection.name}
          </span>
        </div>

        {/* Editorial Story Header */}
        <div
          className="bg-theme-card"
          style={{
            borderRadius: "16px",
            border: "1px solid var(--border-light)",
            overflow: "hidden",
            marginBottom: "2.5rem",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)" }}>
            <div
              style={{
                gridColumn: "span 12",
                padding: "3.5rem 2.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              className="md:col-span-7"
            >
              <div
                className="divider-ornament"
                style={{ justifyContent: "flex-start", marginBottom: "0.75rem" }}
              >
                <span className="badge-925" style={{ fontSize: "9px", letterSpacing: "2px" }}>
                  {collection.badge || "EDITORIAL CURATION"}
                </span>
              </div>
              <h1
                className="font-serif"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontWeight: "600",
                  color: "var(--text-primary)",
                  margin: "0 0 0.5rem",
                  lineHeight: "1.2",
                }}
              >
                {collection.name}
              </h1>
              <p
                className="font-garamond"
                style={{
                  color: "var(--theme-gold)",
                  fontSize: "1.3rem",
                  fontStyle: "italic",
                  margin: "0 0 1.25rem",
                }}
              >
                {collection.tagline}
              </p>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.95rem",
                  lineHeight: "1.7",
                  marginBottom: "2rem",
                }}
              >
                {collection.description}
              </p>
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem" }}>
                  <ShieldCheck size={18} style={{ color: "var(--theme-gold)" }} />
                  <span>Assayed & BIS 925 Hallmarked</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem" }}>
                  <Sparkles size={18} style={{ color: "var(--theme-gold)" }} />
                  <span>Artisanal Hand Setting</span>
                </div>
              </div>
            </div>

            <div
              style={{
                gridColumn: "span 12",
                height: "360px",
                position: "relative",
              }}
              className="md:col-span-5"
            >
              <img
                src={collection.image}
                alt={collection.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>

        {/* Toolbar: Filter Toggle (Mobile), Total Results, and Sort Controls */}
        <div
          className="bg-theme-card"
          style={{
            borderRadius: "10px",
            border: "1px solid var(--border-light)",
            padding: "1rem 1.5rem",
            marginBottom: "1.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {/* Mobile Filter Button */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 14px",
                borderRadius: "6px",
                backgroundColor: "var(--bg-primary)",
                border: "1px solid var(--border-light)",
                color: "var(--text-primary)",
                fontSize: "0.85rem",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              <Filter size={16} style={{ color: "var(--theme-gold)" }} />
              Filters {activeFilterTags.length > 0 && `(${activeFilterTags.length})`}
            </button>

            <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              Showing <strong style={{ color: "var(--text-primary)" }}>{products.length}</strong> of{" "}
              <strong style={{ color: "var(--text-primary)" }}>{totalCount}</strong> pieces
            </span>
          </div>

          {/* Sort By Dropdown */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label
              htmlFor="sort-select"
              style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}
            >
              Sort by:
            </label>
            <div style={{ position: "relative" }}>
              <select
                id="sort-select"
                value={filters.sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                style={{
                  appearance: "none",
                  padding: "8px 32px 8px 12px",
                  borderRadius: "6px",
                  border: "1px solid var(--border-light)",
                  backgroundColor: "var(--bg-primary)",
                  color: "var(--text-primary)",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                <option value="newest">Featured & Newest</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>
              <ChevronDown
                size={14}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "var(--text-secondary)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Active Filter Chips */}
        {activeFilterTags.length > 0 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "1.75rem",
            }}
          >
            <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
              Active Filters:
            </span>
            {activeFilterTags.map((tag, idx) => (
              <span
                key={idx}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--border-light)",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontSize: "0.75rem",
                  color: "var(--text-primary)",
                  boxShadow: "var(--shadow-sm)",
                  textTransform: "capitalize",
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
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    color: "var(--text-secondary)",
                  }}
                  aria-label={`Remove filter ${tag.label}`}
                >
                  <X size={13} />
                </button>
              </span>
            ))}

            <button
              onClick={handleResetFilters}
              style={{
                background: "none",
                border: "none",
                color: "var(--theme-gold)",
                fontSize: "0.8rem",
                cursor: "pointer",
                padding: "4px 8px",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                fontWeight: "600",
              }}
            >
              <RotateCcw size={12} />
              Clear All
            </button>
          </div>
        )}

        {/* Two-Column Main Layout: Filter Sidebar + Products Grid */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
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
          <div style={{ flexGrow: 1, minWidth: 0 }}>
            {loading ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5rem 0",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "3px solid var(--border-light)",
                    borderTopColor: "var(--theme-gold)",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                  }}
                />
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  Curating jewellery edit...
                </p>
                <style>{`
                  @keyframes spin {
                    to { transform: rotate(360deg); }
                  }
                `}</style>
              </div>
            ) : products.length === 0 ? (
              /* Empty State */
              <div
                className="bg-theme-card"
                style={{
                  borderRadius: "12px",
                  border: "1px solid var(--border-light)",
                  padding: "4rem 2rem",
                  textAlign: "center",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <SlidersHorizontal
                  size={42}
                  style={{ color: "var(--theme-gold)", margin: "0 auto 1.25rem", opacity: 0.8 }}
                />
                <h3
                  className="font-serif"
                  style={{ fontSize: "1.4rem", margin: "0 0 0.5rem", color: "var(--text-primary)" }}
                >
                  No pieces matched your selected filters
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.9rem",
                    maxWidth: "420px",
                    margin: "0 auto 1.75rem",
                  }}
                >
                  Try expanding your price range or adjusting product type, purity, and gemstone
                  filters to view more curated designs.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="btn-gold"
                  style={{
                    padding: "0.75rem 1.75rem",
                    borderRadius: "6px",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <RotateCcw size={16} />
                  Reset All Filters
                </button>
              </div>
            ) : (
              /* Products Grid */
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {products.map((product) => (
                  <Link
                    key={product.id || product._id || product.slug}
                    to={`/product/${product.slug}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div
                      className="bg-theme-card"
                      style={{
                        borderRadius: "8px",
                        overflow: "hidden",
                        border: "1px solid var(--border-light)",
                        boxShadow: "var(--shadow-sm)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
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
                        style={{
                          height: "240px",
                          backgroundColor: "var(--bg-circle-item)",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={product.image || product.images?.[0] || "/showcase_necklace.jpg"}
                          alt={product.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.5s ease",
                          }}
                        />

                        {/* Hallmark / Status Badge */}
                        <div style={{ position: "absolute", top: "10px", left: "10px" }}>
                          <span className="badge-925" style={{ fontSize: "9px" }}>
                            {product.badge || `${product.metal || "925"} HALLMARKED`}
                          </span>
                        </div>

                        {/* Wishlist Button */}
                        <button
                          onClick={(e) => toggleWishlist(product.id || product._id, e)}
                          aria-label="Add to Wishlist"
                          style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            border: "none",
                            borderRadius: "50%",
                            width: "32px",
                            height: "32px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                          }}
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

                      <div
                        style={{
                          padding: "1.25rem",
                          display: "flex",
                          flexDirection: "column",
                          flexGrow: 1,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: "0.35rem",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.75rem",
                              color: "var(--text-secondary)",
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                            }}
                          >
                            {product.categoryName || product.productType || "Jewellery"}
                          </span>
                          <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                            <Star
                              size={12}
                              style={{ color: "var(--theme-gold)", fill: "var(--theme-gold)" }}
                            />
                            <span
                              style={{
                                fontSize: "0.75rem",
                                fontWeight: "600",
                                color: "var(--text-primary)",
                              }}
                            >
                              {product.rating || "4.8"}
                            </span>
                          </div>
                        </div>

                        <h3
                          className="font-serif"
                          style={{
                            fontSize: "1rem",
                            fontWeight: "600",
                            color: "var(--text-primary)",
                            margin: "0 0 0.5rem",
                            lineHeight: "1.35",
                          }}
                        >
                          {product.name}
                        </h3>

                        <div
                          style={{
                            marginTop: "auto",
                            display: "flex",
                            alignItems: "baseline",
                            gap: "8px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "1.15rem",
                              fontWeight: "700",
                              color: "var(--text-primary)",
                            }}
                          >
                            ₹{Number(product.price).toLocaleString("en-IN")}
                          </span>
                          {product.originalPrice && (
                            <span
                              style={{
                                fontSize: "0.85rem",
                                color: "#9CA3AF",
                                textDecoration: "line-through",
                              }}
                            >
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
