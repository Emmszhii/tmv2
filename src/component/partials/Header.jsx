import React from "react";
import Logo from "../svg/Logo";
import { BiSolidUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <header className="flex p-4 items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2">
          <div className="m-0">
            <p className="m-0 font-bold">Emms</p>
            <p className="m-0">Developer</p>
          </div>
          <div className="">
            <BiSolidUserCircle className="text-5xl text-gray-400" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
