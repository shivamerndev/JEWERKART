import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Ruler, Sparkles, CheckCircle2, Info, ArrowRight } from 'lucide-react';

const RING_SIZES = [
  { indian: '6', us: '3.75', diameter: '14.5 mm', circumference: '45.5 mm' },
  { indian: '8', us: '4.5', diameter: '15.3 mm', circumference: '48.0 mm' },
  { indian: '10', us: '5.25', diameter: '16.0 mm', circumference: '50.0 mm' },
  { indian: '12', us: '6.0', diameter: '16.5 mm', circumference: '52.0 mm' },
  { indian: '14', us: '6.75', diameter: '17.2 mm', circumference: '54.0 mm' },
  { indian: '16', us: '7.5', diameter: '17.8 mm', circumference: '56.0 mm' },
  { indian: '18', us: '8.25', diameter: '18.4 mm', circumference: '58.0 mm' },
  { indian: '20', us: '9.0', diameter: '19.1 mm', circumference: '60.0 mm' },
  { indian: '22', us: '9.75', diameter: '19.8 mm', circumference: '62.0 mm' },
  { indian: '24', us: '10.5', diameter: '20.4 mm', circumference: '64.0 mm' },
];

const BANGLE_SIZES = [
  { size: '2-2 (Small)', innerDiameter: '2.125 inches (54.0 mm)', wristCircumference: '6.5 - 7.0 inches' },
  { size: '2-4 (Medium)', innerDiameter: '2.25 inches (57.2 mm)', wristCircumference: '7.0 - 7.5 inches' },
  { size: '2-6 (Standard)', innerDiameter: '2.375 inches (60.3 mm)', wristCircumference: '7.5 - 8.0 inches' },
  { size: '2-8 (Large)', innerDiameter: '2.50 inches (63.5 mm)', wristCircumference: '8.0 - 8.5 inches' },
  { size: '2-10 (Extra Large)', innerDiameter: '2.625 inches (66.7 mm)', wristCircumference: '8.5 - 9.0 inches' },
];

const NECKLACE_LENGTHS = [
  { name: 'Choker (14 - 15 Inches)', placement: 'Wraps closely around the base of the throat. Ideal for open necklines and boat necks.' },
  { name: 'Collar / Princess (16 - 18 Inches)', placement: 'Rests gracefully on the collarbone. The most versatile standard length for pendants and mangalsutras.' },
  { name: 'Matinee (20 - 24 Inches)', placement: 'Falls comfortably at the centre of the cleavage. Spectacular for formal attire and high-neck sarees.' },
  { name: 'Opera / Rani Haar (28 - 36 Inches)', placement: 'Reaches below the bustline. Essential for opulent bridal layering and traditional temple jewellery.' },
];

