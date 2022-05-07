import React from "react";
import Navbar from "../components/Navbar";
import QuranReading from "../components/QuranReading";
import Footer from "../components/Footer";

const Quran = () => {
  return (
    <>
      <Navbar />
      <h1 className="HeaderName">Quran</h1>
      <QuranReading />

      <Footer />
    </>
  );
};

export default Quran;
