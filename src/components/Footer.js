import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer>
      <div className="footer-content">
        <img src="/assets/images/logo/text_white.png" alt="Xstacy" className="footer-text-logo" />
        <p className="footer-tagline">Making The World Smile, One Sip at a Time</p>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          <Link to="/menu">Menu</Link>
          <a href="#gallery" onClick={() => scrollToSection('gallery')}>Gallery</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Xstacy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
