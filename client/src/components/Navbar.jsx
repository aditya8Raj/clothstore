import React from "react";
import { useSelector } from "react-redux";
import { cartImg, logoDark } from "../assets/index";
import { Link } from "react-router-dom";

const Navbar = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const fullName = userInfo ? userInfo.name : "";
  const firstName = fullName.split(" ")[0];

  console.log(userInfo);
  return (
    <>
      <div className="w-full h-20 bg-white border-b-2 border-b-black sticky top-0 z-50">
        <div className="LOGO max-w-screen-xl h-full mx-auto flex items-center justify-between">
          <Link to="/">
            <img className="w-28" src={logoDark} alt="logo-dark" />
          </Link>
          <div className="NAV-BTNS flex items-center gap-8">
            <ul className="flex items-center gap-8">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Shop
              </li>
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Contact
              </li>
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Blog
              </li>
            </ul>
            <Link to="/cart">
              <div className="CART relative">
                <img className="w-6" src={cartImg} alt="cartImg" />
                <span className="absolute w-6 top-1.5 left-0 text-m flex items-center justify-center">
                  {productData.length}
                </span>
              </div>
            </Link>

            <Link to="login">
              <img
                className="w-8 h-8 rounded-full"
                src={
                  userInfo
                    ? userInfo.image
                    : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80.png"
                }
                alt="userImg"
              />
            </Link>
            {userInfo && (
              <p className="text-base font-mono font-semibold underline underline-offset">
                {firstName}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
