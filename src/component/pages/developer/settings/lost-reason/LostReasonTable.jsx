import React from "react";
import { FiArchive, FiEdit3 } from "react-icons/fi";
import { MdRestore } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

import {
  setIsAdd,
  setIsConfirm,
  setIsRestore,
} from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import useQueryData from "../../../../custom-hooks/useQueryData";
import Nodata from "../../../../partials/Nodata";
import Pills from "../../../../partials/Pills";
import RecordCount from "../../../../partials/RecordCount";
import ServerError from "../../../../partials/ServerError";
import TableLoading from "../../../../partials/TableLoading";
import ModalConfirm from "../../../../partials/modals/ModalConfirm";
import ModalDeleteAndRestore from "../../../../partials/modals/ModalDeleteAndRestore";
import TableSpinner from "../../../../partials/spinners/TableSpinner";
import { getLostReasonCountRecord } from "./functions-lost-reason";

const LostReasonTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isDel, setDel] = React.useState(false);
  let counter = 1,
    active = 0,
    inactive = 0;

  const {
    isLoading,
    isFetching,
    error,
    data: lostReason,
  } = useQueryData(
    `/v2/controllers/developer/settings/lost-reason/lost-reason.php`,
    "get",
    "settings-lost-reason"
  );

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.lost_reason_aid);
    setData(item);
    setDel(null);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setId(item.lost_reason_aid);
    setData(item);
    setDel(null);
  };

  const handleDelete = (item) => {
    dispatch(setIsRestore(true));
    setId(item.lost_reason_aid);
    setData(item);
    setDel(true);
  };

  return (
    <>
      <div className="table__wrapper relative rounded-md shadow-md overflow-auto mb-8">
        {isFetching && !isLoading && <TableSpinner />}
        <RecordCount
          record={lostReason?.data.length}
          status={getLostReasonCountRecord(lostReason)}
        />
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              <th>Description</th>
              <th className="action lg:hidden"></th>
            </tr>
          </thead>
          <tbody>
            {(isLoading || lostReason?.data.length === 0) && (
              <tr className="text-center ">
                <td colSpan="100%" className="p-10">
                  {isLoading ? (
                    <TableLoading cols={3} count={15} />
                  ) : (
                    <Nodata />
                  )}
                </td>
              </tr>
            )}
            {error && (
              <tr className="text-center ">
                <td colSpan="100%" className="p-10">
                  <ServerError />
                </td>
              </tr>
            )}
            {lostReason?.data.map((item, key) => {
              active += item.lost_reason_is_active === 1;
              inactive += item.lost_reason_is_active === 0;
              return (
                <tr key={key}>
                  <td>{counter++}</td>
                  <td>
                    {item.lost_reason_is_active === 1 ? (
                      <Pills />
                    ) : (
                      <Pills label="inactive" tc="text-archive" />
                    )}
                  </td>
                  <td>{item.lost_reason_description}</td>
                  <td
                    className="table__action top-0 right-5 "
                    data-ellipsis=". . ."
                  >
                    {item.lost_reason_is_active === 1 ? (
                      <ul className=" flex items-center  gap-4 bg-">
                        <li>
                          <button
                            className="tooltip"
                            data-tooltip="Edit"
                            onClick={() => handleEdit(item)}
                          >
                            <FiEdit3 />
                          </button>
                        </li>
                        <li>
                          <button
                            className="tooltip"
                            data-tooltip="Archive"
                            onClick={() => handleArchive(item)}
                          >
                            <FiArchive />
                          </button>
                        </li>
                      </ul>
                    ) : (
                      <ul className="flex items-center gap-4">
                        <li>
                          <button
                            className="tooltip"
                            data-tooltip="Delete"
                            onClick={() => handleDelete(item)}
                          >
                            <RiDeleteBinLine />
                          </button>
                        </li>
                        <li>
                          <button
                            className="tooltip"
                            data-tooltip="Restore"
                            onClick={() => handleRestore(item)}
                          >
                            <MdRestore />
                          </button>
                        </li>
                      </ul>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {store.isConfirm && (
        <ModalConfirm
          mysqlApiArchive={`/v2/controllers/developer/settings/lost-reason/active.php?lostReasonId=${id}`}
          msg={`Are you sure you want to archive this lost reason?`}
          item={dataItem.lost_reason_description}
          queryKey={"settings-lost-reason"}
        />
      )}
      {store.isRestore && (
        <ModalDeleteAndRestore
          id={id}
          isDel={isDel}
          mysqlApiDelete={`/v2/controllers/developer/settings/lost-reason/lost-reason.php?lostReasonId=${id}`}
          mysqlApiRestore={`/v2/controllers/developer/settings/lost-reason/active.php?lostReasonId=${id}`}
          msg={
            isDel
              ? "Are you sure you want to delete this lost reason?"
              : "Are you sure you want to restore this lost reason?"
          }
          item={dataItem.lost_reason_description}
          queryKey={"settings-lost-reason"}
        />
      )}
    </>
  );
};

export default LostReasonTable;
