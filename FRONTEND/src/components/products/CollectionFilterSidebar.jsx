import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Sparkles,
  SlidersHorizontal,
  X,
} from "lucide-react";

const FILTER_CONFIG = [
  {
    key: "productTypes",
    title: "Product Type",
    options: [
      { label: "Necklace", value: "necklace" },
      { label: "Rings", value: "rings" },
      { label: "Earrings", value: "earrings" },
      { label: "Bracelets", value: "bracelets" },
    ],
  },
  {
    key: "shopFor",
    title: "Shop For",
    options: [
      { label: "Women", value: "women" },
      { label: "Men", value: "men" },
      { label: "Kids", value: "kids" },
      { label: "Couples", value: "couples" },
    ],
  },
  {
    key: "color",
    title: "Color / Finish",
    options: [
      { label: "Gold", value: "gold", swatch: "#D4AF37" },
      { label: "Oxidised Silver", value: "oxidised silver", swatch: "#5A5D64" },
      { label: "Silver", value: "silver", swatch: "#E0E5EB" },
      { label: "Rose Gold", value: "rose gold", swatch: "#B76E79" },
    ],
  },
  {
    key: "metal",
    title: "Metal Purity",
    options: [
      { label: "925 Sterling Silver", value: "925" },
      { label: "800 Silver", value: "800" },
      { label: "750 (18K Gold)", value: "750" },
    ],
  },
  {
    key: "stone",
    title: "Gemstone & Pearls",
    options: [
      { label: "Pearl", value: "pearl" },
      { label: "Zircon", value: "zircon" },
      { label: "Colored Zircon", value: "colored zircon" },
      { label: "Colored Stone", value: "colored stone" },
    ],
  },
  {
    key: "style",
    title: "Style & Occasion",
    options: [
      { label: "Everyday Wear", value: "everyday" },
      { label: "Office Wear", value: "office" },
      { label: "Party & Glam", value: "party" },
      { label: "Traditional / Heritage", value: "traditional" },
      { label: "Wedding & Bridal", value: "wedding" },
    ],
  },
];

