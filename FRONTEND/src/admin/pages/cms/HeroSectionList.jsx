import React, { useState } from 'react';
import { Sparkles, Plus, Edit, Trash2 } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const initialHeroes = [
  {
    id: 'hero-1',
    heading: 'Timeless Heirloom Jewels For The Modern Royal',
    subheading: 'Certified Solitaires & 22K Hallmarked Gold Artistry',
    primaryCta: 'Explore Bridal Collection',
    ctaLink: '/collections/bridal-opulence',
    active: true,
    displayOrder: 1
  },
  {
    id: 'hero-2',
    heading: 'Everyday Minimalist 925 Silver',
    subheading: 'Tarnish-free silver designed for daily luxury living',
    primaryCta: 'Shop 925 Silver',
    ctaLink: '/shop?metal=silver',
    active: true,
    displayOrder: 2
  }
];

const HeroSectionList = () => {
  const [heroes, setHeroes] = useState(initialHeroes);

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Hero Carousels & Dynamic Headings"
        subtitle="Configure storefront hero slides, typography overlays and primary call-to-actions"
        breadcrumbs={[{ label: 'Hero Sections' }]}
        actions={
          <button className="flex items-center space-x-1.5 px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold rounded-lg text-xs transition-colors shadow-xs">
            <Plus className="w-3.5 h-3.5" />
            <span>Add Hero Slide</span>
          </button>
        }
      />

      <div className="space-y-4">
        {heroes.map((h) => (
          <div key={h.id} className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs text-xs space-y-3">
            <div className="flex items-center justify-between border-b border-stone-100 pb-2">
              <span className="font-bold text-stone-400 font-mono">Slide #{h.displayOrder}</span>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full font-bold text-[10px]">
                {h.active ? 'Active' : 'Disabled'}
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-stone-900 font-serif">{h.heading}</h3>
              <p className="text-stone-500 mt-1">{h.subheading}</p>
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] text-stone-600">
              <span>CTA Button: <strong className="text-stone-900 font-semibold">{h.primaryCta}</strong> &rarr; <span className="font-mono text-amber-700">{h.ctaLink}</span></span>
              <button className="text-stone-400 hover:text-amber-700 font-semibold">Edit Slide</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSectionList;
