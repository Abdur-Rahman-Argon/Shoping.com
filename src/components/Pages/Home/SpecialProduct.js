import React from "react";
import { useQuery } from "react-query";
import Product from "../AllProducts/Product";
import { useGetProductQuery } from "../../../features/api/apiSlice";

const SpecialProduct = () => {
  // product load from data base

  const { data, isLoading, isError, error } = useGetProductQuery();

  if (isLoading) {
    return <p> loading ..</p>;
  }

  const products = data;

  const specialProducts = products?.slice(5, 9); // three product

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {specialProducts.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default SpecialProduct;
