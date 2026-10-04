import React, { useState } from 'react';
import { Star, CheckCircle, XCircle, Search, Filter, ShieldCheck, MessageSquare } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const initialReviews = [
  {
    id: 'rev-01',
    customer: 'Ritika Sengupta',
    product: 'Royal Solitaire 1.5ct Diamond Ring',
    sku: 'JW-RNG-041',
    rating: 5,
    title: 'Breathtaking brilliance and certification',
    comment: 'The solitaire sparkles brilliantly under natural light. Verified the IGI certificate number online, perfectly genuine. Worth every penny!',
    date: '03 Oct 2026',
    status: 'Approved',
    verifiedBuyer: true
  },
  {
    id: 'rev-02',
    customer: 'Mahesh Sharma',
    product: 'Traditional Temple Lakshmi Choker',
    sku: 'JW-NCK-112',
    rating: 5,
    title: 'Exquisite karigari for my daughter’s wedding',
    comment: 'Heavy traditional look with 22K hallmark stamp clearly visible. Packaging was luxury vault grade.',
    date: '01 Oct 2026',
    status: 'Approved',
    verifiedBuyer: true
  },
  {
    id: 'rev-03',
    customer: 'Neha Kapoor',
    product: 'Floral Rose Gold Diamond Bangle',
    sku: 'JW-BNG-089',
    rating: 4,
    title: 'Beautiful design, slight delay in shipping',
    comment: 'The diamonds and rose gold finish are stunning. Courier took 4 days instead of 2, but overall very happy.',
    date: '29 Sep 2026',
    status: 'Pending',
    verifiedBuyer: true
  }
];

const ReviewList = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [filterRating, setFilterRating] = useState('All');

  const handleStatusChange = (id, newStatus) => {
    setReviews(reviews.map(r => r.id === id ? { ...r, status: newStatus } : r));
  };

  const filtered = reviews.filter(r => {
    if (filterRating === 'All') return true;
    return r.rating === parseInt(filterRating);
  });

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Customer Reviews & Testimonials"
        subtitle="Moderate jewelry reviews, verified buyer claims and photographic evidence"
        breadcrumbs={[{ label: 'Reviews' }]}
      />

      <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-xs flex items-center justify-between text-xs">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-stone-700">Filter by Star Rating:</span>
          <select
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
            className="bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-1.5 focus:outline-hidden"
          >
            <option value="All">All Ratings</option>
            <option value="5">5 Stars Only</option>
            <option value="4">4 Stars Only</option>
            <option value="3">3 Stars & Below</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filtered.map((rev) => (
          <div key={rev.id} className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs text-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-stone-900">{rev.customer}</span>
                  {rev.verifiedBuyer && (
                    <span className="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[10px] font-semibold flex items-center">
                      <ShieldCheck className="w-3 h-3 mr-0.5" /> Verified Purchase
                    </span>
                  )}
                </div>
                <p className="text-stone-400 text-[11px] mt-0.5">
                  Item: <strong className="text-stone-700">{rev.product}</strong> ({rev.sku}) • {rev.date}
                </p>
              </div>

              <div className="flex items-center space-x-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-stone-200'}`}
                  />
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-stone-900 mb-1">{rev.title}</h4>
              <p className="text-stone-600 leading-relaxed">{rev.comment}</p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-stone-50">
              <span
                className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                  rev.status === 'Approved'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-800'
                }`}
              >
                {rev.status}
              </span>

              <div className="flex items-center space-x-2">
                {rev.status !== 'Approved' && (
                  <button
                    onClick={() => handleStatusChange(rev.id, 'Approved')}
                    className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold text-[11px]"
                  >
                    Approve & Publish
                  </button>
                )}
                {rev.status !== 'Rejected' && (
                  <button
                    onClick={() => handleStatusChange(rev.id, 'Rejected')}
                    className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg font-semibold text-[11px]"
                  >
                    Reject
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
