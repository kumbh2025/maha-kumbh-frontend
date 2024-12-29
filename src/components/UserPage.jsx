import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserPage() {
  const { uniqueName } = useParams();
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Default fallback image
  const fallbackImage =
    "https://via.placeholder.com/150?text=Image+Unavailable";

  // Data arrays for images
  const kumbhImages = [
    { url: "https://kumbh.gov.in/Content/assets/img/Home/LeteHueHanumanji.jpeg", place: "लेटे हुए हनुमानजी" },
    { url: "https://kumbh.gov.in/Content/assets/img/Home/ShankarVimanMandapam.jpeg", place: "शंकर विमान मंडपम" },
    { url: "https://kumbh.gov.in/Content/assets/img/Home/Akshayavat&PatalpuriTemple.jpeg", place: "अक्षयवट और पातालपुरी मंदिर" },
    { url: "https://kumbh.gov.in/Content/assets/img/Attraction2025/RamGhatAarti%20(2).jpg", place: "राम घाट आरती" },
    { url: "https://kumbh.gov.in/Content/assets/img/Home/SaraswatiKoop.jpeg", place: "सरस्वती कूप" },
    { url: "https://kumbh.gov.in/Content/assets/img/Home/TriveniSangam.jpg", place: "त्रिवेणी संगम" },
  ];

  const templeImages = [
    { url: "https://kumbh.gov.in/Content/assets/img/Home/DashashwamedhMandir.jpeg", place: "दशाश्वमेध मंदिर" },
    { url: "https://kumbh.gov.in/Content/assets/img/Home/NagvasukiTemple.jpeg", place: "नागवसूकी मंदिर" },
    { url: "https://kumbh.gov.in/Content/assets/img/Home/AlopshankariTemple.jpeg", place: "आलोपशंकारी मंदिर" },
    { url: "https://kumbh.gov.in/Content/assets/img/Home/MankameshwarTemple.jpeg", place: "मंकामेश्वर मंदिर" },
    { url: "https://kumbh.gov.in/Content/assets/img/Home/TakshakeshwarNath.jpeg", place: "तक्षकेश्वरनाथ मंदिर" },
    { url: "https://kumbh.gov.in/Content/assets/img/Home/VeniMadhav.jpg", place: "वेणी माधव मंदिर" },
    { url: "https://kumbh.gov.in/Content/assets/img/Attraction2025/PadilaMahadevTemple.jpg", place: "पदिला महादेव मंदिर" },
    { url: "https://kumbh.gov.in/Content/assets/img/Home/AkhileshwarMahadev.jpeg", place: "अखिलेश्वर महादेव मंदिर" },
    { url: "https://scontent.fknu1-5.fna.fbcdn.net/v/t39.30808-1/437941599_1479207603000494_2093058718468488530_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_aid=0&_nc_ohc=V-1OzXfJYCQQ7kNvgFVGN6M&_nc_zt=24&_nc_ht=scontent.fknu1-5.fna&oh=00_AYBgzvGxtr9JBmPDJQVTEtQXwJylYwgmygQ46QUdQa_eAQ&oe=6777161C", place: "माँ निमहरा मंदिर" },
  ];

  const heritageSites = [
    { url: "https://kumbh.gov.in/Content/assets/img/Home/AnandBhawan.jpeg", place: "आनंद भवन" },
    { url: "https://kumbh.gov.in/Content/assets/img/Home/LawMuseum.jpeg", place: "कानून संग्रहालय" },
    { url: "https://kumbh.gov.in/Content/assets/img/Home/PrayagSangeetSamiti.jpeg", place: "प्रयाग संगीत समिति" },
    { url: "https://kumbh.gov.in/Content/assets/img/Home/VictoriaMemorial.jpeg", place: "विक्टोरिया मेमोरियल" },
    { url: "https://kumbh.gov.in/Content/assets/img/Attraction2025/Khusrobagh.jpeg", place: "खुसरो बाग" },
    { url: "https://kumbh.gov.in/Content/assets/img/Home/AllahabadFort.jpeg", place: "इलाहाबाद किला" },
    { url: "https://kumbh.gov.in/Content/assets/img/Home/ChandraShekharAzarPark.jpeg", place: "चंद्रशेखर आज़ाद पार्क" },
    { url: "https://kumbh.gov.in/Content/assets/img/about/ShivalyaPark.png", place: "शिवालय पार्क" },
    { url: "https://kumbh.gov.in/Content/assets/img/Home/MahaRishiBhardwajAshram.jpeg", place: "महर्षि भारद्वाज आश्रम" },
    { url: "https://kumbh.gov.in/Content/assets/img/Attraction2025/Cathedral.jpeg", place: "कैथेड्रल" },
    { url: "https://kumbh.gov.in/Content/assets/img/Home/Kalakriti_1.jpeg", place: "कलाकृति 1" },
    { url: "https://kumbh.gov.in/Content/assets/img/Home/Kalakriti_7.jpeg", place: "कलाकृति 2" },
  ];

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

  const renderImageGrid = (title, images) => (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-orange-700 mb-4 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="text-center">
            <img
              src={image.url || fallbackImage}
              alt={image.place}
              className="rounded-lg shadow-md w-full h-48 object-cover"
              onError={(e) => (e.target.src = fallbackImage)}
            />
            <p className="text-orange-800 font-medium mt-2">{image.place}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-orange-50 min-h-screen">
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

      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto py-12">
        {renderImageGrid("कुम्भ स्थल", kumbhImages)}
        {renderImageGrid("मंदिर स्थल", templeImages)}
        {renderImageGrid("सांस्कृतिक और ऐतिहासिक स्थल", heritageSites)}
      </div>
    </div>
  );
}

export default UserPage;
