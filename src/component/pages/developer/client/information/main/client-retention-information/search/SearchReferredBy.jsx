import { InputSearch } from "../../../../../../../helpers/FormInputs";
import Nodata from "../../../../../../../partials/Nodata";
import ButtonSpinner from "../../../../../../../partials/spinners/ButtonSpinner";
import FetchingSpinner from "../../../../../../../partials/spinners/FetchingSpinner";
import { handleClick, handleSearch } from "./functions-client-retention-search";

const SearchReferredBy = ({
  label,
  name,
  disabled,
  endpoint,
  setSearch,
  setIsSearch,
  handleSearchModal,
  setLoading,
  setData,
  search,
  isSearch,
  loading,
  data,
  setId,
  referralByTpe,
}) => {
  return (
    <>
      <InputSearch
        label={label}
        type="text"
        disabled={disabled}
        name={name}
        onChange={(e) =>
          handleSearch(
            e,
            setSearch,
            setIsSearch,
            setLoading,
            endpoint,
            setData,
            referralByTpe
          )
        }
        value={search}
        placeholder="Search..."
        onClick={() => handleSearchModal()}
      />

      {isSearch && loading && (
        <span className="absolute top-1/2 right-0 -translate-x-1/2 mr-2">
          <ButtonSpinner color="stroke-primary" />
        </span>
      )}

      {isSearch && (
        <ul className="custom__scroll absolute z-50 h-40 max-h-40 overflow-y-auto top-16 w-full bg-gray-100 shadow-3xl rounded-md">
          {loading ? (
            <li className=" p-2 w-full text-center bg-gray-100  focus:bg-gray-200 ">
              <FetchingSpinner />
            </li>
          ) : data.length > 0 ? (
            data.map((item, key) => (
              <button
                type="button"
                className="p-2 w-full text-left bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 cursor-pointer duration-200 "
                key={key}
                onClick={() =>
                  handleClick(
                    `${item.name}`,
                    item.id,
                    setSearch,
                    setIsSearch,
                    setId
                  )
                }
              >
                {item.name}
              </button>
            ))
          ) : (
            <li className="w-full h-full flex items-center justify-center text-center bg-gray-100  focus:bg-gray-200">
              <Nodata width={50} height={50} txtSize="text-sm" />
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default SearchReferredBy;
