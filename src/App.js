import React, { useState, useEffect } from "react";
import NavBarTop from "./components/navbars/NavBarTop";
import NavBarSide from "./components/navbars/NavBarSide";
import Footer from "./components/footer/Footer";
import CarsCatalogue from "./components/content/CarsCatalogue";
import carsData from "./data/cars.json";

function App() {
  // Minimum and maximum prices
  const minPrice = Math.min(...carsData.map((car) => car.price));
  const maxPrice = Math.max(...carsData.map((car) => car.price));

  // State management
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCars, setFilteredCars] = useState(carsData);
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    types: [...new Set(carsData.map((car) => car.type))],
    capacities: [...new Set(carsData.map((car) => car.capacity))],
    priceRange: [minPrice, maxPrice],
  });

  // Toggle favorite status
  const toggleFavorite = (carId) => {
    const updatedCars = filteredCars.map((car) =>
      car.id === carId ? { ...car, isFavorite: !car.isFavorite } : car
    );
    setFilteredCars(updatedCars);

    // Update the original data to reflect changes globally
    carsData.forEach((car) => {
      if (car.id === carId) {
        car.isFavorite = !car.isFavorite;
      }
    });
  };

  // Filter cars based on search, favorites, and selected filters
  useEffect(() => {
    let result = [...carsData];

    // Apply search filter
    if (searchQuery.length >= 2) {
      result = result.filter((car) =>
        car.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply favorites filter
    if (showFavorites) {
      result = result.filter((car) => car.isFavorite);
    }

    // Apply type, capacity, and price filters
    result = result.filter(
      (car) =>
        selectedFilters.types.includes(car.type) &&
        selectedFilters.capacities.includes(car.capacity) &&
        car.price >= selectedFilters.priceRange[0] &&
        car.price <= selectedFilters.priceRange[1]
    );

    setFilteredCars(result);
  }, [searchQuery, showFavorites, selectedFilters]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Top Navigation Bar */}
      <NavBarTop
        onSearch={setSearchQuery}
        onToggleFavorites={setShowFavorites}
        showFavorites={showFavorites}
      />

      {/* Main Content */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* Side Navigation Bar */}
        <NavBarSide
          cars={carsData}
          onFilterChange={setSelectedFilters}
          selectedFilters={selectedFilters}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />

        {/* Cars Catalogue */}
        <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
          <CarsCatalogue cars={filteredCars} onToggleFavorite={toggleFavorite} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
