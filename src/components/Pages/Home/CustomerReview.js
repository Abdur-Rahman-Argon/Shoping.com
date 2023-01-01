import React from "react";

const CustomerReview = () => {
  const reviews = [1, 2, 3];

  return (
    <div className=" w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-around items-end gap-5">
      {/* review map */}
      {reviews.map((review) => (
        <div key={review} className="card w-72 p-5 bg-base-100 shadow-xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center ">
              {/* customer image */}
              <div className="avatar">
                <div className="w-9 h-9 m-2 rounded-full ">
                  <img
                    src="https://placeimg.com/192/192/people"
                    className="w-10"
                  />
                </div>
              </div>

              {/* customer name & review date */}
              <div>
                <h1 className="font-bold ">Name</h1>
                <span className=" text-xs font-bold my-0">05 May, 2022</span>
              </div>
            </div>

            {/* ratings star */}
            <div>
              <span className=" text-orange-500 text-sm">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                {/* <i className="fa-regular fa-star"></i> */}
                <i className="fa-solid fa-star-half-stroke"></i>
              </span>
            </div>
          </div>

          {/* review passage */}
          <div className="">
            <h4 className="text-lg font-medium">Review Title</h4>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerReview;
