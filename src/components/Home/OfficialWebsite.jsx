import React from "react";

const OfficialWebsite = () => {
  const links = [
    {
      href: "https://kumbh.gov.in/",
      text: "Official Website",
    },
    {
      href: "https://kumbhmeladirectory.in/health",
      text: "Hospital Information",
    },
    {
      href: "https://kumbhmeladirectory.in/administration",
      text: "Administration",
    },
    {
      href: "https://kumbhmeladirectory.in/accommodation",
      text: "Accommodation",
    },
    {
      href: "https://wa.me/message/SLKJV36UG2ZCA1?src=qr",
      text: "Kumbh Sah'AI'yak WhatsApp",
    },
  ];

  return (
    <div className="space-y-4 bg-gradient-to-r from-yellow-200 via-orange-300 to-red-200 shadow-xl rounded-lg p-6">
      <h3 className="text-xl font-extrabold text-orange-900 uppercase tracking-wide bg-white shadow-md rounded-md py-3 px-6 text-center">
        Useful Links
      </h3>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-orange-800 hover:text-red-800 underline tracking-wide"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OfficialWebsite;
