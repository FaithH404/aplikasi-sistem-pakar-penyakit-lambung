// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Perhatikan penggunaan Routes di sini
import Home from "./Pages/home";
import Header from "./Components/header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "./App.css";
import Analysis from "./App/Analysis";
import Konsul from "./App/Konsul";
// import Footer from "./Components/footer";

function App() {
  return (
    <Router>
      <Header /> {/* Tampilkan header di setiap halaman */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/konsul" element={<Konsul />} />
      </Routes>
    </Router>
  );
}

export default App;
