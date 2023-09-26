import React from "react";
import {
  setIsAdd,
  setIsSettingsOpen,
} from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import BreadCrumbs from "../../../../../partials/Breadcrumbs";
import Header from "../../../../../partials/Header";
import Navigation from "../../../../../partials/Navigation";
import Toast from "../../../../../partials/Toast";
import ModalValidate from "../../../../../partials/modals/ModalValidate";
import RolesTable from "./RolesTable";
import ModalAddRoles from "./ModalAddRoles";
import MainFooter from "../../../../../partials/MainFooter";

const Roles = () => {
  const [itemEdit, setItemEdit] = React.useState(null);
  const { store, dispatch } = React.useContext(StoreContext);

  const handleAdd = () => {
    setItemEdit(null);
    dispatch(setIsAdd(true));
  };
  React.useEffect(() => {
    dispatch(setIsSettingsOpen(true));
  }, []);

  return (
    <>
      <Header />
      <section className={`main__grid ${store.isMenuOpen ? "open" : ""}`}>
        <aside
          className={`${store.isMenuOpen ? "open " : ""} overflow-y-auto `}
        >
          <Navigation menu="settings" submenu={`settingsUsers`} />
        </aside>
        <main className="p-3 !pb-6 lg:p-0 lg:pr-10 custom__scroll">
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
          <MainFooter />
        </main>
      </section>

      {store.isAdd && <ModalAddRoles itemEdit={itemEdit} />}
      {store.validate && <ModalValidate />}
      {store.success && <Toast />}
    </>
  );
};

export default Roles;
