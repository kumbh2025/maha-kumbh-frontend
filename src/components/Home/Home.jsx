import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import UserForm from './UserForm';

function Home() {
  const [name, setName] = useState('');
  const [uniqueName, setUniqueName] = useState('');
  const [files, setFiles] = useState([]);
  const [generatedURL, setGeneratedURL] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [userCount, setUserCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const backendURL = 'https://maha-kumbh-backned.onrender.com'; // Hardcoded backend URL

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await fetch(`${backendURL}/api/userCount`);
        const data = await response.json();
        if (response.ok) setUserCount(data.count);
      } catch (error) {
        console.error('Error fetching user count:', error.message);
      }
    };

    fetchUserCount();
  }, []);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 7) {
      setErrorMessage('You can upload a maximum of 7 images.');
      return;
    }
    setFiles(selectedFiles);
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    const formData = new FormData();
    formData.append('username', name);
    formData.append('uniqueName', uniqueName);
    files.forEach((file) => formData.append('images', file));

    try {
      const response = await fetch(`${backendURL}/api/createUser`, {
        method: 'POST',
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
      setErrorMessage('Server error. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-orange-50 min-h-screen">
      <Navbar />
      <div className="text-center mt-4">
        <h1 className="text-3xl font-bold text-orange-700">Welcome to Maha Kumbh 2025</h1>
        <p className="text-lg mt-2 text-orange-600">
          Total Registered Users: <span className="font-bold">{userCount}</span>
        </p>
      </div>

      {/* Display generated URL above the form */}
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

      {/* User Form */}
      <div className="flex justify-center items-center mt-2">
        <UserForm
          name={name}
          setName={setName}
          uniqueName={uniqueName}
          setUniqueName={setUniqueName}
          handleFileChange={handleFileChange}
          isLoading={isLoading}
          handleSubmit={handleSubmit}
          errorMessage={errorMessage}
        />
      </div>
    </div>
  );
}

export default Home;
