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

const ModalEditPreferred = ({ itemEdit, setPreferredModalShow }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `/v2/controllers/developer/client/information/contact-information/preferred-contact/preferred-contact.php?preferredContactId=${itemEdit.preferred_contact_client_id}`, //update
        "put",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["preferred-contact"] });

      if (data.success) {
        setPreferredModalShow(false);
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
    preferred_contact_name: itemEdit ? itemEdit.preferred_contact_name : "",
    preferred_contact_title: itemEdit ? itemEdit.preferred_contact_title : "",
    preferred_contact_company: itemEdit
      ? itemEdit.preferred_contact_company
      : "",
    preferred_contact_file_as: itemEdit
      ? itemEdit.preferred_contact_file_as
      : "",
    preferred_contact_business_number: itemEdit
      ? itemEdit.preferred_contact_business_number
      : "",
    preferred_contact_mobile_number: itemEdit
      ? itemEdit.preferred_contact_mobile_number
      : "",
    preferred_contact_home_number: itemEdit
      ? itemEdit.preferred_contact_home_number
      : "",
    primary_contact_mobile_number: itemEdit
      ? itemEdit.primary_contact_mobile_number
      : "",
    preferred_contact_address: itemEdit
      ? itemEdit.preferred_contact_address
      : "",
    preferred_contact_country: itemEdit
      ? itemEdit.preferred_contact_country
      : "",
    preferred_contact_zip: itemEdit ? itemEdit.preferred_contact_zip : "",
    preferred_contact_email: itemEdit ? itemEdit.preferred_contact_email : "",
  };

  const yupSchema = Yup.object({});

  const handleClose = () => {
    setPreferredModalShow(false);
  };

  handleEscape(() => handleClose());

  return (
    <>
      <div className="bg-dark/50 fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50">
        <div
          className={`modal__main absolute mx-1 bg-white border border-gray-200 rounded-md py-8 px-5 max-w-[420px] w-full shadow-xl`}
        >
          <div className="modal__header relative">
            <h3> {itemEdit ? "Update" : "Add"} Preferred Contact </h3>
            <button className="absolute -top-4 right-0 " onClick={handleClose}>
              <FaTimes className="text-gray-700 text-base" />
            </button>
          </div>
          <div className="modal__body overflow-auto max-h-[50vh]">
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                console.log(values);
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
                          name="preferred_contact_name"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Title"
                          type="text"
                          name="preferred_contact_title"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Company"
                          type="text"
                          name="preferred_contact_company"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="File as"
                          type="text"
                          name="preferred_contact_file_as"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Business Number"
                          mobile="mobile"
                          name="preferred_contact_business_number"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Home number"
                          mobile="mobile"
                          name="preferred_contact_home_number"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Mobile Number"
                          mobile="mobile"
                          name="preferred_contact_mobile_number"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputTextArea
                          label="Address"
                          type="text"
                          name="preferred_contact_address"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Country"
                          type="text"
                          name="preferred_contact_country"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Zip"
                          type="text"
                          name="preferred_contact_zip"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Email"
                          type="text"
                          name="preferred_contact_email"
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

export default ModalEditPreferred;
