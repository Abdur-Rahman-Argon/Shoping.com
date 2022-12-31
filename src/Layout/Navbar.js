import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useEffect } from "react";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [Admin, setAdmin] = useState(false);
  const [likeList, setLikeList] = useState(false);

  //logOut button
  const logout = () => {
    localStorage.removeItem("accessToken");
    signOut(auth);
  };

  //local-storage love list length
  useEffect(() => {
    const likeList = JSON.parse(localStorage.getItem("likeList"));
    setLikeList(likeList);
  }, []);

  //---------------- user & admin and carts love-------------//

  const navOption1 = (
    <>
      {Admin ? (
        <li tabindex="8" className="dropdown dropdown-hover mr-5 lg:mr-10">
          <button> Admin </button>
          <ul
            tabindex="8"
            className="dropdown-content menu p-2 bg-gray-200 rounded"
          >
            <li>
              <Link to="/manage-user">All User</Link>
            </li>
            <li>
              <Link to="/manage-user">Manage User</Link>
            </li>
            <li>
              <Link to="/manage-order">All Orders</Link>
            </li>
            <li>
              <Link to="/manage-order">Manage Orders</Link>
            </li>
            <li>
              <Link to="/manage-product">All Product</Link>
            </li>
            <li>
              <Link to="/manage-product">Manage Product</Link>
            </li>
            <li>
              <Link to="/add-product">Add Product</Link>
            </li>
          </ul>
        </li>
      ) : (
        <>
          <li className="font-extrabold text-lg md:text-2xl text-gray-800  relative">
            <Link to="/love-list">
              <i className="fa-regular fa-heart "></i>
              {likeList ? (
                <span className=" absolute text-xs font-bold px-[6px] py-[2px]   bg-[#A3E4D7]  text-gray-700 rounded-full bottom-[8px] right-[6px]">
                  {likeList?.length}
                </span>
              ) : (
                <span className=" absolute text-xs font-bold px-[6px] py-[2px]   bg-[#A3E4D7]  text-gray-700 rounded-full bottom-[8px] right-[6px]">
                  0
                </span>
              )}
            </Link>
          </li>
          <li className="font-extrabold text-lg md:text-2xl text-gray-800  relative lg:mx-3 ">
            <Link to="/cart">
              <i className="fa-solid fa-cart-flatbed-suitcase font-extrabold"></i>
              {likeList ? (
                <span className=" absolute text-xs font-bold px-[6px] py-[2px]   bg-[#A3E4D7]  text-gray-700 rounded-full bottom-[8px] right-[6px]">
                  {likeList?.length}
                </span>
              ) : (
                <span className=" absolute text-xs font-bold px-[6px] py-[2px]   bg-[#A3E4D7]  text-gray-700 rounded-full bottom-[8px] right-[6px]">
                  {0}
                </span>
              )}
            </Link>
          </li>
        </>
      )}

      {/* user profile when user login/ or sign-up */}
      {user ? (
        <li tabindex="0" className="dropdown dropdown-end dropdown-hover">
          <button className="text-center text-sm md:text-xl text-gray-800 ">
            <i className="fa-solid fa-user text-xl font-bold lg:text-base"></i>
          </button>
          <ul
            tabindex="0"
            className={`menu dropdown-content p-2 bg-slate-200 `}
          >
            <li className="my-[2px]">
              <Link to="/profile">My Account</Link>
            </li>
            {Admin ? null : (
              <>
                <li className="my-[2px]">
                  <Link to="/my-order">My Orders</Link>
                </li>
                <li className="my-[2px]">
                  <Link to="/cart">Carts</Link>
                </li>
                <li className="my-[2px]">
                  <Link to="/review-add">Likes</Link>
                </li>
              </>
            )}
            <li className="my-[2px]">
              <button onClick={logout}>Log Out</button>
            </li>
          </ul>
        </li>
      ) : (
        <li className=" text-xs lg:text-[15px] px-0 ">
          <Link to="/login">
            Login <span className="hidden lg:flex">/SignUp</span>
          </Link>
        </li>
      )}
    </>
  );

  //----------------option-2 menu ber-----------------------//
  const navOption2 = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/all-products">Shop</Link>
      </li>

      <li tabindex="8">
        <button className="dropdown navbar-center">
          Brand <i className="fa-solid fa-chevron-down ml-1"></i>
        </button>
        <ul
          tabindex="8"
          className=" menu dropdown-content bg-slate-200  rounded p-2 shadow w-40 text-sm gap-[2px]"
        >
          <li>
            <Link to="/blog">Samsung</Link>
          </li>
          <li>
            <Link to="/about">Apple</Link>
          </li>
          <li>
            <Link to="/contact">Xaomi</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/blog">blog</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </>
  );

  //---------nav one title and search ber-----------//
  const navbar1 = (
    <>
      <nav
        id="Contact"
        className="navbar flex justify-between py-0 lg:px-10 px-2"
      >
        <div className="flex w-60">
          <a
            href="/"
            className=" normal-case text-2xl md:text-4xl text-style text-[#1A5276] font-semibold hover:bg-white titleStyle"
          >
            Shoping.com
          </a>
        </div>

        <div className=" hidden md:flex ">
          <form>
            <div className=" flex items-center">
              <select
                name=""
                id=""
                className="input select-bordered  border rounded-full rounded-r-none focus:outline-none px-2 text-xs font-bold"
              >
                <option value="allCategory" selected>
                  All Category
                </option>
                <option value="Phone"> Phone</option>
                <option value="Microphone"> Microphone</option>
                <option value="Tablet"> Tablet</option>
                <option value="Monitor"> Monitor</option>
                <option value="Laptop"> Laptop</option>
                <option value="Router"> Router</option>
                <option value="Headphone"> Headphone</option>
                <option value="refrigerator"> refrigerator</option>
                <option value="conditioner"> conditioner</option>
              </select>
              <input
                type="text"
                placeholder="Search Items"
                // value={''}
                // {...register("firstName", { required: true })}
                className=" border border-gray-300 border-r-0 border-l-0 rounded-none focus:outline-none md:w-[300px] lg:w-[450px] p-2  py-[11px]"
              />
              <button
                type="submit"
                value=""
                className="border border-l-0 border-gray-300  rounded-full rounded-l-none focus:outline-none p-2 py-[11px]"
              >
                <span className="bg-slate-200 px-3 py-2 rounded-full">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </button>
            </div>
          </form>
        </div>

        <div className="flex w-44 text-xs font-semibold">
          <span className="mx-1">
            <i className="fa-solid fa-phone"></i>
          </span>
          <span className="mx-1">Hotline:</span>
          <span>+880179658000</span>
        </div>
      </nav>
    </>
  );

  /////-------------- catagories Option----------------------///

  const catagoriesOption2 = (
    <>
      <li>
        <Link to="/">Phone</Link>
      </li>
      <li>
        <Link to="/">Microphone</Link>
      </li>
      <li>
        <Link to="/">Tablet</Link>
      </li>
      <li>
        <Link to="/">Monitor</Link>
      </li>
      <li>
        <Link to="/">Laptop</Link>
      </li>
      <li>
        <Link to="/">Router</Link>
      </li>
      <li>
        <Link to="/">Headphone</Link>
      </li>
      <li>
        <Link to="/">refrigerator</Link>
      </li>
      <li>
        <Link to="/">conditioner</Link>
      </li>
    </>
  );

  //---------------- navbar 2 categories menu and user --------//

  const navbar2 = (
    <>
      <nav
        id="Contact"
        className=" menu-style navbar items-center lg:px-16 px-2 py-0 border-b-[1px] border-gray-400 bg-teal-500   "
      >
        {/* navbar start */}
        <div className="flex navbar-start">
          <ul>
            <li tabindex="1" className="dropdown dropdown-hover">
              <button className=" py-4 lg:py-2 normal-case text-xs md:text-sm lg:text-lg text-style text-gray-700 font-semibold flex items-center cursor-pointer ">
                <i className="fa-solid fa-ellipsis-vertical mx-[1px]"></i>
                <i className="fa-solid fa-bars"></i>{" "}
                <span className=" mx-1">Catagories</span>
                <i className="fa-solid fa-chevron-down "></i>
              </button>

              <ul
                tabindex="1"
                className=" menu dropdown-content bg-slate-200  rounded p-2 shadow w-52 font-bold text-sm"
              >
                {catagoriesOption2}
              </ul>
            </li>
          </ul>
        </div>

        {/* Navbar center */}
        <div className="navbar-center ">
          <div className="hidden md:flex text-sm">
            <ul className="menu text-base menu-horizontal font-semibold gap-1 p-0">
              {navOption2}
            </ul>
          </div>
          {/* Menu option or small device */}
          <div tabindex="4" className="dropdown md:hidden navbar-center">
            <button className=" text-xs flex items-center py-4">
              Menu <i className="fa-solid fa-chevron-down ml-1"></i>
            </button>
            <ul
              tabindex="4"
              className=" menu dropdown-content bg-slate-200  rounded p-2 shadow w-40 text-sm gap-[2px] -left-32 "
            >
              {navOption2}
            </ul>
          </div>
        </div>

        {/* Search button */}
        <div className="navbar-center sm:ml-20 md:hidden">
          <div className="dropdown">
            <label tabindex="0" className="m-1">
              <i className="fa-solid fa-magnifying-glass ml-1 mr-1 py-4"></i>
            </label>
            <div tabindex="0" className="dropdown-content -left-16 w-20 p-2">
              <form>
                <div className=" flex items-center">
                  <select
                    name=""
                    id=""
                    className=" py-[5px] px-2 text-xs border rounded-full rounded-r-none focus:outline-none font-medium "
                  >
                    <option value="allCategory" selected>
                      All Category
                    </option>
                    <option value="Phone"> Phone</option>
                    <option value="Microphone"> Microphone</option>
                    <option value="Tablet"> Tablet</option>
                    <option value="Monitor"> Monitor</option>
                    <option value="Laptop"> Laptop</option>
                    <option value="Router"> Router</option>
                    <option value="Headphone"> Headphone</option>
                    <option value="refrigerator"> refrigerator</option>
                    <option value="conditioner"> conditioner</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Search Items"
                    // value={''}
                    // {...register("firstName", { required: true })}
                    className=" border border-gray-300 border-r-0 border-l-0 rounded-none focus:outline-none w-[100px] px-1 text-xs  py-[5px]"
                  />
                  <button
                    type="submit"
                    value=""
                    className="border border-l-0 border-gray-300 bg-white rounded-full rounded-l-none focus:outline-none px-0 py-[1px]"
                  >
                    <span className="bg-slate-200 px-2 py-1 text-sm rounded-full">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* navbar end */}
        <div className=" navbar-end">
          <ul className="menu text-xs menu-horizontal font-semibold gap-1 p-0">
            {navOption1}
          </ul>
        </div>
      </nav>
    </>
  );

  ////--------------------------------------/////////

  return (
    <>
      {navbar1}
      {navbar2}
    </>
  );
};

export default Navbar;
