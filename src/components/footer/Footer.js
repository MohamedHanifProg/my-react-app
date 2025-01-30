import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Footer.css';

function Footer() {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <footer className="footer">
      {/* Horizontal line divider */}
      <div className="footer-line"></div>

      {/* Clickable Logo Section */}
      <div 
        className="footer-logo"
        onClick={() => navigate('/')} // Navigate to HomePage
        style={{ cursor: "pointer" }} // Indicate it's clickable
      >
        <h2 className="footer-logo-title">ShenCarCar</h2>
        <p className="footer-logo-description">
          Your reliable source for car rentals and more.
        </p>
      </div>

      {/* About Section */}
      <div className="footer-about footer-section">
        <h3 className="footer-section-title">About</h3>
        <div className="footer-section-content">
          <a href="#">Our History</a>
          <a href="#">Our Team</a>
          <a href="#">Contact Us</a>
        </div>
      </div>

      {/* Community Section */}
      <div className="footer-community footer-section">
        <h3 className="footer-section-title">Community</h3>
        <div className="footer-section-content">
          <a href="#">Events</a>
          <a href="#">Forums</a>
          <a href="#">Blogs</a>
        </div>
      </div>

      {/* Socials Section */}
      <div className="footer-socials">
        <h3 className="footer-socials-title">Socials</h3>
        <div className="footer-socials-content">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        ©2025 ShenCarCar
      </div>

      {/* Privacy & Policy */}
      <div className="footer-privacy">
        Privacy &amp; Policy
      </div>

      {/* Terms & Condition */}
      <div className="footer-terms">
        Terms &amp; Condition
      </div>
    </footer>
  );
}

export default Footer;
