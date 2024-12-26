import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-10 border-b border-orange-300 bg-orange-50">
      <img
        src="https://kumbh.gov.in/Content/assets/img/logo/kumbh-logo.png"
        alt="Logo"
        className="w-20 h-20 rounded-full mr-4"
      />
      <nav className="flex space-x-8">
        <a className="text-orange-600 hover:text-orange-800 text-lg font-medium" href="#home">
          Home
        </a>
        <a className="text-orange-600 hover:text-orange-800 text-lg font-medium" href="#about-kumbh">
          About Kumbh
        </a>
        <a className="text-orange-600 hover:text-orange-800 text-lg font-medium" href="#maha-kumbh-2025">
          Maha Kumbh 2025
        </a>
        <a className="text-orange-600 hover:text-orange-800 text-lg font-medium" href="#travel-stay">
          Travel & Stay
        </a>
        <a className="text-orange-600 hover:text-orange-800 text-lg font-medium" href="#gallery">
          Gallery
        </a>
        <a className="text-orange-600 hover:text-orange-800 text-lg font-medium" href="#about-prayagraj">
          About Prayagraj
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
