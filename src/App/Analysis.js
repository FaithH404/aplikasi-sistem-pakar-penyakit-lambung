// Analysis.js
import React, { useState } from "react";
import "../Style/Analysis.css";
import myImage from "../Assets/logo.png";

const Analysis = () => {
  // State untuk menyimpan status checkbox
  const [symptoms, setSymptoms] = useState({
    nyeriLambung: false,
    perutKembung: false,
    nafsuMakanBerkurang: false,
    mual: false,
    sembelit: false,
    diare: false,
    bbTurun: false,
    babHitam: false,
    demam: false,
    rasaMakananKembali: false,
    babCair: false,
    kejangPerut: false,
    nyeriUluhHati: false,
    perasaanKenyangBerlebihan: false,
    nyeriTukakLambung: false,
    muntah: false,
    rasaTerbakarDiDada: false,
  });

  // Fungsi untuk mengubah status checkbox
  const handleCheckboxChange = (symptom) => {
    setSymptoms((prevSymptoms) => ({
      ...prevSymptoms,
      [symptom]: !prevSymptoms[symptom],
    }));
  };

  // Fungsi untuk menganalisis gejala dan menghasilkan penyakit
  const analyzeSymptoms = () => {
    const selectedSymptoms = Object.keys(symptoms).filter((symptom) => symptoms[symptom]);

    // Algoritma sederhana berdasarkan gejala yang dipilih
    if (selectedSymptoms.includes("nyeriLambung") && selectedSymptoms.includes("perutKembung") && selectedSymptoms.includes("nafsuMakanBerkurang") && selectedSymptoms.includes("mual") && selectedSymptoms.includes("nyeriUluhHati")) {
      return "Gastritis";
    } else if (
      selectedSymptoms.includes("nyeriLambung") &&
      selectedSymptoms.includes("perutKembung") &&
      selectedSymptoms.includes("mual") &&
      selectedSymptoms.includes("sembelit") &&
      selectedSymptoms.includes("diare") &&
      selectedSymptoms.includes("perasaanKenyangBerlebihan")
    ) {
      return "Dispepsia";
    } else if (selectedSymptoms.includes("nafsuMakanBerkurang") && selectedSymptoms.includes("mual") && selectedSymptoms.includes("bbTurun") && selectedSymptoms.includes("babHitam") && selectedSymptoms.includes("kejangPerut")) {
      return "Kanker Lambung";
    } else if (
      selectedSymptoms.includes("nyeriLambung") &&
      selectedSymptoms.includes("perutKembung") &&
      selectedSymptoms.includes("mual") &&
      selectedSymptoms.includes("demam") &&
      selectedSymptoms.includes("rasaMakananKembali") &&
      selectedSymptoms.includes("kejangPerut") &&
      selectedSymptoms.includes("rasaTerbakarDiDada")
    ) {
      return "GERD";
    } else if (
      selectedSymptoms.includes("nyeriLambung") &&
      selectedSymptoms.includes("mual") &&
      selectedSymptoms.includes("diare") &&
      selectedSymptoms.includes("demam") &&
      selectedSymptoms.includes("rasaMakananKembali") &&
      selectedSymptoms.includes("kejangPerut") &&
      selectedSymptoms.includes("muntah")
    ) {
      return "Gastroenteritis";
    } else if (
      selectedSymptoms.includes("perutKembung") &&
      selectedSymptoms.includes("nafsuMakanBerkurang") &&
      selectedSymptoms.includes("bbTurun") &&
      selectedSymptoms.includes("rasaMakananKembali") &&
      selectedSymptoms.includes("kejangPerut") &&
      selectedSymptoms.includes("perasaanKenyangBerlebihan")
    ) {
      return "Gastroparesis";
    } else if (selectedSymptoms.includes("nyeriLambung") && selectedSymptoms.includes("nafsuMakanBerkurang") && selectedSymptoms.includes("mual") && selectedSymptoms.includes("babHitam") && selectedSymptoms.includes("nyeriTukakLambung")) {
      return "Tukak Lambung";
    } else {
      return "Tidak Diketahui";
    }
  };

  return (
    <div className="analysis-container">
      <h2>Analisis Gejala Penyakit</h2>
      <img src={myImage} alt="Description" />
      <p>Silahkan Pilih Gejala Yang Anda Derita</p>
      <div className="symptoms-container">
        <form>
          <input type="checkbox" checked={symptoms.nyeriLambung} onChange={() => handleCheckboxChange("nyeriLambung")} />
          <label>Nyeri Lambung</label>

          <input type="checkbox" checked={symptoms.perutKembung} onChange={() => handleCheckboxChange("perutKembung")} />
          <label>Perut Kembung</label>

          <input type="checkbox" checked={symptoms.nafsuMakanBerkurang} onChange={() => handleCheckboxChange("nafsuMakanBerkurang")} />
          <label>Nafsu Makan Berkurang</label>

          <input type="checkbox" checked={symptoms.mual} onChange={() => handleCheckboxChange("mual")} />
          <label>Mual</label>

          <input type="checkbox" checked={symptoms.sembelit} onChange={() => handleCheckboxChange("sembelit")} />
          <label>Sembelit</label>

          <input type="checkbox" checked={symptoms.diare} onChange={() => handleCheckboxChange("diare")} />
          <label>Diare</label>

          <input type="checkbox" checked={symptoms.bbTurun} onChange={() => handleCheckboxChange("bbTurun")} />
          <label>Berat Badan Menurun</label>

          <input type="checkbox" checked={symptoms.babHitam} onChange={() => handleCheckboxChange("babHitam")} />
          <label>BAB Warna Hitam</label>

          <input type="checkbox" checked={symptoms.demam} onChange={() => handleCheckboxChange("demam")} />
          <label>Demam</label>

          <input type="checkbox" checked={symptoms.rasaMakananKembali} onChange={() => handleCheckboxChange("rasaMakananKembali")} />
          <label>Rasa Makanan Kembali</label>

          <input type="checkbox" checked={symptoms.babCair} onChange={() => handleCheckboxChange("babCair")} />
          <label>BAB Cair</label>

          <input type="checkbox" checked={symptoms.kejangPerut} onChange={() => handleCheckboxChange("kejangPerut")} />
          <label>Kejang Perut</label>

          <input type="checkbox" checked={symptoms.nyeriUluhHati} onChange={() => handleCheckboxChange("nyeriUluhHati")} />
          <label>Nyeri Pada Uluh Hati</label>

          <input type="checkbox" checked={symptoms.perasaanKenyangBerlebihan} onChange={() => handleCheckboxChange("perasaanKenyangBerlebihan")} />
          <label>Perasaan Kenyang Berlebihan</label>

          <input type="checkbox" checked={symptoms.nyeriTukakLambung} onChange={() => handleCheckboxChange("nyeriTukakLambung")} />
          <label>Nyeri Pada Tukak Lambung</label>

          <input type="checkbox" checked={symptoms.muntah} onChange={() => handleCheckboxChange("muntah")} />
          <label>Muntah</label>

          <input type="checkbox" checked={symptoms.rasaTerbakarDiDada} onChange={() => handleCheckboxChange("rasaTerbakarDiDada")} />
          <label>Rasa Terbakar di bagian Dada</label>
        </form>
      </div>
      <div className="result-container">
        <h3>Hasil Analisis:</h3>
        <p>{analyzeSymptoms()}</p>
      </div>
    </div>
  );
};

export default Analysis;
