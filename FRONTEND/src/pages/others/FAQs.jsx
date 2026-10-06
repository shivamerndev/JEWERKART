import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ChevronDown, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Sparkles, 
  HeartHandshake, 
  HelpCircle,
  MessageCircle,
  Phone
} from 'lucide-react';

const FAQ_DATA = [
  {
    id: 1,
    category: 'authenticity',
    question: 'How do I know my jewellery is genuinely 925 Sterling Silver or Hallmarked?',
    answer: 'Every piece created at Jewerkart is rigorously assayed and laser-engraved with the official BIS 925 Hallmark logo and purity stamp. Furthermore, each jewellery delivery is accompanied by an authenticated Certificate of Authenticity certifying the silver purity, gemstone carat weight, and artisanal provenance.',
  },
  {
    id: 2,
    category: 'authenticity',
    question: 'What is 22K Gold Vermeil and how does it compare to standard gold plating?',
    answer: 'Gold vermeil is a premium standard of fine jewellery. Unlike standard thin flash plating, our gold vermeil features a thick layer of genuine 22-karat gold (at least 2.5 microns) electroplated over genuine 925 sterling silver. This guarantees exceptional brilliance, hypoallergenic comfort, and lasting durability without tarnishing.',
  },
  {
    id: 3,
    category: 'shipping',
    question: 'What is Armored Logistics and is my shipment insured during transit?',
    answer: 'Yes, 100% of shipments from Jewerkart are completely transit-insured via armored logistics partners (Sequel Secure Logistics & BlueDart Apex). Your jewellery travels in sealed, tamper-evident security pouches and requires a verified secret OTP on delivery to guarantee it reaches only your hands.',
  },
  {
    id: 4,
    category: 'shipping',
    question: 'How long does delivery take across India?',
    answer: 'Metro cities (Mumbai, Delhi NCR, Bengaluru, Hyderabad, Chennai, Kolkata) typically receive deliveries within 2-3 business days. Non-metro locations and Tier 2/3 cities are delivered within 4-5 business days. Bespoke bridal or custom engraved pieces may take 7-10 business days for atelier hand-finishing.',
  },
  {
    id: 5,
    category: 'returns',
    question: 'What is your 15-day return and exchange policy?',
    answer: 'We offer a 15-Day No-Questions-Asked Return & Exchange window on all unworn items in their original luxury packaging with the security tag intact. We arrange a complimentary doorstep pickup by armored courier, and upon rapid inspection at our atelier, your refund is credited within 24-48 hours.',
  },
  {
    id: 6,
    category: 'care',
    question: 'How should I store and care for my silver and kundan jewellery?',
    answer: 'Store each piece individually in the airtight velvet pouch and anti-tarnish ziplock provided by Jewerkart. Avoid direct contact with perfumes, hairsprays, chlorinating pools, or household chemicals. Put on your jewellery as the final touch after your perfume and lotions have dried.',
  },
  {
    id: 7,
    category: 'care',
    question: 'Does Jewerkart offer complimentary re-polishing and maintenance?',
    answer: 'Yes! Every purchase comes with a Complimentary Lifetime Care voucher. You may send your jewellery to our flagship atelier once every year for ultrasonic cleaning, stone tightening, and luxury rhodium/gold re-polishing free of charge.',
  },
  {
    id: 8,
    category: 'custom',
    question: 'Can I request bespoke bridal sets or personalized engravings?',
    answer: 'Certainly. Our private bridal concierge works closely with you to curate customized temple jewellery, heirloom Kundan sets, or custom engraved silver cuffs and bands. You can initiate a private consultation via our Contact page or schedule a video call with our lead gemologist.',
  },
  {
    id: 9,
    category: 'shipping',
    question: 'Can I pay via Cash on Delivery (COD)?',
    answer: 'Yes, Cash on Delivery is available for domestic orders up to ₹25,000 across serviceable pin codes in India. You may pay using cash or UPI directly to our delivery executive upon presentation of the parcel.',
  },
  {
    id: 10,
    category: 'authenticity',
    question: 'Are your pearls and gemstones natural or synthetic?',
    answer: 'We exclusively source high-grade natural freshwater pearls, genuine Basra pearls, and conflict-free semi-precious gemstones. Each stone is individually inspected for cut, clarity, and hue consistency prior to prong or bezel setting.',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Queries' },
  { id: 'authenticity', label: '925 Hallmarking & Purity' },
  { id: 'shipping', label: 'Armored Shipping & COD' },
  { id: 'returns', label: 'Returns & Exchange' },
  { id: 'care', label: 'Jewellery Care' },
  { id: 'custom', label: 'Bespoke & Bridal' },
];

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState([1, 3]); // Open the first & third by default

  const toggleAccordion = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main
      className="min-h-[calc(100vh-250px)] pt-12 px-6 pb-20"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-[960px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">HELP & ADVICE</span>
          </div>
          <h1
            className="font-serif font-semibold mb-2 tracking-[1px]"
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
              color: 'var(--text-primary)',
            }}
          >
            Frequently Asked Questions
          </h1>
          <p
            className="font-garamond text-[1.15rem] mx-auto max-w-[620px]"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            Everything you need to know about our heirloom craftsmanship, hallmark certification, insured delivery, and lifetime care.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-[640px] mx-auto mb-10">
          <div
            className="relative rounded-full flex items-center py-2.5 px-5"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <Search size={18} className="mr-3" style={{ color: 'var(--text-secondary)' }} />
            <input
              type="text"
              placeholder="Search by topic (e.g. hallmarking, delivery time, return policy)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border-none outline-none text-[0.95rem] bg-transparent"
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-sans)',
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="bg-transparent border-none text-[0.8rem] cursor-pointer py-0.5 px-1.5"
                style={{
                  color: 'var(--text-secondary)',
                }}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex justify-center gap-2.5 flex-wrap mb-10">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`py-2 px-4.5 rounded-full text-[0.8rem] cursor-pointer transition-all duration-200 ${
                  isSelected ? 'font-semibold shadow-[0_2px_8px_rgba(28,20,14,0.15)]' : 'font-medium'
                }`}
                style={{
                  border: isSelected ? '1px solid var(--theme-gold)' : '1px solid var(--border-light)',
                  backgroundColor: isSelected ? 'var(--text-primary)' : 'var(--bg-card)',
                  color: isSelected ? '#FEF0E0' : 'var(--text-primary)',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Accordion Questions List */}
        <div className="flex flex-col gap-4 mb-14">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="rounded-lg overflow-hidden transition-[border-color] duration-200"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full py-5 px-6 flex items-center justify-between bg-transparent border-none cursor-pointer text-left gap-4"
                  >
                    <span
                      className="text-base font-semibold leading-[1.5]"
                      style={{
                        color: isOpen ? 'var(--theme-gold)' : 'var(--text-primary)',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-250 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                      style={{
                        backgroundColor: isOpen ? 'var(--theme-champagne)' : 'transparent',
                        color: isOpen ? 'var(--theme-gold)' : 'var(--text-secondary)',
                      }}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      className="px-6 pb-5 pt-0"
                      style={{
                        borderTop: '1px solid var(--border-light)',
                        backgroundColor: 'var(--theme-champagne-light)',
                      }}
                    >
                      <p
                        className="mt-4 mb-0 text-[0.9rem] leading-[1.7]"
                        style={{
                          color: 'var(--text-secondary)',
                          fontFamily: 'var(--font-sans)',
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div
              className="text-center py-12 px-6 rounded-lg"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
              }}
            >
              <HelpCircle size={40} className="mx-auto mb-3 block" style={{ color: 'var(--border-light)' }} />
              <h3 className="font-serif text-[1.25rem] m-0 mb-2" style={{ color: 'var(--text-primary)' }}>
                No matching answers found
              </h3>
              <p className="text-[0.9rem] m-0" style={{ color: 'var(--text-secondary)' }}>
                Try searching for other keywords or speak directly to our atelier concierge.
              </p>
            </div>
          )}
        </div>

        {/* Bottom Help Banner */}
        <div
          className="rounded-xl py-10 px-8 text-center relative"
          style={{
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-md)',
            background: 'linear-gradient(135deg, #FFFDF9 0%, #FEF0E0 100%)',
          }}
        >
          <Sparkles size={28} className="mx-auto mb-3" style={{ color: 'var(--theme-gold)' }} />
          <h3 className="font-serif text-[1.5rem] m-0 mb-2 font-bold" style={{ color: 'var(--text-primary)' }}>
            Still have questions? We are here to help.
          </h3>
          <p className="text-[0.95rem] max-w-[540px] mx-auto mb-6" style={{ color: 'var(--text-secondary)' }}>
            Our team of certified gemologists and jewellery stylists are available Monday to Saturday, 10 AM to 7 PM IST.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="btn-slate py-3 px-7 text-[0.85rem] font-semibold tracking-[1px] uppercase rounded no-underline inline-flex items-center gap-2"
            >
              <MessageCircle size={16} /> Contact Concierge
            </Link>

            <a
              href="tel:+919876543210"
              className="btn-gold py-3 px-7 text-[0.85rem] font-semibold tracking-[1px] uppercase rounded no-underline inline-flex items-center gap-2"
            >
              <Phone size={16} /> Call +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FAQs;
