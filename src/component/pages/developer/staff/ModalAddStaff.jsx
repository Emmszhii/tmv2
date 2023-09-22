import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaTimes } from "react-icons/fa";
import * as Yup from "yup";
import { StoreContext } from "../../../../store/StoreContext";
import { queryData } from "../../../helpers/queryData";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "../../../../store/StoreAction";
import { handleEscape } from "../../../helpers/functions-general";
import {
  InputSelect,
  InputText,
  InputTextArea,
} from "../../../helpers/FormInputs";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";

const ModalAddStaff = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/controllers/developer/staff/staff.php?staffId=${itemEdit.staff_aid}` //update
          : "/v2/controllers/developer/staff/staff.php", //add
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["staff"] });
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? `updated` : `added`}.`));
      }
      // show error box
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const initVal = {
    staff_aid: itemEdit ? itemEdit.staff_aid : "",
    staff_id: itemEdit ? itemEdit.staff_id : "",
    staff_description: itemEdit ? itemEdit.staff_description : "",
    staff_first_name: itemEdit ? itemEdit.staff_first_name : "",
    staff_middle_name: itemEdit ? itemEdit.staff_middle_name : "",
    staff_last_name: itemEdit ? itemEdit.staff_last_name : "",
    // staff_department: itemEdit ? itemEdit.staff_department : "",
    // staff_date_hired: itemEdit ? itemEdit.staff_date_hired : "",
    staff_office: itemEdit ? itemEdit.staff_office : "",
  };

  const yupSchema = Yup.object({
    staff_id: Yup.string().required("Required"),
    staff_description: Yup.string().required("Required"),
    staff_first_name: Yup.string().required("Required"),
    staff_middle_name: Yup.string().required("Required"),
    staff_last_name: Yup.string().required("Required"),
    // staff_department: Yup.string().required("Required"),
    staff_date_hired: Yup.string().required("Required"),
    // staff_office: Yup.string().required("Required"),
  });

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
            <h3> {itemEdit ? "Update" : "Add"} Staff </h3>
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
                mutation.mutate(values);
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
                          label="Department"
                          type="text"
                          name="staff_department"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Date Hired"
                          type="text"
                          name="staff_date_hired"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Office"
                          type="text"
                          name="staff_office"
                          disabled={mutation.isLoading}
                        />
                      </div>

                      <div className="modal__action flex justify-end mt-6 gap-2">
                        <button
                          className="btn btn--primary"
                          type="submit"
                          disabled={mutation.isLoading || !props.dirty}
                        >
                          {mutation.isLoading ? (
                            <ButtonSpinner />
                          ) : itemEdit ? (
                            "Save"
                          ) : (
                            "Add"
                          )}
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

export default ModalAddStaff;
