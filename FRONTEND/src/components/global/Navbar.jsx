import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingCart, User, Menu, X, ChevronDown, Sparkles, Truck, Package, LogOut } from 'lucide-react';
import useAuth from '../../hooks/useAuth';
import Location from './Location';


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
    { name: 'Home', path: '/' },
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
    { name: 'FAQs', path: '/faqs' },
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
      <div className="max-w-[1360px] mx-auto px-5">
        {/* Main Header Bar */}
        <div className="flex items-center justify-between py-4 gap-4">
          {/* Mobile Menu Toggle & Brand Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden flex items-center justify-center p-[6px] bg-transparent border-none cursor-pointer"
              style={{ color: 'var(--text-primary)' }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <Link to="/" className="no-underline">
              <div className="flex flex-col">
                <h1
                  className="font-serif font-bold m-0 leading-[1.1] tracking-[2.5px]"
                  style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                    color: 'var(--text-primary)',
                  }}
                >
                  JEWERKART
                </h1>
                <span
                  className="text-[9px] tracking-[2px] uppercase font-semibold mt-[2px]"
                  style={{ color: 'var(--text-gold)' }}
                >
                  Pure 925 Silver Atelier
                </span>
              </div>
            </Link>

            {/* Subtle Divider between Brand and Delivery Location */}
            <div
              className="hidden sm:block w-px h-6 mx-1"
              style={{ backgroundColor: 'var(--border-light)' }}
            />

            <Location />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-[1.4rem]">
            {navLinks.map((item) => {
              if (item.hasDropdown) {
                const isCatActive = location.pathname.startsWith('/category');
                return (
                  <div
                    key={item.name}
                    ref={categoryMenuRef}
                    className="relative"
                    onMouseEnter={() => setCategoriesDropdownOpen(true)}
                    onMouseLeave={() => setCategoriesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => setCategoriesDropdownOpen(prev => !prev)}
                      className="flex items-center gap-1 bg-transparent border-none cursor-pointer text-[0.8rem] font-semibold tracking-[1.2px] uppercase transition-colors duration-200 py-[6px]"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        color: isCatActive ? 'var(--text-gold)' : 'var(--text-secondary)',
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
                        className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white rounded-lg py-3 z-[60]"
                        style={{
                          border: '1px solid var(--border-light)',
                          boxShadow: 'var(--shadow-lg)',
                        }}
                      >
                        <div
                          className="px-5 pb-1 pt-2"
                          style={{ borderBottom: '1px solid var(--border-light)' }}
                        >
                          <span className="text-[0.7rem] font-bold tracking-[1px] uppercase" style={{ color: 'var(--text-gold)' }}>
                            Explore By Jewellery
                          </span>
                        </div>
                        {item.subcategories.map((sub) => {
                          const isSubActive = location.pathname === sub.path;
                          return (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="block px-5 py-[0.65rem] no-underline transition-colors duration-200"
                              style={{ backgroundColor: isSubActive ? 'var(--theme-champagne-light)' : 'transparent' }}
                              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--theme-champagne-light)')}
                              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = isSubActive ? 'var(--theme-champagne-light)' : 'transparent')}
                            >
                              <div className="text-[0.825rem] font-semibold" style={{ color: isSubActive ? 'var(--text-gold)' : 'var(--text-primary)' }}>
                                {sub.name}
                              </div>
                              <div className="text-[0.72rem] mt-[2px]" style={{ color: 'var(--text-secondary)' }}>
                                {sub.desc}
                              </div>
                            </Link>
                          );
                        })}
                        <div
                          className="mt-1 px-5 py-2 pt-2"
                          style={{ borderTop: '1px solid var(--border-light)' }}
                        >
                          <Link
                            to="/shop"
                            className="text-[0.78rem] font-semibold no-underline flex items-center gap-[0.35rem]"
                            style={{ color: 'var(--text-gold)' }}
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
                  className="relative no-underline text-[0.8rem] tracking-[1.2px] uppercase transition-colors duration-200 flex items-center gap-[0.35rem] py-[6px]"
                  style={{
                    fontWeight: active ? '700' : '600',
                    fontFamily: 'var(--font-sans)',
                    color: active ? 'var(--text-gold)' : 'var(--text-secondary)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = active ? 'var(--text-gold)' : 'var(--text-secondary)')}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="bg-[#C5914A] text-white text-[9px] font-bold tracking-[0.5px] px-[5px] py-[1px] rounded-[10px] uppercase">
                      {item.badge}
                    </span>
                  )}
                  {active && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] rounded-[2px]"
                      style={{ backgroundColor: 'var(--text-gold)' }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Icons & Utilities */}
          <div className="flex items-center gap-[0.85rem]">
            {/* Search Button */}
            <button
              onClick={() => navigate('/search')}
              aria-label="Search Fine Jewellery"
              className="bg-transparent border-none cursor-pointer transition-[color,transform] duration-200 p-[6px] flex items-center"
              style={{ color: isCurrentActive('/search') ? 'var(--text-gold)' : 'var(--text-primary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = isCurrentActive('/search') ? 'var(--text-gold)' : 'var(--text-primary)')}
            >
              <Search size={20} />
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => navigate('/wishlist')}
              aria-label="View Wishlist"
              className="bg-transparent border-none cursor-pointer transition-[color,transform] duration-200 p-[6px] flex items-center"
              style={{ color: isCurrentActive('/wishlist') ? 'var(--text-gold)' : 'var(--text-primary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = isCurrentActive('/wishlist') ? 'var(--text-gold)' : 'var(--text-primary)')}
            >
              <Heart size={20} />
            </button>

            {/* Cart Button */}
            <button
              onClick={() => navigate('/cart')}
              aria-label="Shopping Cart"
              className="bg-transparent border-none cursor-pointer transition-[color,transform] duration-200 p-[6px] flex items-center"
              style={{ color: isCurrentActive('/cart') ? 'var(--text-gold)' : 'var(--text-primary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = isCurrentActive('/cart') ? 'var(--text-gold)' : 'var(--text-primary)')}
            >
              <ShoppingCart size={20} />
            </button>

            {/* User Account Menu */}
            <div ref={accountMenuRef} className="relative">
              <button
                onClick={() => setAccountMenuOpen(prev => !prev)}
                aria-label="Customer Account"
                className="bg-transparent border-none cursor-pointer transition-[color,transform] duration-200 p-[6px] flex items-center"
                style={{ color: isCurrentActive('/account') || isCurrentActive('/login') ? 'var(--text-gold)' : 'var(--text-primary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = isCurrentActive('/account') || isCurrentActive('/login') ? 'var(--text-gold)' : 'var(--text-primary)')}
              >
                <User size={20} />
              </button>

              {/* Account Dropdown Card */}
              {accountMenuOpen && (
                <div
                  className="absolute top-[calc(100%+8px)] right-0 w-60 bg-white rounded-lg py-3 z-[60]"
                  style={{
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-lg)',
                  }}
                >
                  {isAuthenticated ? (
                    <>
                      <div
                        className="px-5 pt-2 pb-3"
                        style={{ borderBottom: '1px solid var(--border-light)' }}
                      >
                        <div className="text-[0.75rem]" style={{ color: 'var(--text-secondary)' }}>Welcome back,</div>
                        <div className="text-[0.9rem] font-bold overflow-hidden text-ellipsis whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>
                          {user?.name || user?.email || 'Valued Member'}
                        </div>
                      </div>

                      <div className="py-1">
                        <Link
                          to="/account"
                          className="flex items-center gap-[0.6rem] px-5 py-[0.6rem] no-underline text-[0.85rem] transition-colors duration-200"
                          style={{ color: 'var(--text-primary)' }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--theme-champagne-light)')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                        >
                          <User size={15} color="var(--text-gold)" />
                          <span>My Account</span>
                        </Link>
                        <Link
                          to="/account/orders"
                          className="flex items-center gap-[0.6rem] px-5 py-[0.6rem] no-underline text-[0.85rem] transition-colors duration-200"
                          style={{ color: 'var(--text-primary)' }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--theme-champagne-light)')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                        >
                          <Package size={15} color="var(--text-gold)" />
                          <span>My Orders</span>
                        </Link>
                        <Link
                          to="/track-order"
                          className="flex items-center gap-[0.6rem] px-5 py-[0.6rem] no-underline text-[0.85rem] transition-colors duration-200"
                          style={{ color: 'var(--text-primary)' }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--theme-champagne-light)')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                        >
                          <Truck size={15} color="var(--text-gold)" />
                          <span>Track Order</span>
                        </Link>
                        <Link
                          to="/wishlist"
                          className="flex items-center gap-[0.6rem] px-5 py-[0.6rem] no-underline text-[0.85rem] transition-colors duration-200"
                          style={{ color: 'var(--text-primary)' }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--theme-champagne-light)')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                        >
                          <Heart size={15} color="var(--text-gold)" />
                          <span>Wishlist</span>
                        </Link>
                      </div>

                      <div className="pt-1" style={{ borderTop: '1px solid var(--border-light)' }}>
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-[0.6rem] w-full px-5 py-[0.6rem] bg-transparent border-none cursor-pointer text-[0.85rem] text-left text-red-700"
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
                      <div
                        className="px-5 pt-2 pb-3"
                        style={{ borderBottom: '1px solid var(--border-light)' }}
                      >
                        <div className="text-[0.875rem] font-bold" style={{ color: 'var(--text-primary)' }}>
                          Welcome to Jewerkart
                        </div>
                        <div className="text-[0.75rem] mt-[2px]" style={{ color: 'var(--text-secondary)' }}>
                          Sign in to manage orders & wishlist
                        </div>
                      </div>

                      <div className="px-5 py-3 flex flex-col gap-2">
                        <Link
                          to="/login"
                          className="block text-center text-white py-2 rounded px-0 no-underline text-[0.85rem] font-semibold"
                          style={{ backgroundColor: 'var(--accent-slate)' }}
                        >
                          Sign In
                        </Link>
                        <Link
                          to="/register"
                          className="block text-center bg-transparent py-[0.45rem] rounded px-0 no-underline text-[0.85rem] font-semibold"
                          style={{
                            color: 'var(--text-primary)',
                            border: '1px solid var(--border-light)',
                          }}
                        >
                          Register
                        </Link>
                      </div>

                      <div className="pt-1" style={{ borderTop: '1px solid var(--border-light)' }}>
                        <Link
                          to="/track-order"
                          className="flex items-center gap-[0.6rem] px-5 py-[0.6rem] no-underline text-[0.85rem] transition-colors duration-200"
                          style={{ color: 'var(--text-secondary)' }}
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
          className="fixed inset-0 z-[100] flex"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-[85%] max-w-[340px] bg-white h-full flex flex-col"
            style={{ boxShadow: 'var(--shadow-lg)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div
              className="flex items-center justify-between px-5 pt-5 pb-4"
              style={{ borderBottom: '1px solid var(--border-light)' }}
            >
              <div className="flex flex-col">
                <span className="font-serif text-[1.3rem] font-bold tracking-[2px]">
                  JEWERKART
                </span>
                <span className="text-[8px] tracking-[1.5px] uppercase font-semibold" style={{ color: 'var(--text-gold)' }}>
                  Pure 925 Silver Atelier
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="bg-transparent border-none cursor-pointer p-1"
                style={{ color: 'var(--text-primary)' }}
              >
                <X size={22} />
              </button>
            </div>

            {/* Drawer Links List */}
            <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-1">
              <div className="text-[0.7rem] font-bold tracking-[1.5px] uppercase mb-[0.4rem]" style={{ color: 'var(--text-gold)' }}>
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
                    className="flex items-center justify-between px-2 py-[0.65rem] no-underline text-[0.88rem] rounded"
                    style={{
                      fontWeight: active ? '700' : '500',
                      color: active ? 'var(--text-gold)' : 'var(--text-primary)',
                      backgroundColor: active ? 'var(--theme-champagne-light)' : 'transparent',
                    }}
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="bg-[#C5914A] text-white text-[9px] font-bold px-[6px] py-[1px] rounded-[10px]">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}

              <div className="h-px my-3" style={{ backgroundColor: 'var(--border-light)' }} />

              <div className="text-[0.7rem] font-bold tracking-[1.5px] uppercase mb-[0.4rem]" style={{ color: 'var(--text-gold)' }}>
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
                    className="px-2 py-[0.55rem] no-underline text-[0.85rem]"
                    style={{
                      color: active ? 'var(--text-gold)' : 'var(--text-secondary)',
                      fontWeight: active ? '600' : '400',
                    }}
                  >
                    {cat.name}
                  </Link>
                );
              })}

              <div className="h-px my-3" style={{ backgroundColor: 'var(--border-light)' }} />

              <div className="text-[0.7rem] font-bold tracking-[1.5px] uppercase mb-[0.4rem]" style={{ color: 'var(--text-gold)' }}>
                Assistance & Orders
              </div>

              <Link
                to="/track-order"
                className="flex items-center gap-[0.6rem] px-2 py-[0.55rem] no-underline text-[0.85rem]"
                style={{ color: 'var(--text-primary)' }}
              >
                <Truck size={16} color="var(--text-gold)" />
                <span>Track Order Live</span>
              </Link>
              <Link
                to="/faqs"
                className="flex items-center gap-[0.6rem] px-2 py-[0.55rem] no-underline text-[0.85rem]"
                style={{ color: 'var(--text-primary)' }}
              >
                <Sparkles size={16} color="var(--text-gold)" />
                <span>Customer Care & FAQs</span>
              </Link>
            </div>

            {/* Drawer Footer with Account Action */}
            <div
              className="p-5"
              style={{
                borderTop: '1px solid var(--border-light)',
                backgroundColor: 'var(--theme-champagne-light)',
              }}
            >
              {isAuthenticated ? (
                <div className="flex items-center justify-between">
                  <Link
                    to="/account"
                    className="flex items-center gap-2 no-underline text-[0.85rem] font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    <User size={16} color="var(--text-gold)" />
                    <span>My Account</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="bg-transparent border-none cursor-pointer text-[0.8rem] font-semibold text-red-700"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Link
                    to="/login"
                    className="flex-1 text-center py-2 text-white rounded no-underline text-[0.825rem] font-semibold"
                    style={{ backgroundColor: 'var(--accent-slate)' }}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="flex-1 text-center py-2 bg-white rounded no-underline text-[0.825rem] font-semibold"
                    style={{
                      border: '1px solid var(--border-light)',
                      color: 'var(--text-primary)',
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
