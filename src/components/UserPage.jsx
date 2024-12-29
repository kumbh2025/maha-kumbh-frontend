import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserPage() {
  const { uniqueName } = useParams();
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // List of Maha Kumbh images with place names
  const kumbhImages = [
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
      <div
        className="relative flex justify-center items-center bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(https://kumbh.gov.in/Content/assets/img/Home/PilgrimageCollage.jpeg)`,
          height: "300px",
        }}
      >
        {/* Overlay for background */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        {user && (
          <div className="relative z-10 text-center">
            <h1 className="text-4xl font-bold">Maha Kumbh 2025!</h1>
            <p className="text-lg mt-2">
              जय गंगा मइया की! 🌼 <br />
              आपका महाकुंभ 2025 में हार्दिक स्वागत है,{" "}
              <span className="font-bold">{user.username} जी</span>! 🌼 <br />
              🙏 हर हर गंगे! 🙏
            </p>
            {user.image && (
              <img
                src={user.image}
                alt={`${user.username}'s Avatar`}
                className="rounded-full w-32 h-32 mx-auto mt-4"
              />
            )}
          </div>
        )}
      </div>

      <div className="flex justify-center items-center mt-10">
        {user ? (
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full text-center">
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                Attractive Places of Sangam
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {kumbhImages.map((image, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={image.url}
                      alt={image.place}
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                    <p className="text-orange-800 font-medium mt-2">
                      {image.place}
                    </p>
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
