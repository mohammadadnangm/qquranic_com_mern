import React from "react";
import Navbar from "../components/Navbar";
import SigninC from "../components/SigninC";
import Footer from "../components/Footer";

const Signin = () => {
  return (
    <>
      <Navbar />
      <h1 className="HeaderName">Sign-In</h1>
      <SigninC />

      <Footer />
    </>
  );
};

export default Signin;
