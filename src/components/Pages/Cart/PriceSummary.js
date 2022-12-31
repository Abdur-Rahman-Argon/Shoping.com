import React from "react";

const PriceSummary = ({ myOrder }) => {
  const { taxFee, shippingFee, totalPrice, SubTotalPrice } = myOrder;
  return (
    <div>
      <div className="flex px-1  my-1 justify-between">
        <span className="text-base font-medium">SubTotal :</span>
        <span className="text-base font-medium">{SubTotalPrice}</span>
      </div>
      <div className="flex px-1  my-0 justify-between">
        <span className="text-base font-medium">Tax Fee :</span>
        <span className="text-base font-medium">{taxFee}</span>
      </div>
      <div className="flex px-1 my-0 justify-between">
        <span className="text-base font-medium">Shipping Fee :</span>
        <span className="text-base font-medium">{shippingFee}</span>
      </div>

      <div className="divider  "></div>

      <div className="flex px-1 my-1 justify-between">
        <span className="text-base font-medium">Total price :</span>
        <span className="text-base font-medium">{totalPrice}</span>
      </div>
    </div>
  );
};

export default PriceSummary;
