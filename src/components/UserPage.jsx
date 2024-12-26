import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

function UserPage() {
  const { uniqueName } = useParams();
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Fetch user data from backend
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://maha-kumbh-backned.onrender.com/api/user/${uniqueName}`);
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

  if (errorMessage) {
    return <div className="text-red-600 text-center mt-10">{errorMessage}</div>;
  }

  return (
    <div className="bg-orange-50 min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center mt-10">
        {user ? (
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full text-center">
            <h1 className="text-3xl font-bold text-orange-700 mb-4">
              Welcome to Maha Kumbh 2024!
            </h1>
            <p className="text-orange-600 text-lg mb-2">
              Hello, <strong>{user.username}</strong>!
            </p>
            <p className="text-gray-700 mb-6">
              Your personalized page has been created. Enjoy the festivities and the divine experience of Maha Kumbh 2024.
            </p>
            {/* Display the user's image as a large avatar */}
            {user.image && (
              <img
                src={user.image}
                alt={`${user.username}'s Uploaded`}
                className="rounded-full w-48 h-48 mx-auto mb-4" // Larger avatar size
              />
            )}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default UserPage;
