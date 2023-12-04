import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Signup.css";
import axios from "axios";
import Navbar from "../components/Navbar";
import headerbg from "../assets/bg-1.jpeg";
import Footer from "../components/Footer";
import signup from "../assets/signup.webp";
import validator from "validator";

const Signup = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { name, email, phone, course, country } = user;
    if (name && email && phone && course && country) {
      axios.post("/signup", user).then((res) => {
        alert(res.data.message);
        history.push("/");
      });
    } else {
      alert("invlid input front end");
    }
  };

  return (
    <>
      <Navbar />
      {/* page header start */}{" "}
      <div className="bgdiv">
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage: `url(${headerbg})`,
          }}
        >
          <div className="d-flex page-header-title justify-content-center align-items-center h-100">
            <div className="page-header-text">
              <h1 className="mb-3 page-header-text">Register</h1>
            </div>
          </div>
        </div>{" "}
      </div>
      {/* page header end */}
      <section className="signup-section">
        <div className="container signup-container">
          <div className="row">
            <div className="col-12 col-lg-12 mx-auto">
              <div className="row">
                <div className="signup-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    New Here <br />
                  </h1>
                  <h3>Just Register To Get Started.</h3>
                  <p className="signup-para">
                    Fill the register form and click on register button to get
                    registered with Q Quranic. After registration our team will
                    contact you on the given WhatsApp Number or Email, try to
                    respond our team accordingly.
                  </p>
                  <figure>
                    <img src={signup} alt="contatUsImg" className="img-fluid" />
                  </figure>
                </div>

                {/* right side contact form  */}
                <div className="signup-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <h1>Registeration Form:</h1>
                      <div className="col-12 col-lg-6 signup-input-feild">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          autoComplete="off"
                          placeholder="Name"
                          value={user.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12 col-lg-6 signup-input-feild">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          autoComplete="off"
                          className="form-control"
                          placeholder="Email"
                          value={user.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 signup-input-feild">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="off"
                          className="form-control"
                          placeholder="WhatsApp Number "
                          value={user.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12 col-lg-6 signup-input-feild">
                        <select
                          name="course"
                          id="course"
                          class="form-select "
                          value={user.course}
                          onChange={handleChange}
                        >
                          <option selected>Select Course</option>
                          <option>Basic Qaida</option>
                          <option>Quran with Tajweed</option>
                          <option>Quran Memorization</option>
                          <option>Quran Translation</option>
                          <option>Quran Tafseer</option>
                          <option>Namaz, Kalma, Dua</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 signup-input-feild">
                        <input
                          type="text"
                          name="country"
                          id="country"
                          autoComplete="off"
                          className="form-control"
                          placeholder="Country"
                          value={user.country}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-style w-100 mt-5"
                      onClick={submitHandler}
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signup;
