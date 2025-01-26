import React from "react";
import PageLayout from "./pages/PageLayout";
import NavBarTop from "./components/navbars/NavBarTop";
import NavBarSide from "./components/navbars/NavBarSide";
import Footer from "./components/footer/Footer";
import CarCard from "./components/content/CarCard"; // Import the CarCard component

function App() {
  return (
    <PageLayout>
      {/* Top Navigation Bar */}
      <NavBarTop />

      {/* Main Content Area */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* Side Navigation Bar */}
        <NavBarSide />

        {/* Car Cards Section */}
        <div style={{ flex: 1, padding: "20px" }}>
          <CarCard /> {/* Render the CarCard component here */}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </PageLayout>
  );
}

export default App;