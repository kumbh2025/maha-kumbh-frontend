import React from "react";

function DeleteUserForm({ onSubmit, onCancel, password, setPassword, errorMessage }) {
  return (
    <form
      onSubmit={onSubmit}
      className="mt-4 p-6 border rounded-lg bg-white max-w-sm mx-auto shadow-lg"
    >
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="password">
          Enter your password to confirm:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-red-600"
          required
        />
      </div>
      {errorMessage && (
        <div className="text-red-600 text-center mb-4">{errorMessage}</div>
      )}
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition-all duration-300"
        >
          Confirm Delete
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 text-black py-2 px-4 rounded-full hover:bg-gray-400 transition-all duration-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default DeleteUserForm;
