import React, { useState } from 'react';
import { Heart, Share2, Truck, ShieldCheck } from 'lucide-react';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = {
    id: 9837338689766,
    title: 'Gold-plated cuff bracelet',
    brand: 'Sundara spark by mansi',
    price: 599,
    currency: 'INR',
    description: 'Elevate your everyday style with a vibrant burst of color. This contemporary gold-plated cuff bracelet blends modern geometric structural lines with a playful, multi-colored layout. Featuring a unique split triple-band design, it seamlessly transitions from a chic daytime accessory to an elegant evening statement piece.',
    image: '//sundaraspark.com/cdn/shop/files/IMG_7034.png?v=1784970939',
    inStock: false,
    tax: 'Taxes included',
    deliveryDate: 'Sep 23 - 24',
    viewerCount: 46,
  };

  const relatedProducts = [
    { id: 1, title: 'Two Tone Enamel Slim Gold Bracelet', price: 599, image: '//sundaraspark.com/cdn/shop/files/two-tone-slim-enamel-bangle.jpg?v=1789228749' },
    { id: 2, title: 'Ruby Solitaire Minimal Gold Bracelet', price: 599, image: '//sundaraspark.com/cdn/shop/files/ruby-solitaire-gold-bangle.jpg?v=1789227574' },
    { id: 3, title: 'Ruby Spark Double-Line Bracelet', price: 649, image: '//sundaraspark.com/cdn/shop/files/ruby-spark-double-bangle.jpg?v=1789227523' },
    { id: 4, title: 'Navratna Gemstone Slim Bracelet', price: 699, image: '//sundaraspark.com/cdn/shop/files/navratna-gemstone-bangle-pair.jpg?v=1789227533' },
  ];

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items to cart`);
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {[product.image].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className="w-20 h-20 rounded border-2 border-gray-300 hover:border-gray-600 transition"
                >
                  <img src={product.image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Brand */}
            <div>
              <p className="text-sm font-medium text-gray-600">{product.brand}</p>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {product.title}
              </h1>
            </div>

            {/* Price & Status */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-gray-900">
                  ₹{product.price}
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded">
                  Sale
                </span>
                <span className="px-3 py-1 bg-gray-300 text-gray-700 text-sm font-semibold rounded">
                  Sold out
                </span>
              </div>
              <p className="text-sm text-gray-600">{product.tax}. Shipping calculated at checkout.</p>
            </div>

            {/* Viewers Count */}
            <div className="flex items-center gap-2 p-3 bg-pink-50 rounded-lg w-fit">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                {product.viewerCount} people are viewing this product
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-12 text-center border-x border-gray-300 py-2 font-medium"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3 pt-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition ${
                  product.inStock
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {product.inStock ? 'Add to cart' : 'Sold out'}
              </button>
              
              <button
                className="w-full py-4 px-6 rounded-lg font-semibold text-lg border-2 border-gray-900 text-gray-900 hover:bg-gray-50 transition"
              >
                Buy it now
              </button>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4 border-t border-gray-200">
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition"
              >
                <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
                <span>Add to wishlist</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
                <Share2 size={20} />
                <span>Share</span>
              </button>
            </div>

            {/* Delivery Info */}
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div className="flex items-start gap-3">
                <Truck className="text-gray-600 mt-1 flex-shrink-0" size={20} />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Estimated delivery</p>
                  <p className="text-gray-600">{product.deliveryDate}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-gray-600 mt-1 flex-shrink-0" size={20} />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Secure payment</p>
                  <p className="text-gray-600">Your payment is protected</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">About this item</h2>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 aspect-square">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition">
                  {item.title}
                </h3>
                <p className="text-lg font-semibold text-gray-900 mt-2">
                  ₹{item.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-20 border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600 mb-4">Be the first to write a review</p>
            <button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
              Write a review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;