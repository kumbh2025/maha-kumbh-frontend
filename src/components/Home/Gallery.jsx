import React, { useState } from 'react';
import { kumbhImages, templeImages, heritageSites } from './ImageData';

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const renderGallerySection = (title, images) => (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-600 mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300 cursor-pointer"
            onClick={() => openModal(image.url)}
          >
            <img
              src={image.url}
              alt={image.place}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex justify-center items-end transition duration-300">
              <p className="text-white text-center font-semibold">{image.place}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-orange-50 text-orange-900 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-orange-500 mb-6 tracking-wide">
          महाकुंभ <span className="text-red-600 underline decoration-red-400">गैलरी</span>
        </h1>
        <div className="border-b-4 border-orange-500 w-128 mx-auto mb-12"></div>
        {/* Render Gallery Sections */}
        {renderGallerySection('कुंभ स्थल', kumbhImages)}
        {renderGallerySection('प्रमुख मंदिर', templeImages)}
        {renderGallerySection('ऐतिहासिक धरोहर', heritageSites)}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-md sm:max-w-xl bg-white p-4 sm:p-6 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage || "https://via.placeholder.com/150?text=Image+Unavailable"}
              alt="Selected"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-gray-200 rounded-full p-1 text-red-900 text-2xl font-semibold transition-transform transform hover:scale-105"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
