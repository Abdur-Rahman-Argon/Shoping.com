import React from "react";
import AskQuestion from "./AskQuestion";
import Banner from "./Banner";
import CustomerReview from "./CustomerReview";
import DeliveryProsess from "./DeliveryProsess";
import LatestProducts from "./LatestProducts";
import SpecialProduct from "./SpecialProduct";
import Subscribe from "./Subscribe";
import TachnicalSupport from "./TachnicalSupport";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>

      {/* best feature  */}
      <DeliveryProsess></DeliveryProsess>

      {/* Latest Product */}
      <div className="w-full my-10 px-5">
        <h1 className="text-3xl text-left font-bold mx-2 my-5 text-slate-800">
          Latest Product:
        </h1>
        <LatestProducts></LatestProducts>
      </div>

      {/* Special product */}
      <div className="w-full my-10 px-5">
        <h1 className="text-3xl text-left font-bold mx-2 my-5 text-slate-800">
          Special Product:
        </h1>
        <SpecialProduct></SpecialProduct>
      </div>

      {/* customer review */}
      <div className="w-full my-10 px-5 first-letter:">
        <h1 className="text-3xl text-left font-bold mx-2 my-5 text-slate-800">
          Customer Reviews:
        </h1>
        <CustomerReview></CustomerReview>
      </div>

      {/* technical support */}
      <div className="w-full px-5">
        <h1 className="text-3xl text-left font-bold   my-5 text-slate-800">
          Tachnical Support:
        </h1>
        <TachnicalSupport></TachnicalSupport>
      </div>

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
