import React from "react";

const ClientIndividual = ({ item }) => {
  return (
    <>
      <div className="p-4">
        <ul className="flex flex-col gap-2">
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">First Name:</h4>
            <p className="mb-0">
              {item.client_individual_first_name
                ? item.client_individual_first_name
                : "No data"}
            </p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Last Name:</h4>
            <p className="mb-0">
              {item.client_individual_last_name
                ? item.client_individual_last_name
                : "No data"}
            </p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Date of Birth: </h4>
            <p className="mb-0">
              {item.client_individual_date_of_birth
                ? item.client_individual_date_of_birth
                : "No data"}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ClientIndividual;
