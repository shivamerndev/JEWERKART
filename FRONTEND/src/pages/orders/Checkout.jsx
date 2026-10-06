import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  CreditCard, 
  Truck, 
  CheckCircle2, 
  ArrowRight,
  Lock,
  ChevronRight
} from 'lucide-react';
import { MOCK_PRODUCTS } from '../../utils/mockData';

const Checkout = () => {
  const navigate = useNavigate();

  const checkoutItems = [
    {
      id: 1,
      name: 'Kundan Jhumka Earrings',
      purity: '925 Sterling Silver • 22K Gold Vermeil',
      price: 4999,
      quantity: 1,
      image: '/category_earrings.jpg',
    },
    {
      id: 3,
      name: 'Bridal Temple Heritage Necklace',
      purity: '800 Fine Silver with Temple Gold Polish',
      price: 14999,
      quantity: 1,
      image: '/category_necklace.jpg',
    },
  ];

  const subtotal = checkoutItems.reduce((acc, it) => acc + it.price * it.quantity, 0);

  return (
    <main
      className="min-h-screen py-10 px-6 pb-20"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        
        {/* Checkout Stepper Bar */}
        <div className="flex justify-center items-center gap-4 mb-12 flex-wrap">
          <div className="flex items-center gap-2">
            <span
              className="w-7 h-7 rounded-full text-[#FEF0E0] flex items-center justify-center text-[0.85rem] font-bold"
              style={{
                backgroundColor: 'var(--accent-slate)',
              }}
            >
              1
            </span>
            <span className="font-semibold text-[0.9rem]" style={{ color: 'var(--text-primary)' }}>Review Bag</span>
          </div>
          <ChevronRight size={16} style={{ color: 'var(--border-light)' }} />
          <Link to="/checkout/address" className="no-underline flex items-center gap-2">
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center text-[0.85rem]"
              style={{
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-light)',
              }}
            >
              2
            </span>
            <span className="text-[0.9rem]" style={{ color: 'var(--text-secondary)' }}>Shipping Address</span>
          </Link>
          <ChevronRight size={16} style={{ color: 'var(--border-light)' }} />
          <Link to="/checkout/payment" className="no-underline flex items-center gap-2">
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center text-[0.85rem]"
              style={{
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-light)',
              }}
            >
              3
            </span>
            <span className="text-[0.9rem]" style={{ color: 'var(--text-secondary)' }}>Payment</span>
          </Link>
        </div>

        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              STEP 1 OF 3
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
              color: 'var(--text-primary)',
            }}
          >
            Review Your Order
          </h1>
          <p className="font-garamond text-[1.1rem] m-0" style={{ color: 'var(--text-secondary)' }}>
            Verify your heirloom selections before specifying your armored delivery destination.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-10">
          
          {/* Items Container */}
          <div className="col-span-12 md:col-span-7">
            <div
              className="bg-theme-card rounded-2xl p-8"
              style={{
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h2 className="font-serif text-[1.25rem] mb-6" style={{ color: 'var(--text-primary)' }}>
                Items Ready for Atelier Dispatch
              </h2>

              <div className="flex flex-col gap-5">
                {checkoutItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-5 pb-5 items-center"
                    style={{
                      borderBottom: '1px solid var(--border-light)',
                    }}
                  >
                    <div
                      className="w-20 h-20 rounded-lg overflow-hidden shrink-0"
                      style={{
                        backgroundColor: 'var(--bg-circle-item)',
                      }}
                    >
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="grow">
                      <h3 className="font-serif text-base font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                        {item.name}
                      </h3>
                      <p className="text-[0.8rem] mb-1" style={{ color: 'var(--text-secondary)' }}>
                        {item.purity}
                      </p>
                      <div className="text-[0.8rem]" style={{ color: 'var(--text-secondary)' }}>
                        Quantity: <strong>{item.quantity}</strong>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[1.1rem] font-bold" style={{ color: 'var(--text-primary)' }}>
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Assurance */}
              <div
                className="mt-6 p-4 rounded-lg flex items-center gap-3"
                style={{
                  backgroundColor: 'var(--theme-champagne-light)',
                  border: '1px solid var(--border-light)',
                }}
              >
                <Truck size={22} className="shrink-0" style={{ color: 'var(--theme-gold)' }} />
                <div className="text-[0.82rem]" style={{ color: 'var(--text-primary)' }}>
                  <strong>Sequel Armored Logistics</strong> will deliver with transit insurance. Secure OTP verification upon delivery.
                </div>
              </div>
            </div>
          </div>

          {/* Right Summary & Next Step */}
          <div className="col-span-12 md:col-span-5">
            <div
              className="bg-theme-card rounded-2xl p-8"
              style={{
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h2 className="font-serif text-[1.25rem] mb-5" style={{ color: 'var(--text-primary)' }}>
                Pricing Summary
              </h2>

              <div className="flex flex-col gap-[0.85rem] mb-6">
                <div className="flex justify-between text-[0.9rem]" style={{ color: 'var(--text-secondary)' }}>
                  <span>Items Subtotal</span>
                  <span style={{ color: 'var(--text-primary)' }}>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-[0.9rem]" style={{ color: 'var(--text-secondary)' }}>
                  <span>Armored Insured Shipping</span>
                  <span className="text-emerald-800 font-semibold">COMPLIMENTARY</span>
                </div>
                <div className="flex justify-between text-[0.9rem]" style={{ color: 'var(--text-secondary)' }}>
                  <span>Taxes (3% Fine Jewellery GST)</span>
                  <span style={{ color: 'var(--text-primary)' }}>Included</span>
                </div>
                <div
                  className="flex justify-between text-[1.25rem] font-bold pt-4"
                  style={{
                    color: 'var(--text-primary)',
                    borderTop: '1px solid var(--border-light)',
                  }}
                >
                  <span>Grand Total</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout/address')}
                className="btn-slate w-full p-[0.95rem] rounded-lg font-semibold text-base flex items-center justify-center gap-2 cursor-pointer mb-4"
              >
                Proceed to Shipping Address <ArrowRight size={16} />
              </button>

              <div className="text-center">
                <Link to="/cart" className="text-[0.85rem] no-underline" style={{ color: 'var(--theme-gold)' }}>
                  ← Modify Shopping Bag
                </Link>
              </div>

              <div
                className="mt-6 pt-5 flex items-center gap-2 text-[0.8rem]"
                style={{
                  borderTop: '1px solid var(--border-light)',
                  color: 'var(--text-secondary)',
                }}
              >
                <ShieldCheck size={18} className="shrink-0" style={{ color: 'var(--theme-gold)' }} />
                <span>100% Transit-Insured Armored Delivery Guarantee</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default Checkout;
