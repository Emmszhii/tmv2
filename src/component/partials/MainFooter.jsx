import React from "react";

const MainFooter = () => {
  return (
    <div className=" p-1 fixed bottom-0 z-20 text-center before:border-t-2 overflow-hidden before:content-[''] before:bg-gray-50 before:z-10 before:absolute before:top-0 before:left-0 before:h-full before:w-screen">
      <p className="text-[10px] leading-none m-0 relative z-30">
        © 2023 All Rights Reserved. | Powered by
        <span className="font-bold text-alert_darker/90">
          {" "}
          Frontline Business Solutions, Inc..
        </span>
      </p>
    </div>
  );
};

export default MainFooter;
