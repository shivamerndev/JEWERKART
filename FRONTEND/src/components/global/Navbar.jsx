import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingCart, User } from 'lucide-react';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {

  const { isAuthenticated } = useAuth();

  const navigate = useNavigate()

  return (
    <header
      className="bg-theme-primary sticky top-0 z-50"
      style={{
        borderBottom: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-sm)',
        backgroundColor: '#FFFFFF',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
        }}
      >
        {/* Top Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.1rem 0',
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1
              className="font-serif"
              style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                letterSpacing: '2.5px',
                margin: 0,
              }}
            >
              JEWERKART
            </h1>
          </Link>

          {/* Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.2rem',
            }}
          >
            {['Collections', 'Earrings', 'Necklaces', 'Rings', 'Bracelets'].map(
              (item) => (
                <Link
                  key={item}
                  to="#"
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    transition: 'color 0.2s ease',
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--text-secondary)',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--text-gold)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                >
                  {item}
                </Link>
              )
            )}
          </nav>

          {/* Action Icons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
            }}
          >
            <button
              aria-label="Search"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                transition: 'color 0.2s ease, transform 0.2s ease',
                padding: '4px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            >
              <Search size={20} />
            </button>
            <button
              aria-label="Wishlist"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                transition: 'color 0.2s ease, transform 0.2s ease',
                padding: '4px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            >
              <Heart size={20} />
            </button>
            <button
             onClick={()=>navigate("/cart")}
              aria-label="Cart"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                transition: 'color 0.2s ease, transform 0.2s ease',
                padding: '4px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            >
              <ShoppingCart size={20} />
            </button>
            <Link
              to={isAuthenticated ? '#' : '/login'}
              aria-label="Account"
              style={{
                color: 'var(--text-primary)',
                transition: 'color 0.2s ease, transform 0.2s ease',
                padding: '4px',
                display: 'flex',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-gold)')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'var(--text-primary)')
              }
            >
              <User size={20} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
