import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarDetailsPage from "./pages/CarDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car/:carId" element={<CarDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
