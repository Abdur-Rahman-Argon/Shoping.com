import React from "react";

const Subscribe = () => {
  return (
    <div className="form-control w-11/12 md:w-8/12 lg:w-5/12 mx-auto">
      <p className=" text-center my-4 font-medium text-lg">
        Subscribe for our newsletter and our discount
      </p>
      <div className=" flex items-center gap-0">
        <input
          type="text"
          placeholder="Enter your email"
          className="input rounded-r-none input-bordered font-medium w-full pr-16"
        />
        <button className="p-3 rounded-r-lg hover:bg-green-800 bg-green-700 top-0 right-0 rounded-l-none font-medium">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
