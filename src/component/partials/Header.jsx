import React from "react";
import Logo from "../svg/Logo";
import { BiSolidUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <header className="flex p-4">
        <Logo />
        <div>
          <div></div>
          <div>
            <BiSolidUserCircle />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
