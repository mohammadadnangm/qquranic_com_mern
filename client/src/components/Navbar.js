import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import { NavDropdown } from "react-bootstrap";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
  return (
    <div>
      <div className="NavbarMainDiv">
        <div class="nav">
          <input type="checkbox" id="nav-check" />
          <div class="nav-header">
            <div class="nav-title">Q Quranic</div>
          </div>
          <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div class="nav-links">
            <Link className="CustomLink" to="">
              Github
            </Link>
            <Link className="CustomLink" to="">
              Stackoverflow
            </Link>
            <Link className="CustomLink" to="">
              LinkedIn
            </Link>
            <Link className="CustomLink" to="">
              Codepen
            </Link>
            <Link className="CustomLink" to="">
              JsFiddle
            </Link>
          </div>
        </div>
      </div>
      <img
        className="HeadImage"
        src="https://images.pexels.com/photos/908055/pexels-photo-908055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </div>
  );
};

export default Navbar;
