import React from "react";
import { useParams } from "react-router-dom";

function UserPage() {
  const { uniqueName } = useParams();

  return (
    <div className="user-page">
      <h1>Welcome to Maha Kumbh 2024</h1>
      <p>Hello, <strong>{uniqueName}</strong>!</p>
      <p>Your personalized page has been created. Enjoy the festivities!</p>
    </div>
  );
}

export default UserPage;
