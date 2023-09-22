import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import { setIsAdd } from "../../../../store/StoreAction";
import Header from "../../../partials/Header";
import Navigation from "../../../partials/Navigation";
import BreadCrumbs from "../../../partials/Breadcrumbs";

const Staff = () => {
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
          <Navigation menu="staff" />
        </aside>
        <main className="px-2 lg:pr-10">
          <BreadCrumbs />
          <div className="flex justify-between items-center my-5">
            <h1 className="mb-0">Staff</h1>
            <button className="btn btn--accent btn--sm" onClick={handleAdd}>
              Add
            </button>
          </div>

          {/* <CategoryTable setItemEdit={setItemEdit} /> */}
        </main>
      </section>

      {/* {store.isAdd && <ModalAddCategory itemEdit={itemEdit} />} */}
      {store.validate && <ModalValidate />}
      {store.success && <Toast />}
    </>
  );
};

export default Staff;
