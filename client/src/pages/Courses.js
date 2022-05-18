import React, { useState } from "react";
import "./PageHeader.css";
import "./Courses.css";
import coursesApi from "../API/coursesApi";
import Navbar from "../components/Navbar";
// import Courses from "../components/Courses";
import Footer from "../components/Footer";

const Course = () => {
  const [serviceData] = useState(coursesApi);
  return (
    <>
      <Navbar />

      {/* page header start */}
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://mdbootstrap.com/img/new/slides/041.webp')",
          height: 400,
        }}
      >
        <div className="d-flex page-header-title justify-content-center align-items-center h-100">
          <div className="page-header-text">
            <h1 className="mb-3 page-header-text">Courses</h1>
          </div>
        </div>
      </div>
      {/* page header end */}

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

      <Footer />
    </>
  );
};

export default Course;
