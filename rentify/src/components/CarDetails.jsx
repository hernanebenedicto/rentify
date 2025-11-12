import React from "react";

function CarDetails({ car, onClose, onRent }) {
  if (!car) return null;

  return (
    <div className="modalForm">
      <div className="modal">
        <button className="closeBtn" onClick={onClose}>
          X
        </button>

        <h2>{car.name}</h2>
        <img src={car.img} alt={car.name} />
        <p>Price: {car.price}</p>
        <p>View details and rent this car now</p>

        <button className="hero-btn" onClick={onRent}>
          Rent This Car
        </button>
      </div>
    </div>
  );
}

export default CarDetails;