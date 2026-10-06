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
      <div className="max-w-[1280px] mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <h3
              className="font-serif text-2xl font-bold tracking-[2px] mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              JEWERKART
            </h3>
            <p
              className="text-theme-secondary text-[0.875rem] leading-[1.7] mb-5"
            >
              Crafting timeless elegance in 925 sterling silver and fine jewellery. Every piece tells a story of artistry, heritage, and modern sophistication.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {[Globe, Mail, Send].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="flex transition-[color,transform] duration-200"
                  style={{ color: 'var(--text-secondary)' }}
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
              className="text-[0.8rem] font-semibold tracking-[1.5px] uppercase mb-5"
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Quick Links
            </h4>
            <ul className="list-none p-0 m-0">
              {[
                { name: 'Collections', path: '/collections' },
                { name: 'New Arrivals', path: '/new-arrivals' },
                { name: 'Best Sellers', path: '/best-sellers' },
                { name: 'Gifts Boutique', path: '/gifts' },
              ].map((item) => (
                <li key={item.name} className="mb-3">
                  <Link
                    to={item.path}
                    className="text-theme-secondary no-underline text-[0.875rem] transition-colors duration-200"
                    onMouseEnter={(e) => (e.target.style.color = 'var(--text-gold)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4
              className="text-[0.8rem] font-semibold tracking-[1.5px] uppercase mb-5"
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Customer Care
            </h4>
            <ul className="list-none p-0 m-0">
              {[
                { name: 'Frequently Asked Questions', path: '/faqs' },
                { name: 'Track Order Live', path: '/track-order' },
                { name: 'Shipping & Armored Delivery', path: '/shipping-information' },
                { name: '15-Day Return Policy', path: '/return-policy' },
                { name: 'Jewellery Sizing Guide', path: '/size-guide' },
                { name: 'Jewellery Care Guide', path: '/jewellery-care' },
              ].map((item) => (
                <li key={item.name} className="mb-3">
                  <Link
                    to={item.path}
                    className="text-theme-secondary no-underline text-[0.875rem] transition-colors duration-200"
                    onMouseEnter={(e) => (e.target.style.color = 'var(--text-gold)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-[0.8rem] font-semibold tracking-[1.5px] uppercase mb-5"
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Contact
            </h4>
            <div className="text-theme-secondary text-[0.875rem] leading-[1.8]">
              <p className="m-0 mb-2">support@jewerkart.com</p>
              <p className="m-0 mb-2">+91 98765 43210</p>
              <p className="m-0">Mon - Sat, 10AM - 7PM IST</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-10 pt-6 flex justify-between items-center"
          style={{ borderTop: '1px solid var(--border-light)' }}
        >
          <p className="text-theme-secondary text-[0.8rem] m-0">
            &copy; {new Date().getFullYear()} Jewerkart. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { name: 'About Atelier', path: '/about' },
              { name: 'Privacy Policy', path: '/privacy-policy' },
              { name: 'Terms & Conditions', path: '/terms-and-conditions' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-theme-secondary no-underline text-[0.8rem] transition-colors duration-200"
                onMouseEnter={(e) => (e.target.style.color = 'var(--text-gold)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;