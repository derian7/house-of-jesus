import React from "react";
import "./styles/Footer.css";
import Logo from "../img/logo-blue.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container-wide" id="footer-container">
        <div id="footer-sections-container">
          <div className="footer-section" id="footer-logo-section">
            <img src={Logo} alt="footer logo" id="footer-logo" />
            <p className="footer-quote">
              I slept and dreamt that life was joy. I awoke and saw that life
              was service. I acted and behold, service was joy.
            </p>
            <p className="footer-quote">-Rabindranath Tagore</p>
          </div>
          <div className="footer-section" id="footer-nav">
            <h6>Menu</h6>
            <ul>
              <p>
                <a className="footer-nav-link" href="">
                  Home
                </a>
              </p>
              <p>
                <a className="footer-nav-link" href="">
                  Services
                </a>
              </p>
              <p>
                <a className="footer-nav-link" href="">
                  About
                </a>
              </p>
              <p>
                <a className="footer-nav-link" href="">
                  Contact
                </a>
              </p>
              <p>
                <a className="footer-nav-link" href="">
                  Donate
                </a>
              </p>
            </ul>
          </div>
          <div className="footer-section" id="footer-contact">
            <h6>Contact</h6>
            <p className="footer-contact-address">512 Village Ave</p>
            <p className="footer-contact-address">Lincoln, NE 68503</p>
            <p id="footer-contact-phone">402-405-8577</p>
          </div>
        </div>

        <p id="footer-copyright">
          {"©2023 House of Jesus, a 501(c)(3) Organization."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
