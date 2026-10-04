import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Printer,
  Truck,
  CheckCircle2,
  Clock,
  ShieldCheck,
  CreditCard,
  MapPin,
  User,
  Phone,
  Mail,
  FileText
} from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const AdminOrderDetail = () => {
  const { id } = useParams();
  const orderId = id || 'JK-10492';

  const [fulfillmentStatus, setFulfillmentStatus] = useState('Processing');

  const order = {
    id: orderId,
    placedAt: '04 Oct 2026, 04:30 PM',
    customer: {
      name: 'Ananya Sharma',
      email: 'ananya.sharma@gmail.com',
      phone: '+91 98201 45892',
      customerSince: 'Dec 2024',
      totalOrders: 4
    },
    shippingAddress: {
      addressLine: 'Flat 402, Sea Pearl Towers, Bandra West',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400050',
      country: 'India'
    },
    payment: {
      method: 'Razorpay UPI (Axis Bank)',
      transactionId: 'pay_Or02kL90aZs81v',
      status: 'Captured & Verified',
      paidAt: '04 Oct 2026, 04:31 PM'
    },
    logistics: {
      carrier: 'BlueDart Air Express (Insured Vault Transit)',
      trackingAwb: 'BLUEDART-8492019',
      estimatedDelivery: '06 Oct 2026'
    },
    items: [
      {
        sku: 'JW-MGL-002',
        name: '22K Royal Traditional Gold Mangalsutra',
        purity: '22K Yellow Gold (916 BIS)',
        grossWeight: '8.400 g',
        hallmarkId: 'BIS-916-MH-4401',
        quantity: 1,
        unitPrice: 62400,
        makingCharges: 7488,
        gst: 2096,
        total: 74200
      }
    ],
    summary: {
      subtotal: 62400,
      makingCharges: 7488,
      gst3Percent: 2096,
      transitInsurance: 1500,
      discount: -1500,
      grandTotal: 74200
    }
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title={`Order Details: ${order.id}`}
        subtitle={`Order placed on ${order.placedAt} • Payment: ${order.payment.status}`}
        breadcrumbs={[
          { label: 'Orders', to: '/admin/orders' },
          { label: order.id }
        ]}
        actions={
          <>
            <Link
              to="/admin/orders"
              className="flex items-center space-x-1.5 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </Link>
            <button className="flex items-center space-x-1.5 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-medium transition-colors">
              <Printer className="w-3.5 h-3.5" />
              <span>Print Tax Invoice</span>
            </button>
            <button className="flex items-center space-x-1.5 px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-lg text-xs transition-colors shadow-xs">
              <Truck className="w-3.5 h-3.5" />
              <span>Generate Shipping Manifest</span>
            </button>
          </>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs">
        {/* Left 2 Cols: Order Items & Pricing Breakdown */}
        <div className="lg:col-span-2 space-y-6">
          {/* Items Table */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs">
            <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-3 flex items-center justify-between">
              <span>Ordered Jewelry & Certificate Verification</span>
              <span className="text-[11px] text-emerald-700 font-semibold flex items-center">
                <ShieldCheck className="w-3.5 h-3.5 mr-1" /> Transit Insured (Full Value)
              </span>
            </h3>

            <div className="mt-4 divide-y divide-stone-100">
              {order.items.map((item, idx) => (
                <div key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-lg">
                      ✨
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-xs">{item.name}</h4>
                      <p className="text-[11px] text-stone-500 font-mono">
                        SKU: {item.sku} • {item.purity} • {item.grossWeight}
                      </p>
                      <p className="text-[10px] text-amber-700 font-semibold mt-0.5">
                        Hallmark UID: {item.hallmarkId}
                      </p>
                    </div>
                  </div>

                  <div className="text-right sm:text-right">
                    <span className="text-sm font-bold text-stone-900 font-mono">
                      ₹{item.total.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-stone-400 block">
                      Qty: {item.quantity} (Incl. GST)
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Financial Summary calculation */}
            <div className="mt-6 border-t border-stone-100 pt-4 flex justify-end">
              <div className="w-full sm:w-72 space-y-2 text-stone-600">
                <div className="flex justify-between">
                  <span>Bullion Net Price:</span>
                  <span className="font-mono text-stone-800">₹{order.summary.subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Making & Artistry Charges:</span>
                  <span className="font-mono text-stone-800">₹{order.summary.makingCharges.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (3% Precious Metals):</span>
                  <span className="font-mono text-stone-800">₹{order.summary.gst3Percent.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Complimentary Insured Courier:</span>
                  <span>FREE</span>
                </div>
                <div className="border-t border-stone-200 pt-2 flex justify-between font-bold text-sm text-stone-900">
                  <span>Grand Total Paid:</span>
                  <span className="font-mono text-amber-900">₹{order.summary.grandTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fulfillment Status Control */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs">
            <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-3">
              Fulfillment Workflow Stage
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Pending', 'Processing', 'Hallmarked', 'Shipped', 'Delivered', 'Cancelled'].map((st) => (
                <button
                  key={st}
                  onClick={() => setFulfillmentStatus(st)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    fulfillmentStatus === st
                      ? 'bg-stone-900 text-stone-100 shadow-xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right 1 Col: Customer & Shipping Details */}
        <div className="space-y-6">
          {/* Customer 360 Card */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-2">
              Customer Profile
            </h3>
            <div>
              <p className="font-bold text-stone-900 text-xs">{order.customer.name}</p>
              <p className="text-[11px] text-stone-500 flex items-center mt-1">
                <Mail className="w-3.5 h-3.5 mr-1 text-stone-400" />
                {order.customer.email}
              </p>
              <p className="text-[11px] text-stone-500 flex items-center mt-1">
                <Phone className="w-3.5 h-3.5 mr-1 text-stone-400" />
                {order.customer.phone}
              </p>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-2">
              Delivery Address
            </h3>
            <div className="text-stone-700 leading-relaxed text-xs">
              <p>{order.shippingAddress.addressLine}</p>
              <p>{order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}</p>
              <p className="font-semibold">{order.shippingAddress.country}</p>
            </div>
          </div>

          {/* Payment & Logistics */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-2">
              Payment & Security
            </h3>
            <div className="space-y-1 text-stone-600 text-[11px]">
              <p><strong className="text-stone-800">Method:</strong> {order.payment.method}</p>
              <p><strong className="text-stone-800">Txn Ref:</strong> <span className="font-mono">{order.payment.transactionId}</span></p>
              <p><strong className="text-stone-800">Verified at:</strong> {order.payment.paidAt}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetail;
