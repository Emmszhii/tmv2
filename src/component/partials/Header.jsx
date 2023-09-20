import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { StoreContext } from "../../store/StoreContext";
import Logo from "../svg/Logo";

const Header = () => {
  const { store, dispatch } = React.useState(StoreContext);
  return (
    <>
      <header className="flex py-4 px-2 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="toggle__btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>
            <Logo />
          </div>
        </div>

        <div className="flex items-center gap-2 text-right">
          <div className="m-0 text-sm">
            <p className="m-0 leading-none font-bold">Emms</p>
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
