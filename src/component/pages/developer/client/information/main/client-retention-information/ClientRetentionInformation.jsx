import React from "react";

const ClientRetentionInformation = () => {
  return (
    <>
      <div className="p-4">
        <ul className="flex flex-col gap-2">
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Referred Type:</h4>
            <p className="mb-0"> No data</p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Referred By:</h4>
            <p className="mb-0"> No data</p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Won Date: </h4>
            <p className="mb-0"> No data</p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Won Reason: </h4>
            <p className="mb-0"> No data</p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Lost To: </h4>
            <p className="mb-0"> No data</p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Lost Reason: </h4>
            <p className="mb-0"> No data</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ClientRetentionInformation;
