import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { LogOut, Package, MapPin, User as UserIcon } from 'lucide-react';
import useAuth from '../../hooks/useAuth';

const Account = () => {
  const { isAuthenticated, user, handleLogout } = useAuth();
  const [activeSection, setActiveSection] = useState('profile');

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const menuItems = [
    { id: 'profile', label: 'Profile', icon: UserIcon },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
  ];

  const handleLogoutClick = async () => {
    await handleLogout();
    window.location.href = '/login';
  };

  return (
    <main
      style={{
        minHeight: 'calc(100vh - 300px)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '2rem 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>MY ACCOUNT</span>
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(1.85rem, 3.5vw, 2.35rem)',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: '0 0 0.35rem',
              letterSpacing: '1px',
            }}
          >
            Account Dashboard
          </h1>
          <p
            className="font-garamond"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              margin: 0,
            }}
          >
            Manage your profile and preferences
          </p>
        </div>

        {/* Two Column Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '280px 1fr',
            gap: '2rem',
          }}
        >
          {/* Left Sidebar */}
          <aside
            className="bg-theme-card"
            style={{
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid var(--border-light)',
              height: 'fit-content',
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.75rem 1rem',
                      background: activeSection === item.id ? 'var(--bg-secondary)' : 'transparent',
                      border: 'none',
                      borderRadius: '4px',
                      color: activeSection === item.id ? 'var(--text-gold)' : 'var(--text-primary)',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: activeSection === item.id ? '600' : '500',
                      transition: 'all 0.2s ease',
                      textAlign: 'left',
                      fontFamily: 'var(--font-sans)',
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== item.id) {
                        e.currentTarget.style.background = 'rgba(197, 145, 74, 0.08)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeSection !== item.id) {
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    <Icon size={18} />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div style={{ borderTop: '1px solid var(--border-light)', margin: '1rem 0', paddingTop: '1rem' }}>
              <button
                onClick={handleLogoutClick}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: 'transparent',
                  border: 'none',
                  borderRadius: '4px',
                  color: '#C41E3A',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  transition: 'all 0.2s ease',
                  textAlign: 'left',
                  fontFamily: 'var(--font-sans)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(196, 30, 58, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </aside>

          {/* Right Content Panel */}
          <div>
            {activeSection === 'profile' && (
              <div
                className="bg-theme-card"
                style={{
                  padding: '2rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <h2
                  className="font-serif"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    margin: '0 0 1.5rem',
                  }}
                >
                  Profile Information
                </h2>

                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        color: 'var(--text-secondary)',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Full Name
                    </label>
                    <div
                      style={{
                        padding: '0.75rem 1rem',
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--border-light)',
                        borderRadius: '4px',
                        color: 'var(--text-primary)',
                        fontSize: '1rem',
                      }}
                    >
                      {user?.name || 'Not provided'}
                    </div>
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        color: 'var(--text-secondary)',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Email Address
                    </label>
                    <div
                      style={{
                        padding: '0.75rem 1rem',
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--border-light)',
                        borderRadius: '4px',
                        color: 'var(--text-primary)',
                        fontSize: '1rem',
                      }}
                    >
                      {user?.email || 'Not provided'}
                    </div>
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        color: 'var(--text-secondary)',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Member Since
                    </label>
                    <div
                      style={{
                        padding: '0.75rem 1rem',
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--border-light)',
                        borderRadius: '4px',
                        color: 'var(--text-primary)',
                        fontSize: '1rem',
                      }}
                    >
                      {new Date().toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'orders' && (
              <div
                className="bg-theme-card"
                style={{
                  padding: '2rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  textAlign: 'center',
                }}
              >
                <Package size={48} style={{ color: 'var(--border-light)', margin: '0 auto 1rem', display: 'block' }} />
                <h2
                  className="font-serif"
                  style={{
                    fontSize: '1.5rem',
                    color: 'var(--text-primary)',
                    margin: '0 0 0.5rem',
                  }}
                >
                  No Orders Yet
                </h2>
                <p
                  className="font-garamond"
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    margin: 0,
                  }}
                >
                  Your order history will appear here once you make a purchase.
                </p>
              </div>
            )}

            {activeSection === 'addresses' && (
              <div
                className="bg-theme-card"
                style={{
                  padding: '2rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  textAlign: 'center',
                }}
              >
                <MapPin size={48} style={{ color: 'var(--border-light)', margin: '0 auto 1rem', display: 'block' }} />
                <h2
                  className="font-serif"
                  style={{
                    fontSize: '1.5rem',
                    color: 'var(--text-primary)',
                    margin: '0 0 0.5rem',
                  }}
                >
                  No Addresses Saved
                </h2>
                <p
                  className="font-garamond"
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    margin: 0,
                  }}
                >
                  Add delivery addresses during checkout for quick ordering.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Account;
