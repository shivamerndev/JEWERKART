import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Plus, Trash2, Edit3, CheckCircle2, ShieldCheck } from 'lucide-react';

const INITIAL_ADDRESSES = [
  {
    id: 1,
    tag: 'Primary Residence',
    fullName: 'Priya Sharma',
    phone: '+91 98765 43210',
    address: 'Flat 402, Royale Meadows, 14th Cross, Bandra West',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400050',
    isDefault: true,
  },
  {
    id: 2,
    tag: 'Corporate Studio',
    fullName: 'Priya Sharma',
    phone: '+91 98765 43210',
    address: 'Suite 901, Signature Horizon Towers, BKC',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400051',
    isDefault: false,
  }
];

const Addresses = () => {
  const [addresses, setAddresses] = useState(INITIAL_ADDRESSES);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    tag: 'Home',
    fullName: '',
    phone: '',
    address: '',
    city: '',
    state: 'Maharashtra',
    pincode: '',
  });

  const handleAdd = (e) => {
    e.preventDefault();
    const newAddress = {
      id: Date.now(),
      ...formData,
      isDefault: addresses.length === 0,
    };
    setAddresses([...addresses, newAddress]);
    setShowAddForm(false);
    setFormData({ tag: 'Home', fullName: '', phone: '', address: '', city: '', state: 'Maharashtra', pincode: '' });
  };

  const handleRemove = (id) => {
    setAddresses(addresses.filter(a => a.id !== id));
  };

  const handleSetDefault = (id) => {
    setAddresses(addresses.map(a => ({ ...a, isDefault: a.id === id })));
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-secondary)',
        padding: '2.5rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', fontSize: '0.85rem' }}>
          <Link to="/account" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Account</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Address Book</span>
        </div>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              SAVED DESTINATIONS
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
            Delivery Address Book
          </h1>
          <p className="font-garamond" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>
            Manage verified residential and commercial locations for armored transit deliveries.
          </p>
        </div>

        {/* Header Action Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
          {!showAddForm && (
            <button
              onClick={() => setShowAddForm(true)}
              className="btn-gold"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.65rem 1.25rem',
                borderRadius: '6px',
                fontSize: '0.9rem',
                cursor: 'pointer',
              }}
            >
              <Plus size={16} /> Add New Address
            </button>
          )}
        </div>

        {/* Add Address Form Modal / Box */}
        {showAddForm && (
          <div
            className="bg-theme-card"
            style={{
              borderRadius: '16px',
              border: '1px solid var(--border-light)',
              padding: '2rem',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '2.5rem',
            }}
          >
            <h3 className="font-serif" style={{ fontSize: '1.25rem', margin: '0 0 1.25rem', color: 'var(--text-primary)' }}>
              Add New Delivery Destination
            </h3>
            <form onSubmit={handleAdd}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.35rem' }}>Full Recipient Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem', borderRadius: '6px', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-warm)', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.35rem' }}>Contact Mobile Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem', borderRadius: '6px', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-warm)', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.35rem' }}>Address Line / Mansion / Apartment</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: '6px', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-warm)', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.35rem' }}>City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem', borderRadius: '6px', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-warm)', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.35rem' }}>State</label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem', borderRadius: '6px', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-warm)', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.35rem' }}>Pincode</label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem', borderRadius: '6px', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-warm)', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button type="submit" className="btn-slate" style={{ padding: '0.65rem 1.75rem', borderRadius: '6px', cursor: 'pointer' }}>
                  Save Destination
                </button>
                <button type="button" onClick={() => setShowAddForm(false)} className="btn-outline-dark" style={{ padding: '0.65rem 1.5rem', borderRadius: '6px', cursor: 'pointer' }}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Addresses Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '1.5rem' }}>
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className="bg-theme-card"
              style={{
                borderRadius: '14px',
                border: addr.isDefault ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="badge-925" style={{ fontSize: '8px' }}>{addr.tag}</span>
                    {addr.isDefault && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--theme-gold)', fontWeight: '600' }}>
                        ★ Default Armored Destination
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => handleRemove(addr.id)}
                    aria-label="Delete address"
                    style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '4px' }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <h3 className="font-serif" style={{ fontSize: '1.15rem', margin: '0 0 0.4rem', color: 'var(--text-primary)' }}>
                  {addr.fullName}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', margin: '0 0 0.5rem' }}>
                  {addr.address}, {addr.city}, {addr.state} - <strong>{addr.pincode}</strong>
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: '0 0 1.25rem' }}>
                  OTP Delivery Contact: <strong style={{ color: 'var(--text-primary)' }}>{addr.phone}</strong>
                </p>
              </div>

              {!addr.isDefault && (
                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                  <button
                    onClick={() => handleSetDefault(addr.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--theme-gold)',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    Set as Primary Destination →
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default Addresses;
