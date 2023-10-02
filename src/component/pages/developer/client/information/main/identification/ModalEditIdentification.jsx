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
  return <></>;
};

export default ModalEditIdentification;
