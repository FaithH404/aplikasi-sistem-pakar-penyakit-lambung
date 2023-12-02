// ContactPerson.js
import React from "react";
import "../Style/Contact.css";
import "../Assets/mine-craft.jpg";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Person</h2>
      <div className="person-card">
        <img src="https://placekitten.com/200/200" alt="Person" className="person-image" />
        <div className="person-details">
          <h3>M. Saiful Faatih Al Avian</h3>
          <p>Email: rfaatih@gmail.com</p>
          <p>Phone: +62 878 2695 8039</p>
        </div>
      </div>
      <div className="person-card">
        <img src="https://placekitten.com/200/200" alt="Person" className="person-image" />
        <div className="person-details">
          <h3>Seto Dwi Laksono</h3>
          <p>Email: email@example.com</p>
          <p>Phone: +123 456 789</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
