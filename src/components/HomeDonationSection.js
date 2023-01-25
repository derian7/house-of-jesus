import React from "react";
import "./styles/HomeDonationSection.css";
import DonationImage from "../img/family-2.jpg";
import DonationDecoration from "../img/blob-green.svg";
import DonationIcon from "../img/donation-icon.png";
import FriendIcon from "../img/friendship-icon.png";

const HomeDonationSection = () => {
  return (
    <div id="home-donation-section">
      <div className="container section" id="home-donation-container">
        <div id="home-donation-info">
          <h2>How You Can Help</h2>
          <h5>Amet sint incididunt eiusmod tempor deserunt quis.</h5>
          <div className="donation-point">
            <img alt="donation icon" className="small-icon" src={DonationIcon}/>
            <p>
              Laborum id aliqua eu deserunt mollit duis voluptate Lorem eiusmod
              eiusmod eu ut culpa. Ea excepteur ex elit dolor fugiat laboris
              anim. Culpa exercitation ut velit tempor do nulla elit enim Lorem
              sit Lorem.
            </p>
          </div>
          <div className="donation-point">
            <img alt="friend icon" className="small-icon" src={FriendIcon}/>
            <p>
              Laborum id aliqua eu deserunt mollit duis voluptate Lorem eiusmod
              eiusmod eu ut culpa. Ea excepteur ex elit dolor fugiat laboris
              anim. Culpa exercitation ut velit tempor do nulla elit enim Lorem
              sit Lorem.
            </p>
          </div>
          <a className="button" id='donate-section-button' href='/'>Donate</a>
        </div>
        <div id="home-donation-art">
          <img
            src={DonationImage}
            alt="Man holding granddaughter"
            id="donation-image"
          />
          <img
            src={DonationDecoration}
            alt="Background Decoration"
            id="donation-decoration"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeDonationSection;
