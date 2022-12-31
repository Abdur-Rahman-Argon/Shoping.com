import React from "react";
import { useQuery } from "react-query";
import useProduct from "../../utilites/useProduct";
import Product from "./Product";
import { useGetProductQuery } from "../../../features/api/apiSlice";

const AllProducts = () => {
  const { data, isLoading, isError, error } = useGetProductQuery();

  if (isLoading) {
    return <p> loading ..</p>;
  }

  const products = data;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
