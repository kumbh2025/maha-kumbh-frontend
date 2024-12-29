import React from "react";

const UserHeroSection = ({ user }) => (
  <div className="relative flex justify-center items-center text-white bg-orange-500 py-10">
    <div className="absolute inset-0 bg-black opacity-20"></div>
    <div className="relative z-10 text-center px-4">
      <h1 className="text-3xl md:text-4xl font-bold">Maha Kumbh 2025!</h1>
      <p className="text-lg md:text-xl mt-2">
        जय गंगा मइया की! 🌼 <br />
        आपका महाकुंभ 2025 में हार्दिक स्वागत है,{" "}
        <span className="font-bold">{user.username} जी</span>! 🌼 <br />
        🙏 हर हर गंगे! 🙏
      </p>
    </div>
  </div>
);

export default UserHeroSection;
