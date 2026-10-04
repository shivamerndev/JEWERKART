import React, { useState } from 'react';
import { Plus, TicketPercent, Copy, Check, Calendar, Tag } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const initialCoupons = [
  {
    id: 'coup-1',
    code: 'FESTIVE15',
    type: 'Percentage',
    value: '15% OFF',
    minSpend: '₹25,000',
    validUntil: '31 Oct 2026',
    usageCount: 142,
    maxUsage: 500,
    status: 'Active'
  },
  {
    id: 'coup-2',
    code: 'FIRSTDIAMOND',
    type: 'Fixed Flat',
    value: '₹5,000 OFF',
    minSpend: '₹50,000',
    validUntil: '31 Dec 2026',
    usageCount: 88,
    maxUsage: 200,
    status: 'Active'
  },
  {
    id: 'coup-3',
    code: 'SILVERLOVE',
    type: 'Percentage',
    value: '10% OFF',
    minSpend: '₹4,000',
    validUntil: '15 Nov 2026',
    usageCount: 312,
    maxUsage: 1000,
    status: 'Active'
  }
];

const CouponList = () => {
  const [coupons, setCoupons] = useState(initialCoupons);
  const [showModal, setShowModal] = useState(false);
  const [newCode, setNewCode] = useState({
    code: '',
    type: 'Percentage',
    value: '',
    minSpend: '',
    validUntil: ''
  });

  const handleCreate = (e) => {
    e.preventDefault();
    setCoupons([
      ...coupons,
      {
        id: 'coup-' + Date.now(),
        ...newCode,
        usageCount: 0,
        maxUsage: 500,
        status: 'Active'
      }
    ]);
    setShowModal(false);
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Promotional Coupon Codes"
        subtitle="Create discount promo vouchers, cart threshold rules and expiration limits"
        breadcrumbs={[{ label: 'Coupons' }]}
        actions={
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center space-x-1.5 px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold rounded-lg text-xs transition-colors shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Create Coupon Code</span>
          </button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {coupons.map((coupon) => (
          <div key={coupon.id} className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs text-xs space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-amber-50 rounded-bl-full pointer-events-none"></div>

            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-900 font-mono font-bold text-sm tracking-wider rounded border border-amber-300">
                {coupon.code}
              </span>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full font-bold text-[10px]">
                {coupon.status}
              </span>
            </div>

            <div>
              <h3 className="text-xl font-black text-stone-900 font-serif">{coupon.value}</h3>
              <p className="text-stone-500 text-[11px] mt-0.5">Min Order: {coupon.minSpend}</p>
            </div>

            <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-stone-500 text-[11px]">
              <span>Used: {coupon.usageCount} / {coupon.maxUsage}</span>
              <span>Expires: {coupon.validUntil}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Simple Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 text-xs space-y-4">
            <h3 className="text-base font-bold text-stone-900 font-serif">New Promo Coupon</h3>
            <form onSubmit={handleCreate} className="space-y-3">
              <div>
                <label className="block text-stone-700 font-semibold mb-1">Coupon Voucher Code</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. BRIDAL2026"
                  value={newCode.code}
                  onChange={(e) => setNewCode({ ...newCode, code: e.target.value.toUpperCase() })}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg uppercase font-mono"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Discount Value</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 15% OFF or ₹2000"
                    value={newCode.value}
                    onChange={(e) => setNewCode({ ...newCode, value: e.target.value })}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Min Spend (₹)</label>
                  <input
                    type="text"
                    placeholder="e.g. ₹20,000"
                    value={newCode.minSpend}
                    onChange={(e) => setNewCode({ ...newCode, minSpend: e.target.value })}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="block text-stone-700 font-semibold mb-1">Expiry Date</label>
                <input
                  type="date"
                  value={newCode.validUntil}
                  onChange={(e) => setNewCode({ ...newCode, validUntil: e.target.value })}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                />
              </div>
              <div className="flex justify-end space-x-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-stone-300 rounded-lg font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-lg"
                >
                  Save Code
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CouponList;
