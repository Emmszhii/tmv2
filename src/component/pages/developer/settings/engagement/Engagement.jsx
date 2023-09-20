import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { StoreContext } from "../../../../../store/StoreContext";
import BreadCrumbs from "../../../../partials/Breadcrumbs";
import Header from "../../../../partials/Header";
import Navigation from "../../../../partials/Navigation";
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
              <li className="flex items-center justify-between border-t-2">
                <div>
                  <h4 className="mb-1 text-base">Category</h4>
                  <span>View list of roles on the system</span>
                </div>
                <FiChevronRight className="text-2xl" />
              </li>
             
            </ul>
          </div>
        </main>
      </section>
    </>
  );
};

export default Engagement;
