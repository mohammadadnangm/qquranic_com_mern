import React from "react";
import Navbar from "../components/Navbar";
import QaidaReading from "../components/QaidaReading";
import Footer from "../components/Footer";

const Qaida = () => {
  return (
    <>
      <Navbar />
      <h1 className="HeaderName">Qaida</h1>
      <QaidaReading />
      <Footer />
    </>
  );
};

export default Qaida;
