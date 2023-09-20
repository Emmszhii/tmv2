import React from "react";
import { StoreContext } from "../../store/StoreContext";
import {
  setIsSettingsOpen,
  setIsStaffOpen,
  setIsTimeEntryOpen,
  setIsToolsOpen,
} from "../../store/StoreAction";

const Navigation = ({ menu, submenu = null, val }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleDropDownTools = (e) => {
    dispatch(setIsToolsOpen(!store.isToolsOpen));
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
            className={`${menu === "Client" ? "bg-[#436c8a]" : ""}`}
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
      </ul>
    </div>
  );
};

export default Navigation;
