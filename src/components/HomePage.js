import React from "react";
import HomeAbout from './HomeAbout';
import HomeHero from "./HomeHero";
import HomeStatBanner from './HomeStatBanner';

const HomePage = () => {
  return (
    <React.Fragment>
      <HomeHero />
      <HomeStatBanner />
      <HomeAbout />
    </React.Fragment>
  );
};

export default HomePage;
