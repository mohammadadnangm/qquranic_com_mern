import React from "react";
import Navbar from "../components/Navbar";
import ContactsUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <h1 className="HeaderName">Contact</h1>
      <ContactsUs />

      <Footer />
    </>
  );
};

export default Contact;
