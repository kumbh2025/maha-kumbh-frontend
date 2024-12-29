import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserPage() {
  const { uniqueName } = useParams();
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const fallbackImage = "https://via.placeholder.com/150?text=Image+Unavailable";

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

  if (errorMessage) {
    return <div className="text-red-600 text-center mt-10">{errorMessage}</div>;
  }

  return (
    <div className="bg-orange-50 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative flex justify-center items-center bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(https://kumbh.gov.in/Content/assets/img/about/AttractionsHomeBg.png)`,
          height: "300px",
        }}
      >
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
          </div>
        )}
      </div>

      {/* User Images Section */}
      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto py-12">
        <h2 className="text-2xl font-semibold text-orange-700 mb-4 text-center">
          आपके द्वारा अपलोड की गई छवियां
        </h2>
        {user && user.images && user.images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {user.images.map((image, index) => (
              <div key={index} className="text-center">
                <img
                  src={image || fallbackImage}
                  alt={`User Image ${index + 1}`}
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                  onError={(e) => (e.target.src = fallbackImage)}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-orange-600 mt-4">
            कोई छवि उपलब्ध नहीं है।
          </p>
        )}
      </div>
    </div>
  );
}

export default UserPage;
