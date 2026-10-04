import React, { useState } from 'react';
import { Image, Plus, Edit, Trash2, ExternalLink } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const initialBanners = [
  {
    id: 'ban-1',
    title: 'Diwali Royal Polki Showcase',
    placement: 'Homepage Main Hero Slider',
    targetUrl: '/collections/bridal-opulence',
    clicks: 14820,
    ctr: '6.4%',
    status: 'Active',
    dimensions: '1920x800 px'
  },
  {
    id: 'ban-2',
    title: 'Zero Making Charges on Solitaire Rings',
    placement: 'Mid-Page Feature Banner',
    targetUrl: '/category/rings',
    clicks: 8410,
    ctr: '4.8%',
    status: 'Active',
    dimensions: '1440x500 px'
  },
  {
    id: 'ban-3',
    title: 'Everyday 925 Silver Modern Edit',
    placement: 'Silver Category Header',
    targetUrl: '/category/silver',
    clicks: 3920,
    ctr: '5.1%',
    status: 'Active',
    dimensions: '1440x360 px'
  }
];

const BannerList = () => {
  const [banners, setBanners] = useState(initialBanners);

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Promotional Banners & Marketing Creative"
        subtitle="Manage homepage slider images, promotional ribbons, and click-through analytics"
        breadcrumbs={[{ label: 'Banners' }]}
        actions={
          <button className="flex items-center space-x-1.5 px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold rounded-lg text-xs transition-colors shadow-xs">
            <Plus className="w-3.5 h-3.5" />
            <span>Upload New Banner</span>
          </button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {banners.map((b) => (
          <div key={b.id} className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs text-xs flex flex-col justify-between">
            <div className="h-32 bg-stone-900 text-amber-200 flex items-center justify-center p-4 text-center font-serif font-bold relative">
              <span className="text-sm">{b.title}</span>
              <span className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/60 text-[9px] rounded text-stone-300 font-mono">
                {b.dimensions}
              </span>
            </div>

            <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <p className="font-semibold text-stone-800 text-xs">{b.placement}</p>
                <p className="text-[11px] text-amber-700 font-mono mt-0.5 truncate">{b.targetUrl}</p>
              </div>

              <div className="flex justify-between pt-2 border-t border-stone-100 text-stone-500 text-[11px]">
                <span>Clicks: <strong className="text-stone-800 font-mono">{b.clicks}</strong></span>
                <span>CTR: <strong className="text-emerald-700 font-mono">{b.ctr}</strong></span>
                <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded text-[10px]">
                  {b.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerList;
