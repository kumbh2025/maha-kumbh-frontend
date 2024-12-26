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
        const response = await fetch(`http://localhost:5000/api/user/${uniqueName}`);
        const data = await response.json();

        if (response.ok) {
          setUser(data);
          setErrorMessage('');
        } else {
          setErrorMessage(data.message);
        }
      } catch (error) {
        setErrorMessage('Error fetching user data');
      }
    };

    if (uniqueName) {
      fetchUser();
    }
  }, [uniqueName]);

  if (errorMessage) {
    return <div>{errorMessage}</div>;
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
              Your personalized page has been created. Enjoy the festivities and the divine experience of Maha Kumbh 2025.
            </p>
            <button
              onClick={() => window.history.back()}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Go Back
            </button>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default UserPage;
