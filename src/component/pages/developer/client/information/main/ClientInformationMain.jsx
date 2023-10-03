import React from "react";
import { StoreContext } from "../../../../../../store/StoreContext";
import Header from "../../../../../partials/Header";
import Navigation from "../../../../../partials/Navigation";
import BreadCrumbs from "../../../../../partials/Breadcrumbs";
import MainFooter from "../../../../../partials/MainFooter";
import { getUrlParam } from "../../../../../helpers/functions-general";
import useQueryData from "../../../../../custom-hooks/useQueryData";
import FetchingSpinner from "../../../../../partials/spinners/FetchingSpinner";
import ServerError from "../../../../../partials/ServerError";
import TableLoading from "../../../../../partials/TableLoading";
import Nodata from "../../../../../partials/Nodata";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { FiEdit3 } from "react-icons/fi";
import { setIsAdd } from "../../../../../../store/StoreAction";
import ModalAddClient from "../../ModalAddClient";
import ModalValidate from "../../../../../partials/modals/ModalValidate";
import Toast from "../../../../../partials/Toast";
import ClientIndividual from "./individual/ClientIndividual";
import ClientSpouse from "./spouse/ClientSpouse";
import ClientInformation from "./client-information/ClientInformation";
import ClientRetentionInformation from "./client-retention-information/ClientRetentionInformation";
import ClientIdentification from "./identification/ClientIdentification";
import ModalEditClientRetention from "./client-retention-information/ModalEditClientRetention";

const ClientInformationMain = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const clientId = getUrlParam().get("clientId");
  const [itemEdit, setItemEdit] = React.useState(null);
  // tab state
  const [identityShow, setIdentityShow] = React.useState(true);
  const [individualShow, setIndividualShow] = React.useState(false);
  const [spouseShow, setSpouseShow] = React.useState(false);
  const [clientInfoShow, setclientInfoShow] = React.useState(false);
  const [clientRetenShow, setclientRetenShow] = React.useState(false);
  const handlerShowIdentity = () => setIdentityShow(!identityShow);
  const handlerIndividual = () => setIndividualShow(!individualShow);
  const handlerSpouse = () => setSpouseShow(!spouseShow);
  const handlerInfo = () => setclientInfoShow(!clientInfoShow);
  const handlerReten = () => setclientRetenShow(!clientRetenShow);
  // modal state
  const [isRetentionShow, setIsRetentionShow] = React.useState(false);

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

  const { data: entity } = useQueryData(
    `/v2/controllers/developer/settings/entities/entities.php`,
    "get",
    "entity"
  );

  const { data: referredType } = useQueryData(
    `/v2/controllers/developer/settings/referral-type/referral-type.php`,
    "get",
    "referral-type"
  );
  const { data: wonReason } = useQueryData(
    `/v2/controllers/developer/settings/won-reason/won-reason.php`,
    "get",
    "won-reason"
  );
  const { data: lostReason } = useQueryData(
    `/v2/controllers/developer/settings/lost-reason/lost-reason.php`,
    "get",
    "lost-reason"
  );
  const { data: lostTo } = useQueryData(
    `/v2/controllers/developer/settings/lost-to/lost-to.php`,
    "get",
    "lost-to"
  );
  console.log(referredType);
  const handlerEdit = (item) => {
    setItemEdit(item);
    dispatch(setIsAdd(true));
  };

  const handleRetentionShow = (item) => {
    setItemEdit(item);
    setIsRetentionShow(true);
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
            {isFetching && !isLoading && <FetchingSpinner />}
            {isLoading && <TableLoading cols={1} count={20} />}
            {(error || !client?.success || client?.data.length === 0) && (
              <div className="py-10">
                {/* <Nodata /> */}
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
                              onClick={handlerShowIdentity}
                            >
                              <h4 className="mb-0">Identification</h4>

                              <button
                                className={`tooltip`}
                                data-tooltip={`${
                                  identityShow ? "Close" : "Open"
                                }`}
                                onClick={handlerShowIdentity}
                              >
                                {identityShow ? (
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
                          {identityShow && <ClientIdentification item={item} />}
                        </li>
                        <li>
                          <div className="flex items-center justify-between gap-2 text-sm cursor-pointer hover:bg-gray-50 border-b-2">
                            <div
                              className="flex items-center justify-between w-full py-4 "
                              onClick={handlerIndividual}
                            >
                              <h4 className="mb-0">Individual</h4>
                              <button
                                className={`tooltip`}
                                data-tooltip={individualShow ? "Close" : "Open"}
                                onClick={handlerIndividual}
                              >
                                {individualShow ? (
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
                          {individualShow && <ClientIndividual item={item} />}
                        </li>
                        <li>
                          <div className="flex items-center justify-between gap-2 text-sm cursor-pointer hover:bg-gray-50 border-b-2">
                            <div
                              className="flex items-center justify-between w-full py-4 "
                              onClick={handlerSpouse}
                            >
                              <h4 className="mb-0">Spouse</h4>
                              <button
                                className={`tooltip`}
                                data-tooltip={spouseShow ? "Close" : "Open"}
                                onClick={handlerSpouse}
                              >
                                {individualShow ? (
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
                          {spouseShow && <ClientSpouse item={item} />}
                        </li>
                        <li>
                          <div className="flex items-center justify-between gap-2 text-sm cursor-pointer hover:bg-gray-50 border-b-2">
                            <div
                              className="flex items-center justify-between w-full py-4 "
                              onClick={handlerInfo}
                            >
                              <h4 className="mb-0">Client Information</h4>
                              <button
                                className={`tooltip`}
                                data-tooltip={clientInfoShow ? "Close" : "Open"}
                                onClick={handlerInfo}
                              >
                                {clientInfoShow ? (
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
                          {clientInfoShow && <ClientInformation item={item} />}
                        </li>
                        <li>
                          <div className="flex items-center justify-between gap-2 text-sm cursor-pointer hover:bg-gray-50 border-b-2">
                            <div
                              className="flex items-center justify-between w-full py-4 "
                              onClick={handlerReten}
                            >
                              <h4 className="mb-0">
                                Client Retention Information
                              </h4>
                              <button
                                className={`tooltip`}
                                data-tooltip={
                                  clientRetenShow ? "Close" : "Open"
                                }
                                onClick={handlerReten}
                              >
                                {clientRetenShow ? (
                                  <BiChevronDown />
                                ) : (
                                  <BiChevronRight />
                                )}
                              </button>
                            </div>
                            <button
                              className="tooltip"
                              data-tooltip={`Edit`}
                              onClick={() => handleRetentionShow(item)}
                            >
                              <FiEdit3 />
                            </button>
                          </div>
                          {clientRetenShow && (
                            <ClientRetentionInformation item={item} />
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
      {store.isAdd && <ModalAddClient itemEdit={itemEdit} entity={entity} />}
      {isRetentionShow && (
        <ModalEditClientRetention
          itemEdit={itemEdit}
          referredType={referredType}
          setIsRetentionShow={setIsRetentionShow}
        />
      )}
      {store.validate && <ModalValidate />}
      {store.success && <Toast />}
    </>
  );
};

export default ClientInformationMain;
