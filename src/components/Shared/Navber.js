import React from "react";

const Navber = () => {
  const navber = (
    <>
      <li>
        <a href="#About">Home</a>
      </li>
      <li>
        <a href="#About">Shop</a>
      </li>

      <li>
        <a href="#Manu">Cart</a>
      </li>

      <li>
        <a href="#About">Contact Us</a>
      </li>
      <li>
        <a href="#About">About Us</a>
      </li>
      <li>
        <a href="#About">LogIn</a>
      </li>
    </>
  );
  return (
    <nav id="Contact" class="navbar flex justify-between pt-3 lg:px-10 px-2">
      <div class="flex">
        <a
          href="/"
          class="btn btn-ghost normal-case text-base lg:text-xl text-style text-3xl"
        >
          Shoping.com
        </a>
      </div>

      <div class="navbar-end hidden lg:flex">
        <ul class="menu text-sm menu-horizontal gap-1 p-0">{navber}</ul>
      </div>

      <div class="dropdown lg:hidden">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow   rounded-box w-44 -left-32"
        >
          {navber}
        </ul>
      </div>
    </nav>
  );
};

export default Navber;
