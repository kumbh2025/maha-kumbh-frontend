import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-200 via-orange-300 to-red-200 py-6 border-t border-orange-300 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">
          Thank you for using our website!
        </p>
        <p className="mt-2 text-md">
          For any queries, feel free to contact us at:{" "}
          <a
            href="mailto:kumbh2025mela@gmail.com"
            className="text-orange-800 font-medium underline hover:text-orange-600"
          >
            kumbh2025mela@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
