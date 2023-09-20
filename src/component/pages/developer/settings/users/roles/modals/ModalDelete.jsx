import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { HiInformationCircle } from "react-icons/hi";
import {
  setIsDelete,
  setMessage,
  setSuccess,
  setValidate,
} from "../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../store/StoreContext";
import { handleEscape } from "../../../../../../helpers/functions-general";
import { queryData } from "../../../../../../helpers/queryData";
import ButtonSpinner from "../../../../../../partials/spinners/ButtonSpinner";

const ModalDelete = ({ item }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `/v2/controllers/developer/settings/roles/roles.php?rolesId=${item.settings_roles_aid}`,
        "delete",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: `settings-roles` });
      //   dispatch(setIsRestore(false));

      if (data.success) {
        dispatch(setIsDelete(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Delete succesfully.`));
      }
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const handleYes = async () => {
    // // mutate data
    mutation.mutate({});
  };

  const handleClose = () => {
    dispatch(setIsDelete(false));
  };

  handleEscape(() => handleClose());
  return (
    <>
      <div className="bg-dark/50 fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50">
        <div
          className={`modal__main absolute mx-1 bg-white border border-gray-200 rounded-md py-8 px-5 max-w-[420px] w-full shadow-xl`}
        >
          <div className="modal__header flex gap-2">
            <HiInformationCircle className="fill-alert text-5xl" />
            <h3 className="mt-3 text-[16px]">Delete</h3>
          </div>
          <h3 className="mt-3 text-[14px] mb-0 font-normal ">
            Are you sure you want to Delete?
          </h3>
          <p className="text-alert mt-5 uppercase">
            {item.settings_roles_name}
          </p>

          <div className="modal__action flex justify-end mt-6 gap-2">
            <button
              className="btn btn--alert"
              disabled={mutation.isLoading}
              onClick={handleYes}
              type="submit"
            >
              {mutation.isLoading ? <ButtonSpinner /> : "Confirm"}
            </button>
            <button
              className="btn btn--cancel"
              disabled={mutation.isLoading}
              onClick={handleClose}
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDelete;
