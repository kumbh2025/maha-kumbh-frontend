// UserForm.jsx
import React from 'react';

function UserForm({ name, setName, uniqueName, setUniqueName, handleFileChange, isLoading, handleSubmit, errorMessage }) {
  return (
    <form onSubmit={handleSubmit} className="bg-orange-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full"> {/* Removed white background */}
      <h2 className="text-2xl font-bold text-orange-700 text-center mb-3">Create Your Website</h2>
      <div className="mb-3">
        <label className="block text-orange-600 text-sm font-bold mb-2" htmlFor="name">Your Name</label>
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
        <label className="block text-orange-600 text-sm font-bold mb-2" htmlFor="uniqueName">Unique Name</label>
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
        <label className="block text-orange-600 text-sm font-bold mb-2" htmlFor="images">Upload Images (Max 7)</label>
        <input
          id="images"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      {isLoading ? (
        <p className="text-center text-orange-600">Processing...</p>
      ) : (
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Host It
          </button>
        </div>
      )}
      {errorMessage && <p className="text-red-600 text-center mt-4">{errorMessage}</p>}
    </form>
  );
}

export default UserForm;
