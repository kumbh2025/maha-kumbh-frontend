import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserPage() {
  const { uniqueName } = useParams();
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // List of Maha Kumbh images with place names
  const kumbhImages = [
    {
      url: "https://kumbh.gov.in/Content/assets/img/Home/PilgrimageCollage.jpeg",
      place: "पवित्र तीर्थ यात्रा",
    },
    {
      url: "https://kumbh.gov.in/Content/assets/img/Home/LeteHueHanumanji.jpeg",
      place: "लेटे हुए हनुमानजी",
    },
    {
      url: "https://kumbh.gov.in/Content/assets/img/Home/ShankarVimanMandapam.jpeg",
      place: "शंकर विमान मंडपम",
    },
    {
      url: "https://kumbh.gov.in/Content/assets/img/Home/Akshayavat&PatalpuriTemple.jpeg",
      place: "अक्षयवट और पातालपुरी मंदिर",
    },
    {
      url: "https://kumbh.gov.in/Content/assets/img/Attraction2025/RamGhatAarti%20(2).jpg",
      place: "राम घाट आरती",
    },
    {
      url: "https://kumbh.gov.in/Content/assets/img/Home/SaraswatiKoop.jpeg",
      place: "सरस्वती कूप",
    },
    {
      url: "https://kumbh.gov.in/Content/assets/img/Home/TriveniSangam.jpg",
      place: "त्रिवेणी संगम",
    },
  ];

  useEffect(() => {
    // Fetch user data from backend
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

  if (errorMessage) {
    return <div className="text-red-600 text-center mt-10">{errorMessage}</div>;
  }

  return (
    <div className="bg-orange-50 min-h-screen">
      <div className="flex justify-center items-center mt-10">
        {user ? (
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full text-center">
            <h1 className="text-3xl font-bold text-orange-700 mb-4">
              Maha Kumbh 2025!
            </h1>
            <p className="text-orange-700 text-lg mb-4 font-bold">
              जय गंगा मइया की! 🌼 <br />
              <span className="text-orange-900">
                आपका महाकुंभ 2025 में हार्दिक स्वागत है, {user.username} जी! 🌼
              </span>{" "}
              <br />
              गंगा की पावन धारा में डुबकी लगाकर, अपने जीवन को पुण्य, शांति, और
              आध्यात्मिकता से भर दें। <br />
              🙏 हर हर गंगे! 🙏
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
                Attractive Places of Sangam
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {kumbhImages.map((image, index) => (
                  <div key={index} className="text-center">
                    <p className="text-orange-800 font-medium mb-2">
                      {image.place}
                    </p>
                    <img
                      src={image.url}
                      alt={image.place}
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
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
