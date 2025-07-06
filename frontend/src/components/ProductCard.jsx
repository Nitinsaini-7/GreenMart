import React from "react";
import { assets, dummyProducts } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { ShoppingCart, Star, Heart } from 'lucide-react';
const ProductCard = ({product}) => {
  const {currency,cartItems, addToCart, updateCartItem, removeFromCart, navigate} = useAppContext();

const scrollTo = (x, y) => window.scrollTo(x, y);
  return product && (
   
        <div 
      onClick={() => { navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0, 0) }} 
      className=" relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 min-w-32 max-w-60 w-full overflow-hidden cursor-pointer transform hover:-translate-y-1"
    >
      {/* Discount Badge */}
      {product.price > product.offerPrice && (
        <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
          {Math.round(((product.price - product.offerPrice) / product.price) * 100)}% OFF
        </div>
      )}
      
      {/* Wishlist Button */}
      <button className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors duration-200 shadow-md opacity-0 group-hover:opacity-100">
        <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
      </button>

      {/* Product Image */}
      <div className="relative bg-gradient-to-br from-green-50 to-green-100/50 p-4 flex items-center justify-center overflow-hidden">
        <img
          className="group-hover:scale-110 transition-transform duration-500 max-w-32 md:max-w-56 object-contain"
          src={product.image[0]}
          alt={product.name}
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Category */}
        <div className="flex items-center justify-between">
          <span className="text-green-600 text-xs font-medium uppercase tracking-wide bg-green-50 px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-gray-800 font-semibold text-lg leading-tight truncate group-hover:text-green-700 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-0.5">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 md:w-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
                />
              ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">(4.0)</span>
        </div>

        {/* Price and Actions */}
        <div className="flex items-end justify-between pt-2">
          {/* Price */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold text-lg md:text-xl">
                {currency}{product.offerPrice}
              </span>
              {product.price > product.offerPrice && (
                <span className="text-gray-400 text-sm line-through">
                  {currency}{product.price}
                </span>
              )}
            </div>
            {product.price > product.offerPrice && (
              <span className="text-green-600 text-xs font-medium">
                Save {currency}{product.price - product.offerPrice}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <div onClick={(e) => { e.stopPropagation(); }} className="text-green-500">
            {!cartItems[product._id] ? (
              <button
                className="flex items-center justify-center gap-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white md:w-[80px] w-[64px] h-[36px] rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                onClick={() => addToCart(product._id)}
              >
                <ShoppingCart className="w-3 h-3" />
                <span className="text-xs">Add</span>
              </button>
            ) : (
              <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[36px] bg-white border-2 border-green-500 rounded-lg shadow-lg">
                <button
                  onClick={() => { removeFromCart(product._id) }}
                  className="flex items-center justify-center w-7 h-7 text-green-600 hover:bg-green-50 rounded-md transition-colors font-semibold"
                >
                  −
                </button>
                <span className="w-5 text-center text-green-600 font-semibold">
                  {cartItems[product._id]}
                </span>
                <button
                  onClick={() => addToCart(product._id)}
                  className="flex items-center justify-center w-7 h-7 text-green-600 hover:bg-green-50 rounded-md transition-colors font-semibold"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Quick View on Hover */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-600 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            Quick View
          </button>
        </div>
      </div>

      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
    </div>
  );
};

export default ProductCard;
