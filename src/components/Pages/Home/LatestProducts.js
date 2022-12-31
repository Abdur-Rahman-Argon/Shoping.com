import React from "react";
import { useQuery } from "react-query";
import Product from "../AllProducts/Product";

const LatestProducts = () => {
  //product load from data base
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("product", () =>
    fetch("http://localhost:5000/allProducts").then((res) => res.json())
  );

  if (isLoading) {
    return;
  }

  const specialProducts = products?.slice(-4); // three product

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {specialProducts?.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
