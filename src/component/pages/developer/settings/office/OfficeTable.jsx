import React from "react";
import ModalDeleteAndRestore from "../../../../partials/modals/ModalDeleteAndRestore";
import ModalConfirm from "../../../../partials/modals/ModalConfirm";
import TableSpinner from "../../../../partials/spinners/TableSpinner";
import { getOfficeCountRecord } from "./functions-office";
import Searchbar from "../../../../partials/Searchbar";
import { StoreContext } from "../../../../../store/StoreContext";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryDataInfinite } from "../../../../helpers/queryDataInfinite";
import useQueryData from "../../../../custom-hooks/useQueryData";
import {
  setIsAdd,
  setIsConfirm,
  setIsRestore,
} from "../../../../../store/StoreAction";
import RecordCount from "../../../../partials/RecordCount";
import TableLoading from "../../../../partials/TableLoading";
import Nodata from "../../../../partials/Nodata";
import ServerError from "../../../../partials/ServerError";
import Pills from "../../../../partials/Pills";
import { FiArchive, FiEdit3 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdRestore } from "react-icons/md";
import Loadmore from "../../../../partials/Loadmore";

const OfficeTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  // for data
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isDel, setDel] = React.useState(false);
  // for loadmore and search
  const [page, setPage] = React.useState(1);
  const search = React.useRef("");
  const { ref, inView } = useInView();

  let counter = 1;

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
    queryKey: ["settings-office", search.current.value, store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `/v2/controllers/developer/settings/office/search.php`, // search endpoint
        `/v2/controllers/developer/settings/office/page.php?start=${pageParam}`, // list endpoint // list endpoint
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

  const { data: office } = useQueryData(
    `/v2/controllers/developer/settings/office/office.php`,
    "get",
    "settings-office"
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
    setId(item.settings_office_aid);
    setData(item);
    setDel(null);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setId(item.settings_office_aid);
    setData(item);
    setDel(null);
  };

  const handleDelete = (item) => {
    dispatch(setIsRestore(true));
    setId(item.settings_office_aid);
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
        status={getOfficeCountRecord(
          store.isSearch ? result?.pages[0] : office
        )}
      />
      <div className="table__wrapper relative rounded-md shadow-md overflow-auto mb-8">
        {isFetching && status !== "loading" && <TableSpinner />}
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th width="50px">Status</th>
              <th width="50px">Name</th>
              <th>Description</th>
              <th className="action"></th>
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
                  return (
                    <tr key={key}>
                      <td>{counter++}.</td>
                      <td>
                        {item.settings_office_is_active === 1 ? (
                          <Pills label="Active" />
                        ) : (
                          <Pills label="Inactive" tc="text-archive" />
                        )}
                      </td>
                      <td>{item.settings_office_name}</td>
                      <td>{item.settings_office_description}</td>

                      <td>
                        {item.settings_office_is_active === 1 ? (
                          <ul
                            data-ellipsis=". . ."
                            className="table__action top-0 right-5  flex items-center  gap-4 bg-"
                          >
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
                          <ul
                            data-ellipsis=". . ."
                            className="table__action top-0 right-5 flex items-center gap-4"
                          >
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
          mysqlApiArchive={`/v2/controllers/developer/settings/office/active.php?officeId=${id}`}
          msg={`Are you sure you want to archive this office?`}
          item={dataItem.settings_office_description}
          queryKey={"settings-office"}
        />
      )}
      {store.isRestore && (
        <ModalDeleteAndRestore
          id={id}
          isDel={isDel}
          mysqlApiDelete={`/v2/controllers/developer/settings/office/office.php?officeId=${id}`}
          mysqlApiRestore={`/v2/controllers/developer/settings/office/active.php?officeId=${id}`}
          msg={
            isDel
              ? "Are you sure you want to delete this office?"
              : "Are you sure you want to restore this office?"
          }
          item={dataItem.settings_office_description}
          queryKey={"settings-office"}
        />
      )}
    </>
  );
};

export default OfficeTable;
