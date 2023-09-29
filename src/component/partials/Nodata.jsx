import React from "react";
import IconNoData from "../svg/IconNoData";

const Nodata = ({ width = 80, height = 80, txtSize = "text-sm" }) => {
  return (
    <>
      <div className="flex justify-center items-center flex-col p-2">
        <span className={`text-gray-400`}>
          <IconNoData width={width} height={height} />
        </span>
        <span className={`font-bold text-gray-300 ${txtSize}`}>
          No Data Found
        </span>
      </div>
    </>
  );
};

export default Nodata;
