import React from 'react';

const Banner = () => {
  return (
    <section
      className="bg-theme-primary relative overflow-hidden min-h-[520px] flex items-center bg-white"
      style={{ borderBottom: '1px solid var(--border-light)' }}
    >
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(254, 240, 224, 0.7) 50%, rgba(255, 255, 255, 0.9) 100%)',
        }}
      />

      {/* Decorative circles */}
      <div
        className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full z-[1]"
        style={{ border: '1px solid rgba(197, 145, 74, 0.18)' }}
      />
      <div
        className="absolute bottom-[-150px] left-[-80px] w-[350px] h-[350px] rounded-full z-[1]"
        style={{ border: '1px solid rgba(197, 145, 74, 0.12)' }}
      />

      {/* Content */}
      <div className="max-w-[1280px] mx-auto px-6 w-full relative z-[2] grid grid-cols-2 gap-16 items-center">
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
              className="badge-925 text-[10px] tracking-[2px]"
            >
              925 SILVER
            </span>
          </div>

          <h2
            className="font-serif text-[3.2rem] font-semibold leading-[1.15] mb-5"
            style={{ color: 'var(--text-primary)' }}
          >
            Timeless Bridal
            <br />
            <span
              className="font-script text-[3.8rem] font-normal"
              style={{ color: 'var(--text-gold)' }}
            >
              Elegance
            </span>
          </h2>

          <p
            className="text-theme-secondary font-garamond text-[1.15rem] leading-[1.8] max-w-[420px] mb-8"
          >
            Luxuriate in meticulously curated sterling silver ornaments,
            designed for the moments that matter most.
          </p>

          <div className="flex gap-4 items-center">
            <button
              className="btn-slate px-9 py-[0.85rem] rounded-[2px] text-[0.8rem] tracking-[1.5px] uppercase cursor-pointer"
            >
              Shop Collection
            </button>
            <button
              className="btn-outline-dark px-9 py-[0.85rem] rounded-[2px] text-[0.8rem] tracking-[1.5px] uppercase cursor-pointer"
            >
              View Lookbook
            </button>
          </div>
        </div>

        {/* Right side — decorative placeholder */}
        <div className="flex justify-center items-center">
          <div
            className="w-[380px] h-[380px] rounded-full flex justify-center items-center relative"
            style={{
              border: '1px solid rgba(197, 145, 74, 0.25)',
              background: 'radial-gradient(circle, rgba(254, 240, 224, 0.4) 0%, transparent 70%)',
            }}
          >
            <div
              className="w-[320px] h-[320px] rounded-full flex justify-center items-center"
              style={{ border: '1px solid rgba(197, 145, 74, 0.18)' }}
            >
              <div
                className="font-garamond text-theme-secondary text-center text-base tracking-[2px] uppercase"
              >
                Hero Image
                <br />
                <span className="text-[0.75rem] opacity-60">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;