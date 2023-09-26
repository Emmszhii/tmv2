import React from "react";
import { setIsAdd, setIsSettingsOpen } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import BreadCrumbs from "../../../../partials/Breadcrumbs";
import Header from "../../../../partials/Header";
import Navigation from "../../../../partials/Navigation";
import Toast from "../../../../partials/Toast";
import ModalValidate from "../../../../partials/modals/ModalValidate";
import ModalAddRates from "./ModalAddRates";
import RatesTable from "./RatesTable";
import MainFooter from "../../../../partials/MainFooter";

const Rates = () => {
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
          <Navigation menu="settings" submenu={`settingsRates`} />
        </aside>
        <main className="p-3 !pb-6 lg:p-0 lg:pr-10">
          <BreadCrumbs />
          <div className="flex justify-between items-center my-5">
            <h1 className="mb-0">Rates</h1>
            <button className="btn btn--accent btn--sm" onClick={handleAdd}>
              Add
            </button>
          </div>
          <div>
            <RatesTable setItemEdit={setItemEdit} />
          </div>
          <MainFooter />
        </main>
      </section>

      {store.isAdd && <ModalAddRates itemEdit={itemEdit} />}
      {store.validate && <ModalValidate />}
      {store.success && <Toast />}
    </>
  );
};

export default Rates;
