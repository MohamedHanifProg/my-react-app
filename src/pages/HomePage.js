import React, { useState, useEffect } from "react";
import CarsCatalogue from "../components/content/CarsCatalogue";
import Layout from "../components/layout/Layout";
import carsData from "../data/cars.json";

function HomePage() {
  const minPrice = Math.min(...carsData.map((car) => car.price));
  const maxPrice = Math.max(...carsData.map((car) => car.price));

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCars, setFilteredCars] = useState(carsData);
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    types: [...new Set(carsData.map((car) => car.type))],
    capacities: [...new Set(carsData.map((car) => car.capacity))],
    priceRange: [minPrice, maxPrice],
  });

  const toggleFavorite = (carId) => {
    const updatedCars = filteredCars.map((car) =>
      car.id === carId ? { ...car, isFavorite: !car.isFavorite } : car
    );
    setFilteredCars(updatedCars);

    carsData.forEach((car) => {
      if (car.id === carId) {
        car.isFavorite = !car.isFavorite;
      }
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
      result = result.filter((car) => car.isFavorite);
    }

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
      <CarsCatalogue cars={filteredCars} onToggleFavorite={toggleFavorite} />
    </Layout>
  );
}

export default HomePage;
