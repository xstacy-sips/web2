import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    closeMenu();
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav>
      <div className="logo-container">
        <Link to="/">
          <img src="/assets/images/logo/logo.png" alt="Xstacy Logo" className="logo-image" />
        </Link>
      </div>
      <div className="mobile-menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home" className="nav-link" onClick={() => scrollToSection('home')}>Home</a></li>
        <li><a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>About</a></li>
        <li><Link to="/menu" className="nav-link" onClick={closeMenu}>Menu</Link></li>
        <li><a href="#gallery" className="nav-link" onClick={() => scrollToSection('gallery')}>Gallery</a></li>
        <li><a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
