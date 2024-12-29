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
    const link = document.createElement("a");
    link.href = image;
    link.download = image.split("/").pop(); // Download image using its file name
    link.click();
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
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal if the dark area is clicked
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside the image area
          >
            <img
              src={selectedImage || "https://via.placeholder.com/150?text=Image+Unavailable"}
              alt="Selected"
              className="rounded-lg shadow-md max-w-3xl max-h-80 object-cover transform scale-125 transition-transform"
            />
            <button
              className="absolute top-2 right-2 text-red-800 text-2xl font-semibold p-2"
              onClick={closeModal} // Close the modal on button click
            >
              ✕
            </button>
            
            {/* Share Buttons */}
            <div className="absolute bottom-2 right-2 space-x-3 flex items-center">
              {/* WhatsApp Share Button */}
              <button
                className="bg-green-500 text-white p-2 rounded-full"
                onClick={() => shareOnWhatsApp(selectedImage)} // Trigger WhatsApp share
              >
                <i className="fab fa-whatsapp text-xl"></i>
              </button>

              {/* Facebook Share Button */}
              <button
                className="bg-blue-600 text-white p-2 rounded-full"
                onClick={() => shareOnFacebook(selectedImage)} // Trigger Facebook share
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </button>

              {/* Download Image Button */}
              <button
                className="bg-gray-700 text-white p-2 rounded-full"
                onClick={() => downloadImage(selectedImage)} // Trigger image download
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
