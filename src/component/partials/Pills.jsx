import React from "react";

const Pills = ({ tc = "text-success", label = "active" }) => {
  return (
    <span
      className={`${tc} text-sm  text-center rounded-full py-1 px-3 uppercase font-bold`}
    >
      {label}
    </span>
  );
};

export default Pills;
