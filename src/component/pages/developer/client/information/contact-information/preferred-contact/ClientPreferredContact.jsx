import React from "react";

const ClientPreferredContact = ({ item }) => {
  return (
    <>
      <div className="p-4">
        <ul className="flex flex-col gap-2">
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">ID:</h4>
            <p className="mb-0">{item.preferred_contact_client_id}</p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Contact:</h4>
            <p className="mb-0">{item.preferred_contact_name || "No data"}</p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Title:</h4>
            <p className="mb-0">{item.preferred_contact_title || "No data"}</p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Company:</h4>
            <p className="mb-0">
              {item.preferred_contact_company || "No data"}
            </p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">File as:</h4>
            <p className="mb-0">
              {item.preferred_contact_file_as || "No data"}
            </p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Business No:</h4>
            <p className="mb-0">
              {item.preferred_contact_business_number || "No data"}
            </p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Mobile no.:</h4>
            <p className="mb-0">
              {item.primary_contact_home_number || "No data"}
            </p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Address:</h4>
            <p className="mb-0">
              {item.preferred_contact_address || "No data"}
            </p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Country:</h4>
            <p className="mb-0">
              {item.preferred_contact_country || "No data"}
            </p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Zip:</h4>
            <p className="mb-0">{item.preferred_contact_zip || "No data"}</p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Email:</h4>
            <p className="mb-0">{item.preferred_contact_email || "No data"}</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ClientPreferredContact;
