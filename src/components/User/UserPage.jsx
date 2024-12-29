import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from './Header';
import UserHeroSection from "./UserHeroSection";
import UserImagesSection from "./UserImagesSection";
import ImageGridSection from "./ImageGridSection";
import { kumbhImages, templeImages, heritageSites } from "./ImageData";

function UserPage() {
  const { uniqueName } = useParams();
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

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
      <Header/>
      {user && (
        <>
          <UserHeroSection user={user} />
          <UserImagesSection user={user} />
          <ImageGridSection
            title="कुम्भ स्थल"
            images={kumbhImages}
          />
          <ImageGridSection
            title="मंदिर स्थल"
            images={templeImages}
          />
          <ImageGridSection
            title="सांस्कृतिक और ऐतिहासिक स्थल"
            images={heritageSites}
          />
        </>
      )}
    </div>
  );
}

export default UserPage;
