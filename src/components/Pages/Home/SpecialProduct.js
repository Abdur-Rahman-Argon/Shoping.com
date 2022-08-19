import React from "react";
import { useQuery } from "react-query";

const SpecialProduct = () => {
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

  const specialProducts = products.slice(5, 9);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {specialProducts.map((product) => (
          <li>{product}</li>
        ))}
      </div>
    </div>
  );
};

export default SpecialProduct;
