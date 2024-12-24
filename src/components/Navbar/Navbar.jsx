import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // for menu -bar in small screen
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex item-center justify-between py-5 font-medium ">
      <img src={assets.logo} className="w-36"></img>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="text-green-900">HOME</p>
          <hr className="w-2/3 border-none h-[1.5px] bg-green-700 hidden "></hr>
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p className="text-green-900">COLLECTION</p>
          <hr className="w-2/3 border-none h-[1.5px] bg-green-700 hidden"></hr>
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="text-green-900">ABOUT</p>
          <hr className="w-2/3 border-none h-[1.5px] bg-green-700 hidden "></hr>
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p className="text-green-900">CONTACT</p>
          <hr className="w-2/3 border-none h-[1.5px] bg-green-700 hidden "></hr>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6 mb-4">
        <img src={assets.search_icon} className="w-5 cursor-pointer"></img>

        <div className="group relative  ">
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />
          <div className="bg-lime-200 group-hover:block hidden absolute right-0 top-full dropdown-menu  z-10  rounded-lg">
            <div className=" flex flex-col gap-2 w-36 py-3 px-5 text-center"></div>
            <p className="cursor-pointer text-green-900 hover:text-green-500 text-center">
              My Profile
            </p>
            <p className="cursor-pointer text-green-900 hover:text-green-500 text-center">
              Orders
            </p>
            <p className="cursor-pointer text-green-900 hover:text-green-500 text-center pb-4">
              Logout
            </p>
          </div>
        </div>
        <Link to="/cart" className="relative ">
          <img src={assets.cart_icon} className="w-5  min-w-5"></img>
          <p className="absolute right-[-5px] bottom-[-5px] w-5 text-center leading-4 bg-green-900 text-white aspect-square rounded-full text-[-5px] ">
            70
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {/* sidebar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-green-700">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p className="text-green-900">Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="text-green-900 py-2 pl-6 border"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="text-green-900 py-2 pl-6 border"
            to="/collection"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="text-green-900 py-2 pl-6 border"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="text-green-900 py-2 pl-6 border"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
