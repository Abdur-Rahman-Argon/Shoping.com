import React from "react";
import banner from "./../../../images/shop-banner.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="hero pt-12 bg-[url('https://i.ibb.co/4jFLGcp/19281.jpg')]">
        <div className=" flex flex-col items-center sm:flex-row-reverse  sm:gap-28 lg:gap-20 lg:flex-row-reverse">
          {/* Banner img section */}
          <div className="">
            <img
              src={banner}
              className=" w-60 sm:w-[450px] lg:w-[600px]"
              alt="banner-image"
            />
          </div>

          {/* banner content section */}
          <div className="">
            <h1 className="text-lg mt-2 font-bold text-lime-500">
              Shoping.com
            </h1>
            <h1 className="text-5xl mb-2 font-bold text-white">BIG SHOP</h1>
            <h1 className="text-5xl my-2 font-bold text-amber-500">BIG SAVE</h1>
            <div className=" lg:flex my-5 relative">
              <h1 className="lg:text-3xl text-2xl w-54 font-bold text-white">
                Special Offer
              </h1>
              <div className="w-24 h-24 lg:w-32 lg:h-32  text-center p-2 font-bold border- rounded-full border-white absolute my-4 lg:-right-44 top-10 left-44 -top-3  bg-red-500">
                <span className="text-sm lg:text-lg text-white font-semibold">
                  Up to
                </span>
                <span className="text-3xl  md:text-3xl lg:text-5xl m-1 text-white ">
                  35%{" "}
                </span>
                <span className="text-xl lg:text-2xl md:text-xl  text-yellow-400 ">
                  OFF
                </span>
              </div>
            </div>
            <Link
              to="/shop"
              className="btn text-white bg-green-700 border-0  my-5 "
            >
              Explore With Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
