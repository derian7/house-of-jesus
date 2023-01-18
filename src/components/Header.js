import React from "react";
import "./styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="container-wide header-container">
        <h4 className="header-logo">THE HOUSE OF JESUS</h4>
        <nav className="header-nav-menu">
          <ul className='header-nav-links-container'>
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/donate">Donate</a>
          </ul>
          <div className='header-menu-icon'>
            <input type="checkbox" id="burger-toggle" />
            <label for="burger-toggle" class="burger-menu">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </label>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
