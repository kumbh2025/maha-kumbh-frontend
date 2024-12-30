import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from './Header';
import UserHeroSection from "./UserHeroSection";
import UserImagesSection from "./UserImagesSection";
import ImageGridSection from "./ImageGridSection";
import { kumbhImages } from "./ImageData";

function UserPage() {
  const { uniqueName } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://maha-kumbh-backned.onrender.com/api/user/${uniqueName}`
        );
        const data = await response.json();

        if (response.ok) {
          setUser(data);
          setErrorMessage("");
        } else {
          setErrorMessage(data.message);
        }
      } catch (error) {
        setErrorMessage("Error fetching user data");
      }
    };

    if (uniqueName) {
      fetchUser();
    }
  }, [uniqueName]);

  const handleDeleteUser = async (e) => {
    e.preventDefault();

    // Validate password length
    if (password.length !== 4) {
      setErrorMessage("Password must be exactly 4 digits.");
      return;
    }

    try {
      const response = await fetch(`https://maha-kumbh-backned.onrender.com/api/deleteUser`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uniqueName, password }),
      });
      const data = await response.json();

      if (response.ok) {
        alert("User deleted successfully!");
        navigate("/"); // Redirect to home page after deletion
      } else {
        setErrorMessage(data.message || "Failed to delete user.");
      }
    } catch (error) {
      setErrorMessage("Error deleting user.");
    }
  };

  if (errorMessage) {
    return <div className="text-red-600 text-center mt-10">{errorMessage}</div>;
  }

  return (
    <div className="bg-orange-50 min-h-screen">
      <Header />
      {user && (
        <>
          <UserHeroSection user={user} />
          <UserImagesSection user={user} />
          <ImageGridSection title="कुम्भ स्थल" images={kumbhImages} />

          {/* Delete User Button */}
          <div className="text-center mt-6">
            {!showDeleteForm && (
              <button
                onClick={() => setShowDeleteForm(true)}
                className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Delete User
              </button>
            )}

            {showDeleteForm && (
              <form
                onSubmit={handleDeleteUser}
                className="mt-4 p-6 border rounded-lg bg-white max-w-sm mx-auto shadow-lg"
              >
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="password">
                    Enter your password to confirm:
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-red-600"
                    required
                  />
                </div>
                {errorMessage && (
                  <div className="text-red-600 text-center mb-4">{errorMessage}</div>
                )}
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition-all duration-300"
                  >
                    Confirm Delete
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowDeleteForm(false)}
                    className="bg-gray-300 text-black py-2 px-4 rounded-full hover:bg-gray-400 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default UserPage;
