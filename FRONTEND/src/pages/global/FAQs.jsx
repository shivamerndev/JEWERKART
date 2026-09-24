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
      style={{
        minHeight: 'calc(100vh - 250px)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '3rem 1.5rem 5rem',
      }}
    >
      <div
        style={{
          maxWidth: '960px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>HELP & ADVICE</span>
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: '0 0 0.5rem',
              letterSpacing: '1px',
            }}
          >
            Frequently Asked Questions
          </h1>
          <p
            className="font-garamond"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.15rem',
              margin: '0 auto',
              maxWidth: '620px',
            }}
          >
            Everything you need to know about our heirloom craftsmanship, hallmark certification, insured delivery, and lifetime care.
          </p>
        </div>

        {/* Search Bar */}
        <div style={{ maxWidth: '640px', margin: '0 auto 2.5rem' }}>
          <div
            style={{
              position: 'relative',
              backgroundColor: 'var(--bg-card)',
              borderRadius: '30px',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              alignItems: 'center',
              padding: '0.6rem 1.25rem',
            }}
          >
            <Search size={18} style={{ color: 'var(--text-secondary)', marginRight: '0.75rem' }} />
            <input
              type="text"
              placeholder="Search by topic (e.g. hallmarking, delivery time, return policy)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                fontSize: '0.95rem',
                backgroundColor: 'transparent',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-sans)',
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  padding: '2px 6px',
                }}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
          }}
        >
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: '20px',
                  border: isSelected ? '1px solid var(--theme-gold)' : '1px solid var(--border-light)',
                  backgroundColor: isSelected ? 'var(--text-primary)' : 'var(--bg-card)',
                  color: isSelected ? '#FEF0E0' : 'var(--text-primary)',
                  fontSize: '0.8rem',
                  fontWeight: isSelected ? '600' : '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 2px 8px rgba(28,20,14,0.15)' : 'none',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Accordion Questions List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3.5rem' }}>
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderRadius: '8px',
                    border: '1px solid var(--border-light)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      gap: '1rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: isOpen ? 'var(--theme-gold)' : 'var(--text-primary)',
                        fontFamily: 'var(--font-sans)',
                        lineHeight: '1.5',
                      }}
                    >
                      {faq.question}
                    </span>
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: isOpen ? 'var(--theme-champagne)' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                        color: isOpen ? 'var(--theme-gold)' : 'var(--text-secondary)',
                      }}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 1.5rem 1.35rem',
                        borderTop: '1px solid var(--border-light)',
                        backgroundColor: 'var(--theme-champagne-light)',
                      }}
                    >
                      <p
                        style={{
                          margin: '1rem 0 0',
                          fontSize: '0.9rem',
                          color: 'var(--text-secondary)',
                          lineHeight: '1.7',
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
              style={{
                textAlign: 'center',
                padding: '3rem 1.5rem',
                backgroundColor: 'var(--bg-card)',
                borderRadius: '8px',
                border: '1px solid var(--border-light)',
              }}
            >
              <HelpCircle size={40} style={{ color: 'var(--border-light)', margin: '0 auto 0.75rem', display: 'block' }} />
              <h3 className="font-serif" style={{ fontSize: '1.25rem', margin: '0 0 0.5rem', color: 'var(--text-primary)' }}>
                No matching answers found
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                Try searching for other keywords or speak directly to our atelier concierge.
              </p>
            </div>
          )}
        </div>

        {/* Bottom Help Banner */}
        <div
          style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: '12px',
            border: '1px solid var(--border-light)',
            padding: '2.5rem 2rem',
            textAlign: 'center',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
            background: 'linear-gradient(135deg, #FFFDF9 0%, #FEF0E0 100%)',
          }}
        >
          <Sparkles size={28} style={{ color: 'var(--theme-gold)', margin: '0 auto 0.75rem' }} />
          <h3 className="font-serif" style={{ fontSize: '1.5rem', margin: '0 0 0.5rem', fontWeight: '700', color: 'var(--text-primary)' }}>
            Still have questions? We are here to help.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '540px', margin: '0 auto 1.5rem' }}>
            Our team of certified gemologists and jewellery stylists are available Monday to Saturday, 10 AM to 7 PM IST.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              className="btn-slate"
              style={{
                padding: '0.75rem 1.75rem',
                fontSize: '0.85rem',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                borderRadius: '4px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <MessageCircle size={16} /> Contact Concierge
            </Link>

            <a
              href="tel:+919876543210"
              className="btn-gold"
              style={{
                padding: '0.75rem 1.75rem',
                fontSize: '0.85rem',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                borderRadius: '4px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
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
