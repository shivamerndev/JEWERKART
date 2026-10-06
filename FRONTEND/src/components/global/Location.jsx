import { useRef, useEffect } from 'react';
import {
  MapPin,
  ChevronDown,
  Search,
  X,
  LocateFixed,
  Loader2,
  Check,
  Truck,
  Sparkles,
} from 'lucide-react';
import useDeliveryLocation from '../../hooks/useDeliveryLocation';

const Location = () => {
  const {
    location,
    isOpen,
    isDetecting,
    detectError,
    searchQuery,
    searchResults,
    isSearching,
    popularCities,
    handleSelectCity,
    handleDetectLocation,
    handleSearchChange,
    handleClearSearch,
    handleToggleOpen,
    handleClose,
    handleClearError,
  } = useDeliveryLocation();

  const containerRef = useRef(null);
  const searchInputRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClose]);

  // Close on Escape key & focus input on open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleClose]);

  // Format short location string for the trigger button
  const displayCity = location
    ? location.split(',')[0].trim()
    : 'Select Location';

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
    >
      {/* Location Trigger Button */}
      <button
        type="button"
        onClick={handleToggleOpen}
        aria-expanded={isOpen}
        aria-label={`Delivery location: ${location || 'Select City'}`}
        className="flex items-center gap-[0.55rem] px-3 py-[0.4rem] rounded-lg cursor-pointer transition-all duration-[250ms] outline-none"
        style={{
          backgroundColor: isOpen ? 'var(--theme-champagne-light)' : 'transparent',
          border: '1px solid',
          borderColor: isOpen ? 'var(--border-gold)' : 'var(--border-light)',
          boxShadow: isOpen ? 'var(--shadow-sm)' : 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--theme-champagne-light)';
          e.currentTarget.style.borderColor = 'var(--theme-gold)';
        }}
        onMouseLeave={(e) => {
          if (!isOpen) {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.borderColor = 'var(--border-light)';
          }
        }}
      >
        {/* Subtle Pin Icon in warm champagne badge */}
        <div
          className="w-[26px] h-[26px] rounded-full flex items-center justify-center shrink-0 transition-transform duration-200"
          style={{
            backgroundColor: 'var(--theme-champagne)',
            color: 'var(--text-gold)',
          }}
        >
          <MapPin size={14} strokeWidth={2.2} />
        </div>

        {/* Text Container */}
        <div className="flex flex-col items-start text-left leading-[1.15]">
          <span
            className="text-[9px] font-semibold tracking-[1px] uppercase"
            style={{ color: 'var(--text-secondary)' }}
          >
            Deliver To
          </span>
          <span
            className="text-[12.5px] font-semibold max-w-[120px] whitespace-nowrap overflow-hidden text-ellipsis mt-[1px]"
            style={{ color: 'var(--text-primary)' }}
            title={location}
          >
            {displayCity}
          </span>
        </div>

        {/* Rotatable Gold Chevron */}
        <ChevronDown
          size={13}
          className="ml-[0.15rem] shrink-0"
          style={{
            color: 'var(--text-gold)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease',
          }}
        />
      </button>

      {/* Luxury Dropdown Popover */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Select Delivery Location"
          className="absolute top-[calc(100%+8px)] left-0 w-[350px] max-w-[calc(100vw-2rem)] bg-white rounded-xl overflow-hidden z-[100]"
          style={{
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-lg)',
            animation: 'fadeInSlide 0.2s ease-out',
          }}
        >
          {/* Header */}
          <div
            className="px-[1.15rem] pt-4 pb-[0.85rem] flex items-start justify-between gap-2"
            style={{
              borderBottom: '1px solid var(--border-light)',
              backgroundColor: 'var(--theme-champagne-light)',
            }}
          >
            <div>
              <div className="flex items-center gap-[0.4rem]">
                <Sparkles size={14} color="var(--text-gold)" />
                <h3
                  className="font-serif text-base font-bold tracking-[0.5px] m-0"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Delivery Destination
                </h3>
              </div>
              <p
                className="text-[11px] mt-[3px] mb-0"
                style={{ color: 'var(--text-secondary)' }}
              >
                Select your city to check shipping timelines & availability
              </p>
            </div>

            <button
              type="button"
              onClick={handleClose}
              aria-label="Close location selector"
              className="bg-transparent border-none cursor-pointer p-1 rounded-full flex items-center justify-center transition-[background-color,color] duration-200"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--theme-champagne)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="px-[1.15rem] py-4 flex flex-col gap-[0.85rem] max-h-[440px] overflow-y-auto">
            {/* Auto-detect Location CTA Button */}
            <button
              type="button"
              onClick={handleDetectLocation}
              disabled={isDetecting}
              className="w-full flex items-center justify-between px-[0.85rem] py-[0.7rem] rounded-lg text-left transition-all duration-200"
              style={{
                backgroundColor: 'var(--theme-champagne-light)',
                border: '1px dashed var(--border-gold)',
                cursor: isDetecting ? 'wait' : 'pointer',
              }}
              onMouseEnter={(e) => {
                if (!isDetecting) {
                  e.currentTarget.style.backgroundColor = 'var(--theme-champagne)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isDetecting) {
                  e.currentTarget.style.backgroundColor = 'var(--theme-champagne-light)';
                }
              }}
            >
              <div className="flex items-center gap-[0.65rem]">
                <div
                  className="w-[30px] h-[30px] rounded-[6px] bg-white flex items-center justify-center shrink-0"
                  style={{
                    border: '1px solid var(--border-light)',
                    color: 'var(--text-gold)',
                  }}
                >
                  {isDetecting ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <LocateFixed size={16} />
                  )}
                </div>
                <div>
                  <div className="text-[12.5px] font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {isDetecting ? 'Detecting current city...' : 'Use Current Location'}
                  </div>
                  <div className="text-[10px] mt-[1px]" style={{ color: 'var(--text-secondary)' }}>
                    {isDetecting ? 'Querying GPS satellites...' : 'Via browser geolocation'}
                  </div>
                </div>
              </div>

              <span className="text-[11px] font-semibold" style={{ color: 'var(--text-gold)' }}>
                {isDetecting ? '...' : 'Auto Detect →'}
              </span>
            </button>

            {/* Error Message Alert */}
            {detectError && (
              <div className="text-[11px] text-[#991B1B] bg-[#FEF2F2] border border-[#FCA5A5] rounded-[6px] px-[10px] py-[6px] flex items-center justify-between">
                <span>{detectError}</span>
                <button
                  type="button"
                  onClick={handleClearError}
                  className="bg-transparent border-none cursor-pointer text-[#991B1B] p-[2px]"
                >
                  <X size={12} />
                </button>
              </div>
            )}

            {/* Subtle Divider */}
            <div className="flex items-center gap-2 my-[0.1rem]">
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border-light)' }} />
              <span
                className="text-[9.5px] font-semibold tracking-[1px] uppercase"
                style={{ color: 'var(--text-secondary)' }}
              >
                Or Search City
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border-light)' }} />
            </div>

            {/* Search Input Box */}
            <div className="relative">
              <div className="absolute left-[10px] top-1/2 -translate-y-1/2 flex items-center pointer-events-none" style={{ color: 'var(--text-secondary)' }}>
                {isSearching ? (
                  <Loader2 size={15} className="animate-spin" color="var(--text-gold)" />
                ) : (
                  <Search size={15} />
                )}
              </div>

              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Type city or pincode (e.g. Mumbai, 110001)..."
                className="w-full box-border py-[0.55rem] pr-8 pl-[2.1rem] text-[12px] bg-white rounded-[6px] outline-none transition-[border-color,box-shadow] duration-200"
                style={{
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-light)',
                  fontFamily: 'var(--font-sans)',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--text-gold)';
                  e.target.style.boxShadow = '0 0 0 3px rgba(197, 145, 74, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border-light)';
                  e.target.style.boxShadow = 'none';
                }}
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  aria-label="Clear search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer p-[2px] flex items-center"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <X size={14} />
                </button>
              )}

              {/* Suggestions Results List */}
              {searchResults.length > 0 && (
                <ul
                  className="mt-[6px] py-1 list-none bg-white rounded-lg max-h-[160px] overflow-y-auto"
                  style={{
                    margin: '6px 0 0 0',
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  {searchResults.map((item, idx) => {
                    const cityName = item.display_name.split(',')[0]?.trim();
                    const regionName =
                      item.address?.state ||
                      item.address?.country ||
                      item.display_name.split(',').slice(1, 3).join(', ').trim();
                    const fullLabel = regionName ? `${cityName}, ${regionName}` : cityName;

                    return (
                      <li
                        key={item.place_id || idx}
                        onClick={() => handleSelectCity(fullLabel)}
                        className="px-3 py-[7px] text-[12px] cursor-pointer flex items-center gap-2 transition-colors duration-[150ms]"
                        style={{ color: 'var(--text-primary)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--theme-champagne-light)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <MapPin size={13} color="var(--text-gold)" className="shrink-0" />
                        <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                          {item.display_name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* Popular Cities Section */}
            <div>
              <div
                className="text-[10px] font-bold tracking-[1px] uppercase mb-[0.45rem]"
                style={{ color: 'var(--text-gold)' }}
              >
                Popular Delivery Hubs
              </div>

              <div className="flex flex-wrap gap-[0.4rem]">
                {popularCities.map((city) => {
                  const isSelected =
                    location &&
                    location.toLowerCase().includes(city.toLowerCase());

                  return (
                    <button
                      key={city}
                      type="button"
                      onClick={() => handleSelectCity(`${city}, India`)}
                      className="px-[10px] py-1 text-[11.5px] rounded-[20px] cursor-pointer transition-all duration-200 flex items-center gap-[0.3rem]"
                      style={{
                        fontWeight: isSelected ? '600' : '500',
                        backgroundColor: isSelected ? 'var(--theme-champagne)' : 'var(--theme-champagne-light)',
                        border: '1px solid',
                        borderColor: isSelected ? 'var(--theme-gold)' : 'var(--border-light)',
                        color: 'var(--text-primary)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--theme-champagne)';
                        e.currentTarget.style.borderColor = 'var(--theme-gold)';
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.backgroundColor = 'var(--theme-champagne-light)';
                          e.currentTarget.style.borderColor = 'var(--border-light)';
                        }
                      }}
                    >
                      {isSelected && (
                        <Check size={11} strokeWidth={2.5} color="var(--text-gold)" />
                      )}
                      <span>{city}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Assurance Banner */}
          <div
            className="px-[1.15rem] py-[0.65rem] flex items-center gap-2"
            style={{
              backgroundColor: 'var(--theme-champagne-light)',
              borderTop: '1px solid var(--border-light)',
            }}
          >
            <Truck size={14} color="var(--text-gold)" className="shrink-0" />
            <div className="text-[10.5px] leading-[1.25]" style={{ color: 'var(--text-secondary)' }}>
              Pan-India insured express delivery in signature velvet boxes.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
