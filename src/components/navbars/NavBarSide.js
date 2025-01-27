// NavBarSide.jsx
import React from "react";
import "./NavBarSide.css";

function NavBarSide({
  cars,
  onFilterChange,
  selectedFilters,
  minPrice,
  maxPrice
}) {
  // Calculate dynamic counts based on ALL cars
  const typeCounts = cars.reduce((acc, car) => {
    acc[car.type] = (acc[car.type] || 0) + 1;
    return acc;
  }, {});

  const capacityCounts = cars.reduce((acc, car) => {
    acc[car.capacity] = (acc[car.capacity] || 0) + 1;
    return acc;
  }, {});

  const handleTypeChange = (type) => {
    const newTypes = selectedFilters.types.includes(type)
      ? selectedFilters.types.filter((t) => t !== type)
      : [...selectedFilters.types, type];
      
    onFilterChange({ 
      ...selectedFilters,
      types: newTypes.length > 0 ? newTypes : Object.keys(typeCounts)
    });
  };

  const handleCapacityChange = (capacity) => {
    const newCapacities = selectedFilters.capacities.includes(capacity)
      ? selectedFilters.capacities.filter((c) => c !== capacity)
      : [...selectedFilters.capacities, capacity];

    onFilterChange({
      ...selectedFilters,
      capacities: newCapacities.length > 0 ? newCapacities : Object.keys(capacityCounts)
    });
  };

  const handlePriceChange = (e) => {
    const newMaxPrice = parseFloat(e.target.value);
    onFilterChange({
      ...selectedFilters,
      priceRange: [minPrice, newMaxPrice] // Keep min fixed, only change max
    });
  };

  return (
    <div className="navbar-side">
      {/* Filter by Type */}
      <div className="navbar-section">
        <div className="navbar-section-title">T Y P E</div>
        <div className="navbar-item-list">
          {Object.keys(typeCounts).map((type) => (
            <div key={type} className="navbar-item">
              <input
                type="checkbox"
                id={`type-${type}`}
                checked={selectedFilters.types.includes(type)}
                onChange={() => handleTypeChange(type)}
              />
              <label htmlFor={`type-${type}`} className="navbar-item-text">
                {`${type} (${typeCounts[type] || 0})`}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Filter by Capacity */}
      <div className="navbar-section">
        <div className="navbar-section-title">C A P A C I T Y</div>
        <div className="navbar-item-list">
          {Object.keys(capacityCounts).map((capacity) => (
            <div key={capacity} className="navbar-item">
              <input
                type="checkbox"
                id={`capacity-${capacity}`}
                checked={selectedFilters.capacities.includes(capacity)}
                onChange={() => handleCapacityChange(capacity)}
              />
              <label htmlFor={`capacity-${capacity}`} className="navbar-item-text">
                {`${capacity} (${capacityCounts[capacity] || 0})`}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Filter by Price Range */}
      <div className="navbar-section">
        <div className="navbar-section-title">P R I C E ( P E R  D A Y )</div>
        <div className="navbar-price-range">
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={selectedFilters.priceRange[1]}
            onChange={handlePriceChange}
            className="navbar-price-slider"
            step="1"
          />
          <div className="navbar-price-value">
            Max. ${selectedFilters.priceRange[1].toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBarSide;