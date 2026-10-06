import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  Truck, 
  Package, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Copy, 
  Check, 
  AlertCircle,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

const TrackOrder = () => {
  const [searchParams] = useSearchParams();
  const initialOrderId = searchParams.get('id') || 'JK-2026-894215';

  const [orderIdInput, setOrderIdInput] = useState(initialOrderId);
  const [phoneInput, setPhoneInput] = useState('+91 98765 43210');
  const [isSearching, setIsSearching] = useState(false);
  const [copied, setCopied] = useState(false);

  // Mock tracked shipment data
  const [shipmentData, setShipmentData] = useState({
    orderId: initialOrderId,
    awbNumber: 'BLUEDART-SEC-9928174',
    courierPartner: 'Sequel Armored Logistics (BlueDart Express Partner)',
    carrierContact: '+91 1800 209 1234',
    recipientName: 'Priya Sharma',
    deliveryAddress: 'Flat 402, Royale Meadows, 14th Cross, Bandra West, Mumbai 400050',
    estimatedDelivery: 'Wednesday, Sep 28, 2026 by 8:00 PM',
    currentStatus: 'Out for Delivery',
    otpRequired: 'Yes (Shared via SMS to +91 98*** **210)',
    items: [
      {
        id: 1,
        name: 'Navratna Aura Oval Statement Studs',
        qty: 1,
        purity: '925 Sterling Silver',
        image: '/category_earrings.jpg',
      },
      {
        id: 2,
        name: 'Bridal Heritage Kundan Choker',
        qty: 1,
        purity: 'Handcrafted Basra Pearls & Kundan',
        image: '/category_necklace.jpg',
      },
    ],
    timeline: [
      {
        id: 1,
        title: 'Order Placed & Confirmed',
        timestamp: 'Sep 24, 2026 • 10:30 AM',
        location: 'Jewerkart Flagship Atelier, Mumbai',
        description: 'Order details verified and sent to master artisans for crafting & inspection.',
        status: 'completed',
      },
      {
        id: 2,
        title: 'BIS 925 Laser Hallmarking & QC',
        timestamp: 'Sep 24, 2026 • 04:15 PM',
        location: 'Govt. Approved Assay Center, Mumbai',
        description: 'Piece tested for 92.5% silver purity and laser hallmarked with hallmark certificate.',
        status: 'completed',
      },
      {
        id: 3,
        title: 'Luxury Velvet Packaging & Dispatch',
        timestamp: 'Sep 25, 2026 • 11:45 AM',
        location: 'Central Vault Fulfillment Center',
        description: 'Package placed into tamper-evident insured armored transit box.',
        status: 'completed',
      },
      {
        id: 4,
        title: 'Arrived at City Gateway Hub',
        timestamp: 'Sep 26, 2026 • 08:30 PM',
        location: 'Mumbai Air Logistics Gateway',
        description: 'Shipment cleared transit sorting and transferred to regional delivery van.',
        status: 'completed',
      },
      {
        id: 5,
        title: 'Out for Delivery',
        timestamp: 'Today • 09:15 AM',
        location: 'Bandra Delivery Center, Mumbai',
        description: 'Armored courier executive Rajesh K. (+91 98200 11223) is en route with your package.',
        status: 'active',
      },
      {
        id: 6,
        title: 'Delivered to Recipient',
        timestamp: 'Expected Today by 8:00 PM',
        location: 'Delivery Destination',
        description: 'Secret delivery OTP will be validated before final physical handover.',
        status: 'upcoming',
      },
    ],
  });

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setShipmentData((prev) => ({
        ...prev,
        orderId: orderIdInput.toUpperCase(),
      }));
    }, 700);
  };

  const handleCopyAwb = () => {
    navigator.clipboard.writeText(shipmentData.awbNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main
      className="min-h-[calc(100vh-250px)] pt-10 px-6 pb-20"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">LIVE SHIPMENT RADAR</span>
          </div>
          <h1
            className="font-serif font-semibold mb-1.5 tracking-[1px]"
            style={{
              fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)',
              color: 'var(--text-primary)',
            }}
          >
            Track Your Jewellery Order
          </h1>
          <p className="font-garamond text-[1.1rem] m-0" style={{ color: 'var(--text-secondary)' }}>
            Real-time armored logistics tracking with tamper-proof security
          </p>
        </div>

        {/* Tracking Input Search Card */}
        <div
          className="rounded-lg p-7 mb-10"
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <form onSubmit={handleTrackSubmit} className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_auto] gap-4 items-end">
            <div>
              <label className="block text-[0.8rem] font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                Order ID / AWB Number *
              </label>
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-secondary)' }} />
                <input
                  type="text"
                  placeholder="e.g. JK-2026-894215"
                  value={orderIdInput}
                  onChange={(e) => setOrderIdInput(e.target.value)}
                  required
                  className="w-full py-2.5 pr-3.5 pl-9 rounded bg-[#FFFDF9] text-[0.9rem] outline-none"
                  style={{
                    border: '1px solid var(--border-light)',
                  }}
                />
              </div>
            </div>

            <div>
              <label className="block text-[0.8rem] font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                Phone Number / Email
              </label>
              <input
                type="text"
                placeholder="+91 98765 43210"
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
                className="w-full py-2.5 px-3.5 rounded bg-[#FFFDF9] text-[0.9rem] outline-none"
                style={{
                  border: '1px solid var(--border-light)',
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isSearching}
              className="btn-slate py-3 px-7 text-[0.85rem] font-semibold tracking-[1px] uppercase rounded cursor-pointer whitespace-nowrap"
            >
              {isSearching ? 'Locating...' : 'Track Package'}
            </button>
          </form>
        </div>

        {/* Live Tracking Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.6fr)_minmax(320px,1fr)] gap-10 items-start">
          {/* LEFT: Interactive Step Timeline */}
          <div
            className="rounded-lg p-8"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            {/* Header info */}
            <div
              className="flex justify-between items-center mb-8 pb-5"
              style={{
                borderBottom: '1px solid var(--border-light)',
              }}
            >
              <div>
                <span className="badge-gold text-[10px] mb-1.5 inline-block">
                  {shipmentData.currentStatus.toUpperCase()}
                </span>
                <h3 className="font-serif text-[1.4rem] m-0 font-bold" style={{ color: 'var(--text-primary)' }}>
                  Delivery Progress
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[0.75rem] block" style={{ color: 'var(--text-secondary)' }}>Expected Arrival</span>
                <strong className="text-[0.95rem]" style={{ color: 'var(--theme-gold)' }}>
                  {shipmentData.estimatedDelivery}
                </strong>
              </div>
            </div>

            {/* Timeline Stepper */}
            <div className="relative pl-10">
              {/* Vertical connecting line */}
              <div
                className="absolute top-4 bottom-9 left-3.5 w-0.5 z-0"
                style={{
                  backgroundColor: 'var(--border-light)',
                }}
              />

              {shipmentData.timeline.map((step, idx) => {
                const isCompleted = step.status === 'completed';
                const isActive = step.status === 'active';
                const isUpcoming = step.status === 'upcoming';

                return (
                  <div key={step.id} className={`relative ${idx === shipmentData.timeline.length - 1 ? 'mb-0' : 'mb-8'}`}>
                    {/* Step Icon / Dot */}
                    <div
                      className={`absolute -left-10 top-0 w-[30px] h-[30px] rounded-full flex items-center justify-center z-1 transition-all duration-300 ${
                        isActive ? 'shadow-[0_0_0_4px_rgba(197,145,74,0.25)]' : ''
                      }`}
                      style={{
                        backgroundColor: isCompleted ? 'var(--theme-gold)' : isActive ? 'var(--text-primary)' : '#FFFFFF',
                        border: isUpcoming ? '2px solid var(--border-light)' : '2px solid transparent',
                        color: isUpcoming ? 'var(--text-secondary)' : '#FEF0E0',
                      }}
                    >
                      {isCompleted ? (
                        <Check size={16} />
                      ) : isActive ? (
                        <Truck size={16} style={{ color: '#FEF0E0' }} />
                      ) : (
                        <Clock size={14} style={{ color: 'var(--border-light)' }} />
                      )}
                    </div>

                    {/* Step Content */}
                    <div
                      className={`rounded-md ${isActive ? 'p-4' : 'p-0'}`}
                      style={{
                        backgroundColor: isActive ? 'var(--theme-champagne-light)' : 'transparent',
                        border: isActive ? '1px solid var(--border-light)' : 'none',
                      }}
                    >
                      <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                        <h4
                          className="m-0 text-[0.95rem] font-bold"
                          style={{
                            color: isActive ? 'var(--theme-gold)' : 'var(--text-primary)',
                          }}
                        >
                          {step.title}
                        </h4>
                        <span className="text-[0.75rem]" style={{ color: 'var(--text-secondary)' }}>
                          {step.timestamp}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-[0.75rem] mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                        <MapPin size={13} style={{ color: 'var(--theme-gold)' }} />
                        <span>{step.location}</span>
                      </div>

                      <p className="m-0 text-[0.85rem] leading-[1.5]" style={{ color: 'var(--text-secondary)' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Armored Logistics & Parcel Details */}
          <div className="flex flex-col gap-6">
            {/* Courier & Escort Card */}
            <div
              className="rounded-lg p-7"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h4 className="font-serif text-[1.1rem] m-0 mb-5 font-semibold" style={{ color: 'var(--text-primary)' }}>
                Consignment Details
              </h4>

              <div className="flex flex-col gap-4 text-[0.85rem]">
                <div>
                  <span className="text-[0.75rem] block" style={{ color: 'var(--text-secondary)' }}>Armored Carrier:</span>
                  <strong style={{ color: 'var(--text-primary)' }}>{shipmentData.courierPartner}</strong>
                </div>

                <div>
                  <span className="text-[0.75rem] block" style={{ color: 'var(--text-secondary)' }}>AWB Waybill Tracking Number:</span>
                  <div className="flex items-center gap-2 mt-1">
                    <code
                      className="py-1 px-2 rounded text-[0.85rem] font-semibold"
                      style={{
                        backgroundColor: 'var(--theme-champagne-light)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {shipmentData.awbNumber}
                    </code>
                    <button
                      type="button"
                      onClick={handleCopyAwb}
                      title="Copy AWB number"
                      className="bg-transparent border-none cursor-pointer p-1"
                      style={{
                        color: 'var(--theme-gold)',
                      }}
                    >
                      {copied ? <Check size={14} /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>

                <div className="pt-3" style={{ borderTop: '1px solid var(--border-light)' }}>
                  <span className="text-[0.75rem] block" style={{ color: 'var(--text-secondary)' }}>Delivery Verification:</span>
                  <strong className="text-[#059669]">{shipmentData.otpRequired}</strong>
                </div>

                <div className="pt-3" style={{ borderTop: '1px solid var(--border-light)' }}>
                  <span className="text-[0.75rem] block" style={{ color: 'var(--text-secondary)' }}>Destination Address:</span>
                  <p className="mt-1 mb-0 leading-[1.4]" style={{ color: 'var(--text-primary)' }}>
                    {shipmentData.recipientName}<br />
                    {shipmentData.deliveryAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Jewellery In This Shipment */}
            <div
              className="rounded-lg p-7"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h4 className="font-serif text-[1.1rem] m-0 mb-4 font-semibold" style={{ color: 'var(--text-primary)' }}>
                Jewellery In This Parcel
              </h4>

              <div className="flex flex-col gap-3">
                {shipmentData.items.map((item) => (
                  <div key={item.id} className="flex gap-3 items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded object-cover"
                      style={{ border: '1px solid var(--border-light)' }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="m-0 text-[0.85rem] font-semibold truncate" style={{ color: 'var(--text-primary)' }}>
                        {item.name}
                      </p>
                      <p className="m-0 text-[0.7rem]" style={{ color: 'var(--text-secondary)' }}>
                        Qty: {item.qty} • {item.purity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Need Assistance Card */}
            <div
              className="rounded-lg p-6"
              style={{
                backgroundColor: 'var(--theme-champagne-light)',
                border: '1px solid var(--border-light)',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Phone size={18} style={{ color: 'var(--theme-gold)' }} />
                <h4 className="m-0 text-[0.95rem] font-bold" style={{ color: 'var(--text-primary)' }}>
                  Concierge Support Desk
                </h4>
              </div>
              <p className="m-0 mb-4 text-[0.8rem] leading-[1.5]" style={{ color: 'var(--text-secondary)' }}>
                Have an urgent delivery inquiry or special instructions for the armored delivery officer?
              </p>
              <div className="flex gap-3">
                <Link
                  to="/contact"
                  className="btn-gold py-2 px-4 rounded text-[0.75rem] no-underline inline-flex items-center gap-1.5"
                >
                  Contact Concierge <ExternalLink size={12} />
                </Link>
                <Link
                  to="/faqs"
                  className="text-[0.75rem] inline-flex items-center underline"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Shipping FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TrackOrder;
