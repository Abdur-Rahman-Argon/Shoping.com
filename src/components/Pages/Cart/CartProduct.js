import React from "react";
import { useState } from "react";

const CartProduct = ({
  cartProducts,
  setSubTotal,
  subTotal,
  productList,
  setProductList,
}) => {
  const cartProduct = cartProducts?.Product;

  const [quantity, setQuantity] = useState(cartProducts.ProductQuantity);
  const [supTotal, setSupTotal] = useState(cartProduct?.price * quantity);
  const [select, setSelect] = useState(false);

  const ordersItems = {
    _id: cartProduct._id,
    quantity,
    supTotal,
    productInfo: {
      productID: cartProduct._id,
      productTitle: cartProduct.productTitle,
      brand: cartProduct.productBrand,
      price: cartProduct.price,
      discount: cartProduct.discount,
      image: cartProduct.image,
      brandName: cartProduct.brandName,
      category: cartProduct.category,
      stock: cartProduct.stock,
    },
  };

  const addPositive = () => {
    if (quantity < 5) {
      const sum1 = subTotal - supTotal;
      const plus = quantity + 1;
      const SubTotal = cartProduct.price * plus;
      setQuantity(plus);
      setSupTotal(SubTotal);
      if (select) {
        const sum = sum1 + SubTotal;
        setSubTotal(sum);
      }
      // setUpdate(true);
    } else {
      return;
    }
  };

  const addNegative = () => {
    if (quantity > 1) {
      const sum1 = subTotal - supTotal;
      const minus = quantity - 1;
      const SubTotal = cartProduct.price * minus;
      setSupTotal(SubTotal);
      setQuantity(minus);
      // setUpdate(true);
      if (select) {
        const sum = sum1 + SubTotal;
        setSubTotal(sum);
      }
    } else {
      return;
    }
  };

  const isSelect = (e) => {
    const checked = e.target.checked;
    const product = [ordersItems];
    // var today = new Date().format("D MMM, YYYY");
    // console.log(today);

    if (checked) {
      const sum = subTotal + supTotal;
      const children = product.concat(productList);
      setProductList(children);
      setSubTotal(sum);
      setSelect(true);
    } else {
      const sum = subTotal - supTotal;
      const removeProduct = productList.find(
        (element) => element._id === ordersItems._id
      );
      const list = productList.filter((item) => item !== removeProduct);
      setProductList(list);
      setSubTotal(sum);
      setSelect(false);
    }
  };

  return (
    <div>
      <div className=" px-5 py-2 flex flex-col lg:flex-row lg:gap-5 md:flex-row md:gap-5 justify-around items-center my-0 relative">
        <div className=" flex items-center">
          <div className="mx-4">
            <input
              type="checkbox"
              name="productSelected"
              id="productSelected"
              onClick={isSelect}
              className=""
            />
          </div>
          <div>
            <img
              src={cartProduct.image}
              alt="Shoes"
              className=" w-10 lg:w-16 mx-auto py-5"
            />
          </div>
          <div className="w-80 text-lg font-semibold">
            <h1>{cartProduct.productTitle}</h1>
          </div>
        </div>

        <div className=" flex gap-10 lg:gap-11 items-center text-base font-medium justify-around">
          <div>
            <h2>
              {cartProduct.price}
              <span className=" text-base font-extrabold text-gray-500">
                &#2547;
              </span>
            </h2>
          </div>
          <div className=" my-2 lg:my-0 relative">
            <div className="border-2 flex items-center    border-gray-300 ">
              <button
                onClick={addNegative}
                className=" items-center  px-3 text-2xl font-semibold bg-gray-100 hover:bg-gray-300"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={""}
                className=" w-9 text-center rounded border-0 border-gray-400 focus:border-0"
                disabled
              />
              <button
                onClick={addPositive}
                className=" items-center  px-3 lg:px-3 b-1 text-2xl font-semibold bg-gray-100 hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <h2 className="">
              {supTotal}
              <span className=" text-base font-extrabold text-gray-500">
                &#2547;
              </span>
            </h2>
          </div>

          <button className="absolute top-0 px-3 hover:text-orange-700 right-0 lg:right-2 text-xl">
            <i className="fa-solid fa-trash-can "></i>
          </button>
        </div>
      </div>

      <div className="divider"></div>
    </div>
  );
};

export default CartProduct;
