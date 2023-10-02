import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import { setIsAdd } from "../../../../store/StoreAction";
import Header from "../../../partials/Header";
import Navigation from "../../../partials/Navigation";
import BreadCrumbs from "../../../partials/Breadcrumbs";
import ModalAddClient from "./ModalAddClient";
import ModalValidate from "../../../partials/modals/ModalValidate";
import Toast from "../../../partials/Toast";
import ClientTable from "./ClientTable";
import MainFooter from "../../../partials/MainFooter";
import useQueryData from "../../../custom-hooks/useQueryData";

const Client = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const handleAdd = () => {
    setItemEdit(null);
    dispatch(setIsAdd(true));
  };

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
            <h1 className="mb-0">Client</h1>
            <button className="btn btn--accent btn--sm" onClick={handleAdd}>
              Add
            </button>
          </div>
          <div>
            <ClientTable setItemEdit={setItemEdit} />
          </div>
          <MainFooter />
        </main>
      </section>

      {store.isAdd && <ModalAddClient itemEdit={itemEdit} />}
      {store.validate && <ModalValidate />}
      {store.success && <Toast />}
    </>
  );
};

export default Client;
