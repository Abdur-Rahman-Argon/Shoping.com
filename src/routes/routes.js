import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import SignUp from "../components/Pages/Login/SignUp";
import AllProducts from "../components/Pages/AllProducts/AllProducts";
import ProductDetails from "../components/Pages/AllProducts/ProductDetails";
import RequireAuth from "../components/utilites/RequireAuth";
import Cart from "../components/Pages/Cart/Cart";
import LoveList from "../components/Pages/LoveList/LoveList";
import PaymentPage from "../components/Pages/Cart/PaymentPage";
import MyOrders from "../components/Pages/MyOrders/MyOrders";
import NotFound from "../components/Shared/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      // home page
      {
        path: "/",
        element: <Home></Home>,
      },

      // Login Page
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },

      //products
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "/product-details/:productId",
        element: <ProductDetails />,
      },

      //orders

      {
        path: "/my-order",
        element: (
          <RequireAuth>
            <MyOrders></MyOrders>
          </RequireAuth>
        ),
      },
      {
        path: "/track-order",
        element: (
          <RequireAuth>
            <MyOrders></MyOrders>
          </RequireAuth>
        ),
      },

      //cart
      {
        path: "/cart",
        element: (
          <RequireAuth>
            <Cart></Cart>
          </RequireAuth>
        ),
      },

      // Payment
      {
        path: "/payment/:orderId",
        element: (
          <RequireAuth>
            <PaymentPage></PaymentPage>
          </RequireAuth>
        ),
      },

      //Wishlist
      {
        path: "/love-list",
        element: (
          <RequireAuth>
            <LoveList></LoveList>
          </RequireAuth>
        ),
      },
      {
        path: "/*",
        element: <NotFound></NotFound>,
      },

      //Require Admin route

      // { path:"/manageUser", element:<ManageUser></ManageUser>},
      // {path:"/manageOrder", element:<ManageOrder></ManageOrder> },
      // {path:"/reviewAdd", element:<ReviewAdd></ReviewAdd> }
    ],
  },
]);

export default routes;

/*
        {/* 
   
      </Routes>*/
