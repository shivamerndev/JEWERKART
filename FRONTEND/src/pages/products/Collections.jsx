import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { MOCK_COLLECTIONS } from '../../utils/mockData';

const Collections = () => {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-secondary)',
        padding: '3rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              ATELIER CURATIONS
            </span>
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: '0 0 0.75rem',
              letterSpacing: '1px',
            }}
          >
            The Jewellery Collections
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
            Thoughtfully conceptualized suites spanning Rajputana temple regalia, geometric solitaire brilliance, and everyday modern silver.
          </p>
        </div>

        {/* Collections Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {MOCK_COLLECTIONS.map((col) => (
            <div
              key={col.slug}
              className="bg-theme-card"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
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
                style={{
                  height: '280px',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-circle-item)',
                }}
              >
                <img
                  src={col.image}
                  alt={col.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                  <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '1px' }}>
                    {col.badge}
                  </span>
                </div>
              </div>

              {/* Information */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <p
                  className="font-garamond"
                  style={{
                    color: 'var(--theme-gold)',
                    fontSize: '1.15rem',
                    fontStyle: 'italic',
                    margin: '0 0 0.5rem',
                  }}
                >
                  {col.tagline}
                </p>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    margin: '0 0 0.75rem',
                  }}
                >
                  {col.name}
                </h3>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    marginBottom: '1.75rem',
                  }}
                >
                  {col.description}
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {col.itemCount} Designs
                  </span>
                  <Link
                    to={`/collection/${col.slug}`}
                    className="btn-gold"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '0.6rem 1.25rem',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                    }}
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
