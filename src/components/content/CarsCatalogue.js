import React from "react";
import CarCard from "./CarCard";

function CarsCatalogue() {
  // Array of 12 placeholders for cards
  const cards = Array(12).fill(null);

  return (
    <div className="cars-catalogue">
      {/* Header */}
      <div className="catalogue-header">
        <div className="catalogue-title">Cars Catalogue</div>
        <div className="catalogue-count">{cards.length} Cars</div>
      </div>

      {/* Card Container */}
      <div className="catalogue-container">
        {cards.map((_, index) => (
          <CarCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default CarsCatalogue;
