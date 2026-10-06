import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { MOCK_COLLECTIONS } from '../../utils/mockData';

const Collections = () => {
  return (
    <main
      className="min-h-screen px-6 pt-12 pb-20"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              ATELIER CURATIONS
            </span>
          </div>
          <h1
            className="font-serif font-semibold m-0 mb-3 tracking-[1px]"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
            }}
          >
            The Jewellery Collections
          </h1>
          <p
            className="font-garamond text-[1.2rem] max-w-[620px] mx-auto m-0"
            style={{ color: 'var(--text-secondary)' }}
          >
            Thoughtfully conceptualized suites spanning Rajputana temple regalia, geometric solitaire brilliance, and everyday modern silver.
          </p>
        </div>

        {/* Collections Grid */}
        <div
          className="grid gap-10"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
        >
          {MOCK_COLLECTIONS.map((col) => (
            <div
              key={col.slug}
              className="bg-theme-card rounded-2xl overflow-hidden flex flex-col transition-[transform,box-shadow] duration-300"
              style={{
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              {/* Image Frame */}
              <div
                className="h-[280px] relative overflow-hidden"
                style={{ backgroundColor: 'var(--bg-circle-item)' }}
              >
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="badge-925 text-[9px] tracking-[1px]">
                    {col.badge}
                  </span>
                </div>
              </div>

              {/* Information */}
              <div className="p-8 flex flex-col flex-grow">
                <p
                  className="font-garamond text-[1.15rem] italic m-0 mb-2"
                  style={{ color: 'var(--theme-gold)' }}
                >
                  {col.tagline}
                </p>
                <h3
                  className="font-serif text-[1.45rem] font-semibold m-0 mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {col.name}
                </h3>
                <p
                  className="text-[0.9rem] leading-[1.6] mb-7"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {col.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-[0.85rem]" style={{ color: 'var(--text-secondary)' }}>
                    {col.itemCount} Designs
                  </span>
                  <Link
                    to={`/collection/${col.slug}`}
                    className="btn-gold inline-flex items-center gap-2 px-5 py-[0.6rem] rounded-[6px] no-underline text-[0.85rem] font-semibold"
                  >
                    Explore Suite <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Collections;
