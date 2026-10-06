import { Star, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {

  const navigate = useNavigate()

  return (
    <div
      onClick={()=>alert("hey")}
      className="bg-theme-card rounded-[4px] overflow-hidden border border-[var(--border-light)] shadow-[var(--shadow-sm)] transition-[box-shadow,transform] duration-300 cursor-pointer hover:shadow-[var(--shadow-lg)] hover:-translate-y-1"
    >
      {/* Image Area */}
      <div
        className="w-full h-[180px] flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: 'var(--bg-circle-item)' }}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover block transition-transform duration-300"
          />
        ) : (
          <div
            className="font-garamond text-theme-secondary text-center text-[0.85rem] tracking-[1px]"
          >
            Jewerkart
          </div>
        )}

        {/* Wishlist Button */}
        <button
          aria-label="Add to wishlist"
          className="wishlist-btn absolute top-2 right-2 border-none rounded-full w-8 h-8 flex items-center justify-center cursor-pointer opacity-0 transition-opacity duration-200 shadow-[var(--shadow-sm)]"
          style={{ background: 'var(--bg-card)' }}
        >
          <Heart size={14} style={{ color: 'var(--text-primary)' }} />
        </button>

        {/* Badge */}
        {product.badge && (
          <span
            className="badge-925 absolute top-2 left-2"
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-[0.875rem_1rem]">
        <h3
          className="text-theme-primary text-[0.825rem] font-semibold m-0 mb-[0.35rem] overflow-hidden text-ellipsis whitespace-nowrap"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {product.name}
        </h3>

        <p
          className="text-theme-primary text-base font-bold m-0 mb-2"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {product.price}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-[0.4rem] mb-3">
          <div className="flex gap-px">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                fill={i < Math.floor(product.rating) ? '#C5914A' : 'none'}
                style={{ color: i < Math.floor(product.rating) ? '#C5914A' : '#D8BF9F' }}
              />
            ))}
          </div>
          <span
            className="text-theme-secondary text-[0.7rem]"
          >
            ({product.reviews})
          </span>
        </div>

        <button
          className="btn-slate w-full py-[0.55rem] px-0 rounded-[2px] text-[0.725rem] tracking-[1px] uppercase cursor-pointer"
        >
          Add to Cart
        </button>
      </div>

      {/* CSS for hover wishlist reveal */}
      <style>{`
        .bg-theme-card:hover .wishlist-btn {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
