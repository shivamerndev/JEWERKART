import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, Lock, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

const ShippingInformation = () => {
  return (
    <main
      className="min-h-screen pt-12 px-6 pb-20"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-[1000px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              SECURED TRANSIT
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2 tracking-[1px]"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
            }}
          >
            Armored Shipping & Delivery
          </h1>
          <p
            className="font-garamond text-[1.2rem] max-w-[620px] mx-auto"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            How every handcrafted consignment travels safely from our Mumbai atelier vault straight to your doorstep.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 mb-14">
          <div
            className="bg-theme-card rounded-2xl p-8"
            style={{
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
              style={{
                backgroundColor: 'var(--theme-champagne)',
                color: 'var(--theme-gold)',
                border: '1px solid var(--border-light)',
              }}
            >
              <Truck size={22} />
            </div>
            <h3 className="font-serif text-[1.25rem] m-0 mb-2" style={{ color: 'var(--text-primary)' }}>
              Armored Logistics Fleet
            </h3>
            <p className="m-0 text-[0.88rem] leading-[1.6]" style={{ color: 'var(--text-secondary)' }}>
              We partner exclusively with Sequel Secure Logistics and BlueDart Apex High-Value Services to guarantee tamper-proof armored vehicle transport.
            </p>
          </div>

          <div
            className="bg-theme-card rounded-2xl p-8"
            style={{
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
              style={{
                backgroundColor: 'var(--theme-champagne)',
                color: 'var(--theme-gold)',
                border: '1px solid var(--border-light)',
              }}
            >
              <ShieldCheck size={22} />
            </div>
            <h3 className="font-serif text-[1.25rem] m-0 mb-2" style={{ color: 'var(--text-primary)' }}>
              100% Transit Insurance
            </h3>
            <p className="m-0 text-[0.88rem] leading-[1.6]" style={{ color: 'var(--text-secondary)' }}>
              Your jewellery is completely transit-insured from the moment it leaves our atelier until you physically verify the tamper seal and provide the OTP.
            </p>
          </div>

          <div
            className="bg-theme-card rounded-2xl p-8"
            style={{
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
              style={{
                backgroundColor: 'var(--theme-champagne)',
                color: 'var(--theme-gold)',
                border: '1px solid var(--border-light)',
              }}
            >
              <Lock size={22} />
            </div>
            <h3 className="font-serif text-[1.25rem] m-0 mb-2" style={{ color: 'var(--text-primary)' }}>
              Secret OTP Verification
            </h3>
            <p className="m-0 text-[0.88rem] leading-[1.6]" style={{ color: 'var(--text-secondary)' }}>
              Handover requires a confidential one-time password sent directly to your registered patron mobile. Never handed to third parties or left unattended.
            </p>
          </div>
        </div>

        {/* Timelines Table */}
        <div
          className="bg-theme-card rounded-2xl p-10 mb-12"
          style={{
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <h2 className="font-serif text-[1.5rem] m-0 mb-5" style={{ color: 'var(--text-primary)' }}>
            Estimated Dispatch & Delivery Timelines
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-[0.9rem]">
              <thead>
                <tr
                  className="border-b-2"
                  style={{
                    backgroundColor: 'var(--bg-card-warm)',
                    borderColor: 'var(--border-light)',
                  }}
                >
                  <th className="py-3.5 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Destination Region</th>
                  <th className="py-3.5 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Estimated Delivery Time</th>
                  <th className="py-3.5 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Delivery Charge</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'var(--border-light)' }}>
                  <td className="py-3.5 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Metro Cities (Mumbai, Delhi NCR, Bengaluru, Hyderabad, Chennai)</td>
                  <td className="py-3.5 px-4" style={{ color: 'var(--text-secondary)' }}>2 - 3 Business Days</td>
                  <td className="py-3.5 px-4 text-[#065F46] font-semibold">Complimentary</td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'var(--border-light)' }}>
                  <td className="py-3.5 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Tier 2 & Tier 3 Regional Capitals</td>
                  <td className="py-3.5 px-4" style={{ color: 'var(--text-secondary)' }}>3 - 5 Business Days</td>
                  <td className="py-3.5 px-4 text-[#065F46] font-semibold">Complimentary</td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'var(--border-light)' }}>
                  <td className="py-3.5 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Custom Engraved & Bespoke Bridal Suites</td>
                  <td className="py-3.5 px-4" style={{ color: 'var(--text-secondary)' }}>7 - 10 Business Days (Hand-finished)</td>
                  <td className="py-3.5 px-4 text-[#065F46] font-semibold">Complimentary</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/track-order"
            className="btn-slate inline-flex items-center gap-2 py-3.5 px-8 rounded-md no-underline font-semibold"
          >
            Track Existing Consignment <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </main>
  );
};

export default ShippingInformation;
