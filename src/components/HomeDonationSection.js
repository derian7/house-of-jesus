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
          <h5>
            Many people in our community feel like they have no voice because of
            their legal status. You can change that!
          </h5>
          <div className="donation-point">
            <img
              alt="donation icon"
              className="small-icon"
              src={DonationIcon}
            />
            <p>
              One way to support the mission of The House of Jesus is through
              financial donations. Your donation will help us continue to
              provide affordable assistance and guidance to immigrants. Every
              small donation counts and your support will go towards providing
              vital services such as assistance with forms, applications, and
              community outreach to those in the Nebraska and Iowa area. Your
              donation is tax-deductible and will make a real impact in the
              lives of many people.
            </p>
          </div>
          <div className="donation-point">
            <img alt="friend icon" className="small-icon" src={FriendIcon} />
            <p>
              Another way to help is by being kind and supportive to our fellow
              immigrants in our community. This can be as simple as offering a
              listening ear, helping with transportation, providing information
              about resources, and standing up for them. By being an ally, you
              give them a voice and will be an important part of a community
              that welcomes and supports our new neighbors.
            </p>
          </div>
          <a className="button" id="donate-section-button" href="/">
            Donate
          </a>
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
