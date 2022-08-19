import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ShippingAddress = () => {
  const [save, setSave] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const shippingAddress = {
      Country: "",
      City: "",
      District: "",
      PostCode: "",
      Address: "",
    };
  };

  return (
    <div className="px-5 w-full">
      <form onClick={handleSubmit(onSubmit)}>
        <div className="flex flex-col w-full lg:flex-row justify-between">
          <div>
            <label class="label">
              <span class="label-text font-medium">First name:</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              // value={''}
              {...register("firstName", { required: true })}
              class="border p-2 border-gray-300 rounded-md focus:outline-none w-full"
              readOnly
            />
            {/* <label class="label">     error
    <span class="label-text-alt">Alt label</span>
  </label> */}
          </div>
          <div>
            <label class="label">
              <span class="label-text font-medium">Last name:</span>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: true })}
              class="border p-2 border-gray-300 rounded-md focus:outline-none w-full"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div>
            <label class="label">
              <span class="label-text">Email:</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              class="border p-2 w-full lg:w-72 border-gray-300 rounded-md focus:outline-none "
            />
          </div>
          <div>
            <label class="label">
              <span class="label-text font-medium">
                Phone Number:
                <span className=" text-red-500 text-xl font-semibold">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="PhoneNumber"
              {...register("phoneNumber", { required: true })}
              class="border p-2 border-gray-300 rounded-md focus:outline-none w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:flex-row justify-between">
          <div>
            <label class="label">
              <span class="label-text font-medium">
                Country:
                <span className=" text-red-500 text-xl font-semibold">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Country"
              {...register("country", { required: true })}
              class="border p-2 border-gray-300 rounded-md focus:outline-none w-full"
            />
          </div>
          <div>
            <label class="label">
              <span class="label-text font-medium">
                City:
                <span className=" text-red-500 text-xl font-semibold">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="City"
              {...register("city", { required: true })}
              class="border p-2 border-gray-300 rounded-md focus:outline-none w-full"
            />
          </div>

          <div>
            <label class="label">
              <span class="label-text font-medium">
                Zip Code:
                <span className=" text-red-500 text-xl font-semibold">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Zip Code"
              {...register("zipCode", { required: true })}
              class="border p-2 border-gray-300 rounded-md focus:outline-none w-full"
            />
          </div>
        </div>
        <div>
          <label class="label">
            <span class="label-text font-medium">
              Shipping Address:
              <span className=" text-red-500 text-xl font-semibold">*</span>
            </span>
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            type="text"
            placeholder="Shipping Address"
            {...register("address", { required: true })}
            class="border p-2 border-gray-300 rounded-md focus:outline-none w-full"
          ></textarea>
        </div>
        <div>
          <button
            disabled={save}
            className=" btn btn-xs hover:bg-white text-right float-right  font-medium text-emerald-800 border-[1px] rounded border-gray-400 py-0 px-4 mb-10 mt-5 bg-slate-50"
          >
            Address
            <span className="ml-1">
              {save ? (
                <span>
                  {" "}
                  saved <i className="fa-solid fa-square-check ml-1"></i>
                </span>
              ) : (
                "save"
              )}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
