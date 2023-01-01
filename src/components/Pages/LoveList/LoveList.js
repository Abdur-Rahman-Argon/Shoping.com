import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetProductDetailsMutation } from "../../../features/api/apiSlice";

const LoveList = () => {
  const myLoveList = JSON.parse(localStorage.getItem("likeList"));

  return (
    <div>
      <div>
        <h1 className=" text-2xl font-bold text-center my-5 border-b-[4px] border-gray-600 w-52 mx-auto">
          <i className="fa-solid fa-heart text-sky-500"></i> My WishList
          <i className="fa-solid fa-heart text-sky-500 ml-2"></i>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {myLoveList?.map((product) => (
          <>
            <div className=" rounded-xl px-2 pt-2 pb-3 w-68  bg-gray-200 mx-auto my-3 hover:shadow-xl">
              <Link to={`/product-details/${product._id}`}>
                <figure>
                  <img
                    src={product.image}
                    alt="Shoes"
                    className="w-20 mx-auto"
                  />
                </figure>
              </Link>
              <div className=" my-0 ">
                <Link to={`/product-details/${product._id}`}>
                  <h2 className=" mt-2 text-xl text-gray-600 hover:text-blue-600 cursor-pointer font-semibold">
                    {product.productTitle}
                  </h2>
                </Link>
                <div className="flex gap-1 items-end my-1">
                  <span className="text-base font-bold text-gray-500">
                    {parseInt(product.price - product.price / product.discount)}
                  </span>
                </div>
                <div className="flex my-2 items-center gap-5">
                  <span className="text-sm font-semibold line-through text-gray-500">
                    {product.price}
                  </span>
                  <span className="text-xs font-medium bg-green-600 rounded text-white px-2">
                    {product.discount}
                    <span>% save</span>
                  </span>
                </div>
                <div className=" flex items-center justify-between my-1">
                  <span className=" text-orange-500 text-sm">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    {/* <i className="fa-regular fa-star"></i> */}
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </span>
                  <span className="hover:text-violet-500 text-sm font-medium   text-blue-700 ">
                    <a href=""> 79 Reviews</a>
                  </span>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <button
                  title="Add to Card"
                  className=" bg-lime-700 font-medium text-white px-4 py-[2px] rounded text-xs normal-case"
                >
                  Buy Now
                </button>

                <button
                  title="Wishlist"
                  onClick={""}
                  className="  py-1 px-2 font-bold bg-gray-300 hover:text-sky-700"
                >
                  <i className="fa-solid fa-heart text-sky-500"></i>
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default LoveList;

//   const removeLikeList = () => {
//     const beforeWishList = JSON.parse(localStorage.getItem("likeList"));
//     if (beforeWishList) {
//       const removeItems = beforeWishList.find(
//         (element) => element._id === Product._id
//       );
//       //arr.find(o => o.name === 'string 1');
//       //arr.filter(item => item !== value)
//       const likeList = beforeWishList.filter((item) => item !== removeItems);
//       localStorage.setItem("likeList", JSON.stringify(likeList));
//     }
//   };

// const [getProduct, { isLoading: loading, data: product }] =
// useGetProductDetailsMutation();
// const id = "62f88011dff0061b8419f102";

// useEffect(() => {
// getProduct(id);
// }, [id, getProduct]);

// if (loading) {
// return;
// }

// console.log(product);
