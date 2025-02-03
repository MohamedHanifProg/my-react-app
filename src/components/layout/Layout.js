import React from "react";
import NavBarTop from "../navbars/NavBarTop";
import NavBarSide from "../navbars/NavBarSide";
import Footer from "../footer/Footer";

function Layout({ children, navProps, sideProps }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBarTop {...navProps} />
      <div style={{ display: "flex", flex: 1 }}>
        <NavBarSide {...sideProps} />
        <div style={{ flex: 1, overflowY: "auto" }}>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
