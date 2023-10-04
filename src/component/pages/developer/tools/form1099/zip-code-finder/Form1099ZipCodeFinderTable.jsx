import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { useInView } from "react-intersection-observer";
import { StoreContext } from "../../../../../../store/StoreContext";
import { queryDataInfinite } from "../../../../../helpers/queryDataInfinite";
import Loadmore from "../../../../../partials/Loadmore";
import Nodata from "../../../../../partials/Nodata";
import Searchbar from "../../../../../partials/Searchbar";
import ServerError from "../../../../../partials/ServerError";
import TableLoading from "../../../../../partials/TableLoading";
import TableSpinner from "../../../../../partials/spinners/TableSpinner";
import RecordCountZipCodeFinder from "./RecordCountZipCodeFinder";

const Form1099ZipCodeFinderTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  //   const [dataItem, setData] = React.useState(null);
  //   const [id, setId] = React.useState(null);
  //   const [isDel, setDel] = React.useState(false);

  const [page, setPage] = React.useState(1);
  const search = React.useRef(null);
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
    queryKey: ["tools-form1099", store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `/v2/controllers/developer/tools/form1099/zip-code-finder/search.php`, // search endpoint
        `/v2/controllers/developer/tools/form1099/zip-code-finder/page.php?start=${pageParam}`, // list endpoint // list endpoint
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

  // const { data: form1099 } = useQueryData(
  //   `/v2/controllers/developer/tools/form1099/zip-code-finder/read.php`,
  //   "get",
  //   "tools-form1099"
  // );

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <Searchbar
        search={search}
        dispatch={dispatch}
        store={store}
        result={result?.pages}
        isFetching={isFetching}
      />
      <RecordCountZipCodeFinder
        record={
          store.isSearch ? result?.pages[0].count : result?.pages[0].total
        }
      />
      <div className="table__wrapper relative rounded-md shadow-md overflow-auto mb-8">
        {isFetching && status !== "loading" && <TableSpinner />}

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>State Name</th>
              <th>Zip</th>
              <th>City</th>
              <th>State ID</th>
              <th>Physical Delivery</th>
              <th>Locale Name</th>
              <th>Physical Zip</th>
              <th>Physical Zip 4</th>
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
                      <td>{item.zipcode_state_name}</td>
                      <td>{item.zipcode_zip}</td>
                      <td>{item.zipcode_city}</td>
                      <td>{item.zipcode_state_id}</td>
                      <td>{item.zipcode_physical_delivery}</td>
                      <td>{item.zipcode_locale_name}</td>
                      <td>{item.zipcode_physical_zip}</td>
                      <td>{item.zipcode_physical_zip_4}</td>
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
    </>
  );
};

export default Form1099ZipCodeFinderTable;
