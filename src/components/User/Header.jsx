import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center py-4 px-4 md:px-10 border-b border-orange-300 bg-orange-50">
      {/* Logo and Text Section */}
      <div className="flex items-center">
        {/* Logo */}
        <img
          src="https://kumbh.gov.in/Content/assets/img/logo/kumbh-logo.png"
          alt="Logo"
          className="w-16 h-16 md:w-20 md:h-20 rounded-full mr-4"
        />
        
        {/* Inline Text Section */}
        <div className="text-center">
          <span className="text-orange-600 text-xl font-semibold md:text-2xl">
            Welcome to
          </span>
          <span className="text-red-600 text-xl font-semibold md:text-2xl ml-2">
            Maha Kumbh 2025
          </span>
        </div>
      </div>

      {/* Border Line Below Navbar */}
      <div className="w-full border-b-2 border-gray-600 mt-4"></div>
    </div>
  );
};

export default Header;
