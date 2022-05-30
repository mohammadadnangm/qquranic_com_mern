import React from "react";
import "./Footer.css";
import logo from "../assets/footer-logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <hr className="hr-footer-top" />

        <div className="container">
          <div className="row3">
            <div className="col-12 col-lg-10 mx-auto">
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
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/contact">Contact Us</a>
                    </li>
                    <li>
                      <a href="/faqs">FAQs</a>
                    </li>
                    <li>
                      <a href="/pricingplan">Prices and Plans</a>
                    </li>

                    <li>
                      <a href="/privacypolicy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/tos">ToS</a>
                    </li>
                  </ul>
                </div>

                <div className="col-12 col-lg-3 coloumn-3">
                  <h2>Usefull Links</h2>
                  <ul>
                    <li>
                      <a href="/findtutors">Find Tutors</a>
                    </li>
                    <li>
                      <a href="/testimonials">Testimonials</a>
                    </li>
                    <li>
                      <a href="/howitworks">How It Works?</a>
                    </li>
                    <li>
                      <a href="/howitworks">How to use App?</a>
                    </li>
                    {/* <li>
                      <a href="/quran">Read Quran</a>
                    </li> */}
                    <li>
                      <a href="/qaida">Read Qaida</a>
                    </li>
                  </ul>
                </div>

                <div className="col-12 col-lg-3 coloumn-4">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <i className="fab fa-facebook-f fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="/">
                        <i className="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <i className="fab fa-youtube fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i className="fab fa-twitter fontawesome-style"></i>
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
                    Copyright @ {new Date().getFullYear()} Quran Tutor. All
                    rights reserved.
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
