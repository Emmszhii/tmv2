import React from "react";
import { StoreContext } from "../../../../../store/StoreContext";
import BreadCrumbs from "../../../../partials/Breadcrumbs";
import Header from "../../../../partials/Header";
import MainFooter from "../../../../partials/MainFooter";
import Navigation from "../../../../partials/Navigation";
import { Link } from "react-router-dom";
import { getUrlParam } from "../../../../helpers/functions-general";

const ClientInformation = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const clientId = getUrlParam().get("clientId");

  return (
    <>
      <Header />
      <section className={`main__grid ${store.isMenuOpen ? "open" : ""}`}>
        <aside
          className={`${store.isMenuOpen ? "open " : ""} overflow-y-auto `}
        >
          <Navigation menu="client" />
        </aside>
        <main className="p-3 !pb-6 lg:p-0 lg:pr-10 custom__scroll">
          <BreadCrumbs />
          <div className="flex justify-between items-center my-5">
            <h1 className="mb-0">2026SHAMMON Information</h1>
          </div>
          <div>
            <ul>
              <li>
                <Link to={`/system/client/information/main?clientId=${clientId}`}>
                  <div className="flex flex-col gap-2">
                    <h4>Main</h4>
                    <p>View list of main</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={`/system/client/information/contact-information?clientId=${clientId}`}>
                  <div className="flex flex-col gap-2">
                    <h4>Contact Information</h4>
                    <p>View list of main</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={`/system/client/information/engagement?clientId=${clientId}`}>
                  <div className="flex flex-col gap-2">
                    <h4>Engagement</h4>
                    <p>View list of main</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={`/system/client/information/billing-ar?clientId=${clientId}`}>
                  <div className="flex flex-col gap-2">
                    <h4>Billing and A/R</h4>
                    <p>View list of main</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={`/system/client/information/custom-fields?clientId=${clientId}`}>
                  <div className="flex flex-col gap-2">
                    <h4>Custom Fields</h4>
                    <p>View list of roles used on the system</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={`/system/client/information/notes?clientId=${clientId}`}>
                  <div className="flex flex-col gap-2">
                    <h4>Notes</h4>
                    <p>View list of roles used on the system</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <MainFooter />
        </main>
      </section>
    </>
  );
};

export default ClientInformation;
