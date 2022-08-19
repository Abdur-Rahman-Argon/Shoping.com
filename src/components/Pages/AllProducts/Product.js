import React, { useState } from "react";

const Product = ({ product }) => {
  return (
    <div class=" rounded-xl px-2 pt-2 pb-3 w-64  bg-gray-50 mx-auto my-3 hover:shadow-2xl shadow-md border-[1px]">
      <figure>
        <img src={product.image} alt="product" className="w-32 mx-auto" />
      </figure>

      <div class=" my-0 ">
        <h2 class=" mt-2 text-lg text-gray-600 hover:text-blue-600 cursor-pointer font-semibold">
          {product.productTitle}
        </h2>

        <div className="flex gap-1 items-end my-1">
          <h3 className="text-base font-bold text-red-500">
            {currentPrice} <span className=" text-lg font-[800]"> ৳</span>
          </h3>
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
        <div class=" flex items-center justify-between my-1">
          <span className=" text-orange-500 text-sm">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            {/* <i class="fa-regular fa-star"></i> */}
            <i class="fa-solid fa-star-half-stroke"></i>
          </span>
          <span className="hover:text-violet-500 text-sm font-medium   text-blue-700 ">
            <a href=""> 79 Reviews</a>
          </span>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <button
          onClick={addToCart}
          title="Add to Card"
          className=" bg-lime-700 font-medium text-white px-4 py-[2px] rounded text-xs"
        >
          Add to Card
          <i class=""></i>
        </button>
        <button
          title="Quick View"
          className="bg-gray-300  hover:text-sky-500  py-1 px-2"
        >
          <i class="fa-solid fa-eye"></i>
        </button>

        {like ? (
          <button
            title="Wishlist"
            onClick={removeLikeList}
            className="  py-1 px-2 font-bold bg-gray-300 hover:text-sky-700"
          >
            <i class="fa-solid fa-heart text-sky-500"></i>
          </button>
        ) : (
          <button
            title="Wishlist"
            onClick={addLikeList}
            className="  py-1 px-2 font-bold bg-gray-300 hover:text-sky-700"
          >
            <i class="fa-regular fa-heart"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
