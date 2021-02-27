import React, { useState } from "react";

function PlantCard({ image, name, price }) {
  const [inStock, toggleInStock] = useState(true);

  function handleClick() {
    toggleInStock((inStock) => !inStock);
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>

      <button onClick={handleClick} className={inStock ? "primary" : ""}>
        {inStock ? "in stock" : "out of stuck"}
      </button>
    </li>
  );
}

export default PlantCard;
