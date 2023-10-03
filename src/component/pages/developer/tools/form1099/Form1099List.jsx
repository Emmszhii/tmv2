import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { StoreContext } from "../../../../../store/StoreContext";
import Header from "../../../../partials/Header";
import Navigation from "../../../../partials/Navigation";
import BreadCrumbs from "../../../../partials/Breadcrumbs";
const Form1099List = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <Header />
      <section className={`main__grid ${store.isMenuOpen ? "open" : ""}`}>
        <aside
          className={`${store.isMenuOpen ? "open " : ""} overflow-y-auto `}
        >
          <Navigation menu="tools" submenu="toolsForm1099" />
        </aside>
        <main className="px-2 lg:pr-10">
          <BreadCrumbs param={location.search} />
          <div className="flex justify-between items-center my-5">
            <h1 className="mb-0">Form 1099</h1>
          </div>
          <div>
            <ul>
              <li className="hover:bg-gray-100">
                <Link>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="mb-1 text-base">Import Data</h4>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Expedita,
                      </p>
                    </div>
                    <div className="p-4 text-2xl">
                      <FiChevronRight />
                    </div>
                  </div>
                </Link>
              </li>
              <li className="hover:bg-gray-100">
                <Link>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="mb-1 text-base">Client</h4>
                      <p>View list of client</p>
                    </div>
                    <div className="p-4 text-2xl">
                      <FiChevronRight />
                    </div>
                  </div>
                </Link>
              </li>
              <li className="hover:bg-gray-100">
                <Link to={`/tools/form-1099/zip-code-finder`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="mb-1 text-base">Zip Code Finder</h4>
                      <p>View list of State, City & ZipCode</p>
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

export default Form1099List;
