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
      style={{ position: 'relative' }}
      className="inline-block"
    >
      {/* Location Trigger Button */}
      <button
        type="button"
        onClick={handleToggleOpen}
        aria-expanded={isOpen}
        aria-label={`Delivery location: ${location || 'Select City'}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.55rem',
          padding: '0.4rem 0.75rem',
          backgroundColor: isOpen ? 'var(--theme-champagne-light)' : 'transparent',
          border: '1px solid',
          borderColor: isOpen ? 'var(--border-gold)' : 'var(--border-light)',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.25s ease',
          outline: 'none',
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
          style={{
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            backgroundColor: 'var(--theme-champagne)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-gold)',
            flexShrink: 0,
            transition: 'transform 0.2s ease',
          }}
        >
          <MapPin size={14} strokeWidth={2.2} />
        </div>

        {/* Text Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            lineHeight: 1.15,
          }}
        >
          <span
            style={{
              fontSize: '9px',
              fontWeight: '600',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
            }}
          >
            Deliver To
          </span>
          <span
            style={{
              fontSize: '12.5px',
              fontWeight: '600',
              color: 'var(--text-primary)',
              maxWidth: '120px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              marginTop: '1px',
            }}
            title={location}
          >
            {displayCity}
          </span>
        </div>

        {/* Rotatable Gold Chevron */}
        <ChevronDown
          size={13}
          style={{
            color: 'var(--text-gold)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease',
            marginLeft: '0.15rem',
            flexShrink: 0,
          }}
        />
      </button>

      {/* Luxury Dropdown Popover */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Select Delivery Location"
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: 0,
            width: '350px',
            maxWidth: 'calc(100vw - 2rem)',
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-light)',
            borderRadius: '12px',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 100,
            overflow: 'hidden',
            animation: 'fadeInSlide 0.2s ease-out',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '1rem 1.15rem 0.85rem',
              borderBottom: '1px solid var(--border-light)',
              backgroundColor: 'var(--theme-champagne-light)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '0.5rem',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <Sparkles size={14} color="var(--text-gold)" />
                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    letterSpacing: '0.5px',
                    margin: 0,
                  }}
                >
                  Delivery Destination
                </h3>
              </div>
              <p
                style={{
                  fontSize: '11px',
                  color: 'var(--text-secondary)',
                  margin: '3px 0 0 0',
                }}
              >
                Select your city to check shipping timelines & availability
              </p>
            </div>

            <button
              type="button"
              onClick={handleClose}
              aria-label="Close location selector"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-secondary)',
                padding: '4px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.2s ease, color 0.2s ease',
              }}
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
          <div
            style={{
              padding: '1rem 1.15rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
              maxHeight: '440px',
              overflowY: 'auto',
            }}
          >
            {/* Auto-detect Location CTA Button */}
            <button
              type="button"
              onClick={handleDetectLocation}
              disabled={isDetecting}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.7rem 0.85rem',
                backgroundColor: 'var(--theme-champagne-light)',
                border: '1px dashed var(--border-gold)',
                borderRadius: '8px',
                cursor: isDetecting ? 'wait' : 'pointer',
                transition: 'all 0.2s ease',
                textAlign: 'left',
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '6px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-gold)',
                    flexShrink: 0,
                  }}
                >
                  {isDetecting ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <LocateFixed size={16} />
                  )}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '12.5px',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {isDetecting ? 'Detecting current city...' : 'Use Current Location'}
                  </div>
                  <div
                    style={{
                      fontSize: '10px',
                      color: 'var(--text-secondary)',
                      marginTop: '1px',
                    }}
                  >
                    {isDetecting ? 'Querying GPS satellites...' : 'Via browser geolocation'}
                  </div>
                </div>
              </div>

              <span
                style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  color: 'var(--text-gold)',
                }}
              >
                {isDetecting ? '...' : 'Auto Detect →'}
              </span>
            </button>

            {/* Error Message Alert */}
            {detectError && (
              <div
                style={{
                  fontSize: '11px',
                  color: '#991B1B',
                  backgroundColor: '#FEF2F2',
                  border: '1px solid #FCA5A5',
                  borderRadius: '6px',
                  padding: '6px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>{detectError}</span>
                <button
                  type="button"
                  onClick={handleClearError}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#991B1B',
                    padding: '2px',
                  }}
                >
                  <X size={12} />
                </button>
              </div>
            )}

            {/* Subtle Divider */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                margin: '0.1rem 0',
              }}
            >
              <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-light)' }} />
              <span
                style={{
                  fontSize: '9.5px',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                }}
              >
                Or Search City
              </span>
              <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-light)' }} />
            </div>

            {/* Search Input Box */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  left: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  pointerEvents: 'none',
                }}
              >
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
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '0.55rem 2rem 0.55rem 2.1rem',
                  fontSize: '12px',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '6px',
                  outline: 'none',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
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
                  style={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--text-secondary)',
                    padding: '2px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <X size={14} />
                </button>
              )}

              {/* Suggestions Results List */}
              {searchResults.length > 0 && (
                <ul
                  style={{
                    margin: '6px 0 0 0',
                    padding: '4px 0',
                    listStyle: 'none',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    boxShadow: 'var(--shadow-md)',
                    maxHeight: '160px',
                    overflowY: 'auto',
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
                        style={{
                          padding: '7px 12px',
                          fontSize: '12px',
                          color: 'var(--text-primary)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          transition: 'background-color 0.15s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--theme-champagne-light)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <MapPin size={13} color="var(--text-gold)" style={{ flexShrink: 0 }} />
                        <span
                          style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
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
                style={{
                  fontSize: '10px',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: 'var(--text-gold)',
                  marginBottom: '0.45rem',
                }}
              >
                Popular Delivery Hubs
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                }}
              >
                {popularCities.map((city) => {
                  const isSelected =
                    location &&
                    location.toLowerCase().includes(city.toLowerCase());

                  return (
                    <button
                      key={city}
                      type="button"
                      onClick={() => handleSelectCity(`${city}, India`)}
                      style={{
                        padding: '4px 10px',
                        fontSize: '11.5px',
                        fontWeight: isSelected ? '600' : '500',
                        backgroundColor: isSelected
                          ? 'var(--theme-champagne)'
                          : 'var(--theme-champagne-light)',
                        border: '1px solid',
                        borderColor: isSelected
                          ? 'var(--theme-gold)'
                          : 'var(--border-light)',
                        borderRadius: '20px',
                        color: isSelected
                          ? 'var(--text-primary)'
                          : 'var(--text-primary)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--theme-champagne)';
                        e.currentTarget.style.borderColor = 'var(--theme-gold)';
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.backgroundColor =
                            'var(--theme-champagne-light)';
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
            style={{
              padding: '0.65rem 1.15rem',
              backgroundColor: 'var(--theme-champagne-light)',
              borderTop: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Truck size={14} color="var(--text-gold)" style={{ flexShrink: 0 }} />
            <div
              style={{
                fontSize: '10.5px',
                color: 'var(--text-secondary)',
                lineHeight: 1.25,
              }}
            >
              Pan-India insured express delivery in signature velvet boxes.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
