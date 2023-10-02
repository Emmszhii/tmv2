import React from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { FiEdit3 } from "react-icons/fi";
import { StoreContext } from "../../../../../store/StoreContext";
import MainFooter from "../../../../partials/MainFooter";
import ModalAddStaff from "../ModalAddStaff";
import ModalValidate from "../../../../partials/modals/ModalValidate";
import Toast from "../../../../partials/Toast";
import TableLoading from "../../../../partials/TableLoading";
import Navigation from "../../../../partials/Navigation";
import Header from "../../../../partials/Header";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { setIsAdd } from "../../../../../store/StoreAction";
import { getUrlParam } from "../../../../helpers/functions-general";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import BreadCrumbs from "../../../../partials/Breadcrumbs";
import ModalUpdateStaffInfo from "./ModalUpdateStaffInfo";

const StaffInformation = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const staffId = getUrlParam().get("staffId");
  const [itemEdit, setItemEdit] = React.useState(null);
  const [isUpdateStaffInfo, setUpdateStaffInfo] = React.useState(false);
  const [staffInformationShow, setStaffInformation] = React.useState(true);
  const [cpaInformationShow, setCpaInformation] = React.useState(false);
  const [contactInformationShow, setContactInformation] = React.useState(false);

  const handlerShowStaffInformation = () =>
    setStaffInformation(!staffInformationShow);
  const handlerCpaInformation = () => setCpaInformation(!cpaInformationShow);
  const handlerContactInformation = () =>
    setContactInformation(!contactInformationShow);

  const handlerEditStaffInfo = (item) => {
    setItemEdit(item);
    setUpdateStaffInfo(true);
  };

  const handlerEditStaffCpaInfo = (item) => {
    setItemEdit(item);
    dispatch(setIsAdd(true));
  };

  const handlerEditStaffContactInfo = (item) => {
    setItemEdit(item);
    dispatch(setIsAdd(true));
  };
  const {
    isLoading,
    isFetching,
    error,
    data: staff,
  } = useQueryData(
    `/v2/controllers/developer/staff/staff.php?staffId=${staffId}`,
    "get",
    "staff"
  );

  return (
    <>
      <Header />
      <section className={`main__grid ${store.isMenuOpen ? "open" : ""}`}>
        <aside
          className={`${store.isMenuOpen ? "open " : ""} overflow-y-auto `}
        >
          <Navigation menu="staff" />
        </aside>
        <main className="p-3 !pb-6 lg:p-0 lg:pr-10 custom__scroll">
          <div className="max-w-lg">
            <BreadCrumbs param={location.search} />
            {isFetching && !isLoading && <FetchingSpinner />}
            {isLoading && <TableLoading cols={1} count={20} />}
            {(error || !staff?.success || staff?.data.length === 0) && (
              <div className="py-10">
                {/* <Nodata /> */}
                <h1 className="text-center text-gray-400 text-base">
                  Page not found.
                </h1>
              </div>
            )}
            {staff?.success &&
              staff?.data.map((item, key) => {
                return (
                  <React.Fragment key={key}>
                    <div className="py-5">
                      <h1>Staff Information</h1>
                      <ul>
                        <li>
                          <div>
                            <div className="flex items-center justify-between gap-2 text-sm cursor-pointer hover:bg-gray-50 border-b-2">
                              <div
                                className="flex items-center justify-between w-full py-4 "
                                onClick={handlerShowStaffInformation}
                              >
                                <h4 className="mb-0">Staff Information</h4>

                                <button
                                  className={`tooltip`}
                                  data-tooltip={`${
                                    staffInformationShow ? "Close" : "Open"
                                  }`}
                                  onClick={handlerShowStaffInformation}
                                >
                                  {staffInformationShow ? (
                                    <BiChevronDown />
                                  ) : (
                                    <BiChevronRight />
                                  )}
                                </button>
                              </div>
                              <button
                                className="tooltip"
                                data-tooltip={`Edit`}
                                onClick={() => handlerEditStaffInfo(item)}
                              >
                                <FiEdit3 />
                              </button>
                            </div>
                            {staffInformationShow && (
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
                                    <h4 className="mb-0">Name:</h4>
                                    <p className="mb-0">
                                      {item.staff_last_name},
                                      {item.staff_first_name}
                                    </p>
                                  </li>
                                  <li className="grid grid-cols-[200px_1fr] items-center">
                                    <h4 className="mb-0">ID:</h4>
                                    <p className="mb-0">
                                      {item.staff_id || "No data"}
                                    </p>
                                  </li>
                                  <li className="grid grid-cols-[200px_1fr] items-center">
                                    <h4 className="mb-0">Description:</h4>
                                    <p className="mb-0">
                                      {item.staff_description || "No data"}
                                    </p>
                                  </li>
                                  <li className="grid grid-cols-[200px_1fr] items-center">
                                    <h4 className="mb-0">SSN:</h4>
                                    <p className="mb-0">TESTING</p>
                                  </li>
                                  <li className="grid grid-cols-[200px_1fr] items-center">
                                    <h4 className="mb-0">Date Hired:</h4>
                                    <p className="mb-0">
                                      {item.staff_date_hired || "No data"}
                                    </p>
                                  </li>
                                  <li className="grid grid-cols-[200px_1fr] items-center">
                                    <h4 className="mb-0">Status:</h4>
                                    <p className="mb-0">
                                      {item.staff_is_active || "No data"}
                                    </p>
                                  </li>
                                  <li className="grid grid-cols-[200px_1fr] items-center">
                                    <h4 className="mb-0">Office:</h4>
                                    <p className="mb-0">
                                      {item.staff_office || "No data"}
                                    </p>
                                  </li>
                                  <li className="grid grid-cols-[200px_1fr] items-center">
                                    <h4 className="mb-0">Department:</h4>
                                    <p className="mb-0">
                                      {item.staff_department || "No data"}
                                    </p>
                                  </li>
                                  <li className="grid grid-cols-[200px_1fr] items-center">
                                    <h4 className="mb-0">Supervisor:</h4>
                                    <p className="mb-0">
                                      {item.staff_department || "No data"}
                                    </p>
                                  </li>
                                  <li className="grid grid-cols-[200px_1fr] items-center">
                                    <h4 className="mb-0">Level:</h4>
                                    <p className="mb-0">
                                      {item.staff_level || "No data"}
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
                              onClick={handlerCpaInformation}
                            >
                              <h4 className="mb-0">CPA Information</h4>
                              <button
                                className={`tooltip`}
                                data-tooltip={`${
                                  cpaInformationShow ? "Close" : "Open"
                                }`}
                                onClick={handlerCpaInformation}
                              >
                                {cpaInformationShow ? (
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
                        </li>
                        {cpaInformationShow && (
                          <div className="p-4">
                            <ul className="flex flex-col gap-2">
                              <li className="grid grid-cols-[200px_1fr] items-center">
                                <h4 className="mb-0">Education Met:</h4>
                                <p className="mb-0">
                                  {item.staff_education_met || "No data"},
                                </p>
                              </li>
                              <li className="grid grid-cols-[200px_1fr] items-center">
                                <h4 className="mb-0">Experience Met:</h4>
                                <p className="mb-0">
                                  {item.staff_experience_met || "No data"}
                                </p>
                              </li>
                              <li className="grid grid-cols-[200px_1fr] items-center">
                                <h4 className="mb-0">Exam Passed:</h4>
                                <p className="mb-0">
                                  {item.staff_exam_passed || "No data"}
                                </p>
                              </li>
                              <li className="grid grid-cols-[200px_1fr] items-center">
                                <h4 className="mb-0">Date Certified:</h4>
                                <p className="mb-0">
                                  {item.staff_date_certified || "No data"}
                                </p>
                              </li>
                              <li className="grid grid-cols-[200px_1fr] items-center">
                                <h4 className="mb-0">Certifiacation Number:</h4>
                                <p className="mb-0">
                                  {item.staff_certification_number || "No data"}
                                </p>
                              </li>
                            </ul>
                          </div>
                        )}
                        <li
                          onClick={handlerContactInformation}
                          className="cursor-pointer hover:bg-gray-50  border-b-2"
                        >
                          <div className="flex items-center justify-between text-sm py-4 ">
                            <h4 className="mb-0">Contact Information</h4>
                            <div className={`flex items-center gap-2`}>
                              <button
                                className={`tooltip   ${
                                  contactInformationShow ? "rotate-90" : ""
                                }`}
                                data-tooltip={`${
                                  contactInformationShow ? "Close" : "Open"
                                }`}
                                onClick={handlerContactInformation}
                              >
                                <BiChevronRight />
                              </button>
                              <button className="tooltip" data-tooltip={`Edit`}>
                                <FiEdit3 />
                              </button>
                            </div>
                          </div>
                        </li>
                        {contactInformationShow && (
                          <div className="p-4">
                            <ul className="flex flex-col gap-2">
                              <li className="grid grid-cols-[200px_1fr] items-center">
                                <h4 className="mb-0">Name:</h4>
                                <p className="mb-0">
                                  {item.staff_contact_name || "No data"}
                                </p>
                              </li>
                              <li className="grid grid-cols-[200px_1fr] items-center">
                                <h4 className="mb-0">Email:</h4>
                                <p className="mb-0">
                                  {item.staff_contact_email || "No data"}
                                </p>
                              </li>
                              <li className="grid grid-cols-[200px_1fr] items-center">
                                <h4 className="mb-0">Mobile No:</h4>
                                <p className="mb-0">
                                  {item.staff_contact_mobile_no || "No data"}
                                </p>
                              </li>
                              <li className="grid grid-cols-[200px_1fr] items-center">
                                <h4 className="mb-0">Home No:</h4>
                                <p className="mb-0">
                                  {item.staff_contact_home_no || "No data"}
                                </p>
                              </li>
                              <li className="grid grid-cols-[200px_1fr] items-center">
                                <h4 className="mb-0">File as:</h4>
                                <p className="mb-0">
                                  {item.staff_contact_file_as || "No data"}
                                </p>
                              </li>
                              <li className="grid grid-cols-[200px_1fr] items-center">
                                <h4 className="mb-0">Company:</h4>
                                <p className="mb-0">
                                  {item.staff_contact_company || "No data"}
                                </p>
                              </li>
                              <li className="grid grid-cols-[200px_1fr] items-center">
                                <h4 className="mb-0">Business no:</h4>
                                <p className="mb-0">
                                  {item.staff_contact_business_no || "No data"}
                                </p>
                              </li>
                            </ul>
                          </div>
                        )}
                      </ul>
                    </div>
                  </React.Fragment>
                );
              })}
          </div>
          <MainFooter />
        </main>
      </section>
      {isUpdateStaffInfo && (
        <ModalUpdateStaffInfo
          itemEdit={itemEdit}
          setUpdateStaffInfo={setUpdateStaffInfo}
        />
      )}
      {store.validate && <ModalValidate />}
      {store.success && <Toast />}
    </>
  );
};

export default StaffInformation;
