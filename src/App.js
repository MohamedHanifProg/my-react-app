// App.js
import React, { useState, useEffect } from "react";
import NavBarTop from "./components/navbars/NavBarTop";
import NavBarSide from "./components/navbars/NavBarSide";
import Footer from "./components/footer/Footer";
import CarsCatalogue from "./components/content/CarsCatalogue";
import carsData from "./data/cars.json";

function App() {
  const minPrice = Math.min(...carsData.map((car) => car.price));
  const maxPrice = Math.max(...carsData.map((car) => car.price));

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCars, setFilteredCars] = useState(carsData);
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    types: [...new Set(carsData.map((car) => car.type))],
    capacities: [...new Set(carsData.map((car) => car.capacity))],
    priceRange: [minPrice, maxPrice]
  });

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

    // Apply filters
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
    <div>
      <NavBarTop
        onSearch={setSearchQuery}
        onToggleFavorites={setShowFavorites}
        showFavorites={showFavorites}
      />

      <div style={{ display: "flex", flex: 1 }}>
        <NavBarSide
          cars={carsData} // Pass all cars for filter options
          onFilterChange={setSelectedFilters}
          selectedFilters={selectedFilters}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />

        <div style={{ flex: 1, padding: "20px" }}>
          <CarsCatalogue cars={filteredCars} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;