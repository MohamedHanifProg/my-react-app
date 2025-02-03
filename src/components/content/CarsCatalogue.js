import React from "react";
import CarCard from "./CarCard";

function CarsCatalogue({ cars = [], onToggleFavorite, title = "Cars Catalogue" }) {
  return (
    <div className="cars-catalogue">
      <div className="catalogue-header">
        <div className="catalogue-title">{title}</div>
        <div className="catalogue-count">{cars.length} Cars</div>
      </div>
      <div className="cars-grid">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default CarsCatalogue;