const SizeGuide = () => {
  const [activeTab, setActiveTab] = useState('ring');

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
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>
              PRECISION FITTING
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
            Fine Jewellery Sizing Guide
          </h1>
          <p
            className="font-garamond"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.2rem',
              maxWidth: '650px',
              margin: '0 auto',
            }}
          >
            Accurate sizing charts and measurement techniques to ensure an immaculate, bespoke fit for rings, bangles, and necklaces.
          </p>
        </div>

        {/* Tab Switcher */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { id: 'ring', label: 'Ring Size Chart' },
            { id: 'bangle', label: 'Bangle & Kada Sizes' },
            { id: 'necklace', label: 'Necklace Length Guide' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '0.75rem 1.75rem',
                borderRadius: '30px',
                border: activeTab === tab.id ? '2px solid var(--text-primary)' : '1px solid var(--border-light)',
                backgroundColor: activeTab === tab.id ? 'var(--accent-slate)' : 'var(--bg-card)',
                color: activeTab === tab.id ? '#FEF0E0' : 'var(--text-primary)',
                fontWeight: activeTab === tab.id ? '600' : '500',
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Ring Sizing */}
        {activeTab === 'ring' && (
          <div
            className="bg-theme-card"
            style={{
              borderRadius: '16px',
              border: '1px solid var(--border-light)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
              <Ruler size={22} style={{ color: 'var(--theme-gold)' }} />
              <h2 className="font-serif" style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>
                Indian & US Ring Size Reference
              </h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '2rem' }}>
              Jewerkart rings are crafted to Indian Standard Sizing. If you are between sizes, we recommend selecting the larger size for maximum comfort.
            </p>

            <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-card-warm)', borderBottom: '2px solid var(--border-light)' }}>
                    <th style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)', fontWeight: '600' }}>Indian Standard</th>
                    <th style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)', fontWeight: '600' }}>US Standard</th>
                    <th style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)', fontWeight: '600' }}>Inside Diameter</th>
                    <th style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)', fontWeight: '600' }}>Finger Circumference</th>
                  </tr>
                </thead>
                <tbody>
                  {RING_SIZES.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: '700', color: 'var(--theme-gold)' }}>Size {row.indian}</td>
                      <td style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)' }}>{row.us}</td>
                      <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>{row.diameter}</td>
                      <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>{row.circumference}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Measurement Steps */}
            <div style={{ backgroundColor: 'var(--theme-champagne-light)', borderRadius: '12px', padding: '1.75rem', border: '1px solid var(--border-light)' }}>
              <h3 className="font-serif" style={{ fontSize: '1.2rem', margin: '0 0 1rem', color: 'var(--text-primary)' }}>
                How to Measure Your Ring Size At Home:
              </h3>
              <ol style={{ paddingLeft: '1.25rem', margin: 0, color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.8' }}>
                <li>Wrap a non-stretches strip of paper or ribbon snugly around the base of the intended finger.</li>
                <li>Mark the exact spot where the paper overlaps with a fine pen.</li>
                <li>Measure the length from the starting point to the mark with a millimeter ruler to find the circumference.</li>
                <li>Match the measured circumference in the chart above to locate your exact Indian ring size.</li>
              </ol>
            </div>
          </div>
        )}

        {/* Tab 2: Bangle Sizing */}
        {activeTab === 'bangle' && (
          <div
            className="bg-theme-card"
            style={{
              borderRadius: '16px',
              border: '1px solid var(--border-light)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
              <Ruler size={22} style={{ color: 'var(--theme-gold)' }} />
              <h2 className="font-serif" style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>
                Indian Bangle & Kada Sizes
              </h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '2rem' }}>
              Bangle sizes are determined by the inner diameter of an existing well-fitting bangle, measured straight across the center.
            </p>

            <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-card-warm)', borderBottom: '2px solid var(--border-light)' }}>
                    <th style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)', fontWeight: '600' }}>Bangle Size</th>
                    <th style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)', fontWeight: '600' }}>Inner Diameter (Inches & mm)</th>
                    <th style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)', fontWeight: '600' }}>Approximate Hand Fit</th>
                  </tr>
                </thead>
                <tbody>
                  {BANGLE_SIZES.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: '700', color: 'var(--theme-gold)' }}>{row.size}</td>
                      <td style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)' }}>{row.innerDiameter}</td>
                      <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>{row.wristCircumference}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Necklace Length */}
        {activeTab === 'necklace' && (
          <div
            className="bg-theme-card"
            style={{
              borderRadius: '16px',
              border: '1px solid var(--border-light)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
              <Ruler size={22} style={{ color: 'var(--theme-gold)' }} />
              <h2 className="font-serif" style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>
                Necklace Length & Silhouette Guide
              </h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '2rem' }}>
              Selecting the ideal necklace length accentuates your facial contour and complements different necklines.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {NECKLACE_LENGTHS.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--bg-card-warm)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '10px',
                    padding: '1.5rem',
                  }}
                >
                  <h3 className="font-serif" style={{ fontSize: '1.15rem', margin: '0 0 0.5rem', color: 'var(--text-primary)' }}>
                    {item.name}
                  </h3>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    {item.placement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Concierge Assistance Footer */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
            Uncertain about your bespoke measurements? Our atelier gemologists are happy to assist via private video consultation.
          </p>
          <Link to="/contact" className="btn-slate" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.75rem 1.75rem', borderRadius: '6px', textDecoration: 'none', fontWeight: '600' }}>
            Contact Sizing Concierge <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </main>
  );
};

export default SizeGuide;
