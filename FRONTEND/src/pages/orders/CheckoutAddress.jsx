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
      className="min-h-screen py-10 px-6 pb-20"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        
        {/* Stepper */}
        <div className="flex justify-center items-center gap-4 mb-12 flex-wrap">
          <Link to="/checkout" className="no-underline flex items-center gap-2">
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center text-[0.85rem]"
              style={{
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-light)',
              }}
            >
              ✓
            </span>
            <span className="text-[0.9rem]" style={{ color: 'var(--text-secondary)' }}>Review Bag</span>
          </Link>
          <ChevronRight size={16} style={{ color: 'var(--border-light)' }} />
          <div className="flex items-center gap-2">
            <span
              className="w-7 h-7 rounded-full text-[#FEF0E0] flex items-center justify-center text-[0.85rem] font-bold"
              style={{
                backgroundColor: 'var(--accent-slate)',
              }}
            >
              2
            </span>
            <span className="font-semibold text-[0.9rem]" style={{ color: 'var(--text-primary)' }}>Shipping Address</span>
          </div>
          <ChevronRight size={16} style={{ color: 'var(--border-light)' }} />
          <Link to="/checkout/payment" className="no-underline flex items-center gap-2">
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center text-[0.85rem]"
              style={{
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-light)',
              }}
            >
              3
            </span>
            <span className="text-[0.9rem]" style={{ color: 'var(--text-secondary)' }}>Payment</span>
          </Link>
        </div>

        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              STEP 2 OF 3
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
              color: 'var(--text-primary)',
            }}
          >
            Delivery Destination
          </h1>
          <p className="font-garamond text-[1.1rem] m-0" style={{ color: 'var(--text-secondary)' }}>
            Specify where our armored logistics partner should deliver your hallmarked parcel.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-10">
          
          {/* Saved Addresses List */}
          <div className="col-span-12 md:col-span-7">
            <div className="flex flex-col gap-5">
              {addresses.map((addr) => (
                <div
                  key={addr.id}
                  onClick={() => setSelectedAddressId(addr.id)}
                  className="bg-theme-card rounded-xl p-6 cursor-pointer transition-all duration-200 relative"
                  style={{
                    border: selectedAddressId === addr.id ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                    boxShadow: selectedAddressId === addr.id ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="badge-925 text-[8px]">{addr.tag}</span>
                      <h3 className="font-serif text-[1.05rem] m-0" style={{ color: 'var(--text-primary)' }}>
                        {addr.fullName}
                      </h3>
                    </div>
                    <div
                      className="w-5 h-5 rounded-full bg-white"
                      style={{
                        border: selectedAddressId === addr.id ? '6px solid var(--theme-gold)' : '2px solid var(--border-light)',
                      }}
                    />
                  </div>

                  <p className="text-[0.88rem] leading-[1.5] mb-2" style={{ color: 'var(--text-secondary)' }}>
                    {addr.address}, {addr.city}, {addr.state} - <strong>{addr.pincode}</strong>
                  </p>
                  <p className="text-[0.85rem] m-0" style={{ color: 'var(--text-secondary)' }}>
                    Phone: <strong style={{ color: 'var(--text-primary)' }}>{addr.phone}</strong>
                  </p>
                </div>
              ))}

              {/* Add New Address Form or Button */}
              {!showNewAddressForm ? (
                <button
                  onClick={() => setShowNewAddressForm(true)}
                  className="btn-outline-dark p-4 rounded-xl flex items-center justify-center gap-2 text-[0.95rem] cursor-pointer"
                  style={{
                    border: '1px dashed var(--border-light)',
                    backgroundColor: 'var(--bg-card-warm)',
                  }}
                >
                  <Plus size={16} /> Add New Delivery Address
                </button>
              ) : (
                <form
                  onSubmit={handleAddNew}
                  className="bg-theme-card rounded-xl p-7"
                  style={{
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h3 className="font-serif text-[1.15rem] mb-5" style={{ color: 'var(--text-primary)' }}>
                    Add New Address
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-[0.8rem] font-semibold mb-1.5">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full p-[0.65rem] rounded-md box-border outline-none"
                        style={{
                          border: '1px solid var(--border-light)',
                          backgroundColor: 'var(--bg-card-warm)',
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-[0.8rem] font-semibold mb-1.5">Mobile Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-[0.65rem] rounded-md box-border outline-none"
                        style={{
                          border: '1px solid var(--border-light)',
                          backgroundColor: 'var(--bg-card-warm)',
                        }}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-[0.8rem] font-semibold mb-1.5">Street Address / Flat / Floor</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full p-[0.65rem] rounded-md box-border outline-none"
                      style={{
                        border: '1px solid var(--border-light)',
                        backgroundColor: 'var(--bg-card-warm)',
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                    <div>
                      <label className="block text-[0.8rem] font-semibold mb-1.5">City</label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full p-[0.65rem] rounded-md box-border outline-none"
                        style={{
                          border: '1px solid var(--border-light)',
                          backgroundColor: 'var(--bg-card-warm)',
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-[0.8rem] font-semibold mb-1.5">State</label>
                      <input
                        type="text"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full p-[0.65rem] rounded-md box-border outline-none"
                        style={{
                          border: '1px solid var(--border-light)',
                          backgroundColor: 'var(--bg-card-warm)',
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-[0.8rem] font-semibold mb-1.5">Pincode</label>
                      <input
                        type="text"
                        required
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        className="w-full p-[0.65rem] rounded-md box-border outline-none"
                        style={{
                          border: '1px solid var(--border-light)',
                          backgroundColor: 'var(--bg-card-warm)',
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button type="submit" className="btn-slate py-[0.65rem] px-6 rounded-md cursor-pointer">
                      Save Address
                    </button>
                    <button type="button" onClick={() => setShowNewAddressForm(false)} className="btn-outline-dark py-[0.65rem] px-6 rounded-md cursor-pointer">
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Action Box */}
          <div className="col-span-12 md:col-span-5">
            <div
              className="bg-theme-card rounded-2xl p-8 sticky top-8"
              style={{
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h2 className="font-serif text-[1.25rem] mb-5" style={{ color: 'var(--text-primary)' }}>
                Delivery Protocol
              </h2>
              <p className="text-[0.88rem] leading-[1.6] mb-6" style={{ color: 'var(--text-secondary)' }}>
                All Jewerkart deliveries are managed through armored courier vehicles. A confidential one-time password (OTP) is sent via SMS to verify identity upon handover.
              </p>

              <button
                onClick={() => navigate('/checkout/payment')}
                className="btn-slate w-full p-[0.95rem] rounded-lg font-semibold text-base flex items-center justify-center gap-2 cursor-pointer mb-4"
              >
                Proceed to Payment <ArrowRight size={16} />
              </button>

              <div className="text-center">
                <Link to="/checkout" className="text-[0.85rem] no-underline" style={{ color: 'var(--theme-gold)' }}>
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
