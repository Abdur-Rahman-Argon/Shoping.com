import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import Order from "./Order";
import {
  useGetOrderMutation,
  useGetProductDetailsMutation,
} from "../../../features/api/apiSlice";

const MyOrders = () => {
  const [user] = useAuthState(auth);

  // const {
  //   data: myOrder,
  //   isLoading,
  //   refetch,
  // } = useQuery("myOrder", () =>
  //   fetch(`http://localhost:5000/my-orders/${user?.email}`).then((res) =>
  //     res.json()
  //   )
  // );

  const [getOrders, { isLoading, data, isError }] = useGetOrderMutation();

  useEffect(() => {
    if (user) {
      getOrders(user?.email);
    }
  }, [user, getOrders]);

  if (isLoading) {
    return;
  }

  const myOrder = data;

  return (
    <div className="">
      <div>
        <h1 className=" text-2xl font-bold text-left my-5 mx-10 text-gray-600">
          {/* {myOrder.length === 0 ? "You have No Any Order" : "My Orders Here"} */}
        </h1>
      </div>

      <div className="OrderContainer  px-4">
        {myOrder?.length === 0
          ? null
          : myOrder?.map((order) => (
              <Order key={order._id} order={order}></Order>
            ))}
      </div>
    </div>
  );
};

export default MyOrders;
