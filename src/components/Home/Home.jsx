import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import GeneratedURLSection from "./GeneratedURLSection";

function Home() {
  const [name, setName] = useState("");
  const [uniqueName, setUniqueName] = useState("");
  const [password, setPassword] = useState("");
  const [files, setFiles] = useState([]);
  const [generatedURL, setGeneratedURL] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [userCount, setUserCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const backendURL = "https://maha-kumbh-backned.onrender.com";

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await fetch(`${backendURL}/api/userCount`);
        const data = await response.json();
        if (response.ok) setUserCount(data.count);
      } catch (error) {
        console.error("Error fetching user count:", error.message);
      }
    };

    fetchUserCount();
  }, []);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 7) {
      setErrorMessage("You can upload a maximum of 7 images.");
      return;
    }
    setFiles(selectedFiles);
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    const formData = new FormData();
    formData.append("username", name);
    formData.append("uniqueName", uniqueName);
    formData.append("password", password);
    files.forEach((file) => formData.append("images", file));

    try {
      const response = await fetch(`${backendURL}/api/createUser`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setGeneratedURL(data.url);
      } else {
        setErrorMessage(data.message);
        setGeneratedURL(null);
      }
    } catch (error) {
      setErrorMessage("Server error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-orange-100 via-yellow-200 to-orange-400 min-h-screen">
      <Navbar />
      <Header userCount={userCount} />
      <MainContent
        name={name}
        setName={setName}
        uniqueName={uniqueName}
        setUniqueName={setUniqueName}
        password={password}
        setPassword={setPassword}
        handleFileChange={handleFileChange}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
      />
      {generatedURL && (
        <GeneratedURLSection
          generatedURL={generatedURL}
          uniqueName={uniqueName}
          password={password}
        />
      )}
      <Footer />
    </div>
  );
}

export default Home;
