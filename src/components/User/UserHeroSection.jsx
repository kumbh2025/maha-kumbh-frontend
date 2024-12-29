import React from "react";

const UserHeroSection = ({ user }) => (
  <div className="relative flex justify-center items-center bg-orange-50 py-10">
    <div className="relative z-10 text-center px-4">
      <p className="text-lg md:text-xl mt-2 text-orange-800">
        जय गंगा मइया की! 🌼 <br />
        आपका महाकुंभ 2025 में हार्दिक स्वागत है,{" "}
        <span className="font-bold">{user.username} जी</span>! 🌼 <br />
        🙏 हर हर गंगे! 🙏
      </p>
    </div>
  </div>
);

export default UserHeroSection;
