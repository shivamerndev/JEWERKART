import React from 'react';

const Banner = () => {
  return (
    <section
      className="bg-theme-primary"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '520px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--border-light)',
      }}
    >
      {/* Subtle gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(254, 240, 224, 0.7) 50%, rgba(255, 255, 255, 0.9) 100%)',
          zIndex: 1,
        }}
      />

      {/* Decorative circles */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          border: '1px solid rgba(197, 145, 74, 0.18)',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-80px',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          border: '1px solid rgba(197, 145, 74, 0.12)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          width: '100%',
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        {/* Text Content */}
        <div>
          <div
            className="divider-ornament"
            style={{
              justifyContent: 'flex-start',
              marginBottom: '1.25rem',
              marginTop: 0,
            }}
          >
            <span
              className="badge-925"
              style={{
                fontSize: '10px',
                letterSpacing: '2px',
              }}
            >
              925 SILVER
            </span>
          </div>

          <h2
            className="font-serif"
            style={{
              fontSize: '3.2rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              lineHeight: '1.15',
              marginBottom: '1.25rem',
            }}
          >
            Timeless Bridal
            <br />
            <span
              className="font-script"
              style={{
                fontSize: '3.8rem',
                color: 'var(--text-gold)',
                fontWeight: '400',
              }}
            >
              Elegance
            </span>
          </h2>

          <p
            className="text-theme-secondary font-garamond"
            style={{
              fontSize: '1.15rem',
              lineHeight: '1.8',
              maxWidth: '420px',
              marginBottom: '2rem',
            }}
          >
            Luxuriate in meticulously curated sterling silver ornaments,
            designed for the moments that matter most.
          </p>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button
              className="btn-slate"
              style={{
                padding: '0.85rem 2.25rem',
                borderRadius: '2px',
                fontSize: '0.8rem',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              Shop Collection
            </button>
            <button
              className="btn-outline-dark"
              style={{
                padding: '0.85rem 2.25rem',
                borderRadius: '2px',
                fontSize: '0.8rem',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              View Lookbook
            </button>
          </div>
        </div>

        {/* Right side — decorative placeholder */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              border: '1px solid rgba(197, 145, 74, 0.25)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              background: 'radial-gradient(circle, rgba(254, 240, 224, 0.4) 0%, transparent 70%)',
            }}
          >
            <div
              style={{
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                border: '1px solid rgba(197, 145, 74, 0.18)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                className="font-garamond text-theme-secondary"
                style={{
                  textAlign: 'center',
                  fontSize: '1rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                }}
              >
                Hero Image
                <br />
                <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;