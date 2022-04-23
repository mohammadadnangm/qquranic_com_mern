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
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/findstudents">
            Find Students
          </NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/priceplan">
            Fee & Plans
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/aboutme">
            About Me
          </NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/aboutme">
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

        <li class="nav-item">
          <form className="d-flex">
            <button
              className="btn  btn-style"
              type="submit"
              //onClick={<Signup />}
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
          <div className="container">
            <a className="navbar-brand" href="/">
              Q Quranic
            </a>
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
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <RenderMenu />
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
