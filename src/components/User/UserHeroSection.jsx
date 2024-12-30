import React from "react";

const UserHeroSection = ({ user }) => (
  <div className="relative flex justify-center items-center bg-orange-50 py-5">
    <div className="relative z-10 text-center px-4 border-4 border-orange-700 rounded-lg shadow-lg bg-white max-w-3xl">
      <p className="text-lg md:text-xl mt-2 text-orange-800">
        🌼 जय गंगा मइया की! 🌼 <br />
        आपका महाकुंभ 2025 में हार्दिक स्वागत है,{" "}
        <span className="font-bold">{user.username} जी</span>! 😊 <br />
        🙏 हर हर गंगे! 🙏
      </p>
    </div>
  </div>
);

export default UserHeroSection;
