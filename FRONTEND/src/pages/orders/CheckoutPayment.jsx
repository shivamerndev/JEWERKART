import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CreditCard, 
  Smartphone, 
  Building2, 
  Banknote, 
  Lock, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';

const CheckoutPayment = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiId, setUpiId] = useState('priyasharma@okhdfcbank');
  const [processing, setProcessing] = useState(false);

  const amount = 19998;

  const handleCompleteOrder = () => {
    setProcessing(true);
    setTimeout(() => {
      const generatedOrderId = `JK-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      setProcessing(false);
      navigate(`/order-success/${generatedOrderId}`);
    }, 1200);
  };

  return (
    <main
      className="min-h-screen py-10 px-6 pb-20"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        
        {/* Stepper */}
        <div className="flex justify-center items-center gap-4 mb-12 flex-wrap">
          <Link to="/checkout" className="no-underline flex items-center gap-2">
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center text-[0.85rem]"
              style={{
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-light)',
              }}
            >
              ✓
            </span>
            <span className="text-[0.9rem]" style={{ color: 'var(--text-secondary)' }}>Review Bag</span>
          </Link>
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
              ✓
            </span>
            <span className="text-[0.9rem]" style={{ color: 'var(--text-secondary)' }}>Shipping Address</span>
          </Link>
          <ChevronRight size={16} style={{ color: 'var(--border-light)' }} />
          <div className="flex items-center gap-2">
            <span
              className="w-7 h-7 rounded-full text-[#FEF0E0] flex items-center justify-center text-[0.85rem] font-bold"
              style={{
                backgroundColor: 'var(--accent-slate)',
              }}
            >
              3
            </span>
            <span className="font-semibold text-[0.9rem]" style={{ color: 'var(--text-primary)' }}>Payment</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              STEP 3 OF 3
            </span>
          </div>
          <h1
            className="font-serif font-semibold mb-2"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
              color: 'var(--text-primary)',
            }}
          >
            Payment Selection
          </h1>
          <p className="font-garamond text-[1.1rem] m-0" style={{ color: 'var(--text-secondary)' }}>
            Encrypted payment gateway with instant transaction settlement.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-10">
          
          {/* Payment Methods */}
          <div className="col-span-12 md:col-span-7">
            <div className="flex flex-col gap-4">
              
              {/* UPI Option */}
              <div
                onClick={() => setPaymentMethod('upi')}
                className="bg-theme-card rounded-xl p-6 cursor-pointer"
                style={{
                  border: paymentMethod === 'upi' ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div className={`flex items-center justify-between ${paymentMethod === 'upi' ? 'mb-4' : 'mb-0'}`}>
                  <div className="flex items-center gap-3">
                    <Smartphone size={22} style={{ color: 'var(--theme-gold)' }} />
                    <div>
                      <h3 className="font-serif text-[1.05rem] m-0" style={{ color: 'var(--text-primary)' }}>
                        UPI / Instant QR
                      </h3>
                      <p className="m-0 text-[0.8rem]" style={{ color: 'var(--text-secondary)' }}>
                        Google Pay, PhonePe, Paytm, BHIM UPI
                      </p>
                    </div>
                  </div>
                  <div
                    className="w-5 h-5 rounded-full bg-white shrink-0"
                    style={{
                      border: paymentMethod === 'upi' ? '6px solid var(--theme-gold)' : '2px solid var(--border-light)',
                    }}
                  />
                </div>

                {paymentMethod === 'upi' && (
                  <div className="pt-4" style={{ borderTop: '1px solid var(--border-light)' }}>
                    <label className="block text-[0.8rem] font-semibold mb-1.5">
                      Enter your UPI ID / VPA
                    </label>
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="e.g. yourname@oksbi"
                      className="w-full p-[0.65rem] rounded-md box-border outline-none"
                      style={{
                        border: '1px solid var(--border-light)',
                        backgroundColor: 'var(--bg-card-warm)',
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Cards Option */}
              <div
                onClick={() => setPaymentMethod('card')}
                className="bg-theme-card rounded-xl p-6 cursor-pointer"
                style={{
                  border: paymentMethod === 'card' ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div className={`flex items-center justify-between ${paymentMethod === 'card' ? 'mb-4' : 'mb-0'}`}>
                  <div className="flex items-center gap-3">
                    <CreditCard size={22} style={{ color: 'var(--theme-gold)' }} />
                    <div>
                      <h3 className="font-serif text-[1.05rem] m-0" style={{ color: 'var(--text-primary)' }}>
                        Credit or Debit Card
                      </h3>
                      <p className="m-0 text-[0.8rem]" style={{ color: 'var(--text-secondary)' }}>
                        Visa, MasterCard, RuPay, American Express
                      </p>
                    </div>
                  </div>
                  <div
                    className="w-5 h-5 rounded-full bg-white shrink-0"
                    style={{
                      border: paymentMethod === 'card' ? '6px solid var(--theme-gold)' : '2px solid var(--border-light)',
                    }}
                  />
                </div>

                {paymentMethod === 'card' && (
                  <div className="pt-4 flex flex-col gap-3" style={{ borderTop: '1px solid var(--border-light)' }}>
                    <div>
                      <label className="block text-[0.8rem] font-semibold mb-1">Card Number</label>
                      <input
                        type="text"
                        defaultValue="4111 2222 3333 4444"
                        className="w-full p-2.5 rounded-md box-border outline-none"
                        style={{
                          border: '1px solid var(--border-light)',
                          backgroundColor: 'var(--bg-card-warm)',
                        }}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[0.8rem] font-semibold mb-1">Expiry (MM/YY)</label>
                        <input
                          type="text"
                          defaultValue="08/29"
                          className="w-full p-2.5 rounded-md box-border outline-none"
                          style={{
                            border: '1px solid var(--border-light)',
                            backgroundColor: 'var(--bg-card-warm)',
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-[0.8rem] font-semibold mb-1">CVV</label>
                        <input
                          type="password"
                          defaultValue="789"
                          className="w-full p-2.5 rounded-md box-border outline-none"
                          style={{
                            border: '1px solid var(--border-light)',
                            backgroundColor: 'var(--bg-card-warm)',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Netbanking Option */}
              <div
                onClick={() => setPaymentMethod('netbanking')}
                className="bg-theme-card rounded-xl p-6 cursor-pointer"
                style={{
                  border: paymentMethod === 'netbanking' ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Building2 size={22} style={{ color: 'var(--theme-gold)' }} />
                    <div>
                      <h3 className="font-serif text-[1.05rem] m-0" style={{ color: 'var(--text-primary)' }}>
                        Net Banking
                      </h3>
                      <p className="m-0 text-[0.8rem]" style={{ color: 'var(--text-secondary)' }}>
                        All Major Indian Banks Supported
                      </p>
                    </div>
                  </div>
                  <div
                    className="w-5 h-5 rounded-full bg-white shrink-0"
                    style={{
                      border: paymentMethod === 'netbanking' ? '6px solid var(--theme-gold)' : '2px solid var(--border-light)',
                    }}
                  />
                </div>
              </div>

              {/* Cash On Delivery */}
              <div
                onClick={() => setPaymentMethod('cod')}
                className="bg-theme-card rounded-xl p-6 cursor-pointer"
                style={{
                  border: paymentMethod === 'cod' ? '2px solid var(--theme-gold)' : '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Banknote size={22} style={{ color: 'var(--theme-gold)' }} />
                    <div>
                      <h3 className="font-serif text-[1.05rem] m-0" style={{ color: 'var(--text-primary)' }}>
                        Cash on Delivery (Armored COD)
                      </h3>
                      <p className="m-0 text-[0.8rem]" style={{ color: 'var(--text-secondary)' }}>
                        Pay cash or UPI upon secret OTP verification at delivery
                      </p>
                    </div>
                  </div>
                  <div
                    className="w-5 h-5 rounded-full bg-white shrink-0"
                    style={{
                      border: paymentMethod === 'cod' ? '6px solid var(--theme-gold)' : '2px solid var(--border-light)',
                    }}
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Right Action Summary */}
          <div className="col-span-12 md:col-span-5">
            <div
              className="bg-theme-card rounded-2xl p-8 sticky top-8"
              style={{
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h2 className="font-serif text-[1.25rem] mb-5" style={{ color: 'var(--text-primary)' }}>
                Final Payable
              </h2>

              <div className="flex justify-between text-[1.35rem] font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                <span>Total Amount:</span>
                <span>₹{amount.toLocaleString('en-IN')}</span>
              </div>

              <button
                onClick={handleCompleteOrder}
                disabled={processing}
                className="btn-slate w-full p-4 rounded-lg font-semibold text-base flex items-center justify-center gap-2 mb-4 cursor-pointer disabled:cursor-not-allowed"
              >
                <Lock size={16} />
                {processing ? 'Securing Transaction...' : `Pay ₹${amount.toLocaleString('en-IN')} & Confirm`}
              </button>

              <div className="text-center">
                <Link to="/checkout/address" className="text-[0.85rem] no-underline" style={{ color: 'var(--theme-gold)' }}>
                  ← Modify Shipping Address
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
                <span>PCI-DSS Level 1 Compliant 256-Bit SSL Payment Shield</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default CheckoutPayment;
