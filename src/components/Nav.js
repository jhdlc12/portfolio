import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

import "./Nav.css";
const Nav = () => {
  const navRef = useRef();
  const openRef = useRef();
  const closeRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("active");
    openRef.current.classList.toggle("active");
    closeRef.current.classList.toggle("active");
  };
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">JH</div>
        <ul className="nav-tab" ref={navRef}>
          <li>
            <Link className="nav-menu" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="nav-menu" to="/About">
              ABOUT
            </Link>
          </li>
          <li>
            <Link className="nav-menu" to="/Project">
              PROJECT
            </Link>
          </li>
          <li>
            <Link className="nav-menu" to="/Contact">
              CONTACT
            </Link>
          </li>
        </ul>
        <a href="#" className="hamburger" onClick={showNavBar} ref={openRef}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </a>
        <a href="#" className="close" onClick={showNavBar} ref={closeRef}>
          <h1>&times;</h1>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
