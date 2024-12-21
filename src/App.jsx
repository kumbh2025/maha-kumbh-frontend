import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserPage from "./components/UserPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:uniqueName" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
