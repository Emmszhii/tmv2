import React from "react";

const RecordCountZipCodeFinder = ({ record }) => {
  return (
    <footer className="py-1 flex justify-between">
      <div className="flex gap-2">
        <ul className="flex gap-2 text-xs  relative after:content-['|'] top-0 right-0 opacity-70">
          <li>Record:</li>
          <li>{record}</li>
        </ul>
      </div>
    </footer>
  );
};

export default RecordCountZipCodeFinder;
