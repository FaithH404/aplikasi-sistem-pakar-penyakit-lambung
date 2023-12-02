import React from "react";
import FeatureCard from "./featureCard";
import "../Style/features.css";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();
  return (
    <section className="features">
      <h2>Fitur Aplikasi Sistem Pakar</h2>
      <div className="feature-container">
        <FeatureCard title="Analisa" description="Menganalisa penyakit berdasarkan gejala yang diderita" icon="🔍" to="/analysis" />
        <FeatureCard title="Konsultasi" description="Mencari solusi dari penyakit yang di derita" icon="📊" to="/konsul" />
        {/* Tambahkan kartu fitur lainnya di sini */}
      </div>
    </section>
  );
};

export default Features;
