import React from "react";
import Navbar from "../components/Navbar";
import AboutmeC from "../components/AboutmeC";
import Footer from "../components/Footer";

const Aboutme = () => {
  return (
    <>
      <Navbar />
      <h1 className="HeaderName">About Me</h1>
      <AboutmeC />

      <Footer />
    </>
  );
};

export default Aboutme;
