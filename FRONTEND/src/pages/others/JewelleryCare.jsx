import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, Droplets, Sun, Wind, CheckCircle2, ArrowRight } from 'lucide-react';

const JewelleryCare = () => {
  const [spaRequested, setSpaRequested] = useState(false);

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
              TIMELESS LUSTRE
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
            Fine Jewellery Care Guide
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
            How to preserve the radiant shine, gemstone clarity, and 22K vermeil brilliance of your Jewerkart heirlooms for generations.
          </p>
        </div>

        {/* 4 Golden Rules Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
          {[
            {
              icon: Droplets,
              title: 'Last On, First Off',
              desc: 'Apply perfumes, cosmetics, and hairsprays prior to donning your jewellery to safeguard precious surface rhodium.',
            },
            {
              icon: Wind,
              title: 'Airtight Storage',
              desc: 'Always store pieces individually in the velvet zip pouches provided to avert atmospheric tarnishing.',
            },
            {
              icon: Sun,
              title: 'Avoid Direct Moisture',
              desc: 'Remove rings and necklaces before showering, chlorinating pools, sauna sessions, or intense gym workouts.',
            },
            {
              icon: Sparkles,
              title: 'Micro-Fiber Polish',
              desc: 'Buff gently with the complimentary Jewerkart anti-tarnish polishing cloth in single unidirectional motions.',
            },
          ].map((rule, idx) => (
            <div
              key={idx}
              className="bg-theme-card"
              style={{
                borderRadius: '12px',
                border: '1px solid var(--border-light)',
                padding: '1.75rem 1.25rem',
                textAlign: 'center',
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
                  margin: '0 auto 1rem',
                  border: '1px solid var(--border-light)',
                }}
              >
                <rule.icon size={22} />
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.1rem', margin: '0 0 0.5rem', color: 'var(--text-primary)' }}>
                {rule.title}
              </h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6' }}>
                {rule.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Cleaning Ritual */}
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
          <h2 className="font-serif" style={{ fontSize: '1.6rem', margin: '0 0 1rem', color: 'var(--text-primary)' }}>
            The Gentle Home Cleaning Ritual
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
            Follow this safe ritual every few months to restore the natural fire in your 925 sterling silver and zircon stones:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--theme-champagne)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '0.85rem', flexShrink: 0 }}>
                1
              </div>
              <div>
                <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>Tepid Water & Mild Soap:</strong>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: '4px 0 0', lineHeight: '1.5' }}>
                  Prepare a small ceramic bowl with lukewarm water and 2 drops of gentle phosphate-free liquid soap. Never use boiling water or harsh detergent bleach.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--theme-champagne)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '0.85rem', flexShrink: 0 }}>
                2
              </div>
              <div>
                <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>Delicate Bristle Brush:</strong>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: '4px 0 0', lineHeight: '1.5' }}>
                  Use an ultra-soft baby toothbrush to gently dislodge micro-dust from prong baskets and behind gemstones. Avoid vigorous rubbing on Kundan meenakari backs.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--theme-champagne)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '0.85rem', flexShrink: 0 }}>
                3
              </div>
              <div>
                <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>Rinse & Pat Dry:</strong>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: '4px 0 0', lineHeight: '1.5' }}>
                  Rinse in pure filtered water and pat dry using a lint-free cloth. Allow the piece to air-dry completely before sealing inside your anti-tarnish pouch.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Complimentary Annual Spa Request Banner */}
        <div
          className="bg-theme-card"
          style={{
            borderRadius: '16px',
            border: '1px solid var(--border-light)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div style={{ maxWidth: '600px' }}>
            <div className="divider-ornament" style={{ justifyContent: 'flex-start', marginBottom: '0.5rem' }}>
              <span className="badge-925" style={{ fontSize: '9px' }}>COMPLIMENTARY PATRON BENEFIT</span>
            </div>
            <h3 className="font-serif" style={{ fontSize: '1.5rem', margin: '0 0 0.5rem', color: 'var(--text-primary)' }}>
              Complimentary Lifetime Atelier Spa
            </h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Each year, send your Jewerkart jewellery to our master craftsmen for ultrasonic cleaning, prong tightening, and rhodium re-dipping at zero artisan charge.
            </p>
          </div>

          <div>
            {spaRequested ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#065F46', fontWeight: '600', fontSize: '0.9rem' }}>
                <CheckCircle2 size={18} /> Spa Kit Dispatched to Address
              </div>
            ) : (
              <button
                onClick={() => setSpaRequested(true)}
                className="btn-slate"
                style={{
                  padding: '0.85rem 1.75rem',
                  borderRadius: '6px',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                }}
              >
                Request Free Spa Kit
              </button>
            )}
          </div>
        </div>

      </div>
    </main>
  );
};

export default JewelleryCare;
