import React from "react";
import { BsGear, BsPersonVcard } from "react-icons/bs";
import { LiaToolsSolid, LiaBusinessTimeSolid } from "react-icons/lia";
import { BiUserCircle } from "react-icons/bi";
import { setIsSettingsOpen, setIsToolsOpen } from "../../store/StoreAction";
import { PiCaretRight } from "react-icons/pi";
import { devNavUrl } from "../helpers/functions-general";
import { StoreContext } from "../../store/StoreContext";
import { Link } from "react-router-dom";

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
    <div className="px-2 py-4 bg-tm-gradient h-full custom__scroll overflow-y-auto">
      <ul className="">
        <li className="nav__link has__dropdown">
          <button
            className={`${menu === "tools" ? "bg-[#436c8a]" : ""}`}
            onClick={() => handleDropDownTools()}
          >
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center ">
                <LiaToolsSolid className="text-lg" /> Tools
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
                <LiaBusinessTimeSolid className="text-lg" /> Time Entry
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
                <BiUserCircle className="text-lg" /> Staff
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
                <BsPersonVcard className="text-lg" /> Client
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
            <li
              className={` ${
                submenu === "settingsActivity"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/activity`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsActivity" ? "active__submenu" : ""
                }`}
              >
                Activity
              </Link>
            </li>
            <li
              className={` ${
                submenu === "settingsRates" ? "bg-[#436c8a]/80 rounded-md" : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/rates`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsRates" ? "active__submenu" : ""
                }`}
              >
                Rates
              </Link>
            </li>
            <li
              className={` ${
                submenu === "settingsEngagement"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/engagement`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsEngagement" ? "active__submenu" : ""
                }`}
              >
                Engagement
              </Link>
            </li>
            <li
              className={` ${
                submenu === "settingsOffices"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/offices`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsOffices" ? "active__submenu" : ""
                }`}
              >
                Offices
              </Link>
            </li>
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
                submenu === "settingsEntities"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/entities`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsEntities" ? "active__submenu" : ""
                }`}
              >
                Entities
              </Link>
            </li>
            <li
              className={` ${
                submenu === "settingsReferralType"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/referraltype`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsReferralType" ? "active__submenu" : ""
                }`}
              >
                Referral Type
              </Link>
            </li>
            <li
              className={` ${
                submenu === "settingsReferralSource"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/referralsource`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsReferralSource" ? "active__submenu" : ""
                }`}
              >
                Referral Source
              </Link>
            </li>
            <li
              className={` ${
                submenu === "settingsLostReason"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/lostreason`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsLostReason" ? "active__submenu" : ""
                }`}
              >
                Lost Reason
              </Link>
            </li>
            <li
              className={` ${
                submenu === "settingsLostTo" ? "bg-[#436c8a]/80 rounded-md" : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/lostto`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsLostTo" ? "active__submenu" : ""
                }`}
              >
                Lost To
              </Link>
            </li>
            <li
              className={` ${
                submenu === "settingsWonReason"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/wonreason`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsWonReason" ? "active__submenu" : ""
                }`}
              >
                Won Reason
              </Link>
            </li>
            <li
              className={` ${
                submenu === "settingsClientClass"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/clientclass`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsClientClass" ? "active__submenu" : ""
                }`}
              >
                Client Class
              </Link>
            </li>
            <li
              className={` ${
                submenu === "settingsForm1099SpecialCharacter"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/form1099special-character`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsForm1099SpecialCharacter"
                    ? "active__submenu"
                    : ""
                }`}
              >
                Form 1099 Special Character
              </Link>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Navigation;
