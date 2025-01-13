import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      <div className="flex justify-between items-center py-4 px-4 md:px-10 border-b border-orange-300 bg-gradient-to-r from-yellow-200 via-orange-300 to-red-200 shadow-lg">
        {/* Logo Section */}
        <img
          src="https://res.cloudinary.com/duqxqg7d0/image/upload/v1735564598/kumbh/f5cmfvjdb4mxlrlavkiw.png"
          alt="Logo"
          className="w-16 h-16 md:w-20 md:h-20 rounded-full"
          style={{ animation: "subtle-bounce 2s infinite" }}
        />

        {/* Title Section */}
        <h1 className="text-orange-800 text-2xl md:text-3xl font-bold md:static absolute left-1/2 transform md:transform-none -translate-x-1/2 md:left-auto md:translate-x-0">
          महाकुंभ 2025
        </h1>

        {/* Mobile Menu Toggle */}
        <button
          className="text-orange-600 hover:text-orange-800 md:hidden focus:outline-none"
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

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-orange-50 md:bg-transparent shadow-md md:shadow-none z-50`}
        >
          <ul className="flex flex-col items-center justify-center space-y-4 py-6 md:flex-row md:space-y-0 md:space-x-8">
            {[
              { label: "Home", to: "/" },
              { label: "About Kumbh", to: "/about-kumbh" },
              { label: "Maha Kumbh 2025", to: "/maha-kumbh-2025" },
              { label: "Gallery", to: "/gallery" },
              { label: "About Prayagraj", to: "/about-prayagraj" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  className="text-orange-900 hover:text-orange-600 text-lg font-medium px-4 py-2 transition-all duration-300 hover:underline "
                  to={link.to}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
