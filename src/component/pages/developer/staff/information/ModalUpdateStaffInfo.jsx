import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaTimes } from "react-icons/fa";
import * as Yup from "yup";
import { StoreContext } from "../../../../../store/StoreContext";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "../../../../../store/StoreAction";
import { queryData } from "../../../../helpers/queryData";
import { handleEscape } from "../../../../helpers/functions-general";
import { InputText, InputTextArea } from "../../../../helpers/FormInputs";
import SearchDepartment from "../search/SearchDepartment";
import SearchOffice from "../search/SearchOffice";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";

const ModalUpdateStaffInfo = ({ itemEdit, setUpdateStaffInfo }) => {
  const { dispatch } = React.useContext(StoreContext);
  // search Office
  const [loadingOffice, setLoadingOffice] = React.useState(false);
  const [isSearchOffice, setIsSearchOffice] = React.useState(false);
  const [searchOffice, setSearchOffice] = React.useState("");
  const [dataOffice, setDataOffice] = React.useState([]);
  const [OfficeId, setOfficeId] = React.useState("");
  // search department
  const [loadingDepartment, setLoadingDepartment] = React.useState(false);
  const [isSearchDepartment, setIsSearchDepartment] = React.useState(false);
  const [searchDepartment, setSearchDepartment] = React.useState("");
  const [dataDepartment, setDataDepartment] = React.useState([]);
  const [DepartmentId, setDepartmentId] = React.useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `/v2/controllers/developer/staff/staff.php?staffId=${itemEdit.staff_aid}`, //update
        "put",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["staff"] });
      if (data.success) {
        setUpdateStaffInfo(false);
        dispatch(setSuccess(true));
        dispatch(setMessage("Successfully updated"));
      }
      // show error box
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  // const {
  //   loadingDepartment,
  //   isFetchingDepartment,
  //   errorDepartment,
  //   data: department,
  // } = useQueryData(
  //   `/v2/controllers/developer/settings/department/department.php`,
  //   "get",
  //   "settings-department"
  // );

  // const {
  //   loadingOffice,
  //   isFetchingOffice,
  //   errorOffice,
  //   data: office,
  // } = useQueryData(
  //   `/v2/controllers/developer/settings/office/office.php`,
  //   "get",
  //   "settings-office"
  // );

  const initVal = {
    staff_id_old: itemEdit ? itemEdit.staff_id : "",
    staff_id: itemEdit ? itemEdit.staff_id : "",
    staff_description: itemEdit ? itemEdit.staff_description : "",
    staff_first_name: itemEdit ? itemEdit.staff_first_name : "",
    staff_middle_name: itemEdit ? itemEdit.staff_middle_name : "",
    staff_last_name: itemEdit ? itemEdit.staff_last_name : "",
    staff_date_hired: itemEdit ? itemEdit.staff_date_hired : "",
    staff_level: itemEdit ? itemEdit.staff_level : "",
    staff_supervisor: itemEdit ? itemEdit.staff_supervisor : "",
    searchDepartment: "",
    searchOffice: "",
    isUpdate: "staffInfo",
  };

  const yupSchema = Yup.object({
    staff_id: Yup.string().required("Required"),
    staff_first_name: Yup.string().required("Required"),
    staff_last_name: Yup.string().required("Required"),
    staff_date_hired: Yup.string().required("Required"),
  });

  const handleClose = () => {
    setUpdateStaffInfo(false);
  };

  const handleSearchModal = () => {
    setIsSearchOffice(false);
    setIsSearchDepartment(false);
  };

  handleEscape(() => handleClose());

  return (
    <>
      <div className="bg-dark/50 fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50">
        <div
          className={`modal__main absolute mx-1 bg-white border border-gray-200 rounded-md py-8 px-5 max-w-[420px] w-full shadow-xl`}
        >
          <div className="modal__header relative">
            <h3>Update Staff Information </h3>
            <button className="absolute -top-4 right-0 " onClick={handleClose}>
              <FaTimes className="text-gray-700 text-base" />
            </button>
          </div>
          <div className="modal__body overflow-auto max-h-[50vh]">
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                // mutate data
                mutation.mutate({
                  ...values,
                  staff_office: OfficeId,
                  staff_department: DepartmentId,
                });
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="modal__body ">
                      <div className="form__wrap">
                        <InputText
                          label="Staff ID"
                          type="text"
                          name="staff_id"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputTextArea
                          label="Description"
                          type="text"
                          name="staff_description"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Last Name"
                          type="text"
                          name="staff_last_name"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="First Name"
                          type="text"
                          name="staff_first_name"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Middle Name"
                          type="text"
                          name="staff_middle_name"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Date Hired"
                          type="date"
                          name="staff_date_hired"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <SearchDepartment
                          label="Department"
                          name="searchDepartment"
                          disabled={mutation.isLoading}
                          endpoint={`/v2/controllers/developer/staff/department-search.php`}
                          setSearch={setSearchDepartment}
                          setIsSearch={setIsSearchDepartment}
                          handleSearchModal={handleSearchModal}
                          setLoading={setLoadingDepartment}
                          setData={setDataDepartment}
                          search={searchDepartment}
                          isSearch={isSearchDepartment}
                          loading={loadingDepartment}
                          data={dataDepartment}
                          setId={setDepartmentId}
                        />
                        {/* <InputSelect
                          label="Department"
                          type="text"
                          name="staff_department"
                          disabled={mutation.isLoading}
                          onChange={(e) => e}
                        >
                          {loadingDepartment ? (
                            <option value="" hidden>
                              Loading...
                            </option>
                          ) : errorDepartment ? (
                            <option value="" disabled>
                              Error
                            </option>
                          ) : (
                            <optgroup label="Select Department">
                              <option value="" hidden></option>
                              {department?.data.length > 0 ? (
                                department?.data.map((oItem, key) => {
                                  return (
                                    <option
                                      value={oItem.settings_department_name}
                                      key={key}
                                    >
                                      {oItem.settings_department_name}
                                    </option>
                                  );
                                })
                              ) : (
                                <option value="" disabled>
                                  No data
                                </option>
                              )}
                            </optgroup>
                          )}
                        </InputSelect> */}
                      </div>
                      <div className="form__wrap">
                        <SearchOffice
                          label="Office"
                          name="searchOffice"
                          disabled={mutation.isLoading}
                          endpoint={`/v2/controllers/developer/staff/office-search.php`}
                          setSearch={setSearchOffice}
                          setIsSearch={setIsSearchOffice}
                          handleSearchModal={handleSearchModal}
                          setLoading={setLoadingOffice}
                          setData={setDataOffice}
                          search={searchOffice}
                          isSearch={isSearchOffice}
                          loading={loadingOffice}
                          data={dataOffice}
                          setId={setOfficeId}
                        />
                        {/* <InputSelect
                          label="Office"
                          type="text"
                          name="staff_office"
                          disabled={mutation.isLoading}
                          onChange={(e) => e}
                        >
                          {loadingOffice ? (
                            <option value="" hidden>
                              Loading...
                            </option>
                          ) : errorOffice ? (
                            <option value="" disabled>
                              Error
                            </option>
                          ) : (
                            <optgroup label="Select Office">
                              <option value="" hidden></option>
                              {office?.data.length > 0 ? (
                                office?.data.map((oItem, key) => {
                                  return (
                                    <option
                                      value={oItem.settings_office_name}
                                      key={key}
                                    >
                                      {oItem.settings_office_name}
                                    </option>
                                  );
                                })
                              ) : (
                                <option value="" disabled>
                                  No data
                                </option>
                              )}
                            </optgroup>
                          )}
                        </InputSelect> */}
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Level"
                          type="text"
                          name="staff_level"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Supervisor"
                          type="text"
                          name="staff_supervisor"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="modal__action flex justify-end mt-6 gap-2">
                        <button
                          className="btn btn--primary"
                          type="submit"
                          disabled={mutation.isLoading || !props.dirty}
                        >
                          {mutation.isLoading ? <ButtonSpinner /> : "Save"}
                        </button>
                        <button
                          type="button"
                          className="btn btn--cancel"
                          disabled={mutation.isLoading}
                          onClick={handleClose}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalUpdateStaffInfo;
