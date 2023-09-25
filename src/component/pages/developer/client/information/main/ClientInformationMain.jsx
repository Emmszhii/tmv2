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

const ClientInformationMain = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const clientId = getUrlParam().get("clientId");
  const [itemEdit, setItemEdit] = React.useState(null);
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
            {client?.error ? (
              <h1 className="text-center text-gray-400 text-base">
                Page not found.
              </h1>
            ) : (
              <>
                {(isLoading || client?.data.length === 0) && (
                  <>
                    {isLoading ? (
                      <TableLoading cols={1} count={20} />
                    ) : (
                      <div className="py-10">
                        <Nodata />
                        {/* <h1 className="text-center text-gray-200">
                          Page not found.
                        </h1> */}
                      </div>
                    )}
                  </>
                )}
                {client?.data.length > 0 &&
                  client?.data.map((item, key) => {
                    return (
                      <React.Fragment key={key}>
                        <div className="py-5">
                          <h1>{item.client_client_id}</h1>
                          <ul>
                            <li>
                              <div>
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
                                {identityShow && (
                                  <div className="p-4">
                                    <ul className="flex flex-col gap-2">
                                      <li className="grid grid-cols-[200px_1fr] items-center">
                                        <h4 className="mb-0 ">Logo</h4>
                                        <img
                                          src="https://placehold.jp/80x80.png"
                                          alt=""
                                          className="rounded-md"
                                        />
                                      </li>
                                      <li className="grid grid-cols-[200px_1fr] items-center">
                                        <h4 className="mb-0">ID:</h4>
                                        <p className="mb-0">
                                          {item.client_client_id}
                                        </p>
                                      </li>
                                      <li className="grid grid-cols-[200px_1fr] items-center">
                                        <h4 className="mb-0">Description:</h4>
                                        <p className="mb-0">
                                          {item.client_description || "No data"}
                                        </p>
                                      </li>
                                      <li className="grid grid-cols-[200px_1fr] items-center">
                                        <h4 className="mb-0">EIN/SSN:</h4>
                                        <p className="mb-0">
                                          {item.client_ein_ssn || "No data"}
                                        </p>
                                      </li>
                                      <li className="grid grid-cols-[200px_1fr] items-center">
                                        <h4 className="mb-0">Name 1:</h4>
                                        <p className="mb-0">
                                          {item.client_name || "No data"}
                                        </p>
                                      </li>
                                      <li className="grid grid-cols-[200px_1fr] items-center">
                                        <h4 className="mb-0">Name 2:</h4>
                                        <p className="mb-0">
                                          {item.client_name_2 || "No data"}
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </li>
                            <li className="cursor-pointer hover:bg-gray-50 border-b-2">
                              <div className="flex items-center justify-between gap-2 text-sm">
                                <div
                                  className="flex items-center justify-between w-full py-4 "
                                  onClick={handlerIndividual}
                                >
                                  <h4 className="mb-0">Individual</h4>
                                  <button
                                    className={`tooltip`}
                                    data-tooltip={`${
                                      individualShow ? "Close" : "Open"
                                    }`}
                                    onClick={handlerIndividual}
                                  >
                                    {individualShow ? (
                                      <BiChevronDown />
                                    ) : (
                                      <BiChevronRight />
                                    )}
                                  </button>
                                </div>

                                <button
                                  className="tooltip"
                                  data-tooltip={`Edit`}
                                >
                                  <FiEdit3 />
                                </button>
                              </div>
                            </li>
                            <li
                              onClick={handlerSpouse}
                              className="cursor-pointer hover:bg-gray-50  border-b-2"
                            >
                              <div className="flex items-center justify-between text-sm py-4 ">
                                <h4 className="mb-0">Spouse</h4>
                                <div className={`flex items-center gap-2`}>
                                  <button
                                    className={`tooltip   ${
                                      spouseShow ? "rotate-90" : ""
                                    }`}
                                    data-tooltip={`${
                                      spouseShow ? "Close" : "Open"
                                    }`}
                                    onClick={handlerSpouse}
                                  >
                                    <BiChevronRight />
                                  </button>
                                  <button
                                    className="tooltip"
                                    data-tooltip={`Edit`}
                                  >
                                    <FiEdit3 />
                                  </button>
                                </div>
                              </div>
                            </li>
                            <li
                              onClick={handlerInfo}
                              className="cursor-pointer hover:bg-gray-50  border-b-2"
                            >
                              <div className="flex items-center justify-between text-sm py-4 ">
                                <h4 className="mb-0">Client Information</h4>
                                <div className={`flex items-center gap-2`}>
                                  <button
                                    className={`tooltip   ${
                                      clientInfoShow ? "rotate-90" : ""
                                    }`}
                                    data-tooltip={`${
                                      clientInfoShow ? "Close" : "Open"
                                    }`}
                                    onClick={handlerInfo}
                                  >
                                    <BiChevronRight />
                                  </button>
                                  <button
                                    className="tooltip"
                                    data-tooltip={`Edit`}
                                  >
                                    <FiEdit3 />
                                  </button>
                                </div>
                              </div>
                            </li>
                            <li
                              onClick={handlerReten}
                              className="cursor-pointer hover:bg-gray-50  border-b-2"
                            >
                              <div className="flex items-center justify-between text-sm py-4 ">
                                <h4 className="mb-0">
                                  Client Retention Information
                                </h4>
                                <div className={`flex items-center gap-2`}>
                                  <button
                                    className={`tooltip   ${
                                      clientRetenShow ? "rotate-90" : ""
                                    }`}
                                    data-tooltip={`${
                                      clientRetenShow ? "Close" : "Open"
                                    }`}
                                    onClick={handlerReten}
                                  >
                                    <BiChevronRight />
                                  </button>
                                  <button
                                    className="tooltip"
                                    data-tooltip={`Edit`}
                                  >
                                    <FiEdit3 />
                                  </button>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </React.Fragment>
                    );
                  })}
              </>
            )}
          </div>
          <MainFooter />
        </main>
      </section>
      {store.isAdd && <ModalAddClient itemEdit={itemEdit} />}
      {store.validate && <ModalValidate />}
      {store.success && <Toast />}
    </>
  );
};

export default ClientInformationMain;
