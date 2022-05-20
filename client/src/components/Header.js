import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header-section ">
        <section className="container header-container ">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                Learn Quran with tajweed <br /> Easy For You.
              </h1>
              <p className="main-hero-para">
                Whether you are proficient in reading the Quran and want to
                teach others or whether you wish to learn, create an account and
                begin your journey towards success.
              </p>
              <h3>Want to know more about us?</h3>
              <div className="two btn">
                <button className="btn-style btn-style-border aboutus-section-button">
                  About Us
                </button>
                <button className="btn-style2 btn-style-border aboutus-section-button">
                  Our Tutors
                </button>
              </div>
            </div>

            {/*  --------------- header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side ">
              <form class="row g-3 form-row shadow p-3 mb-5 bg-body rounded">
                <div class="col-12 form-rows">
                  <label for="inputName" class="form-label">
                    Student Name
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Enter your name here"
                  />
                </div>
                <div class="col-12 form-rows">
                  <label for="inputFName" class="form-label">
                    Father/Mother Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Enter your father/mother name here"
                  />
                </div>
                <div class="col-12 form-rows">
                  <label for="inputNumber" class="form-label">
                    WhatsApp Number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Please enter number with country code"
                  />
                </div>

                <div class="col-md-6 form-rows">
                  <label for="inputState" class="form-label">
                    Course
                  </label>
                  <select id="inputState" class="form-select">
                    <option selected>Select Course</option>
                    <option>Basic Qaida</option>
                    <option>Quran with Tajweed</option>
                    <option>Quran Memorization</option>
                    <option>Quran Translation</option>
                    <option>Quran Tafseer</option>
                    <option>Namaz, Kalma, Dua</option>
                  </select>
                </div>
                <div class="col-md-6 form-rows">
                  <label for="inputCity" class="form-label">
                    Country
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCity"
                    placeholder="Entry your country name"
                  />
                </div>

                <div class="col-12 form-rows">
                  <button type="submit" class="btn-style3 btn-style-border">
                    Get Trial
                  </button>
                </div>
              </form>
              {/* <img
                src="./images/hero1.png"
                alt="heroimg"
                className="img-fluid"
              />
              <div className="two-btn">
                <button type="button" className="btn btn-primary btn-lg p-2 ">
                  Get Free Trial
                </button>
                <button type="button" className="btn btn-secondary btn-lg p-2">
                  Sign Up as Tutor
                </button>
              </div>*/}
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