const CollectionFilterSidebar = ({
  filters,
  onFilterChange,
  onPriceRangeChange,
  onResetFilters,
  isOpen = false,
  onClose,
}) => {
  const [openSections, setOpenSections] = useState({
    productTypes: true,
    price: true,
    shopFor: true,
    color: true,
    metal: true,
    stone: true,
    style: true,
  });

  const toggleSection = (sectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const activeCount =
    (filters.productTypes?.length || 0) +
    (filters.shopFor?.length || 0) +
    (filters.colors?.length || 0) +
    (filters.metals?.length || 0) +
    (filters.stones?.length || 0) +
    (filters.styles?.length || 0) +
    (filters.minPrice > 0 || filters.maxPrice < 150000 ? 1 : 0);

  const content = (
    <aside
      className="bg-theme-card"
      style={{
        width: "100%",
        borderRadius: "12px",
        border: "1px solid var(--border-light)",
        boxShadow: "var(--shadow-sm)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.25rem 1.5rem",
          borderBottom: "1px solid var(--border-light)",
          backgroundColor: "var(--bg-primary)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <SlidersHorizontal size={18} style={{ color: "var(--theme-gold)" }} />
          <h2
            className="font-serif"
            style={{
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "var(--text-primary)",
              margin: 0,
            }}
          >
            Refine Edit
          </h2>
          {activeCount > 0 && (
            <span
              style={{
                backgroundColor: "var(--theme-gold)",
                color: "#FFFFFF",
                fontSize: "0.7rem",
                fontWeight: "700",
                padding: "2px 7px",
                borderRadius: "10px",
              }}
            >
              {activeCount}
            </span>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {activeCount > 0 && (
            <button
              onClick={onResetFilters}
              style={{
                background: "none",
                border: "none",
                color: "var(--theme-gold)",
                fontSize: "0.8rem",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                cursor: "pointer",
                padding: "4px 8px",
                borderRadius: "4px",
              }}
              title="Reset all filters"
            >
              <RotateCcw size={13} />
              Reset
            </button>
          )}

          {onClose && (
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                color: "var(--text-secondary)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                padding: "4px",
              }}
              aria-label="Close filters"
            >
              <X size={20} />
            </button>
          )}
        </div>
      </div>

      {/* Filter Sections */}
      <div style={{ padding: "1rem 1.5rem", maxHeight: "calc(100vh - 180px)", overflowY: "auto" }}>
        
        {/* Price Range Section */}
        <div
          style={{
            borderBottom: "1px solid var(--border-light)",
            paddingBottom: "1.25rem",
            marginBottom: "1rem",
          }}
        >
          <button
            onClick={() => toggleSection("price")}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem 0",
              color: "var(--text-primary)",
              fontWeight: "600",
              fontSize: "0.9rem",
            }}
          >
            <span>Price Range</span>
            {openSections.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {openSections.price && (
            <div style={{ marginTop: "0.75rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "0.75rem",
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                }}
              >
                <span>₹{(filters.minPrice || 0).toLocaleString("en-IN")}</span>
                <span>to</span>
                <span>₹{(filters.maxPrice || 150000).toLocaleString("en-IN")}</span>
              </div>

              <input
                type="range"
                min="0"
                max="150000"
                step="2000"
                value={filters.maxPrice || 150000}
                onChange={(e) => onPriceRangeChange(filters.minPrice || 0, Number(e.target.value))}
                style={{
                  width: "100%",
                  accentColor: "var(--theme-gold)",
                  cursor: "pointer",
                }}
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                  marginTop: "0.75rem",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.7rem",
                      color: "var(--text-secondary)",
                      marginBottom: "4px",
                    }}
                  >
                    Min (₹)
                  </label>
                  <input
                    type="number"
                    value={filters.minPrice || 0}
                    onChange={(e) =>
                      onPriceRangeChange(Number(e.target.value), filters.maxPrice || 150000)
                    }
                    style={{
                      width: "100%",
                      padding: "6px 8px",
                      borderRadius: "6px",
                      border: "1px solid var(--border-light)",
                      backgroundColor: "var(--bg-primary)",
                      color: "var(--text-primary)",
                      fontSize: "0.8rem",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.7rem",
                      color: "var(--text-secondary)",
                      marginBottom: "4px",
                    }}
                  >
                    Max (₹)
                  </label>
                  <input
                    type="number"
                    value={filters.maxPrice || 150000}
                    onChange={(e) =>
                      onPriceRangeChange(filters.minPrice || 0, Number(e.target.value))
                    }
                    style={{
                      width: "100%",
                      padding: "6px 8px",
                      borderRadius: "6px",
                      border: "1px solid var(--border-light)",
                      backgroundColor: "var(--bg-primary)",
                      color: "var(--text-primary)",
                      fontSize: "0.8rem",
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Dynamic Categorical Sections */}
        {FILTER_CONFIG.map((section) => {
          const filterStateKey =
            section.key === "color"
              ? "colors"
              : section.key === "metal"
              ? "metals"
              : section.key === "stone"
              ? "stones"
              : section.key === "style"
              ? "styles"
              : section.key;

          const selectedValues = filters[filterStateKey] || [];
          const isOpenSection = openSections[section.key];

          return (
            <div
              key={section.key}
              style={{
                borderBottom: "1px solid var(--border-light)",
                paddingBottom: "1.25rem",
                marginBottom: "1rem",
              }}
            >
              <button
                onClick={() => toggleSection(section.key)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "0.5rem 0",
                  color: "var(--text-primary)",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span>{section.title}</span>
                  {selectedValues.length > 0 && (
                    <span
                      style={{
                        fontSize: "0.7rem",
                        color: "var(--theme-gold)",
                        fontWeight: "700",
                      }}
                    >
                      ({selectedValues.length})
                    </span>
                  )}
                </div>
                {isOpenSection ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {isOpenSection && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    marginTop: "0.5rem",
                  }}
                >
                  {section.options.map((opt) => {
                    const isChecked = selectedValues.includes(opt.value);

                    return (
                      <label
                        key={opt.value}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          fontSize: "0.85rem",
                          color: isChecked ? "var(--text-primary)" : "var(--text-secondary)",
                          cursor: "pointer",
                          userSelect: "none",
                          padding: "4px 0",
                          transition: "color 0.2s ease",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => onFilterChange(filterStateKey, opt.value)}
                          style={{
                            accentColor: "var(--theme-gold)",
                            width: "16px",
                            height: "16px",
                            cursor: "pointer",
                          }}
                        />

                        {opt.swatch && (
                          <span
                            style={{
                              width: "12px",
                              height: "12px",
                              borderRadius: "50%",
                              backgroundColor: opt.swatch,
                              display: "inline-block",
                              border: "1px solid rgba(0,0,0,0.15)",
                            }}
                          />
                        )}

                        <span style={{ fontWeight: isChecked ? "600" : "400" }}>{opt.label}</span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );

  return (
    <>
      {/* Desktop view */}
      <div className="hidden lg:block" style={{ width: "280px", flexShrink: 0 }}>
        <div style={{ position: "sticky", top: "90px" }}>{content}</div>
      </div>

      {/* Mobile view Drawer */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(4px)",
            display: "flex",
            justifyContent: "flex-end",
          }}
          onClick={onClose}
        >
          <div
            style={{
              width: "85%",
              maxWidth: "360px",
              height: "100%",
              backgroundColor: "var(--bg-primary)",
              overflowY: "auto",
              boxShadow: "var(--shadow-xl)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {content}
          </div>
        </div>
      )}
    </>
  );
};

export default CollectionFilterSidebar;
