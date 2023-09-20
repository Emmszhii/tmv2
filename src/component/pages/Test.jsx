import React from "react";
import Header from "../partials/Header";
import Navigation from "../partials/Navigation";
import Breadcrumbs from "../partials/Breadcrumbs";
import { StoreContext } from "../../store/StoreContext";

const Test = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <Header />
      <section className={`main__grid ${store.isShow ? "open" : ""}`}>
        <aside className={`${store.isShow ? "open " : ""}   `}>
          <Navigation menu="settings" />
        </aside>
        <main className="px-2 lg:pr-10">
          <Breadcrumbs param={location.search} />
          <div className="flex justify-between items-center my-5">
            <h1 className="mb-0">Client</h1>
            <button className="btn btn--accent btn--sm">Add</button>
          </div>
        </main>
      </section>
    </>
  );
};

export default Test;
