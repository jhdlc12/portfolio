import React from "react";
import "./Project.css";
import miniProject1 from "../images/mini-project1.png";
import miniProject2 from "../images/mini-project2.png";
import miniProject3 from "../images/mini-project3.png";
import portfolio1 from "../images/portfolio1.png";
import digitalclock from "../images/digitalclock.png";

const Project = () => {
  return (
    <div className="project-container">
      <h1>PROJECTS</h1>
      <div className="project-grid">
        <div className="project" id="miniproject1">
          <img src={miniProject1} alt="mini-project1" />
          <div className="overlay">
            <h2>Mini Project 1</h2>
            <p>My first Project in KodeGo</p>
            <p>
              An e-magazine about some tourist destination in the Philippines.
              Used HTML, CSS and Bootsrap.
            </p>
            <div style={{ transform: "scale(2)" }}>
              <a href="https://jhdlc12.github.io/portfolio1/" target="_blank">
                <i class="bi bi-github" style={{ color: "#3c3a53" }}></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project" id="miniproject2">
          <img src={miniProject2} alt="mini-project2" />
          <div className="overlay">
            <h2>Mini Project 2</h2>
            <p>My Second Project in KodeGo</p>
            <p>
              An Job-hunting website for web developers. Used ReactJs, Bootstrap
              and the local storage
            </p>

            <div style={{ transform: "scale(2)" }}>
              <a href="https://jhdlc12.github.io/portfolio1/" target="_blank">
                <i class="bi bi-github" style={{ color: "#3c3a53" }}></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project" id="miniproject3">
          <img src={miniProject3} alt="mini-project3" />
          <div className="overlay">
            <h2>Mini Project 3</h2>
            <p>My Capstone Project in KodeGo</p>
            <p>
              An e-commerce Website that sells gaming consoles,games and
              accesories. Used HTML,CSS, JavaScript,Bootstarp, PHP and MySQL.
            </p>

            <div style={{ transform: "scale(2)" }}>
              <a href="https://jhdlc12.github.io/portfolio1/" target="_blank">
                <i class="bi bi-github" style={{ color: "#3c3a53" }}></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project" id="portfolio1">
          <img src={portfolio1} alt="portfolio1" />
          <div className="overlay">
            <h2>Portfolio 1</h2>
            <p>My First Portfolio</p>
            <p>
              My first portfolio used in my mini project 2. used HTML, CSS and
              javascript.
            </p>

            <div style={{ transform: "scale(2)" }}>
              <a href="https://jhdlc12.github.io/portfolio1/" target="_blank">
                <i class="bi bi-github" style={{ color: "#3c3a53" }}></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project" id="digitalClock">
          <img src={digitalclock} alt="digitalclock" />
          <div className="overlay">
            <h2>Simple Digital Clock</h2>
            <p>My Digital Clock</p>
            <p>A practice project.Used HTML,CSS, JavaScript.</p>

            <div style={{ transform: "scale(2)" }}>
              <a href="https://jhdlc12.github.io/portfolio1/" target="_blank">
                <i class="bi bi-github" style={{ color: "#3c3a53" }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
