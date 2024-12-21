import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const [uniqueName, setUniqueName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (uniqueName.trim()) {
      navigate(`/user/${uniqueName}`);
    } else {
      alert("Please enter a unique name!");
    }
  };

  return (
    <div className="home">
      <h1>Welcome to Maha Kumbh 2024</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Unique Name"
          value={uniqueName}
          onChange={(e) => setUniqueName(e.target.value)}
          required
        />
        <button type="submit">Create My Page</button>
      </form>
    </div>
  );
}

export default Home;
