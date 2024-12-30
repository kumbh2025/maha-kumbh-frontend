import React, { useState } from 'react';
import places from './places'; // Import the places data

const MahaKumbh2025 = () => {
  const [imageSrc, setImageSrc] = useState(
    "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735564509/kumbh/cmwozjanbkgiignyntkt.jpg"
  );

  return (
    <div className="bg-orange-50 text-orange-900 py-8 px-4 md:px-12 min-h-screen">
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg bg-white overflow-hidden">
        <img
          src={imageSrc}
          alt="Kumbh Mela 2025"
          className="w-full h-auto"
        />
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 border-b-4 border-orange-500 py-4">
          महाकुंभ 2025
        </h1>
        <div className="p-6 space-y-6">
          <p className="text-lg md:text-xl leading-relaxed">
            प्रयागराज, जहां गंगा, यमुना और सरस्वती नदियों का संगम होता है, 2025 में होने वाले महाकुंभ मेले का मुख्य स्थल है। यह धार्मिक और ऐतिहासिक दृष्टि से अत्यंत महत्वपूर्ण है। त्रिवेणी संगम इसकी सबसे पवित्र जगह है।
          </p>

          {/* Section for प्रयागराज की खासियतें */}
          <h2 className="text-2xl md:text-3xl font-semibold text-orange-700 border-b-2 border-orange-400 pb-2 mb-4">
            प्रयागराज की खासियतें
          </h2>
          <ul className="list-inside space-y-4 text-lg md:text-xl">
            <li className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                <strong className="font-semibold">मंदिर :</strong> 
                हनुमान मंदिर, अलोपी देवी मंदिर, और मनकामेश्वर मंदिर जैसे ऐतिहासिक मंदिर।
            </li>
            <li className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                <strong className="font-semibold">ऐतिहासिक धरोहर :</strong> 
                अशोक स्तंभ और अन्य प्राचीन स्मारक।
            </li>
            <li className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                <strong className="font-semibold">औपनिवेशिक स्थापत्य :</strong>
                इलाहाबाद विश्वविद्यालय और स्वराज भवन जैसी इमारतें।
            </li>
            <li className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                <strong className="font-semibold">संस्कृति और कला :</strong>
                स्थानीय कला, संस्कृति और व्यंजनों का आनंद।
            </li>
            <li className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                <strong className="font-semibold">शैक्षिक संस्थान :</strong>
                इलाहाबाद विश्वविद्यालय, जिसे "पूर्व का ऑक्सफोर्ड" कहा जाता है।
            </li>
            </ul>

          {/* Section for महाकुंभ 2025 के प्रमुख आकर्षण */}
          <h2 className="text-2xl md:text-3xl font-semibold text-orange-700 border-b-2 border-orange-400 pb-2 mt-8">
            महाकुंभ 2025 के प्रमुख आकर्षण
          </h2>
          <ul className="list-decimal list-inside space-y-4 text-lg md:text-xl">
            {places.map((place, index) => (
              <li key={index} className="space-y-2 bg-gray-100 p-1 rounded-lg shadow-md">
                <div className="flex items-center space-x-6">
                  {/* Title and description on the left */}
                  <div className="flex-1">
                    <strong className="text-xl font-semibold">{place.title}</strong>
                    <p className="text-lg">{place.description}</p>
                  </div>
                  {/* Image on the right */}
                  <img
                    src={place.imageUrl}
                    alt={place.title}
                    className="w-32 h-32 rounded-lg object-cover"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MahaKumbh2025;
