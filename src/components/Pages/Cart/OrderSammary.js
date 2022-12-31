import React from "react";
import { useState } from "react";

const OrderSummary = ({ myOrder }) => {
  //
  const [show, setShow] = useState(false);
  //
  return (
    <div className=" mx-auto">
      <div
        onClick={() => setShow(!show)}
        className=" flex justify-between cursor-pointer items-center shadow-xl p-2"
      >
        <h1 className="text-lg font-semibold">Order Summary</h1>
        <button
          className={`text-xl mx-5 font-bold ${
            show ? " rotate-0" : " rotate-90"
          } ease-in-out duration-100 `}
        >
          {!show ? (
            <i className="fa-solid fa-angle-right"></i>
          ) : (
            <i className="fa-solid fa-angle-up"></i>
          )}
        </button>
      </div>
      <div className="overflow-hidden my-1">
        <div
          className={`text-sm font-medium px-5 py-2 ${
            show ? "translate-y-0" : " hidden"
          } bg-gray-50 ease-in-out duration-700 shadow-xl`}
        >
          {myOrder?.ordersInfo?.map((product) => (
            <div className=" flex items-center justify-between  my-1">
              <div>
                <img src={product.productInfo.image} alt="" className="w-16" />
              </div>
              <div>
                <h2 className="text-xs lg:text-sm">
                  {product.productInfo.productTitle}
                </h2>
                <h2 className="text-xs lg:text-sm">
                  <span> Brand:</span> <span> {product.productInfo.brand}</span>
                </h2>
              </div>
              <div>
                <h2 className="text-xs lg:text-sm">
                  <span>Price</span>: <span>{product.productInfo.price}</span>
                </h2>
                <h2 className="text-xs lg:text-sm">
                  <span>Qty</span>: <span>{product.quantity}</span>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
