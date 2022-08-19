import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "./../../../firebase.init";

const ProductDetails = () => {
  const [user] = useAuthState(auth);
  const { productId } = useParams();
  const [like, setLike] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  // single product load from api
  const {
    data: Product,
    isLoading,
    refetch,
  } = useQuery("AllProduct", () =>
    fetch(
      `https://frozen-retreat-64301.herokuapp.com/allProduct/${productId}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return;
  }

  // if (user) {
  //   console.log(user.displayName, user.email);
  // }

  // positive  quantity add
  const addPositive = () => {
    if (quantity < 5) {
      const plus = quantity + 1;
      setQuantity(plus);
    } else {
      return;
    }
  };

  // negative  quantity add
  const addNegative = () => {
    if (quantity > 1) {
      const minus = quantity - 1;
      return setQuantity(minus);
    } else {
      return;
    }
  };

  //  //  like list add on local storage
  const addLikeList = () => {
    setLike(true);
    const wishList = [];
    wishList.push(Product);
    const beforeWishList = JSON.parse(localStorage.getItem("likeList"));

    if (beforeWishList) {
      const likeList = wishList.concat(beforeWishList);
      localStorage.setItem("likeList", JSON.stringify(likeList));
      // console.log(wishList, like, beforeWishList, likeList);
    } else {
      localStorage.setItem("likeList", JSON.stringify(wishList));
      // console.log(wishList, like, beforeWishList);
    }
  };

  // remove from like list
  const removeLikeList = () => {
    setLike(false);

    const beforeWishList = JSON.parse(localStorage.getItem("likeList"));
    if (beforeWishList) {
      const removeItems = beforeWishList.find(
        (element) => element._id === Product._id
      );
      //arr.find(o => o.name === 'string 1');
      //arr.filter(item => item !== value)
      const likeList = beforeWishList.filter((item) => item !== removeItems);
      localStorage.setItem("likeList", JSON.stringify(likeList));
    }
  };

  const currentPrice = parseInt(
    Product.price - Product.price / Product.discount
  );

  const addToCart = () => {
    const addedProduct = {
      userName: user.displayName,
      email: user.email,
      ProductQuantity: quantity,
      Product: Product,
    };

    fetch("https://frozen-retreat-64301.herokuapp.com/addToCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedProduct),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success === true) {
          navigate("/");
          toast("Successfully add to Cart");
        }
      });
  };

  const buyNow = () => {};

  return (
    <div>
      <section>
        <h2 className="text-2xl lg:hidden flex justify-center my-5 text-center font-extrabold my-2">
          {Product.productTitle}
        </h2>
        <div className="lg:flex w-full lg:w-11/12 mx-auto lg:border-2 border-gray-100 md:py-10 px-5 md:px-20">
          <div className="lg:flex-1">
            <img
              src={Product.image}
              alt="pic"
              className="w-96 mx-auto lg:py-5"
            />
          </div>
          <div className="lg:flex-1 w-full relative">
            <div>
              <h2 className="text-3xl hidden lg:flex font-extrabold my-2">
                {Product.productTitle}
              </h2>
              <h1 className="my-2">
                <span className="font-bold"> BRAND : </span>
                <span className="font-semibold text-blue-500 hover:text-violet-700 cursor-pointer">
                  {Product.brandName}
                </span>
              </h1>
              <div>
                <div class=" flex items-center justify-between md:gap-32 my-1">
                  <span className=" text-orange-500 text-sm">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    {/* <i class="fa-regular fa-star"></i> */}
                    <i class="fa-solid fa-star-half-stroke"></i>
                  </span>
                  <span className="hover:text-violet-500 text-sm font-medium   text-blue-700 ">
                    <a href="p"> 79 Reviews</a>
                  </span>
                </div>

                <h2 className="my-2">
                  <span className="font-semibold"> Stock : </span>
                  <span className="font-medium text-blue-500 hover:text-violet-700 cursor-pointer">
                    InStock ({Product.stock})
                  </span>
                </h2>
              </div>
            </div>
            <div className=" flex items-center gap-4">
              <h2 className="font-semibold text-lg">Price:</h2>
              <h2 className="text-base font-bold text-red-500">
                {currentPrice}
                <span className=" text-lg font-[800]">৳</span>
              </h2>
              <h2 className="text-sm font-semibold line-through text-gray-400">
                {Product.price}
              </h2>
              <span className="text-xs font-medium bg-green-600 rounded text-white px-2 py-1">
                {Product.discount}
                <span>% save</span>
              </span>
            </div>

            <div className="flex items-center mt-3 mb-6 gap-8">
              <span className="font-bold text-xl"> Quantity : </span>
              <div className="border-2 border-gray-300 first-letter:">
                <button
                  onClick={addNegative}
                  className=" items-center px-3 text-2xl font-semibold bg-gray-100 hover:bg-gray-300"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  className="w-16 text-center py- pl-2 rounded border-0 border-gray-400 focus:border-0"
                  disabled
                />
                <button
                  onClick={addPositive}
                  className=" items-center px-3 b-1 text-2xl font-semibold bg-gray-100 hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between lg:gap-16">
              <button
                onClick={buyNow}
                className="btn btn-success font-bold px-12"
              >
                Buy Now
              </button>
              <button
                onClick={addToCart}
                className="btn btn-success font-bold px-8"
              >
                ADD TO CART
              </button>
            </div>
            <div className=" absolute top-0 right-0">
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
            <div className=" my-8">
              <h1 className="font-bold">Description:</h1>
              <div className=" text-sm font-medium text-gray-500">
                {Product.productDescription.map((d) => (
                  <li className=" my-1">{d}</li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
