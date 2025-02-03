import React, { useState, useEffect } from "react";
import CarsCatalogue from "../components/content/CarsCatalogue";
import Layout from "../components/layout/Layout";
import { useLocation } from "react-router-dom";

function HomePage({ carsData, favoriteCars, toggleFavorite }) {
  const location = useLocation();

  const allTypes = [...new Set(carsData.map(car => car.type))];
  const allCapacities = [...new Set(carsData.map(car => car.capacity))];

  const minPrice = Math.min(...carsData.map(car => car.price));
  const maxPrice = Math.max(...carsData.map(car => car.price));

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCars, setFilteredCars] = useState(carsData);
  const [selectedFilters, setSelectedFilters] = useState({
    types: allTypes,
    capacities: allCapacities,
    priceRange: [minPrice, maxPrice],
  });

  useEffect(() => {
    let result = carsData.filter(
      (car) =>
        car.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        selectedFilters.types.includes(car.type) &&
        selectedFilters.capacities.includes(car.capacity) &&
        car.price >= selectedFilters.priceRange[0] &&
        car.price <= selectedFilters.priceRange[1]
    );
    setFilteredCars(result);
  }, [searchQuery, selectedFilters, carsData, location]);

  return (
    <Layout
      navProps={{ onSearch: setSearchQuery }}
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
