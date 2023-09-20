import React from "react";
import Header from "../../../../partials/Header";
import Navigation from "../../../../partials/Navigation";
import Breadcrumbs from "../../../../partials/Breadcrumbs";
import { StoreContext } from "../../../../../store/StoreContext";
import { Link } from "react-router-dom";

const Users = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <Header />
      <section className={`main__grid ${store.isMenuOpen ? "open" : ""}`}>
        <aside className={`${store.isMenuOpen ? "open " : ""}   `}>
          <Navigation menu="settings" />
        </aside>
        <main className="px-2 lg:pr-10">
          <Breadcrumbs />
          <div className="flex justify-between items-center my-5">
            <h1 className="mb-0">Users</h1>
          </div>
          <ul>
            <li>
              <Link to={``}></Link>
            </li>
          </ul>
        </main>
      </section>
    </>
  );
};

export default Users;
