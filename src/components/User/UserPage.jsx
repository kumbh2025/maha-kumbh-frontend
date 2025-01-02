import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import UserHeroSection from "./UserHeroSection";
import UserImagesSection from "./UserImagesSection";
import ImageGridSection from "./ImageGridSection";
import Footer from "../Footer/Footer";
import DeleteUserForm from "./DeleteUserForm";
import ErrorMessage from "./ErrorMessage";
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
        navigate("/");
      } else {
        setErrorMessage(data.message || "Failed to delete user.");
      }
    } catch (error) {
      setErrorMessage("Error deleting user.");
    }
  };

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />;
  }

  return (
    <div className="bg-orange-50 min-h-screen">
      <Header />
      {user && (
        <>
          <UserHeroSection user={user} />
          <UserImagesSection user={user} />
          <ImageGridSection
            title="Temples and Major Attractions Around Triveni Sangam"
            images={kumbhImages}
          />
          <div className="text-center mt-6">
            {!showDeleteForm ? (
              <button
                onClick={() => setShowDeleteForm(true)}
                className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Delete User
              </button>
            ) : (
              <DeleteUserForm
                onSubmit={handleDeleteUser}
                onCancel={() => setShowDeleteForm(false)}
                password={password}
                setPassword={setPassword}
                errorMessage={errorMessage}
              />
            )}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default UserPage;
