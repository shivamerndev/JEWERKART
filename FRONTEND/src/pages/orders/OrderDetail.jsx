import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Package, 
  MapPin, 
  CreditCard, 
  Download, 
  Truck, 
  CheckCircle2, 
  AlertCircle,
  RotateCcw,
  RefreshCw,
  XCircle,
  ShieldCheck,
  ChevronRight,
  ArrowLeft
} from 'lucide-react';
import { MOCK_ORDERS } from '../../utils/mockData';

const OrderDetail = () => {
  const { orderId } = useParams();
  const [downloading, setDownloading] = useState(false);

  const order = useMemo(() => {
    const found = MOCK_ORDERS.find(o => o.orderId.toLowerCase() === (orderId || '').toLowerCase());
    if (found) return found;
    return {
      orderId: orderId || 'JK-2026-894215',
      date: 'Sep 24, 2026',
      status: 'In Transit',
      courier: 'Sequel Armored Logistics (BlueDart Express)',
      trackingNumber: 'BLUEDART-SEC-9928174',
      estimatedDelivery: 'Sep 28, 2026',
      total: 17998,
      items: [
        {
          id: 1,
          name: 'Kundan Jhumka Earrings',
          purity: '925 Sterling Silver • 22K Gold Vermeil',
          price: 4999,
          quantity: 1,
          image: '/category_earrings.jpg',
        },
        {
          id: 3,
          name: 'Bridal Temple Heritage Necklace',
          purity: '800 Fine Silver with Temple Gold Polish',
          price: 12999,
          quantity: 1,
          image: '/category_necklace.jpg',
        }
      ],
      shippingAddress: {
        fullName: 'Priya Sharma',
        phone: '+91 98765 43210',
        address: 'Flat 402, Royale Meadows, 14th Cross, Bandra West',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400050',
      }
    };
  }, [orderId]);

  const handleDownloadInvoice = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert(`Tax invoice for ${order.orderId} prepared for download.`);
    }, 1000);
  };

  return (
    <main
      className="min-h-screen pt-10 px-6 pb-20"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-[1080px] mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-[0.85rem]">
          <Link to="/account" className="no-underline" style={{ color: 'var(--text-secondary)' }}>Account</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <Link to="/account/orders" className="no-underline" style={{ color: 'var(--text-secondary)' }}>Orders</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{order.orderId}</span>
        </div>

        {/* Section Header */}
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <div className="divider-ornament justify-start mb-2">
              <span className="badge-925 text-[9px] tracking-[2px]">
                CONSIGNMENT DOSSIER
              </span>
            </div>
            <h1
              className="font-serif font-semibold mb-1"
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.3rem)',
                color: 'var(--text-primary)',
              }}
            >
              Order #{order.orderId}
            </h1>
            <p className="m-0 text-[0.9rem]" style={{ color: 'var(--text-secondary)' }}>
              Placed on {order.date} • Hand-finished at Jewerkart Flagship Atelier
            </p>
          </div>

          <div className="flex gap-2.5">
            <button
              onClick={handleDownloadInvoice}
              disabled={downloading}
              className="btn-gold inline-flex items-center gap-2 py-2.5 px-5 rounded-md text-[0.85rem] cursor-pointer"
            >
              <Download size={15} />
              {downloading ? 'Generating...' : 'Tax Invoice (PDF)'}
            </button>

            <Link
              to={`/track-order/${order.orderId}`}
              className="btn-slate inline-flex items-center gap-2 py-2.5 px-5 rounded-md text-[0.85rem] no-underline font-semibold"
            >
              <Truck size={15} /> Live Armored Tracking
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          
          {/* Left Column: Items & Return/Exchange Quick Actions */}
          <div className="col-span-12 md:col-span-8">
            <div
              className="bg-theme-card rounded-2xl p-8 mb-8"
              style={{
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h2 className="font-serif text-[1.25rem] m-0 mb-6" style={{ color: 'var(--text-primary)' }}>
                Ordered Heirloom Pieces
              </h2>

              <div className="flex flex-col gap-6">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-5 pb-6 items-center"
                    style={{
                      borderBottom: '1px solid var(--border-light)',
                    }}
                  >
                    <div
                      className="w-20 h-20 rounded-lg overflow-hidden shrink-0"
                      style={{ backgroundColor: 'var(--bg-circle-item)' }}
                    >
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="grow">
                      <h3 className="font-serif text-[1.1rem] m-0 mb-1" style={{ color: 'var(--text-primary)' }}>
                        {item.name}
                      </h3>
                      <p className="m-0 text-[0.82rem]" style={{ color: 'var(--text-secondary)' }}>
                        {item.purity}
                      </p>
                      <div className="text-[0.8rem] mt-1" style={{ color: 'var(--text-secondary)' }}>
                        Qty: <strong>{item.quantity}</strong> • Unit Price: ₹{item.price.toLocaleString('en-IN')}
                      </div>
                    </div>
                    <div className="text-[1.15rem] font-bold" style={{ color: 'var(--text-primary)' }}>
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Actions Links */}
              <div
                className="flex items-center justify-between mt-6 flex-wrap gap-4"
              >
                <div className="flex gap-4">
                  <Link
                    to={`/order/${order.orderId}/return`}
                    className="inline-flex items-center gap-1.5 text-[0.85rem] no-underline"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <RotateCcw size={14} style={{ color: 'var(--theme-gold)' }} />
                    15-Day Return
                  </Link>

                  <Link
                    to={`/order/${order.orderId}/exchange`}
                    className="inline-flex items-center gap-1.5 text-[0.85rem] no-underline"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <RefreshCw size={14} style={{ color: 'var(--theme-gold)' }} />
                    Size Exchange
                  </Link>
                </div>

                <Link
                  to={`/order/${order.orderId}/cancel`}
                  className="inline-flex items-center gap-1.5 text-[#991B1B] text-[0.85rem] no-underline"
                >
                  <XCircle size={14} />
                  Cancel Consignment
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Address & Payment Info */}
          <div className="col-span-12 md:col-span-4">
            
            {/* Delivery Address */}
            <div
              className="bg-theme-card rounded-2xl p-7 mb-6"
              style={{
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={18} style={{ color: 'var(--theme-gold)' }} />
                <h3 className="font-serif text-[1.15rem] m-0" style={{ color: 'var(--text-primary)' }}>
                  Delivery Destination
                </h3>
              </div>
              <p className="font-semibold text-[0.95rem] m-0 mb-1" style={{ color: 'var(--text-primary)' }}>
                {order.shippingAddress.fullName}
              </p>
              <p className="text-[0.85rem] leading-[1.5] m-0 mb-2" style={{ color: 'var(--text-secondary)' }}>
                {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}
              </p>
              <p className="text-[0.82rem] m-0" style={{ color: 'var(--text-secondary)' }}>
                Mobile: <strong style={{ color: 'var(--text-primary)' }}>{order.shippingAddress.phone}</strong>
              </p>
            </div>

            {/* Payment & Purity Guarantees */}
            <div
              className="bg-theme-card rounded-2xl p-7"
              style={{
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck size={18} style={{ color: 'var(--theme-gold)' }} />
                <h3 className="font-serif text-[1.15rem] m-0" style={{ color: 'var(--text-primary)' }}>
                  Patron Safeguards
                </h3>
              </div>
              <ul className="list-none p-0 m-0 flex flex-col gap-3 text-[0.82rem]" style={{ color: 'var(--text-secondary)' }}>
                <li>✓ BIS Hallmarked 925 Certification Included</li>
                <li>✓ Tamper-evident Holographic Security Seal</li>
                <li>✓ Transit Insured by Sequel Armored Services</li>
                <li>✓ Complimentary Annual Ultrasonic Spa Service</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
};

export default OrderDetail;
