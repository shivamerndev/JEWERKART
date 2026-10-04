import React, { useState } from 'react';
import { Truck, ShieldCheck, CheckCircle2, ExternalLink, RefreshCw } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const initialCarriers = [
  {
    id: 'carrier-1',
    name: 'BlueDart Air Express (Jewellery Secure)',
    type: 'Air Express Vault',
    activeShipments: 14,
    insuranceCover: 'Up to ₹25 Lakhs per consignment',
    avgDeliveryDays: '1-2 Days',
    apiStatus: 'Connected & Live',
    webhookStatus: 'Healthy'
  },
  {
    id: 'carrier-2',
    name: 'Sequel Logistics (Armoured Transit)',
    type: 'High-Value Armoured Dedicated',
    activeShipments: 3,
    insuranceCover: 'Up to ₹1 Crore per van',
    avgDeliveryDays: 'Same-day / Next-day Metro',
    apiStatus: 'Connected & Live',
    webhookStatus: 'Healthy'
  },
  {
    id: 'carrier-3',
    name: 'Delhivery Surface & Express',
    type: 'Standard Parcel & Silver',
    activeShipments: 22,
    insuranceCover: 'Up to ₹50,000 (Silver & Fashion)',
    avgDeliveryDays: '2-4 Days',
    apiStatus: 'Connected & Live',
    webhookStatus: 'Healthy'
  }
];

const ShippingList = () => {
  const [carriers, setCarriers] = useState(initialCarriers);

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Shipping & Carrier Logistics Integrations"
        subtitle="Manage secure armoured couriers, BlueDart Air Express pipelines and transit insurance policies"
        breadcrumbs={[{ label: 'Shipping' }]}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {carriers.map((c) => (
          <div key={c.id} className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs text-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="p-2 rounded-lg bg-amber-50 text-amber-700">
                <Truck className="w-5 h-5" />
              </span>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full font-bold text-[10px]">
                {c.apiStatus}
              </span>
            </div>

            <div>
              <h3 className="text-sm font-bold text-stone-900">{c.name}</h3>
              <p className="text-stone-400 text-[11px] mt-0.5">{c.type}</p>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-stone-100 text-stone-600">
              <div className="flex justify-between">
                <span>In-Flight Shipments:</span>
                <span className="font-bold text-stone-900 font-mono">{c.activeShipments} packages</span>
              </div>
              <div className="flex justify-between">
                <span>Transit SLA:</span>
                <span className="font-medium text-stone-800">{c.avgDeliveryDays}</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span>Insurance Limit:</span>
                <span className="text-emerald-700 font-semibold">{c.insuranceCover}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
              <span className="text-stone-400 text-[10px]">Webhook: {c.webhookStatus}</span>
              <button className="text-amber-700 font-semibold hover:underline flex items-center text-[11px]">
                <span>Configure Carrier</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShippingList;
