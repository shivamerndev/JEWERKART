import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Search, 
  Heart, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Truck, 
  Package, 
  LogOut, 
  Tag, 
  Gift 
} from 'lucide-react';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const { isAuthenticated, user, handleLogout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);

  const accountMenuRef = useRef(null);
  const categoryMenuRef = useRef(null);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (accountMenuRef.current && !accountMenuRef.current.contains(e.target)) {
        setAccountMenuOpen(false);
      }
      if (categoryMenuRef.current && !categoryMenuRef.current.contains(e.target)) {
        setCategoriesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus and drawer on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setAccountMenuOpen(false);
    setCategoriesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Shop All', path: '/shop' },
    { name: 'New Arrivals', path: '/new-arrivals' },
    { name: 'Best Sellers', path: '/best-sellers' },
    { name: 'Collections', path: '/collections' },
    { 
      name: 'Categories', 
      path: '/category/earrings',
      hasDropdown: true,
      subcategories: [
        { name: 'Earrings', path: '/category/earrings', desc: 'Jhumkas, Studs & Danglers' },
        { name: 'Necklaces & Chokers', path: '/category/necklaces', desc: 'Temple & Royal Masterpieces' },
        { name: 'Rings & Bands', path: '/category/rings', desc: 'Solitaire & Cocktail Rings' },
        { name: 'Bracelets', path: '/category/bracelets', desc: 'Tennis & Charm Bracelets' },
        { name: 'Bangles & Kadas', path: '/category/bangles', desc: 'Handcrafted Heritage Kadas' },
        { name: 'Mangalsutras', path: '/category/mangalsutra', desc: 'Sacred Modern Adornments' },
      ]
    },
    { name: 'Offers', path: '/offers', badge: 'Sale' },
    { name: 'Gifts', path: '/gifts' },
  ];

  const isCurrentActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className="bg-theme-primary sticky top-0 z-50 select-none"
      style={{
        borderBottom: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-sm)',
        backgroundColor: '#FFFFFF',
      }}
    >
      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '0 1.25rem',
        }}
      >
        {/* Main Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 0',
            gap: '1rem',
          }}
        >
          {/* Mobile Menu Toggle & Brand Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                padding: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <Link to="/" style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h1
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    letterSpacing: '2.5px',
                    margin: 0,
                    lineHeight: 1.1,
                  }}
                >
                  JEWERKART
                </h1>
                <span
                  style={{
                    fontSize: '9px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'var(--text-gold)',
                    fontWeight: '600',
                    marginTop: '2px',
                  }}
                >
                  Pure 925 Silver Atelier
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex"
            style={{
              alignItems: 'center',
              gap: '1.4rem',
            }}
          >
            {navLinks.map((item) => {
              if (item.hasDropdown) {
                const isCatActive = location.pathname.startsWith('/category');
                return (
                  <div 
                    key={item.name} 
                    ref={categoryMenuRef}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setCategoriesDropdownOpen(true)}
                    onMouseLeave={() => setCategoriesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => setCategoriesDropdownOpen(prev => !prev)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        letterSpacing: '1.2px',
                        textTransform: 'uppercase',
                        transition: 'color 0.2s ease',
                        fontFamily: 'var(--font-sans)',
                        color: isCatActive ? 'var(--text-gold)' : 'var(--text-secondary)',
                        padding: '6px 0',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-gold)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = isCatActive ? 'var(--text-gold)' : 'var(--text-secondary)')}
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        size={14} 
                        style={{
                          transform: categoriesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease'
                        }}
                      />
                    </button>

                    {/* Category Dropdown Menu */}
                    {categoriesDropdownOpen && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '320px',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid var(--border-light)',
                          borderRadius: '8px',
                          boxShadow: 'var(--shadow-lg)',
                          padding: '0.75rem 0',
                          zIndex: 60,
                        }}
                      >
                        <div style={{ padding: '0.5rem 1.25rem 0.25rem', borderBottom: '1px solid var(--border-light)' }}>
                          <span style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-gold)' }}>
                            Explore By Jewellery
                          </span>
                        </div>
                        {item.subcategories.map((sub) => {
                          const isSubActive = location.pathname === sub.path;
                          return (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              style={{
                                display: 'block',
                                padding: '0.65rem 1.25rem',
                                textDecoration: 'none',
                                transition: 'background-color 0.2s ease',
                                backgroundColor: isSubActive ? 'var(--theme-champagne-light)' : 'transparent',
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--theme-champagne-light)')}
                              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = isSubActive ? 'var(--theme-champagne-light)' : 'transparent')}
                            >
                              <div style={{ fontSize: '0.825rem', fontWeight: '600', color: isSubActive ? 'var(--text-gold)' : 'var(--text-primary)' }}>
                                {sub.name}
                              </div>
                              <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                                {sub.desc}
                              </div>
                            </Link>
                          );
                        })}
                        <div style={{ borderTop: '1px solid var(--border-light)', marginTop: '0.25rem', padding: '0.5rem 1.25rem 0.25rem' }}>
                          <Link
                            to="/shop"
                            style={{
                              fontSize: '0.78rem',
                              fontWeight: '600',
                              color: 'var(--text-gold)',
                              textDecoration: 'none',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                            }}
                          >
                            <span>Browse All Categories</span>
                            <span>→</span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const active = isCurrentActive(item.path);

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  style={{
                    position: 'relative',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    fontWeight: active ? '700' : '600',
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    transition: 'color 0.2s ease',
                    fontFamily: 'var(--font-sans)',
                    color: active ? 'var(--text-gold)' : 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '6px 0',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = active ? 'var(--text-gold)' : 'var(--text-secondary)')}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span
                      style={{
                        backgroundColor: '#C5914A',
                        color: '#FFFFFF',
                        fontSize: '9px',
                        fontWeight: '700',
                        letterSpacing: '0.5px',
                        padding: '1px 5px',
                        borderRadius: '10px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                  {active && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--text-gold)',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Icons & Utilities */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
            }}
          >
            {/* Track Order Direct Link (Desktop) */}
            <Link
              to="/track-order"
              className="hidden xl:flex"
              style={{
                alignItems: 'center',
                gap: '0.4rem',
                textDecoration: 'none',
                fontSize: '0.75rem',
                fontWeight: '600',
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                color: isCurrentActive('/track-order') ? 'var(--text-gold)' : 'var(--text-secondary)',
                padding: '4px 8px',
                borderRadius: '4px',
                border: '1px solid var(--border-light)',
                transition: 'all 0.2s ease',
                backgroundColor: 'var(--theme-champagne-light)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-gold)';
                e.currentTarget.style.borderColor = 'var(--text-gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isCurrentActive('/track-order') ? 'var(--text-gold)' : 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }}
            >
              <Truck size={14} />
              <span>Track Order</span>
            </Link>

            {/* Search Button */}
            <button
              onClick={() => navigate('/search')}
              aria-label="Search Fine Jewellery"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: isCurrentActive('/search') ? 'var(--text-gold)' : 'var(--text-primary)',
                transition: 'color 0.2s ease, transform 0.2s ease',
                padding: '6px',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = isCurrentActive('/search') ? 'var(--text-gold)' : 'var(--text-primary)')}
            >
              <Search size={20} />
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => navigate('/wishlist')}
              aria-label="View Wishlist"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: isCurrentActive('/wishlist') ? 'var(--text-gold)' : 'var(--text-primary)',
                transition: 'color 0.2s ease, transform 0.2s ease',
                padding: '6px',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = isCurrentActive('/wishlist') ? 'var(--text-gold)' : 'var(--text-primary)')}
            >
              <Heart size={20} />
            </button>

            {/* Cart Button */}
            <button
              onClick={() => navigate('/cart')}
              aria-label="Shopping Cart"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: isCurrentActive('/cart') ? 'var(--text-gold)' : 'var(--text-primary)',
                transition: 'color 0.2s ease, transform 0.2s ease',
                padding: '6px',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = isCurrentActive('/cart') ? 'var(--text-gold)' : 'var(--text-primary)')}
            >
              <ShoppingCart size={20} />
            </button>

            {/* User Account Menu */}
            <div ref={accountMenuRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setAccountMenuOpen(prev => !prev)}
                aria-label="Customer Account"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: isCurrentActive('/account') || isCurrentActive('/login') ? 'var(--text-gold)' : 'var(--text-primary)',
                  transition: 'color 0.2s ease, transform 0.2s ease',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = isCurrentActive('/account') || isCurrentActive('/login') ? 'var(--text-gold)' : 'var(--text-primary)')}
              >
                <User size={20} />
              </button>

              {/* Account Dropdown Card */}
              {accountMenuOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    right: 0,
                    width: '240px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    boxShadow: 'var(--shadow-lg)',
                    padding: '0.75rem 0',
                    zIndex: 60,
                  }}
                >
                  {isAuthenticated ? (
                    <>
                      <div style={{ padding: '0.5rem 1.25rem 0.75rem', borderBottom: '1px solid var(--border-light)' }}>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Welcome back,</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {user?.name || user?.email || 'Valued Member'}
                        </div>
                      </div>

                      <div style={{ padding: '0.25rem 0' }}>
                        <Link
                          to="/account"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            padding: '0.6rem 1.25rem',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            color: 'var(--text-primary)',
                            transition: 'background-color 0.2s ease',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--theme-champagne-light)')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                        >
                          <User size={15} color="var(--text-gold)" />
                          <span>My Account</span>
                        </Link>
                        <Link
                          to="/account/orders"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            padding: '0.6rem 1.25rem',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            color: 'var(--text-primary)',
                            transition: 'background-color 0.2s ease',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--theme-champagne-light)')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                        >
                          <Package size={15} color="var(--text-gold)" />
                          <span>My Orders</span>
                        </Link>
                        <Link
                          to="/track-order"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            padding: '0.6rem 1.25rem',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            color: 'var(--text-primary)',
                            transition: 'background-color 0.2s ease',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--theme-champagne-light)')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                        >
                          <Truck size={15} color="var(--text-gold)" />
                          <span>Track Order</span>
                        </Link>
                        <Link
                          to="/wishlist"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            padding: '0.6rem 1.25rem',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            color: 'var(--text-primary)',
                            transition: 'background-color 0.2s ease',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--theme-champagne-light)')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                        >
                          <Heart size={15} color="var(--text-gold)" />
                          <span>Wishlist</span>
                        </Link>
                      </div>

                      <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.25rem' }}>
                        <button
                          onClick={handleLogout}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            width: '100%',
                            padding: '0.6rem 1.25rem',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '0.85rem',
                            color: '#b91c1c',
                            textAlign: 'left',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#fef2f2')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                        >
                          <LogOut size={15} />
                          <span>Log Out</span>
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ padding: '0.5rem 1.25rem 0.75rem', borderBottom: '1px solid var(--border-light)' }}>
                        <div style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                          Welcome to Jewerkart
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                          Sign in to manage orders & wishlist
                        </div>
                      </div>

                      <div style={{ padding: '0.75rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <Link
                          to="/login"
                          style={{
                            display: 'block',
                            textAlign: 'center',
                            backgroundColor: 'var(--accent-slate)',
                            color: '#FFFFFF',
                            padding: '0.5rem',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                          }}
                        >
                          Sign In
                        </Link>
                        <Link
                          to="/register"
                          style={{
                            display: 'block',
                            textAlign: 'center',
                            backgroundColor: 'transparent',
                            color: 'var(--text-primary)',
                            border: '1px solid var(--border-light)',
                            padding: '0.45rem',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                          }}
                        >
                          Register
                        </Link>
                      </div>

                      <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.25rem' }}>
                        <Link
                          to="/track-order"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            padding: '0.6rem 1.25rem',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            color: 'var(--text-secondary)',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--theme-champagne-light)')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                        >
                          <Truck size={15} color="var(--text-gold)" />
                          <span>Track Your Order</span>
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.45)',
            zIndex: 100,
            display: 'flex',
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              width: '85%',
              maxWidth: '340px',
              backgroundColor: '#FFFFFF',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-lg)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 1.25rem 1rem',
                borderBottom: '1px solid var(--border-light)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="font-serif" style={{ fontSize: '1.3rem', fontWeight: '700', letterSpacing: '2px' }}>
                  JEWERKART
                </span>
                <span style={{ fontSize: '8px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-gold)', fontWeight: '600' }}>
                  Pure 925 Silver Atelier
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  color: 'var(--text-primary)',
                }}
              >
                <X size={22} />
              </button>
            </div>

            {/* Drawer Links List */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '1rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
              }}
            >
              <div style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-gold)', marginBottom: '0.4rem' }}>
                Featured Curations
              </div>

              {[
                { name: 'Shop All Jewellery', path: '/shop' },
                { name: 'New Arrivals', path: '/new-arrivals', badge: 'Fresh' },
                { name: 'Best Sellers', path: '/best-sellers', badge: 'Hot' },
                { name: 'Signature Collections', path: '/collections' },
                { name: 'Special Offers & Deals', path: '/offers', badge: 'Sale' },
                { name: 'Gifts Boutique', path: '/gifts' },
              ].map((item) => {
                const active = isCurrentActive(item.path);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.65rem 0.5rem',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      fontWeight: active ? '700' : '500',
                      color: active ? 'var(--text-gold)' : 'var(--text-primary)',
                      borderRadius: '4px',
                      backgroundColor: active ? 'var(--theme-champagne-light)' : 'transparent',
                    }}
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span
                        style={{
                          backgroundColor: '#C5914A',
                          color: '#FFFFFF',
                          fontSize: '9px',
                          fontWeight: '700',
                          padding: '1px 6px',
                          borderRadius: '10px',
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}

              <div style={{ height: '1px', backgroundColor: 'var(--border-light)', margin: '0.75rem 0' }} />

              <div style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-gold)', marginBottom: '0.4rem' }}>
                Categories
              </div>

              {[
                { name: 'Earrings', path: '/category/earrings' },
                { name: 'Necklaces & Chokers', path: '/category/necklaces' },
                { name: 'Rings & Bands', path: '/category/rings' },
                { name: 'Bracelets', path: '/category/bracelets' },
                { name: 'Bangles & Kadas', path: '/category/bangles' },
                { name: 'Mangalsutras', path: '/category/mangalsutra' },
              ].map((cat) => {
                const active = location.pathname === cat.path;
                return (
                  <Link
                    key={cat.name}
                    to={cat.path}
                    style={{
                      padding: '0.55rem 0.5rem',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      color: active ? 'var(--text-gold)' : 'var(--text-secondary)',
                      fontWeight: active ? '600' : '400',
                    }}
                  >
                    {cat.name}
                  </Link>
                );
              })}

              <div style={{ height: '1px', backgroundColor: 'var(--border-light)', margin: '0.75rem 0' }} />

              <div style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-gold)', marginBottom: '0.4rem' }}>
                Assistance & Orders
              </div>

              <Link
                to="/track-order"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.55rem 0.5rem',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  color: 'var(--text-primary)',
                }}
              >
                <Truck size={16} color="var(--text-gold)" />
                <span>Track Order Live</span>
              </Link>
              <Link
                to="/faqs"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.55rem 0.5rem',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  color: 'var(--text-primary)',
                }}
              >
                <Sparkles size={16} color="var(--text-gold)" />
                <span>Customer Care & FAQs</span>
              </Link>
            </div>

            {/* Drawer Footer with Account Action */}
            <div
              style={{
                padding: '1.25rem',
                borderTop: '1px solid var(--border-light)',
                backgroundColor: 'var(--theme-champagne-light)',
              }}
            >
              {isAuthenticated ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Link
                    to="/account"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      textDecoration: 'none',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                    }}
                  >
                    <User size={16} color="var(--text-gold)" />
                    <span>My Account</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#b91c1c',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                    }}
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <Link
                    to="/login"
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      padding: '0.5rem',
                      backgroundColor: 'var(--accent-slate)',
                      color: '#FFFFFF',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      fontSize: '0.825rem',
                      fontWeight: '600',
                    }}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      padding: '0.5rem',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--border-light)',
                      color: 'var(--text-primary)',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      fontSize: '0.825rem',
                      fontWeight: '600',
                    }}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
