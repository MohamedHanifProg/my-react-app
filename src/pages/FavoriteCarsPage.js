import React from "react";
import CarsCatalogue from "../components/content/CarsCatalogue";
import Layout from "../components/layout/Layout";

function FavoriteCarsPage({ favoriteCars, toggleFavorite }) {
  return (
    <Layout navProps={{ showFavorites: true }}>
      <h1 className="page-title">Favorite Cars</h1>
      {favoriteCars.size > 0 ? (
        <CarsCatalogue
          cars={[...favoriteCars]} // Convert Set to array of full car objects
          onToggleFavorite={toggleFavorite}
        />
      ) : (
        <p className="no-favorites">No favorite cars yet.</p>
      )}
    </Layout>
  );
}

export default FavoriteCarsPage;
