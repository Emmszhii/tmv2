import React from "react";
import { StoreContext } from "../../../../../store/StoreContext";
import BreadCrumbs from "../../../../partials/Breadcrumbs";
import Header from "../../../../partials/Header";
import Navigation from "../../../../partials/Navigation";
import Toast from "../../../../partials/Toast";
import ModalValidate from "../../../../partials/modals/ModalValidate";
import ModalAddSystem from "../users/system/ModalAddSystem";
import ActivitiesTable from "./ActivityTable";
import { setIsAdd, setIsSettingsOpen } from "../../../../../store/StoreAction";
import ModalAddActivities from "./ModalAddActivities";

const Activities = () => {
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
          <Navigation menu="settings" submenu={`settingsActivity`} />
        </aside>
        <main className="p-3 lg:p-0 lg:pr-10">
          <BreadCrumbs />
          <div className="flex justify-between items-center my-5">
            <h1 className="mb-0">Activity</h1>
            <button className="btn btn--accent btn--sm" onClick={handleAdd}>
              Add
            </button>
          </div>
          <div>
            <ActivitiesTable setItemEdit={setItemEdit} />
          </div>
        </main>
      </section>

      {store.isAdd && <ModalAddActivities itemEdit={itemEdit} />}
      {store.validate && <ModalValidate />}
      {store.success && <Toast />}
    </>
  );
};

export default Activities;
