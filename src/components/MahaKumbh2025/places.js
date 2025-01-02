const places = [
    {
      title: "श्री लेटे हुए हनुमानजी मंदिर",
      description:
        "दारागंज, गंगा किनारे स्थित यह मंदिर संकटमोचन हनुमानजी को समर्पित है। यहां शिव-पार्वती, गणेश, दुर्गा और नवग्रह की मूर्तियां भी हैं। पास में श्री राम-जानकी और हरितमाधव मंदिर भी हैं।",
      imageUrl: "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735564612/kumbh/ud5xemoapdhfmrvylzcr.jpg",
    },
    {
      title: "अक्षयवट और पातालपुरी मंदिर",
      description:
        "अक्षयवट एक अजर-अमर बरगद का पेड़ है, जिसका उल्लेख रामायण और इतिहासकारों द्वारा हुआ है। पातालपुरी मंदिर, वेदकालीन भूमिगत मंदिर, इलाहाबाद किले के पास स्थित है।",
      imageUrl: "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735564438/kumbh/n2m5huv3kcfqjva3wwg7.jpg",
    },
    {
      title: "सरस्वती कूप",
      description:
        "यह पवित्र कुआं, सरस्वती नदी का स्रोत माना जाता है। महाकुंभ 2025 में इसका जीर्णोद्धार, आध्यात्मिक महत्व बढ़ाने हेतु किया गया है।",
      imageUrl: "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735564478/kumbh/ys1o5lchjhvaj6k4hdfu.jpg",
    },
    {
      title: "मनकामेश्वर मंदिर",
      description:
        "यमुना नदी के पास मिंटो पार्क के पास स्थित यह मंदिर काले पत्थर के शिवलिंग और हनुमानजी की विशाल प्रतिमा के लिए प्रसिद्ध है।",
      imageUrl: "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735564620/kumbh/kqxwxy7xfaxv6iptgylq.jpg",
    },
    {
      title: "महर्षि भरद्वाज आश्रम",
      description:
        "यह स्थान ऋषि भरद्वाज से जुड़ा है। यहां भगवान राम, सीता और लक्ष्मण ने वनवास के दौरान विश्राम किया था। वर्तमान में यहां भरद्वाजेश्वर महादेव और देवी काली का मंदिर है।",
      imageUrl: "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735564616/kumbh/vzj1gi876yquvfn3n1kg.jpg",
    },
    {
      title: "स्टेट पवेलियन",
      description:
        "विभिन्न राज्यों की कला, संस्कृति और पर्यटन को प्रदर्शित करने वाला पवेलियन। इसमें पारंपरिक त्योहारों और हस्तशिल्प पर प्रदर्शनियां और सांस्कृतिक कार्यक्रम होंगे।",
      imageUrl: "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735585391/StatePavilion_wecoxe.png",
    },
    {
      title: "संस्कृति ग्राम",
      description:
        "अरैल क्षेत्र में स्थापित यह ग्राम छह क्षेत्रों में विभाजित होगा, जहां महाकुंभ की पौराणिक कथाओं, ज्योतिष, कला और व्यंजनों पर प्रदर्शनियां और वर्कशॉप आयोजित की जाएंगी।",
      imageUrl: "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735585326/SanskritiGram_ahnao9.png",
    },
    {
      title: "कला ग्राम",
      description:
        "कला और संस्कृति को समर्पित यह प्रोजेक्ट तीन अलग-अलग थीम्स पर आधारित होगा, जो आगंतुकों को महाकुंभ मेले के दौरान सांस्कृतिक अनुभव से समृद्ध करेगा।",
      imageUrl: "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735585377/KalaGram_oz9whi.png",
    },
    {
      title: "वाटर लेजर शो",
      description:
        "अत्याधुनिक तकनीक से लैस यह शो यमुना नदी के काली घाट पर बोट क्लब के पास आयोजित होगा। यह दर्शनीय और मनोरंजक आकर्षण पर्यटकों और स्थानीय लोगों के लिए खास अनुभव प्रदान करेगा।",
      imageUrl: "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735585361/WaterLaserShow_v0v9f5.png",
    },
    {
      title: "ड्रोन शो",
      description:
        "दिव्य आकृतियों को प्रदर्शित करने वाला ड्रोन शो 20 जनवरी और 5 फरवरी को आयोजित होगा। यह अत्याधुनिक तकनीक के माध्यम से आकाश में आध्यात्मिक चित्रों का प्रदर्शन करेगा।",
      imageUrl: "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735585359/DroneShow_po2nk1.png",
    },
    {
      title: "थीमैटिक गेट्स",
      description:
        "कुम्भ और प्रयाग की विभिन्न थीम्स से प्रेरित 30 अस्थायी प्रवेश द्वार बनाए जाएंगे। ये गेट मेले की सुंदरता और सांस्कृतिक महत्व को और बढ़ाएंगे।",
      imageUrl: "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735585361/ThematicGates_rjrm3y.png",
    },
    {
      title: "फेसाड लाइटिंग",
      description:
        "प्रमुख स्थलों जैसे इलाहाबाद किला, शास्त्री ब्रिज, नैनी ब्रिज, हनुमान मंदिर, और अलोप शंकरी मंदिर पर आकर्षक लाइटिंग की जाएगी। यह शाम के समय पर्यटकों और स्थानीय निवासियों के लिए स्थल को और अधिक मनमोहक बनाएगा।",
      imageUrl: "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735564492/kumbh/jzusdpncyjzgxxbnv48b.jpg",
    },
    {
      title: "पवित्र स्नान",
      description:
        "गंगा, यमुना और सरस्वती के संगम पर पवित्र स्नान का अनुभव करें। लाखों भक्तों को आध्यात्मिक शुद्धिकरण और आशीर्वाद प्राप्त करते देखना एक अद्भुत दृश्य है।",
      imageUrl: "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735585335/Bathing_f0mknt.png",
    },
    {
      title: "अखाड़ा कैंप्स",
      description:
        "संतों, साधुओं और योगियों के अखाड़ा कैंप्स में दर्शन, ध्यान और दर्शनशास्त्र पर चर्चा के लिए जाएं। यहां साधु जीवन को करीब से देखने का अवसर मिलता है।",
      imageUrl: "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735585342/Akhara_ybjutp.png",
    },
    {
      title: "आध्यात्मिक प्रवचन और सत्संग",
      description:
        "प्रसिद्ध संतों और गुरुओं द्वारा आयोजित प्रवचन और सत्संग में भाग लें। ये सत्र हिंदू धर्म के प्राचीन ज्ञान और शिक्षाओं में गहरी अंतर्दृष्टि प्रदान करते हैं।",
      imageUrl: "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735585328/Satsang_derbrk.png",
    },
    {
      title: "सांस्कृतिक प्रदर्शन",
      description:
        "भारत की सांस्कृतिक धरोहर का आनंद लें। शास्त्रीय संगीत, नृत्य प्रदर्शन, और पारंपरिक थिएटर आपको भारतीय संस्कृति की विविधता में डुबो देंगे।",
      imageUrl: "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735585346/Cultural_vnakvb.png",
    },
    {
      title: "हस्तकला और खाद्य बाजार",
      description:
        "बाजारों में हस्तशिल्प और आभूषण से लेकर हाथ से बुने वस्त्रों तक की सुंदरता का अनुभव करें। साथ ही, विभिन्न क्षेत्रीय व्यंजनों का स्वाद लें।",
      imageUrl: "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735585335/Craft_hooqsq.png",
    },
    {
      title: "योग और ध्यान रिट्रीट्स",
      description:
        "योग और ध्यान सत्रों के माध्यम से आंतरिक शांति और पुनरुत्थान का अनुभव करें। अनुभवी प्रशिक्षकों के साथ शारीरिक, मानसिक और आध्यात्मिक संतुलन प्राप्त करें।",
      imageUrl: "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735585328/Yoga_bpf2i8.png",
    },
    {
      title: "सांस्कृतिक जुलूस और परेड",
      description:
        "रंगीन परेड का हिस्सा बनें, जिनमें हाथी, घोड़े, रथ और पारंपरिक परिधानों में सजे लोग शामिल होते हैं।",
      imageUrl: "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735585321/Processions_n7ter0.png",
    },
    {
      title: "पर्यावरणीय पहल",
      description:
        "महाकुंभ 2025 में पर्यावरण संरक्षण और स्थिरता पर जोर दिया जाएगा। वृक्षारोपण, सफाई अभियान और जागरूकता कार्यक्रमों में भाग लें।",
      imageUrl: "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735585343/Environmental_jmpihe.png",
    },
    {
      title: "कला स्थापना और प्रदर्शनियां",
      description:
        "आध्यात्मिक और सांस्कृतिक धरोहर को समर्पित कला प्रदर्शनियों का आनंद लें। ये भारत की रचनात्मकता और भक्ति का प्रतीक हैं।",
      imageUrl: "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735585349/Installations_qok3hf.png",
    },
    {
      title: "घाटों पर आरती",
      description:
        "दिन का समापन गंगा आरती के अद्भुत दृश्य के साथ करें। हजारों दीपों की रोशनी और मंत्रोच्चार आपको आध्यात्मिक अनुभव से भर देंगे।",
      imageUrl: "https://res.cloudinary.com/duqxqg7d0/image/upload/v1735564446/kumbh/vzosqkjjffoiciyaemra.jpg",
    }
  ];

  export default places;