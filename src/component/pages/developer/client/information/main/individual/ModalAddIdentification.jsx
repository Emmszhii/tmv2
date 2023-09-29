import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { StoreContext } from "../../../../../../../store/StoreContext";
import { queryData } from "../../../../../../helpers/queryData";
import { setIsAdd, setMessage, setSuccess } from "../../../../../../../store/StoreAction";

const ModalAddIdentification = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
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
    client_name: itemEdit ? itemEdit.client_name : "",
    client_description: itemEdit ? itemEdit.client_description : "",
    client_start_date: itemEdit ? itemEdit.client_start_date : "",
    client_client_id_old: itemEdit ? itemEdit.client_client_id : "",
    client_description_old: itemEdit ? itemEdit.client_description : "",
    searchEntity: "",
    searchPartner: "",
    searchManager: "",
    searchAssociate: "",
  };

  const yupSchema = Yup.object({
    client_client_id: Yup.string().required("Required"),
    client_name: Yup.string().required("Required"),
    client_description: Yup.string().required("Required"),
    // searchPartner: Yup.string().required("Required"),
    // searchManager: Yup.string().required("Required"),
    // searchAssociate: Yup.string().required("Required"),
    // searchEntity: Yup.string().required("Required"),
  });

  const handleSearchModal = () => {
    setIsSearchEntity(false);
    setIsSearchPartner(false);
  };

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  handleEscape(() => handleClose());
  return <></>;
};

export default ModalAddIdentification;
