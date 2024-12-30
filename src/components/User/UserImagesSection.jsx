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

  const shareOnWhatsApp = (image) => {
    const message = `Check out this image: ${image}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const shareOnFacebook = (image) => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(image)}`;
    window.open(facebookUrl, "_blank");
  };

  const downloadImage = (image) => {
    const downloadUrl = image.replace("/upload/", "/upload/fl_attachment/");
    window.open(downloadUrl, "_blank");
  };

  if (!user.images || user.images.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 px-4 sm:px-8 lg:px-16">
      <h2 className="text-2xl font-semibold text-orange-700 mb-6 text-center">
        Maha-Kumbh Memories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {user.images.map((image, index) => (
          <div key={index} className="text-center">
            <img
              src={image || "https://via.placeholder.com/150?text=Image+Unavailable"}
              alt={`User Image ${index + 1}`}
              className="rounded-lg shadow-md w-full h-48 object-cover mb-4 transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => openModal(image)}
              onError={(e) => (e.target.src = "https://via.placeholder.com/150?text=Image+Unavailable")}
            />
          </div>
        ))}
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
            <button
              className="absolute top-2 right-2 bg-gray-200 rounded-full p-1 text-red-900 text-2xl font-semibold"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Share and Download Buttons */}
            <div className="flex justify-between items-center mt-4 space-x-2">
              <button
                className="bg-blue-600 text-white p-2 rounded-full flex-grow"
                onClick={() => shareOnFacebook(selectedImage)}
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </button>
              <button
                className="bg-green-500 text-white p-2 rounded-full flex-grow"
                onClick={() => shareOnWhatsApp(selectedImage)}
              >
                <i className="fab fa-whatsapp text-xl"></i>
              </button>
              <button
                className="bg-gray-700 text-white p-2 rounded-full flex-grow"
                onClick={() => downloadImage(selectedImage)}
              >
                <i className="fas fa-download text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserImagesSection;
