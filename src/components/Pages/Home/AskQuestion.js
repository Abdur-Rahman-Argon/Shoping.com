import React from "react";
import Accordion from "./Accordion";
import question from "../../../images/28839566.png";

const AskQuestion = () => {
  return (
    <div className="flex justify-around items-top">
      <div className="px-5 md:px-20 lg:px-2">
        <h1 className=" text-lg lg:text-3xl text-left font-bold my-5 text-slate-800">
          Some Common Question Ask By Customer?
        </h1>

        {/* Question accordion */}
        <div className=" mt-8">
          <Accordion></Accordion>
          <Accordion></Accordion>
          <Accordion></Accordion>
          <Accordion></Accordion>
        </div>
      </div>

      {/* icon image */}
      <div className=" hidden lg:flex">
        <img src={question} alt="question" className=" w-96" />
      </div>
    </div>
  );
};

export default AskQuestion;
