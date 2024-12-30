import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import UserForm from "./UserForm";
import Footer from "./Footer";

function Home() {
  const [name, setName] = useState("");
  const [uniqueName, setUniqueName] = useState("");
  const [password, setPassword] = useState(""); // New state for password
  const [files, setFiles] = useState([]);
  const [generatedURL, setGeneratedURL] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [userCount, setUserCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const backendURL = "https://maha-kumbh-backned.onrender.com"; // Hardcoded backend URL
  // const backendURL = "http://localhost:5000"; // localhost URL

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
    formData.append("password", password); // Include password
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
    <div className="bg-orange-50 min-h-screen">
      <Navbar />
      <div className="text-center mt-4">
        <h1 className="text-2xl font-bold text-orange-700">
          Welcome to Maha Kumbh 2025
        </h1>
        <p className="text-lg mt-2 text-orange-600">
          Total Registered Users: <span className="font-bold">{userCount}</span>
        </p>
      </div>
      {generatedURL && (
        <div className="mt-4 text-center">
          <p className="text-orange-600">Your URL:</p>
          <a
            href={generatedURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            {generatedURL}
          </a>
        </div>
      )}
      <div className="flex flex-col lg:flex-row justify-center items-center mt-8 gap-8 px-4">
        <div className="hidden lg:block w-1/3">
          <img
            src="https://res.cloudinary.com/duqxqg7d0/image/upload/v1735590800/Bade_Hanuman_me481o.jpg"
            alt="Left Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full lg:w-2/5 px-4 flex justify-center">
          <UserForm
            name={name}
            setName={setName}
            uniqueName={uniqueName}
            setUniqueName={setUniqueName}
            password={password} // Pass password prop
            setPassword={setPassword} // Pass setPassword prop
            handleFileChange={handleFileChange}
            isLoading={isLoading}
            handleSubmit={handleSubmit}
            errorMessage={errorMessage}
          />
        </div>
        <div className="hidden lg:block w-1/3">
          <img
            src="https://res.cloudinary.com/duqxqg7d0/image/upload/v1735591729/sangam_people_us3oe4.jpg"
            alt="Right Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
