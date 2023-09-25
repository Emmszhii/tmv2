import React from "react";
import Header from "../../../../partials/Header";
import Navigation from "../../../../partials/Navigation";
import Breadcrumbs from "../../../../partials/Breadcrumbs";
import { StoreContext } from "../../../../../store/StoreContext";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { IoMdArrowDropright } from "react-icons/io";

const Users = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <Header />
      <section
        className={`main__grid custom__scroll
        ${store.isMenuOpen ? "open" : ""} `}
      >
        <aside className={`${store.isMenuOpen ? "open " : ""} `}>
          <Navigation menu="settings" submenu={`settingsUsers`} />
        </aside>
        <main className="p-3 lg:p-0 lg:pr-10">
          <Breadcrumbs />
          <div className="flex justify-between items-center my-5">
            <h1 className="mb-0">Users</h1>
          </div>
          <ul className="max-w-xl">
            <li className="hover:bg-gray-100">
              <Link to={`/settings/users/system`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="mb-1 text-base">System</h4>
                    <p>list of roles used on the system</p>
                  </div>
                  <div className="p-4 text-xl">
                    <IoMdArrowDropright />
                  </div>
                </div>
              </Link>
            </li>
            <li className="hover:bg-gray-100">
              <Link to={`/settings/users/other`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="mb-1 text-base">Other</h4>
                    <p>list of roles used on the other</p>
                  </div>
                  <div className="p-4 text-xl">
                    <IoMdArrowDropright />
                  </div>
                </div>
              </Link>
            </li>
            <li className="hover:bg-gray-100">
              <Link to={`/settings/users/roles`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="mb-1 text-base">Roles</h4>
                    <p>list of roles used on the roles</p>
                  </div>
                  <div className="p-4 text-xl">
                    <IoMdArrowDropright />
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </main>
      </section>
    </>
  );
};

export default Users;
