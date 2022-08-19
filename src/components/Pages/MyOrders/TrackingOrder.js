import React from "react";

const TrackingOrder = ({ orderInfo }) => {
  const { paid, Courier, orderCancel, packaging, shipped } = orderInfo;

  return (
    <div>
      <div className="my-2">
        <div className="flex items-center w-full mx-auto">
          <span
            className={` relative flex  w-11/12 h-2 mx-auto my-4 ${
              paid ? "bg-orange-400" : "bg-slate-400"
            } items-center justify-between`}
          >
            <span
              className={`absolute -top-3 -left-1 py-[2px] px-2 rounded-full  ${
                orderCancel ? "bg-slate-400" : "bg-orange-400 "
              }`}
            >
              {paid ? (
                <i class="fa-solid fa-circle-check"></i>
              ) : (
                <i class="fa-solid fa-ellipsis text-xl"></i>
              )}
            </span>
            <span
              className={`absolute -top-3 right-0 py-1 px-2 rounded-full  ${
                paid ? "bg-orange-400" : "bg-slate-400"
              }`}
            >
              <i class="fa-solid fa-money-check-dollar"></i>
            </span>
          </span>
          <span
            className={` relative block  w-10/12 h-2 mx-auto my-4 ${
              packaging ? "bg-orange-400" : "bg-slate-400"
            } items-center`}
          >
            <span
              className={`absolute -top-3 right-0 py-1 px-2 rounded-full  ${
                packaging ? "bg-orange-400" : "bg-slate-400"
              }`}
            >
              <i class="fa-solid fa-box-open"></i>
            </span>
          </span>
          <span
            className={` relative block  w-10/12 h-2 mx-auto my-4 ${
              Courier ? "bg-orange-400" : "bg-slate-400"
            } items-center`}
          >
            <span
              className={`absolute -top-3 right-0 py-1 px-2 rounded-full  ${
                Courier ? "bg-orange-400" : "bg-slate-400"
              }`}
            >
              <i class="fa-solid fa-truck-fast"></i>
            </span>
          </span>
          <span
            className={` relative block  w-10/12 h-2 mx-auto my-4 ${
              shipped ? "bg-orange-400" : "bg-slate-400"
            } items-center`}
          >
            <span
              className={`absolute -top-3 right-0 py-1 px-2 rounded-full  ${
                shipped ? "bg-orange-400" : "bg-slate-400"
              }`}
            >
              <i class="fa-solid fa-calendar-check"></i>
            </span>
          </span>
        </div>
        <div className="flex justify-between items-center w-full  mx-auto">
          <p className="  ">{paid ? "Confirm" : "Pending"}</p>
          <p className="  ">{paid ? "Paid" : "Payment"}</p>
          <p className="  ">Packaging</p>
          <p className="  ">Courier</p>
          <p className="  ">Shipped</p>
        </div>
      </div>
    </div>
  );
};

export default TrackingOrder;
