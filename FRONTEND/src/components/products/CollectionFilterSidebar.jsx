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
      className="bg-theme-card w-full rounded-xl overflow-hidden"
      style={{
        border: "1px solid var(--border-light)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-6 py-5"
        style={{
          borderBottom: "1px solid var(--border-light)",
          backgroundColor: "var(--bg-primary)",
        }}
      >
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={18} style={{ color: "var(--theme-gold)" }} />
          <h2
            className="font-serif text-[1.1rem] font-semibold m-0"
            style={{ color: "var(--text-primary)" }}
          >
            Refine Edit
          </h2>
          {activeCount > 0 && (
            <span
              className="text-white text-[0.7rem] font-bold px-[7px] py-[2px] rounded-[10px]"
              style={{ backgroundColor: "var(--theme-gold)" }}
            >
              {activeCount}
            </span>
          )}
        </div>

        <div className="flex items-center gap-[10px]">
          {activeCount > 0 && (
            <button
              onClick={onResetFilters}
              className="bg-transparent border-none text-[0.8rem] flex items-center gap-1 cursor-pointer px-2 py-1 rounded"
              style={{ color: "var(--theme-gold)" }}
              title="Reset all filters"
            >
              <RotateCcw size={13} />
              Reset
            </button>
          )}

          {onClose && (
            <button
              onClick={onClose}
              className="bg-transparent border-none cursor-pointer flex items-center p-1"
              style={{ color: "var(--text-secondary)" }}
              aria-label="Close filters"
            >
              <X size={20} />
            </button>
          )}
        </div>
      </div>

      {/* Filter Sections */}
      <div className="px-6 py-4 max-h-[calc(100vh-180px)] overflow-y-auto">

        {/* Price Range Section */}
        <div
          className="pb-5 mb-4"
          style={{ borderBottom: "1px solid var(--border-light)" }}
        >
          <button
            onClick={() => toggleSection("price")}
            className="w-full flex items-center justify-between bg-transparent border-none cursor-pointer py-2 font-semibold text-[0.9rem]"
            style={{ color: "var(--text-primary)" }}
          >
            <span>Price Range</span>
            {openSections.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {openSections.price && (
            <div className="mt-3">
              <div
                className="flex items-center justify-between mb-3 text-[0.85rem]"
                style={{ color: "var(--text-secondary)" }}
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
                className="w-full cursor-pointer"
                style={{ accentColor: "var(--theme-gold)" }}
              />

              <div className="grid grid-cols-2 gap-[10px] mt-3">
                <div>
                  <label
                    className="block text-[0.7rem] mb-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Min (₹)
                  </label>
                  <input
                    type="number"
                    value={filters.minPrice || 0}
                    onChange={(e) =>
                      onPriceRangeChange(Number(e.target.value), filters.maxPrice || 150000)
                    }
                    className="w-full px-2 py-[6px] rounded-[6px] text-[0.8rem]"
                    style={{
                      border: "1px solid var(--border-light)",
                      backgroundColor: "var(--bg-primary)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-[0.7rem] mb-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Max (₹)
                  </label>
                  <input
                    type="number"
                    value={filters.maxPrice || 150000}
                    onChange={(e) =>
                      onPriceRangeChange(filters.minPrice || 0, Number(e.target.value))
                    }
                    className="w-full px-2 py-[6px] rounded-[6px] text-[0.8rem]"
                    style={{
                      border: "1px solid var(--border-light)",
                      backgroundColor: "var(--bg-primary)",
                      color: "var(--text-primary)",
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
              className="pb-5 mb-4"
              style={{ borderBottom: "1px solid var(--border-light)" }}
            >
              <button
                onClick={() => toggleSection(section.key)}
                className="w-full flex items-center justify-between bg-transparent border-none cursor-pointer py-2 font-semibold text-[0.9rem]"
                style={{ color: "var(--text-primary)" }}
              >
                <div className="flex items-center gap-[6px]">
                  <span>{section.title}</span>
                  {selectedValues.length > 0 && (
                    <span className="text-[0.7rem] font-bold" style={{ color: "var(--theme-gold)" }}>
                      ({selectedValues.length})
                    </span>
                  )}
                </div>
                {isOpenSection ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {isOpenSection && (
                <div className="flex flex-col gap-2 mt-2">
                  {section.options.map((opt) => {
                    const isChecked = selectedValues.includes(opt.value);

                    return (
                      <label
                        key={opt.value}
                        className="flex items-center gap-[10px] text-[0.85rem] cursor-pointer select-none py-1 transition-colors duration-200"
                        style={{
                          color: isChecked ? "var(--text-primary)" : "var(--text-secondary)",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => onFilterChange(filterStateKey, opt.value)}
                          className="w-4 h-4 cursor-pointer"
                          style={{ accentColor: "var(--theme-gold)" }}
                        />

                        {opt.swatch && (
                          <span
                            className="w-3 h-3 rounded-full inline-block"
                            style={{
                              backgroundColor: opt.swatch,
                              border: "1px solid rgba(0,0,0,0.15)",
                            }}
                          />
                        )}

                        <span className={isChecked ? "font-semibold" : "font-normal"}>{opt.label}</span>
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
      <div className="hidden lg:block w-[280px] shrink-0">
        <div className="sticky top-[90px]">{content}</div>
      </div>

      {/* Mobile view Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex justify-end"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(4px)" }}
          onClick={onClose}
        >
          <div
            className="w-[85%] max-w-[360px] h-full overflow-y-auto"
            style={{
              backgroundColor: "var(--bg-primary)",
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
