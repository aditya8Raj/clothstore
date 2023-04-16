import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  // ScrollRestoration,
} from "react-router-dom";
import { productsData } from "./api/Api";

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
