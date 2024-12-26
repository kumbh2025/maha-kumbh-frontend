import React, { useState } from 'react';
import Navbar from './Navbar';

function Home() {
  const [name, setName] = useState('');
  const [uniqueName, setUniqueName] = useState('');
  const [generatedURL, setGeneratedURL] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/createUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: name, uniqueName }),
      });

      const data = await response.json();

      if (response.ok) {
        setGeneratedURL(data.url);
        setErrorMessage('');
      } else {
        setErrorMessage(data.message);
        setGeneratedURL(null);
      }
    } catch (error) {
      setErrorMessage('Server error. Please try again later.');
    }
  };

  return (
    <div className="bg-orange-50 min-h-screen">
      <Navbar />
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
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Home;
