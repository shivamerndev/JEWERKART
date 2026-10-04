import React, { useState } from 'react';
import { Save, Truck, ShieldCheck } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const ShippingSettings = () => {
  const [freeShippingThreshold, setFreeShippingThreshold] = useState('0'); // All precious jewelry is free insured shipping
  const [transitInsurancePercent, setTransitInsurancePercent] = useState('0.5'); // 0.5% premium
  const [otpMandatoryAbove, setOtpMandatoryAbove] = useState('15000'); // OTP mandatory above 15k

  const handleSave = (e) => {
    e.preventDefault();
    alert('Shipping settings saved.');
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Shipping, Insurance & Delivery Rules"
        subtitle="Configure logistics thresholds, complimentary insured shipping and delivery OTP verification"
        breadcrumbs={[
          { label: 'Settings', to: '/admin/settings' },
          { label: 'Shipping' }
        ]}
        actions={
          <button
            onClick={handleSave}
            className="flex items-center space-x-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-lg text-xs transition-colors shadow-xs"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Shipping Rules</span>
          </button>
        }
      />

      <form onSubmit={handleSave} className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs max-w-2xl space-y-4 text-xs">
        <div>
          <label className="block text-stone-700 font-semibold mb-1">
            Free Insured Shipping Cart Threshold (₹)
          </label>
          <input
            type="number"
            value={freeShippingThreshold}
            onChange={(e) => setFreeShippingThreshold(e.target.value)}
            className="w-full px-3 py-2 border border-stone-300 rounded-lg font-mono focus:outline-hidden"
          />
          <p className="text-[10px] text-stone-400 mt-1">Set to 0 to offer 100% complimentary delivery on all jewelry pieces</p>
        </div>

        <div>
          <label className="block text-stone-700 font-semibold mb-1">
            Armoured Van / OTP Mandatory Threshold (₹)
          </label>
          <input
            type="number"
            value={otpMandatoryAbove}
            onChange={(e) => setOtpMandatoryAbove(e.target.value)}
            className="w-full px-3 py-2 border border-stone-300 rounded-lg font-mono focus:outline-hidden"
          />
          <p className="text-[10px] text-stone-400 mt-1">Consignments above this value require delivery OTP verification</p>
        </div>

        <div>
          <label className="block text-stone-700 font-semibold mb-1">
            Transit Vault Insurance Premium Rate (%)
          </label>
          <input
            type="number"
            step="0.1"
            value={transitInsurancePercent}
            onChange={(e) => setTransitInsurancePercent(e.target.value)}
            className="w-full px-3 py-2 border border-stone-300 rounded-lg font-mono focus:outline-hidden"
          />
        </div>
      </form>
    </div>
  );
};

export default ShippingSettings;
