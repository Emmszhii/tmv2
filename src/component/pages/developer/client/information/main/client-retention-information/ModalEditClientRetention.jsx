import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import * as Yup from "yup";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../store/StoreContext";
import { queryData } from "../../../../../../helpers/queryData";
import { handleEscape } from "../../../../../../helpers/functions-general";
import { FaTimes } from "react-icons/fa";
import { Form, Formik } from "formik";
import { InputSelect, InputText } from "../../../../../../helpers/FormInputs";
import ButtonSpinner from "../../../../../../partials/spinners/ButtonSpinner";
import useQueryData from "../../../../../../custom-hooks/useQueryData";

const ModalEditClientRetention = ({ itemEdit, setIsRetentionShow }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  // search Referred By state
  const [loadingReferredBy, setLoadingReferredBy] = React.useState(false);
  const [isSearchReferredBy, setIsSearchReferredBy] = React.useState(false);
  const [searchReferredBy, setSearchReferredBy] = React.useState("");
  const [dataReferredBy, setDataReferredBy] = React.useState([]);
  const [referredById, setReferredById] = React.useState("");

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `/v2/controllers/developer/client/information/main/client-retention-information/client-retention-information.php?clientRetentionId=${itemEdit.client_aid}`, //update
        "put",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["client"] });

      if (data.success) {
        setIsRetentionShow(false);
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
    client_retention_referred_type_id: itemEdit
      ? itemEdit.client_retention_referred_type_id
      : "",
    searchRetentionReferredBy: "",
    client_retention_won_date: itemEdit
      ? itemEdit.client_retention_won_date
      : "",
    client_retention_won_reason_id: itemEdit
      ? itemEdit.client_retention_won_reason_id
      : "",
    client_retention_lost_to_id: itemEdit
      ? itemEdit.client_retention_lost_to_id
      : "",
    client_retention_lost_reason_id: itemEdit
      ? itemEdit.client_retention_lost_reason_id
      : "",
  };

  const yupSchema = Yup.object({});

  const {
    isLoading: isLoadingReferredType,
    error: errorReferredType,
    data: referredType,
  } = useQueryData(
    `/v2/controllers/developer/settings/referral-type/referral-type.php`,
    "get",
    "referral-type"
  );
  const {
    isLoading: isLoadingWonReason,
    error: errorWonReason,
    data: wonReason,
  } = useQueryData(
    `/v2/controllers/developer/settings/won-reason/won-reason.php`,
    "get",
    "won-reason"
  );
  const {
    isLoading: isLoadingLostTo,
    error: errorLostTo,
    data: lostTo,
  } = useQueryData(
    `/v2/controllers/developer/settings/lost-to/lost-to.php`,
    "get",
    "lost-to"
  );
  const {
    isLoading: isLoadingLostReason,
    error: errorLostReason,
    data: lostReason,
  } = useQueryData(
    `/v2/controllers/developer/settings/lost-reason/lost-reason.php`,
    "get",
    "lost-reason"
  );
  console.log(lostReason);
  const handleClose = () => {
    setIsRetentionShow(false);
  };

  handleEscape(() => handleClose());
  return (
    <>
      <div className="bg-dark/50 fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50">
        <div
          className={`modal__main absolute mx-1 bg-white border border-gray-200 rounded-md py-8 px-5 max-w-[420px] w-full shadow-xl`}
        >
          <div className="modal__header relative">
            <h3> {itemEdit ? "Update" : "Add"} Client </h3>
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
                  client_retention_referred_by_id: referredById,
                });
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="modal__body ">
                      <div className="form__wrap">
                        <InputSelect
                          label="Referral Type"
                          type="text"
                          name="client_retention_referred_type_id"
                          disabled={mutation.isLoading}
                          onChange={(e) => e}
                        >
                          {isLoadingReferredType ? (
                            <option value="" hidden>
                              Loading..
                            </option>
                          ) : errorReferredType ? (
                            <option value="" disabled>
                              Error
                            </option>
                          ) : (
                            <optgroup label="Select Referral Type">
                              <option value="" hidden></option>
                              {referredType?.data.length > 0 ? (
                                referredType?.data.map((item, key) => {
                                  return (
                                    <option
                                      value={item.referral_type_aid}
                                      key={key}
                                    >
                                      {item.referral_type_name}
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
                        </InputSelect>
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Referred By"
                          type="text"
                          name="client_client_id"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Won Date"
                          type="date"
                          name="client_retention_won_date"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputSelect
                          label="Won Reason"
                          type="text"
                          name="client_retention_won_reason_id"
                          disabled={mutation.isLoading}
                          onChange={(e) => e}
                        >
                          {isLoadingWonReason ? (
                            <option value="" hidden>
                              Loading..
                            </option>
                          ) : errorWonReason ? (
                            <option value="" disabled>
                              Error
                            </option>
                          ) : (
                            <optgroup label="Select Won Reason">
                              <option value="" hidden></option>
                              {wonReason?.data.length > 0 ? (
                                wonReason?.data.map((item, key) => {
                                  return (
                                    <option
                                      value={item.won_reason_aid}
                                      key={key}
                                    >
                                      {item.won_reason_description}
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
                        </InputSelect>
                      </div>
                      <div className="form__wrap">
                        <InputSelect
                          label="Lost To"
                          type="text"
                          name="client_retention_lost_to_id"
                          disabled={mutation.isLoading}
                          onChange={(e) => e}
                        >
                          {isLoadingLostTo ? (
                            <option value="" hidden>
                              Loading..
                            </option>
                          ) : errorLostTo ? (
                            <option value="" disabled>
                              Error
                            </option>
                          ) : (
                            <optgroup label="Select Lost To">
                              <option value="" hidden></option>
                              {lostTo?.data.length > 0 ? (
                                lostTo?.data.map((item, key) => {
                                  return (
                                    <option value={item.lost_to_aid} key={key}>
                                      {item.lost_to_description}
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
                        </InputSelect>
                      </div>
                      <div className="form__wrap">
                        <InputSelect
                          label="Lost Reason"
                          type="text"
                          name="client_retention_lost_reason_id"
                          disabled={mutation.isLoading}
                          onChange={(e) => e}
                        >
                          {isLoadingLostReason ? (
                            <option value="" hidden>
                              Loading..
                            </option>
                          ) : errorLostReason ? (
                            <option value="" disabled>
                              Error
                            </option>
                          ) : (
                            <optgroup label="Select Lost Reason">
                              <option value="" hidden></option>
                              {lostReason?.data.length > 0 ? (
                                lostReason?.data.map((item, key) => {
                                  return (
                                    <option
                                      value={item.lost_reason_aid}
                                      key={key}
                                    >
                                      {item.lost_reason_description}
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

export default ModalEditClientRetention;
