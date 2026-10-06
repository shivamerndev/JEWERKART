import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Heart, Sparkles, Gem, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <main
      className="min-h-screen pt-12 px-6 pb-20"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              OUR HERITAGE & PROVENANCE
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-3 tracking-[1px]"
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)',
              color: 'var(--text-primary)',
            }}
          >
            The Jewerkart Legacy
          </h1>
          <p
            className="font-garamond text-[1.3rem] max-w-[680px] mx-auto"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            Reviving royal Indian goldsmithing traditions with modern hallmarked 925 sterling silver and 22K gold vermeil.
          </p>
        </div>

        {/* Narrative Showcase */}
        <div
          className="bg-theme-card rounded-[20px] overflow-hidden mb-16"
          style={{
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-7 py-14 px-12">
              <span className="badge-925 text-[9px] mb-4 inline-block">
                SINCE INCEPTION
              </span>
              <h2 className="font-serif text-[2rem] mb-5 leading-[1.3]" style={{ color: 'var(--text-primary)' }}>
                Born From a Passion For Heirloom Authenticity
              </h2>
              <p className="text-[0.95rem] leading-[1.8] mb-5" style={{ color: 'var(--text-secondary)' }}>
                Jewerkart was founded with a singular conviction: fine jewellery should be authentic, ethically crafted, and treasured across lifetimes without exorbitant markups.
              </p>
              <p className="text-[0.95rem] leading-[1.8] mb-7" style={{ color: 'var(--text-secondary)' }}>
                Working directly with generational master karigars in Jaipur, Bengal, and Rajkot, each design begins as an intricate hand-drawn sketch before being sculpted in pure 925 sterling silver, electroplated with thick 22K gold vermeil, and set with natural Basra pearls and faceted gemstones.
              </p>
              <div className="flex gap-8 flex-wrap">
                <div>
                  <div className="text-[1.75rem] font-bold" style={{ color: 'var(--theme-gold)' }}>50,000+</div>
                  <div className="text-[0.8rem]" style={{ color: 'var(--text-secondary)' }}>Cherished Patrons Across India</div>
                </div>
                <div>
                  <div className="text-[1.75rem] font-bold" style={{ color: 'var(--theme-gold)' }}>100%</div>
                  <div className="text-[0.8rem]" style={{ color: 'var(--text-secondary)' }}>BIS 925 Hallmark Certified</div>
                </div>
                <div>
                  <div className="text-[1.75rem] font-bold" style={{ color: 'var(--theme-gold)' }}>Lifetime</div>
                  <div className="text-[0.8rem]" style={{ color: 'var(--text-secondary)' }}>Complimentary Polish Care</div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 h-[420px] relative">
              <img
                src="/hero_model.jpg"
                alt="Jewerkart Heirloom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 3 Pillars of Craftsmanship */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mb-16">
          <div
            className="bg-theme-card rounded-2xl py-10 px-8"
            style={{
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <ShieldCheck size={28} className="mb-5" style={{ color: 'var(--theme-gold)' }} />
            <h3 className="font-serif text-[1.35rem] mb-3" style={{ color: 'var(--text-primary)' }}>
              BIS 925 Hallmark Promise
            </h3>
            <p className="m-0 text-[0.9rem] leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>
              Every piece carries the official Bureau of Indian Standards laser hallmark stamp. We never use cheap base alloys, nickel, or lead.
            </p>
          </div>

          <div
            className="bg-theme-card rounded-2xl py-10 px-8"
            style={{
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <Gem size={28} className="mb-5" style={{ color: 'var(--theme-gold)' }} />
            <h3 className="font-serif text-[1.35rem] mb-3" style={{ color: 'var(--text-primary)' }}>
              22K Thick Gold Vermeil
            </h3>
            <p className="m-0 text-[0.9rem] leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>
              Our vermeil pieces feature an ultra-dense 2.5-micron layer of real 22K gold bonded over sterling silver, guaranteeing deep warmth and resilience against tarnish.
            </p>
          </div>

          <div
            className="bg-theme-card rounded-2xl py-10 px-8"
            style={{
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <Heart size={28} className="mb-5" style={{ color: 'var(--theme-gold)' }} />
            <h3 className="font-serif text-[1.35rem] mb-3" style={{ color: 'var(--text-primary)' }}>
              Artisan Karigar Welfare
            </h3>
            <p className="m-0 text-[0.9rem] leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>
              By nurturing direct ethical partnerships with skilled hereditary jewellery artisans, we preserve centuries-old hand-filigree and Kundan setting techniques.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/shop"
            className="btn-slate inline-flex items-center gap-2 py-3.5 px-10 rounded-md no-underline font-semibold text-base"
          >
            Explore The Creations <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </main>
  );
};

export default About;
