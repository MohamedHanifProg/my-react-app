import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      {/* Horizontal line divider */}
      <div className="footer-line"></div>

      {/* Logo Section */}
      <div className="footer-logo">
        <h2 className="footer-logo-title">ShenCarCar</h2>
        <p className="footer-logo-description">
          Your reliable source for car rentals and more.
        </p>
      </div>

      {/* About Section */}
      <div className="footer-about footer-section">
        <h3 className="footer-section-title">About</h3>
        <div className="footer-section-content">
          {/* Anchor tags without href */}
          <a>Our History</a>
          <a>Our Team</a>
          <a>Contact Us</a>
        </div>
      </div>

      {/* Community Section */}
      <div className="footer-community footer-section">
        <h3 className="footer-section-title">Community</h3>
        <div className="footer-section-content">
          {/* Anchor tags without href */}
          <a>Events</a>
          <a>Forums</a>
          <a>Blogs</a>
        </div>
      </div>

      {/* Socials Section */}
      <div className="footer-socials">
        <h3 className="footer-socials-title">Socials</h3>
        <div className="footer-socials-content">
          {/* Anchor tags without href */}
          <a>Facebook</a>
          <a>Twitter</a>
          <a>Instagram</a>
        </div>
      </div>

      {/* Footer Bottom Items */}
      <div className="footer-bottom">
        {/* Put any grouped bottom items here if desired */}
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
