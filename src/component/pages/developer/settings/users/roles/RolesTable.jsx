import React from "react";
import { StoreContext } from "../../../../../../store/StoreContext";
import useQueryData from "../../../../../custom-hooks/useQueryData";
import TableSpinner from "../../../../../partials/spinners/TableSpinner";
import ServerError from "../../../../../partials/ServerError";
import TableLoading from "../../../../../partials/TableLoading";
import Nodata from "../../../../../partials/Nodata";
import Pills from "../../../../../partials/Pills";

const RolesTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [item, setItem] = React.useState(null);
  let counter = 1,
    inactive = 0,
    active = 0;

  const {
    isLoading,
    isFetching,
    error,
    data: roles,
  } = useQueryData(
    `/v2/controllers/developer/settings/users/roles/roles.php`, // endpoint
    "get", // method
    "settings-roles" // key
  );

  const handleDelete = (item) => {
    setItem(item);
    dispatch(setIsConfirm(true));
  };

  const handleRestore = (item) => {
    setItem(item);
    dispatch(setIsRestore(true));
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive(!store.isArchive));
    setItem(item);
  };

  return (
    <>
      <div className="table__wrapper relative rounded-md shadow-md overflow-auto mb-8">
        {isFetching && !isLoading && <TableSpinner />}
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {roles?.error ? (
              <ServerError />
            ) : (
              <>
                {(isLoading || roles?.data.length === 0) && (
                  <tr className="text-center">
                    <td colSpan="100%">
                      {isLoading ? <TableLoading /> : <Nodata />}
                    </td>
                  </tr>
                )}
                {error && <ServerError />}
                {roles?.data.map((item, key) => {
                  active += item.settings_roles_is_active === 1;
                  inactive += item.settings_roles_is_active === 0;
                  return (
                    <tr key={key}>
                      <td>{counter++}</td>
                      <td>
                        {item.settings_roles_is_active === 1 ? (
                          <Pills label="Active" />
                        ) : (
                          <Pills tc={`text-archive`} />
                        )}
                      </td>
                      <td>{item.settings_roles_name}</td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RolesTable;
