import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
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

  const shareOnWhatsApp = (image) => {
    const message = `Check out this image: ${image}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const shareOnFacebook = (image) => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(image)}`;
    window.open(facebookUrl, '_blank');
  };

  const downloadImage = (image) => {
    const downloadUrl = image.replace('/upload/', '/upload/fl_attachment/');
    window.open(downloadUrl, '_blank');
  };

  const renderGallerySection = (title, images) => (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-700 mb-8 tracking-tight">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative shadow-md rounded-lg overflow-hidden group cursor-pointer transform transition duration-300 hover:scale-105"
            onClick={() => openModal(image.url)}
          >
            <img
              src={image.url}
              alt={image.place}
              className="w-full h-64 object-cover rounded-lg group-hover:opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-semibold">{image.place}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-orange-50 text-orange-900 min-h-screen">
      <Navbar />
      <div className="px-6 sm:px-8 lg:px-16 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center text-orange-500 mb-8 tracking-wide">
            महाकुंभ <span className="text-red-600 underline decoration-red-400">गैलरी</span>
          </h1>
          <div className="border-b-4 border-orange-500 w-32 mx-auto mb-12"></div>
          {renderGallerySection('कुंभ स्थल', kumbhImages)}
          {renderGallerySection('प्रमुख मंदिर', templeImages)}
          {renderGallerySection('ऐतिहासिक धरोहर', heritageSites)}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 m-2"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden "
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage || "https://via.placeholder.com/150?text=Image+Unavailable"}
              alt="Selected"
              className="w-full h-96 object-cover p-2"
            />
            <button
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 text-2xl font-bold hover:bg-red-700"
              onClick={closeModal}
            >
              ✕
            </button>
            <div className="p-4 flex justify-between items-center space-x-4">
              <button
                className="flex-grow bg-blue-600 text-white p-3 rounded-lg transition hover:bg-blue-700"
                onClick={() => shareOnFacebook(selectedImage)}
              >
                <i className="fab fa-facebook-f"></i> 
              </button>
              <button
                className="flex-grow bg-green-500 text-white p-3 rounded-lg transition hover:bg-green-600"
                onClick={() => shareOnWhatsApp(selectedImage)}
              >
                <i className="fab fa-whatsapp"></i> 
              </button>
              <button
                className="flex-grow bg-gray-800 text-white p-3 rounded-lg transition hover:bg-gray-900"
                onClick={() => downloadImage(selectedImage)}
              >
                <i className="fas fa-download"></i> 
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Gallery;
