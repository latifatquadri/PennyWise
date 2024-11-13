import React from "react";
import Logo from "../../Assets/images/Penny_wise_logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full shadow-md z-30 sticky inset-x-0 top-0 backdrop-blur-lg bg-white md:h-auto h-36 ">
      <nav className="md:flex sm:block h-20 items-center justify-between mx-auto container py-4 px-8">
        <div className="flex md:gap-4 sm:gap-2 items-center">
          <img
            src={Logo}
            alt="Penny wise logo"
            className="w-16 h-16 rounded-full"
          />
          <h2 className="text-3xl font-bold text-green-600">Penny Wise</h2>
        </div>
        <ul className="flex list-none text-green-600 md:gap-8 gap-2 lg:text-lg text-base items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/abouts">Abouts</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <button className="text-green-600 font-semibold w-16 h-10">
            <Link to="/login">Log In</Link>
          </button>
          <button className="text-white bg-green-600 w-44 h-12 rounded text-bold">
            <Link to="/register">Sign Up</Link>
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
