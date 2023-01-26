import React from "react";
import "./styles/HomeAboutSection.css";
import GroupChildren from "../img/group-children.jpg";
import SmilingMan from "../img/smiling-man.jpg";
import BGBlob from "../img/blob-2.svg";

const HomeAboutSection = () => {
  return (
    <div id="home-about">
      <div className="container section" id="home-about-container">
        <div id="home-about-art-container">
          <img
            src={BGBlob}
            alt="Background decoration"
            id="home-about-art-bg"
          />
          <img
            src={GroupChildren}
            id="home-about-art-pic1"
            alt="group of children"
          />
          <img
            src={SmilingMan}
            id="home-about-art-pic2"
            alt="group of children"
          />
          <div id="home-about-art-caption">
            <h4>500+</h4>
            <p>Clients have filed with us.</p>
          </div>
        </div>
        <div id="home-about-info">
          <h2>How We're Helping Others</h2>
          <h5>
            It is our goal to give a voice to those who feel voiceless in our
            community. It's our mission to help those people find their
            American Dream.
          </h5>
          <p>
            The House of Jesus is a nonprofit organization dedicated to helping
            immigrants navigate the complex and often overwhelming process of
            immigration. We offer a wide range of services, including assistance
            with forms and applications, guidance, and support throughout the
            entire process. Our goal is to make the journey to a new life in the
            United States as smooth and stress-free as possible for all people,
            regardless of their background or circumstances. Join us in opening
            these doors and help many people take their first
            step towards their dreams.
          </p>
          <a className="button" href="/" id="home-about-button">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutSection;
