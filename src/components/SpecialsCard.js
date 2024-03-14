import React from "react";
import "../styles/Card.css"

const Card = ({dish}) => {
    const { image, name, price, description } = dish;

    return(
        <div className="card-container">
            <div className="card-image">
                <img src={image} alt={name} />
            </div>
          <div className="card-content">
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>{description}</p>
            <div className="button-wrapper">
              <button
              className="card-button"
              type="button">Order a Delivery
              </button>
            </div>
          </div>
        </div>
    );
  };

export default Card;