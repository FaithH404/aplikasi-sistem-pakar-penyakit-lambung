import React from "react";
import { useNavigate } from "react-router-dom";
import "./../Style/header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <h1>Aplikasi Sistem Pakar</h1>
      <nav>
        <ul>
          <li onClick={() => navigate("/")}>
            <p>Home</p>
          </li>
          <li onClick={() => navigate("/about")}>
            <p>About</p>
          </li>
          <li onClick={() => navigate("/contact")}>
            <p>Contact</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
