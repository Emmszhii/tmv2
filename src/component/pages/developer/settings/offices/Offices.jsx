import React from "react";
import Toast from "../../../../partials/Toast";
import ModalValidate from "../../../../partials/modals/ModalValidate";
import ModalAddSystem from "../users/system/modals/ModalAddSystem";
import BreadCrumbs from "../../../../partials/Breadcrumbs";
import Navigation from "../../../../partials/Navigation";
import Header from "../../../../partials/Header";
import { StoreContext } from "../../../../../store/StoreContext";
import { setIsSettingsOpen } from "../../../../../store/StoreAction";

const Offices = () => {
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
          <Navigation menu="settings" submenu={`settingsOffices`} />
        </aside>
        <main className="p-3 lg:p-0 lg:pr-10">
          <BreadCrumbs />
          <div className="flex justify-between items-center my-5">
            <h1 className="mb-0">Offices</h1>
            <button className="btn btn--accent btn--sm" onClick={handleAdd}>
              Add
            </button>
          </div>
          <div></div>
        </main>
      </section>

      {store.isAdd && <ModalAddSystem itemEdit={itemEdit} />}
      {store.validate && <ModalValidate />}
      {store.success && <Toast />}
    </>
  );
};

export default Offices;
