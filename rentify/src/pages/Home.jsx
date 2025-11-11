import React, { useState } from "react";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const cars = [
    { id: 1, name: "Hyundai Starex", price: "₱50/day", img: "/car/car1.png" },
    { id: 2, name: "Toyota Hilux", price: "₱60/day", img: "/car/car2.png" },
    { id: 3, name: "Toyota Innova", price: "₱120/day", img: "/car/car3.png" },
    { id: 4, name: "Toyota Hiace", price: "₱200/day", img: "/car/Hiace.png" },
  ];

  const handleOpen = (car) => {
    setSelectedCar(car);
    setShowModal(true);
    setShowForm(false);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedCar(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Sent");
    setShowModal(false);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Perfect Ride</h1>
          <p>Rent the best cars at affordable prices — anytime, anywhere.</p>
          <button className="hero-btn" onClick={() => handleOpen(null)}>
            Book Now
          </button>
        </div>
      </section>

      {/* Cars Section */}
      <section id="cars" className="popular">
        <h2>Popular Cars</h2>
        <div className="car-list">
          {cars.map((car) => (
            <div key={car.id} className="car-card">
              <img src={car.img} alt={car.name} />
              <h3>{car.name}</h3>
              <p>{car.price}</p>
              <button className="hero-btn" onClick={() => handleOpen(car)}>View</button>
            </div>
          ))}
        </div>
        <button className="hero-btn">View all available cars</button>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          We provide a seamless car rental experience with a wide range of
          vehicles and flexible booking options. Whether you need a car for a
          day or a week, we got you covered.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>
          Email us at <strong>renify@gmail.com</strong> or call{" "}
          <strong>0912-345-6789</strong> for more questions
        </p>
      </section>

      {/* Car Modal */}
      {showModal && (
        <div className="modalForm">
          <div className="modal">
            <button className="closeBtn" onClick={handleClose}>
              X
            </button>

            {!showForm && selectedCar && (
              <>
                <h2>{selectedCar.name}</h2>
                <img src={selectedCar.img} alt={selectedCar.name} width="100%" />
                <p>Price: {selectedCar.price}</p>
                <p>
                  The {selectedCar.name} is a comfortable and reliable car,
                  perfect for long drives or city rides.
                </p>
                <button
                  className="hero-btn"
                  onClick={() => setShowForm(true)}
                >
                  Rent This Car
                </button>
              </>
            )}

            {/* Booking Form Modal */}
            {(!selectedCar || showForm) && (
              <>
                <h2>Book Your Car Now!!</h2>
                <form onSubmit={handleSubmit}>
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
                    <select className="input" required>
                      <option value="">
                        {selectedCar
                          ? selectedCar.name
                          : "Select your preferred car"}
                      </option>
                      {cars.map((car) => (
                        <option key={car.id}>{car.name}</option>
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
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
