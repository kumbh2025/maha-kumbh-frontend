import React from "react";

function UserForm({ name, setName, uniqueName, setUniqueName, handleFileChange, isLoading, handleSubmit, errorMessage }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-b from-orange-50 to-orange-100 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-6 max-w-md w-full transform transition-all duration-300 hover:scale-105"
    >
      <h2 className="text-2xl font-bold text-orange-800 text-center mb-5">
        🌟 Create Your Website 🌟
      </h2>
      <div className="mb-5">
        <label className="block text-orange-700 text-sm font-semibold mb-2" htmlFor="name">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow-md appearance-none border border-orange-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          required
        />
      </div>
      <div className="mb-5">
        <label className="block text-orange-700 text-sm font-semibold mb-2" htmlFor="uniqueName">
          Unique Name
        </label>
        <input
          id="uniqueName"
          type="text"
          placeholder="Choose a unique name"
          value={uniqueName}
          onChange={(e) => setUniqueName(e.target.value)}
          className="shadow-md appearance-none border border-orange-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-orange-700 text-sm font-semibold mb-2" htmlFor="images">
          Upload Images (Max 7)
        </label>
        <input
          id="images"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="shadow-md appearance-none border border-orange-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
      </div>
      {isLoading ? (
        <p className="text-center text-orange-600 font-medium animate-pulse">Processing...</p>
      ) : (
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Host It 🚀
          </button>
        </div>
      )}
      {errorMessage && (
        <p className="text-red-600 text-center mt-4 font-semibold">
          ⚠️ {errorMessage}
        </p>
      )}
    </form>
  );
}

export default UserForm;
