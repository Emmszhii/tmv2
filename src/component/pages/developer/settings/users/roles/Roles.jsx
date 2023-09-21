import React from "react";
import Header from "../../../../../partials/Header";
import { StoreContext } from "../../../../../../store/StoreContext";
import Navigation from "../../../../../partials/Navigation";
import BreadCrumbs from "../../../../../partials/Breadcrumbs";
import { setIsAdd } from "../../../../../../store/StoreAction";
import RolesTable from "./RolesTable";
import ModalAddRoles from "./modals/ModalAddRoles";
import ModalConfirm from "../../../../../partials/modals/ModalConfirm";
import ModalValidate from "../../../../../partials/modals/ModalValidate";
import Toast from "../../../../../partials/Toast";

const Roles = () => {
  const [itemEdit, setItemEdit] = React.useState(null);
  const { store, dispatch } = React.useContext(StoreContext);

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
          <Navigation menu="settings" />
        </aside>
        <main className="p-3 lg:p-0 lg:pr-10 custom__scroll">
          <BreadCrumbs />
          <div className="flex justify-between items-center my-5">
            <h1 className="mb-0">Roles</h1>
            <button className="btn btn--accent btn--sm" onClick={handleAdd}>
              Add
            </button>
          </div>
          <div>
            <RolesTable setItemEdit={setItemEdit} />
          </div>
        </main>
      </section>

      {store.isAdd && <ModalAddRoles itemEdit={itemEdit} />}
      {store.validate && <ModalValidate />}
      {store.success && <Toast />}
    </>
  );
};

export default Roles;
