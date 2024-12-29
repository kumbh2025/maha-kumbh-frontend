import React from "react";

const ImageGridSection = ({ title, images }) => (
  <div className="mt-10">
    <h2 className="text-2xl font-semibold text-orange-700 mb-4 text-center">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="text-center">
          <img
            src={image.url || "https://via.placeholder.com/150?text=Image+Unavailable"}
            alt={image.place}
            className="rounded-lg shadow-md w-full h-48 object-cover"
            onError={(e) => (e.target.src = "https://via.placeholder.com/150?text=Image+Unavailable")}
          />
          <p className="text-orange-800 font-medium mt-2">{image.place}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ImageGridSection;
