import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navber from "./components/Shared/Navber";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/Login/SignUp";
import AllProducts from "./components/Pages/AllProducts/AllProducts";

function App() {
  return (
    <div>
      <Navber></Navber>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>

        <Route path="/allProduct" element={<AllProducts></AllProducts>}></Route>
      </Routes>

      {/* Toast add */}
      <ToastContainer />
    </div>
  );
}

export default App;
