import React from "react";
import Features from "../Components/features";
import Footer from "../Components/footer";
import "../Style/Home.css";

const Home = () => {
  return (
    <div className="home">
      <main>
        <section className="hero">
          <h2>Selamat datang di Aplikasi Sistem Pakar</h2>
          <p>Aplikasi yang membantu Anda dengan solusi cerdas dan prediksi berdasarkan sistem pakar.</p>
        </section>
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
