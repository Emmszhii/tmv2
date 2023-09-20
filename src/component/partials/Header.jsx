import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { setIsMenuOpen } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import Logo from "../svg/Logo";

const Header = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleBurgerBtn = () => dispatch(setIsMenuOpen(!store.isMenuOpen));
  return (
    <>
      {store.isMenuOpen && (
        <div
          className="absolute lg:static top-0 left-0 right-0 bottom-0 z-40 bg-black/50"
          onClick={handleBurgerBtn}
        ></div>
      )}
      <header className="flex py-4 px-2 items-center justify-between relative z-50 bg-white">
        <div className="flex items-center gap-4">
          <div
            className={`toggle__btn lg:hidden ${
              store.isMenuOpen ? "open" : ""
            }`}
            onClick={handleBurgerBtn}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="w-20">
            <Logo />
          </div>
        </div>

        <div className="flex items-center gap-2 text-right">
          <div className="m-0 text-sm hidden lg:block">
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
