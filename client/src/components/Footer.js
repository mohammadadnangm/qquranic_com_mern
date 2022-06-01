import React from "react";
import "./Footer.css";
import logo from "../assets/footer-logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <hr className="hr-footer-top" />

        <div className="container">
          <div className="row3">
            <div className="col-12 col-lg-12 mx-auto">
              <div className="row">
                <div className="col-12 col-lg-3 coloumn-1 d-grid">
                  {/* <h2 className="footer-title">Q Quranic</h2> */}
                  <img src={logo} alt="footer-logo" className="footer-logo" />
                  <br />
                  <p className="footer-para">
                    Do you want to read the Quran with proper pronunciation
                    (Tajweed)? Would you like your child to memorize the Quran
                    (Hifz) but don't know where to start? At Qutor, we make it
                    our mission to develop innovative tools to help you achieve
                    these goals. Whether you are proficient in reading the Quran
                    and want to teach others or whether you wish to learn,
                    create an account and begin your journey towards success.
                  </p>
                </div>

                <div className="col-12 col-lg-3 coloumn-2">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <NavLink to="/aboutus">About Us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact Us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/faqs">FAQs</NavLink>
                    </li>
                    <li>
                      <NavLink to="/priceplan">Prices and Plans</NavLink>
                    </li>

                    <li>
                      <NavLink to="/privacypolicy">Privacy Policy</NavLink>
                    </li>
                    <li>
                      <NavLink to="/tos">ToS</NavLink>
                    </li>
                  </ul>
                </div>

                <div className="col-12 col-lg-3 coloumn-3">
                  <h2>Usefull Links</h2>
                  <ul>
                    <li>
                      <NavLink to="/findtutors">Find Tutors</NavLink>
                    </li>
                    {/* <li>
                      <NavLink to="/testimonials">Testimonials</NavLink>
                    </li> */}
                    <li>
                      <NavLink to="/howitworks">How It Works?</NavLink>
                    </li>
                    <li>
                      <NavLink to="/useapp">How to use App?</NavLink>
                    </li>
                    {/* <li>
                      <NavLink to="/quran">Read Quran</NavLink>
                    </li> */}
                    <li>
                      <NavLink to="/qaida">Read Qaida</NavLink>
                    </li>
                  </ul>
                </div>

                <div className="col-12 col-lg-3 coloumn-4">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-2 mx-auto">
                      <a href="https://web.facebook.com/qquranic">
                        <i className="fab fa-facebook-f fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-2 mx-auto">
                      <a href="https://www.instagram.com/q__quranic/">
                        <i className="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-2 mx-auto">
                      <a href="https://www.youtube.com/c/qquranic">
                        <i className="fab fa-youtube fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-2 mx-auto">
                      <a href="https://twitter.com/qquranic">
                        <i className="fab fa-twitter fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-2 mx-auto">
                      <a href="https://linkedin.com/qquranic">
                        <i className="fab fa-linkedin fontawesome-style"></i>
                      </a>
                    </div>
                  </div>

                  <div className="row2">
                    {/* <div className="col-12 mx-auto img1">
                      <a href="/">
                        <img src="./images/appstore.png" alt="App Store" />
                      </a>
                    </div> */}
                    <div className="col-12 mx-auto img2">
                      <a href="/">
                        <img src="./images/playstore.png" alt="App Store" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="hr-footer-bottom" />

              <div className="mt-5 d-flex copyright-row">
                <div className=" flex-start">
                  <p className="copyright-text ">
                    Copyright @ {new Date().getFullYear()} Q Quranic. All rights
                    reserved.
                  </p>
                </div>
                <div className=" flex-end">
                  <p className="copyright-made">
                    Made ♥️ By <a href="https://crudics.com">crudics</a>
                  </p>
                </div>
              </div>
              {/* <div className="mt-5">
                <p className="main-hero-para1 text-right ">
                  Made By crudics.com
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
