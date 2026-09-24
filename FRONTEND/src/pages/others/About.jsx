import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Heart, Sparkles, Gem, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-secondary)',
        padding: '3rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              OUR HERITAGE & PROVENANCE
            </span>
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: '0 0 0.75rem',
              letterSpacing: '1px',
            }}
          >
            The Jewerkart Legacy
          </h1>
          <p
            className="font-garamond"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.3rem',
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            Reviving royal Indian goldsmithing traditions with modern hallmarked 925 sterling silver and 22K gold vermeil.
          </p>
        </div>

        {/* Narrative Showcase */}
        <div
          className="bg-theme-card"
          style={{
            borderRadius: '20px',
            border: '1px solid var(--border-light)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)',
            marginBottom: '4rem',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)' }}>
            <div style={{ gridColumn: 'span 12', padding: '3.5rem 3rem' }} className="md:col-span-7">
              <span className="badge-925" style={{ fontSize: '9px', marginBottom: '1rem', display: 'inline-block' }}>
                SINCE INCEPTION
              </span>
              <h2 className="font-serif" style={{ fontSize: '2rem', color: 'var(--text-primary)', margin: '0 0 1.25rem', lineHeight: '1.3' }}>
                Born From a Passion For Heirloom Authenticity
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '1.25rem' }}>
                Jewerkart was founded with a singular conviction: fine jewellery should be authentic, ethically crafted, and treasured across lifetimes without exorbitant markups.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '1.75rem' }}>
                Working directly with generational master karigars in Jaipur, Bengal, and Rajkot, each design begins as an intricate hand-drawn sketch before being sculpted in pure 925 sterling silver, electroplated with thick 22K gold vermeil, and set with natural Basra pearls and faceted gemstones.
              </p>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--theme-gold)' }}>50,000+</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Cherished Patrons Across India</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--theme-gold)' }}>100%</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>BIS 925 Hallmark Certified</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--theme-gold)' }}>Lifetime</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Complimentary Polish Care</div>
                </div>
              </div>
            </div>

            <div style={{ gridColumn: 'span 12', height: '420px', position: 'relative' }} className="md:col-span-5">
              <img
                src="/hero_model.jpg"
                alt="Jewerkart Heirloom"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* 3 Pillars of Craftsmanship */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div
            className="bg-theme-card"
            style={{
              borderRadius: '16px',
              border: '1px solid var(--border-light)',
              padding: '2.5rem 2rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <ShieldCheck size={28} style={{ color: 'var(--theme-gold)', marginBottom: '1.25rem' }} />
            <h3 className="font-serif" style={{ fontSize: '1.35rem', margin: '0 0 0.75rem', color: 'var(--text-primary)' }}>
              BIS 925 Hallmark Promise
            </h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7' }}>
              Every piece carries the official Bureau of Indian Standards laser hallmark stamp. We never use cheap base alloys, nickel, or lead.
            </p>
          </div>

          <div
            className="bg-theme-card"
            style={{
              borderRadius: '16px',
              border: '1px solid var(--border-light)',
              padding: '2.5rem 2rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <Gem size={28} style={{ color: 'var(--theme-gold)', marginBottom: '1.25rem' }} />
            <h3 className="font-serif" style={{ fontSize: '1.35rem', margin: '0 0 0.75rem', color: 'var(--text-primary)' }}>
              22K Thick Gold Vermeil
            </h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7' }}>
              Our vermeil pieces feature an ultra-dense 2.5-micron layer of real 22K gold bonded over sterling silver, guaranteeing deep warmth and resilience against tarnish.
            </p>
          </div>

          <div
            className="bg-theme-card"
            style={{
              borderRadius: '16px',
              border: '1px solid var(--border-light)',
              padding: '2.5rem 2rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <Heart size={28} style={{ color: 'var(--theme-gold)', marginBottom: '1.25rem' }} />
            <h3 className="font-serif" style={{ fontSize: '1.35rem', margin: '0 0 0.75rem', color: 'var(--text-primary)' }}>
              Artisan Karigar Welfare
            </h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7' }}>
              By nurturing direct ethical partnerships with skilled hereditary jewellery artisans, we preserve centuries-old hand-filigree and Kundan setting techniques.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link
            to="/shop"
            className="btn-slate"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.9rem 2.5rem',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem',
            }}
          >
            Explore The Creations <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </main>
  );
};

export default About;
