import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { FiArchive } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";
import { MdRestore } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useInView } from "react-intersection-observer";
import {
  setIsAdd,
  setIsConfirm,
  setIsRestore,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import { queryDataInfinite } from "../../../helpers/queryDataInfinite";
import Nodata from "../../../partials/Nodata";
import RecordCount from "../../../partials/RecordCount";
import Searchbar from "../../../partials/Searchbar";
import ServerError from "../../../partials/ServerError";
import TableLoading from "../../../partials/TableLoading";
import UserIcon from "../../../partials/UserIcon";
import { getStaffCountRecord } from "./funtions-staff";
import Loadmore from "../../../partials/Loadmore";
import ModalConfirm from "../../../partials/modals/ModalConfirm";
import ModalDeleteAndRestore from "../../../partials/modals/ModalDeleteAndRestore";
import useQueryData from "../../../custom-hooks/useQueryData";
import TableSpinner from "../../../partials/spinners/TableSpinner";
import Pills from "../../../partials/Pills";

const StaffTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
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
    queryKey: ["staff", store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `/v2/controllers/developer/staff/search.php`, // search endpoint
        `/v2/controllers/developer/staff/page.php?start=${pageParam}`, // list endpoint // list endpoint
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

  const { data: staff } = useQueryData(
    `/v2/controllers/developer/staff/staff.php`,
    "get",
    "staff"
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
    setId(item.staff_aid);
    setData(item);
    setDel(null);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setId(item.staff_aid);
    setData(item);
    setDel(null);
  };

  const handleDelete = (item) => {
    dispatch(setIsRestore(true));
    setId(item.staff_aid);
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
        status={getStaffCountRecord(store.isSearch ? result?.pages[0] : staff)}
      />
      <div className="table__wrapper relative rounded-md shadow-md overflow-auto mb-8">
        {isFetching && status !== "loading" && <TableSpinner />}

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th className="w-[2rem]">Status</th>
              <th className="min-w-[3rem]"></th>
              <th>Staff ID</th>
              <th>Description</th>
              <th>Staff Name</th>
              <th>Department </th>
              <th>Office </th>
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
                  active += item.staff_is_active === 1;
                  inactive += item.staff_is_active === 0;
                  return (
                    <tr key={key}>
                      <td>{counter++}.</td>
                      <td>
                        {item.staff_is_active === 1 ? (
                          <Pills label="Active" tc="text-success" />
                        ) : (
                          <Pills label="Inactive" tc="text-archive" />
                        )}
                      </td>
                      <td>
                        <UserIcon />
                      </td>
                      <td>{item.staff_id}</td>
                      <td>{item.staff_description}</td>
                      <td>{item.staff_name}</td>
                      <td>{item.staff_department}</td>
                      <td>{item.staff_office}</td>

                      <td
                        className="table__action top-0 right-5 "
                        data-ellipsis=". . ."
                      >
                        {item.staff_is_active === 1 ? (
                          <ul className=" flex items-center  gap-4 bg-">
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="View"
                                // onClick={() => handleEdit(item)}
                              >
                                <FaRegEye />
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
                                data-tooltip="View"
                                // onClick={() => handleEdit(item)}
                              >
                                <FaRegEye />
                              </button>
                            </li>
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
      <div className="loadmore flex justify-center flex-col items-center my-5">
        <Loadmore
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
          result={result?.pages[0]}
          setPage={setPage}
          page={page}
          refView={ref}
        />
      </div>

      {store.isConfirm && (
        <ModalConfirm
          mysqlApiArchive={`/v2/controllers/developer/staff/active.php?staffId=${id}`}
          msg={"Are you sure you want to archive this staff"}
          item={dataItem.staff_id}
          queryKey={"engagement-category"}
        />
      )}

      {store.isRestore && (
        <ModalDeleteAndRestore
          id={id}
          isDel={isDel}
          mysqlApiDelete={`/v2/controllers/developer/staff/staff.php?staffId=${id}`}
          mysqlApiRestore={`/v2/controllers/developer/staff/active.php?staffId=${id}`}
          msg={
            isDel
              ? "Are you sure you want to delete this staff?"
              : "Are you sure you want to restore this staff?"
          }
          item={dataItem.staff_id}
          queryKey={"staff"}
        />
      )}
    </>
  );
};

export default StaffTable;
