import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, Calendar, Shield, CheckCircle2, Lock, ArrowLeft } from 'lucide-react';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState({
    fullName: user?.name || 'Priya Sharma',
    email: user?.email || 'priya.sharma@example.com',
    phone: '+91 98765 43210',
    birthday: '1995-11-14',
    anniversary: '2021-02-18',
  });

  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-secondary)',
        padding: '2.5rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', fontSize: '0.85rem' }}>
          <Link to="/account" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Account</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Patron Profile</span>
        </div>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              ROYAL PATRON PRIVILEGES
            </span>
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: '0 0 0.5rem',
            }}
          >
            Personal Profile & Preferences
          </h1>
          <p className="font-garamond" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>
            Manage your personal credentials, contact points, and milestone celebration dates.
          </p>
        </div>

        {/* Profile Card */}
        <div
          className="bg-theme-card"
          style={{
            borderRadius: '16px',
            border: '1px solid var(--border-light)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          {saved && (
            <div
              style={{
                backgroundColor: 'var(--theme-champagne)',
                border: '1px solid var(--border-light)',
                borderRadius: '8px',
                padding: '0.85rem 1.25rem',
                color: 'var(--text-primary)',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '2rem',
              }}
            >
              <CheckCircle2 size={18} style={{ color: 'var(--theme-gold)' }} />
              <span>Patron profile updated successfully in atelier records.</span>
            </div>
          )}

          <form onSubmit={handleSave}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Full Legal Name
                </label>
                <div style={{ position: 'relative' }}>
                  <User size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                  <input
                    type="text"
                    required
                    value={profileData.fullName}
                    onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.5rem',
                      borderRadius: '8px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--bg-card-warm)',
                      boxSizing: 'border-box',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Email Address
                </label>
                <div style={{ position: 'relative' }}>
                  <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                  <input
                    type="email"
                    required
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.5rem',
                      borderRadius: '8px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--bg-card-warm)',
                      boxSizing: 'border-box',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Contact Mobile (For Delivery OTP)
                </label>
                <div style={{ position: 'relative' }}>
                  <Phone size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                  <input
                    type="tel"
                    required
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.5rem',
                      borderRadius: '8px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--bg-card-warm)',
                      boxSizing: 'border-box',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Wedding Anniversary (Celebration Gift)
                </label>
                <div style={{ position: 'relative' }}>
                  <Calendar size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                  <input
                    type="date"
                    value={profileData.anniversary}
                    onChange={(e) => setProfileData({ ...profileData, anniversary: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.5rem',
                      borderRadius: '8px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--bg-card-warm)',
                      boxSizing: 'border-box',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-light)', paddingTop: '1.75rem' }}>
              <Link to="/forgot-password" style={{ color: 'var(--theme-gold)', fontSize: '0.85rem', textDecoration: 'none', fontWeight: '500' }}>
                <Lock size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Update Account Password
              </Link>

              <button
                type="submit"
                className="btn-slate"
                style={{
                  padding: '0.85rem 2rem',
                  borderRadius: '6px',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                }}
              >
                Save Profile Changes
              </button>
            </div>
          </form>
        </div>

      </div>
    </main>
  );
};

export default Profile;
