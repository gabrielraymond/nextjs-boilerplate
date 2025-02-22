import React from "react";
import MyIcon from "./MyIcon";
import ButtonBurger from "./ButtonBurger";

const Navbar = () => {
  return (
    <nav className="w-full bg-green-600 h-16 text-white flex items-center px-8">
      <div>
        <ButtonBurger />
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
