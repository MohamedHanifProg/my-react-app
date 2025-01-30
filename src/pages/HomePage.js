import React, { useState, useEffect } from "react";
import CarsCatalogue from "../components/content/CarsCatalogue";
import Layout from "../components/layout/Layout";
import carsData from "../data/cars.json";

function HomePage({ favoriteCars, toggleFavorite, showFavorites, setShowFavorites }) { // Destructure new props
  const minPrice = Math.min(...carsData.map((car) => car.price));
  const maxPrice = Math.max(...carsData.map((car) => car.price));

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCars, setFilteredCars] = useState(carsData);
  const [selectedFilters, setSelectedFilters] = useState({
    types: [],
    capacities: [],
    priceRange: [minPrice, maxPrice],
  });

  // useEffect remains the same but uses showFavorites from props
  useEffect(() => {
    let result = [...carsData];
    if (searchQuery.length >= 2) {
      result = result.filter((car) =>
        car.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (showFavorites) { // Uses prop instead of local state
      result = result.filter((car) => favoriteCars.has(car.id));
    }
    result = result.filter(
      (car) =>
        (selectedFilters.types.length === 0 || selectedFilters.types.includes(car.type)) &&
        (selectedFilters.capacities.length === 0 || selectedFilters.capacities.includes(car.capacity)) &&
        car.price >= selectedFilters.priceRange[0] &&
        car.price <= selectedFilters.priceRange[1]
    );
    setFilteredCars(result);
  }, [searchQuery, showFavorites, selectedFilters, favoriteCars]);

  return (
    <Layout
      navProps={{ 
        onSearch: setSearchQuery, 
        onToggleFavorites: setShowFavorites, // Pass the state setter from App.js
        showFavorites // Pass the state value from App.js
      }}
      sideProps={{
        cars: carsData,
        onFilterChange: setSelectedFilters,
        selectedFilters,
        minPrice,
        maxPrice,
      }}
    >
      <CarsCatalogue
        cars={filteredCars.map((car) => ({
          ...car,
          isFavorite: favoriteCars.has(car.id),
        }))}
        onToggleFavorite={toggleFavorite}
      />
    </Layout>
  );
}
export default HomePage;
