import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserPage() {
  const { uniqueName } = useParams();
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // List of Maha Kumbh images (update the URLs with the actual addresses)
  const kumbhImages = [
    "https://kumbh.gov.in/Content/assets/img/Home/PilgrimageCollage.jpeg",
    "https://kumbh.gov.in/Content/assets/img/Home/LeteHueHanumanji.jpeg",
    "https://kumbh.gov.in/Content/assets/img/Home/ShankarVimanMandapam.jpeg",
    "https://kumbh.gov.in/Content/assets/img/Home/Akshayavat&PatalpuriTemple.jpeg",
    "https://kumbh.gov.in/Content/assets/img/Attraction2025/RamGhatAarti%20(2).jpg",
    "https://kumbh.gov.in/Content/assets/img/Home/SaraswatiKoop.jpeg",
    "https://kumbh.gov.in/Content/assets/img/Home/TriveniSangam.jpg",
  ];

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
      <div className="flex justify-center items-center mt-10">
        {user ? (
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full text-center">
            <h1 className="text-3xl font-bold text-orange-700 mb-4">
              Welcome to Maha Kumbh 2025!
            </h1>
            <p className="text-orange-600 text-lg mb-2">
              Hello, <strong>{user.username}</strong>!
            </p>
            <p className="text-gray-700 mb-6">
              जय गंगा मइया! महाकुंभ 2025 में आइए और पुण्य की अनंत गंगा में डुबकी लगाइए। आपका स्वागत है।
            </p>
            {/* Display the user's image as a large avatar */}
            {user.image && (
              <img
                src={user.image}
                alt={`${user.username}'s Uploaded`}
                className="rounded-full w-48 h-48 mx-auto mb-4"
              />
            )}
            {/* Display Maha Kumbh Images */}
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                Glimpses of Maha Kumbh
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {kumbhImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Maha Kumbh ${index + 1}`}
                    className="rounded-lg shadow-md w-full h-48 object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default UserPage;
