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
      className="min-h-[calc(100vh-300px)] py-8 px-6"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">MY ACCOUNT</span>
          </div>
          <h1
            className="font-serif font-semibold mb-1.5 tracking-[1px]"
            style={{
              fontSize: 'clamp(1.85rem, 3.5vw, 2.35rem)',
              color: 'var(--text-primary)',
            }}
          >
            Account Dashboard
          </h1>
          <p
            className="font-garamond text-[1.05rem] m-0"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            Manage your profile and preferences
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
          {/* Left Sidebar */}
          <aside
            className="bg-theme-card p-6 rounded-lg h-fit"
            style={{
              border: '1px solid var(--border-light)',
            }}
          >
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className="flex items-center gap-3 py-3 px-4 border-none rounded cursor-pointer text-[0.9rem] text-left transition-all duration-200"
                    style={{
                      background: activeSection === item.id ? 'var(--bg-secondary)' : 'transparent',
                      color: activeSection === item.id ? 'var(--text-gold)' : 'var(--text-primary)',
                      fontWeight: activeSection === item.id ? '600' : '500',
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

            <div
              className="my-4 pt-4"
              style={{ borderTop: '1px solid var(--border-light)' }}
            >
              <button
                onClick={handleLogoutClick}
                className="flex items-center gap-3 w-full py-3 px-4 bg-transparent border-none rounded text-[#C41E3A] cursor-pointer text-[0.9rem] font-semibold transition-all duration-200 text-left"
                style={{
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
                className="bg-theme-card p-8 rounded-lg"
                style={{
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <h2
                  className="font-serif text-[1.5rem] font-semibold mb-6"
                  style={{
                    color: 'var(--text-primary)',
                  }}
                >
                  Profile Information
                </h2>

                <div className="grid gap-6">
                  <div>
                    <label
                      className="block text-[0.85rem] font-semibold mb-2 uppercase tracking-[0.5px]"
                      style={{
                        color: 'var(--text-secondary)',
                      }}
                    >
                      Full Name
                    </label>
                    <div
                      className="py-3 px-4 rounded text-base"
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--border-light)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {user?.name || 'Not provided'}
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-[0.85rem] font-semibold mb-2 uppercase tracking-[0.5px]"
                      style={{
                        color: 'var(--text-secondary)',
                      }}
                    >
                      Email Address
                    </label>
                    <div
                      className="py-3 px-4 rounded text-base"
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--border-light)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {user?.email || 'Not provided'}
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-[0.85rem] font-semibold mb-2 uppercase tracking-[0.5px]"
                      style={{
                        color: 'var(--text-secondary)',
                      }}
                    >
                      Member Since
                    </label>
                    <div
                      className="py-3 px-4 rounded text-base"
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--border-light)',
                        color: 'var(--text-primary)',
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
                className="bg-theme-card p-8 rounded-lg text-center"
                style={{
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <Package
                  size={48}
                  className="mx-auto mb-4 block"
                  style={{ color: 'var(--border-light)' }}
                />
                <h2
                  className="font-serif text-[1.5rem] mb-2"
                  style={{
                    color: 'var(--text-primary)',
                  }}
                >
                  No Orders Yet
                </h2>
                <p
                  className="font-garamond text-base m-0"
                  style={{
                    color: 'var(--text-secondary)',
                  }}
                >
                  Your order history will appear here once you make a purchase.
                </p>
              </div>
            )}

            {activeSection === 'addresses' && (
              <div
                className="bg-theme-card p-8 rounded-lg text-center"
                style={{
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <MapPin
                  size={48}
                  className="mx-auto mb-4 block"
                  style={{ color: 'var(--border-light)' }}
                />
                <h2
                  className="font-serif text-[1.5rem] mb-2"
                  style={{
                    color: 'var(--text-primary)',
                  }}
                >
                  No Addresses Saved
                </h2>
                <p
                  className="font-garamond text-base m-0"
                  style={{
                    color: 'var(--text-secondary)',
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
