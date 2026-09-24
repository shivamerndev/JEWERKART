import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  MapPin, 
  Plus, 
  Check, 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Truck,
  CheckCircle2
} from 'lucide-react';

const SAVED_ADDRESSES = [
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

const CheckoutAddress = () => {
  const navigate = useNavigate();
  const [selectedAddressId, setSelectedAddressId] = useState(1);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [addresses, setAddresses] = useState(SAVED_ADDRESSES);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    state: 'Maharashtra',
    pincode: '',
    tag: 'Home',
  });

  const handleAddNew = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address || !formData.pincode) return;

    const newAddr = {
      id: Date.now(),
      ...formData,
      isDefault: false,
    };
    setAddresses([...addresses, newAddr]);
    setSelectedAddressId(newAddr.id);
    setShowNewAddressForm(false);
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-secondary)',
        padding: '2.5rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Stepper */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <Link to="/checkout" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
              }}
            >
              ✓
            </span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Review Bag</span>
          </Link>
          <ChevronRight size={16} style={{ color: 'var(--border-light)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-slate)',
                color: '#FEF0E0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                fontWeight: '700',
              }}
            >
              2
            </span>
            <span style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.9rem' }}>Shipping Address</span>
          </div>
          <ChevronRight size={16} style={{ color: 'var(--border-light)' }} />
          <Link to="/checkout/payment" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
              }}
            >
              3
            </span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Payment</span>
          </Link>
        </div>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              STEP 2 OF 3
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
            Delivery Destination
          </h1>
          <p className="font-garamond" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>
            Specify where our armored logistics partner should deliver your hallmarked parcel.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem' }}>
          
          {/* Saved Addresses List */}
          <div style={{ gridColumn: 'span 12' }} className="md:col-span-7">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {addresses.map((addr) => (
                <div
                  key={addr.id}
                  onClick={() => setSelectedAddressId(addr.id)}
                  className="bg-theme-card"
                  style={{
                    borderRadius: '12px',
                    border: selectedAddressId === addr.id ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                    padding: '1.5rem',
                    boxShadow: selectedAddressId === addr.id ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="badge-925" style={{ fontSize: '8px' }}>{addr.tag}</span>
                      <h3 className="font-serif" style={{ fontSize: '1.05rem', margin: 0, color: 'var(--text-primary)' }}>
                        {addr.fullName}
                      </h3>
                    </div>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        border: selectedAddressId === addr.id ? '6px solid var(--theme-gold)' : '2px solid var(--border-light)',
                        backgroundColor: '#FFF',
                      }}
                    />
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.5', margin: '0 0 0.5rem' }}>
                    {addr.address}, {addr.city}, {addr.state} - <strong>{addr.pincode}</strong>
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>
                    Phone: <strong style={{ color: 'var(--text-primary)' }}>{addr.phone}</strong>
                  </p>
                </div>
              ))}

              {/* Add New Address Form or Button */}
              {!showNewAddressForm ? (
                <button
                  onClick={() => setShowNewAddressForm(true)}
                  className="btn-outline-dark"
                  style={{
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '1px dashed var(--border-light)',
                    backgroundColor: 'var(--bg-card-warm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                  }}
                >
                  <Plus size={16} /> Add New Delivery Address
                </button>
              ) : (
                <form
                  onSubmit={handleAddNew}
                  className="bg-theme-card"
                  style={{
                    borderRadius: '12px',
                    border: '1px solid var(--border-light)',
                    padding: '1.75rem',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h3 className="font-serif" style={{ fontSize: '1.15rem', margin: '0 0 1.25rem', color: 'var(--text-primary)' }}>
                    Add New Address
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.35rem' }}>Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        style={{ width: '100%', padding: '0.65rem', borderRadius: '6px', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-warm)', boxSizing: 'border-box' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.35rem' }}>Mobile Number</label>
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
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.35rem' }}>Street Address / Flat / Floor</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      style={{ width: '100%', padding: '0.65rem', borderRadius: '6px', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card-warm)', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
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
                    <button type="submit" className="btn-slate" style={{ padding: '0.65rem 1.5rem', borderRadius: '6px', cursor: 'pointer' }}>
                      Save Address
                    </button>
                    <button type="button" onClick={() => setShowNewAddressForm(false)} className="btn-outline-dark" style={{ padding: '0.65rem 1.5rem', borderRadius: '6px', cursor: 'pointer' }}>
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Action Box */}
          <div style={{ gridColumn: 'span 12' }} className="md:col-span-5">
            <div
              className="bg-theme-card"
              style={{
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                padding: '2rem',
                boxShadow: 'var(--shadow-sm)',
                position: 'sticky',
                top: '2rem',
              }}
            >
              <h2 className="font-serif" style={{ fontSize: '1.25rem', margin: '0 0 1.25rem', color: 'var(--text-primary)' }}>
                Delivery Protocol
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                All Jewerkart deliveries are managed through armored courier vehicles. A confidential one-time password (OTP) is sent via SMS to verify identity upon handover.
              </p>

              <button
                onClick={() => navigate('/checkout/payment')}
                className="btn-slate"
                style={{
                  width: '100%',
                  padding: '0.95rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  marginBottom: '1rem',
                }}
              >
                Proceed to Payment <ArrowRight size={16} />
              </button>

              <div style={{ textAlign: 'center' }}>
                <Link to="/checkout" style={{ color: 'var(--theme-gold)', fontSize: '0.85rem', textDecoration: 'none' }}>
                  ← Return to Review Order
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default CheckoutAddress;
