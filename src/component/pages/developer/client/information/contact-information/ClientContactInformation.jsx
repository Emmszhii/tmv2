import React from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { FiEdit3 } from "react-icons/fi";
import { setIsAdd } from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import useQueryData from "../../../../../custom-hooks/useQueryData";
import { getUrlParam } from "../../../../../helpers/functions-general";
import BreadCrumbs from "../../../../../partials/Breadcrumbs";
import Header from "../../../../../partials/Header";
import MainFooter from "../../../../../partials/MainFooter";
import Navigation from "../../../../../partials/Navigation";
import TableLoading from "../../../../../partials/TableLoading";
import Toast from "../../../../../partials/Toast";
import ModalValidate from "../../../../../partials/modals/ModalValidate";
import FetchingSpinner from "../../../../../partials/spinners/FetchingSpinner";
import {
  getBillingContactItem,
  getPreferredContactItem,
  getPrimaryContactItem,
} from "./functions-contact-information";
import ClientPreferredContact from "./preferred-contact/ClientPreferredContact";
import ClientPrimaryContact from "./primary-contact/ClientPrimaryContact";
import ModalEditPrimary from "./primary-contact/ModalEditPrimary";
import ClientBillingContact from "./billing-contact/ClientBillingContact";
import ModalEditPreferred from "./preferred-contact/ModalEditPreferred";
import ModalEditBilling from "./billing-contact/ModalEditBilling";

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
  // modal state
  const [primaryModalShow, setPrimaryModalShow] = React.useState(false);
  const [preferredModalShow, setPreferredModalShow] = React.useState(false);
  const [billingModalShow, setBillingModalShow] = React.useState(false);

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
  const { isLoading: isLoadingPrimary, data: primaryContact } = useQueryData(
    `/v2/controllers/developer/client/information/contact-information/primary-contact/primary-contact.php?primaryContactId=${clientId}`,
    "get",
    "primary-contact"
  );
  const { isLoading: isLoadingPreferred, data: preferredContact } =
    useQueryData(
      `/v2/controllers/developer/client/information/contact-information/preferred-contact/preferred-contact.php?preferredContactId=${clientId}`,
      "get",
      "preferred-contact"
    );
  const { isLoading: isLoadingBilling, data: billingContact } = useQueryData(
    `/v2/controllers/developer/client/information/contact-information/billing-contact/billing-contact.php?billingContactId=${clientId}`,
    "get",
    "billing-contact"
  );
  const handleEditPrimary = (item) => {
    setItemEdit(getPrimaryContactItem(primaryContact, item.client_aid));
    setPrimaryModalShow(true);
  };
  const handleEditPreferred = (item) => {
    setItemEdit(getPreferredContactItem(preferredContact, item.client_aid));
    setPreferredModalShow(true);
  };
  const handleEditBilling = (item) => {
    setItemEdit(getBillingContactItem(billingContact, item.client_aid));
    setBillingModalShow(true);
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
          <div className="max-w-lg">
            <BreadCrumbs param={location.search} />
            {isFetching &&
              !isLoading &&
              !isLoadingPreferred &&
              !isLoadingBilling &&
              !isLoadingPrimary && <FetchingSpinner />}
            {isLoading &&
              isLoadingPreferred &&
              isLoadingBilling &&
              isLoadingPrimary && <TableLoading cols={1} count={20} />}
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
                              onClick={() => handleEditPrimary(item)}
                            >
                              <FiEdit3 />
                            </button>
                          </div>
                          {primaryShow && !isLoadingPrimary && (
                            <ClientPrimaryContact
                              item={primaryContact?.data[0]}
                            />
                          )}
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
                            <button
                              className="tooltip"
                              data-tooltip={`Edit`}
                              onClick={() => handleEditPreferred(item)}
                            >
                              <FiEdit3 />
                            </button>
                          </div>
                          {preferredShow && !isLoadingPreferred && (
                            <ClientPreferredContact
                              item={preferredContact?.data[0]}
                            />
                          )}
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
                            <button
                              className="tooltip"
                              data-tooltip={`Edit`}
                              onClick={() => handleEditBilling(item)}
                            >
                              <FiEdit3 />
                            </button>
                          </div>
                          {billingShow && !isLoadingBilling && (
                            <ClientBillingContact
                              item={billingContact?.data[0]}
                            />
                          )}
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
      {primaryModalShow && (
        <ModalEditPrimary
          itemEdit={itemEdit}
          setPrimaryModalShow={setPrimaryModalShow}
        />
      )}
      {preferredModalShow && (
        <ModalEditPreferred
          itemEdit={itemEdit}
          setPreferredModalShow={setPreferredModalShow}
        />
      )}
      {billingModalShow && (
        <ModalEditBilling
          itemEdit={itemEdit}
          setBillingModalShow={setBillingModalShow}
        />
      )}
      {store.validate && <ModalValidate />}
      {store.success && <Toast />}
    </>
  );
};

export default ClientContactInformation;
