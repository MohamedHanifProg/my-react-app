// CarsCatalogue.js (final corrected version)
import React, { useState, useEffect } from "react";
import CarCard from "./CarCard";
import carsData from "../../data/cars.json";

function CarsCatalogue() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Create unique IDs for duplicated cars
    const duplicatedCars = [
      ...carsData,
      ...carsData.slice(0, 3).map((car, index) => ({
        ...car,
        id: carsData.length + index + 1 // Generates IDs 10, 11, 12
      }))
    ];
    setCars(duplicatedCars);
  }, []);

  return (
    <div className="cars-catalogue">
      <div className="catalogue-header">
        <div className="catalogue-title">Cars Catalogue</div>
        <div className="catalogue-count">{cars.length} Cars</div>
      </div>

      <div className="cars-grid">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default CarsCatalogue;