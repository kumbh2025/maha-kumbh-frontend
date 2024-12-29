import React from "react";

const UserImagesSection = ({ user }) => {
  if (!user.images || user.images.length === 0) {
    return null; // If no images are available, return null (nothing is rendered)
  }

  return (
    <div className="flex flex-col justify-center items-center max-w-7xl mx-auto py-12">
      <h2 className="text-2xl font-semibold text-orange-700 mb-4 text-center">
        आपकी पवित्र स्मृतियां
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {user.images.map((image, index) => (
          <div key={index} className="text-center">
            <img
              src={image || "https://via.placeholder.com/150?text=Image+Unavailable"}
              alt={`User Image ${index + 1}`}
              className="rounded-lg shadow-md w-full h-48 object-cover"
              onError={(e) => (e.target.src = "https://via.placeholder.com/150?text=Image+Unavailable")}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserImagesSection;
