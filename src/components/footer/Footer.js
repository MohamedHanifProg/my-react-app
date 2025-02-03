import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-line"></div>
      <div
        className="footer-logo"
        onClick={() => {
          navigate('/');
          window.location.reload();
        }}
        style={{ cursor: "pointer" }}
      >
        <h2 className="footer-logo-title">ShenCarCar</h2>
        <p className="footer-logo-description">
          Your reliable source for car rentals and more.
        </p>
      </div>
      <div className="footer-about footer-section">
        <h3 className="footer-section-title">About</h3>
        <div className="footer-section-content">
          <span role="button">Our History</span>
          <span role="button">Our Team</span>
          <span role="button">Contact Us</span>
        </div>
      </div>

      <div className="footer-community footer-section">
        <h3 className="footer-section-title">Community</h3>
        <div className="footer-section-content">
          <span role="button">Events</span>
          <span role="button">Forums</span>
          <span role="button">Blogs</span>
        </div>
      </div>

      <div className="footer-socials">
        <h3 className="footer-socials-title">Socials</h3>
        <div className="footer-socials-content">
          <span role="button">Facebook</span>
          <span role="button">Twitter</span>
          <span role="button">Instagram</span>
        </div>
      </div>

      <div className="footer-copyright">
        ©2025 ShenCarCar
      </div>

      <div className="footer-privacy">
        Privacy &amp; Policy
      </div>

      <div className="footer-terms">
        Terms &amp; Condition
      </div>
    </footer>
  );
}

export default Footer;
