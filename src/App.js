import "./App.css";
import "tippy.js/dist/tippy.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/Shared/RequireAuth";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/Login/SignUp";
import Navber from "./components/Shared/Navber";
import AllProducts from "./components/Pages/AllProducts/AllProducts";
import ProductDetails from "./components/Pages/AllProducts/ProductDetails";
import Cart from "./components/Pages/Cart/Cart";
import PaymentPage from "./components/Pages/Cart/PaymentPage";
import CustomerReview from "./components/Pages/DashBord/ReviewAdd";
import ReviewAdd from "./components/Pages/DashBord/ReviewAdd";
import ManageUser from "./components/Pages/Admin/ManageUser";
import Footer from "./components/Shared/Footer";
import LoveList from "./components/Pages/LoveList/LoveList";
import MyOrders from "./components/Pages/MyOrders/MyOrders";

function App() {
  return (
    <div>
      <Navber></Navber>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>

        <Route path="/allProduct" element={<AllProducts></AllProducts>}></Route>
        <Route
          path="/productDetails/:productId"
          element={<ProductDetails></ProductDetails>}
        ></Route>

        {/*  <RequireAuth> route */}
        <Route
          path="/loveList"
          element={
            <RequireAuth>
              <LoveList></LoveList>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart></Cart>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/payment/:orderId"
          element={
            <RequireAuth>
              <PaymentPage></PaymentPage>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/myOrder"
          element={
            <RequireAuth>
              <MyOrders></MyOrders>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/trackOrder"
          element={
            <RequireAuth>
              <MyOrders></MyOrders>
            </RequireAuth>
          }
        ></Route>

        {/*  Require Admin route */}

        <Route path="/manageUser" element={<ManageUser></ManageUser>}></Route>
        {/* <Route path="/manageOrder" element={<ManageOrder></ManageOrder>}></Route> */}

        <Route path="/reviewAdd" element={<ReviewAdd></ReviewAdd>}></Route>
      </Routes>

      {/* //Footer Added */}
      <Footer></Footer>

      {/* Toast add */}
      <ToastContainer />
    </div>
  );
}

export default App;
