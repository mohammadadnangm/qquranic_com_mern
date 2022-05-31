import React, { useState } from "react";
import "./PageHeader.css";
import "./Courses.css";
import coursesApi from "../API/coursesApi";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import headerbg from "../assets/headerbg.webp";
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
          // backgroundImage:
          //   "url('https://mdbootstrap.com/img/new/slides/041.webp')",
          backgroundImage: `url(${headerbg})`,
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

      <section className="course-section-1">
        <div className="container ">
          <div className="row">
            <div className="col-12 col-lg-6  courses-leftside d-flex justify-content-center flex-start flex-column">
              <h1 className="title">Course We Offere</h1>
              <h3 className="heading">A Brief Summary</h3>
              <p className="description">
                Do you want to read the Quran with proper pronunciation
                (Tajweed)? Would you like your child to memorize the Quran
                (Hifz) but don't know where to start? At Qutor, we make it our
                mission to develop innovative tools to help you achieve these
                goals. Whether you are proficient in reading the Quran and want
                to teach others or whether you wish to learn, create an account
                and begin your journey towards success.
              </p>

              <br />
              <h3 className="heading">
                Contact us to start learning from your selected tutor!
              </h3>
              <div className="text-left col-3 mt-2 findtutor-button">
                <button className="btn mt-3" type="button">
                  <NavLink
                    className="btn-findtutor p-3 btn-findtutor-border"
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </button>
              </div>
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-4  courses-rightside d-flex justify-content-center flex-end flex-column">
              <img src="./images/hero1.png" alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>

      <section className="course-section-2">
        <div className="container course-container justify-content-center">
          <h1 className="main-heading text-center fw-bold">
            Different Islamic Courses
          </h1>
          <h3 className="sub-heading text-center">
            To see detail of any course, just click on course name it.
          </h3>

          <div className="row">
            {serviceData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div
                    className="col-11 col-lg-4 col-xxl-4 text-center courses-container-subdiv"
                    key={id}
                  >
                    <i className={`course-image-p ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para">{info}</p>
                    <div className="button-row">
                      <button className="btn ">
                        <NavLink
                          className="btn-style1 p-3 btn-howitworks-border"
                          to="/findtutors"
                        >
                          Course Detail
                        </NavLink>
                      </button>
                      <button className="btn ">
                        <NavLink
                          className="btn-style2 p-3 btn-howitworks-border"
                          to="/signup"
                        >
                          Get Trial
                        </NavLink>
                      </button>
                    </div>
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
