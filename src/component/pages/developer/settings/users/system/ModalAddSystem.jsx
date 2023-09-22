import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaTimes } from "react-icons/fa";
import * as Yup from "yup";
import { StoreContext } from "../../../../../../store/StoreContext";
import { queryData } from "../../../../../helpers/queryData";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "../../../../../../store/StoreAction";
import { InputSelect, InputText } from "../../../../../helpers/FormInputs";
import ButtonSpinner from "../../../../../partials/spinners/ButtonSpinner";
import { handleEscape } from "../../../../../helpers/functions-general";
import useQueryData from "../../../../../custom-hooks/useQueryData";

const ModalAddSystem = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/controllers/developer/settings/users/system/system.php?systemId=${itemEdit.settings_system_aid}` //update
          : "/v2/controllers/developer/settings/users/system/system.php", //add
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["settings-system"] });
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

  const {
    loadingRoles,
    isFetching,
    errorRoles,
    data: roles,
  } = useQueryData(
    `/v2/controllers/developer/settings/users/roles/roles.php`,
    "get",
    "settings-roles"
  );

  const initVal = {
    settings_system_name: itemEdit ? itemEdit.settings_system_name : "",
    settings_system_email: itemEdit ? itemEdit.settings_system_email : "",
    settings_system_role: itemEdit ? itemEdit.settings_system_role : "",
    settings_system_name_old: itemEdit ? itemEdit.settings_system_name : "",
  };

  const yupSchema = Yup.object({
    settings_system_name: Yup.string().required("Required"),
    settings_system_email: Yup.string()
      .required("Required")
      .email("Invalid email"),
    settings_system_role: Yup.string().required("Required"),
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
            <h3> {itemEdit ? "Update" : "Add"} System </h3>
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
                          label="Name"
                          type="text"
                          name="settings_system_name"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Email"
                          type="text"
                          name="settings_system_email"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputSelect
                          label="Role"
                          type="text"
                          name="settings_system_role"
                          disabled={mutation.isLoading}
                          onChange={(e) => e}
                        >
                          {loadingRoles ? (
                            <option value="" hidden>
                              Loading..
                            </option>
                          ) : errorRoles ? (
                            <option value="" disabled>
                              Error
                            </option>
                          ) : (
                            <optgroup label="Select Role">
                              <option value="" hidden></option>
                            </optgroup>
                          )}
                        </InputSelect>
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

export default ModalAddSystem;
