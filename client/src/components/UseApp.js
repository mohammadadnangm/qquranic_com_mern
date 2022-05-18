import React, { useState } from "react";
import "./UseApp.css";
import useAppApi from "../API/useAppApi.js";

const UseApp = () => {
  const [aboutData] = useState(useAppApi);
  return (
    <>
      <section className="useapp-section">
        <div className="container mb-5 useapp-container">
          <div className="row">
            <div className="col-12 col-lg-5 text-center useapp-section-leftside-img">
              <img src="./images/appimg.jpeg" alt="aboutusIMg" />
            </div>

            <div className="col-12 col-lg-7 useapp-section-rightside d-flex justify-content-center align-items-start flex-column">
              <h2 className="mini-title">Quran Tutor App</h2>
              <p className="mini-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                optio rerum beatae sapiente molestias unde doloremque veritatis
                officia nesciunt consequatur magnam vitae recusandae vel
                consectetur, vero voluptas asperiores possimus ullam.
              </p>
              <h3 className="main-heading">How to use the App?</h3>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row useapp-section-info" key={id}>
                      <div className="col-1 useapp-section-number">{id}</div>
                      <div className="col-10 useapp-section-data">
                        <h4 className="useapp-section-title">{title}</h4>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border useapp-button">
                Download App
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UseApp;
