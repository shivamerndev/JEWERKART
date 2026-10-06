import React from 'react';
import { Sparkles } from 'lucide-react';

const Marquee = () => {
  const items = Array.from({ length: 8 });

  return (
    <div
      role="region"
      aria-label="Announcement Bar"
      className="relative w-full overflow-hidden select-none z-[40]"
      style={{
        backgroundColor: '#1C140E',
        borderBottom: '1px solid rgba(197, 145, 74, 0.25)',
        color: '#FEF0E0',
      }}
    >
      <div className="py-2 flex items-center overflow-hidden">
        <div className="animate-marquee-infinite flex items-center whitespace-nowrap cursor-default">
          {/* First loop track */}
          {items.map((_, index) => (
            <div key={`track-1-${index}`} className="flex items-center mx-6 sm:mx-8">
              <Sparkles
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5 text-[#E5B869] shrink-0"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-[13px] tracking-wider uppercase font-semibold text-[#E5B869] mr-2">
                Limited Offer
              </span>
              <span className="text-[#C5914A] opacity-70 mr-2 font-serif text-sm">
                —
              </span>
              <span className="text-xs sm:text-[13px] tracking-wide font-medium text-[#FEF0E0]">
                Grab your favorites before it's gone.
              </span>
              <span
                className="ml-6 sm:ml-8 text-[#C5914A] opacity-50 text-xs font-serif select-none"
                aria-hidden="true"
              >
                ✦
              </span>
            </div>
          ))}

          {/* Second identical loop track for seamless infinite repetition */}
          {items.map((_, index) => (
            <div key={`track-2-${index}`} className="flex items-center mx-6 sm:mx-8">
              <Sparkles
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5 text-[#E5B869] shrink-0"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-[13px] tracking-wider uppercase font-semibold text-[#E5B869] mr-2">
                Limited Offer
              </span>
              <span className="text-[#C5914A] opacity-70 mr-2 font-serif text-sm">
                —
              </span>
              <span className="text-xs sm:text-[13px] tracking-wide font-medium text-[#FEF0E0]">
                Grab your favorites before it's gone.
              </span>
              <span
                className="ml-6 sm:ml-8 text-[#C5914A] opacity-50 text-xs font-serif select-none"
                aria-hidden="true"
              >
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;