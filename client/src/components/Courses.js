import React, { useState } from "react";
import "./Courses.css";
import coursesApi from "../API/coursesApi.js";

const Courses = () => {
  const [serviceData] = useState(coursesApi);
  return (
    <>
      <section className="courses-section">
        <div className="container course-container justify-content-center">
          <h1 className="main-heading text-center fw-bold">Our Courses</h1>
          <h4 className="sub-heading text-center">
            Choose your desired course
          </h4>
          <div className="row">
            {serviceData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div
                    className="col-12 col-lg-4 col-xxl-4 text-left courses-container-subdiv"
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
