import React from "react";
import "./styles/HomeHero.css";
import HeroImage from "../img/family-1.png";

const HomeHero = () => {
  return (
    <div id="home-hero">
      <div className="container-wide" id="home-hero-container">
        <div className="home-hero-half" id="home-hero-info">
          <h1>The power to choose in your hands</h1>
          <h5>
            Quis minim deserunt mollit consequat cillum et pariatur adipisicing
            qui nisi ad.
          </h5>
          <a className="button" id="hero-services-button" href="/">
            Services
          </a>
        </div>
        <div className="home-hero-half" id="home-hero-visual">
          <img src={HeroImage} id="home-hero-image" alt="Knock on door" />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
