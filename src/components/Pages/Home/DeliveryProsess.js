import React from "react";

const DeliveryProsess = () => {
  return (
    <div className="w-full mx-auto text-white bg-slate-800">
      <div className="lg:w-8/12 mx-auto grid grid-cols-2 md:grid-cols-4 lg:gap-10 mx-auto">
        {/* free shipping  */}
        <div className="lg:flex lg:items-center text-center  gap-2 py-4 px-4 lg:w-60 m-2 rounded-xl shadow-lg">
          <div className=" mb-2">
            <i class="fa-solid fa-shuttle-space border-2 px-2 py-2 text-orange-500 border-blue-600 rounded-full text-xl shadow-md shadow-sky-700"></i>
          </div>
          <div className="text-center lg:text-left">
            <h1 className=" text-base font-semibold">Free Shipping</h1>
            <p className=" text-xs">Free Delivery upto $100</p>
          </div>
        </div>

        {/* fast delivery  */}
        <div className="lg:flex lg:items-center text-center  gap-2 py-4 px-4 lg:w-60 m-2 rounded-xl shadow-lg">
          <div className=" mb-2">
            <i class="fa-solid fa-truck border-2 py-2 px-[10px] text-orange-500 border-blue-600 rounded-full text-lg shadow-md shadow-sky-700"></i>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-base   font-semibold"> Fast Delivery</h1>
            <p className="text-xs  ">We have Fast delivery Process</p>
          </div>
        </div>

        {/* product quality  */}
        <div className="lg:flex lg:items-center text-center  gap-2 py-4 px-4 lg:w-60 m-2 rounded-xl shadow-lg">
          <div className=" mb-2">
            <i class="fa-solid fa-burst border-2 py-2 px-3 text-orange-500 border-blue-600 rounded-full text-lg shadow-md shadow-sky-700"></i>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-base   font-semibold">Best Quality</h1>
            <p className="text-xs  ">Our product quality is best.</p>
          </div>
        </div>

        {/* payment system */}
        <div className="lg:flex lg:items-center text-center  gap-2 py-4 px-4 lg:w-60 m-2 rounded-xl shadow-lg">
          <div className=" mb-2">
            <i class="fa-solid fa-money-check-dollar border-2 py-2 px-3 text-orange-500 border-blue-600 rounded-full text-lg shadow-md shadow-sky-700"></i>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-base font-semibold">Secure Payment</h1>
            <p className="text-xs  ">We have secure payment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryProsess;
