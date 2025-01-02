import React from "react";

const GeneratedURLSection = ({ generatedURL, uniqueName, password }) => {
  const copyURL = () => {
    navigator.clipboard.writeText(generatedURL);
    alert("URL copied to clipboard!");
  };

  const shareOnWhatsApp = () => {
    const message = `Check out my Maha Kumbh 2025 page: ${generatedURL}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="mt-4 text-center">
      <div className="border-4 border-orange-500 p-4 rounded-lg bg-orange-50 shadow-lg">
        <p className="text-orange-600">Click below to open Your Page 👇</p>
        <a
          href={generatedURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline text-sm sm:text-xs break-all"
        >
          {generatedURL}
        </a>
        <div className="mt-4">
          <p className="text-lg text-orange-700 font-semibold">Unique Name: {uniqueName}</p>
          <p className="text-lg text-orange-700 font-semibold">Password: {password}</p>
        </div>
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={copyURL}
            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
          >
            Copy URL
          </button>
          <button
            onClick={shareOnWhatsApp}
            className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 flex items-center gap-2"
          >
            <i className="fab fa-whatsapp text-xl"></i> Share on WhatsApp
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2">Note: Save this URL to access your page and password for delete.</p>
      </div>
    </div>
  );
};

export default GeneratedURLSection;
