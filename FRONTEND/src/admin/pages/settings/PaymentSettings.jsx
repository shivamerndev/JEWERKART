import React, { useState } from 'react';
import { Save, CreditCard, ShieldCheck } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const PaymentSettings = () => {
  const [razorpayKey, setRazorpayKey] = useState('rzp_live_94820199482');
  const [razorpaySecret, setRazorpaySecret] = useState('••••••••••••••••••••••••');
  const [codEnabled, setCodEnabled] = useState(true);
  const [codMaxLimit, setCodMaxLimit] = useState('49999'); // Under 50k as per Indian bullion cash laws
  const [panMandatoryLimit, setPanMandatoryLimit] = useState('200000'); // > 2 Lakh requires PAN

  const handleSave = (e) => {
    e.preventDefault();
    alert('Payment gateway configurations updated.');
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Payment Gateways & Invoicing Setup"
        subtitle="Manage Razorpay credentials, UPI autopay, Cash on Delivery limits and statutory PAN requirements"
        breadcrumbs={[
          { label: 'Settings', to: '/admin/settings' },
          { label: 'Payment' }
        ]}
        actions={
          <button
            onClick={handleSave}
            className="flex items-center space-x-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-lg text-xs transition-colors shadow-xs"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Payment Setup</span>
          </button>
        }
      />

      <form onSubmit={handleSave} className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs max-w-3xl space-y-5 text-xs">
        <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-2">
          Razorpay Payment Engine
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-stone-700 font-semibold mb-1">Razorpay Key ID</label>
            <input
              type="text"
              value={razorpayKey}
              onChange={(e) => setRazorpayKey(e.target.value)}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg font-mono focus:outline-hidden"
            />
          </div>
          <div>
            <label className="block text-stone-700 font-semibold mb-1">Razorpay Key Secret</label>
            <input
              type="password"
              value={razorpaySecret}
              onChange={(e) => setRazorpaySecret(e.target.value)}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg font-mono focus:outline-hidden"
            />
          </div>
        </div>

        <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-2 pt-3">
          Statutory Bullion Compliance Rules (RBI & IT Dept)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-stone-700 font-semibold mb-1">
              Mandatory PAN Verification Cutoff (₹)
            </label>
            <input
              type="number"
              value={panMandatoryLimit}
              onChange={(e) => setPanMandatoryLimit(e.target.value)}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg font-mono focus:outline-hidden"
            />
            <p className="text-[10px] text-stone-400 mt-1">Orders above ₹2,00,000 legally require Customer PAN</p>
          </div>

          <div>
            <label className="block text-stone-700 font-semibold mb-1">
              Maximum COD Transaction Ceiling (₹)
            </label>
            <input
              type="number"
              value={codMaxLimit}
              onChange={(e) => setCodMaxLimit(e.target.value)}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg font-mono focus:outline-hidden"
            />
            <p className="text-[10px] text-stone-400 mt-1">Cash on Delivery prohibited above ₹49,999</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentSettings;
