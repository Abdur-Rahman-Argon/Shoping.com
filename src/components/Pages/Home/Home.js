import React from "react";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>

      {/* best feature  */}
      <DeliveryProsess></DeliveryProsess>

      {/* customer ask question */}
      <div className="w-full lg:px-5 my-5">
        <AskQuestion></AskQuestion>
      </div>

      {/* subscribe customer */}
      <div className="w-full mt-10 py-8 lg:px-5 text-gray-300 bg-gray-700">
        <h1 className="lg:text-2xl text-center text-[#148F77] font-bold  underline uppercase">
          Subscribe Us
        </h1>
        <Subscribe></Subscribe>
      </div>
    </div>
  );
};

export default Home;
