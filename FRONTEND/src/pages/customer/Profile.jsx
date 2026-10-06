import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, Calendar, CheckCircle2, Lock } from 'lucide-react';
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
    <main className="min-h-screen bg-bg-secondary px-6 pt-10 pb-20">
      <div className="max-w-[800px] mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm">
          <Link to="/account" className="text-text-secondary no-underline hover:text-text-primary transition">Account</Link>
          <span className="text-border-light">/</span>
          <span className="text-text-primary font-semibold">Patron Profile</span>
        </div>

        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              ROYAL PATRON PRIVILEGES
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary mb-2">
            Personal Profile & Preferences
          </h1>
          <p className="font-garamond text-text-secondary text-lg m-0">
            Manage your personal credentials, contact points, and milestone celebration dates.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-bg-card rounded-2xl border border-border-light p-6 md:p-10 shadow-sm">
          {saved && (
            <div className="bg-champagne border border-border-light rounded-lg p-3.5 text-text-primary text-sm flex items-center gap-2 mb-8">
              <CheckCircle2 size={18} className="text-gold" />
              <span>Patron profile updated successfully in atelier records.</span>
            </div>
          )}

          <form onSubmit={handleSave}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Full Legal Name
                </label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                  <input
                    type="text"
                    required
                    value={profileData.fullName}
                    onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-border-light bg-bg-card-warm text-sm text-text-primary outline-none focus:border-text-primary transition box-border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                  <input
                    type="email"
                    required
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-border-light bg-bg-card-warm text-sm text-text-primary outline-none focus:border-text-primary transition box-border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Contact Mobile (For Delivery OTP)
                </label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                  <input
                    type="tel"
                    required
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-border-light bg-bg-card-warm text-sm text-text-primary outline-none focus:border-text-primary transition box-border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Wedding Anniversary (Celebration Gift)
                </label>
                <div className="relative">
                  <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                  <input
                    type="date"
                    value={profileData.anniversary}
                    onChange={(e) => setProfileData({ ...profileData, anniversary: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-border-light bg-bg-card-warm text-sm text-text-primary outline-none focus:border-text-primary transition box-border"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-border-light pt-7">
              <Link to="/forgot-password" className="text-gold text-sm no-underline font-medium hover:underline flex items-center gap-1">
                <Lock size={14} className="inline align-middle" /> Update Account Password
              </Link>

              <button
                type="submit"
                className="btn-slate px-8 py-3.5 rounded-md font-semibold text-sm cursor-pointer w-full sm:w-auto transition"
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
