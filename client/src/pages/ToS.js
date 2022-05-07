import React from "react";
import "./ToS.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ToS = () => {
  return (
    <>
      <Navbar />
      <h1 className="HeaderName">Tos</h1>
      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">TermOfServices</h3>
              <h1 className="main-heading">A Brief Summary</h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus reprehenderit molestias impedit eius voluptates
                voluptatum? Obcaecati assumenda blanditiis vel, est at dolores
                consequuntur dicta fugiat pariatur eos iusto, error
                perspiciatis.
              </p>

              <br />
              <button className="btn-style btn-style-border">About Us</button>
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-5  our-service-rightside-img">
              <img src="./images/hero1.png" alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ToS;
