import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, Droplets, Sun, Wind, CheckCircle2, ArrowRight } from 'lucide-react';

const JewelleryCare = () => {
  const [spaRequested, setSpaRequested] = useState(false);

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
              TIMELESS LUSTRE
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2 tracking-[1px]"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
            }}
          >
            Fine Jewellery Care Guide
          </h1>
          <p
            className="font-garamond text-[1.2rem] max-w-[620px] mx-auto"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            How to preserve the radiant shine, gemstone clarity, and 22K vermeil brilliance of your Jewerkart heirlooms for generations.
          </p>
        </div>

        {/* 4 Golden Rules Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 mb-14">
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
              className="bg-theme-card rounded-xl py-7 px-5 text-center"
              style={{
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{
                  backgroundColor: 'var(--theme-champagne)',
                  color: 'var(--theme-gold)',
                  border: '1px solid var(--border-light)',
                }}
              >
                <rule.icon size={22} />
              </div>

              <h3 className="font-serif text-[1.1rem] m-0 mb-2" style={{ color: 'var(--text-primary)' }}>
                {rule.title}
              </h3>
              <p className="m-0 text-[0.85rem] leading-[1.6]" style={{ color: 'var(--text-secondary)' }}>
                {rule.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Cleaning Ritual */}
        <div
          className="bg-theme-card rounded-2xl p-10 mb-12"
          style={{
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <h2 className="font-serif text-[1.6rem] m-0 mb-4" style={{ color: 'var(--text-primary)' }}>
            The Gentle Home Cleaning Ritual
          </h2>
          <p className="text-[0.92rem] leading-[1.7] mb-7" style={{ color: 'var(--text-secondary)' }}>
            Follow this safe ritual every few months to restore the natural fire in your 925 sterling silver and zircon stones:
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex gap-4 items-start">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-[0.85rem] shrink-0"
                style={{
                  backgroundColor: 'var(--theme-champagne)',
                  color: 'var(--text-primary)',
                }}
              >
                1
              </div>
              <div>
                <strong className="text-[0.95rem]" style={{ color: 'var(--text-primary)' }}>Tepid Water & Mild Soap:</strong>
                <p className="text-[0.88rem] mt-1 mb-0 leading-[1.5]" style={{ color: 'var(--text-secondary)' }}>
                  Prepare a small ceramic bowl with lukewarm water and 2 drops of gentle phosphate-free liquid soap. Never use boiling water or harsh detergent bleach.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-[0.85rem] shrink-0"
                style={{
                  backgroundColor: 'var(--theme-champagne)',
                  color: 'var(--text-primary)',
                }}
              >
                2
              </div>
              <div>
                <strong className="text-[0.95rem]" style={{ color: 'var(--text-primary)' }}>Delicate Bristle Brush:</strong>
                <p className="text-[0.88rem] mt-1 mb-0 leading-[1.5]" style={{ color: 'var(--text-secondary)' }}>
                  Use an ultra-soft baby toothbrush to gently dislodge micro-dust from prong baskets and behind gemstones. Avoid vigorous rubbing on Kundan meenakari backs.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-[0.85rem] shrink-0"
                style={{
                  backgroundColor: 'var(--theme-champagne)',
                  color: 'var(--text-primary)',
                }}
              >
                3
              </div>
              <div>
                <strong className="text-[0.95rem]" style={{ color: 'var(--text-primary)' }}>Rinse & Pat Dry:</strong>
                <p className="text-[0.88rem] mt-1 mb-0 leading-[1.5]" style={{ color: 'var(--text-secondary)' }}>
                  Rinse in pure filtered water and pat dry using a lint-free cloth. Allow the piece to air-dry completely before sealing inside your anti-tarnish pouch.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Complimentary Annual Spa Request Banner */}
        <div
          className="bg-theme-card rounded-2xl p-10 flex items-center justify-between flex-wrap gap-6"
          style={{
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div className="max-w-[600px]">
            <div className="divider-ornament justify-start mb-2">
              <span className="badge-925 text-[9px]">COMPLIMENTARY PATRON BENEFIT</span>
            </div>
            <h3 className="font-serif text-[1.5rem] m-0 mb-2" style={{ color: 'var(--text-primary)' }}>
              Complimentary Lifetime Atelier Spa
            </h3>
            <p className="m-0 text-[0.9rem] leading-[1.6]" style={{ color: 'var(--text-secondary)' }}>
              Each year, send your Jewerkart jewellery to our master craftsmen for ultrasonic cleaning, prong tightening, and rhodium re-dipping at zero artisan charge.
            </p>
          </div>

          <div>
            {spaRequested ? (
              <div className="flex items-center gap-2 text-[#065F46] font-semibold text-[0.9rem]">
                <CheckCircle2 size={18} /> Spa Kit Dispatched to Address
              </div>
            ) : (
              <button
                onClick={() => setSpaRequested(true)}
                className="btn-slate py-3.5 px-7 rounded-md font-semibold text-[0.95rem] cursor-pointer"
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
