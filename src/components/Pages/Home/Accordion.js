import React from "react";
import { useState } from "react";

const Accordion = () => {
  const [show, setShow] = useState(false);

  return (
    <div className=" w-full my-4 lg:w-[500px] lg:mx-auto">
      <></>
      {/* Question button section */}
      <div
        onClick={() => setShow(!show)}
        className={` flex justify-between items-center w-full px-2 border-b-[1px] border-gray-400 hover:border-sky-500 ${
          show && "border-sky-500 text-sky-500"
        } hover:text-sky-500`}
      >
        <h1 className="text-base font-semibold">
          <i className="fa-solid fa-hand-point-right"></i> Question ?
        </h1>
        <button
          className={`text-lg mx-3 font-bold ${
            show ? " rotate-0 border-sky-500" : " rotate-90 border-gray-400"
          } ease-in-out duration-300 rounded-full border-[2px] m-1 hover:border-sky-500 px-[6px]`}
        >
          {!show ? (
            <i className="fa-solid fa-plus"></i>
          ) : (
            <i className="fa-solid fa-minus"></i>
          )}
        </button>
      </div>

      {/* Answer section */}
      <div className={`overflow-hidden`}>
        <p
          className={`text-sm font- py-1 px-1 ${
            show ? "translate-y-0 height-100" : "height-0 translate-y-[-80px] "
          }  ease-in-out duration-500`}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic deleniti
          dolores autem voluptates illo blanditiis dolore est deserunt. dolores
          autem voluptates illo blanditiis dolore est deserunt.
        </p>
      </div>
    </div>
  );
};

export default Accordion;
