import React from 'react';
import './MenuItem.css';

const MenuItem = ({ name, description, price, priceSmall, badges = [], outOfStock = false }) => {
  const imageSrc = name
    // ? `/assets/images/Doddel Drinks/${encodeURIComponent(name)}.jpg`
       ? `${process.env.PUBLIC_URL}/assets/images/Doddel Drinks/${encodeURIComponent(name)}.jpg`

    : null;
  const normalizedDescription =
    typeof description === 'string' ? description.replace(/\\n/g, '\n') : description;

  return (
    <div className={`menu-item ${outOfStock ? 'out-of-stock' : ''}`}>
      {imageSrc && (
        <div className="menu-item-media">
          {(badges.length > 0 || outOfStock) && (
            <div className="menu-item-header">
              <div className="menu-badges">
                {outOfStock && (
                  <span className="badge out-of-stock">
                    <span className="badge-text">Out of stock</span>
                  </span>
                )}
                {badges.map((badge, index) => (
                  <span key={index} className={`badge ${badge.toLowerCase().replace(' ', '-')}`}>
                    <span className="badge-text">{badge}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="menu-item-photo">
            <img src={imageSrc} alt={name} loading="lazy" />
          </div>
        </div>
      )}
      <div className="menu-item-body">
        <div className="menu-item-content">
          <h3>{name}</h3>
          {normalizedDescription && (
            <p className="menu-item-description">{normalizedDescription}</p>
          )}
          <div className="menu-item-prices">
            {priceSmall && (
              <div className="price-block price-mini">
                <span className="price-amount">{priceSmall}</span>
                <span className="price-label">Mini</span>
              </div>
            )}
            {price && (
              <div className="price-block price-regular">
                <span className="price-amount price-large">{price}</span>
                <span className="price-label" >Reguler</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
