import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Mengganti useHistory dengan useNavigate
import "../Style/featureCard.css";

const FeatureCard = ({ title, description, icon, to }) => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate(); // Mengganti useHistory dengan useNavigate

  const handleClick = () => {
    setIsClicked(!isClicked);
    // Redirect ke halaman tujuan saat kartu diklik
    navigate(to);
  };

  return (
    <div className={`feature-card ${isClicked ? "clicked" : ""}`} onClick={handleClick}>
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
