import React from "react";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import CartProduct from "./CartProduct";
import CouponCode from "./CouponCode";
import { useGetCartProductMutation } from "../../../features/api/apiSlice";

const Cart = () => {
  const [user] = useAuthState(auth);
  const [subTotal, setSubTotal] = useState(0);
  const [orderId, setOrderId] = useState();
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  // cart product load
  // const {
  //   data: cartItems,
  //   isLoading,
  //   refetch,
  // } = useQuery("cartsection", () =>
  //   fetch(`http://localhost:5000/addToCart/${user.email}`).then((res) =>
  //     res.json()
  //   )
  // );
  const [getCartProduct, { isLoading, data }] = useGetCartProductMutation();

  useEffect(() => {
    getCartProduct(user.email);
  }, [user]);

  if (isLoading) {
    return;
  }

  const cartItems = data;
  // price calculate
  const grandTotal = subTotal;
  const tax = grandTotal * 0.15;
  const sipping = 85;
  const Total = grandTotal + sipping + parseInt(tax);

  // order confirm
  const orderNow = () => {
    // const date = new Date().toString().slice(3, 15);
    const date = new Date(); //  order date

    //
    const orderInformation = {
      customerName: user.displayName,
      customerEmail: user.email,
      phoneNumber: "",
      shippingAddress: "",
      orderPlacedDate: date,
      ordersInfo: productList,
      itemsQuantity: productList.length,
      taxFee: tax,
      shippingFee: sipping,
      SubTotalPrice: subTotal,
      totalPrice: Total,
    };

    // order post api
    fetch("http://localhost:5000/myOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInformation),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        console.log();

        // order success then payment page go
        if (result.success === true) {
          navigate(`/payment/${result.result.insertedId}`);
          toast("Your Product is Processing Now, Please Payment");
        }
      });
  };

  return (
    <div>
      <h1 className="text-xl underline w-11/12 mx-auto font-medium text-slate-500 text-right">
        Shopping Carts
      </h1>
      <div className=" flex lg:gap-0 flex-col lg:flex-row">
        {/*  cart product list here */}
        <div className=" w-full mt-3 px-8 pb-2 border-0 shadow-md border-gray-300 md:w-full lg:w-[800px] text-center">
          <div>
            <div className="hidden lg:pb-2 lg:flex text-base font-semibold gap-16  lg:justify-around lg:items-center lg:my-0">
              <div className="">
                <h1></h1>
              </div>

              <div className="">
                <h1>Item</h1>
              </div>
              <div className="w-80">
                <h1></h1>
              </div>

              <div>
                <h1>Price</h1>
              </div>
              <div>
                <h1>Quantity</h1>
              </div>
              <div>
                <h1>SubTotal</h1>
              </div>
            </div>

            <div class=" hidden lg:flex divider my-0"></div>

            {/* single product  map */}
            <div>
              {cartItems?.map((cartProducts) => (
                <CartProduct
                  key={cartProducts._id}
                  cartProducts={cartProducts}
                  setSubTotal={setSubTotal}
                  subTotal={subTotal}
                  productList={productList}
                  setProductList={setProductList}
                ></CartProduct>
              ))}
            </div>

            <div className=" lg:flex justify-between">
              <Link
                to="/allProduct"
                className="mx-2 border-2 border-grey-200 px-2 py-1 rounded text-lg lg:text-base  font-medium text-black-600 my-2 hover:text-green-700"
              >
                Continue Shopping
              </Link>
              <button className="mx-2 md:mx-8 border-2 border-grey-200 px-2 py-1 rounded text-lg lg:text-base  font-medium text-black-600 my-2 hover:text-green-700">
                Update Cart
              </button>
              <button className="mx-10 border-2 border-grey-200 px-2 py-1 rounded text-lg lg:text-base font-medium text-black-600 my-2 hover:text-green-700">
                Clear Shopping Cart
              </button>
            </div>
          </div>
        </div>

        {/*  price calculate & summery */}
        <div className="lg:flex-2 py-5 px-7 w-full mx-auto text-center bg-slate-50 shadow-md">
          <h1 className="text-2xl my-1 text-start font-semibold">Summary</h1>

          <div class="divider mt-0 "></div>

          <div className="flex px-1  my-1 justify-between">
            <h1 className="text-base font-semibold">SubTotal :</h1>
            <span className="text-base font-medium">
              {subTotal}
              <span className=" text-base ml-1 font-extrabold text-gray-500">
                &#2547;
              </span>
            </span>
          </div>
          <div className="flex px-1  my-2 justify-between">
            <h1 className="text-base font-semibold">Tax Fee :</h1>
            <span className="text-base font-semibold">
              1.5
              <span className=" text-base ml-1 font-extrabold text-gray-500">
                %
              </span>
            </span>
          </div>
          <div className="flex px-1 my-1 justify-between">
            <h1 className="text-base font-semibold">Shipping Fee :</h1>
            <span className="text-base font-semibold">
              {sipping}
              <span className=" text-base ml-1 font-extrabold text-gray-500">
                &#2547;
              </span>
            </span>
          </div>

          <div class="divider"></div>

          <div className="flex px-1 my-1 justify-between">
            <h1 className="text-base font-semibold">Total price :</h1>
            <span className="text-base font-medium">
              {Total}
              <span className=" text-base ml-1 font-extrabold text-gray-500">
                &#2547;
              </span>
            </span>
          </div>
          <div class="divider  "></div>
          <CouponCode></CouponCode>

          {/* order confirm btn */}
          <div>
            <button
              onClick={orderNow}
              className="btn w-full btn-warning hover:bg-white text-base font-medium text-black "
            >
              {/* Proceed CheckOut */} Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
