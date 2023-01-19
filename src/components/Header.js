import React, { useState } from "react";
import "./styles/Header.css";

const Header = () => {
  const [toggleMenu, showMenu] = useState(false);

  // header menu button toggle
  const handleToggle = () => {
    showMenu(!toggleMenu);
  };

  return (
    <header>
      <div className="container-wide header-container">
        <h4 id="header-logo">THE HOUSE OF JESUS</h4>
        <nav id="header-nav-menu">
          <ul class={toggleMenu ? "show-menu" : ""} id="header-nav-links">
            <a href="/" className='header-nav-link'>Home</a>
            <a href="/services" className='header-nav-link'>Services</a>
            <a href="/about" className='header-nav-link'>About</a>
            <a href="/contact" className='header-nav-link'>Contact</a>
            <a href="/donate" className='button-small' id='header-donate-button'>Donate</a>
          </ul>
          <div
            onClick={handleToggle}
            for="burger-toggle"
            class={toggleMenu ? "show-menu" : ""}
            id="header-menu-icon"
          >
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
