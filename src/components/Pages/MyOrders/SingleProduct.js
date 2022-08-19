import React from "react";
import { Link } from "react-router-dom";
import img from "../../../images/image-support.png";

const SingleProduct = ({ product, orderInfo }) => {
  const { image, productTitle, brand, price } = product.productInfo;
  const { id, paid, trxID, orderCancel, expectDeliveryDate } = orderInfo;
  return (
    <div className=" my-5 flex md:flex-row flex-col gap-3 items-center  md:justify-between md:mx-4">
      <div className=" flex items-center justify-between gap-16 md:gap-4">
        <div>
          <img src={image} alt="" className="w-32" />
        </div>
        <div>
          <h2 className="text-xs lg:text-lg">{productTitle}</h2>
          <h2 className="text-xs lg:text-lg">
            <span> Brand:</span> <span> {brand}</span>
          </h2>
          <h2 className="text-xs lg:text-lg">
            <span>Qty</span>: <span>{product.quantity}</span>
          </h2>
          <h2 className="text-xs lg:text-lg">
            <span>Price</span>: <span>{price}</span>
          </h2>
        </div>
      </div>
      <div className=" flex items-start justify-between gap-16 md:gap-32">
        <div className=" text-left md:text-center">
          <h2 className=" text-xs lg:text-lg my-1">Payment Status :</h2>
          <p className=" text-xs lg:text-lg md:text-lg my-1">
            {paid ? "Paid" : "Unpaid"}
          </p>
          {paid ? (
            <p className=" my-1 text-xs  lg:text-sm md:font-semibold">
              TrxID : <span>{trxID}</span>
            </p>
          ) : null}
        </div>
        {paid ? (
          <div className=" text-right md:text-center">
            <h2 className="text-xs lg:text-lg my-1">Expected Delivery On:</h2>
            {expectDeliveryDate ? (
              <h4 className="text-xs lg:text-lg my-1">{expectDeliveryDate}</h4>
            ) : (
              <h4 className="text-xs lg:text-lg my-1">in next 7 Days</h4>
            )}
          </div>
        ) : (
          <Link
            to={`/payment/${id}`}
            disabled={orderCancel}
            className=" btn btn-success"
          >
            Pay Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
