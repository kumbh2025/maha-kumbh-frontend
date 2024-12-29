import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function Home() {
  const [name, setName] = useState('');
  const [uniqueName, setUniqueName] = useState('');
  const [files, setFiles] = useState([]); // State to handle multiple files
  const [generatedURL, setGeneratedURL] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]); // Store uploaded image URLs
  const [errorMessage, setErrorMessage] = useState('');
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    // Fetch the user count from the backend
    const fetchUserCount = async () => {
      try {
        const response = await fetch('https://maha-kumbh-backned.onrender.com/api/userCount');
        const data = await response.json();

        if (response.ok) {
          setUserCount(data.count);
        } else {
          console.error('Error fetching user count:', data.message);
        }
      } catch (error) {
        console.error('Server error while fetching user count:', error.message);
      }
    };

    fetchUserCount();
  }, []);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]); // Store all selected files
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', name);
    formData.append('uniqueName', uniqueName);

    // Append all files to the form data
    Array.from(files).forEach((file) => {
      formData.append('images', file); // 'images' matches the field name in the backend
    });

    try {
      const response = await fetch('https://maha-kumbh-backned.onrender.com/api/createUser', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setGeneratedURL(data.url);
        setUploadedImages(data.images || []); // Display uploaded images if available
        setErrorMessage('');
      } else {
        setErrorMessage(data.message);
        setGeneratedURL(null);
        setUploadedImages([]);
      }
    } catch (error) {
      setErrorMessage('Server error. Please try again later.');
    }
  };

  return (
    <div className="bg-orange-50 min-h-screen">
      <Navbar />
      <div className="text-center mt-6">
        <h1 className="text-3xl font-bold text-orange-700">Welcome to Maha Kumbh 2024</h1>
        <p className="text-lg mt-4 text-orange-600">
          Total Registered Users: <span className="font-bold">{userCount}</span>
        </p>
      </div>
      <div className="flex justify-center items-center mt-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full"
        >
          <h2 className="text-2xl font-bold text-orange-700 text-center mb-4">
            Create Your Website
          </h2>
          <div className="mb-4">
            <label
              className="block text-orange-600 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-orange-600 text-sm font-bold mb-2"
              htmlFor="uniqueName"
            >
              Unique Name
            </label>
            <input
              id="uniqueName"
              type="text"
              placeholder="Unique Name"
              value={uniqueName}
              onChange={(e) => setUniqueName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-orange-600 text-sm font-bold mb-2"
              htmlFor="images"
            >
              Upload Images
            </label>
            <input
              id="images"
              type="file"
              accept="image/*"
              multiple // Allow multiple image selection
              onChange={handleFileChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Host It
            </button>
          </div>
          {errorMessage && (
            <p className="text-red-600 text-center mt-4">{errorMessage}</p>
          )}
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
              <div className="mt-4">
                <p className="text-orange-600">Uploaded Images:</p>
                <div className="flex flex-wrap justify-center">
                  {uploadedImages.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`Uploaded ${index + 1}`}
                      className="w-20 h-20 object-cover rounded m-2 border border-orange-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Home;
