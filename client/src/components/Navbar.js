import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
// import { NavDropdown } from "react-bootstrap";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
  const RenderMenu = () => {
    return (
      <>
        {/* <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">
            Home
          </NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/findtutors">
            Tutors
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/courses">
            Courses
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/priceplan">
            Fee & Plans
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/qaida">
            Read
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/aboutus">
            About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/faqs">
            FAQs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/whyus">
            Why Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/howitworks">
            How
          </NavLink>
        </li>

        <li class="nav-item">
          <form className="d-flex">
            <button
              className="btn  btn-style"
              type="submit"
              onClick={() => history.push("/signup")}
            >
              Register
            </button>
            {/* <button
              className="btn  btn-style btn-style-border"
              type="submit"
              onClick={() => history.push("/signin")}
            >
              Log in
            </button> */}
          </form>
        </li>
      </>
    );
  };

  // toggle bar in mobile view click functionality
  const [show, setShow] = useState(false);
  const history = useHistory();

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container d-flex justify-content-between ">
            <div>
              <NavLink className="nav-link navbar-brand" to="/">
                Q Quranic
              </NavLink>
            </div>
            <div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setShow(!show)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <RenderMenu />
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
      {/* <div>
        <img
          className="HeadImage"
          src="https://images.pexels.com/photos/8522572/pexels-photo-8522572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div> */}
    </>
  );
};

export default Navbar;
