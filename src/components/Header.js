import React, { useState } from "react";
import "./styles/Header.css";
import HeaderLogo from "../img/house-of-jesus-logo.svg"

const Header = () => {
  const [toggleMenu, showMenu] = useState(false);

  // header menu button toggle
  const handleToggle = () => {
    showMenu(!toggleMenu);
  };

  return (
    <header>
      <div className="container-wide header-container">
        <img id="header-logo" src={HeaderLogo}/>
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
