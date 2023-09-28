import React from "react";
import IconNoData from "../svg/IconNoData";

const Nodata = ({ width = 90, height = 110, txtSize = "text-5xl" }) => {
  return (
    <>
      <div className="flex justify-center items-center flex-col p-2">
        <span className={`${txtSize} text-gray-400`}>
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
