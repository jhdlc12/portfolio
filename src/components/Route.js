import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";

const Routing = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Project" element={<Project />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
