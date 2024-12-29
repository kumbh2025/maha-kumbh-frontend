import React from "react";

const ImageGridSection = ({ title, images }) => (
  <div className="mt-10 px-4 sm:px-8 lg:px-16"> {/* Adjusted padding for responsive spacing */}
    <h2 className="text-2xl font-semibold text-orange-700 mb-6 text-center">{title}</h2> {/* Increased bottom margin */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Increased gap for better spacing between images */}
      {images.map((image, index) => (
        <div key={index} className="text-center">
          <img
            src={image.url || "https://via.placeholder.com/150?text=Image+Unavailable"}
            alt={image.place}
            className="rounded-lg shadow-md w-full h-48 object-cover mb-4 transition-transform transform hover:scale-105"  {/* Added hover scale effect */}
            onError={(e) => (e.target.src = "https://via.placeholder.com/150?text=Image+Unavailable")}
          />
          <p className="text-orange-800 font-medium">{image.place}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ImageGridSection;
