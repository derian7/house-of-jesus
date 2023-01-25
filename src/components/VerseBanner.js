import React from "react";
import "./styles/VerseBanner.css";
import KnockImage from "../img/knock.jpg";
import KnockImageL from "../img/knock-landscape.png";

const VerseBanner = () => {
  return (
    <div id="verse-banner">
      <div className="container section-narrow" id="verse-banner-container">
        <div id="verse-banner-verse">
          <h4>
            "The foreigner residing among you must be treated as your
            native-born. Love them as yourself, for you were foreigners in
            Egypt."
          </h4>
          <p>Leviticus 19:34</p>
        </div>
        <div id="verse-banner-art">
          <img src={KnockImage} alt="Jesus knocking door" id='verse-jesus-art'/>
          <img src={KnockImageL} alt="Jesus knocking door" id='verse-jesus-art-landscape'/>
        </div>
      </div>
    </div>
  );
};

export default VerseBanner;
