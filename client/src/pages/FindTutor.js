import React from "react";
import "./FindTutors.css";
import Navbar from "../components/Navbar";
import FindTutors from "../components/FindTutors";
import Footer from "../components/Footer";

const FindTutor = () => {
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
            <h1 className="mb-3 page-header-text">Tutors</h1>
          </div>
        </div>
      </div>
      {/* page header end */}

      <section className="common-section our-courses our-courses-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-courses-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">Find Your Tutor Here</h3>
              <h1 className="main-heading">A Brief Summary</h1>
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
              <button className="btn-style btn-style-border">About Us</button>
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-5  our-service-rightside-img">
              <img src="./images/hero1.png" alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="CardsMainDiv">
          <div class="card">
            <img
              class="card-img-top"
              src="https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <tr>
                <td>Education:</td>
                <td>BSIT</td>
              </tr>
              <tr>
                <td>Status:</td>
                <td>Available</td>
              </tr>
              <tr>
                <td>Experience:</td>
                <td>5 Year</td>
              </tr>
              <tr>
                <td>Whatsapp:</td>
                <td>+923040070085</td>
              </tr>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top"
              src="https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <tr>
                <td>Education:</td>
                <td>BSIT</td>
              </tr>
              <tr>
                <td>Status:</td>
                <td>Available</td>
              </tr>
              <tr>
                <td>Experience:</td>
                <td>5 Year</td>
              </tr>
              <tr>
                <td>Whatsapp:</td>
                <td>+923040070085</td>
              </tr>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top"
              src="https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <tr>
                <td>Education:</td>
                <td>BSIT</td>
              </tr>
              <tr>
                <td>Status:</td>
                <td>Available</td>
              </tr>
              <tr>
                <td>Experience:</td>
                <td>5 Year</td>
              </tr>
              <tr>
                <td>Whatsapp:</td>
                <td>+923040070085</td>
              </tr>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top"
              src="https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <tr>
                <td>Education:</td>
                <td>BSIT</td>
              </tr>
              <tr>
                <td>Status:</td>
                <td>Available</td>
              </tr>
              <tr>
                <td>Experience:</td>
                <td>5 Year</td>
              </tr>
              <tr>
                <td>Whatsapp:</td>
                <td>+923040070085</td>
              </tr>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top"
              src="https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <tr>
                <td>Education:</td>
                <td>BSIT</td>
              </tr>
              <tr>
                <td>Status:</td>
                <td>Available</td>
              </tr>
              <tr>
                <td>Experience:</td>
                <td>5 Year</td>
              </tr>
              <tr>
                <td>Whatsapp:</td>
                <td>+923040070085</td>
              </tr>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top"
              src="https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <tr>
                <td>Education:</td>
                <td>BSIT</td>
              </tr>
              <tr>
                <td>Status:</td>
                <td>Available</td>
              </tr>
              <tr>
                <td>Experience:</td>
                <td>5 Year</td>
              </tr>
              <tr>
                <td>Whatsapp:</td>
                <td>+923040070085</td>
              </tr>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FindTutor;
