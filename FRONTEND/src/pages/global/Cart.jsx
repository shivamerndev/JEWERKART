import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';

// Sample initial cart data
const INITIAL_CART = [
  {
    id: '1',
    name: 'Navratna Aura Oval Statement Studs',
    price: 699,
    image: 'https://sundaraspark.com/cdn/shop/files/navratna-oval-statement-studs.jpg?v=1789228661&width=300',
    quantity: 1,
  },
];

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const total = item.price * item.quantity;

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item__image" />
      
      <div className="cart-item__details">
        <h3 className="cart-item__name">{item.name}</h3>
        <p className="cart-item__price">₹{item.price.toLocaleString()}</p>
      </div>

      <div className="cart-item__controls">
        <div className="quantity-controls">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            aria-label="Decrease quantity"
            className="quantity-btn"
          >
            <Minus size={16} />
          </button>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value) || 1)}
            min="1"
            className="quantity-input"
            aria-label="Quantity"
          />
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            aria-label="Increase quantity"
            className="quantity-btn"
          >
            <Plus size={16} />
          </button>
        </div>

        <button
          onClick={() => onRemove(item.id)}
          aria-label={`Remove ${item.name}`}
          className="remove-btn"
        >
          <Trash2 size={16} />
        </button>
      </div>

      <div className="cart-item__total">
        <p className="cart-item__total-price">₹{total.toLocaleString()}</p>
      </div>
    </div>
  );
};

const CartSummary = ({ subtotal, taxRate = 0.18 }) => {
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="cart-summary">
      <div className="summary-row">
        <span>Subtotal</span>
        <span>₹{subtotal.toLocaleString()}</span>
      </div>
      <div className="summary-row">
        <span>Tax (18%)</span>
        <span>₹{tax.toLocaleString()}</span>
      </div>
      <div className="summary-row summary-total">
        <span>Estimated total</span>
        <span>₹{total.toLocaleString()}</span>
      </div>
      <p className="summary-note">Taxes included. Shipping calculated at checkout.</p>
    </div>
  );
};

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(INITIAL_CART);

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((items) => items.filter((item) => item.id !== itemId));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const isEmpty = cartItems.length === 0;

  return (
    <main className="cart-container">
      <div className="cart-header">
        <h1>Your cart</h1>
        <Link to="/" className="link">
          Continue shopping
        </Link>
      </div>

      {isEmpty ? (
        <div className="cart-empty">
          <h2>Your cart is empty</h2>
          <p>Add some items to get started.</p>
          <Link to="/" className="btn btn-primary">
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemoveItem}
              />
            ))}
          </div>

          <aside className="cart-sidebar">
            <CartSummary subtotal={subtotal} />
            <button 
              onClick={() => navigate('/payment')}
              className="btn btn-primary btn-checkout"
            >
              Check out
            </button>
            <div className="cart-info">
              <p>
                Have an account?{' '}
                <Link to="/login" className="link">
                  Log in
                </Link>{' '}
                to check out faster.
              </p>
            </div>
          </aside>
        </div>
      )}

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .cart-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #1a1a1a;
        }

        .cart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          border-bottom: 1px solid #e5e5e5;
          padding-bottom: 1.5rem;
        }

        .cart-header h1 {
          font-size: 2rem;
          font-weight: 600;
        }

        .link {
          color: #0066cc;
          text-decoration: none;
          font-size: 0.95rem;
        }

        .link:hover {
          text-decoration: underline;
        }

        .cart-empty {
          text-align: center;
          padding: 4rem 2rem;
        }

        .cart-empty h2 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .cart-empty p {
          color: #666;
          margin-bottom: 1.5rem;
        }

        .cart-content {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .cart-content {
            grid-template-columns: 1fr;
          }
        }

        .cart-items {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .cart-item {
          display: grid;
          grid-template-columns: 100px 1fr auto auto;
          gap: 1.5rem;
          align-items: center;
          padding: 1.5rem;
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          background: #fafafa;
        }

        @media (max-width: 768px) {
          .cart-item {
            grid-template-columns: 80px 1fr;
            gap: 1rem;
          }

          .cart-item__controls,
          .cart-item__total {
            grid-column: 2;
          }
        }

        .cart-item__image {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 4px;
          background: #fff;
        }

        @media (max-width: 768px) {
          .cart-item__image {
            width: 80px;
            height: 80px;
          }
        }

        .cart-item__details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .cart-item__name {
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.4;
        }

        .cart-item__price {
          color: #666;
          font-size: 0.95rem;
        }

        .cart-item__controls {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          border: 1px solid #ddd;
          border-radius: 4px;
          background: #fff;
        }

        .quantity-btn {
          background: none;
          border: none;
          padding: 0.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          transition: color 0.2s;
        }

        .quantity-btn:hover {
          color: #000;
        }

        .quantity-input {
          width: 50px;
          border: none;
          text-align: center;
          font-size: 0.95rem;
          padding: 0.25rem;
        }

        .quantity-input:focus {
          outline: none;
        }

        .remove-btn {
          background: #fff;
          border: 1px solid #ddd;
          padding: 0.5rem;
          border-radius: 4px;
          cursor: pointer;
          color: #c41e3a;
          transition: all 0.2s;
        }

        .remove-btn:hover {
          background: #ffe6e6;
          border-color: #c41e3a;
        }

        .cart-item__total {
          text-align: right;
        }

        .cart-item__total-price {
          font-size: 1.1rem;
          font-weight: 600;
        }

        .cart-sidebar {
          position: sticky;
          top: 20px;
        }

        @media (max-width: 768px) {
          .cart-sidebar {
            position: static;
          }
        }

        .cart-summary {
          background: #fafafa;
          padding: 1.5rem;
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          margin-bottom: 1rem;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem 0;
          font-size: 0.95rem;
          color: #666;
          border-bottom: 1px solid #e5e5e5;
        }

        .summary-row:last-of-type {
          border-bottom: none;
        }

        .summary-total {
          padding: 1rem 0;
          font-size: 1.1rem;
          color: #000;
          font-weight: 600;
        }

        .summary-note {
          font-size: 0.85rem;
          color: #999;
          margin-top: 1rem;
          line-height: 1.4;
        }

        .btn {
          width: 100%;
          padding: 0.75rem;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-primary {
          background: #000;
          color: #fff;
        }

        .btn-primary:hover {
          background: #333;
        }

        .btn-checkout {
          margin-bottom: 1rem;
        }

        .cart-info {
          font-size: 0.9rem;
          color: #666;
          margin-top: 1.5rem;
          text-align: center;
          line-height: 1.6;
        }
      `}</style>
    </main>
  );
};

export default Cart;