import React from 'react';
import './DrinkCard.css';

const DrinkCard = ({ image, name, description, price }) => {
  return (
    <div className="preview-card">
      {image && (
        <div>
          <img className="rounded-box" src={image} alt={name} width="200px" />
        </div>
      )}
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="price">₹{price}</span>
    </div>
  );
};

export default DrinkCard;
