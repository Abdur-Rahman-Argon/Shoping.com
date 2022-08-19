// import React, { useEffect } from "react";
// import { useState } from "react";
// import { useQuery } from "react-query";

// const useProduct = () => {
//   const [products, setProducts] = useState();
//   const [isLoading, seIsLoading] = useState(false);

//   useEffect(() => {
//     seIsLoading(true);
//     fetch(`https://frozen-retreat-64301.herokuapp.com/allProducts`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         seIsLoading(false);
//       });
//   }, []);

//   return [products, isLoading];
// };

// export default useProduct;
