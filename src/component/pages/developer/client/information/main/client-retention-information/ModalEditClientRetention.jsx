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

const ModalEditClientRetention = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  // search referred by
  const [loadingReferredBy, setLoadingReferredBy] = React.useState(false);
  const [isSearchReferredBy, setIsSearchReferredBy] = React.useState(false);
  const [searchReferredBy, setSearchReferredBy] = React.useState(
    itemEdit ? getReferredBy(ReferredBy, itemEdit.client_referred_by_id) : ""
  );
  const [dataReferredBy, setDataReferredBy] = React.useState([]);
  const [referredById, setReferredById] = React.useState("");
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/controllers/developer/client/client.php?clientId=${itemEdit.client_aid}` //update
          : "/v2/controllers/developer/client/client.php", //add
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["client"] });

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
    client_retention_referred_type: itemEdit
      ? itemEdit.client_retention_referred_type
      : "",
    searchRetentionReferredBy: "",
    client_retention_won_date: itemEdit
      ? itemEdit.client_retention_won_date
      : "",
    client_retention_won_reason: itemEdit
      ? itemEdit.client_retention_won_reason
      : "",
    client_retention_lost_to: itemEdit ? itemEdit.client_retention_lost_to : "",
    client_retention_lost_reason: itemEdit
      ? itemEdit.client_retention_lost_reason
      : "",
  };

  const yupSchema = Yup.object({
    client_client_id: Yup.string().required("Required"),
    client_name: Yup.string().required("Required"),
    client_description: Yup.string().required("Required"),
  });

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  handleEscape(() => handleClose());
  return (
    <>
      {" "}
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
                  searchRetentionReferredBy: partnerId,
                });
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="modal__body ">
                      <div className="form__wrap">
                        <InputText
                          label="Client ID"
                          type="text"
                          name="client_client_id"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Name"
                          type="text"
                          name="client_name"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Client Description"
                          type="text"
                          name="client_description"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Start Date"
                          type="date"
                          name="client_start_date"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap text-left">
                        <SearchPartner
                          label="Referred By"
                          name="searchRetentionReferredBy"
                          disabled={mutation.isLoading}
                          endpoint={`/v2/controllers/developer/client/search-partner.php`}
                          setSearch={setSearchPartner}
                          setIsSearch={setIsSearchPartner}
                          handleSearchModal={handleSearchModal}
                          setLoading={setLoadingPartner}
                          setData={setDataPartner}
                          search={searchPartner}
                          isSearch={isSearchPartner}
                          loading={loadingPartner}
                          data={dataPartner}
                          setId={setPartnerId}
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

export default ModalEditClientRetention;
