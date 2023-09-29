import React from "react";
import { getUrlParam } from "../../../../../../helpers/functions-general";
import useQueryData from "../../../../../../custom-hooks/useQueryData";

const ClientIdentification = ({ item }) => {
  return (
    <>
      <div className="p-4">
        <ul className="flex flex-col gap-2">
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0 ">Logo</h4>
            <img
              src="https://placehold.jp/80x80.png"
              alt=""
              className="rounded-md"
            />
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">ID:</h4>
            <p className="mb-0">{item.client_client_id}</p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">ID:</h4>
            <p className="mb-0">{item.client_client_id}</p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Description:</h4>
            <p className="mb-0">{item.client_description || "No data"}</p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">EIN/SSN:</h4>
            <p className="mb-0">{item.client_ein_ssn || "No data"}</p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Name 1:</h4>
            <p className="mb-0">{item.client_name || "No data"}</p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Name 2:</h4>
            <p className="mb-0">{item.client_name_2 || "No data"}</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ClientIdentification;
