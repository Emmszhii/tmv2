import React from "react";
import { setIsAdd } from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import BreadCrumbs from "../../../../../partials/Breadcrumbs";
import Header from "../../../../../partials/Header";
import Navigation from "../../../../../partials/Navigation";
import Form1099ZipCodeFinderTable from "./Form1099ZipCodeFinderTable";

const Form1099ZipCodeFinder = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  return (
    <>
      <Header />
      <section className={`main__grid ${store.isShow ? "open" : ""}`}>
        <aside
          className={`${store.isMenuOpen ? "open " : ""} overflow-y-auto `}
        >
          <Navigation menu="tools" submenu="toolsForm1099" />
        </aside>
        <main className="px-2 lg:pr-10">
          <BreadCrumbs />
          <div className="flex justify-between items-center my-5">
            <h1 className="mb-0">Zip Code Finder</h1>
            <p></p>
          </div>

          <Form1099ZipCodeFinderTable />
        </main>
      </section>
    </>
  );
};

export default Form1099ZipCodeFinder;
