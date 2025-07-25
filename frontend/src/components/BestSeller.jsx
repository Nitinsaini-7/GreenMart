import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";

const BestSeller = () => {
  const { products } = useAppContext();
  return (
    <div className=" mt-16">
      <p className=" text-2xl md:text-3xl font-medium ">Best Seller</p>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 place-items-center">
          {products
            .filter((product) => product.inStock)
            .slice(0, 10)
            .map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
      </div>
  );
};

export default BestSeller;
