import React from "react";
// import tracking from "../../../images/tracking.png";
import SingleProduct from "./SingleProduct";
import TrackingOrder from "./TrackingOrder";
import { toast } from "react-toastify";
import { useState } from "react";

const Order = ({ order }) => {
  const [processing, setProcessing] = useState(false);

  const orderInfo = {
    id: order._id,
    paid: order.paid,
    trxID: order?.paymentInfo?.transactionId,
    orderCancel: order.orderCancel,
    expectDeliveryDate: order.expectDeliveryDate,
    packaging: order.packing,
    Courier: order.Courier,
    shipped: order.deliveryStatus,
  };

  if (processing) {
    return;
  }

  const orderCancel = () => {
    setProcessing(true);

    const orderCancel = { id: order._id };

    fetch(
      `https://frozen-retreat-64301.herokuapp.com/myOrderRemove/${order._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          // /*    authorization: `Bearer ${localStorage.getItem("accessToken")}*/`,
        },
        body: JSON.stringify(orderCancel),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setProcessing(false);
        toast("Your Orders are Cancelled");
      });
  };

  return (
    <div className=" w-full lg:w-10/12 bg-slate-200 bg-opacity-60 p-4 mx-auto my-5 shadow-md rounded">
      <div>
        <div className=" flex justify-between items-center text-gray-500">
          <h1 className=" mx-4 my-1 text- font-bold">
            Order ID :
            <span className=" text-blue-700 cursor-pointer mx-2 navStyle font-semibold">
              #{order._id}
            </span>
          </h1>
          <p className="text-sm">Order Placed On {order.orderPlacedDate}</p>
          <button
            onClick={orderCancel}
            disabled={order.orderCancel || order.paid}
            className={` px-3 py-1 gap-2 text-sm font-medium text-slate-700 rounded ${
              order.orderCancel || order.paid
                ? "bg-slate-400"
                : "bg-orange-400 cursor-pointer hover:bg-orange-500"
            }      flex items-center`}
          >
            {order.orderCancel ? (
              " Order Cancelled"
            ) : (
              <>
                <i class="fa-solid fa-xmark"></i> <span>Cancel Order</span>
              </>
            )}
          </button>
        </div>

        <div className=" divider my-1"></div>
        <div>
          {order.ordersInfo.map((product) => (
            <SingleProduct
              product={product}
              orderInfo={orderInfo}
            ></SingleProduct>
          ))}
        </div>
        <div className=" divider"></div>
        <TrackingOrder orderInfo={orderInfo}></TrackingOrder>
        <div className=" divider my-1"></div>
        <div className=" flex justify-between my-1">
          <button className="mx-10 font-bold  text-lg text-orange-500  hover:text-red-500 "></button>
          <h3 className=" text-lg font-bold text-gray-600 mx-10">
            Total Price: <span> 451 $</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Order;
