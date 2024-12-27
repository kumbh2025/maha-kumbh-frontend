import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center py-4 px-4 md:px-10 border-b border-orange-300 bg-orange-50">
      <img
        src="https://kumbh.gov.in/Content/assets/img/logo/kumbh-logo.png"
        alt="Logo"
        className="w-16 h-16 md:w-20 md:h-20 rounded-full mr-4"
      />
      <button
        className="text-orange-600 hover:text-orange-800 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex space-x-0 md:space-x-8 flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-orange-50 md:bg-transparent shadow-md md:shadow-none z-50`}
      >
        <a
          className="text-orange-600 hover:text-orange-800 text-lg font-medium px-4 py-2 md:px-0 md:py-0"
          href="#home"
        >
          Home
        </a>
        <a
          className="text-orange-600 hover:text-orange-800 text-lg font-medium px-4 py-2 md:px-0 md:py-0"
          href="#about-kumbh"
        >
          About Kumbh
        </a>
        <a
          className="text-orange-600 hover:text-orange-800 text-lg font-medium px-4 py-2 md:px-0 md:py-0"
          href="#maha-kumbh-2025"
        >
          Maha Kumbh 2025
        </a>
        <a
          className="text-orange-600 hover:text-orange-800 text-lg font-medium px-4 py-2 md:px-0 md:py-0"
          href="#travel-stay"
        >
          Travel & Stay
        </a>
        <a
          className="text-orange-600 hover:text-orange-800 text-lg font-medium px-4 py-2 md:px-0 md:py-0"
          href="#gallery"
        >
          Gallery
        </a>
        <a
          className="text-orange-600 hover:text-orange-800 text-lg font-medium px-4 py-2 md:px-0 md:py-0"
          href="#about-prayagraj"
        >
          About Prayagraj
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
