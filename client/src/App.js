import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import Product from "./components/Product";
import { productsData } from "./api/Api";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  // ScrollRestoration,
} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div style={{ fontFamily: "OperatorMono" }}>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
