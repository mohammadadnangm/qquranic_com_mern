import React from "react";
import "./HomePage.css";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";
import Numbers from "../components/Numbers";
import Courses from "../components/Courses";
import AboutUs from "../components/AboutusC";
import UseApp from "../components/UseApp";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";
//import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <HowItWorks />
      <Numbers />
      <Courses />
      <AboutUs />
      <UseApp />
      <WhyUs />
      <Footer />
    </div>
  );
};

export default Home;
