import React from "react";
import Layout from "../components/layout/Layout";
import CarsCatalogue from "../components/content/CarsCatalogue";

function FavoriteCarsPage({ carsData, favoriteCars, toggleFavorite }) {
  const favoriteCarsList = carsData.filter((car) => favoriteCars.has(car.id));

  return (
    <Layout
      navProps={{}}
      sideProps={{
        cars: carsData,
        onFilterChange: () => { },
        selectedFilters: {
          types: [],
          capacities: [],
          priceRange: [0, 0],
        },
      }}
    >
      <CarsCatalogue
        title="Favorite Cars"
        cars={favoriteCarsList.map((car) => ({
          ...car,
          isFavorite: true,
        }))}
        onToggleFavorite={toggleFavorite}
      />
    </Layout>
  );
}

export default FavoriteCarsPage;
