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
      style={{
        minHeight: 'calc(100vh - 250px)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '3rem 1.5rem 5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="divider-ornament" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-925" style={{ fontSize: '9px', letterSpacing: '2px' }}>CONCIERGE & ATELIER</span>
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: '0 0 0.5rem',
              letterSpacing: '1px',
            }}
          >
            Connect With Our Concierge
          </h1>
          <p
            className="font-garamond"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.2rem',
              maxWidth: '640px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            Whether seeking bespoke bridal creations, hallmark certification assistance, or an exclusive private viewing, our dedicated jewellery specialists await.
          </p>
        </div>

        {/* Main Two-Column Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(340px, 1.5fr)',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* LEFT: Atelier & Heritage Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Atelier Card */}
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '8px',
                border: '1px solid var(--border-light)',
                padding: '2.25rem',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h2 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 1.5rem' }}>
                Flagship Studio & Atelier
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '0.9rem' }}>
                {/* Address */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--theme-champagne)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--theme-gold)',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 style={{ margin: '0 0 0.25rem', fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                      Jewerkart Flagship Atelier
                    </h3>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                      Heritage Court, Ground Floor, Old Custom House Road, Colaba, Mumbai 400001, Maharashtra, India.
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--theme-champagne)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--theme-gold)',
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3 style={{ margin: '0 0 0.25rem', fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                      Private Client Hotline
                    </h3>
                    <p style={{ margin: '0 0 0.15rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                      +91 98765 43210 / +91 (022) 2284 9900
                    </p>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Toll-free across India • WhatsApp Concierge Active
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--theme-champagne)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--theme-gold)',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 style={{ margin: '0 0 0.25rem', fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                      Direct Correspondence
                    </h3>
                    <p style={{ margin: '0 0 0.15rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                      concierge@jewerkart.com
                    </p>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Customer Support: support@jewerkart.com
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--theme-champagne)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--theme-gold)',
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={18} />
                  </div>
                  <div>
                    <h3 style={{ margin: '0 0 0.25rem', fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                      Atelier Hours
                    </h3>
                    <p style={{ margin: '0 0 0.15rem', color: 'var(--text-secondary)' }}>
                      Monday – Saturday: 10:00 AM – 7:30 PM IST
                    </p>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-gold)', fontWeight: '600' }}>
                      Sunday: Private Appointments Only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exclusive Services Options */}
            <div
              style={{
                backgroundColor: 'var(--theme-champagne-light)',
                borderRadius: '8px',
                border: '1px solid var(--border-light)',
                padding: '1.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Sparkles size={18} style={{ color: 'var(--theme-gold)' }} />
                <h3 className="font-serif" style={{ fontSize: '1.15rem', margin: 0, fontWeight: '700', color: 'var(--text-primary)' }}>
                  Private Concierge Services
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <Calendar size={18} style={{ color: 'var(--theme-gold)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>Private Atelier Viewing</strong>
                    <p style={{ margin: '0.15rem 0 0', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      Reserve a private luxury salon suite for yourself and family to view bridal and bespoke jewels.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <Video size={18} style={{ color: 'var(--theme-gold)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>Virtual High-Definition Consultation</strong>
                    <p style={{ margin: '0.15rem 0 0', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      Connect over 4K video with our master gemologist from the comfort of your residence.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--theme-gold)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>Hallmarking & Lifetime Care Inspection</strong>
                    <p style={{ margin: '0.15rem 0 0', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      Complimentary ultrasonic cleaning and laser hallmark verification for all Jewerkart heirlooms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Inquiry Form */}
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: '8px',
              border: '1px solid var(--border-light)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--theme-champagne)',
                    border: '2px solid var(--theme-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                  }}
                >
                  <CheckCircle2 size={36} style={{ color: 'var(--theme-gold)' }} />
                </div>
                <h2 className="font-serif" style={{ fontSize: '1.75rem', margin: '0 0 0.5rem', color: 'var(--text-primary)', fontWeight: '700' }}>
                  Message Received
                </h2>
                <p className="font-garamond" style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
                  Thank you, <strong>{formData.fullName}</strong>. A dedicated senior client advisor has received your request and will reach out within 4 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ fullName: '', email: '', phone: '', inquiryType: 'Bespoke Bridal Jewellery', message: '' });
                  }}
                  className="btn-outline-dark"
                  style={{
                    padding: '0.65rem 1.8rem',
                    fontSize: '0.85rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1.25rem', marginBottom: '1.75rem' }}>
                  <span className="badge-gold" style={{ fontSize: '9px', marginBottom: '0.4rem', display: 'inline-block' }}>
                    PRIORITY INQUIRY
                  </span>
                  <h2 className="font-serif" style={{ fontSize: '1.5rem', margin: 0, fontWeight: '700', color: 'var(--text-primary)' }}>
                    Send an Inquiry to the Atelier
                  </h2>
                  <p style={{ margin: '0.35rem 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Please fill out the form below. We treat every client interaction with utmost confidentiality.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Maharani Gayatri Devi / Priya Sharma"
                      required
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.9rem',
                        borderRadius: '4px',
                        border: '1px solid var(--border-light)',
                        backgroundColor: '#FFFDF9',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.9rem',
                        borderRadius: '4px',
                        border: '1px solid var(--border-light)',
                        backgroundColor: '#FFFDF9',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.9rem',
                        borderRadius: '4px',
                        border: '1px solid var(--border-light)',
                        backgroundColor: '#FFFDF9',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                      Inquiry Nature
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => handleInputChange('inquiryType', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.9rem',
                        borderRadius: '4px',
                        border: '1px solid var(--border-light)',
                        backgroundColor: '#FFFDF9',
                        fontSize: '0.9rem',
                        outline: 'none',
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

                  <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                      Your Message or Custom Request *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Please describe your requirements, preferred metals (925 Silver / 22K Gold Vermeil), gemstone preferences, or date for atelier appointment..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.9rem',
                        borderRadius: '4px',
                        border: '1px solid var(--border-light)',
                        backgroundColor: '#FFFDF9',
                        fontSize: '0.9rem',
                        outline: 'none',
                        fontFamily: 'var(--font-sans)',
                        lineHeight: '1.5',
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-slate"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
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
