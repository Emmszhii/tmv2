import React from "react";
import { setIsAdd } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import BreadCrumbs from "../../../../partials/Breadcrumbs";
import Header from "../../../../partials/Header";
import Navigation from "../../../../partials/Navigation";
import Toast from "../../../../partials/Toast";
import ModalValidate from "../../../../partials/modals/ModalValidate";
import ClientClassTable from "./ClientClassTable";
import ModalAddClientClass from "./ModalAddClientClass";

const ClientClass = () => {
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
        <aside className={`${store.isShow ? "open " : ""}   `}>
          <Navigation menu="settings" submenu="settingsClientClass" />
        </aside>
        <main className="px-2 lg:pr-10 custom-scroll">
          <BreadCrumbs />
          <div className="flex justify-between items-center my-5">
            <h1 className="mb-0">Client Class</h1>
            <button className="btn btn--accent btn--sm" onClick={handleAdd}>
              Add
            </button>
          </div>

          <ClientClassTable setItemEdit={setItemEdit} />
        </main>
      </section>

      {store.isAdd && <ModalAddClientClass itemEdit={itemEdit} />}
      {store.validate && <ModalValidate />}
      {store.success && <Toast />}
    </>
  );
};

export default ClientClass;
