import React from "react";
import { setIsAdd, setIsSettingsOpen } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import BreadCrumbs from "../../../../partials/Breadcrumbs";
import Header from "../../../../partials/Header";
import Navigation from "../../../../partials/Navigation";
import Toast from "../../../../partials/Toast";
import ModalValidate from "../../../../partials/modals/ModalValidate";
import ModalAddOffice from "./ModalAddOffice";
import OfficeTable from "./OfficeTable";
import MainFooter from "../../../../partials/MainFooter";

const Office = () => {
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
          <Navigation menu="settings" submenu={`settingsOffice`} />
        </aside>
        <main className="p-3 !pb-6 lg:p-0 lg:pr-10">
          <BreadCrumbs />
          <div className="flex justify-between items-center my-5">
            <h1 className="mb-0">Office</h1>
            <button className="btn btn--accent btn--sm" onClick={handleAdd}>
              Add
            </button>
          </div>
          <div>
            <OfficeTable setItemEdit={setItemEdit} />
          </div>
          <MainFooter />
        </main>
      </section>

      {store.isAdd && <ModalAddOffice itemEdit={itemEdit} />}
      {store.validate && <ModalValidate />}
      {store.success && <Toast />}
    </>
  );
};

export default Office;
