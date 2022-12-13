import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";
const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">JH</div>
        <ul className="nav-tab">
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
      </div>
    </nav>
  );
};

export default Nav;
