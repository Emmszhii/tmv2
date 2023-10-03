import React from "react";
import { StoreContext } from "../../../../../../../store/StoreContext";
import { useMutation } from "@tanstack/react-query";
import { queryData } from "../../../../../../helpers/queryData";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "../../../../../../../store/StoreAction";

const ModalEditIdentification = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
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
    client_client_id: itemEdit ? itemEdit.client_client_id : "",
    client_description: itemEdit ? itemEdit.client_description : "",
    client_name: itemEdit ? itemEdit.client_name : "",
    client_name1: itemEdit ? itemEdit.client_name1 : "",
    client_start_date: itemEdit ? itemEdit.client_start_date : "",
    client_client_id_old: itemEdit ? itemEdit.client_client_id : "",
    client_description_old: itemEdit ? itemEdit.client_description : "",
    searchEntity: "",
    searchPartner: "",
    searchManager: "",
    searchAssociate: "",
  };
  return <> <div className="bg-dark/50 fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50">
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
            client_partner_id: partnerId,
            client_manager_id: managerId,
            client_associate_id: associateId,
            client_entities_id: entityId,
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
                    label="Partner"
                    name="searchPartner"
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
                <div className="form__wrap text-left">
                  <SearchManager
                    label="Manager"
                    name="searchManager"
                    disabled={mutation.isLoading}
                    endpoint={`/v2/controllers/developer/client/search-staff.php`}
                    setSearch={setSearchManager}
                    setIsSearch={setIsSearchManager}
                    handleSearchModal={handleSearchModal}
                    setLoading={setLoadingManager}
                    setData={setDataManager}
                    search={searchManager}
                    isSearch={isSearchManager}
                    loading={loadingManager}
                    data={dataManager}
                    setId={setManagerId}
                  />
                </div>
                <div className="form__wrap text-left">
                  <SearchAssociate
                    label="Associate"
                    name="searchAssociate"
                    disabled={mutation.isLoading}
                    endpoint={`/v2/controllers/developer/client/search-staff.php`}
                    setSearch={setSearchAssociate}
                    setIsSearch={setIsSearchAssociate}
                    handleSearchModal={handleSearchModal}
                    setLoading={setLoadingAssociate}
                    setData={setDataAssociate}
                    search={searchAssociate}
                    isSearch={isSearchAssociate}
                    loading={loadingAssociate}
                    data={dataAssociate}
                    setId={setAssociateId}
                  />
                </div>
                <div className="form__wrap text-left">
                  <SearchEntity
                    label="Entity"
                    name="searchEntity"
                    disabled={mutation.isLoading}
                    endpoint={`/v2/controllers/developer/client/search-entities.php`}
                    setSearch={setSearchEntity}
                    setIsSearch={setIsSearchEntity}
                    handleSearchModal={handleSearchModal}
                    setLoading={setLoadingEntity}
                    setData={setDataEntity}
                    search={searchEntity}
                    isSearch={isSearchEntity}
                    loading={loadingEntity}
                    data={dataEntity}
                    setId={setEntityId}
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
</div></>;
};

export default ModalEditIdentification;
