import React from "react";
import Layout from "../components/layout/Layout"; // Import the shared Layout component
import carsData from "../data/cars.json"; // Import cars data

function CarDetailsPage() {
  // Initialize filters to match the HomePage logic
  const minPrice = Math.min(...carsData.map((car) => car.price));
  const maxPrice = Math.max(...carsData.map((car) => car.price));

  const initialFilters = {
    types: [...new Set(carsData.map((car) => car.type))],
    capacities: [...new Set(carsData.map((car) => car.capacity))],
    priceRange: [minPrice, maxPrice],
  };

  const handleFilterChange = (newFilters) => {
    console.log("Filters updated:", newFilters); // No filtering needed for now
  };

  return (
    <Layout
      navProps={{}} // Same props for NavBarTop as on HomePage (if required)
      sideProps={{
        cars: carsData, // Pass the cars data to the side navigation
        onFilterChange: handleFilterChange,
        selectedFilters: initialFilters,
        minPrice,
        maxPrice,
      }}
    >
      {/* Placeholder content for the Car Details Page */}
      <div style={{ padding: "20px", fontSize: "24px", textAlign: "center" }}>
        Car Details Page
      </div>
    </Layout>
  );
}

export default CarDetailsPage;
