import React from "react";
import { StoreContext } from "../../../../../../../store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../../../../helpers/queryData";
import {
  setIsArchive,
  setIsRestore,
  setMessage,
  setSuccess,
  setValidate,
} from "../../../../../../../store/StoreAction";
import { handleEscape } from "../../../../../../helpers/functions-general";
import { HiInformationCircle } from "react-icons/hi";
import ButtonSpinner from "../../../../../../partials/spinners/ButtonSpinner";

const ModalRestore = ({ item }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `/v2/controllers/developer/settings/users/system/active.php?systemId=${item.settings_system_aid}`,
        "put",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: `settings-system` });
      //   dispatch(setIsRestore(false));

      if (data.success) {
        dispatch(setIsRestore(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Restore succesfully.`));
      }
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const handleYes = async () => {
    // // mutate data
    mutation.mutate({
      isActive: 1,
    });
  };

  const handleClose = () => {
    dispatch(setIsRestore(false));
  };

  handleEscape(() => handleClose());
  return (
    <>
      <div className="bg-dark/50 fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50">
        <div
          className={`modal__main absolute mx-1 bg-white border border-gray-200 rounded-md py-8 px-5 max-w-[420px] w-full shadow-xl`}
        >
          <div className="modal__header flex gap-2">
            <HiInformationCircle className="fill-primary text-5xl" />
            <h3 className="mt-3 text-[16px]">Restore</h3>
          </div>
          <h3 className="mt-3 text-[14px] mb-0 font-normal ">
            Are you sure you want to Restore?
          </h3>
          <p className="text-primary mt-5 uppercase">
            {item.settings_system_name}
          </p>

          <div className="modal__action flex justify-end mt-6 gap-2">
            <button
              className="btn btn--primary"
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

export default ModalRestore;
