import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarDetailsPage from "./pages/CarDetailsPage";
import FavoriteCarsPage from "./pages/FavoriteCarsPage";
import carsData from "./data/cars.json";

function App() {
  const [favoriteCars, setFavoriteCars] = useState(new Set());
  const toggleFavorite = (carId) => {
    setFavoriteCars((prevFavorites) => {
      const newFavorites = new Set(prevFavorites);
      newFavorites.has(carId) ? newFavorites.delete(carId) : newFavorites.add(carId);
      return newFavorites;
    });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage carsData={carsData} favoriteCars={favoriteCars} toggleFavorite={toggleFavorite} />}
        />
        <Route
          path="/car/:id"
          element={<CarDetailsPage favoriteCars={favoriteCars} toggleFavorite={toggleFavorite} />}
        />
        <Route
          path="/favorites"
          element={<FavoriteCarsPage carsData={carsData} favoriteCars={favoriteCars} toggleFavorite={toggleFavorite} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
