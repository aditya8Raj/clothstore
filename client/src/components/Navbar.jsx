import React from "react";
import { cartImg, logoDark } from "../assets/index";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-white border-b-2 border-b-black">
        <div className="LOGO max-w-screen-xl h-full mx-auto flex items-center justify-between">
          <img className="w-28" src={logoDark} alt="logo-dark" />
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
            <div className="CART relative">
              <img className="w-6" src={cartImg} alt="cartImg" />
              <span className="absolute w-6 top-1.5 left-0 text-m flex items-center justify-center">
                0
              </span>
            </div>
            <img
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt="userLogo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
