import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-inner">
        <div className="contact-info">
          <h1>Contact Me</h1>
          <h3>
            I'm currently open to new employment opportunities and I love side
            projects. Let's collaborate!
          </h3>
          <ul className="info">
            <li>
              <i class="bi bi-telephone-fill"></i>
              <span> +63-928-430-9222</span>
            </li>
            <li>
              <i class="bi bi-house-fill"></i>
              <span>
                Chestnut drive Capitol Garden Gate III San Roque Tarlac City.
              </span>
            </li>
            <li>
              <i class="bi bi-envelope-fill"></i>
              <span> jhdc12@gmail.com</span>
            </li>
          </ul>
          <ul className="social">
            <li>
              <a
                href="https://www.facebook.com/harold.delacruz.1614/"
                target="_blank"
              >
                <i class="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/jhdlc_12/" target="_blank">
                <i class="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/john-harold-dela-cruz-30a25a25a/"
                target="_blank"
              >
                <i class="bi bi-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/jhdlc12" target="_blank">
                <i class="bi bi-github"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <form className="form-grid">
            <h1>Message Me</h1>
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="email" name="email" id="email" placeholder="Email" />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
            <textarea
              rows="100"
              cols="100"
              id="message"
              placeholder="Message"
            ></textarea>
            <div className="send">
              <input type="Submit" name="send" value="Send" id="send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
