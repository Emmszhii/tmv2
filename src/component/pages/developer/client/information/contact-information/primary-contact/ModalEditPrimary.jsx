import React from "react";
import { StoreContext } from "../../../../../../../store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleEscape } from "../../../../../../helpers/functions-general";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "../../../../../../../store/StoreAction";
import ButtonSpinner from "../../../../../../partials/spinners/ButtonSpinner";
import { InputText, InputTextArea } from "../../../../../../helpers/FormInputs";
import { Form, Formik } from "formik";
import { FaTimes } from "react-icons/fa";
import * as Yup from "yup";
import { queryData } from "../../../../../../helpers/queryData";

const ModalEditPrimary = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `/v2/controllers/developer/information/contact-information/primary-contact/primary-contact.php?clientId=${itemEdit.client_aid}`, //update
        "put",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["primary-contact"] });

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
    primary_contact_name: itemEdit ? itemEdit.primary_contact_name : "",
    primary_contact_title: itemEdit ? itemEdit.primary_contact_title : "",
    primary_contact_company: itemEdit ? itemEdit.primary_contact_company : "",
    primary_contact_file_as: itemEdit ? itemEdit.primary_contact_file_as : "",
    primary_contact_business_number: itemEdit
      ? itemEdit.primary_contact_business_number
      : "",
    primary_contact_home_number: itemEdit
      ? itemEdit.primary_contact_home_number
      : "",
    primary_contact_mobile_number: itemEdit
      ? itemEdit.primary_contact_mobile_number
      : "",
    primary_contact_address: itemEdit ? itemEdit.primary_contact_address : "",
    primary_contact_country: itemEdit ? itemEdit.primary_contact_country : "",
    primary_contact_zip: itemEdit ? itemEdit.primary_contact_zip : "",
    primary_contact_email: itemEdit ? itemEdit.primary_contact_email : "",

    searchEntity: "",
    searchPartner: "",
    searchManager: "",
    searchAssociate: "",
  };

  const yupSchema = Yup.object({});

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
            <h3> {itemEdit ? "Update" : "Add"} Primary Contact </h3>
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
                          label="Contact Person"
                          type="text"
                          name="primary_contact_name"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Title"
                          type="text"
                          name="primary_contact_title"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Company"
                          type="text"
                          name="primary_contact_company"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="File as"
                          type="text"
                          name="primary_contact_file_as"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Business Number"
                          type="text"
                          name="primary_contact_business_number"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Home number"
                          type="text"
                          number="number"
                          name="primary_contact_home_number"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Mobile Number"
                          type="text"
                          number="number"
                          name="primary_contact_mobile_number"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputTextArea
                          label="Address"
                          type="text"
                          name="primary_contact_address"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Country"
                          type="text"
                          name="primary_contact_country"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Zip"
                          type="text"
                          name="primary_contact_zip"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Email"
                          type="text"
                          name="primary_contact_email"
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

export default ModalEditPrimary;
