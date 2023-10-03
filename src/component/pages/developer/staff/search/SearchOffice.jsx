import React from "react";
import { InputSearch } from "../../../../helpers/FormInputs";
import { handleClick, handleSearch } from "./functions-staff-search";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import Nodata from "../../../../partials/Nodata";
import TableSpinner from "../../../../partials/spinners/TableSpinner";

const SearchOffice = ({
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
            e.target.value
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
        <ul className="absolute z-50 h-36 overflow-y-auto top-16 w-full bg-white shadow-3xl rounded-md border border-gray-200">
          {loading ? (
            <div className=" p-2 w-full text-center bg-gray-100  focus:bg-gray-200 border-b border-gray-200">
              <TableSpinner />
            </div>
          ) : data.length > 0 ? (
            data.map((item, key) => (
              <button
                type="button"
                className="p-1 w-full text-left hover:bg-gray-200 focus:bg-gray-200 cursor-pointer duration-200"
                key={key}
                onClick={() =>
                  handleClick(
                    `${item.settings_office_name}`,
                    item.settings_office_aid,
                    setSearch,
                    setIsSearch,
                    setId
                  )
                }
              >
                {item.settings_office_name}
              </button>
            ))
          ) : (
            <li className=" p-2 w-full text-center focus:bg-gray-200 border-b border-gray-200">
              <Nodata width="60" height="80" txtSize="text-xl" />
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default SearchOffice;
