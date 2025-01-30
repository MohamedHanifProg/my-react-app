import React from "react";
import NavBarTop from "../navbars/NavBarTop"; // Correct import for NavBarTop
import NavBarSide from "../navbars/NavBarSide"; // Correct import for NavBarSide
import Footer from "../footer/Footer";

function Layout({ children, navProps, sideProps }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Shared Navigation Bar at the Top */}
      <NavBarTop {...navProps} />
      <div style={{ display: "flex", flex: 1 }}>
        {/* Shared Side Navigation */}
        <NavBarSide {...sideProps} />
        {/* Dynamic Page Content */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          {children}
        </div>
      </div>
      {/* Shared Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
