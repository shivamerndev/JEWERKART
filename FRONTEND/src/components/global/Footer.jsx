import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      className="bg-theme-primary"
      style={{
        borderTop: '1px solid var(--border-light)',
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* Main Footer Content */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '3.5rem 1.5rem 2rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2.5rem',
          }}
        >
          {/* Brand Column */}
          <div>
            <h3
              className="font-serif"
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                letterSpacing: '2px',
                marginBottom: '1rem',
              }}
            >
              JEWERKART
            </h3>
            <p
              className="text-theme-secondary"
              style={{
                fontSize: '0.875rem',
                lineHeight: '1.7',
                marginBottom: '1.25rem',
              }}
            >
              Crafting timeless elegance in 925 sterling silver and fine jewellery. Every piece tells a story of artistry, heritage, and modern sophistication.
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[Globe, Mail, Send].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  style={{
                    color: 'var(--text-secondary)',
                    transition: 'color 0.2s ease, transform 0.2s ease',
                    display: 'flex',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--text-gold)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: 'var(--text-primary)',
                fontSize: '0.8rem',
                fontWeight: '600',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Collections', 'New Arrivals', 'Best Sellers', 'Sale'].map((item) => (
                <li key={item} style={{ marginBottom: '0.75rem' }}>
                  <Link
                    to="#"
                    className="text-theme-secondary"
                    style={{
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--text-gold)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4
              style={{
                color: 'var(--text-primary)',
                fontSize: '0.8rem',
                fontWeight: '600',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Customer Care
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['FAQs', 'Shipping & Delivery', 'Returns & Exchanges', 'Contact Us'].map(
                (item) => (
                  <li key={item} style={{ marginBottom: '0.75rem' }}>
                    <Link
                      to="#"
                      className="text-theme-secondary"
                      style={{
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.target.style.color = 'var(--text-gold)')}
                      onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              style={{
                color: 'var(--text-primary)',
                fontSize: '0.8rem',
                fontWeight: '600',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Contact
            </h4>
            <div
              className="text-theme-secondary"
              style={{
                fontSize: '0.875rem',
                lineHeight: '1.8',
              }}
            >
              <p style={{ margin: '0 0 0.5rem' }}>support@jewerkart.com</p>
              <p style={{ margin: '0 0 0.5rem' }}>+91 98765 43210</p>
              <p style={{ margin: 0 }}>Mon - Sat, 10AM - 7PM IST</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-light)',
            marginTop: '2.5rem',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p
            className="text-theme-secondary"
            style={{ fontSize: '0.8rem', margin: 0 }}
          >
            &copy; {new Date().getFullYear()} Jewerkart. All rights reserved.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
            }}
          >
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <Link
                key={item}
                to="#"
                className="text-theme-secondary"
                style={{
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--text-gold)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;