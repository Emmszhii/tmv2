import React from "react";
import { getReferralType } from "./functions_client_retention_information";

const ClientRetentionInformation = ({
  item,
  referredType,
  wonReason,
  lostReason,
  lostTo,
}) => {
  return (
    <>
      <div className="p-4">
        <ul className="flex flex-col gap-2">
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Referred Type:</h4>
            <p className="mb-0">
              {item
                ? getReferralType(
                    referredType,
                    item.client_retention_referred_type_id
                  )
                : "No Data"}
            </p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Referred By:</h4>
            <p className="mb-0">
              {item?.client_retention_referred_by_id || "No Data"}
            </p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Won Date: </h4>
            <p className="mb-0">
              {item?.client_retention_won_date || "No Date"}
            </p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Won Reason: </h4>
            <p className="mb-0">
              {item?.client_retention_won_reason_id || "No Data"}
            </p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Lost To: </h4>
            <p className="mb-0">
              {item?.client_retention_lost_to_id || "No Data"}
            </p>
          </li>
          <li className="grid grid-cols-[200px_1fr] items-center">
            <h4 className="mb-0">Lost Reason: </h4>
            <p className="mb-0">
              {item?.client_retention_lost_reason_id || "No Data"}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ClientRetentionInformation;
