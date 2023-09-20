import React from "react";

const Navigation = ({ menu, submenu = null, val }) => {
  return (
    <div className="px-2 py-4 bg-tm-gradient h-full">
      <ul className="custom__scroll">
        <li className="nav__link  has__dropdown">
          <button
            className={`${menu === "settings" ? "bg-[#436c8a]" : ""}`}
            onClick={() => handleDropDownSetting()}
          >
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center ">
                <BsGear className="text-lg" /> Settings
              </div>
              <PiCaretRight
                className={!store.isSettingsOpen ? "rotate-0" : "rotate-90"}
              />
            </div>
          </button>
        </li>
        <div className={store.isSettingsOpen ? "showdropdown" : "hidden"}>
          <ul className="ml-9 ">
            <li
              className={` ${
                submenu === "settingsDepartment"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/department`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsDepartment" ? "active__submenu" : ""
                }`}
              >
                Department
              </Link>
            </li>

            <li
              className={` ${
                submenu === "settingsSampleOtp"
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
                Sample Otp
              </Link>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Navigation;
