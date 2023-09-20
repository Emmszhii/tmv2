import React from "react";
import { setIsSettingsOpen, setIsToolsOpen } from "../../store/StoreAction";
import { devNavUrl } from "../helpers/functions-general";
import { StoreContext } from "../../store/StoreContext";

const Navigation = ({ menu, submenu = null, val }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const urlRolePath = `${devNavUrl}`;

  const handleDropDownTools = (e) => {
    dispatch(setIsToolsOpen(!store.isToolsOpen));
  };

  const handleDropDownSettings = (e) => {
    dispatch(setIsSettingsOpen(!store.isSettingsOpen));
  };
  //   const handleDropDownTimeEntry = (e) => {
  //     dispatch(setIsTimeEntryOpen(!store.isTimeEntryOpen));
  //   };

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
        <div className={store.isToolsOpen ? "showdropdown" : "hidden"}>
          <ul className="ml-9 ">
            <li
              className={` ${
                submenu === "toolsWorkLoadChart"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/tools/workloadchart`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "toolsWorkLoadChart" ? "active__submenu" : ""
                }`}
              >
                WorkLoad Chart
              </Link>
            </li>
            <li
              className={` ${
                submenu === "toolsTaskControl"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/tools/taskcontrol`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "toolsWorkLoadChart" ? "active__submenu" : ""
                }`}
              >
                Task Control
              </Link>
            </li>
            <li
              className={` ${
                submenu === "toolsIndividual"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/tools/individual`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "toolsIndividual" ? "active__submenu" : ""
                }`}
              >
                Individual
              </Link>
            </li>
          </ul>
        </div>
        <li className="nav__link  has__dropdown">
          <button
            className={`${menu === "timeEntry" ? "bg-[#436c8a]" : ""}`}
            // onClick={() => handleDropDownTimeEntry()}
          >
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center ">
                <BsGear className="text-lg" /> Time Entry
              </div>
              {/* <PiCaretRight
                className={!store.isTimeEntryOpen ? "rotate-0" : "rotate-90"}
              /> */}
            </div>
          </button>
        </li>
        <li className="nav__link  has__dropdown">
          <button
            className={`${menu === "staff" ? "bg-[#436c8a]" : ""}`}
            // onClick={() => handleDropDownStaff()}
          >
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center ">
                <BsGear className="text-lg" /> Staff
              </div>
              {/* <PiCaretRight
                className={!store.isTimeEntryOpen ? "rotate-0" : "rotate-90"}
              /> */}
            </div>
          </button>
        </li>
        <li className="nav__link  has__dropdown">
          <button
            className={`${menu === "client" ? "bg-[#436c8a]" : ""}`}
            // onClick={() => handleDropDownClient()}
          >
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center ">
                <BsGear className="text-lg" /> Client
              </div>
              {/* <PiCaretRight
                className={!store.isClientOpen ? "rotate-0" : "rotate-90"}
              /> */}
            </div>
          </button>
        </li>
        <li className="nav__link  has__dropdown">
          <button
            className={`${menu === "settings" ? "bg-[#436c8a]" : ""}`}
            onClick={() => handleDropDownSettings()}
          >
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center ">
                <BsGear className="text-lg" /> Settings
              </div>
              <PiCaretRight
                className={!store.isClientOpen ? "rotate-0" : "rotate-90"}
              />
            </div>
          </button>
        </li>
        <div className={store.isSettingsOpen ? "showdropdown" : "hidden"}>
          <ul className="ml-9 ">
            <li
              className={` ${
                submenu === "settingsAccessLevel"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/accesslevel`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsAccessLevel" ? "active__submenu" : ""
                }`}
              >
                Access Level
              </Link>
            </li>
            <li
              className={` ${
                submenu === "settingsUsers" ? "bg-[#436c8a]/80 rounded-md" : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/users`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsUsers" ? "active__submenu" : ""
                }`}
              >
                Users
              </Link>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Navigation;
