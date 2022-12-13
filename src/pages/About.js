import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="aboutMe">
        <h1>ABOUT ME</h1>
        <h3>
          A versatile , competent and collaborative Full-stack web developer who
          is proficient in HTML, CSS , Javascript, ReactJs , NodeJs, PHP and
          MySQL. Always seeks a higher knowledge and self-improvements.
        </h3>
        <ul>
          <li>
            <span>FULLNAME:</span> John Harold T. Dela cruz
          </li>
          <li>
            <span>DATE OF BIRTH:</span> Nov. 19, 1992
          </li>
          <li>
            <span>DEGREE:</span> ECE
          </li>
          <li>
            <span>COUNTRY:</span> Philippines
          </li>
          <li>
            <span>CITY:</span> Tarlac City
          </li>
        </ul>
      </div>
      <div className="skills">
        <h1>SKILLS</h1>
        <div className="skills-grid">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JAVASCRIPT</div>
          <div className="skill">REACTJS</div>
          <div className="skill">NODEJS</div>
          <div className="skill">PHP</div>
          <div className="skill">LARAVEL</div>
          <div className="skill">MYSQL</div>
          <div className="skill">FIGMA</div>
        </div>
      </div>
      <div className="educ-exp">
        <div className="educ-exp-inner">
          <div className="education">
            <h2>EDUCATION</h2>
            <div className="educ-contents">
              <div className="educ-content">
                <p className="school">SAINT LOUIS UNVERSITY</p>
                <p
                  style={{
                    fontStyle: "italic",
                    fontWeight: "100",
                    fontSize: "small",
                  }}
                >
                  2009-2014
                </p>
                <br />
                <p>Bachelor of Science in Electronics Engineering</p>
              </div>
              <div className="educ-content">
                <p className="school">KodeGo Bootcamp</p>
                <p
                  style={{
                    fontStyle: "italic",
                    fontWeight: "100",
                    fontSize: "small",
                  }}
                >
                  Sept 2022-Dec 2022
                </p>
                <br />
                <p>Full-stack Web Development</p>
              </div>
            </div>
          </div>
          <div className="experience">
            <h2>JOB EXPERIENCE</h2>
            <div className="exp-contents">
              <div className="exp-content">
                <p className="job">HI-Tech Cable TV Inc. (Converge ICT)</p>
                <p
                  style={{
                    fontStyle: "italic",
                    fontWeight: "100",
                    fontSize: "small",
                  }}
                >
                  2018-2019
                </p>
                <br />
                <p>Fiber Optic Network Technician</p>
              </div>
              <div className="exp-content">
                <p className="job">CDx Laboratory Product Center</p>
                <p
                  style={{
                    fontStyle: "italic",
                    fontWeight: "100",
                    fontSize: "small",
                  }}
                >
                  2018-2019
                </p>
                <br />
                <p>Field Service Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
