import React from "react";
import Footer from "../Components/footer";
import "../Style/About.css";

const About = () => {
  return (
    <div className="about">
      <main>
        <section className="hero">
          <h1>ABOUT</h1>
        </section>
        <div className="tentang">
          <h2>Aplikasi Sistem Pakar Penyakit Lambung</h2>
          <p>
            Aplikasi sitem pakar ini kami buat untuk memenuhi tugas besar dalam mata kuliah Intelegensia Semu.
            <br />
            Pada tugas kali ini, kami berupaya untuk membuat aplikasi AI yang dapat memprediksi penyakit lambung berdasarkan kategori gejala yang di derita.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
