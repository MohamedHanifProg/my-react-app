import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarDetailsPage from "./pages/CarDetailsPage";

function App() {
  const [favoriteCars, setFavoriteCars] = useState(new Set());
  const [showFavorites, setShowFavorites] = useState(false);

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
          element={
            <HomePage
              favoriteCars={favoriteCars}
              toggleFavorite={toggleFavorite}
              showFavorites={showFavorites}
              setShowFavorites={setShowFavorites}
            />
          }
        />
        <Route
          path="/car/:id"
          element={
            <CarDetailsPage
              favoriteCars={favoriteCars}
              toggleFavorite={toggleFavorite}
              showFavorites={showFavorites}
              setShowFavorites={setShowFavorites}
            />
          }
        />

      </Routes>
    </Router>
  );
}

export default App;