import React, { useState } from "react";

const UserImagesSection = ({ user }) => {
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

  if (!user.images || user.images.length === 0) {
    return null; // If no images are available, return null (nothing is rendered)
  }

  return (
    <div className="flex flex-col justify-center items-center max-w-7xl mx-auto py-12">
      <h2 className="text-2xl font-semibold text-orange-700 mb-4 text-center">
        आपकी पवित्र स्मृतियां
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {user.images.map((image, index) => (
          <div key={index} className="text-center">
            <img
              src={image || "https://via.placeholder.com/150?text=Image+Unavailable"}
              alt={`User Image ${index + 1}`}
              className="rounded-lg shadow-md w-full h-48 object-cover transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => openModal(image)}
              onError={(e) => (e.target.src = "https://via.placeholder.com/150?text=Image+Unavailable")}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative">
            <img
              src={selectedImage || "https://via.placeholder.com/150?text=Image+Unavailable"}
              alt="Selected"
              className="rounded-lg shadow-md max-w-3xl max-h-80 object-cover transform scale-125 transition-transform"
            />
            <button
              className="absolute top-0 right-0 text-white text-2xl font-semibold p-2"
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

export default UserImagesSection;
