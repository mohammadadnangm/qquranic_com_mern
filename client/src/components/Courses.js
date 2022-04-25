import React, { useState } from "react";
import "./Courses.css";
import coursesApi from "../API/coursesApi.js";

const Courses = () => {
  const [serviceData] = useState(coursesApi);
  return (
    <>
      <section className="service-section">
        <div className="container service-container justify-content-center">
          <h1 className="main-heading text-center fw-bold">Our Courses</h1>
          <div className="row">
            {serviceData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div
                    className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                    key={id}
                  >
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
