import React, { useState } from "react";
import "./HowItWorks.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import howItWorkApi from "../API/howItWorkApi.js";
import headerbg from "../assets/headerbg.webp";

const HowItWorks = () => {
  const [workData] = useState(howItWorkApi);
  console.log(workData);
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
            <h1 className="mb-3 page-header-text">How It Works</h1>
          </div>
        </div>
      </div>
      {/* page header end */}

      <section>
        <div className="work-containerp container">
          <h1 className="main-heading text-center"> How It Works?</h1>
          <h3 className="sub-heading text-center"> 3 easy steps to start</h3>
          <div className="row">
            {workData.map((curElem) => {
              const { logo, title, info } = curElem;
              return (
                <>
                  <div className="col-12 col-lg-4 text-center work-containerp-subdiv">
                    <div className="card">
                      <i className={`fontawesome-style ${logo}`}></i>
                      <h2 className="sub-heading">{title}</h2>
                      <p className="main-hero-para w-100">{info}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="d-grid gap-2 col-3 mx-auto find-tutor-button">
            <button className="btn btn-primary" type="button">
              Find Tutor
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HowItWorks;
