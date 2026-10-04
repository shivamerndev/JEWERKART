import React, { useState } from 'react';
import { Send, CheckCircle2, AlertTriangle, KeyRound, Search, Download } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const initialDeliveries = [
  {
    awb: 'BLUEDART-8492019',
    orderId: 'JK-10492',
    carrier: 'BlueDart Express',
    destination: 'Mumbai (400050)',
    otpVerificationRequired: true,
    otpStatus: 'OTP Dispatched to Client',
    stage: 'Out for Delivery',
    eta: 'Today by 07:00 PM'
  },
  {
    awb: 'SEQUEL-ARM-1120',
    orderId: 'JK-10470',
    carrier: 'Sequel Armoured Van',
    destination: 'Delhi NCR (110001)',
    otpVerificationRequired: true,
    otpStatus: 'Delivered (OTP Verified: 849210)',
    stage: 'Delivered',
    eta: 'Delivered at 02:45 PM'
  },
  {
    awb: 'DELHIVERY-9948271',
    orderId: 'JK-10490',
    carrier: 'Delhivery Surface',
    destination: 'Hyderabad (500081)',
    otpVerificationRequired: false,
    otpStatus: 'Standard Sign',
    stage: 'In Transit',
    eta: 'Tomorrow by 02:00 PM'
  }
];

const DeliveryList = () => {
  const [deliveries, setDeliveries] = useState(initialDeliveries);

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Delivery Manifest & Vault Dispatch Logs"
        subtitle="Track final-mile courier delivery handoffs, client security OTPs and RTO attempts"
        breadcrumbs={[{ label: 'Delivery' }]}
        actions={
          <button className="flex items-center space-x-1.5 px-3 py-2 bg-stone-900 hover:bg-stone-800 text-stone-100 rounded-lg text-xs font-medium transition-colors">
            <Download className="w-3.5 h-3.5" />
            <span>Export Delivery Manifest</span>
          </button>
        }
      />

      <div className="bg-white border border-stone-200 rounded-xl shadow-xs overflow-hidden">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-stone-50 text-stone-500 font-semibold border-b border-stone-200">
              <th className="p-3 pl-5">AWB Tracking No.</th>
              <th className="p-3">Order Ref</th>
              <th className="p-3">Carrier Partner</th>
              <th className="p-3">Destination Pincode</th>
              <th className="p-3">Delivery OTP Verification</th>
              <th className="p-3">Fulfillment Stage</th>
              <th className="p-3 pr-5 text-right">ETA / Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {deliveries.map((d) => (
              <tr key={d.awb} className="hover:bg-amber-50/20">
                <td className="p-3 pl-5 font-mono font-bold text-amber-800">{d.awb}</td>
                <td className="p-3 font-mono text-stone-800">{d.orderId}</td>
                <td className="p-3 font-medium text-stone-700">{d.carrier}</td>
                <td className="p-3 text-stone-600">{d.destination}</td>
                <td className="p-3">
                  <span className="flex items-center text-stone-800 font-semibold text-[11px]">
                    <KeyRound className="w-3.5 h-3.5 mr-1 text-amber-600" />
                    {d.otpStatus}
                  </span>
                </td>
                <td className="p-3">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      d.stage === 'Delivered'
                        ? 'bg-emerald-100 text-emerald-800'
                        : d.stage === 'Out for Delivery'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-sky-100 text-sky-800'
                    }`}
                  >
                    {d.stage}
                  </span>
                </td>
                <td className="p-3 pr-5 text-right font-medium text-stone-700">{d.eta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveryList;
