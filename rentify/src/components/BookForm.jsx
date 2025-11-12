import React from "react";

function BookForm({ cars, selectedCar, onSubmit, onClose }) {
  return (
    <div className="modalForm">
      <div className="modal">
        <button className="closeBtn" onClick={onClose}>
          X
        </button>

        <h2>Book Your Car Now!!</h2>
        <form onSubmit={onSubmit}>
          <label>
            Full Name:
            <input className="input" type="text" required />
          </label>

          <label>
            Email:
            <input className="input" type="email" required />
          </label>

          <label>
            Car:
            <select className="input" required defaultValue="">
              <option value="" disabled>
                {selectedCar ? selectedCar.name : "Select your preferred car"}
              </option>
              {cars.map((car) => (
                <option key={car.id} value={car.name}>
                  {car.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            Pickup date:
            <input className="input" type="date" required />
          </label>

          <label>
            Return date:
            <input className="input" type="date" required />
          </label>

          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookForm;