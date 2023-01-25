import React from "react";
import "./styles/HomeAboutSection.css";
import GroupChildren from "../img/group-children.jpg"
import SmilingMan from "../img/smiling-man.jpg"
import BGBlob from "../img/blob-2.svg";


const HomeAboutSection = () => {
  return (
    <div id="home-about">
      <div className="container section" id="home-about-container">
        <div id="home-about-art-container">
          <img src={BGBlob} alt="Background decoration" id="home-about-art-bg"/>
          <img src={GroupChildren} id="home-about-art-pic1" alt="group of children"/>
          <img src={SmilingMan} id="home-about-art-pic2" alt="group of children"/>
          <div id="home-about-art-caption">
            <h4>500+</h4>
            <p>Clients have filed with us.</p>
          </div>
        </div>
        <div id="home-about-info">
          <h2>How We're Helping Others</h2>
          <h5>
            Reprehenderit fugiat est adipisicing culpa reprehenderit nostrud non
            aliquip nulla dolor veniam consectetur aute deserunt.
          </h5>
          <p>
            Anim et enim est ullamco esse Lorem id labore labore ea. Dolor et ex
            nisi aute ullamco labore pariatur cupidatat in ullamco consectetur
            duis exercitation. Adipisicing quis consectetur officia irure veniam
            minim velit ullamco cillum et officia.
          </p>
          <a className="button" href='/about' id="home-about-button">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutSection;
