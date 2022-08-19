import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import Order from "./Order";

const MyOrders = () => {
  const [user] = useAuthState(auth);

  const {
    data: myOrder,
    isLoading,
    refetch,
  } = useQuery("myOrder", () =>
    fetch(`http://localhost:5000/myOrders/${user.email}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return;
  }

  // if (myOrder) {
  //   console.log(myOrder.length);
  // }

  return (
    <div className="">
      <div>
        <h1 className=" text-2xl font-bold text-left my-5 mx-10 text-gray-600">
          {/* {myOrder.length === 0 ? "You have No Any Order" : "My Orders Here"} */}
        </h1>
      </div>

      <div className="OrderContainer  px-4"></div>
    </div>
  );
};

export default MyOrders;
