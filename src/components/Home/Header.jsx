import React from "react";

const Header = ({ userCount }) => (
  <div className="text-center mt-4">
    <h1 className="text-2xl font-bold text-orange-800">
      Welcome to Maha Kumbh 2025
    </h1>
    <p className="text-lg mt-2 text-orange-700">
      Currently Registered Users:{" "}
      <span className="font-bold">
        {userCount === 0 ? "Loading..." : userCount}
      </span>
    </p>
  </div>
);

export default Header;
