import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import { useQuery } from "react-query";
// import { useParams } from "react-router-dom";
// import Loading from "../Sheared/Loading";
import PaymentCard from "./PaymentCard";
import ShippingAddress from "./ShippingAddress";
import { useState } from "react";
import OrderSummary from "./OrderSammary";
import PriceSummary from "./PriceSummary";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const stripePromise = loadStripe(
  "pk_test_51LTEuNIgycd7Qr94jp26PigHhQnli8Y9RLy5X2rZTuOZcjOqzjDJ2pL2GWRt3KgiBlx4lTNqYVLJs9HfrhBDNTBs00hUwly6As"
);

const PaymentPage = () => {
  const [show, setShow] = useState(false);

  const { orderId } = useParams();

  const {
    data: myOrder,
    isLoading,
    refetch,
  } = useQuery("myOrder", () =>
    fetch(`https://frozen-retreat-64301.herokuapp.com/myOrder/${orderId}`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return;
  }

  return (
    <div className="mb-10">
      <div className="">
        <div className="flex w-11/12 mx-auto flex-col lg:flex-row gap-10">
          <div className="lg:w-[800px]  shadow-2xl my-3 rounded-xl">
            <ShippingAddress></ShippingAddress>
          </div>
          <div className="w-full lg:w-[500px]">
            <div>
              <OrderSummary myOrder={myOrder}></OrderSummary>
            </div>
            <div className="my-4 shadow-xl pb-3 rounded-xl">
              <h1 className="text-lg font-medium underline my-3">
                Payment Price Summary-
              </h1>
              <div className="px-3">
                <PriceSummary myOrder={myOrder}></PriceSummary>
              </div>

              <button
                onClick={() => setShow(true)}
                className="btn w-full btn-success font-bold mt-5"
                type="submit"
              >
                proceed to pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
