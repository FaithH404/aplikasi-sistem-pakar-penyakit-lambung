// Konsul.js
import React, { useState } from "react";
import "../Style/Analysis.css";

const Konsul = () => {
  const [gejala, setGejala] = useState("");
  const [hasilKonsul, setHasilKonsul] = useState("");

  const handleInputChange = (e) => {
    setGejala(e.target.value);
  };

  const handleKonsul = () => {
    // Implementasi AI atau sistem pakar di sini untuk mendapatkan hasil konsultasi
    // Contoh sederhana, Anda dapat mengganti logika ini dengan implementasi yang sesuai
    if (gejala) {
      setHasilKonsul(`Berdasarkan Analisa  "${gejala}", disarankan untuk konsultasi dengan dokter.`);
    } else {
      setHasilKonsul("Silakan masukkan gejala Anda untuk mendapatkan hasil konsultasi.");
    }
  };

  return (
    <div className="konsul-container">
      <h2 className="h2-konsul">Konsultasi AI</h2>
      <label className="label-konsul">
        Gejala:
        <input type="text" value={gejala} onChange={handleInputChange} className="input-konsul" />
      </label>

      <button className="button-konsul" onClick={handleKonsul}>
        Konsultasi
      </button>
      <div className="hasil-container">
        <h3 className="h3-hasil">Hasil Konsultasi:</h3>
        <p className="p-hasil">{hasilKonsul}</p>
      </div>
    </div>
  );
};

export default Konsul;
