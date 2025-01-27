import React from "react";
import CarCard from "./CarCard";


function CarsCatalogue({ cars = [], onToggleFavorite }) {
  return (
    <div className="cars-catalogue">
      {/* Header Section */}
      <div className="catalogue-header">
        <div className="catalogue-title">Cars Catalogue</div>
        <div className="catalogue-count">{cars.length} Cars</div>
      </div>

      {/* Cars Grid */}
      <div className="cars-grid">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} onToggleFavorite={onToggleFavorite} />
        ))}
      </div>
    </div>
  );
}

export default CarsCatalogue;
