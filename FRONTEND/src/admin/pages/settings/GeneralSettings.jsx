import React, { useState } from 'react';
import { Save, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdminPageHeader from '../../components/AdminPageHeader';

const GeneralSettings = () => {
  const [formData, setFormData] = useState({
    storeName: 'Jewerkart Luxury Atelier Pvt Ltd',
    supportEmail: 'care@jewerkart.com',
    supportPhone: '+91 800 240 8899',
    gstin: '27AABCJ9941K1Z2',
    bisLicense: 'HM/C-7492019-BIS',
    panNumber: 'AABCJ9941K',
    registeredAddress: 'Level 12, Maker Chambers V, Nariman Point, Mumbai - 400021, Maharashtra, India',
    currency: 'INR (₹)',
    timezone: 'Asia/Kolkata (IST)',
    liveGoldPriceSync: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert('General settings saved successfully.');
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="General Business & Statutory Settings"
        subtitle="Manage legal company credentials, GST registration, BIS hallmark license and store defaults"
        breadcrumbs={[
          { label: 'Settings', to: '/admin/settings' },
          { label: 'General' }
        ]}
        actions={
          <button
            onClick={handleSave}
            className="flex items-center space-x-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-lg text-xs transition-colors shadow-xs"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save System Settings</span>
          </button>
        }
      />

      <form onSubmit={handleSave} className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs max-w-3xl space-y-5 text-xs">
        <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-2">
          Company Legal Identity & Taxation
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-stone-700 font-semibold mb-1">Registered Entity Name</label>
            <input
              type="text"
              name="storeName"
              value={formData.storeName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-stone-700 font-semibold mb-1">GSTIN Number (3% Gold Tax)</label>
            <input
              type="text"
              name="gstin"
              value={formData.gstin}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg font-mono focus:outline-hidden uppercase"
            />
          </div>

          <div>
            <label className="block text-stone-700 font-semibold mb-1">BIS Hallmarking License ID</label>
            <input
              type="text"
              name="bisLicense"
              value={formData.bisLicense}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg font-mono focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-stone-700 font-semibold mb-1">Corporate PAN</label>
            <input
              type="text"
              name="panNumber"
              value={formData.panNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg font-mono focus:outline-hidden uppercase"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-stone-700 font-semibold mb-1">Registered Bullion Vault Address</label>
            <textarea
              name="registeredAddress"
              rows={2}
              value={formData.registeredAddress}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
            />
          </div>
        </div>

        <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-2 pt-3">
          Customer Care & Localization
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-stone-700 font-semibold mb-1">Support Email</label>
            <input
              type="email"
              name="supportEmail"
              value={formData.supportEmail}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
            />
          </div>
          <div>
            <label className="block text-stone-700 font-semibold mb-1">Toll-Free Phone</label>
            <input
              type="text"
              name="supportPhone"
              value={formData.supportPhone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default GeneralSettings;
