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
import { InputText } from "../../../../helpers/FormInputs";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import { queryData } from "../../../../helpers/queryData";
import { handleEscape } from "../../../../helpers/functions-general";

const ModalUpdateStaffCpaInfo = ({ itemEdit, setUpdateStaffCpaInfo}) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

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
        dispatch(setUpdateStaffCpaInfo(false));
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

  const initVal = {
    staff_education_met: itemEdit ? itemEdit.staff_education_met : "",
    staff_experience_met: itemEdit ? itemEdit.staff_experience_met : "",
    staff_exam_passed: itemEdit ? itemEdit.staff_exam_passed : "",
    staff_date_certified: itemEdit ? itemEdit.staff_date_certified : "",
    staff_certification_number: itemEdit
      ? itemEdit.staff_certification_number
      : "",
    isUpdate: "cpaInfo",
  };

  const handleClose = () => {
    setUpdateStaffCpaInfo(false);
  };

  handleEscape(() => handleClose());

  return (
    <>
      <div className="bg-dark/50 fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50">
        <div
          className={`modal__main absolute mx-1 bg-white border border-gray-200 rounded-md py-8 px-5 max-w-[420px] w-full shadow-xl`}
        >
          <div className="modal__header relative">
            <h3> Update CPA Information </h3>
            <button className="absolute -top-4 right-0 " onClick={handleClose}>
              <FaTimes className="text-gray-700 text-base" />
            </button>
          </div>
          <div className="modal__body overflow-auto max-h-[50vh]">
            <Formik
              initialValues={initVal}
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
                          label="Education Met"
                          type="text"
                          name="staff_education_met"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Experience Met"
                          type="text"
                          name="staff_experience_met"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Exam Passed"
                          type="text"
                          name="staff_exam_passed"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Date Certified"
                          type="date"
                          name="staff_date_certified"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Certification Number"
                          type="text"
                          name="staff_certification_number"
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

export default ModalUpdateStaffCpaInfo;
