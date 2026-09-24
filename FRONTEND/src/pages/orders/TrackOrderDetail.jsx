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
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-secondary)',
        padding: '2.5rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', fontSize: '0.85rem' }}>
          <Link to="/track-order" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Tracking Portal</Link>
          <span style={{ color: 'var(--border-light)' }}>/</span>
          <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{trackingInfo.orderId}</span>
        </div>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              LIVE ARMORED TELEMETRY
            </span>
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: '0 0 0.5rem',
            }}
          >
            Live Tracking #{trackingInfo.orderId}
          </h1>
          <p className="font-garamond" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>
            Real-time transit telemetry powered by Sequel Secure Armored Logistics.
          </p>
        </div>

        {/* Status Card */}
        <div
          className="bg-theme-card"
          style={{
            borderRadius: '16px',
            border: '1px solid var(--border-light)',
            padding: '2rem',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              borderBottom: '1px solid var(--border-light)',
              paddingBottom: '1.5rem',
              marginBottom: '1.75rem',
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Estimated Delivery
              </span>
              <h2 className="font-serif" style={{ fontSize: '1.35rem', margin: '0.25rem 0 0', color: 'var(--text-primary)' }}>
                {trackingInfo.estimatedDate}
              </h2>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'var(--theme-champagne)',
                  border: '1px solid var(--border-light)',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
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
            style={{
              backgroundColor: 'var(--theme-champagne-light)',
              border: '1px dashed var(--border-light)',
              borderRadius: '8px',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '2.5rem',
            }}
          >
            <ShieldCheck size={22} style={{ color: 'var(--theme-gold)', flexShrink: 0 }} />
            <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
              <strong>Patron Security Notice:</strong> {trackingInfo.otpNotice}
            </div>
          </div>

          {/* Timeline Visual */}
          <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
            <div
              style={{
                position: 'absolute',
                left: '11px',
                top: '10px',
                bottom: '10px',
                width: '2px',
                backgroundColor: 'var(--border-light)',
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {trackingInfo.timeline.map((step, idx) => (
                <div key={idx} style={{ position: 'relative' }}>
                  {/* Step Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-2.5rem',
                      top: '0',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: step.completed ? 'var(--text-primary)' : 'var(--bg-card)',
                      border: step.completed ? '2px solid var(--text-primary)' : '2px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FEF0E0',
                    }}
                  >
                    {step.completed ? <CheckCircle2 size={14} /> : <Clock size={12} style={{ color: 'var(--text-secondary)' }} />}
                  </div>

                  <div>
                    <h4
                      className="font-serif"
                      style={{
                        fontSize: '1.05rem',
                        margin: '0 0 0.25rem',
                        color: step.current ? 'var(--theme-gold)' : 'var(--text-primary)',
                        fontWeight: step.current ? '700' : '600',
                      }}
                    >
                      {step.title}
                    </h4>
                    <p style={{ margin: '0 0 0.25rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {step.desc}
                    </p>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
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
          className="bg-theme-card"
          style={{
            borderRadius: '16px',
            border: '1px solid var(--border-light)',
            padding: '1.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
              Armored Escort
            </span>
            <div style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.95rem', marginTop: '2px' }}>
              {trackingInfo.driverName}
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              AWB: {trackingInfo.awb}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <Link
              to={`/order/${trackingInfo.orderId}`}
              className="btn-outline-dark"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.6rem 1.25rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '0.85rem',
              }}
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
