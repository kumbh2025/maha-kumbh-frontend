import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import UserPage from "./components/User/UserPage";
import AboutKumbh from "./components/Home/AboutKumbh";
import Gallery from "./components/Home/Gallery";
import AboutPrayagraj from "./components/Home/AboutPrayagraj";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:uniqueName" element={<UserPage />} />
        <Route path="/about-kumbh" element={<AboutKumbh />} /> 
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/about-prayagraj" element={<AboutPrayagraj />} /> 
      </Routes>
    </Router>
  );
}

export default App;
