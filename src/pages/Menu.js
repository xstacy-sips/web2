import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import MenuItem from '../components/MenuItem';
import { loadMenuData } from '../data/menuData';
import './Menu.css';

const MenuCategory = ({ title, subtitle, note, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu-category">
      <button
        className="category-toggle"
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h3 className="category-title">
          {title} 
          <br/>{subtitle && <span style={{ fontSize: '0.7em', color: '#846b59' }}>{subtitle}</span>}
        </h3>
        <span className={`category-chevron ${isOpen ? 'open' : ''}`} aria-hidden="true">▾</span>
      </button>

      <div className={`category-content ${isOpen ? 'open' : ''}`}>
        {note && (
          <p className="category-note">{note}</p>
        )}
        
        <div className="menu-grid">
          {items.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const [menuData, setMenuData] = useState(() => loadMenuData());

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.menu-item');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease-out';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleStorage = () => {
      setMenuData(loadMenuData());
    };

    window.addEventListener('storage', handleStorage);
    window.addEventListener('xstacy-menu-updated', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('xstacy-menu-updated', handleStorage);
    };
  }, []);

  if (!menuData) return null;

  return (
    <div className="menu-page">
      <PageHeader title="Menu" subtitle="Making The World Smile, One Sip at a Time" />

      <section className="menu">
        <div className="container" style={{ padding: '0' }}>
          {menuData.SparklingNectar && <MenuCategory {...menuData.SparklingNectar} />}
          {menuData.MilkyNectar && <MenuCategory {...menuData.MilkyNectar} />}
          {menuData.WarmNectar && <MenuCategory {...menuData.WarmNectar} />}
          {menuData.Snacks && <MenuCategory {...menuData.Snacks} />}
          
          {/* Special Offer */}
          {/* <div className="special-offer">
            <h2>T@g & Sip!</h2>
            <p className="offer-discount">Get 10% off on any drink!</p>
            <p className="offer-description">Take a photo of your drink, Post on Insta & tag us</p>
            <p className="offer-tag">@xstacy</p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Menu;
