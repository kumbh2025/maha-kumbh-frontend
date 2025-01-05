import React from "react";

const SpecialBathDate = ({ occasion, date }) => (
  <div className="bg-gradient-to-r from-yellow-200 via-orange-300 to-red-200 shadow-lg rounded-lg p-4 m-2">
    <p className="text-lg font-extrabold text-orange-800 uppercase tracking-wider">
      {occasion}
    </p>
    <p className="text-xl text-orange-900 font-bold mt-2 bg-white py-1 px-3 rounded-md shadow-sm inline-block">
      {date}
    </p>
  </div>
);

export default SpecialBathDate;
