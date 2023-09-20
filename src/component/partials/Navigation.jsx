import React from "react";
import { StoreContext } from "../../store/StoreContext";
import { setIsSettingsOpen, setIsToolsOpen } from "../../store/StoreAction";

const Navigation = ({ menu, submenu = null, val }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleDropDownTools = () => {
    dispatch(setIsToolsOpen(!store.setIsToolsOpen));
  };

  return (
    <div className="px-2 py-4 bg-tm-gradient h-full">
      <ul className="custom__scroll">
        <li className="nav__link  has__dropdown">
          <button
            className={`${menu === "tools" ? "bg-[#436c8a]" : ""}`}
            onClick={() => handleDropDownTools()}
          >
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center ">
                <BsGear className="text-lg" /> Tools
              </div>
              <PiCaretRight
                className={!store.setIsToolsOpen ? "rotate-0" : "rotate-90"}
              />
            </div>
          </button>
        </li>
        <div className={store.setIsToolsOpen ? "showdropdown" : "hidden"}>
          <ul className="ml-9 ">
            <li
              className={` ${
                submenu === "toolsWorkLoadChart"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/sample-otp`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsSampleOtp" ? "active__submenu" : ""
                }`}
              >
                Sample
              </Link>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Navigation;
