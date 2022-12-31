import React from "react";
import { useState } from "react";

const CouponCode = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full">
      <div
        onClick={() => setShow(!show)}
        className=" flex justify-between cursor-pointer items-center w-full p-2"
      >
        <h1 className="text-base font-semibold">Apply Discount Code</h1>
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
          className={` flex justify-around px-5 py-2 ${
            show ? "translate-y-0" : " hidden"
          }  ease-in-out duration-700`}
        >
          <input
            type="text"
            placeholder="Input Coupon"
            className="  w-48 pl-2 rounded border-2"
          />
          <button
            // onClick={"addPositive"}
            className=" items-center py-1 px-3 lg:px-3 b-1 font-normal bg-gray-200 hover:bg-gray-300 rounded-sm"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponCode;
