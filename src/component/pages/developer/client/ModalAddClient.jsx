import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaTimes } from "react-icons/fa";
import * as Yup from "yup";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import { InputText } from "../../../helpers/FormInputs";
import { handleEscape } from "../../../helpers/functions-general";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import { queryData } from "../../../helpers/queryData";
import Search from "./Search";

const ModalAddClient = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  // search Entity
  const [loadingEntity, setLoadingEntity] = React.useState(false);
  const [isSearchEntity, setIsSearchEntity] = React.useState(false);
  const [searchEntity, setSearchEntity] = React.useState("");
  const [dataEntity, setDataEntity] = React.useState([]);
  const [entityId, setEntityId] = React.useState("");
  // search Partner
  const [loadingPartner, setLoadingPartner] = React.useState(false);
  const [isSearchPartner, setIsSearchPartner] = React.useState(false);
  const [searchPartner, setSearchPartner] = React.useState("");
  const [dataPartner, setDataPartner] = React.useState([]);
  const [partnerId, setPartnerId] = React.useState("");

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
      // show error search box
      setSearchEntity("");
      setSearchPartner("");
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
    client_name: itemEdit ? itemEdit.client_name : "",
    client_description: itemEdit ? itemEdit.client_description : "",

    searchEntity: "",
    searchPartner: "",

    client_client_id_old: itemEdit ? itemEdit.client_client_id : "",
    client_description_old: itemEdit ? itemEdit.client_description : "",
  };

  const yupSchema = Yup.object({
    client_client_id: Yup.string().required("Required"),
    client_name: Yup.string().required("Required"),
    client_description: Yup.string().required("Required"),
    searchEntity: Yup.string().required("Required"),
    searchPartner: Yup.string().required("Required"),
  });

  const handleSearchModal = () => {
    setIsSearchEntity(false);
    setIsSearchPartner(false);
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
                  client_entities_id: entityId,
                  client_partner_id: partnerId,
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
                          onClick={handleSearchModal}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Name"
                          type="text"
                          name="client_name"
                          disabled={mutation.isLoading}
                          onClick={handleSearchModal}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Client Description"
                          type="text"
                          name="client_description"
                          disabled={mutation.isLoading}
                          onClick={handleSearchModal}
                        />
                      </div>
                      {/* <div className="form__wrap">
                        <Search
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
                      </div> */}
                      <div className="form__wrap">
                        <Search
                          label="Entities"
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
      </div>
    </>
  );
};

export default ModalAddClient;
