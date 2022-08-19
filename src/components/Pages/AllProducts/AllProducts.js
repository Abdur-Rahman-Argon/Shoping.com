import React from "react";
import { useQuery } from "react-query";
import useProduct from "../../utilites/useProduct";
import Product from "./Product";

const AllProducts = () => {
  // all product  load
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("product", () =>
    fetch("https://frozen-retreat-64301.herokuapp.com/allProducts").then(
      (res) => res.json()
    )
  );

  // const [products, isLoading] = useProduct();

  if (isLoading) {
    return;
  }

  // if (products) {
  //   console.log(products);
  // }

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
