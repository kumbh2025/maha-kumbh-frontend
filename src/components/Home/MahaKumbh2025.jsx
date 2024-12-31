import React, { useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import places from './places'; // Import the places data

const MahaKumbh2025 = () => {
  const [imageSrc, setImageSrc] = useState(
    "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735564509/kumbh/cmwozjanbkgiignyntkt.jpg"
  );

  return (
    <div className="bg-orange-50 text-orange-900 min-h-screen">
      <Navbar />
      <div className="px-1 sm:px-1 lg:px-12 py-6 md:py-8">
        <img
          src={imageSrc}
          alt="Kumbh Mela 2025"
          className="w-full object-cover h-96"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-orange-600 mb-8 border-b-4 border-orange-500 py-4 tracking-wide">
          महाकुंभ 2025
        </h1>
        <div className="lg:p-8 p-4 space-y-8">
          <p className="text-lg md:text-xl leading-relaxed">
            प्रयागराज, जहां गंगा, यमुना और सरस्वती नदियों का संगम होता है, 2025 में होने वाले महाकुंभ मेले का मुख्य स्थल है। यह धार्मिक और ऐतिहासिक दृष्टि से अत्यंत महत्वपूर्ण है। त्रिवेणी संगम इसकी सबसे पवित्र जगह है।
          </p>

          {/* प्रयागराज की खासियतें */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-700 border-b-2 border-orange-400 pb-2 mb-6">
              प्रयागराज की खासियतें
            </h2>
            <ul className="list-disc list-inside space-y-4 text-lg md:text-xl">
              <li>
                <strong>मंदिर:</strong> हनुमान मंदिर, अलोपी देवी मंदिर, और मनकामेश्वर मंदिर जैसे ऐतिहासिक मंदिर।
              </li>
              <li>
                <strong>ऐतिहासिक धरोहर:</strong> अशोक स्तंभ और अन्य प्राचीन स्मारक।
              </li>
              <li>
                <strong>औपनिवेशिक स्थापत्य:</strong> इलाहाबाद विश्वविद्यालय और स्वराज भवन जैसी इमारतें।
              </li>
              <li>
                <strong>संस्कृति और कला:</strong> स्थानीय कला, संस्कृति और व्यंजनों का आनंद।
              </li>
              <li>
                <strong>शैक्षिक संस्थान:</strong> इलाहाबाद विश्वविद्यालय, जिसे "पूर्व का ऑक्सफोर्ड" कहा जाता है।
              </li>
            </ul>
          </section>

          {/* महाकुंभ 2025 के प्रमुख आकर्षण */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-700 border-b-2 border-orange-400 pb-2 mb-6">
              महाकुंभ 2025 के प्रमुख आकर्षण
            </h2>
            <ul className="space-y-6">
              {places.map((place, index) => (
                <li
                  key={index}
                  className="flex flex-col md:flex-row items-center bg-gray-100 p-4 rounded-lg shadow-md space-y-4 md:space-y-0 md:space-x-6"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-orange-800">{index+1}. {place.title}</h3>
                    <p className="text-lg text-gray-700 mt-2">{place.description}</p>
                  </div>
                  <img
                    src={place.imageUrl}
                    alt={place.title}
                    className="w-full md:w-32 md:h-32 rounded-lg object-cover"
                  />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MahaKumbh2025;
