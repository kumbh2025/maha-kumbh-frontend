import React, { useState, useEffect } from "react";

const UserHeroSection = ({ user }) => {
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    // Set a timeout to show the second line after 1 second
    const timer = setTimeout(() => {
      setShowSecondLine(true);
    }, 2000); // 1000ms = 1 second

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className="relative flex justify-center items-center bg-orange-50 py-5 px-2">
      <div className="relative z-10 text-center px-4 border-4 border-orange-700 rounded-lg shadow-lg bg-white max-w-3xl">
        <p className="text-lg md:text-xl mt-2 text-orange-800">
          <span className="opacity-100 transition-opacity duration-1000 ease-in-out">
            🌼 जय गंगा मइया की! 🌼
          </span>
          <br />
          <span
            className={`${
              showSecondLine ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000 ease-in-out`}
          >
            आपका महाकुंभ 2025 में हार्दिक स्वागत है,{" "}
            <span className="font-bold">{user.username} जी</span>! 😊
            <br />
            🙏 हर हर गंगे! 🙏
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserHeroSection;
