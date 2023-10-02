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

const ModalUpdateStaffContactInfo = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `/v2/controllers/developer/staff/staff.php?staffId=${itemEdit.staff_aid}`, //update
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["staff"] });
      if (data.success) {
        dispatch(setIsAdd(false));
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
    staff_contact_name: itemEdit ? itemEdit.staff_contact_name : "",
    staff_contact_email: itemEdit ? itemEdit.staff_contact_email : "",
    staff_contact_mobile_no: itemEdit ? itemEdit.staff_contact_mobile_no : "",
    staff_contact_home_no: itemEdit ? itemEdit.staff_contact_home_no : "",
    staff_contact_file_as: itemEdit ? itemEdit.staff_contact_file_as : "",
    staff_contact_company: itemEdit ? itemEdit.staff_contact_company : "",
    staff_contact_business_no: itemEdit
      ? itemEdit.staff_contact_business_no
      : "",
    isUpdate: "contactInfo",
  };

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  handleEscape(() => handleClose());

  return (
    <>
      <div className="bg-dark/50 fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50">
        <div
          className={`modal__main absolute mx-1 bg-white border border-gray-200 rounded-md py-8 px-5 max-w-[420px] w-full shadow-xl`}
        >
          <div className="modal__header relative">
            <h3>Update Contact Information</h3>
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
                });
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="modal__body ">
                      <div className="form__wrap">
                        <InputText
                          label="Name"
                          type="text"
                          name="staff_contact_name"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Email"
                          type="text"
                          name="staff_contact_email"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Mobile No."
                          number="number"
                          name="staff_last_name"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Home No."
                          number="number"
                          name="staff_contact_home_no"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="File As"
                          type="text"
                          name="staff_contact_file_as"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Company"
                          type="text"
                          name="staff_contact_company"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Business No."
                          number="number"
                          name="staff_contact_business_no"
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

export default ModalUpdateStaffContactInfo;
