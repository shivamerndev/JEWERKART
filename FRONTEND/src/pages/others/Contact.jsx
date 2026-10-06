import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  Video, 
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'Bespoke Bridal Jewellery',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main
      className="min-h-[calc(100vh-250px)] pt-12 px-6 pb-20"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">CONCIERGE & ATELIER</span>
          </div>
          <h1
            className="font-serif font-semibold mb-2 tracking-[1px]"
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              color: 'var(--text-primary)',
            }}
          >
            Connect With Our Concierge
          </h1>
          <p
            className="font-garamond text-[1.2rem] max-w-[640px] mx-auto leading-[1.6]"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            Whether seeking bespoke bridal creations, hallmark certification assistance, or an exclusive private viewing, our dedicated jewellery specialists await.
          </p>
        </div>

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(340px,1.5fr)] gap-12 items-start">
          {/* LEFT: Atelier & Heritage Contact Info */}
          <div className="flex flex-col gap-8">
            {/* Atelier Card */}
            <div
              className="rounded-lg p-9"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h2 className="font-serif text-[1.4rem] font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Flagship Studio & Atelier
              </h2>

              <div className="flex flex-col gap-6 text-[0.9rem]">
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div
                    className="w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: 'var(--theme-champagne)',
                      color: 'var(--theme-gold)',
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="m-0 mb-1 text-[0.95rem] font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Jewerkart Flagship Atelier
                    </h3>
                    <p className="m-0 leading-[1.5]" style={{ color: 'var(--text-secondary)' }}>
                      Heritage Court, Ground Floor, Old Custom House Road, Colaba, Mumbai 400001, Maharashtra, India.
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex gap-4 items-start">
                  <div
                    className="w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: 'var(--theme-champagne)',
                      color: 'var(--theme-gold)',
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3 className="m-0 mb-1 text-[0.95rem] font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Private Client Hotline
                    </h3>
                    <p className="m-0 mb-0.5 font-semibold" style={{ color: 'var(--text-primary)' }}>
                      +91 98765 43210 / +91 (022) 2284 9900
                    </p>
                    <p className="m-0 text-[0.8rem]" style={{ color: 'var(--text-secondary)' }}>
                      Toll-free across India • WhatsApp Concierge Active
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div
                    className="w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: 'var(--theme-champagne)',
                      color: 'var(--theme-gold)',
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 className="m-0 mb-1 text-[0.95rem] font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Direct Correspondence
                    </h3>
                    <p className="m-0 mb-0.5 font-semibold" style={{ color: 'var(--text-primary)' }}>
                      concierge@jewerkart.com
                    </p>
                    <p className="m-0 text-[0.8rem]" style={{ color: 'var(--text-secondary)' }}>
                      Customer Support: support@jewerkart.com
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 items-start">
                  <div
                    className="w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: 'var(--theme-champagne)',
                      color: 'var(--theme-gold)',
                    }}
                  >
                    <Clock size={18} />
                  </div>
                  <div>
                    <h3 className="m-0 mb-1 text-[0.95rem] font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Atelier Hours
                    </h3>
                    <p className="m-0 mb-0.5" style={{ color: 'var(--text-secondary)' }}>
                      Monday – Saturday: 10:00 AM – 7:30 PM IST
                    </p>
                    <p className="m-0 text-[0.8rem] font-semibold" style={{ color: 'var(--text-gold)' }}>
                      Sunday: Private Appointments Only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exclusive Services Options */}
            <div
              className="rounded-lg p-7"
              style={{
                backgroundColor: 'var(--theme-champagne-light)',
                border: '1px solid var(--border-light)',
              }}
            >
              <div className="flex items-center gap-2 mb-5">
                <Sparkles size={18} style={{ color: 'var(--theme-gold)' }} />
                <h3 className="font-serif text-[1.15rem] m-0 font-bold" style={{ color: 'var(--text-primary)' }}>
                  Private Concierge Services
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-start">
                  <Calendar size={18} className="mt-0.5 shrink-0" style={{ color: 'var(--theme-gold)' }} />
                  <div>
                    <strong className="text-[0.85rem]" style={{ color: 'var(--text-primary)' }}>Private Atelier Viewing</strong>
                    <p className="m-0 mt-0.5 text-[0.75rem]" style={{ color: 'var(--text-secondary)' }}>
                      Reserve a private luxury salon suite for yourself and family to view bridal and bespoke jewels.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Video size={18} className="mt-0.5 shrink-0" style={{ color: 'var(--theme-gold)' }} />
                  <div>
                    <strong className="text-[0.85rem]" style={{ color: 'var(--text-primary)' }}>Virtual High-Definition Consultation</strong>
                    <p className="m-0 mt-0.5 text-[0.75rem]" style={{ color: 'var(--text-secondary)' }}>
                      Connect over 4K video with our master gemologist from the comfort of your residence.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <ShieldCheck size={18} className="mt-0.5 shrink-0" style={{ color: 'var(--theme-gold)' }} />
                  <div>
                    <strong className="text-[0.85rem]" style={{ color: 'var(--text-primary)' }}>Hallmarking & Lifetime Care Inspection</strong>
                    <p className="m-0 mt-0.5 text-[0.75rem]" style={{ color: 'var(--text-secondary)' }}>
                      Complimentary ultrasonic cleaning and laser hallmark verification for all Jewerkart heirlooms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Inquiry Form */}
          <div
            className="rounded-lg p-10"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            {isSubmitted ? (
              <div className="text-center py-12 px-4">
                <div
                  className="w-[70px] h-[70px] rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    backgroundColor: 'var(--theme-champagne)',
                    border: '2px solid var(--theme-gold)',
                  }}
                >
                  <CheckCircle2 size={36} style={{ color: 'var(--theme-gold)' }} />
                </div>
                <h2 className="font-serif text-[1.75rem] m-0 mb-2 font-bold" style={{ color: 'var(--text-primary)' }}>
                  Message Received
                </h2>
                <p className="font-garamond text-[1.15rem] max-w-[420px] mx-auto mb-8 leading-[1.6]" style={{ color: 'var(--text-secondary)' }}>
                  Thank you, <strong>{formData.fullName}</strong>. A dedicated senior client advisor has received your request and will reach out within 4 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ fullName: '', email: '', phone: '', inquiryType: 'Bespoke Bridal Jewellery', message: '' });
                  }}
                  className="btn-outline-dark py-2.5 px-7 text-[0.85rem] tracking-[1px] uppercase cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="pb-5 mb-7" style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <span className="badge-gold text-[9px] mb-1.5 inline-block">
                    PRIORITY INQUIRY
                  </span>
                  <h2 className="font-serif text-[1.5rem] m-0 font-bold" style={{ color: 'var(--text-primary)' }}>
                    Send an Inquiry to the Atelier
                  </h2>
                  <p className="m-0 mt-1.5 text-[0.85rem]" style={{ color: 'var(--text-secondary)' }}>
                    Please fill out the form below. We treat every client interaction with utmost confidentiality.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-[0.8rem] font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Maharani Gayatri Devi / Priya Sharma"
                      required
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full py-3 px-3.5 rounded bg-[#FFFDF9] text-[0.9rem] outline-none box-border"
                      style={{
                        border: '1px solid var(--border-light)',
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-[0.8rem] font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full py-3 px-3.5 rounded bg-[#FFFDF9] text-[0.9rem] outline-none box-border"
                      style={{
                        border: '1px solid var(--border-light)',
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-[0.8rem] font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full py-3 px-3.5 rounded bg-[#FFFDF9] text-[0.9rem] outline-none box-border"
                      style={{
                        border: '1px solid var(--border-light)',
                      }}
                    />
                  </div>

                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-[0.8rem] font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                      Inquiry Nature
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => handleInputChange('inquiryType', e.target.value)}
                      className="w-full py-3 px-3.5 rounded bg-[#FFFDF9] text-[0.9rem] outline-none box-border"
                      style={{
                        border: '1px solid var(--border-light)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      <option value="Bespoke Bridal Jewellery">Bespoke Bridal & Heirloom Kundan Jewellery</option>
                      <option value="Atelier Private Appointment">Book Private Atelier Salon Appointment</option>
                      <option value="Virtual Styling Consultation">Schedule 4K Video Styling Consultation</option>
                      <option value="Order Tracking & Logistics">Existing Order Tracking & Logistics</option>
                      <option value="Hallmark & Purity Certificate">BIS 925 Hallmark & Authenticity Inquiries</option>
                      <option value="Lifetime Care & Re-polishing">Lifetime Care & Re-polishing Services</option>
                      <option value="Press & Corporate Gifting">Corporate Gifting & Media Inquiries</option>
                    </select>
                  </div>

                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-[0.8rem] font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                      Your Message or Custom Request *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Please describe your requirements, preferred metals (925 Silver / 22K Gold Vermeil), gemstone preferences, or date for atelier appointment..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="w-full py-3 px-3.5 rounded bg-[#FFFDF9] text-[0.9rem] outline-none box-border leading-[1.5]"
                      style={{
                        border: '1px solid var(--border-light)',
                        fontFamily: 'var(--font-sans)',
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-slate w-full p-4 text-[0.9rem] font-semibold tracking-[1.5px] uppercase rounded flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Send size={16} />
                  {isSubmitting ? 'Transmitting to Concierge...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
