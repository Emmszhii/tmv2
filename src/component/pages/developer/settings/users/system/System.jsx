import React from "react";
import Header from "../../../../../partials/Header";
import Navigation from "../../../../../partials/Navigation";
import { StoreContext } from "../../../../../../store/StoreContext";
import BreadCrumbs from "../../../../../partials/Breadcrumbs";
import SystemTable from "./SystemTable";

const System = () => {
  const [itemEdit, setItemEdit] = React.useState(null);
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <Header />
      <section className={`main__grid ${store.isMenuOpen ? "open" : ""}`}>
        <aside className={`${store.isMenuOpen ? "open " : ""}   `}>
          <Navigation menu="settings" />
        </aside>
        <main className="px-2 lg:pr-10">
          <BreadCrumbs />
          <div className="flex justify-between items-center my-5">
            <h1 className="mb-0">System</h1>
            <button className="btn btn--accent btn--sm">Add</button>
            <SystemTable setItemEdit={setItemEdit} />
          </div>
        </main>
      </section>
    </>
  );
};

export default System;
