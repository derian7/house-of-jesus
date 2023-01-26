import React, { useEffect, useState } from "react";
import "./styles/Header.css";
import HeaderLogo from "../img/house-of-jesus-logo.svg";

const Header = () => {
  const [toggleMenu, showMenu] = useState(false);
  const [hasScrolled, setScroll] = useState(false);

  // react effect to shrink header when scrolled
  useEffect(() => {
    const handler = () => {
      setScroll((hasScrolled) => {
        if (
          !hasScrolled &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }

        if (
          hasScrolled &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }
        return hasScrolled;
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // header menu button toggle
  const handleToggle = () => {
    showMenu(!toggleMenu);
  };

  return (
    <header className={hasScrolled ? "header-scrolled" : ""}>
      <div className="container-wide header-container">
        <img
          id="header-logo"
          src={HeaderLogo}
          alt="Header Icon"
          className={hasScrolled ? "header-scrolled" : ""}
        />
        <nav id="header-nav-menu">
          <ul class={toggleMenu ? "show-menu" : ""} id="header-nav-links">
            <a href="" className="header-nav-link">
              Home
            </a>
            <a href="" className="header-nav-link">
              Services
            </a>
            <a href="" className="header-nav-link">
              About
            </a>
            <a href="" className="header-nav-link">
              Contact
            </a>
            <a href="" className="button-small" id="header-donate-button">
              Donate
            </a>
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
