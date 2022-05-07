import React from "react";
import Navbar from "../components/Navbar";
import SignupC from "../components/SignupC";
import Footer from "../components/Footer";

const Signup = () => {
  return (
    <>
      <Navbar />
      <h1 className="HeaderName">Sign-Up</h1>
      <SignupC />

      <Footer />
    </>
  );
};

export default Signup;
