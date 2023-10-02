import React from "react";
import { StoreContext } from "../../../../../../store/StoreContext";
import { setIsAdd } from "../../../../../../store/StoreAction";
import Toast from "../../../../../partials/Toast";
import ModalValidate from "../../../../../partials/modals/ModalValidate";
import ModalAddClient from "../../ModalAddClient";
import { FiEdit3 } from "react-icons/fi";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { getUrlParam } from "../../../../../helpers/functions-general";
import useQueryData from "../../../../../custom-hooks/useQueryData";
import Header from "../../../../../partials/Header";
import Navigation from "../../../../../partials/Navigation";
import BreadCrumbs from "../../../../../partials/Breadcrumbs";
import FetchingSpinner from "../../../../../partials/spinners/FetchingSpinner";
import TableLoading from "../../../../../partials/TableLoading";
import MainFooter from "../../../../../partials/MainFooter";
import ClientPrimaryContact from "./primary-contact/ClientPrimaryContact";
import ModalEditPrimary from "./primary-contact/ModalEditPrimary";

const ClientContactInformation = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const clientId = getUrlParam().get("clientId");
  const [itemEdit, setItemEdit] = React.useState(null);
  // tab state
  const [primaryShow, setPrimaryShow] = React.useState(true);
  const [preferredShow, setPreferredShow] = React.useState(false);
  const [billingShow, setBillingShow] = React.useState(false);

  const handlerShowPrimary = () => setPrimaryShow(!primaryShow);
  const handlerShowPreferred = () => setPreferredShow(!preferredShow);
  const handlerShowBilling = () => setBillingShow(!billingShow);

  const handlerEdit = (item) => {
    setItemEdit(item);
    dispatch(setIsAdd(true));
  };
  const {
    isLoading,
    isFetching,
    error,
    data: client,
  } = useQueryData(
    `/v2/controllers/developer/client/client.php?clientId=${clientId}`,
    "get",
    "client"
  );

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
          <div className="max-w-lg">
            <BreadCrumbs param={location.search} />
            {isFetching && !isLoading && <FetchingSpinner />}
            {isLoading && <TableLoading cols={1} count={20} />}
            {(error || !client?.success || client?.data.length === 0) && (
              <div className="py-10">
                <h1 className="text-center text-gray-400 text-base">
                  Page not found.
                </h1>
              </div>
            )}
            {client?.success &&
              client?.data.map((item, key) => {
                return (
                  <React.Fragment key={key}>
                    <div className="py-5">
                      <h1>{item.client_client_id}</h1>
                      <ul>
                        <li>
                          <div className="flex items-center justify-between gap-2 text-sm cursor-pointer hover:bg-gray-50 border-b-2">
                            <div
                              className="flex items-center justify-between w-full py-4 "
                              onClick={handlerShowPrimary}
                            >
                              <h4 className="mb-0">Primary Contact</h4>

                              <button
                                className={`tooltip`}
                                data-tooltip={`${
                                  primaryShow ? "Close" : "Open"
                                }`}
                                onClick={handlerShowPrimary}
                              >
                                {primaryShow ? (
                                  <BiChevronDown />
                                ) : (
                                  <BiChevronRight />
                                )}
                              </button>
                            </div>
                            <button
                              className="tooltip"
                              data-tooltip={`Edit`}
                              onClick={() => handlerEdit(item)}
                            >
                              <FiEdit3 />
                            </button>
                          </div>
                          {primaryShow && <ClientPrimaryContact item />}
                        </li>
                        <li>
                          <div className="flex items-center justify-between gap-2 text-sm cursor-pointer hover:bg-gray-50 border-b-2">
                            <div
                              className="flex items-center justify-between w-full py-4 "
                              onClick={handlerShowPreferred}
                            >
                              <h4 className="mb-0">Preferred Contact</h4>
                              <button
                                className={`tooltip`}
                                data-tooltip={preferredShow ? "Close" : "Open"}
                                onClick={handlerShowPreferred}
                              >
                                {preferredShow ? (
                                  <BiChevronDown />
                                ) : (
                                  <BiChevronRight />
                                )}
                              </button>
                            </div>
                            <button className="tooltip" data-tooltip={`Edit`}>
                              <FiEdit3 />
                            </button>
                          </div>
                          {preferredShow && <>show</>}
                        </li>
                        <li>
                          <div className="flex items-center justify-between gap-2 text-sm cursor-pointer hover:bg-gray-50 border-b-2">
                            <div
                              className="flex items-center justify-between w-full py-4 "
                              onClick={handlerShowBilling}
                            >
                              <h4 className="mb-0">Billing Contact</h4>
                              <button
                                className={`tooltip`}
                                data-tooltip={billingShow ? "Close" : "Open"}
                                onClick={handlerShowBilling}
                              >
                                {preferredShow ? (
                                  <BiChevronDown />
                                ) : (
                                  <BiChevronRight />
                                )}
                              </button>
                            </div>
                            <button className="tooltip" data-tooltip={`Edit`}>
                              <FiEdit3 />
                            </button>
                          </div>
                          {billingShow && <>show</>}
                        </li>
                      </ul>
                    </div>
                  </React.Fragment>
                );
              })}
          </div>
          <MainFooter />
        </main>
      </section>
      {store.isAdd && <ModalEditPrimary itemEdit={itemEdit} />}
      {store.validate && <ModalValidate />}
      {store.success && <Toast />}
    </>
  );
};

export default ClientContactInformation;
