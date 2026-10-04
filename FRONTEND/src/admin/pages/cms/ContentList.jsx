import React, { useState } from 'react';
import { FileText, Plus, Edit, Eye } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const initialContent = [
  {
    id: 'cnt-1',
    title: 'The Art of Diamond Certification: IGI & GIA Explained',
    slug: 'diamond-certification-guide',
    type: 'Editorial Journal',
    author: 'Chief Gemologist',
    updatedAt: '02 Oct 2026',
    status: 'Published'
  },
  {
    id: 'cnt-2',
    title: 'Jewellery Care: Maintaining 22K Gold and Diamond Lustre',
    slug: 'jewellery-care-guide',
    type: 'Care Guide',
    author: 'Atelier Lead',
    updatedAt: '24 Sep 2026',
    status: 'Published'
  },
  {
    id: 'cnt-3',
    title: 'Heritage Polki vs Kundan: A Connoisseur’s Comparison',
    slug: 'polki-vs-kundan-heritage',
    type: 'Editorial Journal',
    author: 'Heritage Curator',
    updatedAt: '18 Sep 2026',
    status: 'Published'
  }
];

const ContentList = () => {
  const [articles, setArticles] = useState(initialContent);

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Editorial Content, Stories & Brand Journals"
        subtitle="Manage customer education articles, jewellery connoisseur guides and brand press"
        breadcrumbs={[{ label: 'Content' }]}
        actions={
          <button className="flex items-center space-x-1.5 px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold rounded-lg text-xs transition-colors shadow-xs">
            <Plus className="w-3.5 h-3.5" />
            <span>Write New Journal Post</span>
          </button>
        }
      />

      <div className="bg-white border border-stone-200 rounded-xl shadow-xs overflow-hidden">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-stone-50 text-stone-500 font-semibold border-b border-stone-200">
              <th className="p-3 pl-5">Article Title</th>
              <th className="p-3">Slug</th>
              <th className="p-3">Type</th>
              <th className="p-3">Author</th>
              <th className="p-3">Last Updated</th>
              <th className="p-3 pr-5 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {articles.map((art) => (
              <tr key={art.id} className="hover:bg-amber-50/20">
                <td className="p-3 pl-5 font-semibold text-stone-900">{art.title}</td>
                <td className="p-3 font-mono text-stone-500">/{art.slug}</td>
                <td className="p-3 font-medium text-stone-700">{art.type}</td>
                <td className="p-3 text-stone-600">{art.author}</td>
                <td className="p-3 text-stone-400">{art.updatedAt}</td>
                <td className="p-3 pr-5 text-right">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full font-bold text-[10px]">
                    {art.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContentList;
