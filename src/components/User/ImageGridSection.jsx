import React from "react";

const ImageGridSection = ({ title, images }) => (
  <div className="mt-10 py-4 px-4 sm:px-8 lg:px-16 border-t-4 border-red-600"> {/* Adjusted padding for responsive spacing */}
    <h2 className="text-2xl font-semibold text-orange-700 mb-6 text-center">{title}</h2> {/* Increased bottom margin */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <div key={index} className="text-center border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <a href={image.map} target="_blank" rel="noopener noreferrer">
            <img
              src={image.url || "https://via.placeholder.com/150?text=Image+Unavailable"}
              alt={image.place}
              className="w-full h-48 object-cover mb-4 transition-transform transform hover:scale-105"
              onError={(e) => (e.target.src = "https://via.placeholder.com/150?text=Image+Unavailable")}
            />
          </a>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-orange-800 mb-2">
              <a href={image.map} target="_blank" rel="noopener noreferrer">{image.place}</a>
            </h3>
            <p className="text-sm text-gray-600 mb-2">{image.description}</p>
            <p className="text-xs text-gray-500 italic">{image.location}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ImageGridSection;
