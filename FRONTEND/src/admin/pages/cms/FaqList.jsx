import React, { useState } from 'react';
import { HelpCircle, Plus, Edit, Trash2 } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const initialFaqs = [
  {
    id: 'faq-1',
    category: 'Bullion & Hallmark',
    question: 'How do I verify the BIS Hallmark stamp on my gold jewellery?',
    answer: 'Every gold item sold on Jewerkart bears the mandatory BIS triangular stamp, purity grade (916 for 22K, 750 for 18K), and a unique 6-character alphanumeric HUID.',
    displayOrder: 1
  },
  {
    id: 'faq-2',
    category: 'Secure Logistics',
    question: 'Are high-value solitaire deliveries insured during transit?',
    answer: 'Yes, 100% of shipments are transit-insured with BlueDart Apex Vault or Sequel Armoured Logistics up to the full invoice value until delivery OTP handoff.',
    displayOrder: 2
  },
  {
    id: 'faq-3',
    category: 'Returns & Exchange',
    question: 'What is the return window for solitaire diamond rings?',
    answer: 'We provide a 15-day no-questions-asked return policy along with lifetime buyback and exchange guarantee at prevailing bullion and diamond rates.',
    displayOrder: 3
  }
];

const FaqList = () => {
  const [faqs, setFaqs] = useState(initialFaqs);

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Frequently Asked Questions (FAQs)"
        subtitle="Manage customer support answers, hallmarking verification guides and logistics clarifications"
        breadcrumbs={[{ label: 'FAQs' }]}
        actions={
          <button className="flex items-center space-x-1.5 px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold rounded-lg text-xs transition-colors shadow-xs">
            <Plus className="w-3.5 h-3.5" />
            <span>Add New FAQ</span>
          </button>
        }
      />

      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.id} className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs text-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 bg-amber-50 text-amber-800 rounded font-bold text-[10px]">
                {f.category}
              </span>
              <span className="text-stone-400 font-mono text-[10px]">Order #{f.displayOrder}</span>
            </div>

            <h3 className="font-bold text-stone-900 text-sm">{f.question}</h3>
            <p className="text-stone-600 leading-relaxed">{f.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqList;
