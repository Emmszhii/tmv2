import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import { StoreContext } from "../../../../../store/StoreContext";
import { getUrlParam } from "../../../../helpers/functions-general";
import BreadCrumbs from "../../../../partials/Breadcrumbs";
import Header from "../../../../partials/Header";
import MainFooter from "../../../../partials/MainFooter";
import Navigation from "../../../../partials/Navigation";
import useQueryData from "../../../../custom-hooks/useQueryData";
import TableSpinner from "../../../../partials/spinners/TableSpinner";
import ServerError from "../../../../partials/ServerError";
import TableLoading from "../../../../partials/TableLoading";
import Nodata from "../../../../partials/Nodata";

const ClientInformation = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const clientId = getUrlParam().get("clientId");

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
            <BreadCrumbs />
            {isFetching && !isLoading && <TableSpinner />}
            {client?.error ? (
              <h1 className="text-center text-gray-400 text-base">
                Page not found.
              </h1>
            ) : (
              <>
                {error && <ServerError />}
                {(isLoading || client?.data.length === 0) && (
                  <div className="py-10">
                    {isLoading ? (
                      <TableLoading cols={1} count={20} />
                    ) : (
                      <div>
                        <Nodata />
                        {/* <h1 className="text-center text-gray-400 text-base">
                         Page not found.
                       </h1> */}
                      </div>
                    )}
                  </div>
                )}
                {client?.data.length > 0 &&
                  client?.data.map((item, key) => {
                    return (
                      <React.Fragment key={key}>
                        <div className="flex justify-between items-center my-5">
                          <h1 className="mb-0">{item.client_client_id}</h1>
                        </div>
                        <div>
                          <ul>
                            <li className="max-w-xl">
                              <Link
                                to={`/client/information/main?clientId=${clientId}`}
                              >
                                <div className="flex justify-between items-center border-b-2 py-2  hover:bg-gray-50">
                                  <div className="flex flex-col gap-1">
                                    <h4 className="m-0">Main</h4>
                                    <p className="m-0">View list of main</p>
                                  </div>
                                  <div className="text-lg pr-2">
                                    <IoMdArrowDropright />
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li className="max-w-xl">
                              <Link
                                to={`/client/information/contact-information?clientId=${clientId}`}
                              >
                                <div className="flex justify-between items-center border-b-2 py-2 hover:bg-gray-50">
                                  <div className="flex flex-col gap-1">
                                    <h4 className="m-0">Contact Information</h4>
                                    <p className="m-0">View list of main</p>
                                  </div>
                                  <div className="text-lg pr-2">
                                    <IoMdArrowDropright />
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li className="max-w-xl">
                              <Link
                                to={`/client/information/engagement?clientId=${clientId}`}
                              >
                                <div className="flex justify-between items-center border-b-2 py-2 hover:bg-gray-50">
                                  <div className="flex flex-col gap-1">
                                    <h4 className="m-0">Engagement</h4>
                                    <p className="m-0">
                                      View list of roles used on the system
                                    </p>
                                  </div>
                                  <div className="text-lg pr-2">
                                    <IoMdArrowDropright />
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li className="max-w-xl">
                              <Link
                                to={`/client/information/billing-ar?clientId=${clientId}`}
                              >
                                <div className="flex justify-between items-center border-b-2 py-2 hover:bg-gray-50">
                                  <div className="flex flex-col gap-1">
                                    <h4 className="m-0">Billing and A/R</h4>
                                    <p className="m-0">
                                      View list of roles used on the system
                                    </p>
                                  </div>
                                  <div className="text-lg pr-2">
                                    <IoMdArrowDropright />
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li className="max-w-xl">
                              <Link
                                to={`/client/information/custom-fields?clientId=${clientId}`}
                              >
                                <div className="flex justify-between items-center border-b-2 py-2 hover:bg-gray-50">
                                  <div className="flex flex-col gap-1">
                                    <h4 className="m-0">Custom Fields</h4>
                                    <p className="m-0">
                                      View list of roles used on the system
                                    </p>
                                  </div>
                                  <div className="text-lg pr-2">
                                    <IoMdArrowDropright />
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li className="max-w-xl">
                              <Link
                                to={`/client/information/notes?clientId=${clientId}`}
                              >
                                <div className="flex justify-between items-center border-b-2 py-2 hover:bg-gray-50">
                                  <div className="flex flex-col gap-1">
                                    <h4 className="m-0">Notes</h4>
                                    <p className="m-0">
                                      View list of roles used on the system
                                    </p>
                                  </div>
                                  <div className="text-lg pr-2">
                                    <IoMdArrowDropright />
                                  </div>
                                </div>
                              </Link>
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
    </>
  );
};

export default ClientInformation;
