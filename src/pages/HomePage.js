import React, { useState, useEffect } from "react";
import CarsCatalogue from "../components/content/CarsCatalogue";
import Layout from "../components/layout/Layout";
import carsData from "../data/cars.json";

function HomePage() {
  const minPrice = Math.min(...carsData.map((car) => car.price));
  const maxPrice = Math.max(...carsData.map((car) => car.price));

  const [searchQuery, setSearchQuery] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);
  const [favoriteCars, setFavoriteCars] = useState(new Set());
  const [filteredCars, setFilteredCars] = useState(carsData);

  // Initially, no filters are selected (empty arrays)
  const [selectedFilters, setSelectedFilters] = useState({
    types: [], // Empty means no filtering applied
    capacities: [],
    priceRange: [minPrice, maxPrice], // Default price range
  });

  const toggleFavorite = (carId) => {
    setFavoriteCars((prevFavorites) => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(carId)) {
        newFavorites.delete(carId);
      } else {
        newFavorites.add(carId);
      }
      return newFavorites;
    });
  };

  useEffect(() => {
    let result = [...carsData];

    if (searchQuery.length >= 2) {
      result = result.filter((car) =>
        car.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (showFavorites) {
      result = result.filter((car) => favoriteCars.has(car.id));
    }

    // Apply filters only if they are selected
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
      navProps={{ onSearch: setSearchQuery, onToggleFavorites: setShowFavorites, showFavorites }}
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
