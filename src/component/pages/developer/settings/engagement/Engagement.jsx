import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { StoreContext } from "../../../../../store/StoreContext";
import BreadCrumbs from "../../../../partials/Breadcrumbs";
import Header from "../../../../partials/Header";
import Navigation from "../../../../partials/Navigation";
import { Link } from "react-router-dom";
const Engagement = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <Header />
      <section className={`main__grid ${store.isMenuOpen ? "open" : ""}`}>
        <aside className={`${store.isMenuOpen ? "open " : ""}   `}>
          <Navigation menu="settings" submenu="settingsEngagement" />
        </aside>
        <main className="px-2 lg:pr-10">
          <BreadCrumbs param={location.search} />
          <div className="flex justify-between items-center my-5">
            <h1 className="mb-0">Engagement</h1>
          </div>
          <div>
            <ul>
              <li className="hover:bg-gray-100">
                <Link to={`/settings/engagement/category`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="mb-1 text-base">Category</h4>
                      <p>View list of roles used on the system</p>
                    </div>
                    <div className="p-4 text-2xl">
                      <FiChevronRight />
                    </div>
                  </div>
                </Link>
              </li>
              <li className="hover:bg-gray-100">
                <Link to={`/settings/engagement/template`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="mb-1 text-base">Template</h4>
                      <p>View list of roles used on the system</p>
                    </div>
                    <div className="p-4 text-2xl">
                      <FiChevronRight />
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </main>
      </section>
    </>
  );
};

export default Engagement;
