import React from "react";
import Logo from "../../Assets/images/Penny_wise_logo.jpg";
import Profile from "./Profile";

function Header() {
  return (
    <div className="w-[100%] shadow-md z-30 sticky top-0 backdrop-blur-lg bg-green-100">
      <div className="w-[90%] mx-auto flex justify-between py-2">
        <img
          src={Logo}
          alt="Penny wise logo"
          className="w-16 h-16 rounded-full"
        />
        <Profile />
      </div>
    </div>
  );
}

export default Header;
