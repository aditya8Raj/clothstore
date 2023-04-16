import React from "react";
import { logoLight, paymentLogo } from "../assets/index";
import { VscGithubInverted } from "react-icons/vsc";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { VscTwitter } from "react-icons/vsc";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7">
          <img className="w-32" src={logoLight} alt="logoLight" />
          <p className="text-white text-sm tracking-wide">
            ©Unfolded Clothes Inc.
          </p>
          <img className="w-56" src={paymentLogo} alt="paymentLogo" />
          <div className="flex gap-5 text-lg text-gray-400">
            <VscGithubInverted className="hover:text-white duration-300 cursor-pointer" />
            <BsYoutube className="hover:text-white duration-300 cursor-pointer" />
            <BsFacebook className="hover:text-white duration-300 cursor-pointer" />
            <VscTwitter className="hover:text-white duration-300 cursor-pointer" />
            <BsInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
          <p>India 🇮🇳</p>
          <p>Mobile: +91 1234567890</p>
          <p>e-mail: aditya88raj88@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
