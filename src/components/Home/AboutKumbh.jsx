import React from 'react';

const AboutKumbh = () => {
  return (
    <div className="bg-orange-50 text-orange-900 py-8 px-4 md:px-12 min-h-screen">
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg bg-white overflow-hidden">
        <img 
          src="https://res.cloudinary.com/duqxqg7d0/image/upload/v1735564509/kumbh/cmwozjanbkgiignyntkt.jpg" 
          alt="Kumbh Mela Introduction" 
          className="w-full h-auto"
        />
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 border-b-4 border-orange-500 py-4">
          Introduction
        </h1>
        <div className="p-6 space-y-6">
          <p className="text-lg md:text-xl leading-relaxed">
            महाकुंभ मेला, जिसे "पवित्र कलश का उत्सव" भी कहा जाता है, हिंदू धर्म की पौराणिक कथाओं में गहराई से जुड़ा हुआ है। 
            यह दुनिया का सबसे बड़ा सार्वजनिक आयोजन और सामूहिक आस्था का प्रतीक है। 
            इस भव्य आयोजन में संन्यासी, संत, साधु-साध्वी, कल्पवासी, और विभिन्न क्षेत्रों से आने वाले तीर्थयात्री शामिल होते हैं।
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            कुंभ मेला हर 12 वर्षों में चार स्थानों पर आयोजित किया जाता है। ये स्थान भारत के चार पवित्र नदियों के किनारे स्थित हैं:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg md:text-xl">
            <li>हरिद्वार, उत्तराखंड - गंगा नदी के तट पर</li>
            <li>उज्जैन, मध्य प्रदेश - शिप्रा नदी के किनारे</li>
            <li>नासिक, महाराष्ट्र - गोदावरी नदी के किनारे</li>
            <li>प्रयागराज, उत्तर प्रदेश - गंगा, यमुना और अदृश्य सरस्वती के संगम पर</li>
          </ul>
          <blockquote className="border-l-4 border-orange-400 pl-4 italic text-orange-700">
            "असत्य से सत्य की ओर, अंधकार से प्रकाश की ओर, मृत्यु से अमरत्व की ओर"
          </blockquote>
          <p className="text-lg md:text-xl leading-relaxed">
            कुंभ मेला खगोलीय घटनाओं पर आधारित है। यह तब आयोजित किया जाता है जब सूर्य, चंद्रमा और बृहस्पति 
            एक विशेष स्थिति में होते हैं, जिसे हिंदू धर्म में सबसे पवित्र समय माना जाता है। यह आयोजन खगोलशास्त्र, 
            ज्योतिष, आध्यात्मिकता, परंपरागत अनुष्ठानों और सामाजिक-सांस्कृतिक प्रथाओं का समृद्ध मिश्रण है।
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            कुंभ मेले में साधु-संतों की परंपरागत शोभायात्रा ‘पेशवाई’, नागा साधुओं द्वारा शाही स्नान के दौरान प्रदर्शन, 
            और कई सांस्कृतिक गतिविधियां होती हैं। नागा साधु, जो कठोर तपस्या और आध्यात्मिक अनुशासन का पालन करते हैं, 
            इस मेले में अपने विशेष अनुष्ठानों के लिए प्रसिद्ध हैं।
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            इस मेले का उद्देश्य न केवल धार्मिक आस्था को सशक्त बनाना है, बल्कि यह लोगों को आत्मज्ञान, शांति, 
            और अपने धर्म और संस्कृति से जुड़ने का भी अवसर प्रदान करता है। महाकुंभ मेला 2025 में प्रयागराज में 
            आयोजित होने वाला है, जहां करोड़ों श्रद्धालु इस पवित्र संगम पर अपनी आस्था व्यक्त करेंगे।
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutKumbh;
