import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";
const AllProducts = () => {
  const { products, searchQuery } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [products, searchQuery]);
  return (
    <div className="">
      <div className=" text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
          All <span className="text-green-500">Products</span>
        </h1>
        <p className="text-xl text-green-700 max-w-2xl mx-auto leading-relaxed">
          Explore our complete range of fresh groceries, daily essentials, and
          quality products delivered conveniently to your doorstep.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 place-items-center">
        {filteredProducts
          .filter((product) => product.inStock)
          .map((product, index) => (
            <div>
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
