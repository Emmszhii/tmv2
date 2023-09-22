import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { FiArchive, FiEdit3 } from "react-icons/fi";
import { MdRestore } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useInView } from "react-intersection-observer";
import {
  setIsAdd,
  setIsConfirm,
  setIsRestore,
} from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import useQueryData from "../../../../../custom-hooks/useQueryData";
import { queryDataInfinite } from "../../../../../helpers/queryDataInfinite";
import Loadmore from "../../../../../partials/Loadmore";
import Nodata from "../../../../../partials/Nodata";
import Pills from "../../../../../partials/Pills";
import RecordCount from "../../../../../partials/RecordCount";
import Searchbar from "../../../../../partials/Searchbar";
import ServerError from "../../../../../partials/ServerError";
import TableLoading from "../../../../../partials/TableLoading";
import ModalConfirm from "../../../../../partials/modals/ModalConfirm";
import ModalDeleteAndRestore from "../../../../../partials/modals/ModalDeleteAndRestore";
import TableSpinner from "../../../../../partials/spinners/TableSpinner";
import { getOtherCountRecord } from "./functions-other";

const OtherTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  // for archive, restore,delete
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isDel, setDel] = React.useState(false);

  const [page, setPage] = React.useState(1);
  const search = React.useRef(null);
  const { ref, inView } = useInView();

  let counter = 1;
  let active = 0;
  let inactive = 0;

  // use if with loadmore button and search bar
  const {
    data: result,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["settings-other", store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `/v2/controllers/developer/settings/users/other/search.php`, // search endpoint
        `/v2/controllers/developer/settings/users/other/page.php?start=${pageParam}`, // list endpoint // list endpoint
        store.isSearch, // search boolean
        "post",
        { search: search.current.value }
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: true,
  });

  const { data: other } = useQueryData(
    `/v2/controllers/developer/settings/users/other/other.php`,
    "get",
    "settings-others"
  );

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.settings_other_aid);
    setData(item);
    setDel(null);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setId(item.settings_other_aid);
    setData(item);
    setDel(null);
  };

  const handleDelete = (item) => {
    dispatch(setIsRestore(true));
    setId(item.settings_other_aid);
    setData(item);
    setDel(true);
  };

  return (
    <>
      <Searchbar
        search={search}
        dispatch={dispatch}
        store={store}
        result={result?.pages}
        isFetching={isFetching}
      />

      <RecordCount
        record={
          store.isSearch ? result?.pages[0].count : result?.pages[0].total
        }
        status={getOtherCountRecord(store.isSearch ? result?.pages[0] : other)}
      />
      <div className="table__wrapper relative rounded-md shadow-md overflow-auto mb-8">
        {isFetching && status !== "loading" && <TableSpinner />}
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th width="80px">Status</th>
              <th width="200px">Name</th>
              <th width="300px">Email</th>
              <th>Role</th>
              <th className="action lg:hidden"></th>
            </tr>
          </thead>
          <tbody>
            {(status === "loading" || result?.pages[0].data.length === 0) && (
              <tr className="text-center ">
                <td colSpan="100%" className="p-10">
                  {status === "loading" ? (
                    <TableLoading count={20} cols={3} />
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
            {result?.pages.map((page, key) => (
              <React.Fragment key={key}>
                {page.data.map((item, key) => {
                  active += item.settings_other_is_active === 1;
                  inactive += item.settings_other_is_active === 0;
                  return (
                    <tr key={key}>
                      <td>{counter++}.</td>
                      <td>
                        {item.settings_other_is_active === 1 ? (
                          <Pills label="Active" />
                        ) : (
                          <Pills label="Inactive" tc="text-archive" />
                        )}
                      </td>
                      <td>{item.settings_other_name}</td>
                      <td>{item.settings_other_email}</td>
                      <td>{item.settings_roles_name}</td>
                      <td
                        className="table__action top-0 right-5 "
                        data-ellipsis=". . ."
                      >
                        {item.settings_other_is_active === 1 ? (
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
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <Loadmore
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        result={result?.pages[0]}
        setPage={setPage}
        page={page}
        refView={ref}
      />

      {store.isConfirm && (
        <ModalConfirm
          mysqlApiArchive={`/v2/controllers/developer/settings/users/other/active.php?otherId=${id}`}
          msg={`Are you sure you want to archive this other?`}
          item={dataItem.settings_other_name}
          queryKey={"settings-other"}
        />
      )}
      {store.isRestore && (
        <ModalDeleteAndRestore
          id={id}
          isDel={isDel}
          mysqlApiDelete={`/v2/controllers/developer/settings/users/other/other.php?otherId=${id}`}
          mysqlApiRestore={`/v2/controllers/developer/settings/users/other/active.php?otherId=${id}`}
          msg={
            isDel
              ? "Are you sure you want to delete this other?"
              : "Are you sure you want to restore this other?"
          }
          item={dataItem.settings_other_name}
          queryKey={"settings-other"}
        />
      )}
      {/* {store.isArchive && <ModalArchive item={item} />}
      {store.isRestore && <ModalRestore item={item} />}
      {store.isDelete && <ModalDelete item={item} />}
      {store.success && <Toast />} */}
    </>
  );
};

export default OtherTable;
