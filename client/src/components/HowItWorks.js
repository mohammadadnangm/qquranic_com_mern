import React, { useState } from "react";
import "./HowItWorks.css";
import howItWorkApi from "../API/howItWorkApi.js";
import { NavLink } from "react-router-dom";

const HowItWorks = () => {
  const [workData] = useState(howItWorkApi);
  console.log(workData);
  return (
    <>
      <section className="howitworks-section">
        <div className="container work-container ">
          <h1 className="main-heading text-center"> How It Works?</h1>
          <h3 className="sub-heading text-center"> 3 easy steps to start</h3>
          <div className="row">
            {workData.map((curElem) => {
              const { logo, title, info } = curElem;
              return (
                <>
                  <div className="col-12 col-lg-4 text-center work-container-subdiv">
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
          <div className="text-center col-3 mx-auto find-tutor-button">
            <button className="btn-stylesd" type="button">
              <NavLink className="ft-nav-btn" to="/findtutors">
                Find Tutors
              </NavLink>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
