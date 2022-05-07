import React from "react";
import Navbar from "../components/Navbar";
import Courses from "../components/Courses";
import Footer from "../components/Footer";

const Course = () => {
  return (
    <>
      <Navbar />
      <h1 className="HeaderName">Courses</h1>
      <Courses />

      <Footer />
    </>
  );
};

export default Course;
