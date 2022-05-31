import React, { useState } from "react";
import "./WhyUs.css";
import Navbar from "../components/Navbar";
import Numbers from "../components/Numbers";
import Footer from "../components/Footer";
import whyUsApi from "../API/whyUsApi.js";
import headerbg from "../assets/headerbg.webp";

const WhyUs = () => {
  const [aboutData] = useState(whyUsApi);
  return (
    <>
      <Navbar />

      {/* page header start */}
      <div
        className="p-5 text-center bg-image"
        style={{
          // backgroundImage:
          //   "url('https://mdbootstrap.com/img/new/slides/041.webp')",
          backgroundImage: `url(${headerbg})`,
          height: 400,
        }}
      >
        <div className="d-flex page-header-title justify-content-center align-items-center h-100">
          <div className="page-header-text">
            <h1 className="mb-3 page-header-text">Why Choose Q Quranic</h1>
          </div>
        </div>
      </div>
      {/* page header end */}

      <section className="whyus-section">
        <div className="container mb-5 whyus-container">
          <div className="row">
            {/* 1section leftt side data  */}
            <div className="col-12 col-lg-7 d-flex justify-content-center align-items-start flex-column  whyus-section-lefttside">
              <h3 className="title">Why Choose Us?</h3>
              <h1 className="heading">
                World class Services <br /> Simple, Reliable, Secure
              </h1>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row info" key={id}>
                      <div className="col-1 number">{id}</div>
                      <div className="col-10 data">
                        <h2>{title}</h2>
                        <p className="para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border whyus-section-button">
                learn more
              </button>
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-5  text-center whyus-section-rightside-img">
              <img
                src="./images/callcenter.jpg"
                alt="WhyUsImg"
                className="whyus-img"
              />
            </div>
          </div>
        </div>
      </section>
      <Numbers />
      <Footer />
    </>
  );
};

export default WhyUs;
