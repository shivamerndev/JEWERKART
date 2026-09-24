import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, Lock, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

const ShippingInformation = () => {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-secondary)',
        padding: '3rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              SECURED TRANSIT
            </span>
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: '0 0 0.5rem',
              letterSpacing: '1px',
            }}
          >
            Armored Shipping & Delivery
          </h1>
          <p
            className="font-garamond"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.2rem',
              maxWidth: '620px',
              margin: '0 auto',
            }}
          >
            How every handcrafted consignment travels safely from our Mumbai atelier vault straight to your doorstep.
          </p>
        </div>

        {/* 3 Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
          <div
            className="bg-theme-card"
            style={{
              borderRadius: '16px',
              border: '1px solid var(--border-light)',
              padding: '2rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'var(--theme-champagne)',
                color: 'var(--theme-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
                border: '1px solid var(--border-light)',
              }}
            >
              <Truck size={22} />
            </div>
            <h3 className="font-serif" style={{ fontSize: '1.25rem', margin: '0 0 0.5rem', color: 'var(--text-primary)' }}>
              Armored Logistics Fleet
            </h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6' }}>
              We partner exclusively with Sequel Secure Logistics and BlueDart Apex High-Value Services to guarantee tamper-proof armored vehicle transport.
            </p>
          </div>

          <div
            className="bg-theme-card"
            style={{
              borderRadius: '16px',
              border: '1px solid var(--border-light)',
              padding: '2rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'var(--theme-champagne)',
                color: 'var(--theme-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
                border: '1px solid var(--border-light)',
              }}
            >
              <ShieldCheck size={22} />
            </div>
            <h3 className="font-serif" style={{ fontSize: '1.25rem', margin: '0 0 0.5rem', color: 'var(--text-primary)' }}>
              100% Transit Insurance
            </h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6' }}>
              Your jewellery is completely transit-insured from the moment it leaves our atelier until you physically verify the tamper seal and provide the OTP.
            </p>
          </div>

          <div
            className="bg-theme-card"
            style={{
              borderRadius: '16px',
              border: '1px solid var(--border-light)',
              padding: '2rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'var(--theme-champagne)',
                color: 'var(--theme-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
                border: '1px solid var(--border-light)',
              }}
            >
              <Lock size={22} />
            </div>
            <h3 className="font-serif" style={{ fontSize: '1.25rem', margin: '0 0 0.5rem', color: 'var(--text-primary)' }}>
              Secret OTP Verification
            </h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6' }}>
              Handover requires a confidential one-time password sent directly to your registered patron mobile. Never handed to third parties or left unattended.
            </p>
          </div>
        </div>

        {/* Timelines Table */}
        <div
          className="bg-theme-card"
          style={{
            borderRadius: '16px',
            border: '1px solid var(--border-light)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '3rem',
          }}
        >
          <h2 className="font-serif" style={{ fontSize: '1.5rem', margin: '0 0 1.25rem', color: 'var(--text-primary)' }}>
            Estimated Dispatch & Delivery Timelines
          </h2>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-card-warm)', borderBottom: '2px solid var(--border-light)' }}>
                  <th style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)', fontWeight: '600' }}>Destination Region</th>
                  <th style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)', fontWeight: '600' }}>Estimated Delivery Time</th>
                  <th style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)', fontWeight: '600' }}>Delivery Charge</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '0.85rem 1rem', fontWeight: '600', color: 'var(--text-primary)' }}>Metro Cities (Mumbai, Delhi NCR, Bengaluru, Hyderabad, Chennai)</td>
                  <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>2 - 3 Business Days</td>
                  <td style={{ padding: '0.85rem 1rem', color: '#065F46', fontWeight: '600' }}>Complimentary</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '0.85rem 1rem', fontWeight: '600', color: 'var(--text-primary)' }}>Tier 2 & Tier 3 Regional Capitals</td>
                  <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>3 - 5 Business Days</td>
                  <td style={{ padding: '0.85rem 1rem', color: '#065F46', fontWeight: '600' }}>Complimentary</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '0.85rem 1rem', fontWeight: '600', color: 'var(--text-primary)' }}>Custom Engraved & Bespoke Bridal Suites</td>
                  <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>7 - 10 Business Days (Hand-finished)</td>
                  <td style={{ padding: '0.85rem 1rem', color: '#065F46', fontWeight: '600' }}>Complimentary</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/track-order" className="btn-slate" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.85rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: '600' }}>
            Track Existing Consignment <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </main>
  );
};

export default ShippingInformation;
