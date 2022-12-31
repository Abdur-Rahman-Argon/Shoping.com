import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
