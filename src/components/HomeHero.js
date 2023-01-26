import React from "react";
import "./styles/HomeHero.css";
import HeroImage from "../img/family-1.png";
import BGBlob1 from "../img/blob-1.svg";
import BGBlob2 from "../img/blob-2.svg";
import BGBlob3 from "../img/blob-3.svg";
import BGBlob4 from "../img/blob-4.svg";
import BGBlob5 from "../img/blob-5.svg";

const HomeHero = () => {
  return (
    <div id="home-hero">
      <div className="container-wide" id="home-hero-container">
        <div className="home-hero-half" id="home-hero-info">
          <h1>
            <span className="hero-text-highlight">Opening</span> {" "}
            <span className="hero-text-highlight">doors</span> and changing lives
          </h1>
          <h5>
            We are dedicated to providing immigrants with affordable assistance
            with their forms, applications, and more.
          </h5>
          <a className="button" id="hero-services-button" href="/">
            Services
          </a>
        </div>
        <div className="home-hero-half" id="home-hero-visual">
          <img src={HeroImage} id="home-hero-image" alt="Knock on door" />
          <img
            src={BGBlob1}
            className="hero-bg-blob"
            id="hero-blob-6"
            alt="hero-decoration"
          />
          <img
            src={BGBlob5}
            className="hero-bg-blob"
            id="hero-blob-7"
            alt="hero-decoration"
          />
        </div>
      </div>
      <span id="home-hero-background">
        <img
          src={BGBlob1}
          className="hero-bg-blob"
          id="hero-blob-1"
          alt="hero-decoration"
        />
        <img
          src={BGBlob1}
          className="hero-bg-blob"
          id="hero-blob-2"
          alt="hero-decoration"
        />
        <img
          src={BGBlob4}
          className="hero-bg-blob"
          id="hero-blob-3"
          alt="hero-decoration"
        />
        <img
          src={BGBlob2}
          className="hero-bg-blob"
          id="hero-blob-4"
          alt="hero-decoration"
        />
        <img
          src={BGBlob3}
          className="hero-bg-blob"
          id="hero-blob-5"
          alt="hero-decoration"
        />
      </span>
    </div>
  );
};

export default HomeHero;
