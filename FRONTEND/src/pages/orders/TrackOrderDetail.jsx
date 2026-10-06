import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Truck, 
  Package, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Phone, 
  Copy,
  ChevronRight,
  ArrowLeft
} from 'lucide-react';
import { MOCK_ORDERS } from '../../utils/mockData';

const TrackOrderDetail = () => {
  const { orderId } = useParams();

  const trackingInfo = useMemo(() => {
    return {
      orderId: orderId || 'JK-2026-894215',
      awb: 'BLUEDART-SEC-9928174',
      courier: 'Sequel Armored Logistics (BlueDart Apex Partner)',
      estimatedDate: 'Wednesday, Sep 28, 2026 by 8:00 PM',
      currentStatus: 'Out for Armored Delivery',
      driverPhone: '+91 98200 12345',
      driverName: 'Vikram Singh (Sequel Security Officer #882)',
      otpNotice: 'Secret OTP has been dispatched to +91 98*** **210. Share only after physical inspection.',
      timeline: [
        {
          title: 'Handcrafted & Assembled',
          desc: 'Finished by Master Karigar at Jewerkart Atelier, Mumbai',
          time: 'Sep 24, 2026 • 11:30 AM',
          completed: true,
        },
        {
          title: 'BIS 925 Laser Assay & Hallmarking',
          desc: 'Assayed by National Bureau of Indian Standards testing centre',
          time: 'Sep 25, 2026 • 03:15 PM',
          completed: true,
        },
        {
          title: 'Tamper-Evident Armored Handover',
          desc: 'Sealed inside barcode security pouch and assigned to Sequel Secure',
          time: 'Sep 26, 2026 • 09:40 AM',
          completed: true,
        },
        {
          title: 'Out for Delivery (Armored Van)',
          desc: 'En route with Sequel Security Officer Vikram Singh',
          time: 'Today • 08:30 AM',
          completed: true,
          current: true,
        },
        {
          title: 'Doorstep Handover & OTP Verification',
          desc: 'Consignment handed over to patron after secret SMS PIN check',
          time: 'Estimated by 08:00 PM Today',
          completed: false,
        },
      ]
    };
  }, [orderId]);

  return (
    <main
      className="min-h-screen pt-10 px-6 pb-20"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-[960px] mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-[0.85rem]">
          <Link to="/track-order" className="no-underline" style={{ color: 'var(--text-secondary)' }}>Tracking Portal</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{trackingInfo.orderId}</span>
        </div>

        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              LIVE ARMORED TELEMETRY
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
              color: 'var(--text-primary)',
            }}
          >
            Live Tracking #{trackingInfo.orderId}
          </h1>
          <p className="font-garamond text-[1.1rem] m-0" style={{ color: 'var(--text-secondary)' }}>
            Real-time transit telemetry powered by Sequel Secure Armored Logistics.
          </p>
        </div>

        {/* Status Card */}
        <div
          className="bg-theme-card rounded-2xl p-8 mb-8"
          style={{
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div
            className="flex justify-between items-center flex-wrap gap-4 pb-6 mb-7"
            style={{
              borderBottom: '1px solid var(--border-light)',
            }}
          >
            <div>
              <span className="text-[0.75rem] uppercase tracking-[1px]" style={{ color: 'var(--text-secondary)' }}>
                Estimated Delivery
              </span>
              <h2 className="font-serif text-[1.35rem] mt-1 mb-0" style={{ color: 'var(--text-primary)' }}>
                {trackingInfo.estimatedDate}
              </h2>
            </div>

            <div className="text-right">
              <span
                className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full text-[0.85rem] font-semibold"
                style={{
                  backgroundColor: 'var(--theme-champagne)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-primary)',
                }}
              >
                <Truck size={14} style={{ color: 'var(--theme-gold)' }} />
                {trackingInfo.currentStatus}
              </span>
            </div>
          </div>

          {/* OTP Alert */}
          <div
            className="rounded-lg p-4 flex items-center gap-3 mb-10"
            style={{
              backgroundColor: 'var(--theme-champagne-light)',
              border: '1px dashed var(--border-light)',
            }}
          >
            <ShieldCheck size={22} className="shrink-0" style={{ color: 'var(--theme-gold)' }} />
            <div className="text-[0.85rem]" style={{ color: 'var(--text-primary)' }}>
              <strong>Patron Security Notice:</strong> {trackingInfo.otpNotice}
            </div>
          </div>

          {/* Timeline Visual */}
          <div className="relative pl-10">
            <div
              className="absolute left-[11px] top-2.5 bottom-2.5 w-0.5"
              style={{
                backgroundColor: 'var(--border-light)',
              }}
            />

            <div className="flex flex-col gap-8">
              {trackingInfo.timeline.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Step Dot */}
                  <div
                    className="absolute -left-10 top-0 w-6 h-6 rounded-full flex items-center justify-center text-[#FEF0E0]"
                    style={{
                      backgroundColor: step.completed ? 'var(--text-primary)' : 'var(--bg-card)',
                      border: step.completed ? '2px solid var(--text-primary)' : '2px solid var(--border-light)',
                    }}
                  >
                    {step.completed ? <CheckCircle2 size={14} /> : <Clock size={12} style={{ color: 'var(--text-secondary)' }} />}
                  </div>

                  <div>
                    <h4
                      className="font-serif text-[1.05rem] m-0 mb-1"
                      style={{
                        color: step.current ? 'var(--theme-gold)' : 'var(--text-primary)',
                        fontWeight: step.current ? '700' : '600',
                      }}
                    >
                      {step.title}
                    </h4>
                    <p className="m-0 mb-1 text-[0.85rem]" style={{ color: 'var(--text-secondary)' }}>
                      {step.desc}
                    </p>
                    <span className="text-[0.78rem] font-medium" style={{ color: 'var(--text-secondary)' }}>
                      {step.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Courier Info Card */}
        <div
          className="bg-theme-card rounded-2xl p-7 flex justify-between items-center flex-wrap gap-4"
          style={{
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div>
            <span className="text-[0.75rem] uppercase" style={{ color: 'var(--text-secondary)' }}>
              Armored Escort
            </span>
            <div className="font-semibold text-[0.95rem] mt-0.5" style={{ color: 'var(--text-primary)' }}>
              {trackingInfo.driverName}
            </div>
            <div className="text-[0.82rem]" style={{ color: 'var(--text-secondary)' }}>
              AWB: {trackingInfo.awb}
            </div>
          </div>

          <div className="flex gap-2.5">
            <Link
              to={`/order/${trackingInfo.orderId}`}
              className="btn-outline-dark inline-flex items-center gap-1.5 py-2.5 px-5 rounded-md no-underline text-[0.85rem]"
            >
              <Package size={14} /> View Order Details
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
};

export default TrackOrderDetail;
