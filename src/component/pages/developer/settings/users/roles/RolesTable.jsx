import React from "react";
import { StoreContext } from "../../../../../../store/StoreContext";
import {
  setIsAdd,
  setIsConfirm,
  setIsRestore,
} from "../../../../../../store/StoreAction";
import TableSpinner from "../../../../../partials/spinners/TableSpinner";
import useQueryData from "../../../../../custom-hooks/useQueryData";
import TableLoading from "../../../../../partials/TableLoading";
import Nodata from "../../../../../partials/Nodata";
import ServerError from "../../../../../partials/ServerError";
import Pills from "../../../../../partials/Pills";
import { FiArchive, FiEdit3 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdRestore } from "react-icons/md";
import ModalDeleteAndRestore from "../../../../../partials/modals/ModalDeleteAndRestore";
import ModalConfirm from "../../../../../partials/modals/ModalConfirm";
import RecordCount from "../../../../../partials/RecordCount";
import { getRolesCountRecord } from "./functions-roles";

const RolesTable = ({ setItemEdit }) => {
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
    data: roles,
  } = useQueryData(
    `/v2/controllers/developer/settings/users/roles/roles.php`,
    "get",
    "settings-roles"
  );

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.settings_roles_aid);
    setData(item);
    setDel(null);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setId(item.settings_roles_aid);
    setData(item);
    setDel(null);
  };

  const handleDelete = (item) => {
    dispatch(setIsRestore(true));
    setId(item.settings_roles_aid);
    setData(item);
    setDel(true);
  };
  console.log(roles);

  return (
    <>
      <div className="table__wrapper relative rounded-md shadow-md overflow-auto mb-8">
        {isFetching && !isLoading && <TableSpinner />}
        {/* <RecordCount
          record={roles?.data.length}
          status={getRolesCountRecord(roles)}
        /> */}

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              <th>Name</th>
              <th>Description</th>
              <th className="action lg:hidden"></th>
            </tr>
          </thead>
          <tbody>
            {(isLoading || roles?.data.length === 0) && (
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
            {roles?.data.map((item, key) => {
              active += item.settings_roles_is_active === 1;
              inactive += item.settings_roles_is_active === 0;
              return (
                <tr key={key}>
                  <td>{counter++}</td>
                  <td>
                    {item.settings_roles_is_active === 1 ? (
                      <Pills />
                    ) : (
                      <Pills label="inactive" tc="text-archive" />
                    )}
                  </td>
                  <td>{item.settings_roles_name}</td>
                  <td>{item.settings_roles_description}</td>
                  <td
                    className="table__action top-0 right-5 "
                    data-ellipsis=". . ."
                  >
                    {item.settings_roles_is_active === 1 ? (
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
          mysqlApiArchive={`/v2/controllers/developer/settings/users/roles/active.php?rolesId=${id}`}
          msg={`Are you sure you want to archive this Settings Roles?`}
          item={dataItem.settings_roles_name}
          queryKey={"settings-roles"}
        />
      )}
      {store.isRestore && (
        <ModalDeleteAndRestore
          id={id}
          isDel={isDel}
          mysqlApiDelete={`/v2/controllers/developer/settings/users/roles/roles.php?rolesId=${id}`}
          mysqlApiRestore={`/v2/controllers/developer/settings/users/roles/active.php?rolesId=${id}`}
          msg={
            isDel
              ? "Are you sure you want to delete this roles?"
              : "Are you sure you want to restore this roles?"
          }
          item={dataItem.settings_roles_name}
          queryKey={"settings-roles"}
        />
      )}
    </>
  );
};

export default RolesTable;
