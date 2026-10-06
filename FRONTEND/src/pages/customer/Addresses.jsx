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
      className="min-h-screen pt-10 px-6 pb-20"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-[0.85rem]">
          <Link to="/account" className="no-underline" style={{ color: 'var(--text-secondary)' }}>Account</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Address Book</span>
        </div>

        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              SAVED DESTINATIONS
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
              color: 'var(--text-primary)',
            }}
          >
            Delivery Address Book
          </h1>
          <p className="font-garamond text-[1.1rem] m-0" style={{ color: 'var(--text-secondary)' }}>
            Manage verified residential and commercial locations for armored transit deliveries.
          </p>
        </div>

        {/* Header Action Button */}
        <div className="flex justify-end mb-6">
          {!showAddForm && (
            <button
              onClick={() => setShowAddForm(true)}
              className="btn-gold inline-flex items-center gap-2 py-2.5 px-5 rounded-md text-[0.9rem] cursor-pointer"
            >
              <Plus size={16} /> Add New Address
            </button>
          )}
        </div>

        {/* Add Address Form Modal / Box */}
        {showAddForm && (
          <div
            className="bg-theme-card rounded-2xl p-8 mb-10"
            style={{
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <h3 className="font-serif text-[1.25rem] mb-5" style={{ color: 'var(--text-primary)' }}>
              Add New Delivery Destination
            </h3>
            <form onSubmit={handleAdd}>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 mb-4">
                <div>
                  <label className="block text-[0.8rem] font-semibold mb-1.5">Full Recipient Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full p-2.5 rounded-md box-border outline-none"
                    style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-warm)' }}
                  />
                </div>
                <div>
                  <label className="block text-[0.8rem] font-semibold mb-1.5">Contact Mobile Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-2.5 rounded-md box-border outline-none"
                    style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-warm)' }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[0.8rem] font-semibold mb-1.5">Address Line / Mansion / Apartment</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full p-2.5 rounded-md box-border outline-none"
                  style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-warm)' }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-[0.8rem] font-semibold mb-1.5">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full p-2.5 rounded-md box-border outline-none"
                    style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-warm)' }}
                  />
                </div>
                <div>
                  <label className="block text-[0.8rem] font-semibold mb-1.5">State</label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full p-2.5 rounded-md box-border outline-none"
                    style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-warm)' }}
                  />
                </div>
                <div>
                  <label className="block text-[0.8rem] font-semibold mb-1.5">Pincode</label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full p-2.5 rounded-md box-border outline-none"
                    style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-warm)' }}
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button type="submit" className="btn-slate py-2.5 px-7 rounded-md cursor-pointer">
                  Save Destination
                </button>
                <button type="button" onClick={() => setShowAddForm(false)} className="btn-outline-dark py-2.5 px-6 rounded-md cursor-pointer">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Addresses Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(380px,1fr))] gap-6">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className="bg-theme-card rounded-2xl p-7 flex flex-col justify-between"
              style={{
                border: addr.isDefault ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <span className="badge-925 text-[8px]">{addr.tag}</span>
                    {addr.isDefault && (
                      <span className="text-[0.75rem] font-semibold" style={{ color: 'var(--theme-gold)' }}>
                        ★ Default Armored Destination
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => handleRemove(addr.id)}
                    aria-label="Delete address"
                    className="bg-transparent border-none cursor-pointer p-1"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <h3 className="font-serif text-[1.15rem] mb-1.5" style={{ color: 'var(--text-primary)' }}>
                  {addr.fullName}
                </h3>
                <p className="text-[0.9rem] leading-[1.5] mb-2" style={{ color: 'var(--text-secondary)' }}>
                  {addr.address}, {addr.city}, {addr.state} - <strong>{addr.pincode}</strong>
                </p>
                <p className="text-[0.85rem] mb-5" style={{ color: 'var(--text-secondary)' }}>
                  OTP Delivery Contact: <strong style={{ color: 'var(--text-primary)' }}>{addr.phone}</strong>
                </p>
              </div>

              {!addr.isDefault && (
                <div className="pt-4" style={{ borderTop: '1px solid var(--border-light)' }}>
                  <button
                    onClick={() => handleSetDefault(addr.id)}
                    className="bg-transparent border-none text-[0.85rem] font-semibold cursor-pointer p-0"
                    style={{
                      color: 'var(--theme-gold)',
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
