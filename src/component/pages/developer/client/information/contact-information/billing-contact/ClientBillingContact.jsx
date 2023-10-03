import React from "react";

const ClientBillingContact = ({ item }) => {
  return (
    <>
      <div className="p-4">
        <ul className="flex flex-col gap-2">
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">ID:</h4>
            <p className="mb-0">
              {item
                ? item.billing_contact_client_id || "Nodata" || "Nodata"
                : "No data"}
            </p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Contact:</h4>
            <p className="mb-0">
              {item ? item.billing_contact_name || "Nodata" : "No data"}
            </p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Title:</h4>
            <p className="mb-0">
              {item ? item.billing_contact_title || "Nodata" : "No data"}
            </p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Company:</h4>
            <p className="mb-0">
              {item ? item.billing_contact_company || "Nodata" : "No data"}
            </p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">File as:</h4>
            <p className="mb-0">
              {item ? item.billing_contact_file_as || "Nodata" : "No data"}
            </p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Business No:</h4>
            <p className="mb-0">
              {item
                ? item.billing_contact_business_number || "Nodata"
                : "No data"}
            </p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Mobile no.:</h4>
            <p className="mb-0">
              {item ? item.billing_contact_home_number || "Nodata" : "No data"}
            </p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Address:</h4>
            <p className="mb-0">
              {item ? item.billing_contact_address || "Nodata" : "No data"}
            </p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Country:</h4>
            <p className="mb-0">
              {item ? item.billing_contact_country || "Nodata" : "No data"}
            </p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Zip:</h4>
            <p className="mb-0">
              {item ? item.primary_contact_zip || "Nodata" : "No data"}
            </p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Email:</h4>
            <p className="mb-0">
              {item ? item.billing_contact_email || "Nodata" : "No data"}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ClientBillingContact;
