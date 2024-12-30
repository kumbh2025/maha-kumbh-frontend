import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import UserPage from "./components/User/UserPage";
import AboutKumbh from "./components/Home/AboutKumbh";
import Gallery from "./components/Home/Gallery";
import AboutPrayagraj from "./components/Home/AboutPrayagraj";
import MahaKumbh2025 from "./components/Home/MahaKumbh2025";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:uniqueName" element={<UserPage />} />
        <Route path="/about-kumbh" element={<AboutKumbh />} /> 
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/about-prayagraj" element={<AboutPrayagraj />} /> 
        <Route path="/maha-kumbh-2025" element={<MahaKumbh2025 />} /> 
      </Routes>
    </Router>
  );
}

export default App;
