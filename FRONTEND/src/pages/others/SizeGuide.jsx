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
      className="min-h-screen pt-12 px-6 pb-20"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-[1000px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              PRECISION FITTING
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2 tracking-[1px]"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              color: 'var(--text-primary)',
            }}
          >
            Fine Jewellery Sizing Guide
          </h1>
          <p
            className="font-garamond text-[1.2rem] max-w-[650px] mx-auto"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            Accurate sizing charts and measurement techniques to ensure an immaculate, bespoke fit for rings, bangles, and necklaces.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {[
            { id: 'ring', label: 'Ring Size Chart' },
            { id: 'bangle', label: 'Bangle & Kada Sizes' },
            { id: 'necklace', label: 'Necklace Length Guide' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="py-3 px-7 rounded-full text-[0.95rem] cursor-pointer transition-all duration-200"
              style={{
                border: activeTab === tab.id ? '2px solid var(--text-primary)' : '1px solid var(--border-light)',
                backgroundColor: activeTab === tab.id ? 'var(--accent-slate)' : 'var(--bg-card)',
                color: activeTab === tab.id ? '#FEF0E0' : 'var(--text-primary)',
                fontWeight: activeTab === tab.id ? '600' : '500',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Ring Sizing */}
        {activeTab === 'ring' && (
          <div
            className="bg-theme-card rounded-2xl p-10"
            style={{
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Ruler size={22} style={{ color: 'var(--theme-gold)' }} />
              <h2 className="font-serif text-[1.5rem] m-0" style={{ color: 'var(--text-primary)' }}>
                Indian & US Ring Size Reference
              </h2>
            </div>
            <p className="text-[0.9rem] leading-[1.6] mb-8" style={{ color: 'var(--text-secondary)' }}>
              Jewerkart rings are crafted to Indian Standard Sizing. If you are between sizes, we recommend selecting the larger size for maximum comfort.
            </p>

            <div className="overflow-x-auto mb-10">
              <table className="w-full border-collapse text-left text-[0.9rem]">
                <thead>
                  <tr
                    className="border-b-2"
                    style={{
                      backgroundColor: 'var(--bg-card-warm)',
                      borderColor: 'var(--border-light)',
                    }}
                  >
                    <th className="py-3.5 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Indian Standard</th>
                    <th className="py-3.5 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>US Standard</th>
                    <th className="py-3.5 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Inside Diameter</th>
                    <th className="py-3.5 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Finger Circumference</th>
                  </tr>
                </thead>
                <tbody>
                  {RING_SIZES.map((row, idx) => (
                    <tr key={idx} className="border-b" style={{ borderColor: 'var(--border-light)' }}>
                      <td className="py-3.5 px-4 font-bold" style={{ color: 'var(--theme-gold)' }}>Size {row.indian}</td>
                      <td className="py-3.5 px-4" style={{ color: 'var(--text-primary)' }}>{row.us}</td>
                      <td className="py-3.5 px-4" style={{ color: 'var(--text-secondary)' }}>{row.diameter}</td>
                      <td className="py-3.5 px-4" style={{ color: 'var(--text-secondary)' }}>{row.circumference}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Measurement Steps */}
            <div
              className="rounded-xl p-7"
              style={{
                backgroundColor: 'var(--theme-champagne-light)',
                border: '1px solid var(--border-light)',
              }}
            >
              <h3 className="font-serif text-[1.2rem] m-0 mb-4" style={{ color: 'var(--text-primary)' }}>
                How to Measure Your Ring Size At Home:
              </h3>
              <ol className="pl-5 m-0 text-[0.88rem] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
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
            className="bg-theme-card rounded-2xl p-10"
            style={{
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Ruler size={22} style={{ color: 'var(--theme-gold)' }} />
              <h2 className="font-serif text-[1.5rem] m-0" style={{ color: 'var(--text-primary)' }}>
                Indian Bangle & Kada Sizes
              </h2>
            </div>
            <p className="text-[0.9rem] leading-[1.6] mb-8" style={{ color: 'var(--text-secondary)' }}>
              Bangle sizes are determined by the inner diameter of an existing well-fitting bangle, measured straight across the center.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse text-left text-[0.9rem]">
                <thead>
                  <tr
                    className="border-b-2"
                    style={{
                      backgroundColor: 'var(--bg-card-warm)',
                      borderColor: 'var(--border-light)',
                    }}
                  >
                    <th className="py-3.5 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Bangle Size</th>
                    <th className="py-3.5 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Inner Diameter (Inches & mm)</th>
                    <th className="py-3.5 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Approximate Hand Fit</th>
                  </tr>
                </thead>
                <tbody>
                  {BANGLE_SIZES.map((row, idx) => (
                    <tr key={idx} className="border-b" style={{ borderColor: 'var(--border-light)' }}>
                      <td className="py-3.5 px-4 font-bold" style={{ color: 'var(--theme-gold)' }}>{row.size}</td>
                      <td className="py-3.5 px-4" style={{ color: 'var(--text-primary)' }}>{row.innerDiameter}</td>
                      <td className="py-3.5 px-4" style={{ color: 'var(--text-secondary)' }}>{row.wristCircumference}</td>
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
            className="bg-theme-card rounded-2xl p-10"
            style={{
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Ruler size={22} style={{ color: 'var(--theme-gold)' }} />
              <h2 className="font-serif text-[1.5rem] m-0" style={{ color: 'var(--text-primary)' }}>
                Necklace Length & Silhouette Guide
              </h2>
            </div>
            <p className="text-[0.9rem] leading-[1.6] mb-8" style={{ color: 'var(--text-secondary)' }}>
              Selecting the ideal necklace length accentuates your facial contour and complements different necklines.
            </p>

            <div className="flex flex-col gap-5">
              {NECKLACE_LENGTHS.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-lg p-6"
                  style={{
                    backgroundColor: 'var(--bg-card-warm)',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <h3 className="font-serif text-[1.15rem] m-0 mb-2" style={{ color: 'var(--text-primary)' }}>
                    {item.name}
                  </h3>
                  <p className="m-0 text-[0.9rem] leading-[1.6]" style={{ color: 'var(--text-secondary)' }}>
                    {item.placement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Concierge Assistance Footer */}
        <div className="text-center mt-14">
          <p className="text-[0.95rem] mb-4" style={{ color: 'var(--text-secondary)' }}>
            Uncertain about your bespoke measurements? Our atelier gemologists are happy to assist via private video consultation.
          </p>
          <Link
            to="/contact"
            className="btn-slate inline-flex items-center gap-2 py-3 px-7 rounded-md no-underline font-semibold"
          >
            Contact Sizing Concierge <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </main>
  );
};

export default SizeGuide;
